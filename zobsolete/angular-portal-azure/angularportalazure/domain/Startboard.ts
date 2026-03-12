// #region Declarations

/// <reference path="portalservice.ts" />
/// <reference path="tiles.ts" />
/// <reference path="usercontrolbase.ts" />

// #endregion

namespace angularportalazure {
    export class Startboard extends angularportalazure.UserControlBase {
        // #region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService) {
            super($scope, portalService);
            this.tiles = new angularportalazure.Tiles();
        }

        // #endregion

        // #region Properties

        tiles: angularportalazure.Tiles;

        // #endregion
    }
}
