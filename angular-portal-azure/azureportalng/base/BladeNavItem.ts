import * as AzurePortal from './AzurePortal';

export class BladeNavItem {
    //#region Constructor

    constructor(public title: string = '', public bladePath: string = '', public hrefPath: string = "", public roles: string = "", public isVisible: boolean = true, public callback: () => any = null, public bladeNav: AzurePortal.BladeNav = null) {
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeNavItem\' constructor called.', [this, title, bladePath, hrefPath, roles, isVisible]);
    }

    //#endregion

    //#region Methods

    onNavItemClick() {
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeNavItem.onNavItemClick\' called.', [this]);
        if (this.callback != null) {
            this.callback();
        }
    }

    //endregion
}
