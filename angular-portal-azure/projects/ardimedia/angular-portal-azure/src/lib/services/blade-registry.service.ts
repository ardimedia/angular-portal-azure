import { Injectable, Type } from '@angular/core';

/**
 * Registry for mapping blade paths to Angular components.
 *
 * Allows consumer apps to register components for blade paths,
 * enabling dynamic rendering in BladeHostComponent without
 * manual @switch blocks.
 *
 * Usage in app bootstrap:
 * ```typescript
 * const registry = inject(BladeRegistry);
 * registry.register('customers', CustomerNavComponent);
 * registry.register('customers/list', CustomerListComponent);
 * ```
 *
 * Or register multiple at once:
 * ```typescript
 * registry.registerAll({
 *   'customers': CustomerNavComponent,
 *   'customers/list': CustomerListComponent,
 * });
 * ```
 */
@Injectable({ providedIn: 'root' })
export class BladeRegistry {
  private readonly registry = new Map<string, Type<unknown>>();

  /** Register a component for a blade path */
  register(path: string, component: Type<unknown>): void {
    this.registry.set(path.toLowerCase(), component);
  }

  /** Register multiple blade path → component mappings */
  registerAll(mappings: Record<string, Type<unknown>>): void {
    for (const [path, component] of Object.entries(mappings)) {
      this.register(path, component);
    }
  }

  /** Get the component registered for a path, if any */
  get(path: string): Type<unknown> | undefined {
    return this.registry.get(path.toLowerCase());
  }

  /** Check if a component is registered for a path */
  has(path: string): boolean {
    return this.registry.has(path.toLowerCase());
  }
}
