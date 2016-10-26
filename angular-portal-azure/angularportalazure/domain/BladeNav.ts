/// <reference path="bladedata.ts" />
/// <reference path="debug.ts" />
/// <reference path="bladenavitem.ts" />
/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class BladeNav extends angularportalazure.BladeData {

        //#region Properties

        navItems: Array<angularportalazure.BladeNavItem> = new Array<angularportalazure.BladeNavItem>();
        isNav: boolean = true;

        //#endregion

        //#region Constructor

        constructor(portalService: angularportalazure.PortalService, path: string, title: string = '', subtitle: string = '', width: number = 200) {
            super(portalService, path, title, subtitle, width);
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeNav\' constructor called.', [this, portalService, path, title, subtitle, width]);

            super.onNavigateTo = this.navigateTo;
        }

        //#endregion
    }
}
