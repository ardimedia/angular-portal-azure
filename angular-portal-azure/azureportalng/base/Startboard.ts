import * as AzurePortal from './AzurePortal';

export class Startboard extends AzurePortal.UserControlBase {
    //#region Constructors

    constructor(portalService: AzurePortal.PortalService) {
        super(portalService);
        AzurePortal.Debug.write('[azureportalng-debug] \'Startboard\' constructor called.', [this]);

        this.tiles = new AzurePortal.Tiles();
    }

    //#endregion

    //#region Properties

    tiles: AzurePortal.Tiles;

    //#endregion
}
