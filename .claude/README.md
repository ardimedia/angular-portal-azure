---
status: Stable
updated: 2026-03-12 16:45h
---

# angular-portal-azure — Internal Notes

## Known Limitations

- **No unit tests** — The library has no `.spec.ts` files yet. The predecessor repo (`azureportalng`) has 9 Jasmine tests that can serve as templates.
- **No router integration** — The blade stack does not sync with the browser URL. Blade states are not bookmarkable or deep-linkable.
- **No responsive / mobile layout** — CSS has no media queries. The blade stack and panorama break on small screens.

## Related Projects

- **AMMS** (`ardimedia.com.amms`): Sole consumer of this library — hybrid AngularJS/Angular app being modernized to Angular 21
- **Blazor Portal** (`blazor-portal-azure`): Planned .NET 10.0 Razor Class Library implementing the same Azure Portal blade UX for Blazor apps
