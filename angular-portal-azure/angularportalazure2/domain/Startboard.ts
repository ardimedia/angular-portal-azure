import * as angular from 'angular';

import { PortalService } from './portalservice';
import { Tiles } from './tiles';
import { UserControlBase } from './usercontrolbase';

    export class Startboard extends UserControlBase {
        // #region Constructor

        constructor($scope: angular.IScope, portalService: PortalService) {
            super($scope, portalService);
            this.tiles = new Tiles();
        }

        // #endregion

        // #region Properties

        tiles: Tiles;

        // #endregion
    }
