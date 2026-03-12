import { Component, inject, computed, effect } from '@angular/core';
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
  createCommand,
  BladeNavItem,
  BladeCommand,
  executeSaveItem,
  clearStatusBar,
  TileSize,
  createTile,
} from '@ardimedia/angular-portal-azure';

/** Demo customer model */
interface Customer {
  id: number;
  name: string;
  email: string;
  city: string;
  bladePath?: string;
}

/** Demo-specific translated strings (app-level content) */
interface DemoLabels {
  customers: string;
  allCustomers: string;
  newCustomer: string;
  customer: string;
  notifications: string;
  settings: string;
  orders: string;
  reports: string;
  dashboard: string;
  openPanel: string;
  settingsDesc: string;
  ordersDesc: string;
  reportsDesc: string;
  dashboardDesc: string;
  notifDesc: string;
  notifCmd: string;
  notifNav: string;
  customerNotif: string;
  newInquiries: string;
  openTasks: string;
  noNotifications: string;
}

const DEMO_LABELS: Record<string, DemoLabels> = {
  'de-CH': {
    customers: 'Kunden', allCustomers: 'Alle Kunden', newCustomer: 'Neuer Kunde',
    customer: 'Kunde', notifications: 'Benachrichtigungen', settings: 'Einstellungen',
    orders: 'Bestellungen', reports: 'Berichte', dashboard: 'Dashboard',
    openPanel: 'Panel öffnen',
    settingsDesc: 'Hier können die Einstellungen konfiguriert werden.',
    ordersDesc: 'Bestellübersicht wird hier angezeigt.',
    reportsDesc: 'Berichtsübersicht wird hier angezeigt.',
    dashboardDesc: 'Dashboard-Inhalte werden hier angezeigt.',
    notifDesc: 'Das Benachrichtigungspanel kann geöffnet werden über:',
    notifCmd: 'Den Befehl "Panel öffnen" in der Befehlsleiste oben',
    notifNav: 'Den Navigationseintrag "Benachrichtigungen" im Kunden-Blade',
    customerNotif: 'Kunden-Benachrichtigungen',
    newInquiries: '3 neue Kundenanfragen', openTasks: '1 offene Aufgabe',
    noNotifications: 'Keine neuen Benachrichtigungen.',
  },
  'de-DE': {
    customers: 'Kunden', allCustomers: 'Alle Kunden', newCustomer: 'Neuer Kunde',
    customer: 'Kunde', notifications: 'Benachrichtigungen', settings: 'Einstellungen',
    orders: 'Bestellungen', reports: 'Berichte', dashboard: 'Dashboard',
    openPanel: 'Panel öffnen',
    settingsDesc: 'Hier können die Einstellungen konfiguriert werden.',
    ordersDesc: 'Bestellübersicht wird hier angezeigt.',
    reportsDesc: 'Berichtsübersicht wird hier angezeigt.',
    dashboardDesc: 'Dashboard-Inhalte werden hier angezeigt.',
    notifDesc: 'Das Benachrichtigungspanel kann geöffnet werden über:',
    notifCmd: 'Den Befehl "Panel öffnen" in der Befehlsleiste oben',
    notifNav: 'Den Navigationseintrag "Benachrichtigungen" im Kunden-Blade',
    customerNotif: 'Kunden-Benachrichtigungen',
    newInquiries: '3 neue Kundenanfragen', openTasks: '1 offene Aufgabe',
    noNotifications: 'Keine neuen Benachrichtigungen.',
  },
  'en': {
    customers: 'Customers', allCustomers: 'All Customers', newCustomer: 'New Customer',
    customer: 'Customer', notifications: 'Notifications', settings: 'Settings',
    orders: 'Orders', reports: 'Reports', dashboard: 'Dashboard',
    openPanel: 'Open panel',
    settingsDesc: 'Settings can be configured here.',
    ordersDesc: 'Order overview is displayed here.',
    reportsDesc: 'Report overview is displayed here.',
    dashboardDesc: 'Dashboard content is displayed here.',
    notifDesc: 'The notification panel can be opened via:',
    notifCmd: 'The "Open panel" command in the command bar above',
    notifNav: 'The "Notifications" navigation entry in the Customers blade',
    customerNotif: 'Customer Notifications',
    newInquiries: '3 new customer inquiries', openTasks: '1 open task',
    noNotifications: 'No new notifications.',
  },
  'fr': {
    customers: 'Clients', allCustomers: 'Tous les clients', newCustomer: 'Nouveau client',
    customer: 'Client', notifications: 'Notifications', settings: 'Paramètres',
    orders: 'Commandes', reports: 'Rapports', dashboard: 'Tableau de bord',
    openPanel: 'Ouvrir le panneau',
    settingsDesc: 'Les paramètres peuvent être configurés ici.',
    ordersDesc: 'L\'aperçu des commandes est affiché ici.',
    reportsDesc: 'L\'aperçu des rapports est affiché ici.',
    dashboardDesc: 'Le contenu du tableau de bord est affiché ici.',
    notifDesc: 'Le panneau de notifications peut être ouvert via :',
    notifCmd: 'La commande "Ouvrir le panneau" dans la barre de commandes',
    notifNav: 'L\'entrée "Notifications" dans le blade Clients',
    customerNotif: 'Notifications clients',
    newInquiries: '3 nouvelles demandes clients', openTasks: '1 tâche en cours',
    noNotifications: 'Aucune nouvelle notification.',
  },
  'es': {
    customers: 'Clientes', allCustomers: 'Todos los clientes', newCustomer: 'Nuevo cliente',
    customer: 'Cliente', notifications: 'Notificaciones', settings: 'Configuración',
    orders: 'Pedidos', reports: 'Informes', dashboard: 'Panel',
    openPanel: 'Abrir panel',
    settingsDesc: 'Aquí se pueden configurar los ajustes.',
    ordersDesc: 'El resumen de pedidos se muestra aquí.',
    reportsDesc: 'El resumen de informes se muestra aquí.',
    dashboardDesc: 'El contenido del panel se muestra aquí.',
    notifDesc: 'El panel de notificaciones se puede abrir mediante:',
    notifCmd: 'El comando "Abrir panel" en la barra de comandos',
    notifNav: 'La entrada "Notificaciones" en el blade de Clientes',
    customerNotif: 'Notificaciones de clientes',
    newInquiries: '3 nuevas consultas de clientes', openTasks: '1 tarea pendiente',
    noNotifications: 'No hay notificaciones nuevas.',
  },
  'it': {
    customers: 'Clienti', allCustomers: 'Tutti i clienti', newCustomer: 'Nuovo cliente',
    customer: 'Cliente', notifications: 'Notifiche', settings: 'Impostazioni',
    orders: 'Ordini', reports: 'Report', dashboard: 'Cruscotto',
    openPanel: 'Apri pannello',
    settingsDesc: 'Le impostazioni possono essere configurate qui.',
    ordersDesc: 'La panoramica degli ordini viene visualizzata qui.',
    reportsDesc: 'La panoramica dei report viene visualizzata qui.',
    dashboardDesc: 'I contenuti del cruscotto vengono visualizzati qui.',
    notifDesc: 'Il pannello notifiche può essere aperto tramite:',
    notifCmd: 'Il comando "Apri pannello" nella barra dei comandi',
    notifNav: 'La voce "Notifiche" nella navigazione del blade Clienti',
    customerNotif: 'Notifiche clienti',
    newInquiries: '3 nuove richieste clienti', openTasks: '1 attività aperta',
    noNotifications: 'Nessuna nuova notifica.',
  },
};

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

  /** Demo labels computed from current portal language */
  readonly t = computed(() => {
    const lang = this.portal.currentLanguage();
    return DEMO_LABELS[lang] ?? DEMO_LABELS['de-CH'];
  });

  // ---- Nav blade: Customers ----
  customerNavBlade = createBlade('customers', 'Kunden', 315);
  customerNavItems: BladeNavItem[] = [];

  // ---- Grid blade: Customer list ----
  customerListBlade = createDataBlade<Customer>('customers/list', 'Alle Kunden', 585);
  customers: Customer[] = [
    { id: 1, name: 'Ardimedia AG', email: 'info@ardimedia.com', city: 'Vaduz', bladePath: 'customers/1' },
    { id: 2, name: 'Muster GmbH', email: 'info@muster.ch', city: 'Zürich', bladePath: 'customers/2' },
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

  // ---- Notifications blade ----
  notificationsBlade = createBlade('notifications', 'Benachrichtigungen', 315);

  constructor() {
    // Load the customer list
    this.customerListBlade.items = this.customers;

    // Reactively update blade titles, nav items, commands, and tiles when language changes
    effect(() => {
      const t = this.t();
      const labels = this.portal.labels();

      // Update blade titles
      this.customerNavBlade.title = t.customers;
      this.customerListBlade.title = t.allCustomers;
      this.customerDetailBlade.title = t.customer;
      this.settingsBlade.title = t.settings;
      this.ordersBlade.title = t.orders;
      this.reportsBlade.title = t.reports;
      this.dashboardBlade.title = t.dashboard;
      this.notificationsBlade.title = t.notifications;

      // Update nav items
      this.customerNavItems = [
        createNavItem(t.allCustomers, 'customers/list', 'ti ti-users'),
        createNavItem(t.newCustomer, 'customers/new', 'ti ti-plus'),
        { title: t.notifications, bladePath: '', cssClass: 'ti ti-bell', isVisible: true, callback: () => this.toggleNotifications('customers') },
      ];

      // Update commands with current library labels
      this.customerDetailCommands = createDetailCommands({
        onSave: () => this.saveCustomer(),
        onCancel: () => this.bladeService.closeBlade(this.customerDetailBlade),
      }, labels);
      this.customerDetailBlade.commands = this.customerDetailCommands;

      this.notificationsBlade.commands = [
        createCommand('toggle', t.openPanel, () => this.toggleNotifications()),
      ];

      // Update tiles
      this.portal.setTiles([
        createTile(t.customers, 'customers', TileSize.Normal),
        createTile(t.orders, 'orders', TileSize.Normal),
        createTile(t.settings, 'settings', TileSize.Mini),
        createTile(t.reports, 'reports', TileSize.Mini),
        createTile(t.dashboard, 'dashboard', TileSize.HeroWide),
        createTile(t.notifications, 'notifications', TileSize.Normal),
      ]);
    });
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

  /** Toggle notification panel */
  toggleNotifications(path: string = 'notifications'): void {
    const notif = this.portal.notification();
    if (notif.isVisible && notif.path === path) {
      this.portal.hideNotification();
    } else {
      this.portal.showNotification(path);
    }
  }

  /** Save customer demo */
  private async saveCustomer(): Promise<void> {
    await executeSaveItem(this.customerDetailBlade, async () => {
      // Simulate API save
      await new Promise((resolve) => setTimeout(resolve, 500));
      return this.customerDetailBlade.item;
    }, this.portal.labels());
  }
}
