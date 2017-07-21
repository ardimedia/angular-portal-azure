"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var areablades_1 = require("../../domain/areablades");
var areanotification_1 = require("../../domain/areanotification");
AngularPortalHomeController.$inject = ['$scope', 'angularportalazure.portalService'];
function AngularPortalHomeController($scope, portalService) {
    this.$onInit = function () {
        portalService.areaNotification = new areanotification_1.AreaNotification($scope, portalService);
        portalService.areaBlades = new areablades_1.AreaBlades($scope, portalService);
    };
}
exports.default = {
    templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/home/home.html',
    controller: AngularPortalHomeController,
    bindings: {
        vm: '='
    }
};
