---
status: Stable
updated: 2026-02-20 18:50h
references:
  - ../azureportalng/.claude/status.md — Predecessor project status
---

# angular-portal-azure — Project Status

An HTML/UI framework for building portal-style web applications mimicking the
Microsoft Azure Portal look and feel (blade navigation, sidebar, dashboard tiles).

**Repository**: `https://github.com/ardimedia/angular-portal-azure.git`
**NPM Package**: `@ardimedia/angular-portal-azure` (published version: 0.2.346)
**License**: ISC (Copyright 2016–2018, Ardimedia)
**Active development**: Stalled since June 2020

## Summary

The repository contains one working AngularJS 1.x library (published to npm as v0.2.346)
and six failed or incomplete attempts to migrate it to modern Angular. The most promising
Angular version (2020-06, Angular 10) has a well-structured codebase but was never completed
or published. Development has been inactive for over 5 years. The repo is cluttered with
abandoned folders and 104 stale Dependabot branches.

The library's sole consumer is the AMMS project (`ardimedia.com.amms`), where it is deeply
integrated as the core UI framework — providing the portal shell, blade navigation, and
layout system across ~90 TypeScript files and ~71 HTML templates.

## Timeline

| Period | Activity |
|---|---|
| Oct 2016 | Initial commit, AngularJS 1.x library created |
| 2016–2018 | AngularJS library developed and published to npm |
| 2017 | First Angular (v4) migration attempt |
| Mar 2018 | Second attempt (Angular 5 + Nrwl Nx) |
| Oct 2018 | Third attempt (Angular 7 + Web Components) |
| Dec 2018 | Fourth attempt (Angular 7.1 + ng-packagr) |
| Sep 2019 | Fifth attempt (Angular 8 + SSR) |
| Jun 2020 | Sixth attempt (Angular 10 + ng-packagr) — most mature |
| Oct 2020 | Last human commit (CodeQL activation), development stalled |
| 2020–2026 | Only Dependabot security update branches (none merged) |


## Folder Overview — The Seven Attempts

### Working

| Folder | Stack | Purpose |
|---|---|---|
| `angular-portal-azure/` | AngularJS 1.x, TypeScript 3.9, .NET Framework 4.8 | The original library (npm v0.2.346) |
| `angular-portal-azure.sample-1/` | AngularJS 1.x, TypeScript 3.9, .NET Framework 4.8 | Sample app consuming the library |

### Not Working (marked "will be deleted" in old README, never deleted)

| Folder | Stack | Why it failed / Notes |
|---|---|---|
| `angular-portal-azure-v2/` | Angular 4, CLI 1.0 RC | Earliest Angular migration attempt, pure client-side |
| `angular-portal-azure-2018-03/` | Angular 5.2, Nrwl Nx, .NET Core 2.1 | Tried Nx monorepo approach |
| `angular-portal-azure-2018-10/` | Angular 7, @angular/elements, .NET Core | Tried Web Components approach, documented issues with ViewEncapsulation |
| `angular-portal-azure-2018-12/` | Angular 7.1, ng-packagr 4, .NET Core | First proper Angular library packaging attempt |
| `angular-portal-azure-2019-09a/` | Angular 8.2, @nguniversal, oidc-client, .NET Core | Tried SSR + auth |

### Work in Progress (most mature Angular version)

| Folder | Stack | Notes |
|---|---|---|
| `angular-portal-azure-2020-06/` | Angular 10.1, ng-packagr 10, .NET Core 3.1 | Proper library structure, most complete Angular port |


## Detailed State of Key Folders

### `angular-portal-azure/` — AngularJS Library (WORKING)

The only confirmed working and published code. Compiles to a single `dist/apn.js` (84 KB).

**Source structure** (`angularportalazure/`):
- `domain/` — Blade, BladeData, BladeGrid, Dashboard, Tiles, PortalService, etc. (25 TS files)
- `directives/` — blade, dialog, dirtyflag, grid, home, nav (with HTML templates)
- `services/` — DataService
- `css/` — Stylesheets
- `images/` — Assets

