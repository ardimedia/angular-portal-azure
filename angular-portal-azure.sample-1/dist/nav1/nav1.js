/// <reference path="../../node_modules/@ardimedia/angular-portal-azure/apn.d.ts" />
/// <reference types="angular" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        // #endregion
        // #region Methods
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
    // #region Constructor
    Nav1.$inject = ['$scope', 'angularportalazure.portalService'];
    angular.module('sample1App').controller('nav1', Nav1);
})(Sample1 || (Sample1 = {}));
