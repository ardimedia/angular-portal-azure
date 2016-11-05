/// <reference types="@ardimedia/angular-portal-azure" />
/// <reference path="../node_modules/@types/angular/index.d.ts" />
var Sample1;
(function (Sample1) {
    var app = angular.module('sample1App', [
        'ngResource',
        'ngDialog',
        'angularportalazure'
    ]);
    //#region Configuration
    /** configure angular */
    //app.config([function (): void {
    //    angularportalazure.Debug.enable(); // '[sample1-debug]'
    //    angularportalazure.Debug.isEnabled = true;
    //    angularportalazure.Debug.isWithObjects = false;
    //}]);
    /** configure angular dialog */
    //app.config(['ngDialogProvider', function (ngDialogProvider: any): void {
    //    ngDialogProvider.setDefaults({
    //        className: 'ngdialog-theme-default',
    //        plain: false,
    //        showClose: false,
    //        closeByDocument: true,
    //        closeByEscape: true,
    //        appendTo: false
    //    });
    //}]);
    /** run angular */
    //app.run(['$templateCache', function ($templateCache) {
    //    $templateCache.removeAll();
    //}]);
    //#endregion
    /** bootstrap angular */
    angular.element(document.body).ready(function () {
        angular.bootstrap(document.body, ['sample1App'], { strictDi: true });
    });
})(Sample1 || (Sample1 = {}));
/// <reference types="@ardimedia/angular-portal-azure" />
/// <reference types="angular" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Sample1;
(function (Sample1) {
    var Blade11 = (function (_super) {
        __extends(Blade11, _super);
        //#region Constructors
        function Blade11(portalService) {
            _super.call(this, portalService, '/app/blade11/blade11.html', 'Blade 1-1', 'TypeScript based', 315);
            this.isCommandNew = true;
            this.commandNewText = 'Blade 2';
            this.statusbar = 'Blade 1-1...';
            this.vm = this;
        }
        //#endregion
        //#region Methods - Overrides for Blade
        Blade11.prototype.onCommandNew = function () {
            this.portalService.bladeArea.addBlade('/Sample1/blade2/blade2.html', this.path);
        };
        Blade11.prototype.onActivate = function () {
        };
        //#endregion
        //#region Data Access
        Blade11.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade11;
    }(angularportalazure.BladeList));
    angular.module('sample1App').controller('blade11', ['angularportalazure.portalService', Blade11]);
})(Sample1 || (Sample1 = {}));
//namespace Sample1 {
//    function blade11Blade() {
//        return {
//            restrict: 'E',
//            replace: true,
//            transclude: true,
//            scope: {},
//            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
//            controller: 'blade11',
//            controllerAs: '$ctrl',
//        };
//    }
//    angular.module('sample1App').directive('blade11Blade', [blade11Blade]);
//}
/// <reference path="../../node_modules/@ardimedia/angular-portal-azure/apn.d.ts" />
/// <reference types="angular" />
var Sample1;
(function (Sample1) {
    var Blade2 = (function (_super) {
        __extends(Blade2, _super);
        //#region Constructors
        function Blade2(portalService) {
            _super.call(this, portalService, '/app/blade2/blade2.html', 'Blade 2', 'TypeScript based', 315);
            this.isCommandNew = true;
            this.commandNewText = 'Blade 2-1';
            this.isCommandSave = true;
            this.commandSaveText = 'Blade 1';
            this.statusbar = 'Blade 2...';
        }
        //#endregion
        //#region Methods - Overrides for Blade
        Blade2.prototype.onCommandNew = function () {
            this.portalService.bladeArea.addBlade('/Sample1/blade21/blade21.html', this.path);
        };
        Blade2.prototype.onCommandSave = function () {
            this.portalService.bladeArea.addBlade('/Sample1/blade1/blade1.html', this.path);
        };
        Blade2.prototype.onActivate = function () {
            console.log('Blade2.onActivate');
        };
        //#endregion
        //#region Data Access
        Blade2.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade2;
    }(angularportalazure.BladeList));
    angular.module('sample1App').controller('blade2', ['angularportalazure.portalService', Blade2]);
})(Sample1 || (Sample1 = {}));
//namespace Sample1 {
//    function blade2Blade() {
//        return {
//            replace: true,
//            transclude: true,
//            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
//            controller: 'blade2',
//            controllerAs: 'vm',
//        };
//    }
//    angular.module('sample1App').directive('blade2Blade', [blade2Blade]);
//}
/// <reference path="../../node_modules/@ardimedia/angular-portal-azure/apn.d.ts" />
/// <reference types="angular" />
var Sample1;
(function (Sample1) {
    var Blade21 = (function (_super) {
        __extends(Blade21, _super);
        //#region Constructors
        function Blade21(portalService) {
            _super.call(this, portalService, '/app/blade21/blade21.html', 'Blade 2-1', 'TypeScript based', 315);
            this.isCommandNew = true;
            this.commandNewText = 'Blade 2';
            this.statusbar = 'Blade 2-1...';
        }
        //#endregion
        //#region Methods - Overrides for Blade
        Blade21.prototype.onCommandNew = function () {
            this.portalService.bladeArea.addBlade('/Sample1/blade2/blade2.html', this.path);
        };
        Blade21.prototype.onActivate = function () {
            console.log('Blade21.onActivate');
        };
        //#endregion
        //#region Data Access
        Blade21.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade21;
    }(angularportalazure.BladeList));
    angular.module('sample1App').controller('blade21', ['angularportalazure.portalService', Blade21]);
})(Sample1 || (Sample1 = {}));
var Sample1;
(function (Sample1) {
    function blade21Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
            controller: 'blade21',
            controllerAs: 'vm',
        };
    }
    angular.module('sample1App').directive('blade21Blade', [blade21Blade]);
})(Sample1 || (Sample1 = {}));
var Sample1;
(function (Sample1) {
    var Customer = (function () {
        function Customer(customerPkId, firstName, lastName) {
            this.customerPkId = customerPkId;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        return Customer;
    }());
    Sample1.Customer = Customer;
})(Sample1 || (Sample1 = {}));
/// <reference types="angular" />
var Sample1;
(function (Sample1) {
    var Detail1 = (function (_super) {
        __extends(Detail1, _super);
        //#region Constructors
        function Detail1(portalService) {
            _super.call(this, portalService, '/app/detail1/detail1.html', 'Detail-1', 'TypeScript based', 415);
            this.activate();
        }
        //#endregion
        //#region Methods
        Detail1.prototype.onActivate = function () {
            var customer = this.portalService.parameter.item;
            if (this.portalService.parameter.action === 'new') {
                this.item = customer;
                return null;
            }
            else if (this.portalService.parameter.action === 'selected') {
                return this.portalService.$http({ method: 'GET', url: '/customer/' + customer.customerPkId });
            }
        };
        return Detail1;
    }(angularportalazure.BladeDetail));
    angular.module('sample1App').controller('detail1', ['angularportalazure.portalService', Detail1]);
})(Sample1 || (Sample1 = {}));
//namespace Sample1 {
//    function detail1Blade() {
//        return {
//            replace: true,
//            transclude: true,
//            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
//            controller: 'detail1',
//            controllerAs: 'vm',
//        };
//    }
//    angular.module('sample1App').directive('detail1Blade', [detail1Blade]);
//}
/// <reference path="../../node_modules/@ardimedia/angular-portal-azure/apn.d.ts" />
/// <reference types="angular" />
var Sample1;
(function (Sample1) {
    var Grid1 = (function (_super) {
        __extends(Grid1, _super);
        function Grid1(portalService) {
            _super.call(this, portalService, '/app/nav1/nav1.html', 'Navigation 1', 'TypeScript based', 315);
            angularportalazure.Debug.write('[sample1-debug] \'Nav1\' constructor called.', [this]);
            this.navItems = [
                new angularportalazure.BladeNavItem('Grid 1 (BladeNav)', '/app/grid1/grid.html'),
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
        Grid1.prototype.onNavigateTo = function (path) {
            angularportalazure.Debug.write('[sample1-debug] \'Nav1.onNavigateTo\' called.', [this, path]);
            if (path === '') {
                return;
            }
            this.portalService.bladeArea.raiseAddBladeEvent({ path: path, pathSender: this.blade.path });
        };
        Grid1.prototype.callback1 = function () {
        };
        //#region Constructors
        Grid1.$inject = ['angularportalazure.portalService'];
        return Grid1;
    }(angularportalazure.BladeNav));
    angular.module('sample1App').controller('grid1', Grid1);
})(Sample1 || (Sample1 = {}));
/// <reference path="../../node_modules/@ardimedia/angular-portal-azure/apn.d.ts" />
/// <reference types="angular" />
var Sample1;
(function (Sample1) {
    var List1 = (function (_super) {
        __extends(List1, _super);
        //#region Constructors
        function List1(portalService) {
            _super.call(this, portalService, '/app/list1/list1.html', 'List-1', 'TypeScript based', 315);
            this.activate();
        }
        //#endregion
        //#region Methods
        List1.prototype.onActivate = function () {
            angularportalazure.Debug.write('[sample1-debug] \'List1.onActivate\' called.', [this]);
            //return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        List1.prototype.onCommandNew = function () {
            angularportalazure.Debug.write('[sample1-debug] \'List1.onCommandNew\' called.', [this]);
            this.portalService.parameter.action = 'new';
            this.portalService.parameter.item = new Sample1.Customer(0, 'firstName', 'lastName');
            this.portalService.bladeArea.raiseAddBladeEvent({ path: '/Sample1/detail1/detail1.html', pathSender: this.blade.path });
        };
        List1.prototype.onNavigateTo = function (customer) {
            angularportalazure.Debug.write('[sample1-debug] \'List1.onNavigateTo\' called.', [this, customer]);
            this.portalService.parameter.action = 'selected';
            this.portalService.parameter.item = customer;
            this.portalService.bladeArea.raiseAddBladeEvent({ path: '/Sample1/detail1/detail1.html', pathSender: this.blade.path });
        };
        return List1;
    }(angularportalazure.BladeList));
    angular.module('sample1App').controller('list1', ['angularportalazure.portalService', List1]);
})(Sample1 || (Sample1 = {}));
var Sample1;
(function (Sample1) {
    function list1Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
            controller: 'list1',
            controllerAs: 'vm',
        };
    }
    angular.module('sample1App').directive('list1Blade', [list1Blade]);
})(Sample1 || (Sample1 = {}));
/// <reference path="../../node_modules/@ardimedia/angular-portal-azure/apn.d.ts" />
/// <reference types="angular" />
var Sample1;
(function (Sample1) {
    var Nav1 = (function (_super) {
        __extends(Nav1, _super);
        function Nav1(portalService) {
            _super.call(this, portalService, '/app/nav1/nav1.html', 'Navigation 1', 'TypeScript based', 315);
            angularportalazure.Debug.write('[sample1-debug] \'Nav1\' constructor called.', [this]);
            this.navItems = [
                new angularportalazure.BladeNavItem('Grid 1 (BladeNav)', '/app/grid1/grid.html'),
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
        Nav1.prototype.onNavigateTo = function (path) {
            angularportalazure.Debug.write('[sample1-debug] \'Nav1.onNavigateTo\' called.', [this, path]);
            if (path === '') {
                return;
            }
            this.portalService.bladeArea.raiseAddBladeEvent({ path: path, pathSender: this.blade.path });
        };
        Nav1.prototype.callback1 = function () {
        };
        //#region Constructors
        Nav1.$inject = ['angularportalazure.portalService'];
        return Nav1;
    }(angularportalazure.BladeNav));
    angular.module('sample1App').controller('nav1', Nav1);
})(Sample1 || (Sample1 = {}));
var Sample1;
(function (Sample1) {
    var Sample1Shell = (function (_super) {
        __extends(Sample1Shell, _super);
        //#region Constructors
        function Sample1Shell(portalService) {
            _super.call(this, 'SAMPLE TypeScript', portalService);
            this.portalService.panorama.startboard.tiles.showTiles = true;
            this.portalService.panorama.avatarMenu.userAccount = new angularportalazure.UserAccount('useraccount@mail.com', 'first', 'last');
            var tile = this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Navigation 1', '/app/nav1/nav1.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Blade 1-1', '/app/blade11/blade11.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Blade 2', '/app/blade2/blade2.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Blade 2-1', '/app/blade21/blade21.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('List 1', '/app/list1/list1.html', portalService));
            tile.subTitle = 'TypeScript based';
            var tile = this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Detail 1', '/app/detail1/detail1.html', portalService));
            tile.subTitle = 'TypeScript based';
            this.setObsoleteLayoutProperites();
            this.httpTestData();
        }
        //#endregion
        //#region Methods
        Sample1Shell.prototype.httpTestData = function () {
            var customers = new Array();
            customers.push(new Sample1.Customer(1001, 'Harry', 'Sleeper'));
            customers.push(new Sample1.Customer(1002, 'Eva', 'Cooker'));
            customers.push(new Sample1.Customer(1003, 'Niklas', 'Soccer'));
            customers.push(new Sample1.Customer(1004, 'Julia', 'Singer'));
            //this.portalService.$httpBackend.whenGET(/\/angularportalazure\/.*/).passThrough();
            //this.portalService.$httpBackend.whenGET(/\/sample1\/.*/).passThrough();
            //this.portalService.$httpBackend.whenGET(/\/Sample1\/.*/).passThrough();
            //this.portalService.$httpBackend.whenGET('/customers')
            //    .respond(customers);
            //this.portalService.$httpBackend.whenGET('/customer/1001')
            //    .respond(customers[0]);
            //this.portalService.$httpBackend.whenGET('/customer/1002')
            //    .respond(customers[1]);
            //this.portalService.$httpBackend.whenGET('/customer/1003')
            //    .respond(customers[2]);
            //this.portalService.$httpBackend.whenGET('/customer/1004')
            //    .respond(customers[3]);
        };
        return Sample1Shell;
    }(angularportalazure.PortalShell));
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('sample1App').controller('sampleShell1', ['angularportalazure.portalService', Sample1Shell]);
    })();
})(Sample1 || (Sample1 = {}));
