# BUILD ANGULAR-PORTAL-AZURE

## CREATE

ng new angular-portal-azure
rename angular-portal-azure ClientApp
ng generate library @ardimedia/angular-portal-azure --prefix=apa

## PATCH | BUILD | PACK | PUBLISH

### PATCH

REM RELEASE PATCH: cd projects\ardimedia\angular-portal-azure && npm version patch && cd ..\..\..

### BUILD

ng build @ardimedia/angular-portal-azure
REM DOES NOT WORK: ng build --prod @ardimedia/angular-portal-azure

### PACK

cd dist\ardimedia\angular-portal-azure && npm pack && cd ..\..\..

### PUBLISH

REM RELEASE: cd dist\ardimedia\angular-portal-azure && npm pack && npm publish && cd ..\..\..

# BUILD SAMPLE

## SAMPLE1

npm install .\dist\ardimedia\angular-portal-azure\angular-portal-azure-0.0.1.tgz

ADD TO src\app\app.module.ts

import { App1 } from 'app1';
import { App1 } from 'app1';
import { OneSysPortalAzureModule } from '@one-system/one-sys-portal-azure';

  imports: [
    OneSysCoreModule,
    OneSysPortalAzureModule
  ],


ng build sample1