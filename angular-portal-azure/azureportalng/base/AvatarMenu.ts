import * as AzurePortal from './AzurePortal';

export class AvatarMenu extends AzurePortal.UserControlBase {
    //#region Constructors

    constructor(portalService: AzurePortal.PortalService) {
        super(portalService);
        AzurePortal.Debug.write('[azureportalng-debug] \'AvatarMenu\' constructor called.', [this]);
    }

    //#endregion

    //#region Properties

    userAccount: AzurePortal.UserAccount;

    //#endregion
}
