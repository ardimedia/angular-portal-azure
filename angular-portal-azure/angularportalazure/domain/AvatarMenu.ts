/// <reference path="debug.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="useraccount.ts" />
/// <reference path="usercontrolbase.ts" />

namespace angularportalazure {
    export class AvatarMenu extends angularportalazure.UserControlBase {
        //#region Constructor

        constructor(portalService: angularportalazure.PortalService) {
            super(portalService);
            angularportalazure.Debug.write('[angularportalazure-debug] \'AvatarMenu\' constructor called.', [this]);
        }

        //#endregion

        //#region Properties

        userAccount: angularportalazure.UserAccount;

        //#endregion
    }
}
