﻿/// <reference types="angular" />
/// <reference path="../../domain/debug.ts" />
/// <reference path="../../domain/portalservice.ts" />

namespace angularportalazure {
    angularPortalBladeGrid.$inject = ['angularportalazure.portalService'];
    function angularPortalBladeGrid(portalService: angularportalazure.PortalService) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            bindToController: { vm: '=' },
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
            link: function (scope: angular.IScope, element, attrs, controller) { },
            controller: function () {
                this.$onInit = function () {
                    this.close = function () {
                        //portalService.bladeArea.clearLastLevel();
                    };
                };
            },
            controllerAs: '$ctrl'
        };
    }

    angular.module('angularportalazure').directive('angularPortalBladeGrid', angularPortalBladeGrid);
}
