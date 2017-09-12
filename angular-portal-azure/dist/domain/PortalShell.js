"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var panorama_1 = require("./panorama");
var PortalShell = (function () {
    // #region Constructor
    function PortalShell(portalService, title) {
        if (title === void 0) { title = null; }
        this.portalService = portalService;
        this.portalService = portalService;
        this.portalService.panorama = new panorama_1.Panorama(null, title, this.portalService);
        if (title === '' || title === null || title === undefined) {
            this.portalService.panorama.title = this.portalService.$window.location.hostname.toLowerCase();
        }
        else {
            this.portalService.panorama.title = title;
        }
    }
    return PortalShell;
}());
exports.PortalShell = PortalShell;
