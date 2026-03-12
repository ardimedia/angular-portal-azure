/// <reference types="angular" />
/// <reference types="angulartics" />
/// <reference types="@ardimedia/angular-portal-azure" />
/// <reference path="../node_modules/@types/angular/index.d.ts" />

namespace Sample1 {
    angular.module('sample1App', [
        'ngResource',
        'ngDialog',
        'ngDialog',
        'angularportalazure'
    ]);

    /** bootstrap angular */
    angular.element(document.body).ready(function () {
        angular.bootstrap(document.body, ['sample1App'], { strictDi: true });
    });
}
