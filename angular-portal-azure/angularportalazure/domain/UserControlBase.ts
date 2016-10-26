/// <reference path="debug.ts" />
/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class UserControlBase {
        //#region Constructors

        constructor(portalService: angularportalazure.PortalService) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'UserControlBase\' constructor called.', [this, portalService]);
            this.portalService = portalService;
        }

        //#endregion

        //#region Properties

        portalService: angularportalazure.PortalService;

        //#endregion
    }
}
