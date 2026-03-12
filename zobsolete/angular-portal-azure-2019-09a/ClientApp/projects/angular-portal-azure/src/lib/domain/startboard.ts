import { PortalService } from './portal-service';
import { Tiles } from './tiles';
import { UserControlBase } from './user-control-base';

export class Startboard extends UserControlBase {
    // #region Constructor

    //static $inject = ['$scope', 'portalService'];
    constructor(portalService: PortalService) { // $scope: any,
        super(portalService); // $scope,
        this.tiles = new Tiles();
    }

    // #endregion

    // #region Properties

    tiles: Tiles;

    // #endregion
}
