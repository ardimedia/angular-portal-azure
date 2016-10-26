/// <reference types="angular-portal-azure" />
/// <reference path="../node_modules/@types/angular/index.d.ts" />

namespace Sample1 {
    var app: ng.IModule = angular.module('sample1App', [
        'ngResource',
        'ngDialog',
        'angularportalazure'
    ]);

    //#region Configuration

    /** configure angular */
    //app.config([function (): void {
    //    angularportalazure.Debug.enable(); // '[sample1-debug]'
    //    angularportalazure.Debug.isEnabled = true;
    //    angularportalazure.Debug.isWithObjects = false;
    //}]);

    /** configure angular dialog */
    //app.config(['ngDialogProvider', function (ngDialogProvider: any): void {
    //    ngDialogProvider.setDefaults({
    //        className: 'ngdialog-theme-default',
    //        plain: false,
    //        showClose: false,
    //        closeByDocument: true,
    //        closeByEscape: true,
    //        appendTo: false
    //    });
    //}]);

    /** run angular */
    //app.run(['$templateCache', function ($templateCache) {
    //    $templateCache.removeAll();
    //}]);

    //#endregion

    /** bootstrap angular */
    angular.element(document.body).ready(function () {
        angular.bootstrap(document.body, ['sample1App'], { strictDi: true });
    });
}
