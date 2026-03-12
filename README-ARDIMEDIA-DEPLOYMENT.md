# Deployment to npmjs.com

Publishing `@ardimedia/angular-portal-azure` to [npmjs.com](https://www.npmjs.com/package/@ardimedia/angular-portal-azure).

## One-time setup

### Trusted Publishing (for GitHub Actions)

npm uses OIDC to authenticate GitHub Actions — no secret token required.

1. On [npmjs.com](https://www.npmjs.com/), go to your package `@ardimedia/angular-portal-azure` → **Settings** → **Trusted Publishing**
2. Click **Add trusted publisher** and fill in:
   - Repository owner: `ardimedia`
   - Repository name: `angular-portal-azure`
   - Workflow filename: `publish.yml`
   - Environment: *(leave empty)*

### Local publishing (optional)

```bash
npm login
```

You need an npmjs.com account with publish access to the `@ardimedia` organization.

## Publish a new version (automated)

The GitHub Actions pipeline at `.github/workflows/publish.yml` builds the library, the demo app, and publishes to npm automatically when a version tag is pushed.

```bash
# 1. Bump version (patch / minor / major)
cd angular-portal-azure/projects/ardimedia/angular-portal-azure
npm version patch --no-git-tag-version
cd ../../..

# 2. Commit the version bump
cd ..
git add angular-portal-azure/projects/ardimedia/angular-portal-azure/package.json
git commit -m "chore: bump version to $(node -p "require('./angular-portal-azure/projects/ardimedia/angular-portal-azure/package.json').version")"

# 3. Tag and push
git tag v$(node -p "require('./angular-portal-azure/projects/ardimedia/angular-portal-azure/package.json').version")
git push && git push --tags

# 4. Verify
# Watch the pipeline: https://github.com/ardimedia/angular-portal-azure/actions
# Once complete:
npm view @ardimedia/angular-portal-azure version
```

The pipeline runs on any tag matching `v*` and authenticates via OIDC Trusted Publishing (no secret needed). The `--provenance` flag adds supply-chain transparency metadata to the published package.

## Publish a new version (manual)

From the workspace root (`angular-portal-azure/`):

```bash
# 1. Bump version (patch / minor / major)
cd projects/ardimedia/angular-portal-azure
npm version patch --no-git-tag-version
cd ../../..

# 2. Build
npx ng build @ardimedia/angular-portal-azure

# 3. Publish
cd dist/ardimedia/angular-portal-azure
npm publish --access public
cd ../../..

# 4. Verify
npm view @ardimedia/angular-portal-azure version
```

## Version bumping options

| Command | Example |
|---------|---------|
| `npm version patch` | 0.3.17 → 0.3.18 |
| `npm version minor` | 0.3.17 → 0.4.0 |
| `npm version major` | 0.3.17 → 1.0.0 |

The `--no-git-tag-version` flag is required because the `package.json` is in a subdirectory, not the repo root.
