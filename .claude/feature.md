---
status: Draft
updated: 2026-02-21 19:15h
references:
  - .claude/status.md — Current project status and usage analysis
  - ../azureportalng/.claude/status.md — Predecessor project status
  - ../../amvs/am.app/.claude/feature.md — Am.App platform (migration target)
  - ../../amvs/am.app/.claude/refactor.md — AMMS decomposition plan
---

# angular-portal-azure — Feature Plan: Next Level

## Context

The Azure Portal-style blade UI framework exists in three forms:

- **azureportalng** (2014–2017): AngularJS 1.x, abandoned predecessor
- **angular-portal-azure** (2016–2020): AngularJS 1.x published (npm v0.2.346) + 6 failed
  Angular migration attempts, stalled since June 2020
- **AMMS** (`ardimedia.com.amms`): The sole consumer — hybrid AngularJS/Angular 5 app,
  deeply integrated (~90 TS files, ~71 HTML templates)

AMMS is being **decomposed into Am.App.\* packages** (see `am.app/.claude/refactor.md`)
and consumed from Blazor apps (`am.app`, `bvd.li.toolbox`). The Angular upgrade is interim.

The Blazor ecosystem is already mature: `Am.Blazor.Shared.*` on .NET 10.0 with FluentUI
v4.13 + Telerik v12.3, with multiple production apps (Weelinq, Voxphone, Bvd.Li.Toolbox).


## Goals

1. **Angular Library Rewrite** — Clean-room Angular 21+ library (standalone components, signals)
2. **AMMS Interim Modernization** — Upgrade AMMS to latest Angular using the new library
3. **AMMS Backend Modernization** — Drop .NET Framework 4.8, pure .NET 10.0
4. **Blazor Portal Module** — Standalone repo, .NET 10.0 RCL implementing Azure Portal blade UX


## Estimate (with AI assistance)

| Workstream | Scope | Estimate | Notes |
|---|---|---|---|
| **A: Angular Library Rewrite** | ~12 components, models, services, CSS, sample app | **3–5 days** | Mostly greenfield; design decisions and CSS porting take the most time |
| **B: AMMS Frontend Modernization** | ~90 TS files, ~71 HTML templates, build system, Kendo upgrade | **8–12 days** | Largest workstream; bulk file conversion is AI-friendly but manual verification needed for every blade |
| **C: AMMS Backend Modernization** | 1 legacy csproj rewrite, 12 net48 drops, MEF removal (108 files), EF6 → EF Core, 65 controllers | **8–12 days** | Ui.Web + MEF replacement + EF migration are the hard parts; dropping net48 targets is mechanical |
| **D: Blazor Portal Module** | ~12 Razor components, services, models, CSS, sample app | **3–5 days** | Greenfield; informed by Workstream A learnings |
| **Total** | | **22–34 days** | |

Estimates assume focused work sessions with AI doing the bulk of code generation, file
conversion, and scaffolding. The human effort is primarily review, testing, design decisions,
and debugging integration issues. No estimate for deployment/infrastructure changes.


## Workstream A: Angular Library Rewrite

Clean-room Angular 21+ library. Design reference: the Angular 10 attempt
(`angular-portal-azure-2020-06/`) and the AngularJS library.

**Repository**: Same repo, new folder: `angular-portal-azure-2026-02/`
**Naming**: Year+month-based (2026-02) rather than Angular version, matching the existing convention
**Package**: `@ardimedia/angular-portal-azure` v0.3.0
**Project type**: `.esproj` (Microsoft.VisualStudio.JavaScript.Sdk) + `.slnx`

### Project Structure

