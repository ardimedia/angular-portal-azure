/// <reference path="areablades.ts" />
/// <reference path="usercontrolbase.ts" />
/// <reference path="panorama.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="tiles.ts" />

namespace angularportalazure {
    export class PortalShell extends angularportalazure.UserControlBase {
        //#region Constructor

        constructor(portalService: angularportalazure.PortalService, title: string) {
            super(null, portalService);

            this.portalService = portalService;
            this.portalService.portalShell = this;
            this.portalService.panorama = new angularportalazure.Panorama(this.$scope, title, this.portalService);

            this.portalService.panorama.title = title;
        }

        //#endregion
    }
}
