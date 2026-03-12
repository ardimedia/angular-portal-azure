import { Component, effect, inject } from '@angular/core';
import {
  PortalService,
  BladeService,
  createDataBlade,
  createDetailCommands,
  executeLoadItem,
  executeSaveItem,
  executeDeleteItem,
} from '@ardimedia/angular-portal-azure';
import { Customer } from '../data/customer.model';
import { DemoDataService } from '../data/demo-data.service';
import { getDemoLabels } from '../data/demo-labels';

@Component({
  selector: 'app-customer-detail-blade',
  standalone: true,
  template: `
    <div style="padding:15px;">
      <div style="padding:10px 0;">
        <label>Name</label>
        <input type="text" class="form-control" [value]="dataBlade.item.name" />
      </div>
      <div style="padding:10px 0;">
        <label>E-Mail</label>
        <input type="text" class="form-control" [value]="dataBlade.item.email" />
      </div>
      <div style="padding:10px 0;">
        <label>City</label>
        <input type="text" class="form-control" [value]="dataBlade.item.city" />
      </div>
    </div>
  `,
})
export class CustomerDetailBladeComponent {
  private readonly portal = inject(PortalService);
  private readonly bladeService = inject(BladeService);
  private readonly dataService = inject(DemoDataService);
  readonly dataBlade = createDataBlade<Customer>('customers/detail', 'Customer', 400);

  constructor() {
    const itemId = this.portal.parameter().itemId;
    const labels = this.portal.labels();

    // Replace the blade in the stack with our data blade
    this.portal.blades.update((blades) =>
      blades.map((b) => (b.path === 'customers/detail' ? this.dataBlade : b)),
    );

    // Set commands
    this.dataBlade.commands = createDetailCommands({
      onSave: () => this.save(),
      onDelete: () => this.delete(),
      onCancel: () => this.bladeService.closeBlade(this.dataBlade),
    }, labels);

    // Set lifecycle hooks
    this.dataBlade.lifecycle = {
      isFormValid: () => !!this.dataBlade.item.name,
      onLoadItem: () => console.log('[Demo] Loading customer...'),
      onLoadedItem: () => console.log('[Demo] Customer loaded'),
      onSaveItem: () => console.log('[Demo] Saving customer...'),
      onSavedItem: () => console.log('[Demo] Customer saved'),
      onDeleteItem: () => console.log('[Demo] Deleting customer...'),
      onDeletedItem: () => { console.log('[Demo] Customer deleted'); return true; },
    };

    // Load item
    if (itemId) {
      executeLoadItem(this.dataBlade, () => this.dataService.getCustomer(itemId), labels);
    }

    effect(() => {
      this.dataBlade.title = getDemoLabels(this.portal.currentLanguage()).customer;
    });
  }

  private async save(): Promise<void> {
    await executeSaveItem(
      this.dataBlade,
      () => this.dataService.saveCustomer(this.dataBlade.item),
      this.portal.labels(),
    );
  }

  private async delete(): Promise<void> {
    const shouldClose = await executeDeleteItem(
      this.dataBlade,
      () => this.dataService.deleteCustomer(this.dataBlade.item.id),
      this.portal.labels(),
    );
    if (shouldClose) {
      this.bladeService.closeBlade(this.dataBlade);
    }
  }
}
