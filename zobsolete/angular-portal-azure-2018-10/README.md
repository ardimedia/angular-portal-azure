# OPEN ISSUES

## tsconfig.json

Changed `"target": "es5"`
     to `"target": "es2015"`
otherwise we get an error in the browser

## angular-portal-azure-blade.ts

Changed `ViewEncapsulation.Native`
     to `encapsulation: ViewEncapsulation.None`
otherwise we get an error in the browser

At the moment `angular-portal-azure-blade` is not registered, see app.module.ts

    //const el2 = createCustomElement(AngularPortalAzureBladeComponent, { injector: this.injector });
    //customElements.define('app-angular-portal-azure-blade', el2);

## MULTIPLE WEB COMPONENTS

- SAMPLE: https://github.com/contactjaisai/multiple-angular-elements-sample
- ISSUE: https://github.com/angular/angular/issues/23732

# LINKS

- DOCU: https://angular.io/guide/elements
- SAMPLE: https://www.telerik.com/blogs/getting-started-with-angular-elements
- SAMPLE: https://scotch.io/tutorials/build-a-reusable-component-with-angular-elements
- SAMPLE: https://medium.com/codingthesmartway-com-blog/angular-elements-a-practical-introduction-to-web-components-with-angular-6-52c0b3076c2c

# STEPS

- ng new ClientApp
- cd ClientApp
- ng add @angular/elements --project=ClientApp
- ng generate component angular-portal-azure
- ng generate component angular-portal-azure-blade

## PACKAGING ANGULAR ELEMENTS

- npm install --save-dev concat fs-extra
- create file `elements-build.js`

const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/ClientApp/runtime.js',
    './dist/ClientApp/polyfills.js',
    './dist/ClientApp/scripts.js',
    './dist/ClientApp/main.js'
  ];
  await fs.ensureDir('elements');
  await concat(files, 'elements/angular-portal-azure.js');
  await fs.copyFile('./dist/angularElements/styles.css', 'elements/styles.css');
  //await fs.copy('./dist/angularElements/assets/', 'elements/assets/');
})();

- Change `package.json`

"build:elements": "ng build --prod --output-hashing none && node elements-build.js"

- npm run build:elements

OR JUST USE

- "first-element:bundle-ng": "cat dist/my-first-element/{runtime,main}.js > dist/my-first-element/my-first-element-ng.js",