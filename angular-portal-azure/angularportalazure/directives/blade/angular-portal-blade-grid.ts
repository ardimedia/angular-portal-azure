/// <reference types="angular" />
/// <reference path="../../domain/debug.ts" />
/// <reference path="../../domain/portalservice.ts" />

namespace angularportalazure {
    function angularPortalBladeGrid(portalService: angularportalazure.PortalService) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            bindToController: { vm: '=' },
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
            link: function (scope, element, attrs, controller) {
                //console.log('angularPortalBladeGrid.link()');
                //console.log(this);
                //#region the following code makes sure, that a function scope.vm.close is available

                //if (scope.vm === undefined) { scope.vm = {}; }
                //if (scope.vm.close === undefined) {
                //    scope.vm.close = function () {
                //        angularportalazure.Debug.write('[angularportalazure-debug] \'directive:azurePortalBlade.close\' called.', [this, portalService]);
                //        portalService.bladeArea.clearLastLevel();
                //    }
                //}

                //#endregion
            },
            controller: function () {
                //console.log('angularPortalBladeGrid.controller()');
                //console.log(this);

                this.vm.close = function () {
                    angularportalazure.Debug.write('[angularportalazure-debug] \'directive:azurePortalBlade.close\' called.', [this, portalService]);
                    portalService.bladeArea.clearLastLevel();
                };
            },
            controllerAs: 'ctrl'
        };
    }

    angular.module('angularportalazure').directive('angularPortalBladeGrid', ['angularportalazure.portalService', angularPortalBladeGrid]);
}
