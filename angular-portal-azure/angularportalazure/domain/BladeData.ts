/// <reference path="areablades.ts" />
/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class BladeData extends angularportalazure.Blade {
        // #region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle: string = '', width: number = 300) {
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
}
