/// <reference path="avatarmenu.ts" />
/// <reference path="debug.ts" />
/// <reference path="startboard.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="usercontrolbase.ts" />

namespace angularportalazure {
    export class Panorama extends angularportalazure.UserControlBase {

        //#region Properties

        title: string;
        isVisible: boolean = true;

        avatarMenu: angularportalazure.AvatarMenu;
        startboard: angularportalazure.Startboard;

        //#endregion

        //#region Constructor

        constructor(title: string, portalService: angularportalazure.PortalService) {
            super(portalService);
            angularportalazure.Debug.write('[angularportalazure-debug] \'Panorama\' constructor called.', [this, title]);

            this.title = title;
            this.portalService.panorama = this;

            this.avatarMenu = new angularportalazure.AvatarMenu(this.portalService);
            this.startboard = new angularportalazure.Startboard(this.portalService);
        }

        //#endregion
    }
}
