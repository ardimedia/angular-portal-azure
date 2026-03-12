import { BladeData } from './BladeData';
import { BladeNavItem } from './BladeNavItem';
import { PortalService } from './PortalService';

export class BladeNav extends BladeData<BladeNavItem> {
    // #region Constructor

    constructor(public portalService: PortalService, path: string, title: string = '', subtitle: string = '', width: number = 315) { // $scope: angular.IScope
        super(portalService, path, title, subtitle, width); // $scope, 
        this.isInnerHtml = false;
    }

    // #endregion

    // #region Properties

    //items: Array<angularportalazure.BladeNavItem> = new Array<angularportalazure.BladeNavItem>();
    isNav: boolean = true;

    // #endregion

    // #region Methods

    onNavigateTo(path: string) {
        if (path === '') { return; }
        this.portalService.areaBlades.raiseAddBladeEvent({ path: path, pathSender: this.path });
    }

    // #endregion
}
