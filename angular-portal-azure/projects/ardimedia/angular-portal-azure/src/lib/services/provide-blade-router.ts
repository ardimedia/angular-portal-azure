import { EnvironmentProviders, ENVIRONMENT_INITIALIZER, inject, InjectionToken, makeEnvironmentProviders } from '@angular/core';
import { BladeRouterService } from './blade-router.service';

/** Configuration for `provideBladeRouter()`. */
export interface BladeRouterConfig {
  /**
   * Fixed URL prefix for blade path segments.
   *
   * - When omitted, the prefix is read dynamically from the first URL segment (default).
   * - When set to a non-empty string (e.g. `'app'`), that string is used as the fixed prefix.
   * - When set to `''` (empty string), blade paths are encoded directly at the URL root with no prefix.
   */
  prefix?: string;
}

/** @internal */
export const BLADE_ROUTER_CONFIG = new InjectionToken<BladeRouterConfig>('BLADE_ROUTER_CONFIG');

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
 * Optionally pass a config to set a fixed route prefix:
 * ```typescript
 * provideBladeRouter({ prefix: 'app' })   // → /app/customers/list
 * provideBladeRouter({ prefix: '' })       // → /customers/list (no prefix)
 * ```
 *
 * Without this provider, blade navigation remains purely in-memory.
 */
export function provideBladeRouter(config?: BladeRouterConfig): EnvironmentProviders {
  return makeEnvironmentProviders([
    BladeRouterService,
    { provide: BLADE_ROUTER_CONFIG, useValue: config ?? {} },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => () => inject(BladeRouterService),
    },
  ]);
}
