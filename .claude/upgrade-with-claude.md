---
status: Stable
updated: 2026-03-13 13:00h
references:
  - ../README.md — Public README with quick start guide
  - ../README-ARDIMEDIA-DEPLOYMENT.md — npm publishing workflow
---

# Upgrade Guide: @ardimedia/angular-portal-azure v0.3.x

This document helps Claude (or a developer) migrate a consumer app from the old AngularJS library (v0.2.346) to the new Angular 21+ library (v0.3.x). It covers every public API surface so nothing is missed during migration.

## Prerequisites

- Angular 21.1.0 or later
- Node.js 22+
- The consumer app must use standalone components (no NgModule)

## Step 1: Install

```bash
npm install @ardimedia/angular-portal-azure@latest
```

Peer dependencies: `@angular/common` ^21.1.0, `@angular/core` ^21.1.0.

## Step 2: Add the theme CSS

In `angular.json`, add the CSS to the `styles` array:

```json
"styles": [
  "node_modules/@ardimedia/angular-portal-azure/theming/portal-azure.css"
]
```

This replaces any old `apn.css`, `portallayout.css`, `themems.css`, or `design.css` imports.

## Step 3: Configure the provider

Replace any old `AngularPortalAzureModule.forRoot()` or `PortalShell` constructor setup with:

```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePortalAzure } from '@ardimedia/angular-portal-azure';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    providePortalAzure({
      title: 'My Portal',                    // Panorama header title
      userAccount: {                          // Optional: user info for avatar menu
        userName: 'user@example.com',
        firstName: 'Jane',
        lastName: 'Doe',
        emailAddress: 'user@example.com',     // Optional
      },
      tiles: [],                              // Optional: initial tiles (can set later via PortalService)
      theme: 'azure-blue',                    // Optional: theme identifier (default)
      language: 'de-CH',                      // Optional: language code (auto-detects from browser if omitted)
      labels: {},                             // Optional: override specific label strings
    }),
  ],
};
```

### PortalConfig interface

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `string` | required | Panorama header title |
| `tiles` | `TileDefinition[]` | `[]` | Dashboard tiles |
| `userAccount` | `UserAccount` | `undefined` | User info for avatar menu |
| `theme` | `string` | `'azure-blue'` | Theme identifier |
| `labels` | `Partial<PortalLabels>` | `{}` | Override specific label strings |
| `language` | `string` | auto-detect | Language code (`'de-CH'`, `'en'`, `'fr'`, `'es'`, `'it'`) |

## Step 4: Use components in templates

Import standalone components directly — no module needed:

```typescript
import {
  PortalLayoutComponent,
  PanoramaComponent,
  BladeComponent,
  BladeNavComponent,
  BladeGridComponent,
  BladeDetailComponent,
  NotificationPanelComponent,
  CommandBarComponent,
  SidebarComponent,
  AvatarMenuComponent,
  BladeHostComponent,
  TileComponent,
} from '@ardimedia/angular-portal-azure';

@Component({
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
  // ...
})
```

### Component selectors

| Old (v0.2.346) | New (v0.3.x) | Notes |
|----------------|--------------|-------|
| `<angular-portal-blade>` | `<apa-blade>` | Renamed |
| `<apa-home>` / custom shell | `<apa-portal-layout>` | New root shell component |
| Custom panorama | `<apa-panorama>` | New component |
| Custom nav blade | `<apa-blade-nav>` | New component |
| Custom grid blade | `<apa-blade-grid>` | New component |
| Custom detail blade | `<apa-blade-detail>` | New component |
| n/a | `<apa-blade-host>` | New: dynamic blade rendering via BladeRegistry |
| n/a | `<apa-command-bar>` | New: standalone command bar |
| n/a | `<apa-notification-panel>` | New: notification slide-in panel |
| n/a | `<apa-sidebar>` | New: collapsible sidebar |
| n/a | `<apa-avatar-menu>` | New: user avatar dropdown |
| n/a | `<apa-tile>` | New: individual tile component |

### Minimal template (recommended: BladeRegistry + BladeHost)

The recommended approach uses `BladeRegistry` and `<apa-blade-host>` for automatic blade rendering:

