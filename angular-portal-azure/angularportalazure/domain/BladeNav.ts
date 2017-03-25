/// <reference path="bladedata.ts" />
/// <reference path="bladenavitem.ts" />
/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class BladeNav extends angularportalazure.BladeData {
        // #region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string = '', subtitle: string = '', width: number = 315) {
            super($scope, portalService, path, title, subtitle, width);
            this.isInnerHtml = false;
        }

        // #endregion

        // #region Properties

        items: Array<angularportalazure.BladeNavItem> = new Array<angularportalazure.BladeNavItem>();
        isNav: boolean = true;

        // #endregion

        // #region Methods

        onNavigateTo(path: string) {
            if (path === '') { return; }
            this.portalService.areaBlades.raiseAddBladeEvent({ path: path, pathSender: this.path });
        }

        // #endregion
    }
}
