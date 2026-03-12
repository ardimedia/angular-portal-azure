import { Component, computed, effect, inject } from '@angular/core';
import { PortalService } from '@ardimedia/angular-portal-azure';
import { getDemoLabels } from '../data/demo-labels';

@Component({
  selector: 'app-reports-blade',
  standalone: true,
  template: `<div style="padding:15px;">{{ description() }}</div>`,
})
export class ReportsBladeComponent {
  private readonly portal = inject(PortalService);
  readonly description = computed(() => getDemoLabels(this.portal.currentLanguage()).reportsDesc);

  constructor() {
    effect(() => {
      const blade = this.portal.blades().find((b) => b.path === 'reports');
      if (blade) blade.title = getDemoLabels(this.portal.currentLanguage()).reports;
    });
  }
}
