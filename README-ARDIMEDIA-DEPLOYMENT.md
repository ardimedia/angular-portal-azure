# Deployment to npmjs.com

Publishing `@ardimedia/angular-portal-azure` to [npmjs.com](https://www.npmjs.com/package/@ardimedia/angular-portal-azure).

## One-time setup

```bash
npm login
```

You need an npmjs.com account with publish access to the `@ardimedia` organization.

## Publish a new version

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
