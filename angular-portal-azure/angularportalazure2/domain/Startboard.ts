import * as angular from 'angular';

import { PortalService } from './PortalService';
import { Tiles } from './Tiles';
import { UserControlBase } from './UserControlBase';

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
