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
    var Grid1 = (function (_super) {
        __extends(Grid1, _super);
        function Grid1($scope, portalService) {
            var _this = _super.call(this, $scope, portalService, '/app/grid1/grid1.html', 'Grid-1', 'TypeScript based', 500) || this;
            _this.activate();
            return _this;
        }
        // #endregion
        // #region Methods
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
    // #region Constructor
    Grid1.$inject = ['$scope', 'angularportalazure.portalService'];
    angular.module('sample1App').controller('grid1', Grid1);
})(Sample1 || (Sample1 = {}));
