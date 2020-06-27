"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortalShell = void 0;
var PortalShell = /** @class */ (function () {
    // #region Constructor
    function PortalShell(portalService, title) {
        if (title === void 0) { title = null; }
        this.portalService = portalService;
        this.portalService = portalService;
        //this.portalService.panorama = new Panorama(this.portalService, title);
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
//# sourceMappingURL=portal-shell.js.map