```
angular-portal-azure-2026-02/
├── angular-portal-azure-2026-02.slnx      # VS solution (wraps .esproj)
├── angular-portal-azure-2026-02.esproj    # VS JavaScript SDK project
├── angular.json                           # Two projects: sample app + library
├── package.json                           # Angular 21, ng-packagr
├── tsconfig.json                          # Base tsconfig with path mappings
├── projects/
│   └── ardimedia/angular-portal-azure/    # ng-packagr library
│       ├── src/lib/
│       │   ├── components/                # portal-layout, panorama, tile, blade-host, blade,
│       │   │                              # blade-nav, blade-grid, blade-detail,
│       │   │                              # command-bar, notification-panel, avatar-menu,
│       │   │                              # sidebar
│       │   ├── models/                    # Blade, BladeData<T>, TileDefinition, etc.
│       │   ├── services/                  # PortalService, BladeService (signals-based)
│       │   └── theming/                   # CSS + theme tokens
│       └── package.json
└── src/                                   # Sample app (ng serve)
```

### Key Design Decisions

1. **Standalone components only**: No NgModule. `providePortalAzure(config)` functional
   provider pattern.

2. **Signals for state**: `PortalService` uses Angular signals (`signal()`, `computed()`)
   for blade stack, panorama visibility, notification state.

3. **No AngularJS artifacts**: Clean DI with `inject()`. No `$scope`, `$rootScope`, etc.

4. **Shared CSS**: Same Azure Portal-inspired CSS as the Blazor version.

5. **Content projection**: `<ng-content>` for custom blade body, matching Blazor's
   `RenderFragment` pattern.

### Implementation Status (2026-02-21)

All 12 components, 13 models, 3 services, theming CSS (639 lines), and build configuration
are **implemented** — no stubs. Angular 21 patterns used throughout (standalone, signals,
inject(), @if/@for/@switch, makeEnvironmentProviders). Sample app demonstrates full
tile → nav → grid → detail → save workflow.

**Overall: ~95% complete.** Open issues below.

### Open Issues

1. **No unit tests** — Zero `.spec.ts` files in the library. The single sample app test
   (`app.spec.ts`) is broken (expects non-existent `<h1>` tag). The predecessor repo
   `azureportalng` has 9 Jasmine tests (~700 lines) that could serve as templates.

2. **Typo in BladeService** — `isBladOpen()` should be `isBladeOpen()` (missing `e`).

3. **BladeHostComponent not used in sample app** — The app manually iterates blades with
   `@for` + `@switch` on blade paths instead of using the provided `<apa-blade-host>`.
   Either the sample should use BladeHostComponent, or BladeHostComponent needs a dynamic
   content registry (e.g. a `Map<string, Type<Component>>` or template input) so consumers
   don't have to re-implement blade routing.

4. **Sample app CSS build-order dependency** — `styles.scss` imports from `../dist/...`
   which requires the library to be built first. Should import from the library source
   path during development, or use Angular's `stylePreprocessorIncludePaths`.

5. **NotificationLifecycle not wired** — `notification.model.ts` defines lifecycle hooks
   (`onHide`, `onShow`, `onShowed`) but `NotificationPanelComponent` does not call them.

6. **No router integration** — Blade stack does not sync with the browser URL. Opening a
   blade path is not bookmarkable or deep-linkable.

7. **Hardcoded German strings** — Status bar messages (`Laden...`, `Speichern...`,
   `Loeschen...`) and sample app labels are hardcoded. No i18n mechanism. Acceptable for
   AMMS (German-only) but limits reusability.

8. **No accessibility** — No ARIA labels, roles, keyboard navigation, or focus management
   on blades, menus, or command bar. No skip-navigation links.

9. **No dark mode / theme switching** — `PortalService` stores a `theme` signal but there
   is no CSS dark mode variant and no runtime theme switching mechanism.

10. **No responsive / mobile layout** — CSS has no media queries. Blade stack and panorama
    break on small screens.


## Workstream B: AMMS Interim Modernization

Upgrade AMMS to Angular 21 using the new library. **Minimal viable modernization** — AMMS
functionality is being decomposed into Am.App.\* packages consumed by Blazor apps.

