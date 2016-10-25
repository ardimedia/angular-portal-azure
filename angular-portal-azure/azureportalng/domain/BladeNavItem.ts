import { Debug } from './Debug';
import { BladeNav } from './BladeNav';

export class BladeNavItem {

    //#region Constructor

    constructor(public title: string = '', public bladePath: string = '', public hrefPath: string = "", public roles: string = "", public isVisible: boolean = true, public callback: () => any = null, public bladeNav: BladeNav = null) {
        Debug.write('[azureportalng-debug] \'BladeNavItem\' constructor called.', [this, title, bladePath, hrefPath, roles, isVisible]);
    }

    //#endregion

    //#region

    onNavItemClick() {
        Debug.write('[azureportalng-debug] \'BladeNavItem.onNavItemClick\' called.', [this]);
        if (this.callback != null) {
            this.callback();
        }
    }

    //endregion
}
