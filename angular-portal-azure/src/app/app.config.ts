import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePortalAzure } from '@ardimedia/angular-portal-azure';

import { routes } from './app.routes';

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
  ],
};
