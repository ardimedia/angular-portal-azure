import { EnvironmentProviders, makeEnvironmentProviders, APP_INITIALIZER, inject } from '@angular/core';
import { PortalConfig } from '../models/portal-config.model';
import { PortalService } from './portal.service';

/**
 * Provide the angular-portal-azure library configuration.
 *
 * Usage in app.config.ts:
 * ```typescript
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     providePortalAzure({
 *       title: 'My Portal',
 *       tiles: [...],
 *       theme: 'azure-blue',
 *     }),
 *   ],
 * };
 * ```
 *
 * New in v0.3.0 — no equivalent in v0.2.346 (which used PortalShell constructor).
 */
export function providePortalAzure(config: PortalConfig): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => {
        const portalService = inject(PortalService);
        return () => portalService.configure(config);
      },
    },
  ]);
}
