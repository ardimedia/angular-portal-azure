/// <reference path="../../node_modules/@ardimedia/angular-portal-azure/apn.d.ts" />
/// <reference types="angular" />

namespace Sample1 {
    class Nav1 extends angularportalazure.BladeNav {
        //#region Constructor

        static $inject = ['angularportalazure.portalService'];
        constructor(portalService: angularportalazure.PortalService) {
            super(portalService, '/app/nav1/nav1.html', 'Navigation 1', 'TypeScript based', 315);
            angularportalazure.Debug.write('[sample1-debug] \'Nav1\' constructor called.', [this]);

            this.items = [
                new angularportalazure.BladeNavItem('Blade 1-1 (BladeDetail)', 'fa fa-outdent', '/app/blade11/blade11.html', null, null, true, this.callback1, this),
                new angularportalazure.BladeNavItem('Blade 2 (BladeDetail)', 'fa fa-outdent', '/app/blade2/blade2.html'),
                new angularportalazure.BladeNavItem('Blade 2-1 (BladeDetail)', 'fa fa-outdent', '/app/blade21/blade21.html'),
                new angularportalazure.BladeNavItem('Detail 1 (BladeDetail)', 'fa fa-outdent', '/app/detail1/detail1.html'),
                new angularportalazure.BladeNavItem('Grid 1 (BladeGrid)', 'fa fa-outdent', '/app/grid1/grid1.html'),
                new angularportalazure.BladeNavItem(),
                new angularportalazure.BladeNavItem('no path'),
                new angularportalazure.BladeNavItem('go to microsoft.com', 'fa fa-outdent', null, 'http://www.microsoft.com'),
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
        }

        //#endregion
    }

    angular.module('sample1App').controller('nav1', Nav1);
}
