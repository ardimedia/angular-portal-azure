/// <reference path="debug.ts" />
/// <reference path="portalservice.ts" />

namespace azureportalng {
    export class UserControlBase {
        //#region Constructors

        constructor(portalService: azureportalng.PortalService) {
            azureportalng.Debug.write('[azureportalng-debug] \'UserControlBase\' constructor called.', [this, portalService]);
            this.portalService = portalService;
        }

        //#endregion

        //#region Properties

        portalService: azureportalng.PortalService;

        //#endregion
    }
}