```html
<apa-portal-layout>
  <apa-panorama />
  <apa-sidebar [items]="sidebarItems" />
  <apa-blade-host />
  <apa-notification-panel>
    <!-- Notification content -->
  </apa-notification-panel>
</apa-portal-layout>
```

Blade components are registered in `app.config.ts` (see Step 5) and rendered automatically by `<apa-blade-host>`.

### BladeHostComponent inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `wrapBlade` | `boolean` | `true` | Wraps each component in `<apa-blade>` (header, command bar, status bar). Set to `false` when components manage their own blade chrome. |

**Wrapped mode** (default): each registered component is rendered inside `<apa-blade>`, which provides the standard blade header, close button, command bar, and status bar.

**Unwrapped mode** (`[wrapBlade]="false"`): components are rendered directly via `ngComponentOutlet` without an outer `<apa-blade>` wrapper. Use this when your blade components already include their own `<apa-blade>` or a custom chrome:

```html
<apa-blade-host [wrapBlade]="false" />
```

### BladeGridComponent inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `items` | `any[]` | `[]` | Data items to display |
| `senderPath` | `string` | `''` | Blade path of the sender (for cascade close) |
| `displayField` | `string` | `'title'` | Property name to show as row text |
| `bladePathField` | `string` | `'bladePath'` | Property name containing the target blade path |
| `idField` | `string` | `'id'` | Property name for item ID (passed as blade param) |
| `iconClass` | `string` | `'ti ti-point-filled'` | CSS class for row icon (e.g., `'ti ti-building'`) |
| `searchable` | `boolean` | `true` | Show search/filter input |

### Alternative: manual blade rendering

If you prefer explicit control over blade rendering:

```html
<apa-portal-layout>
  <apa-panorama />

  @for (blade of portal.blades(); track blade.uid) {
    <apa-blade [blade]="blade">
      @switch (blade.path) {
        @case ('customers') { <app-customer-nav /> }
        @case ('customers/list') { <app-customer-list /> }
        @case ('customers/detail') { <app-customer-detail /> }
      }
    </apa-blade>
  }

  <apa-notification-panel>
    <!-- Notification content -->
  </apa-notification-panel>
</apa-portal-layout>
```

**Important:** Always use `track blade.uid` (not `track blade.path`). The `uid` ensures Angular correctly destroys and recreates blade components when a blade at the same path is replaced (e.g., opening a different customer detail).

## Step 5: Migrate services

### PortalService

Replaces `angularportalazure.PortalService` + `PortalShell` + `Panorama` + `AreaNotification`.

```typescript
import { PortalService } from '@ardimedia/angular-portal-azure';

// Inject
readonly portal = inject(PortalService);

// Signals (read with .(), write with .set() or .update())
portal.blades()                    // BladeDefinition[]
portal.panorama()                  // PanoramaDefinition
portal.notification()              // NotificationDefinition
portal.avatarMenu()                // AvatarMenuDefinition
portal.parameter()                 // BladeParameter
portal.theme()                     // string
portal.labels()                    // PortalLabels
portal.currentLanguage()           // string
portal.isSettingsOpen()            // boolean

// Computed signals
portal.isPanoramaVisible()         // true when no blades open
portal.bladeCount()                // number of open blades
portal.positionedTiles()           // PositionedTile[] with layout coordinates

// Methods
portal.setTitle('New Title')
portal.setUserAccount({ userName: '...', firstName: '...', lastName: '...' })
portal.setTiles([...])
portal.clearBlades()
portal.setParameter({ action: 'edit', itemId: 42 })
portal.clearParameter()
portal.showNotification('path', 250, lifecycle?)
portal.hideNotification()
portal.toggleAvatarMenu()
portal.closeAvatarMenu()
portal.setAvatarMenuItems([...])
portal.toggleSettings()
portal.closeSettings()
portal.setLanguage('en')
```

### BladeService

Replaces `angularportalazure.AreaBlades`.

