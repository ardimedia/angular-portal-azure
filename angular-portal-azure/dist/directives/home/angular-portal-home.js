"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AreaBlades_1 = require("../../domain/AreaBlades");
var AreaNotification_1 = require("../../domain/AreaNotification");
AngularPortalHomeController.$inject = ['$scope', 'angularportalazure.portalService'];
function AngularPortalHomeController($scope, portalService) {
    this.$onInit = function () {
        portalService.areaNotification = new AreaNotification_1.AreaNotification($scope, portalService);
        portalService.areaBlades = new AreaBlades_1.AreaBlades($scope, portalService);
    };
}
exports.default = {
    templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/home/home.html',
    controller: AngularPortalHomeController,
    bindings: {
        vm: '='
    }
};
