import { EnvironmentProviders, ENVIRONMENT_INITIALIZER, inject, makeEnvironmentProviders } from '@angular/core';
import { BladeRouterService } from './blade-router.service';

/**
 * Enables opt-in URL synchronization for the blade stack.
 *
 * Add alongside `provideRouter()` and `providePortalAzure()`:
 * ```typescript
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     provideRouter(routes),
 *     providePortalAzure({ title: 'My Portal', ... }),
 *     provideBladeRouter(),
 *   ],
 * };
 * ```
 *
 * When enabled, blade paths sync to the URL as a query parameter:
 *   `?blades=customers,customers/list,customers/1`
 *
 * Without this provider, blade navigation remains purely in-memory.
 */
export function provideBladeRouter(): EnvironmentProviders {
  return makeEnvironmentProviders([
    BladeRouterService,
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => () => inject(BladeRouterService),
    },
  ]);
}
