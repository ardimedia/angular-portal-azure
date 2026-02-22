import { Component, inject } from '@angular/core';
import { PortalService } from '../../services/portal.service';
import { BladeComponent } from '../blade/blade.component';

/**
 * Blade host — renders the blade stack (journey area).
 * Ported from the apa-blade-area section in home.html (v0.2.346).
 *
 * Each blade in the stack is rendered horizontally. When a new blade
 * is added, the portal layout scrolls to show it.
 *
 * Consumer apps provide blade content via the [bladeTemplate] input
 * or by routing. For now, blades are rendered with their path as content.
 *
 * Usage:
 * ```html
 * <apa-blade-host />
 * ```
 */
@Component({
  selector: 'apa-blade-host',
  standalone: true,
  imports: [BladeComponent],
  styles: [`:host { display: block; height: 100%; }`],
  template: `
    <div id="apa-blade-area" class="fxs-journey-target fxs-journey">
      <div class="fxs-journey-layout fxs-stacklayout fxs-stacklayout-horizontal">
        @for (blade of portal.blades(); track blade.path) {
          <div class="azureportalblade fxs-stacklayout-child">
            <apa-blade [blade]="blade">
              <!-- Default content: blade path (consumers override via content projection or custom templates) -->
              <p style="padding:25px; color:var(--apa-text-secondary);">{{ blade.path }}</p>
            </apa-blade>
          </div>
        }
      </div>
    </div>
  `,
})
export class BladeHostComponent {
  protected readonly portal = inject(PortalService);
}
