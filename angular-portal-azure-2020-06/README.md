# DEVELOPMENT

# PROJECT: SAMPLE

    ng build
    ng test
    ng lint
    ng serve --open  // ONLY WORKING IN HTTP, NOT HTTPS

# LIBRARY: @ardimedia/angular-portal-azure

    ng build @ardimedia/angular-portal-azure  --watch
    ng test @ardimedia/angular-portal-azure
    ng lint @ardimedia/angular-portal-azure

## PUBLISIHG

    -- UPDATE library version (package.json or npm xxx)
    ng build @ardimedia/angular-portal-azure --watch --prod
    cd dist/ardimedia/angular-portal-azure
    npm publish

# SETUP

## Using @ardimedia/angular-portal-azure in app

You don't have to publish your library to the npm package manager in order to use it in your own apps.
To use your own library in an app:

- Build the library. You cannot use a library before it is built.

        ng build my-lib

- In your apps, import from the library by name:

       import { myExport } from 'my-lib';
