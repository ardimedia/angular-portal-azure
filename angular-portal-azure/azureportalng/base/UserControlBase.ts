import * as AzurePortal from './AzurePortal';

export class UserControlBase {
    //#region Constructors

    constructor(public portalService: AzurePortal.PortalService) {
        AzurePortal.Debug.write('[azureportalng-debug] \'UserControlBase\' constructor called.', [this, portalService]);
    }

    //#endregion
}
