import { Component, inject } from '@angular/core';
import { PortalService } from '../../services/portal.service';

/**
 * Notification panel — right-side overlay panel.
 * Ported from apa-notification-area in home.html (v0.2.346).
 *
 * Usage:
 * ```html
 * <apa-notification-panel>
 *   <!-- Custom notification content -->
 * </apa-notification-panel>
 * ```
 */
@Component({
  selector: 'apa-notification-panel',
  standalone: true,
  styles: [`:host { display: contents; }`],
  template: `
    @if (portal.notification().isVisible) {
      <div class="apa-notification-panel"
           [style.width.px]="portal.notification().width">
        <button class="apa-notification-close" (click)="onClose()" title="Schliessen">
          <svg viewBox="0 0 11 11" role="presentation" focusable="false" xmlns="http://www.w3.org/2000/svg">
            <polygon class="msportal-fx-svg-placeholder" points="10.4,1.4 9.6,0.6 5.5,4.7 1.4,0.6 0.6,1.4 4.7,5.5 0.6,9.6 1.4,10.4 5.5,6.3 9.6,10.4 10.4,9.6 6.3,5.5"/>
          </svg>
        </button>
        <ng-content />
      </div>
    }
  `,
})
export class NotificationPanelComponent {
  protected readonly portal = inject(PortalService);

  onClose(): void {
    this.portal.hideNotification();
  }
}
