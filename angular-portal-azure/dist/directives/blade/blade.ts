/// <reference types="angular" />
/// <reference path="../../domain/debug.ts" />
/// <reference path="../../domain/portalservice.ts" />

namespace angularportalazure {
    function azurePortalBlade($window: ng.IWindowService, portalService: angularportalazure.PortalService) {
        return {
            transclude: true,
            scope: { vm: '=vm' },
            restrict: 'E',
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
            link: function (scope, element, attrs, controller) {
                angularportalazure.Debug.write('[angularportalazure-debug] \'directive:azurePortalBlade.link\' called.', [this, portalService]);

                //#region the following code makes sure, that a function scope.vm.close is available

                if (scope.vm === undefined) { scope.vm = {}; }
                if (scope.vm.close === undefined) {
                    scope.vm.close = function () {
                        angularportalazure.Debug.write('[angularportalazure-debug] \'directive:azurePortalBlade.close\' called.', [this, portalService]);
                        portalService.bladeArea.clearLastLevel();
                    }
                }

                //#endregion
            }
        };
    }

    angular.module('angularportalazure').directive('azurePortalBlade', ['$window', 'angularportalazure.portalService', azurePortalBlade]);
}
