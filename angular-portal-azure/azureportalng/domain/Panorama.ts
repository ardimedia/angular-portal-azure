/// <reference path="avatarmenu.ts" />
/// <reference path="debug.ts" />
/// <reference path="startboard.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="usercontrolbase.ts" />

namespace azureportalng {
    export class Panorama extends azureportalng.UserControlBase {

        //#region Properties

        title: string;
        isVisible: boolean = true;

        avatarMenu: azureportalng.AvatarMenu;
        startboard: azureportalng.Startboard;

        //#endregion

        //#region Constructors

        constructor(title: string, portalService: azureportalng.PortalService) {
            super(portalService);
            azureportalng.Debug.write('[azureportalng-debug] \'Panorama\' constructor called.', [this, title]);

            this.title = title;
            this.portalService.panorama = this;

            this.avatarMenu = new azureportalng.AvatarMenu(this.portalService);
            this.startboard = new azureportalng.Startboard(this.portalService);
        }

        //#endregion
    }
}
