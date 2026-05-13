# TODO

## Migration: npm publishing target — npmjs.org → Azure Artifacts npm feed

**Status:** Open
**Created:** 2026-05-12
**Hard deadline:** 2026-08-10 (npm token `azure-devops-weelinq-ci` expires)

### Affected package built from this project

- `@ardimedia/angular-portal-azure` (currently 0.3.25 on npmjs.org, published 2 months ago)
  Source: [angular-portal-azure/projects/ardimedia/angular-portal-azure](angular-portal-azure/) (built via `npx ng build @ardimedia/angular-portal-azure`)

### Why

The npmjs.org-based publishing flow requires a long-lived npm token that has to be rotated every 90 days. Azure DevOps does not support npm Trusted Publishing / OIDC. Moving to an Azure Artifacts npm feed eliminates the rotation problem (Service Connection auth, analogous to the existing NuGet `am-private` feed).

This is a public-OSS-style repo (GitHub + LICENSE + CONTRIBUTE), but the **published packages are private** — they should not have been on the public npmjs.org registry in the first place if they're only consumed by closed-source projects (e.g. weelinq.com).

### What needs to change in THIS project

- [ ] Decide registry strategy:
  - Option A: All `@ardimedia/angular-portal-azure` versions to Azure Artifacts (closed)
  - Option B: Public stays on npmjs.org for OSS consumers + private mirror on Azure Artifacts (more work, more confusion)
  - **Recommended: Option A** unless there are documented external consumers
- [ ] Switch publish target in build pipeline
- [ ] Re-publish 0.3.25 (and any other actively-consumed versions) to the new feed
- [ ] Deprecate (not unpublish) `@ardimedia/angular-portal-azure` on npmjs.org if Option A
- [ ] Update [README.md](README.md) and [README-ARDIMEDIA-DEPLOYMENT.md](README-ARDIMEDIA-DEPLOYMENT.md) with new registry/install instructions
- [ ] Update GitHub repo description to clarify the package is now private-registry

### Out of scope here

The following legacy `@ardimedia/*` packages on npmjs.org are NOT built from this repo and are NOT in active use (last publish 5–9 years ago) — leave them as-is, no migration:

- `@ardimedia/amcm-cms`, `@ardimedia/amcm-image-editor` (predecessors of `am-cm-cms`/`am-cm-image-editor`)
- `@ardimedia/angular-helper`, `@ardimedia/amlib-js-helper`
- `@ardimedia/cropperjs`, `@ardimedia/d3-cloud` (old forks)

`@ardimedia/am-lib-angular` (1.0.9, 2 years old) is referenced by weelinq.com but its source could not be located in the local d:\CODE tree — verify whether it is still actively built or pinned to the existing 1.0.9 forever. If frozen, deprecate on npmjs.org and republish 1.0.9 to Azure Artifacts as a one-shot.

### Coordination

- Related source repo to migrate in parallel: [Am.Cm.WebAppSample](../../../amvs/ardimedia.com.cm/Am.Cm.WebAppSample/TODO.md) (publishes `am-cm-cms`, `am-cm-image-editor`)
- Consumer side (weelinq.com v1): `D:\CODE\amvs\weelinq.com\.azure-pipelines\weelinq-com-v1-build.yml`

### Tracking

See Azure DevOps Work Item: "Migrate @ardimedia/* npm packages from npmjs.org to Azure Artifacts npm feed"
