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
    var Blade21 = (function (_super) {
        __extends(Blade21, _super);
        function Blade21($scope, portalService) {
            var _this = _super.call(this, $scope, portalService, '/app/blade21/blade21.html', 'Blade 2-1', 'TypeScript based', 500) || this;
            _this.isCommandNew = true;
            _this.commandNewText = 'Blade 2';
            _this.statusBar = 'Blade 2-1...';
            return _this;
        }
        // #endregion
        // #region Methods - Overrides for Blade
        Blade21.prototype.onCommandNew = function () {
            this.portalService.areaBlades.addBlade('/Sample1/blade2/blade2.html', this.path);
        };
        Blade21.prototype.onActivate = function () {
            console.log('Blade21.onActivate');
        };
        // #endregion
        // #region Data Access
        Blade21.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade21;
    }(angularportalazure.BladeDetail));
    // #region Constructor
    Blade21.$inject = ['$scope', 'angularportalazure.portalService'];
    angular.module('sample1App').controller('blade21', Blade21);
})(Sample1 || (Sample1 = {}));
