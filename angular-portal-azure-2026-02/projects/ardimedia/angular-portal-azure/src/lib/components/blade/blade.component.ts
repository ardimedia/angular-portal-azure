import { Component, input, output, inject } from '@angular/core';
import { BladeDefinition } from '../../models/blade.model';
import { BladeService } from '../../services/blade.service';
import { CommandBarComponent } from '../command-bar/command-bar.component';

/**
 * Blade chrome component — the visual container for a single blade.
 * Ported from blade.html (v0.2.346).
 *
 * Renders the blade header (status bar, close/maximize buttons, title,
 * command bar) and projects blade content via <ng-content>.
 *
 * Usage:
 * ```html
 * <apa-blade [blade]="myBlade">
 *   <p>Blade content here</p>
 * </apa-blade>
 * ```
 */
@Component({
  selector: 'apa-blade',
  standalone: true,
  imports: [CommandBarComponent],
  styles: [`:host { display: block; height: 100%; }`],
  template: `
    <section class="fxs-blade-locked fxs-blade fx-rightClick fxs-bladesize-small"
             [style.width.px]="blade().width">
      <!-- Header -->
      <header class="fxs-blade-header">
        <!-- Status bar -->
        <div class="fxs-blade-statusbar-wrapper">
          <div class="fxs-blade-statusbar"
               [class.apa-statusbar-info]="blade().statusBar.style === 'info'"
               [class.apa-statusbar-error]="blade().statusBar.style === 'error' || blade().statusBar.style === 'warning'"
               [class.apa-statusbar-success]="blade().statusBar.style === 'success'">
            {{ blade().statusBar.text }}
          </div>
        </div>

        <!-- Action buttons -->
        <div class="fxs-blade-actions">
          <button (click)="onClose()" title="Schliessen">
            <svg viewBox="0 0 11 11" role="presentation" focusable="false" xmlns="http://www.w3.org/2000/svg">
              <g>
                <polygon class="msportal-fx-svg-placeholder" points="10.4,1.4 9.6,0.6 5.5,4.7 1.4,0.6 0.6,1.4 4.7,5.5 0.6,9.6 1.4,10.4 5.5,6.3 9.6,10.4 10.4,9.6 6.3,5.5"/>
              </g>
            </svg>
          </button>
        </div>

        <!-- Title -->
        <div class="fxs-blade-title">
          <div class="fxs-blade-title-text-container">
            <h2>{{ blade().title }}</h2>
            @if (blade().subtitle) {
              <h3>{{ blade().subtitle }}</h3>
            }
          </div>
        </div>

        <!-- Command bar -->
        <div class="fxs-blade-commandBarContainer">
          <apa-command-bar [commands]="blade().commands" />
        </div>
      </header>

      <!-- Content area -->
      <div class="fxs-blade-content fxs-pannable">
        <div class="fxs-blade-stacklayout">
          <div class="fxs-stacklayout-child">
            <ng-content />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class BladeComponent {
  readonly blade = input.required<BladeDefinition>();
  readonly bladeClose = output<BladeDefinition>();

  private readonly bladeService = inject(BladeService);

  onClose(): void {
    const b = this.blade();
    this.bladeClose.emit(b);
    this.bladeService.closeBlade(b);
  }
}
