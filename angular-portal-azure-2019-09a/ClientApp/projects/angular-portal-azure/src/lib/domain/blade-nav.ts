import { BladeData } from './blade-data';
import { BladeNavItem } from './blade-nav-item';
import { PortalService } from './portal-service';

export class BladeNav extends BladeData<BladeNavItem> {
    // #region Constructor

    //static $inject = ['$scope', 'portalService'];
    constructor(portalService: PortalService, path: string, title: string = '', subtitle: string = '', width: number = 315) {//$scope: any,
        super(portalService, path, title, subtitle, width);//$scope,
        this.isInnerHtml = false;
        this.isNav = true;
    }

    // #endregion

    // #region Properties

    //items: Array<BladeNavItem> = new Array<BladeNavItem>();

    // #endregion

    // #region Methods

    onNavigateTo(path: string) {
        if (path === '') { return; }
        this.portalService.areaBlades.raiseAddBladeEvent({ path: path, pathSender: this.path });
    }

    // #endregion
}
