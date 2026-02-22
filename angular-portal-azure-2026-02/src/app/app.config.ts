import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePortalAzure, TileSize, createTile } from '@ardimedia/angular-portal-azure';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePortalAzure({
      title: 'Angular Portal Azure Demo',
      tiles: [
        createTile('Kunden', 'customers', TileSize.Normal),
        createTile('Bestellungen', 'orders', TileSize.Normal),
        createTile('Einstellungen', 'settings', TileSize.Mini),
        createTile('Berichte', 'reports', TileSize.Mini),
        createTile('Dashboard', 'dashboard', TileSize.HeroWide),
        createTile('Benachrichtigungen', 'notifications', TileSize.Normal),
      ],
      userAccount: {
        userName: 'demo@ardimedia.com',
        firstName: 'Demo',
        lastName: 'User',
        emailAddress: 'demo@ardimedia.com',
      },
    }),
  ],
};
