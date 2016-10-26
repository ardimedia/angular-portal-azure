﻿/// <reference path="debug.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="tiles.ts" />
/// <reference path="usercontrolbase.ts" />

namespace angularportalazure {
    export class Startboard extends angularportalazure.UserControlBase {

        //#region Properties

        tiles: angularportalazure.Tiles;

        //#endregion

        //#region Constructors

        constructor(portalService: angularportalazure.PortalService) {
            super(portalService);
            angularportalazure.Debug.write('[angularportalazure-debug] \'Startboard\' constructor called.', [this]);

            this.tiles = new angularportalazure.Tiles();
        }

        //#endregion
    }
}
