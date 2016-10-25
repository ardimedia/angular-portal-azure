import { BladeData } from './BladeData';
import { Debug } from './Debug';
import { BladeNavItem } from './BladeNavItem';
import { PortalService } from './PortalService';

export class BladeNav extends BladeData {

    //#region Properties

    navItems: Array<BladeNavItem> = new Array<BladeNavItem>();
    isNav: boolean = true;

    //#endregion

    //#region Constructor

    constructor(portalService: PortalService, path: string, title: string = '', subtitle: string = '', width: number = 200) {
        super(portalService, path, title, subtitle, width);
        Debug.write('[azureportalng-debug] \'BladeNav\' constructor called.', [this, portalService, path, title, subtitle, width]);

        super.onNavigateTo = this.navigateTo;
    }

    //#endregion
}
