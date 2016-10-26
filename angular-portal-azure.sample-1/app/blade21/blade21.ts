/// <reference types="angular-portal-azure" />
/// <reference types="angular" />
//import * as angular from 'angular';
//import * as angularportalazure from 'angular-portal-azure';

namespace Sample1 {
    class Blade21 extends angularportalazure.BladeList {
        //#region Constructors

        constructor(portalService: angularportalazure.PortalService) {
            super(portalService, '/app/blade21/blade21.html', 'Blade 2-1', 'TypeScript based', 315);

            this.isCommandNew = true;
            this.commandNewText = 'Blade 2';

            this.statusbar = 'Blade 2-1...';
        }

        //#endregion

        //#region Methods - Overrides for Blade

        onCommandNew(): void {
            this.portalService.bladeArea.addBlade('/Sample1/blade2/blade2.html', this.path);
        }

        onActivate() {
            console.log('Blade21.onActivate');
        }

        //#endregion

        //#region Data Access

        onGetDataList(): angular.IHttpPromise<any> {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        }

        //#endregion
    }

    angular.module('sample1App').controller('blade21', ['angularportalazure.portalService', Blade21]);
}
