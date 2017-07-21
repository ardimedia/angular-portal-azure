"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PortalService = (function () {
    function PortalService($injector) {
        // #endregion
        // #region Properties
        this.parameter = { action: 'none', itemId: 0 };
        this.$injector = $injector;
        this.$http = $injector.get('$http');
        this.$httpBackend = $injector.get('$httpBackend');
        this.$q = $injector.get('$q');
        this.$rootScope = $injector.get('$rootScope');
        this.$window = $injector.get('$window');
        this.$analytics = $injector.get('$analytics');
        this.$timeout = $injector.get('$timeout');
        this.$translate = $injector.get('$translate');
        this.ngDialog = $injector.get('ngDialog');
    }
    return PortalService;
}());
// #region Constructor
PortalService.$inject = ['$injector'];
exports.PortalService = PortalService;
