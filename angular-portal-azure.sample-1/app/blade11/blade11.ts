import * as angular from 'angular';
import * as azureportalng from 'angular-portal-azure';

class Blade11 extends azureportalng.BladeList {
    //#region Constructors

    constructor(portalService: azureportalng.PortalService) {
        super(portalService, '/app/blade11/blade11.html', 'Blade 1-1', 'TypeScript based', 315);

        this.isCommandNew = true;
        this.commandNewText = 'Blade 2';

        this.statusbar = 'Blade 1-1...';
    }

    //#endregion

    //#region Methods - Overrides for Blade

    onCommandNew(): void {
        this.portalService.bladeArea.addBlade('/Sample1/blade2/blade2.html', this.path);
    }

    //#endregion

    //#region Data Access

    onGetDataList(): angular.IHttpPromise<any> {
        return this.portalService.$http({ method: 'GET', url: '/customers' });
    }

    //#endregion
}

//#region Angular Registration

(function () {
    'use strict';
    angular.module('sample1App').controller('blade11', ['azureportalng.portalService', Blade11]);
})();

//#endregion
