/// <reference types="@ardimedia/angular-portal-azure" />
/// <reference types="angular" />

namespace Sample1 {
    class Blade11 extends angularportalazure.BladeDetail {
        //#region Constructor

        constructor(portalService: angularportalazure.PortalService) {
            super(portalService, '/app/blade11/blade11.html', 'Blade 1-1', 'TypeScript based', 500);
            this.isCommandNew = true;
            this.commandNewText = 'Blade 2';

            this.statusbar = 'Blade 1-1...';
            this.vm = this;
        }

        //#endregion

        //#region Properties

        vm;

        //#endregion

        //#region Methods - Overrides for Blade

        onCommandNew(): void {
            this.portalService.bladeArea.addBlade('/Sample1/blade2/blade2.html', this.path);
        }

        onActivate() {
        }

        //#endregion

        //#region Data Access

        onGetDataList(): angular.IHttpPromise<any> {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        }

        //#endregion
    }

    angular.module('sample1App').controller('blade11', ['angularportalazure.portalService', Blade11]);
}