```typescript
import { BladeService } from '@ardimedia/angular-portal-azure';

readonly bladeService = inject(BladeService);

bladeService.setFirstBlade('customers', 'Customers', 315)   // Opens first blade, clears others
bladeService.addBlade('customers/list', 'customers', 'All Customers', 585)  // Adds after sender
bladeService.addBlade('customers/detail', 'customers/list', '', undefined, { id: '1' })  // With URL params
bladeService.closeBlade(blade)       // Removes blade + all to its right
bladeService.clearPath('customers')  // Same as closeBlade by path
bladeService.clearChild('customers') // Removes all blades after 'customers'
bladeService.clearAll()              // Removes all blades
bladeService.clearLevel(2)           // Removes blades at level 2+
bladeService.clearLastLevel()        // Removes rightmost blade
bladeService.getBlade('customers')   // Returns blade or undefined
bladeService.isBladeOpen('customers') // boolean
bladeService.getBladeParams('customers/detail')  // { id: '1' } or {}
```

### BladeRegistry (optional)

For dynamic blade rendering without `@switch` blocks:

```typescript
import { BladeRegistry } from '@ardimedia/angular-portal-azure';

const registry = inject(BladeRegistry);

// Register components for blade paths with metadata
registry.register('customers', CustomerNavComponent, { title: 'Customers', width: 315 });
registry.register('customers/list', CustomerListComponent, { title: 'All Customers', width: 585 });
registry.register('customers/detail', CustomerDetailComponent, { title: 'Customer', width: 400, params: ['id'] });

// Metadata options:
// - title: default blade title (used when no title is passed to addBlade)
// - width: blade width in pixels (default: 315)
// - params: URL parameter names this blade expects (for BladeRouter)

// Or bulk register (without metadata)
registry.registerAll({
  'customers': CustomerNavComponent,
  'customers/list': CustomerListComponent,
});

// Then use <apa-blade-host> in template instead of @switch
```

## Step 6: Migrate models

### Old → New class/interface mapping

| Old (v0.2.346) | New (v0.3.x) | Factory function |
|----------------|--------------|------------------|
| `angularportalazure.Blade` | `BladeDefinition` | `createBlade(path, title, width?, params?, uid?)` |
| `angularportalazure.BladeData<T>` | `BladeDataDefinition<T>` | `createDataBlade<T>(path, title, width?, params?, uid?)` |
| `angularportalazure.BladeNavItem` | `BladeNavItem` | `createNavItem(title, bladePath, cssClass?)` |
| `angularportalazure.Tile` | `TileDefinition` | `createTile(title, bladePath, size?)` |
| `angularportalazure.UserAccount` | `UserAccount` | Plain object |
| `angularportalazure.BladeParameter` | `BladeParameter` | Plain object |
| `angularportalazure.Exception` | `ApiException` | Plain object |
| 18 command booleans | `BladeCommand[]` | `createCommand(key, label, action, icon?)` |
| n/a | `StatusBarState` | `clearStatusBar()`, `statusBarInfo(text)`, `statusBarError(text)`, `statusBarSuccess(text)` |

### BladeDefinition properties

| Property | Type | Description |
|----------|------|-------------|
| `uid` | `number` (readonly) | Auto-incrementing unique ID for `@for` track identity |
| `path` | `string` | Unique path identifying this blade (lowercased) |
| `title` | `string` | Blade header title (signal-backed for reactive updates) |
| `subtitle` | `string` | Blade header subtitle |
| `width` | `number` | Blade width in pixels |
| `commands` | `BladeCommand[]` | Command bar buttons |
| `statusBar` | `StatusBarState` | Status bar state (signal-backed) |
| `params` | `Record<string, string>` | URL-persisted parameters (e.g., `{ id: '1' }`) |
| `isInnerHtml` | `boolean` | Whether content uses ng-content |

`BladeDataDefinition<T>` extends `BladeDefinition` with signal-backed `item`, `items`, `loading`, and `lifecycle`.

### Creating blades

