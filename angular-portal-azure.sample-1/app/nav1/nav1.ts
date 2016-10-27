/// <reference path="../../node_modules/@ardimedia/angular-portal-azure/apn.d.ts" />
/// <reference types="angular" />

namespace Sample1 {
    class Nav1 extends angularportalazure.BladeNav {
        //#region Constructors

        constructor(portalService: angularportalazure.PortalService) {
            super(portalService, '/app/nav1/nav1.html', 'Navigation 1', 'TypeScript based', 315);
            angularportalazure.Debug.write('[sample1-debug] \'Nav1\' constructor called.', [this]);

            this.navItems = [
                new angularportalazure.BladeNavItem('Navigation 1 (BladeNav)', '/app/nav1/nav1.html'),
                new angularportalazure.BladeNavItem('Blade 1-1 (BladeList)', '/app/blade11/blade11.html', null, null, true, this.callback1, this),
                new angularportalazure.BladeNavItem('Blade 2 (BladeList)', '/app/blade2/blade2.html'),
                new angularportalazure.BladeNavItem('Blade 2-1 (BladeList)', '/app/blade21/blade21.html'),
                new angularportalazure.BladeNavItem('List 1 (BladeList)', '/app/list1/list1.html'),
                new angularportalazure.BladeNavItem('Detail 1 (BladeDetail)', '/app/detail1/detail1.html'),
                new angularportalazure.BladeNavItem(),
                new angularportalazure.BladeNavItem('no path'),
                new angularportalazure.BladeNavItem('go to microsoft.com', null, 'http://www.microsoft.com'),
            ];

            this.statusbar = 'Nav 1 loaded.';
        }

        //#endregion

        //#region Methods

        onNavigateTo(path: string) {
            angularportalazure.Debug.write('[sample1-debug] \'Nav1.onNavigateTo\' called.', [this, path]);
            if (path === '') { return; }
            this.portalService.bladeArea.raiseAddBladeEvent({ path: path, pathSender: this.blade.path });
        }

        callback1() {
            console.log('Nav1.callback1');
        }

        //#endregion
    }

    angular.module('sample1App').controller('nav1', ['angularportalazure.portalService', Nav1]);
}
