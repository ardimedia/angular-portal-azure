import * as angular from 'angular';

import { AreaBlades } from './AreaBlades';
import { BladeData } from './BladeData';
import { BladeNavItem } from './BladeNavItem';
import { Exception } from './exception';
import { PortalService } from './portalservice';

export class BladeNav extends BladeData {
    // #region Constructor

    constructor($scope: angular.IScope, portalService: PortalService, path: string, title: string = '', subtitle: string = '', width: number = 315) {
        super($scope, portalService, path, title, subtitle, width);
        this.isInnerHtml = false;
    }

    // #endregion

    // #region Properties

    items: Array<BladeNavItem> = new Array<BladeNavItem>();
    isNav: boolean = true;

    // #endregion

    // #region Methods

    onNavigateTo(path: string) {
        if (path === '') { return; }
        this.portalService.areaBlades.raiseAddBladeEvent({ path: path, pathSender: this.path });
    }

    // #endregion
}