**Build**: `build.bat` compiles TypeScript, copies templates/CSS/images to `dist/`
**Publish**: `publish.bat` runs `npm version patch && build && npm publish`

**Oddity**: The `package.json` lists both AngularJS dependencies (`angular`, `angular-resource`, `angular-translate`) AND Angular 7 dependencies (`@angular/core` ^7.0.0 etc.), suggesting an incomplete migration.

### `angular-portal-azure-2020-06/` — Angular 10 Library (WORK IN PROGRESS)

The most mature Angular port, using proper library packaging via ng-packagr.

**Library location**: `ClientApp/projects/ardimedia/angular-portal-azure/`
**Module**: `AngularPortalAzureModule.forRoot(appConfig)`

**Implemented**:
- Components: AppComponent, BladeComponent, GridComponent, NavComponent, AppboardComponent, PageNotFoundComponent, SplashScreenComponent
- Services: AppService, AppConfigService, BladeService, BrowserService, InjectorService
- Directives: RouterOutletNamedDirective, ThemingDirective
- Domain model: Blade, BladeData, BladeDetail, BladeGrid, BladeNav, Dashboard, Tiles, Sidebar, PortalService, Exception handling

**Incomplete**:
- `dialog/` and `dirtyflag/` components contain only README placeholders
- Some exports are commented out in `public-api.ts`
- Library version is `0.0.1` (likely never published)

**Technology debt**: Angular 10 is EOL (current is Angular 19+), .NET Core 3.1 is also EOL.


## Git State

- **Branch**: `master`
- **Total commits**: 194 (108 human-authored, 86 Dependabot)
- **Branches**: 107 total — only 3 real (`master`, `origin/master`, `origin/feature/webpack`), 104 are unmerged Dependabot branches
- **Tags**: None
- **Local changes**: Uncommitted modifications to `dist/` files and `package-lock.json` in multiple folders; several untracked `web.config` files

## CI/CD

