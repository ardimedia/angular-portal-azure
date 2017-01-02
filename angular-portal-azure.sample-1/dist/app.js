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
var Sample1;
(function (Sample1) {
    var CustomerService = (function () {
        function CustomerService() {
        }
        CustomerService.prototype.getAll = function () {
            var list = [];
            list.push(new Sample1.Customer(1, 'Evi', 'Pfleger'));
            list.push(new Sample1.Customer(2, 'Harry', 'Pfleger'));
            list.push(new Sample1.Customer(3, 'Niklas', 'Pfleger'));
            list.push(new Sample1.Customer(4, 'Julia', 'Pfleger'));
            return list;
        };
        CustomerService.prototype.getById = function (id) {
            return this.getAll()[id];
        };
        return CustomerService;
    }());
    Sample1.CustomerService = CustomerService;
})(Sample1 || (Sample1 = {}));
/// <reference types="angular" />
/// <reference types="angulartics" />
/// <reference types="@ardimedia/angular-portal-azure" />
/// <reference path="../node_modules/@types/angular/index.d.ts" />
var Sample1;
(function (Sample1) {
    angular.module('sample1App', [
        'ngResource',
        'ngDialog',
        'ngDialog',
        'angularportalazure'
    ]);
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
        function Blade11($scope, portalService) {
            var _this = _super.call(this, $scope, portalService, '/app/blade11/blade11.html', 'Blade 1-1', 'TypeScript based', 500) || this;
            _this.isCommandNew = true;
            _this.commandNewText = 'Blade 2';
            _this.statusBar = 'Blade 1-1...';
            _this.vm = _this;
            _this.isCommandExcel = true;
            return _this;
        }
        //#endregion
        //#region Methods - Overrides for Blade
        Blade11.prototype.onCommandNew = function () {
            this.portalService.areaBlades.addBlade('/Sample1/blade2/blade2.html', this.path);
        };
        Blade11.prototype.onActivate = function () {
        };
        //#endregion
        //#region Data Access
        Blade11.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade11;
    }(angularportalazure.BladeDetail));
    //#region Constructor
    Blade11.$inject = ['$scope', 'angularportalazure.portalService'];
    angular.module('sample1App').controller('blade11', Blade11);
})(Sample1 || (Sample1 = {}));
/// <reference path="../../node_modules/@ardimedia/angular-portal-azure/apn.d.ts" />
/// <reference types="angular" />
var Sample1;
(function (Sample1) {
    var Blade2 = (function (_super) {
        __extends(Blade2, _super);
        function Blade2($scope, portalService) {
            var _this = _super.call(this, $scope, portalService, '/app/blade2/blade2.html', 'Blade 2', 'TypeScript based', 500) || this;
            _this.isCommandNew = true;
            _this.commandNewText = 'Blade 2-1';
            _this.isCommandSave = true;
            _this.commandSaveText = 'Blade 1';
            _this.statusBar = 'Blade 2...';
            return _this;
        }
        //#endregion
        //#region Methods - Overrides for Blade
        Blade2.prototype.onCommandNew = function () {
            this.portalService.areaBlades.addBlade('/Sample1/blade21/blade21.html', this.path);
        };
        Blade2.prototype.onCommandSave = function () {
            this.portalService.areaBlades.addBlade('/Sample1/blade1/blade1.html', this.path);
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
    }(angularportalazure.BladeDetail));
    //#region Constructor
    Blade2.$inject = ['$scope', 'angularportalazure.portalService'];
    angular.module('sample1App').controller('blade2', Blade2);
})(Sample1 || (Sample1 = {}));
/// <reference path="../../node_modules/@ardimedia/angular-portal-azure/apn.d.ts" />
/// <reference types="angular" />
var Sample1;
(function (Sample1) {
    var Blade21 = (function (_super) {
        __extends(Blade21, _super);
        function Blade21($scope, portalService) {
            var _this = _super.call(this, $scope, portalService, '/app/blade21/blade21.html', 'Blade 2-1', 'TypeScript based', 500) || this;
            _this.isCommandNew = true;
            _this.commandNewText = 'Blade 2';
            _this.statusBar = 'Blade 2-1...';
            return _this;
        }
        //#endregion
        //#region Methods - Overrides for Blade
        Blade21.prototype.onCommandNew = function () {
            this.portalService.areaBlades.addBlade('/Sample1/blade2/blade2.html', this.path);
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
    }(angularportalazure.BladeDetail));
    //#region Constructor
    Blade21.$inject = ['$scope', 'angularportalazure.portalService'];
    angular.module('sample1App').controller('blade21', Blade21);
})(Sample1 || (Sample1 = {}));
/// <reference types="angular" />
var Sample1;
(function (Sample1) {
    var Detail1 = (function (_super) {
        __extends(Detail1, _super);
        function Detail1($scope, portalService) {
            var _this = _super.call(this, $scope, portalService, '/app/detail1/detail1.html', 'Detail-1', 'TypeScript based', 500) || this;
            _this.activate();
            return _this;
        }
        //#endregion
        //#region Methods
        Detail1.prototype.onActivate = function () {
            var customer = this.portalService.parameter.item;
            var customerId = this.portalService.parameter.itemId;
            if (customerId === 0) {
                this.portalService.parameter.action = 'selected';
                customerId = 1;
            }
            if (this.portalService.parameter.action === 'new') {
                this.item = customer;
                return null;
            }
            else if (this.portalService.parameter.action === 'selected') {
                this.item = new Sample1.CustomerService().getById(customerId - 1);
                return null;
            }
        };
        return Detail1;
    }(angularportalazure.BladeDetail));
    //#region Constructor
    Detail1.$inject = ['$scope', 'angularportalazure.portalService'];
    angular.module('sample1App').controller('detail1', Detail1);
})(Sample1 || (Sample1 = {}));
/// <reference path="../../node_modules/@ardimedia/angular-portal-azure/apn.d.ts" />
/// <reference types="angular" />
var Sample1;
(function (Sample1) {
    var Grid1 = (function (_super) {
        __extends(Grid1, _super);
        function Grid1($scope, portalService) {
            var _this = _super.call(this, $scope, portalService, '/app/grid1/grid1.html', 'Grid-1', 'TypeScript based', 500) || this;
            _this.activate();
            return _this;
        }
        //#endregion
        //#region Methods
        Grid1.prototype.onActivate = function () {
            angularportalazure.Debug.write('[sample1-debug] \'Grid1.onActivate\' called.', [this]);
            this.items = new Sample1.CustomerService().getAll();
            this.statusBar = '';
        };
        Grid1.prototype.onCommandNew = function () {
            angularportalazure.Debug.write('[sample1-debug] \'Grid1.onCommandNew\' called.', [this]);
            this.portalService.parameter.action = 'new';
            this.portalService.parameter.item = new Sample1.Customer(0, 'firstName', 'lastName');
            this.portalService.areaBlades.raiseAddBladeEvent({ path: '/app/detail1/detail1.html', pathSender: this.path });
        };
        Grid1.prototype.onNavigateTo = function (customer) {
            angularportalazure.Debug.write('[sample1-debug] \'Grid1.onNavigateTo\' called.', [this, customer]);
            this.portalService.parameter.action = 'selected';
            this.portalService.parameter.item = customer;
            this.portalService.parameter.itemId = customer.customerPkId;
            this.portalService.areaBlades.raiseAddBladeEvent({ path: '/app/detail1/detail1.html', pathSender: this.path });
        };
        return Grid1;
    }(angularportalazure.BladeGrid));
    //#region Constructor
    Grid1.$inject = ['$scope', 'angularportalazure.portalService'];
    angular.module('sample1App').controller('grid1', Grid1);
})(Sample1 || (Sample1 = {}));
/// <reference path="../../node_modules/@ardimedia/angular-portal-azure/apn.d.ts" />
/// <reference types="angular" />
var Sample1;
(function (Sample1) {
    var Nav1 = (function (_super) {
        __extends(Nav1, _super);
        function Nav1($scope, portalService) {
            var _this = _super.call(this, $scope, portalService, '/app/nav1/nav1.html', 'Navigation 1', 'TypeScript based', 315) || this;
            angularportalazure.Debug.write('[sample1-debug] \'Nav1\' constructor called.', [_this]);
            _this.items = [
                new angularportalazure.BladeNavItem('Blade 1-1 (BladeDetail)', 'fa fa-building-o', '/app/blade11/blade11.html', null, null, true, _this.callback1, _this),
                new angularportalazure.BladeNavItem('Blade 2 (BladeDetail)', 'fa fa-building', '/app/blade2/blade2.html'),
                new angularportalazure.BladeNavItem('Blade 2-1 (BladeDetail)', 'fa fa-outdent', '/app/blade21/blade21.html'),
                new angularportalazure.BladeNavItem('Detail 1 (BladeDetail)', 'fa fa-user-o', '/app/detail1/detail1.html'),
                new angularportalazure.BladeNavItem('Grid 1 (BladeGrid)', 'fa fa-user', '/app/grid1/grid1.html'),
                new angularportalazure.BladeNavItem(),
                new angularportalazure.BladeNavItem('no path'),
                new angularportalazure.BladeNavItem('go to microsoft.com', 'fa fa-outdent', null, 'http://www.microsoft.com'),
            ];
            _this.statusBar = 'Nav 1 loaded.';
            return _this;
        }
        //#endregion
        //#region Methods
        Nav1.prototype.onNavigateTo = function (path) {
            angularportalazure.Debug.write('[sample1-debug] \'Nav1.onNavigateTo\' called.', [this, path]);
            if (path === '') {
                return;
            }
            this.portalService.areaBlades.raiseAddBladeEvent({ path: path, pathSender: this.path });
        };
        Nav1.prototype.callback1 = function () {
        };
        return Nav1;
    }(angularportalazure.BladeNav));
    //#region Constructor
    Nav1.$inject = ['$scope', 'angularportalazure.portalService'];
    angular.module('sample1App').controller('nav1', Nav1);
})(Sample1 || (Sample1 = {}));
var Sample1;
(function (Sample1) {
    var Sample1Shell = (function (_super) {
        __extends(Sample1Shell, _super);
        function Sample1Shell(portalService) {
            var _this = _super.call(this, portalService, 'Angular Portal Azure - Sample1') || this;
            _this.portalService.panorama.startboard.tiles.showTiles = true;
            _this.portalService.panorama.avatarMenu.userAccount = new angularportalazure.UserAccount('useraccount@mail.com', 'first', 'last');
            {
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Navigation 1', '/app/nav1/nav1.html', portalService));
                tile.subTitle = 'TypeScript based';
            }
            {
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Grid 1', '/app/grid1/grid1.html', portalService));
                tile.subTitle = 'TypeScript based';
            }
            {
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Blade 1-1', '/app/blade11/blade11.html', portalService));
                tile.subTitle = 'TypeScript based';
            }
            {
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Blade 2', '/app/blade2/blade2.html', portalService));
                tile.subTitle = 'TypeScript based';
            }
            {
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Blade 2-1', '/app/blade21/blade21.html', portalService));
                tile.subTitle = 'TypeScript based';
            }
            {
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new angularportalazure.Tile('Detail 1', '/app/detail1/detail1.html', portalService));
                tile.subTitle = 'TypeScript based';
            }
            _this.httpTestData();
            return _this;
        }
        //#endregion
        //#region Methods
        Sample1Shell.prototype.httpTestData = function () {
            var customers = new Array();
            customers.push(new Sample1.Customer(1001, 'Harry', 'Sleeper'));
            customers.push(new Sample1.Customer(1002, 'Eva', 'Cooker'));
            customers.push(new Sample1.Customer(1003, 'Niklas', 'Soccer'));
            customers.push(new Sample1.Customer(1004, 'Julia', 'Singer'));
        };
        return Sample1Shell;
    }(angularportalazure.PortalShell));
    //#region Constructor
    Sample1Shell.$inject = ['angularportalazure.portalService'];
    angular.module('sample1App').controller('sampleShell1', Sample1Shell);
})(Sample1 || (Sample1 = {}));
