"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Panorama_1 = require("./Panorama");
var PortalShell = (function () {
    // #region Constructor
    function PortalShell(portalService, title) {
        if (title === void 0) { title = null; }
        this.portalService = portalService;
        this.portalService = portalService;
        this.portalService.panorama = new Panorama_1.Panorama(null, title, this.portalService);
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
