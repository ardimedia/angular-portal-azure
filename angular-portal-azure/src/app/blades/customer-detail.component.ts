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
    <div class="detail-form">
      @if (dataBlade.item.id) {
        <div class="detail-header">
          <div class="avatar">
            <i class="ti ti-building"></i>
          </div>
          <div class="header-info">
            <span class="header-name">{{ dataBlade.item.name }}</span>
            <span class="header-meta">ID {{ dataBlade.item.id }}</span>
          </div>
        </div>
      }

      <div class="form-section">
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control"
            [value]="dataBlade.item.name"
            (input)="dataBlade.item = { ...dataBlade.item, name: $any($event.target).value }" />
        </div>
        <div class="form-group">
          <label>E-Mail</label>
          <div class="input-icon">
            <i class="ti ti-mail"></i>
            <input type="email" class="form-control has-icon"
              [value]="dataBlade.item.email"
              (input)="dataBlade.item = { ...dataBlade.item, email: $any($event.target).value }" />
          </div>
        </div>
        <div class="form-group">
          <label>City</label>
          <div class="input-icon">
            <i class="ti ti-map-pin"></i>
            <input type="text" class="form-control has-icon"
              [value]="dataBlade.item.city"
              (input)="dataBlade.item = { ...dataBlade.item, city: $any($event.target).value }" />
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .detail-form {
      padding: 20px;
    }

    .detail-header {
      display: flex;
      align-items: center;
      gap: 14px;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid var(--apa-border);
    }

    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--apa-accent);
      color: var(--apa-text-inverse);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      flex-shrink: 0;
    }

    .header-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
    }

    .header-name {
      font-size: 16px;
      font-weight: 600;
      color: var(--apa-text);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .header-meta {
      font-size: 12px;
      color: var(--apa-text-secondary);
    }

    .form-section {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
    }

    .input-icon {
      position: relative;
    }

    .input-icon i {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 15px;
      color: var(--apa-text-secondary);
      pointer-events: none;
    }

    .form-control.has-icon {
      padding-left: 34px;
    }

    .form-control:focus {
      outline: none;
      border-color: var(--apa-accent);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--apa-accent) 20%, transparent);
    }
  `],
})
export class CustomerDetailBladeComponent {
  private readonly portal = inject(PortalService);
  private readonly bladeService = inject(BladeService);
  private readonly dataService = inject(DemoDataService);
  readonly isNew: boolean;
  readonly dataBlade = (() => {
    const existing = this.portal.blades().find((b) => b.path === 'customers/detail');
    return createDataBlade<Customer>(
      'customers/detail', 'Customer', 400,
      existing?.params ?? {},
      existing?.uid,
    );
  })();

  constructor() {
    const labels = this.portal.labels();
    this.portal.blades.update((blades) =>
      blades.map((b) => (b.path === 'customers/detail' ? this.dataBlade : b)),
    );

    const itemId = Number(this.dataBlade.params['id']) || this.portal.parameter().itemId;
    this.isNew = !itemId;

    if (this.isNew) {
      // New customer mode
      this.dataBlade.item = { id: 0, name: '', email: '', city: '' };
      this.dataBlade.commands = createDetailCommands({
        onSave: () => this.save(),
        onCancel: () => this.bladeService.closeBlade(this.dataBlade),
      }, labels);
    } else {
      // Edit existing customer mode
      this.dataBlade.commands = createDetailCommands({
        onSave: () => this.save(),
        onDelete: () => this.delete(),
        onCancel: () => this.bladeService.closeBlade(this.dataBlade),
      }, labels);
      executeLoadItem(this.dataBlade, () => this.dataService.getCustomer(itemId), labels);
    }

    this.dataBlade.lifecycle = {
      isFormValid: () => !!this.dataBlade.item.name,
      onLoadItem: () => console.log('[Demo] Loading customer...'),
      onLoadedItem: () => console.log('[Demo] Customer loaded'),
      onSaveItem: () => console.log(`[Demo] ${this.isNew ? 'Creating' : 'Saving'} customer...`),
      onSavedItem: () => console.log(`[Demo] Customer ${this.isNew ? 'created' : 'saved'}`),
      onDeleteItem: () => console.log('[Demo] Deleting customer...'),
      onDeletedItem: () => { console.log('[Demo] Customer deleted'); return true; },
    };

    effect(() => {
      const t = getDemoLabels(this.portal.currentLanguage());
      this.dataBlade.title = this.isNew ? t.newCustomer : t.customer;
    });
  }

  private async save(): Promise<void> {
    if (this.isNew) {
      const result = await executeSaveItem(
        this.dataBlade,
        () => this.dataService.createCustomer(this.dataBlade.item),
        this.portal.labels(),
      );
      if (result) {
        this.bladeService.closeBlade(this.dataBlade);
      }
    } else {
      await executeSaveItem(
        this.dataBlade,
        () => this.dataService.saveCustomer(this.dataBlade.item),
        this.portal.labels(),
      );
    }
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
