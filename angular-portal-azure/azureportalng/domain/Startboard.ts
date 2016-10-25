import { Debug } from './Debug';
import { PortalService } from './PortalService';
import { Tiles } from './Tiles';
import { UserControlBase } from './UserControlBase';

export class Startboard extends UserControlBase {

    //#region Properties

    tiles: Tiles;

    //#endregion

    //#region Constructors

    constructor(portalService: PortalService) {
        super(portalService);
        Debug.write('[azureportalng-debug] \'Startboard\' constructor called.', [this]);

        this.tiles = new Tiles();
    }

    //#endregion
}
