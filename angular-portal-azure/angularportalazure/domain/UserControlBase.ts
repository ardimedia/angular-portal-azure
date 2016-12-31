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

        //#region Methods

        setupWindowResizeListener(callback: () => void) {
            // http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
            let id: NodeJS.Timer;

            this.portalService.$window.addEventListener('resize', () => {
                clearTimeout(id);
                id = setTimeout(() => { callback(); }, 50);
            });
        }

        //#endregion
    }
}
