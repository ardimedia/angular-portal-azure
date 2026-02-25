import { Injectable, signal, computed, WritableSignal } from '@angular/core';
import { BladeDefinition } from '../models/blade.model';
import { BladeParameter } from '../models/blade-parameter.model';
import { PanoramaDefinition, createPanorama, PositionedTile, layoutTiles } from '../models/panorama.model';
import { NotificationDefinition, createNotificationPanel } from '../models/notification.model';
import { AvatarMenuDefinition, AvatarMenuItem, createAvatarMenu } from '../models/avatar-menu.model';
import { TileDefinition } from '../models/tile-definition.model';
import { UserAccount } from '../models/user-account.model';
import { PortalConfig } from '../models/portal-config.model';

/**
 * Central state service for the angular-portal-azure library.
 * Replaces v0.2.346's PortalService + Panorama + AreaNotification state.
 *
 * All state is managed via Angular signals for reactive updates.
 */
@Injectable({ providedIn: 'root' })
export class PortalService {
  /** The blade stack — ordered left-to-right */
  readonly blades: WritableSignal<BladeDefinition[]> = signal([]);

  /** Panorama (startboard/dashboard) state */
  readonly panorama: WritableSignal<PanoramaDefinition> = signal(createPanorama(''));

  /** Notification panel state */
  readonly notification: WritableSignal<NotificationDefinition> = signal(createNotificationPanel());

  /** Avatar menu state */
  readonly avatarMenu: WritableSignal<AvatarMenuDefinition> = signal(createAvatarMenu());

  /** Shared parameter for passing data between blades */
  readonly parameter: WritableSignal<BladeParameter> = signal({ action: 'none', itemId: 0 });

  /** Portal theme identifier */
  readonly theme: WritableSignal<string> = signal('azure-blue');

  /** Whether the panorama is visible (true when no blades are open) */
  readonly isPanoramaVisible = computed(() => this.blades().length === 0);

  /** Number of open blades */
  readonly bladeCount = computed(() => this.blades().length);

  /** Positioned tiles with layout coordinates */
  readonly positionedTiles = computed(() => {
    const pano = this.panorama();
    return pano.tiles;
  });

  /**
   * Initialize the portal with configuration.
   * Called by providePortalAzure() during app bootstrap.
   */
  configure(config: PortalConfig): void {
    this.panorama.update((p) => ({
      ...p,
      title: config.title,
      tiles: config.tiles ? layoutTiles(config.tiles) : [],
      isTilesLoaded: !!config.tiles,
      showTiles: true,
    }));

    if (config.userAccount) {
      this.avatarMenu.update((m) => ({
        ...m,
        userAccount: config.userAccount!,
      }));
    }

    if (config.theme) {
      this.theme.set(config.theme);
    }
  }

  /** Update the portal title */
  setTitle(title: string): void {
    this.panorama.update((p) => ({ ...p, title }));
  }

  /** Update the user account */
  setUserAccount(userAccount: UserAccount): void {
    this.avatarMenu.update((m) => ({ ...m, userAccount }));
  }

  /** Set tiles on the startboard */
  setTiles(tiles: TileDefinition[]): void {
    this.panorama.update((p) => ({
      ...p,
      tiles: layoutTiles(tiles),
      isTilesLoaded: true,
    }));
  }

  /** Set blade parameter for inter-blade communication */
  setParameter(param: Partial<BladeParameter>): void {
    this.parameter.update((p) => ({ ...p, ...param }));
  }

  /** Clear the blade parameter back to defaults */
  clearParameter(): void {
    this.parameter.set({ action: 'none', itemId: 0 });
  }

  // --- Notification panel ---

  /** Show the notification panel */
  showNotification(path: string, width: number = 250): void {
    this.notification.update((n) => ({
      ...n,
      path,
      width,
      isVisible: true,
    }));
  }

  /** Hide the notification panel */
  hideNotification(): void {
    this.notification.update((n) => ({
      ...n,
      path: '',
      isVisible: false,
    }));
  }

  // --- Avatar menu ---

  /** Toggle avatar menu open/close */
  toggleAvatarMenu(): void {
    this.avatarMenu.update((m) => ({ ...m, isOpen: !m.isOpen }));
  }

  /** Close avatar menu */
  closeAvatarMenu(): void {
    this.avatarMenu.update((m) => ({ ...m, isOpen: false }));
  }

  /** Set avatar menu items */
  setAvatarMenuItems(items: AvatarMenuItem[]): void {
    this.avatarMenu.update((m) => ({ ...m, items }));
  }
}
