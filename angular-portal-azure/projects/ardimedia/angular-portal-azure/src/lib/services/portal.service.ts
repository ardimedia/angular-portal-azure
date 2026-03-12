import { Injectable, signal, computed, WritableSignal } from '@angular/core';
import { BladeDefinition } from '../models/blade.model';
import { BladeParameter } from '../models/blade-parameter.model';
import { PanoramaDefinition, createPanorama, PositionedTile, layoutTiles } from '../models/panorama.model';
import { NotificationDefinition, createNotificationPanel } from '../models/notification.model';
import { AvatarMenuDefinition, AvatarMenuItem, createAvatarMenu } from '../models/avatar-menu.model';
import { TileDefinition } from '../models/tile-definition.model';
import { UserAccount } from '../models/user-account.model';
import { PortalConfig } from '../models/portal-config.model';
import { PortalLabels, DEFAULT_LABELS, LANGUAGE_PRESETS } from '../models/portal-labels.model';

/**
 * Central state service for the angular-portal-azure library.
 * Replaces v0.2.346's PortalService + Panorama + AreaNotification state.
 *
 * All state is managed via Angular signals for reactive updates.
 */
@Injectable({ providedIn: 'root' })
export class PortalService {
  private static readonly LANG_STORAGE_KEY = 'apa-language';

  /** Localization labels (defaults to German/de-CH, override via PortalConfig.labels) */
  readonly labels: WritableSignal<PortalLabels> = signal({ ...DEFAULT_LABELS });

  /** Current language code */
  readonly currentLanguage: WritableSignal<string> = signal('de-CH');

  /** Whether the settings dropdown is open */
  readonly isSettingsOpen: WritableSignal<boolean> = signal(false);

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

  /** Consumer label overrides from PortalConfig — re-applied on every language switch */
  private _configLabelOverrides: Partial<PortalLabels> = {};

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

    // Store consumer label overrides for re-application on language switch
    if (config.labels) {
      this._configLabelOverrides = config.labels;
    }

    // Determine initial language: localStorage → config → browser → default
    const stored = typeof localStorage !== 'undefined'
      ? localStorage.getItem(PortalService.LANG_STORAGE_KEY)
      : null;
    const langCode = stored || config.language || this.detectBrowserLanguage();
    this.setLanguage(langCode);
  }

  // --- Language ---

  /** Switch the active language. Persists to localStorage. */
  setLanguage(code: string): void {
    const preset = LANGUAGE_PRESETS.get(code);
    if (!preset) {
      console.warn(`[PortalService] Unknown language "${code}", falling back to de-CH`);
      this.setLanguage('de-CH');
      return;
    }
    this.currentLanguage.set(code);
    this.labels.set({ ...preset.labels, ...this._configLabelOverrides });
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(PortalService.LANG_STORAGE_KEY, code);
    }
  }

  /** Detect language from browser, match to closest preset. */
  private detectBrowserLanguage(): string {
    if (typeof navigator === 'undefined') return 'de-CH';
    const browserLang = navigator.language; // e.g. 'de-CH', 'en-US', 'fr'

    // Exact match
    if (LANGUAGE_PRESETS.has(browserLang)) return browserLang;

    // Base language match (e.g. 'en-US' → 'en', 'de-AT' → 'de-CH')
    const base = browserLang.split('-')[0];
    for (const key of LANGUAGE_PRESETS.keys()) {
      if (key === base || key.startsWith(base + '-')) return key;
    }

    return 'de-CH';
  }

  // --- Settings dropdown ---

  /** Toggle settings dropdown. Closes avatar menu if opening. */
  toggleSettings(): void {
    const willOpen = !this.isSettingsOpen();
    this.isSettingsOpen.set(willOpen);
    if (willOpen) this.closeAvatarMenu();
  }

  /** Close settings dropdown */
  closeSettings(): void {
    this.isSettingsOpen.set(false);
  }

  /** Update the portal title */
  setTitle(title: string): void {
    this.panorama.update((p) => ({ ...p, title }));
  }

  /** Update the user account */
  setUserAccount(userAccount: UserAccount): void {
    this.avatarMenu.update((m) => ({ ...m, userAccount }));
  }

  /** Clear all blades and return to panorama */
  clearBlades(): void {
    this.blades.set([]);
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

  /** Toggle avatar menu open/close. Closes settings if opening. */
  toggleAvatarMenu(): void {
    const willOpen = !this.avatarMenu().isOpen;
    this.avatarMenu.update((m) => ({ ...m, isOpen: willOpen }));
    if (willOpen) this.closeSettings();
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
