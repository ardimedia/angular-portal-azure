# Development Documentation

## Deploy to npmjs.com

The library `@ardimedia/angular-portal-azure` is published to [npmjs.com](https://www.npmjs.com/package/@ardimedia/angular-portal-azure) under the `@ardimedia` organization.

### Prerequisites

- An npmjs.com account with publish access to the `@ardimedia` organization
- Authenticated locally: run `npm login` if not already logged in

### Publishing a new version

Workspace root:

```bash
cd "D:\CODE\github\ardimedia\angular-portal-azure\angular-portal-azure-2026-02"
```

**1. Bump the version** in `projects/ardimedia/angular-portal-azure/package.json`:

You have the following options:

- npm version **patch**   # 0.3.0 → 0.3.1
- npm version **minor**   # 0.3.0 → 0.4.0
- npm version **major**   # 0.3.0 → 1.0.0

The **--no-git-tag-version** flag prevents npm from creating a git commit and tag automatically (since you're in a subdirectory, not the repo root).

```bash
cd "D:\CODE\github\ardimedia\angular-portal-azure\angular-portal-azure-2026-02\projects\ardimedia\angular-portal-azure"

npm version patch --no-git-tag-version
```

**2. Build the library:**

```bash
cd D:\CODE\github\ardimedia\angular-portal-azure\angular-portal-azure-2026-02

npx ng build @ardimedia/angular-portal-azure
```

**3. Publish:**

```bash
cd D:\CODE\github\ardimedia\angular-portal-azure\angular-portal-azure-2026-02\dist\ardimedia\angular-portal-azure

npm publish --access public
```

The `--access public` flag is required because scoped packages (`@ardimedia/...`) default to private on npmjs.com. It is safe to include on every publish.

**4. Verify:**

```bash
npm view @ardimedia/angular-portal-azure
```


## Folder Descriptions

| Folder Name                        | Description                                                    |
| ---------------------------------- | -------------------------------------------------------------- |
| angular-portal-azure               | UI Framework (angularjs) - **WORKING**                         |
| - angularportalazure               | Actual UI framework source code (angularjs)                    |
| - design                           | scss source code, referenced in angularportalazure             |
| angular-portal-azure.sample-1      | angularjs sample - **WORKING**                                 |
| - app                              | sample application                                             |
| angular-portal-azure-2026-02       | UI Framework (angular) - **WORK IN PROGRESS**                  |
| ---------------------------------- | -------------------------------------------------------------- |
| angular-portal-azure-v2            | UI Framework (angular) - **NOT WORKING** (will be deleted)     |
| angular-portal-azure-2018-03       | UI Framework (angular) - **NOT WORKING** (will be deleted)     |
| angular-portal-azure-2018-10       | UI Framework (angular) - **NOT WORKING** (will be deleted)     |
| angular-portal-azure-2018-12       | UI Framework (angular) - **NOT WORKING** (will be deleted)     |
| angular-portal-azure-2019-09a      | UI Framework (angular) - **NOT WORKING** (will be deleted)     |
| angular-portal-azure-2019-09a      | UI Framework (angular) - **NOT WORKING** (will be deleted)     |
| angular-portal-azure-2020-06       | UI Framework (angular) - **NOT WORKING** (will be deleted)     |
