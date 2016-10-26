/// <reference path="debug.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="tiles.ts" />
/// <reference path="usercontrolbase.ts" />

namespace azureportalng {
    export class Startboard extends azureportalng.UserControlBase {

        //#region Properties

        tiles: azureportalng.Tiles;

        //#endregion

        //#region Constructors

        constructor(portalService: azureportalng.PortalService) {
            super(portalService);
            azureportalng.Debug.write('[azureportalng-debug] \'Startboard\' constructor called.', [this]);

            this.tiles = new azureportalng.Tiles();
        }

        //#endregion
    }
}
