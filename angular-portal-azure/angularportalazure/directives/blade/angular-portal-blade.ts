/// <reference types="angular" />
/// <reference path="../../domain/debug.ts" />
/// <reference path="../../domain/portalservice.ts" />

namespace angularportalazure {
    angularPortalBlade.$inject = ['angularportalazure.portalService'];
    function angularPortalBlade(portalService: angularportalazure.PortalService) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            bindToController: { vm: '=' },
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
            link: function (scope, element, attrs, controller) {
            },
            controller: function () {
                this.vm.close = function () {
                    angularportalazure.Debug.write('[angularportalazure-debug] \'directive:azurePortalBlade.close\' called.', [this, portalService]);
                    portalService.bladeArea.clearLastLevel();
                };
            },
            controllerAs: '$ctrl'
        };
    }

    angular.module('angularportalazure').directive('angularPortalBlade', angularPortalBlade);
}
