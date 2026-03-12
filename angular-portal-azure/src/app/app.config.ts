import { ApplicationConfig, ENVIRONMENT_INITIALIZER, inject, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePortalAzure, provideBladeRouter, BladeRegistry, registerLanguagePreset } from '@ardimedia/angular-portal-azure';

import { routes } from './app.routes';
import { CustomerNavBladeComponent } from './blades/customer-nav.component';
import { CustomerListBladeComponent } from './blades/customer-list.component';
import { CustomerDetailBladeComponent } from './blades/customer-detail.component';
import { SettingsBladeComponent } from './blades/settings.component';
import { OrdersBladeComponent } from './blades/orders.component';
import { ReportsBladeComponent } from './blades/reports.component';
import { DashboardBladeComponent } from './blades/dashboard.component';
import { NotificationsBladeComponent } from './blades/notifications.component';
import { LABELS_PT } from './data/demo-labels';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePortalAzure({
      title: 'Angular Portal Azure Demo',
      userAccount: {
        userName: 'demo@ardimedia.com',
        firstName: 'Demo',
        lastName: 'User',
        emailAddress: 'demo@ardimedia.com',
      },
    }),
    // Register blade components + language presets BEFORE blade router
    // so metadata (title, width) is available for URL restoration
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => {
        const registry = inject(BladeRegistry);
        return () => {
          registerLanguagePreset({ code: 'pt', displayName: 'Português', labels: LABELS_PT });
          registry.register('customers', CustomerNavBladeComponent, { title: 'Customers', width: 315 });
          registry.register('customers/list', CustomerListBladeComponent, { title: 'All Customers', width: 585 });
          registry.register('customers/detail', CustomerDetailBladeComponent, { title: 'Customer', width: 400, params: ['id'] });
          registry.register('settings', SettingsBladeComponent, { title: 'Settings', width: 480 });
          registry.register('orders', OrdersBladeComponent, { title: 'Orders', width: 650 });
          registry.register('reports', ReportsBladeComponent, { title: 'Reports', width: 550 });
          registry.register('dashboard', DashboardBladeComponent, { title: 'Dashboard', width: 720 });
          registry.register('notifications', NotificationsBladeComponent, { title: 'Notifications', width: 315 });
        };
      },
    },
    provideBladeRouter(),
  ],
};
