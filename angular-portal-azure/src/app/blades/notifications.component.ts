import { Component, computed, effect, inject } from '@angular/core';
import { PortalService, createCommand } from '@ardimedia/angular-portal-azure';
import { getDemoLabels } from '../data/demo-labels';

@Component({
  selector: 'app-notifications-blade',
  standalone: true,
  template: `
    <div style="padding:15px;">
      <p>{{ t().notifDesc }}</p>
      <ul>
        <li>{{ t().notifCmd }}</li>
        <li>{{ t().notifNav }}</li>
      </ul>
    </div>
  `,
})
export class NotificationsBladeComponent {
  private readonly portal = inject(PortalService);
  readonly t = computed(() => getDemoLabels(this.portal.currentLanguage()));

  constructor() {
    const blade = this.portal.blades().find((b) => b.path === 'notifications');
    if (blade) {
      blade.commands = [
        createCommand('toggle', this.t().openPanel, () => this.toggleNotifications()),
      ];
    }

    effect(() => {
      const blade = this.portal.blades().find((b) => b.path === 'notifications');
      if (blade) blade.title = getDemoLabels(this.portal.currentLanguage()).notifications;
    });
  }

  private toggleNotifications(): void {
    const notif = this.portal.notification();
    if (notif.isVisible) {
      this.portal.hideNotification();
    } else {
      this.portal.showNotification('notifications', 250, {
        onShow: () => console.log('[Demo] Notification panel showing'),
        onShowed: () => console.log('[Demo] Notification panel visible'),
        onHide: () => { console.log('[Demo] Notification panel hiding'); return true; },
      });
    }
  }
}
