/// <reference path="debug.ts" />
/// <reference path="bladenav.ts" />

namespace angularportalazure {
    export class BladeNavItem {

        //#region Constructor

        constructor(public title: string = '', public bladePath: string = '', public hrefPath: string = "", public roles: string = "", public isVisible: boolean = true, public callback: () => any = null, public bladeNav: angularportalazure.BladeNav = null) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeNavItem\' constructor called.', [this, title, bladePath, hrefPath, roles, isVisible]);
        }

        //#endregion

        //#region

        onNavItemClick() {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeNavItem.onNavItemClick\' called.', [this]);
            if (this.callback != null) {
                this.callback();
            }
        }

        //endregion
    }
}
