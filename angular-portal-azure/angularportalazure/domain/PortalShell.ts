// #region Declarations

/// <reference path="areablades.ts" />
/// <reference path="usercontrolbase.ts" />
/// <reference path="panorama.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="tiles.ts" />

// #endregion

namespace angularportalazure {
    export class PortalShell {
        // #region Constructor

        constructor(public portalService: angularportalazure.PortalService, title: string = null) {

            this.portalService = portalService;
            this.portalService.panorama = new angularportalazure.Panorama(null, title, this.portalService);

            if (title === '' || title === null || title === undefined) {
                this.portalService.panorama.title = this.portalService.$window.location.hostname.toLowerCase();
            } else {
                this.portalService.panorama.title = title;
            }
        }

        // #endregion
    }
}
