/// <reference types="@ardimedia/angular-portal-azure" />
/// <reference types="angular" />

namespace Sample1 {
    class Blade11 extends angularportalazure.BladeDetail<any> {
        // #region Constructor

        static $inject = ['$scope', 'angularportalazure.portalService'];
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService) {
            super($scope, portalService, '/app/blade11/blade11.html', 'Blade 1-1', 'TypeScript based', 500);
            this.isCommandNew = true;
            this.commandNewText = 'Blade 2';

            this.statusBar = 'Blade 1-1...';
            this.vm = this;

            this.isCommandExcel = true;
        }

        // #endregion

        // #region Properties

        vm;

        // #endregion

        // #region Methods - Overrides for Blade

        onCommandNew(): void {
            this.portalService.areaBlades.addBlade('/Sample1/blade2/blade2.html', this.path);
        }

        onActivate() {
        }

        // #endregion

        // #region Data Access

        onGetDataList(): angular.IPromise<any> {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        }

        // #endregion
    }

    angular.module('sample1App').controller('blade11', Blade11);
}
