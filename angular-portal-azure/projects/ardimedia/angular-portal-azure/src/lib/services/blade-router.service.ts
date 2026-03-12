import { Injectable, inject, effect, DestroyRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { PortalService } from './portal.service';
import { BladeRegistry } from './blade-registry.service';
import { BladeDefinition, createBlade } from '../models/blade.model';

/**
 * Optional service that syncs the blade stack with the browser URL.
 *
 * When enabled, blade paths are stored as URL path segments with matrix params:
 *   `/crm/customers/list/detail;id=1`
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
    // Sync: blade stack changes → URL path segments
    effect(() => {
      const blades = this.portal.blades();
      if (this._syncingFromUrl) return;
      if (blades.length === 0 && !this._initialRestoreDone) return;

      const routePrefix = this.getRoutePrefix();
      const bladePath = this.encodeBladesToPath(blades);
      const targetUrl = bladePath ? `/${routePrefix}/${bladePath}` : `/${routePrefix}`;

      const currentPath = this.router.url.split('?')[0].split(';')[0];
      // Only navigate if the path actually changed (avoid loops)
      if (this.normalizeUrl(currentPath) !== this.normalizeUrl(targetUrl)) {
        this.router.navigateByUrl(targetUrl);
      }
    });

    // Sync: URL path segments → blade stack (on NavigationEnd)
    const sub = this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e) => {
        this._initialRestoreDone = true;
        const url = (e as NavigationEnd).urlAfterRedirects;

        // Backward compat: handle legacy ?blades= query param
        const legacyParam = this.extractLegacyBladesParam(url);
        if (legacyParam !== null) {
          this.handleLegacyUrl(legacyParam);
          return;
        }

        this.restoreFromPath(url);
      });
    this.destroyRef.onDestroy(() => sub.unsubscribe());
  }

  /**
   * Encode the blade stack into URL path segments.
   * Each blade contributes its "short name" (suffix after parent prefix).
   * Blades with params get Angular matrix params appended.
   *
   * Example: [customers, customers/list, customers/detail{id:1}]
   *   → "customers/list/detail;id=1"
   */
  private encodeBladesToPath(blades: BladeDefinition[]): string {
    if (blades.length === 0) return '';

    const segments: string[] = [];
    const allPaths: string[] = [];

    for (const blade of blades) {
      // Compute short name: strip the longest matching ancestor prefix
      let shortName = blade.path;
      for (let i = allPaths.length - 1; i >= 0; i--) {
        if (blade.path.startsWith(allPaths[i] + '/')) {
          shortName = blade.path.substring(allPaths[i].length + 1);
          break;
        }
      }

      // Append matrix params if any
      let segment = shortName;
      if (blade.params && Object.keys(blade.params).length > 0) {
        const paramStr = Object.entries(blade.params)
          .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
          .join(';');
        segment += ';' + paramStr;
      }

      segments.push(segment);
      allPaths.push(blade.path);
    }

    return segments.join('/');
  }

  /**
   * Decode URL path segments into blade definitions.
   * Resolves short segment names to full blade paths using the registry.
   *
   * Example: "customers/list/detail;id=1" with route prefix "crm"
   *   → [customers, customers/list, customers/detail] with detail.params={id:'1'}
   */
  private decodeBladesFromPath(pathAfterPrefix: string): BladeDefinition[] {
    if (!pathAfterPrefix) return [];

    const rawSegments = pathAfterPrefix.split('/').filter(Boolean);
    const blades: BladeDefinition[] = [];
    const resolvedPaths: string[] = [];

    for (const rawSegment of rawSegments) {
      // Parse matrix params from segment: "detail;id=1" → name="detail", params={id:'1'}
      const { name, params } = this.parseSegment(rawSegment);

      // Resolve short name to full blade path
      const fullPath = this.resolveSegment(name, resolvedPaths);
      if (!fullPath) {
        console.warn(`[BladeRouter] Could not resolve segment "${name}" to a registered blade path`);
        continue;
      }

      const entry = this.registry.getEntry(fullPath);
      const blade = createBlade(
        fullPath,
        entry?.title ?? fullPath,
        entry?.width ?? 315,
        params,
      );
      blades.push(blade);
      resolvedPaths.push(fullPath);
    }

    return blades;
  }

  /**
   * Parse a URL segment into its name and matrix parameters.
   * "detail;id=1;mode=edit" → { name: "detail", params: { id: "1", mode: "edit" } }
   */
  private parseSegment(segment: string): { name: string; params: Record<string, string> } {
    const parts = segment.split(';');
    const name = decodeURIComponent(parts[0]);
    const params: Record<string, string> = {};

    for (let i = 1; i < parts.length; i++) {
      const eqIndex = parts[i].indexOf('=');
      if (eqIndex > 0) {
        const key = decodeURIComponent(parts[i].substring(0, eqIndex));
        const value = decodeURIComponent(parts[i].substring(eqIndex + 1));
        params[key] = value;
      }
    }

    return { name, params };
  }

  /**
   * Resolve a short segment name to a full blade path using the registry.
   * Tries parent/segment first, then walks up ancestors.
   */
  private resolveSegment(name: string, previousPaths: string[]): string | null {
    // Direct match: the segment itself is a registered path
    if (this.registry.has(name)) {
      return name.toLowerCase();
    }

    // Try prepending each previous blade path (most recent first)
    for (let i = previousPaths.length - 1; i >= 0; i--) {
      const candidate = previousPaths[i] + '/' + name;
      if (this.registry.has(candidate)) {
        return candidate.toLowerCase();
      }
    }

    return null;
  }

  /** Restore blade stack from a path-based URL */
  private restoreFromPath(url: string): void {
    const routePrefix = this.getRoutePrefix();
    const path = url.split('?')[0]; // strip query params
    const prefixPattern = '/' + routePrefix;

    if (!path.startsWith(prefixPattern)) return;

    const pathAfterPrefix = path.substring(prefixPattern.length + 1); // +1 for trailing /
    const newBlades = this.decodeBladesFromPath(pathAfterPrefix);
    const currentPaths = this.portal.blades().map((b) => b.path);
    const newPaths = newBlades.map((b) => b.path);

    // Skip if blade stack already matches (paths and params)
    if (
      newPaths.length === currentPaths.length &&
      newPaths.every((p, i) => p === currentPaths[i]) &&
      this.paramsMatch(newBlades, this.portal.blades())
    ) {
      return;
    }

    this._syncingFromUrl = true;
    this.portal.blades.set(newBlades);

    // Restore parameter signal for backward compat (from deepest blade with params)
    const deepestWithParams = [...newBlades].reverse().find((b) => Object.keys(b.params).length > 0);
    if (deepestWithParams && deepestWithParams.params['id']) {
      this.portal.setParameter({
        action: 'edit',
        itemId: Number(deepestWithParams.params['id']) || 0,
      });
    }

    queueMicrotask(() => (this._syncingFromUrl = false));
  }

  /** Check if params match between two blade arrays */
  private paramsMatch(a: BladeDefinition[], b: BladeDefinition[]): boolean {
    if (a.length !== b.length) return false;
    return a.every((blade, i) => {
      const aKeys = Object.keys(blade.params);
      const bKeys = Object.keys(b[i].params);
      if (aKeys.length !== bKeys.length) return false;
      return aKeys.every((k) => blade.params[k] === b[i].params[k]);
    });
  }

  /** Get the route prefix from the current URL (e.g., 'crm' from '/crm/...') */
  private getRoutePrefix(): string {
    const url = this.router.url.split('?')[0];
    const firstSegment = url.split('/').filter(Boolean)[0] ?? '';
    return firstSegment.split(';')[0];
  }

  /** Normalize URL for comparison (strip trailing slashes) */
  private normalizeUrl(url: string): string {
    return url.replace(/\/+$/, '') || '/';
  }

  // --- Legacy backward compatibility ---

  /** Extract legacy `blades` query parameter from URL */
  private extractLegacyBladesParam(url: string): string | null {
    const qIndex = url.indexOf('?');
    if (qIndex === -1) return null;
    const params = new URLSearchParams(url.substring(qIndex));
    return params.get('blades');
  }

  /** Handle legacy ?blades= URL by redirecting to new path format */
  private handleLegacyUrl(bladesParam: string): void {
    const paths = bladesParam.split(',').filter(Boolean);
    if (paths.length === 0) return;

    // Create temporary blades to encode
    const blades = paths.map((path) => {
      const entry = this.registry.getEntry(path);
      return createBlade(path, entry?.title ?? path, entry?.width ?? 315);
    });

    const routePrefix = this.getRoutePrefix();
    const bladePath = this.encodeBladesToPath(blades);
    const newUrl = bladePath ? `/${routePrefix}/${bladePath}` : `/${routePrefix}`;

    // Redirect to new format
    this.router.navigateByUrl(newUrl, { replaceUrl: true });
  }
}
