import * as angular from 'angular';
import * as ngResource from 'angular-resource'
import * as ngDialog from 'ng-dialog'

/// <reference types="@ardimedia/angular-portal-azure" />

angular.module('sample1App', [
    ngResource,
    'ngDialog',
    'angularportalazure'
]);

/** bootstrap angular */
angular.element(document.body).ready(function () {
    angular.bootstrap(document.body, ['sample1App'], { strictDi: true });
});
