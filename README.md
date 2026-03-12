# @ardimedia/angular-portal-azure

An Angular component library for building **portal web applications** in the style of **Microsoft Azure Portal**.

Provides a ready-made shell with a top bar, panorama dashboard with tiles, a horizontal blade stack, command bars, navigation panels, notification panel, and theming — all driven by Angular signals.

Published on npm: [@ardimedia/angular-portal-azure](https://www.npmjs.com/package/@ardimedia/angular-portal-azure)

## Features

- Azure Portal-style layout (top bar, panorama tiles, blade stack)
- Signal-based state management (no RxJS required)
- Standalone components (Angular 21+, zoneless compatible)
- Dark / light mode with manual toggle and OS auto-detect
- Built-in i18n with 6 language presets (DE-CH, DE-DE, EN, FR, ES, IT) and custom language registration
- CSS custom properties for full theme control
- Keyboard accessible (WCAG compliant ARIA roles, focus management)
- Blade registry for dynamic component routing

## Quick Start

### Install

```bash
npm install @ardimedia/angular-portal-azure
```

### Configure

```typescript
// app.config.ts
import { providePortalAzure } from '@ardimedia/angular-portal-azure';

export const appConfig: ApplicationConfig = {
  providers: [
    providePortalAzure({
      title: 'My Portal',
      userAccount: {
        userName: 'user@example.com',
        firstName: 'Jane',
        lastName: 'Doe',
      },
    }),
  ],
};
```

### Add the theme CSS

In `angular.json`:

```json
"styles": [
  "node_modules/@ardimedia/angular-portal-azure/theming/portal-azure.css"
]
```

### Use components

```html
<apa-portal-layout>
  <apa-panorama />
  <!-- Blades are rendered by the blade stack -->
</apa-portal-layout>
```

## Project Structure

```
angular-portal-azure/          Workspace root (Angular 21 + ng-packagr)
  projects/ardimedia/
    angular-portal-azure/      Library source (@ardimedia/angular-portal-azure)
      src/lib/
        components/            Standalone components
        models/                TypeScript interfaces and factory functions
        services/              PortalService, BladeService, BladeRegistry
        theming/               CSS theme (portal-azure.css)
  src/                         Demo application
```

## Components

| Component | Selector | Description |
|-----------|----------|-------------|
| PortalLayoutComponent | `apa-portal-layout` | Root shell with top bar, settings gear, avatar menu |
| PanoramaComponent | `apa-panorama` | Dashboard with tiles |
| TileComponent | `apa-tile` | Individual dashboard tile |
| BladeComponent | `apa-blade` | Blade container with header, command bar, status bar |
| BladeHostComponent | `apa-blade-host` | Renders the blade stack (supports BladeRegistry) |
| BladeNavComponent | `apa-blade-nav` | Navigation list blade |
| BladeGridComponent | `apa-blade-grid` | Searchable data grid blade |
| BladeDetailComponent | `apa-blade-detail` | Detail/edit form blade |
| CommandBarComponent | `apa-command-bar` | Toolbar with action buttons |
| NotificationPanelComponent | `apa-notification-panel` | Slide-in notification panel |
| SidebarComponent | `apa-sidebar` | Collapsible vertical navigation |
| AvatarMenuComponent | `apa-avatar-menu` | User avatar with dropdown |

## Services

| Service | Description |
|---------|-------------|
| `PortalService` | Central state: blades, panorama, notifications, labels, theme |
| `BladeService` | Blade stack operations: add, close, cascade, clear |
| `BladeRegistry` | Maps blade paths to components for dynamic rendering |

## Development

```bash
cd angular-portal-azure

# Serve the demo app
npm start

# Build the library in watch mode
npm run dev

# Build the library (production)
npx ng build @ardimedia/angular-portal-azure

# Run tests
npm test
```

## Deployment

See [README-ARDIMEDIA-DEPLOYMENT.md](README-ARDIMEDIA-DEPLOYMENT.md) for publishing to npmjs.com.

## License

MIT
