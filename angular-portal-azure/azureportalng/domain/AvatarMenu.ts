import { Debug } from './Debug';
import { PortalService } from './PortalService';
import { UserAccount } from './UserAccount';
import { UserControlBase } from './UserControlBase';

export class AvatarMenu extends UserControlBase {
    //#region Constructors

    constructor(portalService: PortalService) {
        super(portalService);
        Debug.write('[azureportalng-debug] \'AvatarMenu\' constructor called.', [this]);
    }

    //#endregion

    //#region Properties

    userAccount: UserAccount;

    //#endregion
}