### Scope

1. Remove hybrid bootstrap (`@angular/upgrade`, AngularJS, SystemJS)
2. Convert ~20 AngularJS blade controllers to Angular components
3. Replace build system (SystemJS + ASP.NET bundling → Angular CLI)
4. Consume `@ardimedia/angular-portal-azure` v0.3.0 (Angular 21)
5. Keep the portal blade UX

### Key Risks

- ~90 TS files reference the old library via global namespace → need ES module conversion
- No tests — all changes manually verified
- Kendo UI 2018 needs upgrade to Angular-native `@progress/kendo-angular-*`
- .NET Framework 4.8 backend stays as-is during this phase (API unchanged)

### Implementation Status (2026-02-21)

New Angular 21 project created at `Amx.Amms.Ui.Web/frontend/`. Production build exists
at `Amx.Amms.Ui.Web/ng/` (built 2026-02-21). **Side-by-side deployment** — the Angular 21
app is served at `/ng/` alongside the legacy AngularJS/Angular 5 app.

**Library integration**: `@ardimedia/angular-portal-azure` linked via `file:` reference to
the local `angular-portal-azure-2026-02/dist/`. Uses `PortalLayout`, `Panorama`, `Blade`,
`BladeNav`, `BladeDetail`, `NotificationPanel`, `PortalService`, `BladeService`, and all
factory functions (`createTile`, `createBlade`, `createDataBlade`, `createNavItem`,
`createCommand`).

**Base layer ported from App2/:**
- `DataService<T>` (260 lines, RxJS 5 → 7, `.toPromise()` → `lastValueFrom()`)
- `DebounceDirective`, `BooleanPipe`, `DatexPipe` (moment → Angular DatePipe, de-CH),
  `FilterStringPipe`, `SafeHtmlPipe`, `EmailAddressValidator`

**App shell**: Loads current user and module tiles from API, filters obsolete modules,
handles i18n for LGT BC tile title.

**Dependencies**: Kendo UI for Angular v23 (`@progress/kendo-angular-grid` etc.) installed
and ready for use.

### Module Migration Phases

| Phase | Modules | Status |
|---|---|---|
| 1 | ammstool (nav + 2D barcode) | **Done** |
| 2 | bvdballeristo, bergbahnen (event) | Not started |
| 3 | ammsadmin, ammsfilesystem, ammserp | Not started |
| 4 | lgtbc, amviewer | Not started |

**Overall: Phase 1 complete (~15% of module porting).** Infrastructure and base layer are
fully in place. Remaining phases are module-by-module blade porting.


## Workstream C: AMMS Backend Modernization

Drop .NET Framework 4.8 from all AMMS projects, making .NET 10.0 the sole target.

### Current State

Most projects already multi-target `net10.0-windows;net48`. The migration is about
**dropping the net48 target** and modernizing the one remaining legacy project.

| Category | Projects | Current Target |
|---|---|---|
| **Legacy (only net48)** | `Amx.Amms.Ui.Web` | .NET Framework 4.8 (old-style csproj) |
| **Multi-target** | `Amx.Amms.Application`, `.CrossCutting`, `.Domain`, `.Domain.AmmsAdmin`, `.Domain.AmmsErp`, `.Infrastructure`, `.Infrastructure.Tests`, `.Ioc`, `.WebService`, `.TestData` (net10.0-windows;net48), `.Domain.Seedwork`, `.Resources` (net10.0;net48) | 12 projects |
| **Already net10.0** | `Amx.Amms` (root), all `Ui.Cmd.*` (6 projects), most `.Tests` (9 projects) | net10.0-windows |
| **Lagging** | `.Infrastructure.Core`, `.Infrastructure.Core.Tests` | net9.0 |
| **Legacy test** | `.Infrastructure.Net48.Tests` | net481 |

### Scope

