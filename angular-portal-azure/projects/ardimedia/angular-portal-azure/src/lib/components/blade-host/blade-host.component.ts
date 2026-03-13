import { Component, inject, input } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { PortalService } from '../../services/portal.service';
import { BladeRegistry } from '../../services/blade-registry.service';
import { BladeComponent } from '../blade/blade.component';

/**
 * Blade host — renders the blade stack (journey area).
 * Ported from the apa-blade-area section in home.html (v0.2.346).
 *
 * Each blade in the stack is rendered horizontally. When a new blade
 * is added, the portal layout scrolls to show it.
 *
 * If a component is registered via BladeRegistry for a blade path,
 * it is rendered dynamically via ngComponentOutlet. Otherwise,
 * the blade path is shown as fallback text.
 *
 * Usage:
 * ```html
 * <!-- Default: each component is wrapped in <apa-blade> -->
 * <apa-blade-host />
 *
 * <!-- No wrapper: components render directly (they manage their own blade chrome) -->
 * <apa-blade-host [wrapBlade]="false" />
 * ```
 */
@Component({
  selector: 'apa-blade-host',
  standalone: true,
  imports: [BladeComponent, NgComponentOutlet],
  styles: [`:host { display: block; height: 100%; }`],
  template: `
    <div id="apa-blade-area" class="fxs-journey-target fxs-journey">
      <div class="fxs-journey-layout fxs-stacklayout fxs-stacklayout-horizontal">
        @for (blade of portal.blades(); track blade.uid) {
          <div class="azureportalblade fxs-stacklayout-child">
            @if (wrapBlade()) {
              <apa-blade [blade]="blade">
                @if (getComponent(blade.path); as component) {
                  <ng-container *ngComponentOutlet="component" />
                } @else {
                  <p style="padding:25px; color:var(--apa-text-secondary);">{{ blade.path }}</p>
                }
              </apa-blade>
            } @else {
              @if (getComponent(blade.path); as component) {
                <ng-container *ngComponentOutlet="component" />
              } @else {
                <p style="padding:25px; color:var(--apa-text-secondary);">{{ blade.path }}</p>
              }
            }
          </div>
        }
      </div>
    </div>
  `,
})
export class BladeHostComponent {
  /** Whether to wrap each component in an `<apa-blade>` element. Default: true. */
  readonly wrapBlade = input(true);

  protected readonly portal = inject(PortalService);
  private readonly registry = inject(BladeRegistry);

  getComponent(path: string) {
    return this.registry.get(path) ?? null;
  }
}
