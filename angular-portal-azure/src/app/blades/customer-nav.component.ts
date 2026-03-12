import { Component, computed, effect, inject } from '@angular/core';
import { PortalService, BladeNavComponent, createNavItem } from '@ardimedia/angular-portal-azure';
import { getDemoLabels } from '../data/demo-labels';

@Component({
  selector: 'app-customer-nav-blade',
  standalone: true,
  imports: [BladeNavComponent],
  template: `<apa-blade-nav [items]="navItems()" [senderPath]="'customers'" />`,
})
export class CustomerNavBladeComponent {
  private readonly portal = inject(PortalService);

  constructor() {
    effect(() => {
      const blade = this.portal.blades().find((b) => b.path === 'customers');
      if (blade) blade.title = getDemoLabels(this.portal.currentLanguage()).customers;
    });
  }

  readonly navItems = computed(() => {
    const t = getDemoLabels(this.portal.currentLanguage());
    return [
      createNavItem(t.allCustomers, 'customers/list', 'ti ti-buildings'),
      createNavItem(t.newCustomer, 'customers/detail', 'ti ti-plus'),
      { title: t.notifications, bladePath: '', cssClass: 'ti ti-bell', isVisible: true, callback: () => this.toggleNotifications() },
    ];
  });

  private toggleNotifications(): void {
    const notif = this.portal.notification();
    if (notif.isVisible && notif.path === 'customers') {
      this.portal.hideNotification();
    } else {
      this.portal.showNotification('customers', 250, {
        onShow: () => console.log('[Demo] Notification panel showing'),
        onShowed: () => console.log('[Demo] Notification panel visible'),
        onHide: () => { console.log('[Demo] Notification panel hiding'); return true; },
      });
    }
  }
}
