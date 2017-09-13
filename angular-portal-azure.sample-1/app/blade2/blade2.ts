﻿/// <reference path="../../node_modules/@ardimedia/angular-portal-azure/apn.d.ts" />
/// <reference types="angular" />

namespace Sample1 {
    class Blade2 extends angularportalazure.BladeDetail<any> {
        // #region Constructor

        static $inject = ['$scope', 'angularportalazure.portalService'];
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService) {
            super($scope, portalService, '/app/blade2/blade2.html', 'Blade 2', 'TypeScript based', 500);

            this.isCommandNew = true;
            this.commandNewText = 'Blade 2-1';
            this.isCommandSave = true;
            this.commandSaveText = 'Blade 1';

            this.statusBar = 'Blade 2...';
        }

        // #endregion

        // #region Methods - Overrides for Blade

        onCommandNew(): void {
            this.portalService.areaBlades.addBlade('/Sample1/blade21/blade21.html', this.path);
        }

        onCommandSave(): void {
            this.portalService.areaBlades.addBlade('/Sample1/blade1/blade1.html', this.path);
        }

        onActivate() {
            console.log('Blade2.onActivate');
        }

        // #endregion

        // #region Data Access

        onGetDataList(): angular.IPromise<any> {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        }

        // #endregion
    }

    angular.module('sample1App').controller('blade2', Blade2);
}
