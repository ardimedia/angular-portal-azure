import { Debug } from './Debug';
import { PortalService } from './PortalService';

export class UserControlBase {

    //#region Properties

    portalService: PortalService;

    //#endregion

    //#region Constructors

    constructor(portalService: PortalService) {
        Debug.write('[azureportalng-debug] \'UserControlBase\' constructor called.', [this, portalService]);
        this.portalService = portalService;
    }

    //#endregion
}
