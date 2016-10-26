/// <reference types="angular-portal-azure" />
/// <reference types="angular" />
//import * as angular from 'angular';
//import * as azureportalng from 'angular-portal-azure';

namespace Sample1 {
    class Nav1 extends azureportalng.BladeNav {
        //#region Constructors

        constructor(portalService: azureportalng.PortalService) {
            super(portalService, '/app/nav1/nav1.html', 'Navigation 1', 'TypeScript based', 315);
            azureportalng.Debug.write('[sample1-debug] \'Nav1\' constructor called.', [this]);

            this.navItems = [
                new azureportalng.BladeNavItem('Navigation 1 (BladeNav)', '/app/nav1/nav1.html'),
                new azureportalng.BladeNavItem('Blade 1-1 (BladeList)', '/app/blade11/blade11.html', null, null, true, this.callback1, this),
                new azureportalng.BladeNavItem('Blade 2 (BladeList)', '/app/blade2/blade2.html'),
                new azureportalng.BladeNavItem('Blade 2-1 (BladeList)', '/app/blade21/blade21.html'),
                new azureportalng.BladeNavItem('List 1 (BladeList)', '/app/list1/list1.html'),
                new azureportalng.BladeNavItem('Detail 1 (BladeDetail)', '/app/detail1/detail1.html'),
                new azureportalng.BladeNavItem(),
                new azureportalng.BladeNavItem('no path'),
                new azureportalng.BladeNavItem('go to microsoft.com', null, 'http://www.microsoft.com'),
            ];

            this.statusbar = 'Nav 1 loaded.';
        }

        //#endregion

        //#region Methods

        onNavigateTo(path: string) {
            azureportalng.Debug.write('[sample1-debug] \'Nav1.onNavigateTo\' called.', [this, path]);
            if (path === '') { return; }
            this.portalService.bladeArea.raiseAddBladeEvent({ path: path, pathSender: this.blade.path });
        }

        callback1() {
            console.log('Nav1.callback1');
        }

        //#endregion
    }

    angular.module('sample1App').controller('nav1', ['azureportalng.portalService', Nav1]);
}
