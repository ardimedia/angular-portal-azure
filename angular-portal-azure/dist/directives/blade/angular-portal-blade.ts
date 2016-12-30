/// <reference types="angular" />
/// <reference path="../../domain/portalservice.ts" />

namespace angularportalazure {
    AngularPortalBladeController.$inject = ['angularportalazure.portalService'];
    function AngularPortalBladeController(portalService: angularportalazure.PortalService) {
        this.$onInit = function () {
            this.close = function () {
            };
        };
    }

    let angularPortalBlade = {
        transclude: true,
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
        controller: AngularPortalBladeController,
        bindings: {
            vm: '='
        }
    };

    angular.module('angularportalazure').component('angularPortalBlade', angularPortalBlade);
}