1. **Migrate `Amx.Amms.Ui.Web`** from old-style .csproj / ASP.NET MVC (.NET Framework 4.8)
   to SDK-style .csproj / ASP.NET Core (.NET 10.0)
   - Migrate WebApi controllers (note: `Amx.Amms.WebService` already has ASP.NET Core
     code paths via `#if NET` — Ui.Web controllers may not)
   - Replace ASP.NET bundling (`BundleConfig.cs`) with Angular CLI static file serving
   - Migrate Razor views (`_Layout.cshtml`, `index.cshtml`) to serve Angular CLI output
   - Migrate authentication (ASP.NET Identity → ASP.NET Core Identity)
2. **Drop `net48` from all multi-targeting projects** (12 projects)
   - Remove `net48` from `TargetFrameworks`, keeping only `net10.0-windows` (or `net10.0`)
   - Remove any `#if NET48` / `#if NETFRAMEWORK` conditional compilation blocks
   - Remove net48-only NuGet dependencies
3. **Upgrade `net9.0` projects** to `net10.0`
   - `Amx.Amms.Infrastructure.Core` → net10.0
   - `Amx.Amms.Infrastructure.Core.Tests` → net10.0
4. **Handle `Amx.Amms.Infrastructure.Net48.Tests`** (net481)
   - Migrate tests to net10.0 or delete if covered elsewhere
5. **Replace MEF** dependency injection with ASP.NET Core built-in DI (~108 files with
   `[Export]`/`[Import]`/`[ImportingConstructor]`/`[PartCreationPolicy]` across all layers)
6. **Migrate Entity Framework 6 → EF Core**
   - Replace EF6 DbContext, mappings, and migrations with EF Core equivalents
   - Update LINQ queries for EF Core compatibility
   - Migrate connection string configuration to ASP.NET Core configuration
7. **Replace .NET Framework-only APIs** (e.g., `System.Drawing` → `System.Drawing.Common`
   or `SkiaSharp`)

### Key Risks

- `Amx.Amms.Ui.Web` is the hardest — old-style csproj with ASP.NET MVC, MEF, BundleConfig
- MEF → ASP.NET Core DI requires re-wiring 108 files with `[Export]`/`[Import]` attributes
- `Amx.Amms.WebService` has 65 controllers — already dual-compiled via `#if NETFRAMEWORK`/`#if NET`
  conditional blocks, but MEF attributes and net48-only code paths must be cleaned up
- EF6 → EF Core migration: DbContext, mappings, migrations, LINQ query compatibility
- Conditional compilation blocks (`#if NET48`) may hide net48-only code paths
- Database connection strings and deployment configuration will change


## Workstream D: Blazor Portal Module

A Razor Class Library (RCL) that provides an Azure Portal-style blade UI as an activatable
layout module for any Blazor Web App.

**Repository**: New standalone repo at `D:\CODE\github\ardimedia\blazor-portal-azure`
**Target**: .NET 10.0, Blazor Web App (Auto render mode)

### Project Structure

