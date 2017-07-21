"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
AngularPortalBladeController.$inject = ['angularportalazure.portalService'];
function AngularPortalBladeController(portalService) {
    var _this = this;
    this.$onInit = function () {
        _this.close = function () { };
    };
}
exports.default = {
    transclude: true,
    templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
    controller: AngularPortalBladeController,
    bindings: {
        vm: '='
    }
};
