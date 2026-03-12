import { Component, computed, effect, inject } from '@angular/core';
import { PortalService } from '@ardimedia/angular-portal-azure';
import { getDemoLabels } from '../data/demo-labels';

@Component({
  selector: 'app-orders-blade',
  standalone: true,
  template: `<div style="padding:15px;">{{ description() }}</div>`,
})
export class OrdersBladeComponent {
  private readonly portal = inject(PortalService);
  readonly description = computed(() => getDemoLabels(this.portal.currentLanguage()).ordersDesc);

  constructor() {
    effect(() => {
      const blade = this.portal.blades().find((b) => b.path === 'orders');
      if (blade) blade.title = getDemoLabels(this.portal.currentLanguage()).orders;
    });
  }
}
