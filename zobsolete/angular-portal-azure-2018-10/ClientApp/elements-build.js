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
  await fs.copyFile('./dist/ClientApp/styles.css', 'elements/styles.css');
  //await fs.copy('./dist/ClientApp/assets/', 'elements/assets/');
})();
