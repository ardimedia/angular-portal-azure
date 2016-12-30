/// <reference types="angular" />
/// <reference path="../../domain/debug.ts" />
/// <reference path="../../domain/portalservice.ts" />

namespace angularportalazure {
    //angularPortalBlade.$inject = ['angularportalazure.portalService'];
    //function angularPortalBlade(portalService: angularportalazure.PortalService) {
    //    return {
    //        restrict: 'E',
    //        transclude: true,
    //        scope: {},
    //        bindToController: { vm: '=' },
    //        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
    //        link: function (scope, element, attrs, controller) {
    //            //controller.close = function () {
    //            //    portalService.areaBlades.clearLastLevel();
    //            //};
    //        },
    //        controller: function () {
    //            this.$onInit = function () {
    //                this.close = function () {
    //                    portalService.areaBlades.clearLastLevel();
    //                };
    //            };
    //        },
    //        controllerAs: '$ctrl'
    //    };
    //}

    //angular.module('angularportalazure').directive('angularPortalBlade', angularPortalBlade);

    AngularPortalBladeController.$inject = ['angularportalazure.portalService'];
    function AngularPortalBladeController(portalService: angularportalazure.PortalService) {
        this.$onInit = function () {
            //portalService.areaNotification.show();
            this.close = function () {
                //portalService.areaBlades.clearLastLevel();
                //portalService.areaNotification.hide();
            };
        };
    }

    var angularPortalBlade = {
        transclude: true,
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
        controller: AngularPortalBladeController,
        bindings: {
            vm: '='
        }
    };

    angular.module('angularportalazure').component('angularPortalBlade', angularPortalBlade);
}
