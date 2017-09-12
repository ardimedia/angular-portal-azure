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
        // #endregion
        // #region Methods - Overrides for Blade
        Blade2.prototype.onCommandNew = function () {
            this.portalService.areaBlades.addBlade('/Sample1/blade21/blade21.html', this.path);
        };
        Blade2.prototype.onCommandSave = function () {
            this.portalService.areaBlades.addBlade('/Sample1/blade1/blade1.html', this.path);
        };
        Blade2.prototype.onActivate = function () {
            console.log('Blade2.onActivate');
        };
        // #endregion
        // #region Data Access
        Blade2.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade2;
    }(angularportalazure.BladeDetail));
    // #region Constructor
    Blade2.$inject = ['$scope', 'angularportalazure.portalService'];
    angular.module('sample1App').controller('blade2', Blade2);
})(Sample1 || (Sample1 = {}));
