import { Component, computed, effect, inject } from '@angular/core';
import { PortalService } from '@ardimedia/angular-portal-azure';
import { getDemoLabels } from '../data/demo-labels';

@Component({
  selector: 'app-dashboard-blade',
  standalone: true,
  template: `<div style="padding:15px;">{{ description() }}</div>`,
})
export class DashboardBladeComponent {
  private readonly portal = inject(PortalService);
  readonly description = computed(() => getDemoLabels(this.portal.currentLanguage()).dashboardDesc);

  constructor() {
    effect(() => {
      const blade = this.portal.blades().find((b) => b.path === 'dashboard');
      if (blade) blade.title = getDemoLabels(this.portal.currentLanguage()).dashboard;
    });
  }
}
