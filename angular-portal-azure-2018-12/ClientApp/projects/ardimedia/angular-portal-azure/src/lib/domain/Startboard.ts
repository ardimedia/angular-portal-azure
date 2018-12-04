import { PortalService } from './PortalService';
import { UserControlBase } from './UserControlBase';
import { Tiles } from './Tiles';

export class Startboard extends UserControlBase {
    // #region Constructor

    constructor(portalService: PortalService) { // $scope: angular.IScope
        super(portalService); // $scope: any, 
        this.tiles = new Tiles();
    }

    // #endregion

    // #region Properties

    tiles: Tiles;

    // #endregion
}