```typescript
import { createBlade, createDataBlade, createNavItem, createCommand, createTile } from '@ardimedia/angular-portal-azure';

// Simple blade
const navBlade = createBlade('customers', 'Customers', 315);

// Blade with URL-persisted params
const detailBlade = createBlade('customers/detail', 'Customer', 400, { id: '1' });

// Data blade with typed item
const dataBlade = createDataBlade<Customer>('customers/detail', 'Customer', 400);
dataBlade.item = { id: 1, name: 'Acme' };
dataBlade.items = [...];
dataBlade.loading = true;

// Data blade preserving uid (when replacing existing blade in stack)
const existing = portal.blades().find(b => b.path === 'customers/detail');
const dataBlade = createDataBlade<Customer>('customers/detail', 'Customer', 400, existing?.params ?? {}, existing?.uid);

// Nav items
const navItems: BladeNavItem[] = [
  createNavItem('All Customers', 'customers/list', 'ti ti-buildings'),
  createNavItem('New Customer', 'customers/detail', 'ti ti-plus'),
];

// Commands
const commands: BladeCommand[] = [
  createCommand('save', 'Save', () => this.save(), 'ti ti-device-floppy'),
  createCommand('delete', 'Delete', () => this.delete(), 'ti ti-trash'),
];

// Or use the convenience function for detail blades:
import { createDetailCommands } from '@ardimedia/angular-portal-azure';
const commands = createDetailCommands({
  onSave: () => this.save(),
  onDelete: () => this.delete(),
  onCancel: () => this.bladeService.closeBlade(detailBlade),
}, this.portal.labels());

// Tiles
const tiles: TileDefinition[] = [
  createTile('Customers', 'customers', TileSize.Normal),
  createTile('Orders', 'orders', TileSize.Mini),
  createTile('Dashboard', 'dashboard', TileSize.HeroWide),
];
```

### Tile sizes

| Old | New |
|-----|-----|
| `TileSizes.Small` | `TileSize.Small` (90x90) |
| `TileSizes.Mini` | `TileSize.Mini` (180x90) |
| `TileSizes.Normal` | `TileSize.Normal` (180x180) |
| `TileSizes.Herowide` | `TileSize.HeroWide` (540x360) |

## Step 7: Migrate CRUD operations

The old template method pattern (`BladeData.loadItem()` override) is replaced with standalone async functions:

```typescript
import {
  executeLoadItem,
  executeLoadItems,
  executeSaveItem,
  executeDeleteItem,
} from '@ardimedia/angular-portal-azure';

// Load a single item
await executeLoadItem(blade, async () => {
  const response = await fetch(`/api/customers/${id}`);
  return response.json();
}, this.portal.labels());

// Load a list
await executeLoadItems(blade, async () => {
  const response = await fetch('/api/customers');
  return response.json();
}, this.portal.labels());

// Save
await executeSaveItem(blade, async () => {
  const response = await fetch(`/api/customers/${blade.item.id}`, {
    method: 'PUT',
    body: JSON.stringify(blade.item),
  });
  return response.json();
}, this.portal.labels());

// Delete
const shouldClose = await executeDeleteItem(blade, async () => {
  await fetch(`/api/customers/${blade.item.id}`, { method: 'DELETE' });
}, this.portal.labels());
if (shouldClose) {
  this.bladeService.closeBlade(blade);
}
```

### Lifecycle hooks

Attach to the blade's `lifecycle` property:

```typescript
blade.lifecycle = {
  onLoadItem: () => console.log('Loading...'),
  onLoadedItem: () => console.log('Loaded'),
  onSaveItem: () => console.log('Saving...'),
  onSavedItem: () => console.log('Saved'),
  isFormValid: () => this.form.valid,
};
```

## Step 8: Localization (i18n)

### Built-in languages

6 presets: `de-CH`, `de-DE`, `en`, `fr`, `es`, `it`

```typescript
// Switch language programmatically
this.portal.setLanguage('en');

// Current language
const lang = this.portal.currentLanguage(); // 'en'

// Current labels
const labels = this.portal.labels();        // PortalLabels object
```

### Custom language

```typescript
import { registerLanguagePreset, LanguagePreset, LABELS_EN } from '@ardimedia/angular-portal-azure';

const customLabels: LanguagePreset = {
  code: 'pt',
  displayName: 'Português',
  labels: {
    ...LABELS_EN,
    loading: 'Carregando...',
    saving: 'Salvando...',
    // Override as needed
  },
};
registerLanguagePreset(customLabels);
```

### Override specific labels via config

```typescript
providePortalAzure({
  title: 'My Portal',
  labels: {
    loading: 'Please wait...',
    cmdSave: 'Submit',
  },
}),
```

## Step 9: Notification panel lifecycle (optional)

