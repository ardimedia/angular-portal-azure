import { Injectable, inject, effect, DestroyRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PortalService } from './portal.service';
import { BladeRegistry } from './blade-registry.service';
import { createBlade } from '../models/blade.model';

/**
 * Optional service that syncs the blade stack with the browser URL.
 *
 * When enabled, blade paths are stored as a comma-separated query parameter:
 *   `?blades=customers,customers/list,customers/1`
 *
 * This makes blade states bookmarkable, shareable, and back-button navigable.
 *
 * Opt-in: add `provideBladeRouter()` to your app providers alongside `provideRouter()`.
 * Without it, blade navigation remains purely in-memory (no URL changes).
 */
@Injectable()
export class BladeRouterService {
  private readonly router = inject(Router);
  private readonly portal = inject(PortalService);
  private readonly registry = inject(BladeRegistry);
  private readonly destroyRef = inject(DestroyRef);

  private _syncingFromUrl = false;
  private _initialRestoreDone = false;

  constructor() {
    // Sync: blade stack changes → URL query params
    // Uses parseUrl/navigateByUrl to preserve the current path (e.g. /crm)
    effect(() => {
      const paths = this.portal.blades().map((b) => b.path);
      if (this._syncingFromUrl) return;
      // Don't clear URL params before the initial restore from NavigationEnd
      if (paths.length === 0 && !this._initialRestoreDone) return;

      const tree = this.router.parseUrl(this.router.url);
      const param = paths.length ? paths.join(',') : null;
      if (param) {
        tree.queryParams = { ...tree.queryParams, blades: param };
      } else {
        const { blades: _, ...rest } = tree.queryParams;
        tree.queryParams = rest;
      }
      this.router.navigateByUrl(tree);
    });

    // Sync: URL query params → blade stack (on NavigationEnd)
    const sub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
        this._initialRestoreDone = true;
        const param = this.extractBladesParam((e as NavigationEnd).urlAfterRedirects);
        if (param === null) return;
        this.restoreFromUrl(param);
      });
    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }

  /** Extract `blades` query parameter directly from the URL string */
  private extractBladesParam(url: string): string | null {
    const qIndex = url.indexOf('?');
    if (qIndex === -1) return null;
    const params = new URLSearchParams(url.substring(qIndex));
    return params.get('blades');
  }

  private restoreFromUrl(param: string): void {
    const paths = param ? param.split(',').filter(Boolean) : [];
    const currentPaths = this.portal.blades().map((b) => b.path);

    // Skip if blade stack already matches
    if (
      paths.length === currentPaths.length &&
      paths.every((p, i) => p === currentPaths[i])
    ) {
      return;
    }

    this._syncingFromUrl = true;
    const blades = paths.map((path) => {
      const entry = this.registry.getEntry(path);
      return createBlade(path, entry?.title ?? path, entry?.width ?? 315);
    });
    this.portal.blades.set(blades);
    // Keep flag true until after the effect runs (microtask) to prevent
    // the blades→URL effect from triggering a redundant navigation
    queueMicrotask(() => (this._syncingFromUrl = false));
  }
}
