/// <reference path="debug.ts" />
/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class UserControlBase {
        //#region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService) {
            this.$scope = $scope;
            this.portalService = portalService;
        }

        //#endregion

        //#region Properties

        $scope: angular.IScope;
        portalService: angularportalazure.PortalService;

        //#endregion
    }
}
