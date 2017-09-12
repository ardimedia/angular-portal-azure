/// <reference types="@ardimedia/angular-portal-azure" />
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
        // #endregion
        // #region Methods - Overrides for Blade
        Blade11.prototype.onCommandNew = function () {
            this.portalService.areaBlades.addBlade('/Sample1/blade2/blade2.html', this.path);
        };
        Blade11.prototype.onActivate = function () {
        };
        // #endregion
        // #region Data Access
        Blade11.prototype.onGetDataList = function () {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        };
        return Blade11;
    }(angularportalazure.BladeDetail));
    // #region Constructor
    Blade11.$inject = ['$scope', 'angularportalazure.portalService'];
    angular.module('sample1App').controller('blade11', Blade11);
})(Sample1 || (Sample1 = {}));
