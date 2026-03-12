/// <reference types="angular" />

namespace Sample1 {
    class Detail1Notification extends angularportalazure.BladeDetail<any> {
        // #region Constructor

        static $inject = ['$scope', 'angularportalazure.portalService'];
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService) {
            super($scope, portalService, '/app/detail1notification/detail1notification.html', 'Detail-1-Notification', 'TypeScript based', 500);

            this.activate();
        }

        // #endregion

        // #region Methods

        onActivate(): angular.IPromise<any> {
            this.commandDocumentText = 'Show Notification';
            this.isCommandDocument = true;
            return;
        }

        onCommandDocument() {
            this.portalService.areaNotification.path = '/app/grid1/grid1.html';
            this.portalService.areaNotification.show(500);
        }

        // #endregion
    }

    angular.module('sample1App').controller('detail1', Detail1Notification);
}
