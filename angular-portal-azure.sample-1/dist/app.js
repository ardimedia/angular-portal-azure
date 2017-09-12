"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var ngResource = require("angular-resource");
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
