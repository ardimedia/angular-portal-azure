/// <reference path="areablades.ts" />
/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class BladeData extends angularportalazure.Blade {
        //#region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle: string = '', width: number = 300) {
            super($scope, portalService, path, title, subtitle, width);
        }

        //#endregion
    }
}
