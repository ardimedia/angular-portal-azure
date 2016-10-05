import * as AzurePortal from './AzurePortal';

export class Panorama extends AzurePortal.UserControlBase {
    //#region Constructors

    constructor(title: string, portalService: AzurePortal.PortalService) {
        super(portalService);
        AzurePortal.Debug.write('[azureportalng-debug] \'Panorama\' constructor called.', [this, title]);

        this.title = title;
        this.portalService.panorama = this;

        this.avatarMenu = new AzurePortal.AvatarMenu(this.portalService);
        this.startboard = new AzurePortal.Startboard(this.portalService);
    }

    //#endregion

    //#region Properties

    title: string;
    isVisible: boolean = true;

    avatarMenu: AzurePortal.AvatarMenu;
    startboard: AzurePortal.Startboard;

    //#endregion
}
