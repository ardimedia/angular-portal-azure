import { Injectable, inject } from '@angular/core';
import { PortalService } from './portal.service';
import { BladeDefinition, createBlade, AddBladeEventArgs } from '../models/blade.model';
import { BladeRegistry } from './blade-registry.service';

/**
 * Blade stack management service.
 * Replaces v0.2.346's AreaBlades class.
 *
 * Manages the blade stack: adding, removing, cascade-closing,
 * and panorama visibility toggling.
 *
 * When a BladeRegistry is available, metadata (title, width) from the
 * registry is used as defaults — explicit arguments take precedence.
 */
@Injectable({ providedIn: 'root' })
export class BladeService {
  private readonly portal = inject(PortalService);
  private readonly registry = inject(BladeRegistry);

  /**
   * Set the first blade (e.g., when opening a top-level item from a tile).
   * Clears all existing blades, hides panorama, and adds the new blade.
   *
   * Ported from AreaBlades.setFirstBlade() in v0.2.346.
   */
  setFirstBlade(path: string, title: string = '', width?: number): BladeDefinition {
    this.portal.blades.set([]);
    const entry = this.registry.getEntry(path);
    const blade = createBlade(
      path.toLowerCase(),
      title || entry?.title || path,
      width ?? entry?.width ?? 315,
    );
    this.portal.blades.set([blade]);
    return blade;
  }

  /**
   * Add a blade to the stack. If senderPath is provided, all blades
   * after the sender are removed first (cascade close).
   *
   * Ported from AreaBlades.addBlade() in v0.2.346.
   */
  addBlade(path: string, senderPath: string = '', title: string = '', width?: number): BladeDefinition | undefined {
    if (!path) return undefined;

    const normalizedPath = path.toLowerCase();
    const blades = this.portal.blades();

    // Check if blade already exists
    const existing = blades.find((b) => b.path === normalizedPath);
    if (existing) {
      return existing;
    }

    // Cascade close: remove blades after the sender
    if (senderPath) {
      this.clearChild(senderPath);
    }

    const entry = this.registry.getEntry(normalizedPath);
    const blade = createBlade(
      normalizedPath,
      title || entry?.title || normalizedPath,
      width ?? entry?.width ?? 315,
    );
    this.portal.blades.update((b) => [...b, blade]);
    return blade;
  }

  /**
   * Open a blade from a navigation event (e.g., tile click, nav item click).
   * Wraps addBlade with AddBladeEventArgs for compatibility.
   */
  openBlade(args: AddBladeEventArgs, title: string = '', width?: number): BladeDefinition | undefined {
    return this.addBlade(args.path, args.pathSender, title, width);
  }

  /**
   * Clear all blades. Shows panorama if appropriate.
   * Ported from AreaBlades.clearAll() in v0.2.346.
   */
  clearAll(): void {
    this.portal.blades.set([]);
  }

  /**
   * Remove a specific blade and all blades to its right.
   * This is what happens when a blade is closed.
   *
   * Ported from AreaBlades.clearPath() in v0.2.346.
   */
  clearPath(path: string): void {
    const normalizedPath = path.toLowerCase();
    const blades = this.portal.blades();
    const index = blades.findIndex((b) => b.path === normalizedPath);

    if (index >= 0) {
      this.portal.blades.set(blades.slice(0, index));
    } else {
      // Check notification area
      const notif = this.portal.notification();
      if (notif.path === normalizedPath) {
        this.portal.hideNotification();
      }
    }
  }

  /**
   * Remove all blades AFTER a given path (keeps the blade itself).
   * Used for cascade close when a blade opens a child.
   *
   * Ported from AreaBlades.clearChild() in v0.2.346.
   */
  clearChild(path: string): void {
    if (!path) return;

    const normalizedPath = path.toLowerCase();
    const blades = this.portal.blades();
    const index = blades.findIndex((b) => b.path === normalizedPath);

    if (index >= 0) {
      this.portal.blades.set(blades.slice(0, index + 1));
    }
  }

  /**
   * Remove blades at and beyond a specific 1-based level.
   * Ported from AreaBlades.clearLevel() in v0.2.346.
   */
  clearLevel(level: number): void {
    const adjustedLevel = level <= 0 ? 1 : level;
    const blades = this.portal.blades();
    if (adjustedLevel <= blades.length) {
      this.portal.blades.set(blades.slice(0, adjustedLevel - 1));
    }
  }

  /**
   * Remove only the last (rightmost) blade.
   * Ported from AreaBlades.clearLastLevel() in v0.2.346.
   */
  clearLastLevel(): void {
    const blades = this.portal.blades();
    if (blades.length > 0) {
      this.portal.blades.set(blades.slice(0, -1));
    }
  }

  /**
   * Close a specific blade by its definition reference.
   * Removes the blade and all blades to its right.
   */
  closeBlade(blade: BladeDefinition): void {
    this.clearPath(blade.path);
  }

  /**
   * Get a blade by path, if it exists in the stack.
   */
  getBlade(path: string): BladeDefinition | undefined {
    return this.portal.blades().find((b) => b.path === path.toLowerCase());
  }

  /**
   * Check if a blade with the given path is currently open.
   */
  isBladeOpen(path: string): boolean {
    return this.portal.blades().some((b) => b.path === path.toLowerCase());
  }
}
