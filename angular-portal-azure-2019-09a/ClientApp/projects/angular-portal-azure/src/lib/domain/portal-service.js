"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var area_blades_1 = require("./area-blades");
var area_notification_1 = require("./area-notification");
var panorama_1 = require("./panorama");
var PortalService = /** @class */ (function () {
    // #region Constructor
    //static $inject = ['$injector'];
    function PortalService() {
        this.parameter = { action: 'none', itemId: 0 };
        this.panorama = new panorama_1.Panorama(this, 'angular-portal-azure-module');
        console.log({ PortalService: Object.id(this) });
        //this.$injector = $injector;
        //this.$http = $injector.get('$http');
        //this.$httpBackend = $injector.get('$httpBackend');
        //this.$q = $injector.get('$q');
        //this.$rootScope = $injector.get('$rootScope');
        //this.$window = $injector.get('$window');
        //this.$analytics = $injector.get('$analytics');
        //this.$timeout = $injector.get('$timeout');
        //this.$translate = $injector.get('$translate');
        //this.ngDialog = <any>$injector.get('ngDialog');
        this.areaBlades = new area_blades_1.AreaBlades(this);
        this.areaNotification = new area_notification_1.AreaNotification(this);
    }
    return PortalService;
}());
exports.PortalService = PortalService;
// angular.module('angularportalazure').service('portalService', PortalService);
//# sourceMappingURL=portal-service.js.map