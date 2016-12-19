/// <reference path="debug.ts" />
/// <reference path="bladenav.ts" />

namespace angularportalazure {
    export class BladeNavItem {

        //#region Constructor

        constructor(public title: string = '', public cssClass: string = "", public bladePath: string = '', public hrefPath: string = "", public roles: string = "", public isVisible: boolean = true, public callback: () => any = null, public bladeNav: angularportalazure.BladeNav | null = null) {
        }

        //#endregion

        //#region

        onNavItemClick() {
            if (this.callback != null) {
                this.callback();
            }
        }

        //endregion
    }
}
