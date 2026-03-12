import { Blade } from './blade';
//import { BladeData } from './blade-data';
//import { BladeNavItem } from './blade-nav-item';
//import { IAddBladeEventArgs } from './iadd-blade-event-args';
import { PortalService } from './portal-service';
//import { Tiles } from './tiles';
import { UserAccount } from './user-account';
import { UserControlBase } from './user-control-base';

export class AvatarMenu extends UserControlBase {
  // #region Constructor

  //constructor($scope: angular.IScope, portalService: PortalService) {
  constructor(portalService: PortalService) {
    //super($scope, portalService);
    super(portalService);
  }

  // #endregion

  // #region Properties

  userAccount: UserAccount | null;

  // #endregion
}
