import { PortalService } from './portal-service';
import { Tiles } from './tiles';
import { UserControlBase } from './user-control-base';

export class Startboard extends UserControlBase {
  // #region Constructor

  //constructor($scope: angular.IScope, portalService: PortalService) {
  constructor(portalService: PortalService) {
    //super($scope, portalService);
    super(portalService);
    this.tiles = new Tiles();
  }

  // #endregion

  // #region Properties

  tiles: Tiles;

  // #endregion
}
