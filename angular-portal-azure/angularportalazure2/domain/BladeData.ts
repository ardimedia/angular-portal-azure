import * as angular from 'angular';
import { Blade } from './Blade';
import { PortalService } from './portalservice';

export class BladeData extends Blade {
    // #region Constructor

    constructor($scope: angular.IScope, portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 300) {
        super($scope, portalService, path, title, subtitle, width);
    }

    // #endregion

    onLoadItem() {
        this.visibility = 'collapse';
        this.setStatusBarLoadData();
    }

    onLoadItems() {
        this.visibility = 'collapse';
        this.setStatusBarLoadData();
    }

    onLoadedItem() {
        this.visibility = 'visible';
        this.clearStatusBar();
    }

    onLoadedItems() {
        this.visibility = 'visible';
        this.clearStatusBar();
    }
}
