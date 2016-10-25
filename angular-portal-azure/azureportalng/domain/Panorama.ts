import { AvatarMenu } from './AvatarMenu';
import { Debug } from './Debug';
import { Startboard } from './Startboard';
import { PortalService } from './PortalService';
import { UserControlBase } from './UserControlBase';

export class Panorama extends UserControlBase {

    //#region Properties

    title: string;
    isVisible: boolean = true;

    avatarMenu: AvatarMenu;
    startboard: Startboard;

    //#endregion

    //#region Constructors

    constructor(title: string, portalService: PortalService) {
        super(portalService);
        Debug.write('[azureportalng-debug] \'Panorama\' constructor called.', [this, title]);

        this.title = title;
        this.portalService.panorama = this;

        this.avatarMenu = new AvatarMenu(this.portalService);
        this.startboard = new Startboard(this.portalService);
    }

    //#endregion
}
