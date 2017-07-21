import * as angular from 'angular';

import { PortalService } from './portalservice';
import { UserAccount } from './useraccount';
import { UserControlBase } from './usercontrolbase';

export class AvatarMenu extends UserControlBase {
    // #region Constructor

    constructor($scope: angular.IScope, portalService: PortalService) {
        super($scope, portalService);
    }

    // #endregion

    // #region Properties

    userAccount: UserAccount | null;

    // #endregion
}