```typescript
this.portal.showNotification('alerts', 300, {
  onShow: () => console.log('Panel opening'),
  onShowed: () => console.log('Panel visible in DOM'),
  onHide: () => {
    // Return false to prevent closing
    if (this.hasUnsavedChanges) return false;
    return true;
  },
});
```

## Step 10: URL-synced blade routing

Add `provideBladeRouter()` to sync the blade stack with the browser URL using path segments:

```typescript
import { provideBladeRouter } from '@ardimedia/angular-portal-azure';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    providePortalAzure({ ... }),
    provideBladeRouter(),   // Opt-in: blade paths sync to URL path segments
  ],
};
```

### Prefix configuration

By default, the router reads the route prefix dynamically from the first URL segment (e.g. `crm` from `/crm/customers`). You can override this with a fixed prefix:

```typescript
// Fixed prefix — URLs look like /app/customers/list
provideBladeRouter({ prefix: 'app' })

// No prefix — blade paths sit at the URL root: /customers/list
provideBladeRouter({ prefix: '' })

// Default (no config) — prefix is read from the first URL segment at runtime
provideBladeRouter()
```

| `prefix` value | Example URL | Notes |
|----------------|-------------|-------|
| *(omitted)* | `/crm/customers/list` | Dynamic: first URL segment is the prefix |
| `'app'` | `/app/customers/list` | Fixed prefix `app` |
| `''` | `/customers/list` | No prefix, blade paths at root |

### Routes setup

Add a wildcard route for the app prefix so Angular doesn't reject blade path segments:

```typescript
// With a prefix (default or fixed)
export const routes: Routes = [
  { path: 'crm', children: [{ path: '**', children: [] }] },
  { path: '', pathMatch: 'full', children: [] },
];

// With prefix: '' (no prefix) — use a top-level wildcard
export const routes: Routes = [
  { path: '**', children: [] },
];
```

### URL format

Blade paths are encoded as URL path segments with matrix params for per-blade parameters:

```
/crm                              → panorama (no blades)
/crm/customers                    → [customers]
/crm/customers/list               → [customers, customers/list]
/crm/customers/list/detail;id=1   → [customers, customers/list, customers/detail] with params {id:'1'}
/crm/customers/detail             → [customers, customers/detail] (new customer, no id)
```

With `prefix: ''`, the same blades produce:

```
/                                 → panorama (no blades)
/customers                        → [customers]
/customers/list                   → [customers, customers/list]
/customers/list/detail;id=1       → [customers, customers/list, customers/detail] with params {id:'1'}
```

Each segment is the blade's **short name** (suffix after the parent prefix). The `BladeRouterService` resolves segments to full blade paths using the `BladeRegistry`.

### Blade params

Per-blade parameters use Angular matrix params (`;key=value`). Declare expected params in the registry:

```typescript
registry.register('customers/detail', CustomerDetailComponent, {
  title: 'Customer', width: 400, params: ['id']
});
```

Read params in the blade component:

```typescript
const existing = this.portal.blades().find(b => b.path === 'customers/detail');
const itemId = Number(existing?.params['id']) || 0;
```

### Features

- Blade changes update the URL automatically
- Browser back/forward buttons restore blade state
- URLs are bookmarkable and shareable
- Per-blade parameters survive browser refresh
- Legacy `?blades=` query param URLs are auto-redirected to path format
- Register blade metadata for proper restoration: `registry.register('path', Component, { title, width, params })`
- Optional fixed prefix via `provideBladeRouter({ prefix })` for predictable URL structure

Without `provideBladeRouter()`, blade navigation remains purely in-memory (default).

## Step 11: Sidebar (optional)

```html
<apa-sidebar [items]="sidebarItems" [width]="220" [collapsedWidth]="60" />
```

Sidebar items use the `BladeNavItem` interface. The optional `badge` property displays a pill badge:

```typescript
const items: BladeNavItem[] = [
  { ...createNavItem('Inbox', 'inbox', 'ti ti-inbox'), badge: '3' },
  createNavItem('Settings', 'settings', 'ti ti-settings'),
];
```

## Step 12: Dark mode

Dark mode is built-in with toggle and OS auto-detect. No additional setup needed. The settings gear (top bar) provides the UI toggle. CSS custom properties handle all theming.

## Migration checklist