- **GitHub Actions**: Only CodeQL security analysis (JavaScript + C#), no build/deploy pipeline
- **Dependabot**: Active but all 104 security update branches remain unmerged


## Usage in `D:\CODE\amvs`

The library is used by **one project**: `ardimedia.com.amms` (AMMS — Media Management).
No other projects under `amvs` reference it. The `azureportalng` NuGet package (from the
predecessor repo) is not used anywhere.

### Consuming Project

| Attribute | Value |
|---|---|
| Path | `D:\CODE\amvs\ardimedia.com.amms\Amx.Amms.Ui.Web\` |
| Package name | `amx.amms.ui.web` |
| Description | "Customer web site for Media Management." |
| Dependency | `@ardimedia/angular-portal-azure` `^0.2.345` |
| Angular version | ^5.2.11 (hybrid AngularJS/Angular 2+ app) |
| AngularJS version | ^1.8.3 |

### How the Library is Consumed

The library is consumed via the **AngularJS global namespace** pattern — no ES module imports.

**Triple-slash reference** (`app/app.ts`):
```typescript
/// <reference types="@ardimedia/angular-portal-azure" />
```

**AngularJS module dependency** (`app/app.ts`):
```typescript
angular.module('app', [..., 'angularportalazure', ...]);
```

**Angular 2+ bridge** (`App2/app.ts`) — the AMMS app is a hybrid AngularJS/Angular 2+ app
that upgrades the AngularJS portal service for use in Angular components:
```typescript
providers: [{
    deps: ['$injector'],
    provide: 'angularportalazure.portalService',
    useFactory: (i: any) => i.get('angularportalazure.portalService'),
}]
```

**Upgraded directive** (`App2/core/core.module.ts`):
```typescript
@Directive({ selector: 'angular-portal-blade' })
export class AngularPortalBladeDirective extends UpgradeComponent { ... }
```

### Library Classes Used in AMMS

From the AngularJS layer (`app/`):
- `angularportalazure.PortalShell` — `AppShell` extends this as the top-level shell
- `angularportalazure.PortalService` — injected in virtually every blade component
- `angularportalazure.BladeDetail`, `BladeGrid`, `BladeNav`, `BladeNavItem`
- `angularportalazure.BladeParameter`
- `angularportalazure.Tile`, `UserAccount`
- `angularportalazure.Debug`, `Exception`

From the Angular 2+ layer (`App2/`):
- `angularportalazure.BladeDetail`, `BladeNav`, `BladeNavItem`
- `angularportalazure.PortalService`, `UserControlBase`
- `angularportalazure.Exception`

### Depth of Integration

The library is **deeply embedded** — it provides the entire portal shell, blade navigation,
and layout framework for AMMS. The application's `AppShell` directly extends
`angularportalazure.PortalShell`, and virtually every blade component either extends a
library base class or injects `angularportalazure.portalService`. Approximately **90 active
TypeScript files** and **71 active HTML files** reference the library. There are also backup
copies (Backup/, Backup1/, Backup2/, ZOBSOLETE/) that contain the same dependency.


## Migration Analysis: azureportalng to angular-portal-azure

Comparison of the predecessor repo (`azureportalng/azureportalng/`) against the AngularJS
library in this repo (`angular-portal-azure/angular-portal-azure/`).

### Conclusion

The NEW repo is **substantially more evolved** than the OLD in almost every dimension.
Every domain class from OLD has an equivalent in NEW (some renamed/restructured), and NEW
adds significant functionality on top. Only one item has high migration value.

### What NEW Added Beyond OLD

- **Generic CRUD framework**: `BladeData<T>` with full `loadItem/saveItem/deleteItem/execute`
  lifecycle and `onXxx()`/`onXxxed()` extension points (OLD had only a stub)
- **Status bar system**: `UserControlBase` expanded with 12+ status bar helper methods
- **Notification area**: `AreaNotification.ts` — entirely new slide-in panel
- **Command enable/disable**: `isCommandXxxEnabled` booleans per blade command
- **Excel command**: New export command in blade toolbar
- **Responsive layout**: Dynamic blade height calculation
- **i18n**: `angular-translate` integration
- **Analytics**: `angulartics` page tracking
- **.NET exception hierarchy**: `ExceptionDotNet`, `ArgumentNullException`,
  `EntityValidationException` etc.
- **Component pattern**: Directives upgraded to AngularJS components with `bindings`/`controller`

### Items Only in OLD — Migration Value

| Item | Value | Reasoning |
|---|---|---|
| **Jasmine test suite (9 files)** | **HIGH** | NEW has zero tests. Tests cover Debug, Blade, BladeArea, PortalService, BladeData, BladeDetail, BladeList, AvatarMenu, UserControlBase. Patterns are directly adaptable (need namespace rename, `$scope` additions, `AreaBlades` rename) |
| Dialog SCSS (440 lines ngDialog theme) | Low | Should come from the ng-dialog npm package, not bundled |
| Design test page (`design/test/azure.html`) | Low | Useful for CSS development, not essential |
| Gulp build system | None | `build.bat` approach in NEW is simpler and adequate |
| NuGet packaging (`package.nuspec`) | None | Fully replaced by npm publishing |
| `BladeService.ts` | None | 100% commented out in OLD, replaced by AreaBlades |
| `DataService.ts` | None | Trivial HTTP wrapper, intentionally commented out in NEW |
| `DirtyFlag` directive | None | 100% commented out in OLD, placeholder in both repos |
| OBSOLETE code (proxy properties, `$rootScope` events) | None | Correctly removed in NEW |

### Recommendation

The only item worth migrating is the **test suite**. The 9 Jasmine test files (~700 lines
total) provide patterns for testing the core blade lifecycle, debug system, and service
injection. They would need adaptation for the renamed classes and expanded APIs, but serve
as valuable templates — especially since NEW has no tests at all.
