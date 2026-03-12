import { Component, effect, inject } from '@angular/core';
import {
  PortalService,
  BladeGridComponent,
  createDataBlade,
  executeLoadItems,
} from '@ardimedia/angular-portal-azure';
import { Customer } from '../data/customer.model';
import { DemoDataService } from '../data/demo-data.service';
import { getDemoLabels } from '../data/demo-labels';

@Component({
  selector: 'app-customer-list-blade',
  standalone: true,
  imports: [BladeGridComponent],
  template: `
    <apa-blade-grid
      [items]="dataBlade.items"
      [senderPath]="'customers/list'"
      [displayField]="'name'"
      [bladePathField]="'bladePath'"
      [iconClass]="'ti ti-building'"
      (itemClick)="onCustomerClick($event)" />
  `,
})
export class CustomerListBladeComponent {
  private readonly portal = inject(PortalService);
  private readonly dataService = inject(DemoDataService);
  readonly dataBlade = createDataBlade<Customer>(
    'customers/list', 'All Customers', 585, {},
    this.portal.blades().find((b) => b.path === 'customers/list')?.uid,
  );

  constructor() {
    this.portal.blades.update((blades) =>
      blades.map((b) => (b.path === 'customers/list' ? this.dataBlade : b)),
    );

    this.dataBlade.lifecycle = {
      onLoadItems: () => console.log('[Demo] Loading customers...'),
      onLoadedItems: () => console.log('[Demo] Customers loaded'),
    };

    executeLoadItems(this.dataBlade, () => this.dataService.getCustomers(), this.portal.labels());

    effect(() => {
      this.dataBlade.title = getDemoLabels(this.portal.currentLanguage()).allCustomers;
    });
  }

  onCustomerClick(_customer: Customer): void {
    // Item ID is now passed via blade params by BladeGridComponent
  }
}