```
Am.Blazor.Shared.PortalAzure/              # RCL (NuGet package)
├── Components/
│   ├── PortalLayout.razor                # Root layout
│   ├── Panorama.razor                    # Startboard with tiles
│   ├── Tile.razor                        # Individual tile (icon, title, route)
│   ├── BladeHost.razor                   # Blade area (manages blade stack)
│   ├── Blade.razor                       # Blade chrome (header, commands, content, status bar)
│   ├── BladeNav.razor                    # Navigation blade (list of links)
│   ├── BladeGrid.razor                   # Grid/list blade (filterable data grid)
│   ├── BladeDetail.razor                 # Detail/edit blade (form with CRUD commands)
│   ├── CommandBar.razor                  # Blade command bar (save, delete, new, etc.)
│   ├── NotificationPanel.razor           # Slide-in notification area
│   ├── AvatarMenu.razor                  # User menu (top-right)
│   └── Sidebar.razor                     # Optional sidebar navigation
├── Services/
│   ├── PortalService.cs                  # Central state: blade stack, panorama, notifications
│   ├── BladeService.cs                   # Blade lifecycle: open, close, navigate
│   └── PortalConfiguration.cs           # Configuration (title, tiles, theme)
├── Models/
│   ├── BladeBase.cs                      # Base blade model (path, title, width, commands)
│   ├── BladeData.cs                      # Generic CRUD blade model with lifecycle hooks
│   ├── TileDefinition.cs                 # Tile config (title, icon, route, size)
│   ├── BladeCommand.cs                   # Command definition (label, icon, action, enabled)
│   ├── BladeNavItem.cs                   # Nav item (title, icon, blade path, roles)
│   └── StatusBar.cs                      # Status bar state and messages
├── Theming/
│   ├── PortalTheme.cs                    # Theme definition (colors, Azure-derived)
│   └── portal-azure.css                  # Azure Portal-style CSS
├── Extensions/
│   └── ServiceCollectionExtensions.cs    # builder.Services.AddPortalAzure(config => ...)
└── Am.Blazor.Shared.PortalAzure.csproj

Am.Blazor.Shared.PortalAzure.Sample/       # Sample Blazor Web App
├── Apps/
│   ├── Dashboard/                        # Sample tiles + startboard
│   ├── Customers/                        # Sample nav → grid → detail blade flow
│   └── Settings/                         # Sample standalone blade
└── Program.cs
```

### Key Design Decisions

1. **Activatable module**: `builder.Services.AddPortalAzure(config => { ... })` registers
   services and configures tiles/routes. Apps opt-in by using `<PortalLayout>` as layout.

2. **Part of Am.Blazor.Shared.\* family**: Named `Am.Blazor.Shared.PortalAzure`, standalone
   repo but aligned with the shared package naming. Must work independently of other
   Am.Blazor.Shared packages. May optionally use FluentUI icons or CSS variables.

3. **Blade stack via service, not router**: `BladeService` manages a `List<BladeBase>` stack,
   rendered by `BladeHost.razor`. No named router outlets. URL can optionally reflect the
   current blade path for bookmarkability.

4. **RenderFragment content**: Each blade accepts `RenderFragment ChildContent` for custom
   body. BladeNav/BladeGrid/BladeDetail provide structured content patterns.

5. **Declarative commands**: Blades declare commands via `List<BladeCommand>` (not 18
   individual booleans). Each has label, icon, action callback, and enabled predicate.

6. **CSS ported from angular-portal-azure**: The `fxs-*` / `apa-*` class names and
   Azure-inspired styling, using CSS custom properties for theming.


## Priority and Sequencing

```
Phase 1: Angular Library Rewrite (Workstream A)
  ├── Clean-room Angular 21+ rewrite
  ├── Same UX concepts, modern framework
  └── Published as npm v1.0.0

Phase 2: AMMS Frontend Modernization (Workstream B)
  ├── Depends on Phase 1
  ├── Remove AngularJS hybrid, pure Angular 21
  └── Frontend only — backend stays on .NET Framework 4.8

Phase 3: AMMS Backend Modernization (Workstream C)
  ├── Partially parallel with Phase 2 (only Ui.Web depends on Angular CLI output)
  ├── Migrate .NET Framework 4.8 → .NET 10.0
  └── EF6 → EF Core, MEF → built-in DI, ASP.NET MVC → ASP.NET Core

Phase 4: Blazor Portal Module (Workstream D)
  ├── Aligns with platform direction (.NET 10 / Blazor)
  ├── Consumed by bvd.li.toolbox and future Am.App Blazor hosts
  └── Informed by learnings from Angular rewrite
```


## Open Questions

1. Should Blazor and Angular libraries share a common CSS package, or is duplicated CSS
   acceptable?
2. For AMMS: upgrade Kendo to Angular-native, or use a lighter grid given AMMS is being
   phased out?
