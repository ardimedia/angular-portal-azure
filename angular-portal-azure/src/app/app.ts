import { Component, inject, computed, effect, signal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  PortalLayoutComponent,
  PanoramaComponent,
  BladeHostComponent,
  SidebarComponent,
  NotificationPanelComponent,
  PortalService,
  BladeNavItem,
  TileSize,
  createTile,
  createNavItem,
} from '@ardimedia/angular-portal-azure';
import { getDemoLabels } from './data/demo-labels';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PortalLayoutComponent,
    PanoramaComponent,
    BladeHostComponent,
    SidebarComponent,
    NotificationPanelComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly portal = inject(PortalService);
  private readonly router = inject(Router);

  /** Which app is active (null = panorama visible) */
  readonly activeApp = signal<string | null>(null);

  /** Demo labels computed from current portal language */
  readonly t = computed(() => getDemoLabels(this.portal.currentLanguage()));

  /** Sidebar navigation items with reactive labels and badge */
  readonly sidebarItems = computed<BladeNavItem[]>(() => {
    const t = this.t();
    return [
      createNavItem(t.customers, 'customers', 'ti ti-users'),
      createNavItem(t.orders, 'orders', 'ti ti-package'),
      createNavItem(t.reports, 'reports', 'ti ti-chart-bar'),
      createNavItem(t.dashboard, 'dashboard', 'ti ti-dashboard'),
      createNavItem(t.settings, 'settings', 'ti ti-settings'),
      { ...createNavItem(t.notifications, 'notifications', 'ti ti-bell'), badge: '3' },
    ];
  });

  constructor() {
    // Blade registration + language presets are in app.config.ts (ENVIRONMENT_INITIALIZER)

    // Set avatar menu items
    this.portal.setAvatarMenuItems([
      { label: 'Profile', href: '#profile', icon: 'ti ti-user' },
      { label: 'Sign out', href: '#signout', icon: 'ti ti-logout' },
    ]);

    // Reactively update tiles when language changes
    // 3 apps: only the first (CRM) is active, the other two are inactive
    effect(() => {
      const t = this.t();
      this.portal.setTiles([
        createTile('CRM', 'customers', TileSize.Normal),
        { title: 'ERP', bladePath: 'erp', size: TileSize.Normal, disabled: true },
        { title: 'DMS', bladePath: 'dms', size: TileSize.Normal, disabled: true },
      ]);
    });

    // Sync activeApp with route prefix (e.g., /crm/customers/list → 'crm')
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const path = (e as NavigationEnd).urlAfterRedirects.split('?')[0].replace(/^\//, '');
      const prefix = path.split('/')[0] || null;
      this.activeApp.set(prefix);
    });

    // Return to panorama when all blades are closed (home click or last blade closed)
    let prevBladeCount = 0;
    effect(() => {
      const count = this.portal.bladeCount();
      if (prevBladeCount > 0 && count === 0 && this.activeApp()) {
        this.activeApp.set(null);
        this.router.navigate(['/']);
      }
      prevBladeCount = count;
    });
  }

  /** Tile click: enter app mode (sidebar) and navigate to app route */
  onAppClick(tile: { bladePath: string }): void {
    this.router.navigate(['/crm']);
  }
}