- [ ] Install `@ardimedia/angular-portal-azure@latest`
- [ ] Add theme CSS to `angular.json` styles
- [ ] Replace module setup with `providePortalAzure()` in `app.config.ts`
- [ ] Replace `angular.module('app', ['angularportalazure'])` dependency
- [ ] Replace `/// <reference types="@ardimedia/angular-portal-azure" />` with ES imports
- [ ] Replace `angularportalazure.PortalShell` extension with `inject(PortalService)`
- [ ] Replace `angularportalazure.PortalService` injection with `inject(PortalService)`
- [ ] Replace `angularportalazure.BladeDetail` / `BladeGrid` / `BladeNav` with new component selectors
- [ ] Replace 18 command booleans with `BladeCommand[]` array
- [ ] Replace `angularportalazure.Tile` with `TileDefinition` / `createTile()`
- [ ] Replace `angularportalazure.BladeData<T>` with `BladeDataDefinition<T>` / `createDataBlade<T>()`
- [ ] Replace `BladeData.loadItem()` overrides with `executeLoadItem()` functions
- [ ] Replace `$scope`-based reactivity with Angular signals
- [ ] Replace `angular-translate` with built-in `PortalLabels` / `setLanguage()`
- [ ] Remove AngularJS dependencies (`angular`, `angular-resource`, `angular-translate`)
- [ ] Remove hybrid bootstrap (`@angular/upgrade`, `UpgradeModule`)
- [ ] Update component templates from AngularJS syntax to Angular 21 (`@if`, `@for`, `@switch`)
- [ ] Use `track blade.uid` in any `@for` over `portal.blades()` (not `track blade.path`)
- [ ] When replacing blades in the stack with `createDataBlade`, preserve the original `uid`
- [ ] Optional: add `provideBladeRouter()` for URL-synced blade routing with path segments
- [ ] Optional: declare `params: ['id']` in registry for blades that receive URL parameters
- [ ] Verify dark mode / light mode toggle works
- [ ] Verify keyboard navigation (tiles, blades, dropdowns respond to Enter/Space/Escape)

## Public API reference

### Imports from `@ardimedia/angular-portal-azure`

**Components:**
`PortalLayoutComponent`, `PanoramaComponent`, `TileComponent`, `BladeComponent`, `BladeHostComponent`, `BladeNavComponent`, `BladeGridComponent`, `BladeDetailComponent`, `CommandBarComponent`, `NotificationPanelComponent`, `AvatarMenuComponent`, `SidebarComponent`

**Services:**
`PortalService`, `BladeService`, `BladeRegistry`, `BladeRouterService`

**Provider functions:**
`providePortalAzure(config)`, `provideBladeRouter()`

**Model interfaces:**
`BladeDefinition`, `BladeDataDefinition<T>`, `BladeDataLifecycle<T>`, `BladeCommand`, `BladeNavItem`, `BladeParameter`, `TileDefinition`, `UserAccount`, `PortalConfig`, `PortalLabels`, `LanguagePreset`, `NotificationDefinition`, `NotificationLifecycle`, `PanoramaDefinition`, `AvatarMenuDefinition`, `AvatarMenuItem`, `StatusBarState`, `ApiException`, `BladeRegistryEntry`, `BladeRouterConfig`, `AddBladeEventArgs`

**Factory functions:**
`createBlade()`, `createDataBlade<T>()`, `createNavItem()`, `createCommand()`, `createDetailCommands()`, `createTile()`, `createNotificationPanel()`, `createPanorama()`, `createAvatarMenu()`

**CRUD executors:**
`executeLoadItem()`, `executeLoadItems()`, `executeSaveItem()`, `executeDeleteItem()`

**Status bar helpers:**
`clearStatusBar()`, `statusBarInfo()`, `statusBarError()`, `statusBarSuccess()`

**Utilities:**
`filterItems<T>()`, `registerLanguagePreset()`

**Enums:**
`TileSize` (`Small`, `Mini`, `Normal`, `HeroWide`), `StandardCommandKey`

**Constants:**
`DEFAULT_LABELS`, `LABELS_DE_CH`, `LABELS_DE_DE`, `LABELS_EN`, `LABELS_FR`, `LABELS_ES`, `LABELS_IT`, `LANGUAGE_PRESETS`, `TILE_DIMENSIONS`
