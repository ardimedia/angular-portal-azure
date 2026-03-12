import { PortalLabels, LABELS_EN } from '@ardimedia/angular-portal-azure';

export interface DemoLabels {
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

export const DEMO_LABELS: Record<string, DemoLabels> = {
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
  'pt': {
    customers: 'Clientes', allCustomers: 'Todos os clientes', newCustomer: 'Novo cliente',
    customer: 'Cliente', notifications: 'Notificações', settings: 'Configurações',
    orders: 'Pedidos', reports: 'Relatórios', dashboard: 'Painel',
    openPanel: 'Abrir painel',
    settingsDesc: 'As configurações podem ser definidas aqui.',
    ordersDesc: 'A visão geral dos pedidos é exibida aqui.',
    reportsDesc: 'A visão geral dos relatórios é exibida aqui.',
    dashboardDesc: 'O conteúdo do painel é exibido aqui.',
    notifDesc: 'O painel de notificações pode ser aberto via:',
    notifCmd: 'O comando "Abrir painel" na barra de comandos',
    notifNav: 'A entrada "Notificações" na navegação do blade Clientes',
    customerNotif: 'Notificações de clientes',
    newInquiries: '3 novas consultas de clientes', openTasks: '1 tarefa pendente',
    noNotifications: 'Nenhuma notificação nova.',
  },
};

/** Portuguese library labels for registerLanguagePreset */
export const LABELS_PT: PortalLabels = {
  ...LABELS_EN,
  loading: 'Carregando...', saving: 'Salvando...', saved: 'Salvo',
  deleting: 'Excluindo...', deleted: 'Excluído',
  loadError: 'Erro ao carregar', saveError: 'Erro ao salvar', deleteError: 'Erro ao excluir',
  cmdNew: 'Novo', cmdSave: 'Salvar', cmdDelete: 'Excluir', cmdCancel: 'Cancelar',
  search: 'Pesquisar...', close: 'Fechar',
  noAppsTitle: 'Nenhuma aplicação atribuída',
  noAppsMessage: 'Entre em contato com o administrador para que as aplicações sejam atribuídas.',
  closePanel: 'Fechar',
  lightMode: 'Modo claro', darkMode: 'Modo escuro',
  switchToLight: 'Mudar para modo claro', switchToDark: 'Mudar para modo escuro',
  settings: 'Configurações', language: 'Idioma', appearance: 'Aparência',
};

export function getDemoLabels(lang: string): DemoLabels {
  return DEMO_LABELS[lang] ?? DEMO_LABELS['de-CH'];
}
