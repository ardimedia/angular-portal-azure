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
  template: `
    @if (portal.notification().isVisible) {
      <div class="apa-notification-panel"
           [style.width.px]="portal.notification().width"
           [style.background-color]="portal.notification().backgroundColor">
        <button class="apa-notification-close" (click)="onClose()">CLOSE</button>
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
