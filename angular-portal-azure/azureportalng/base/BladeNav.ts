import * as AzurePortal from './AzurePortal';

export class BladeNav extends AzurePortal.BladeData {
    //#region Constructor

    constructor(portalService: AzurePortal.PortalService, path: string, title: string = '', subtitle: string = '', width: number = 200) {
        super(portalService, path, title, subtitle, width);
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeNav\' constructor called.', [this, portalService, path, title, subtitle, width]);

        super.onNavigateTo = this.navigateTo;
    }

    //#endregion

    //#region Properties

    navItems: Array<AzurePortal.BladeNavItem> = new Array<AzurePortal.BladeNavItem>();
    isNav: boolean = true;

    //#endregion
}

