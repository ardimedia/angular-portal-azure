# Deployment to npmjs.com

Publishing `@ardimedia/angular-portal-azure` to [npmjs.com](https://www.npmjs.com/package/@ardimedia/angular-portal-azure).

## One-time setup

### NPM Token (for GitHub Actions)

The publish workflow authenticates via an npm access token stored as a GitHub secret.

1. On [npmjs.com](https://www.npmjs.com/) → Avatar → **Access Tokens** → **Generate New Token** (Granular Access Token)
2. Settings:
   - **Packages and scopes**: Read and write → select `@ardimedia/angular-portal-azure`
   - **Organizations**: Read and write → select `ardimedia`
   - **Bypass two-factor authentication (2FA)**: checked
   - **Expiration**: No expiration (or set a reminder to rotate)
3. On GitHub → repo **Settings** → **Secrets and variables** → **Actions** → add secret `NPM_TOKEN` with the token value

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
git push
git push --tags

# 4. Verify
# Watch the pipeline: https://github.com/ardimedia/angular-portal-azure/actions
# Once complete:
npm view @ardimedia/angular-portal-azure version
```

The pipeline runs on any tag matching `v*` and authenticates via the `NPM_TOKEN` GitHub secret.

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
