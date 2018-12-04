import { PortalService } from './PortalService';
import { UserControlBase } from './UserControlBase';
import { UserAccount } from './UserAccount';

export class AvatarMenu extends UserControlBase {
    // #region Constructor

    constructor(portalService: PortalService) { // $scope: angular.IScope
        super(portalService); // $scope, 
    }

    // #endregion

    // #region Properties

    userAccount: UserAccount | null = new UserAccount('user@test.com');

    // #endregion
}
