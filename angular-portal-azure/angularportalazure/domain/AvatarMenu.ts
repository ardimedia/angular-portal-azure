// #region Declarations

/// <reference path="blade.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="useraccount.ts" />
/// <reference path="usercontrolbase.ts" />

// #endregion

namespace angularportalazure {
    export class AvatarMenu extends angularportalazure.UserControlBase {
        // #region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService) {
            super($scope, portalService);
        }

        // #endregion

        // #region Properties

        userAccount: angularportalazure.UserAccount | null;

        // #endregion
    }
}
