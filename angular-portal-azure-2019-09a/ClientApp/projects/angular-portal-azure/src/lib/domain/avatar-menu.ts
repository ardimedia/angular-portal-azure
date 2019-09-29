import { PortalService } from './portal-service';
import { Tiles } from './tiles';
import { UserControlBase } from './user-control-base';
import { Blade } from './blade';
import { BladeData } from './blade-data';
import { BladeNavItem } from './blade-nav-item';
import { IAddBladeEventArgs } from './iadd-blade-event-args';
import { UserAccount } from './user-account';


export class AvatarMenu extends UserControlBase {
    // #region Constructor

    //static $inject = ['$scope', 'portalService'];
    constructor(portalService: PortalService) { // $scope: any,
        super(portalService); // $scope,

        this.userAccount = new UserAccount('demo@apa.org', 'demo', 'apa');
    }

    // #endregion

    // #region Properties

    userAccount: UserAccount | null;

    // #endregion
}
