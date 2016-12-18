/// <reference path="debug.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="tiles.ts" />
/// <reference path="usercontrolbase.ts" />

namespace angularportalazure {
    export class Startboard extends angularportalazure.UserControlBase {

        //#region Properties

        tiles: angularportalazure.Tiles;

        //#endregion

        //#region Constructor

        constructor(portalService: angularportalazure.PortalService) {
            super(portalService);
            this.tiles = new angularportalazure.Tiles();
        }

        //#endregion
    }
}
