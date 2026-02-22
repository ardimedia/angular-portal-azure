import { Component, inject } from '@angular/core';
import {
  PortalLayoutComponent,
  PanoramaComponent,
  BladeComponent,
  BladeNavComponent,
  BladeGridComponent,
  BladeDetailComponent,
  NotificationPanelComponent,
  PortalService,
  BladeService,
  BladeDefinition,
  createBlade,
  createDataBlade,
  createNavItem,
  createDetailCommands,
  BladeNavItem,
  BladeCommand,
  executeSaveItem,
  clearStatusBar,
} from '@ardimedia/angular-portal-azure';

/** Demo customer model */
interface Customer {
  id: number;
  name: string;
  email: string;
  city: string;
  bladePath?: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PortalLayoutComponent,
    PanoramaComponent,
    BladeComponent,
    BladeNavComponent,
    BladeGridComponent,
    BladeDetailComponent,
    NotificationPanelComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly portal = inject(PortalService);
  private readonly bladeService = inject(BladeService);

  // ---- Nav blade: Customers ----
  customerNavBlade = createBlade('customers', 'Kunden', 315);
  customerNavItems: BladeNavItem[] = [
    createNavItem('Alle Kunden', 'customers/list', 'fa fa-users'),
    createNavItem('Neuer Kunde', 'customers/new', 'fa fa-plus'),
  ];

  // ---- Grid blade: Customer list ----
  customerListBlade = createDataBlade<Customer>('customers/list', 'Alle Kunden', 585);
  customers: Customer[] = [
    { id: 1, name: 'Ardimedia AG', email: 'info@ardimedia.com', city: 'Vaduz', bladePath: 'customers/1' },
    { id: 2, name: 'Muster GmbH', email: 'info@muster.ch', city: 'Zuerich', bladePath: 'customers/2' },
    { id: 3, name: 'Test AG', email: 'test@test.li', city: 'Schaan', bladePath: 'customers/3' },
    { id: 4, name: 'Demo Corp', email: 'demo@demo.com', city: 'Triesen', bladePath: 'customers/4' },
    { id: 5, name: 'Alpha GmbH', email: 'alpha@alpha.at', city: 'Wien', bladePath: 'customers/5' },
  ];

  // ---- Detail blade: Customer detail ----
  customerDetailBlade = createDataBlade<Customer>('customers/detail', 'Kunde', 315);
  customerDetailCommands: BladeCommand[] = [];

  // ---- Settings blade ----
  settingsBlade = createBlade('settings', 'Einstellungen', 585);

  // ---- Orders blade ----
  ordersBlade = createBlade('orders', 'Bestellungen', 585);

  // ---- Reports blade ----
  reportsBlade = createBlade('reports', 'Berichte', 585);

  // ---- Dashboard blade ----
  dashboardBlade = createBlade('dashboard', 'Dashboard', 585);

  constructor() {
    // Set up customer detail commands
    this.customerDetailCommands = createDetailCommands({
      onSave: () => this.saveCustomer(),
      onCancel: () => this.bladeService.closeBlade(this.customerDetailBlade),
    });
    this.customerDetailBlade.commands = this.customerDetailCommands;

    // Load the customer list
    this.customerListBlade.items = this.customers;
  }

  /** Get the blade definition for a given path (used by the template) */
  getActiveBlade(path: string): BladeDefinition | undefined {
    return this.portal.blades().find((b) => b.path === path);
  }

  isBladeOpen(path: string): boolean {
    return this.portal.blades().some((b) => b.path === path);
  }

  /** Handle customer grid row click */
  onCustomerClick(customer: Customer): void {
    this.customerDetailBlade.item = { ...customer };
    this.customerDetailBlade.title = customer.name;
    this.customerDetailBlade.statusBar = clearStatusBar();
  }

  /** Save customer demo */
  private async saveCustomer(): Promise<void> {
    await executeSaveItem(this.customerDetailBlade, async () => {
      // Simulate API save
      await new Promise((resolve) => setTimeout(resolve, 500));
      return this.customerDetailBlade.item;
    });
  }
}
