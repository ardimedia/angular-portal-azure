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
    var Detail1 = (function (_super) {
        __extends(Detail1, _super);
        function Detail1($scope, portalService) {
            var _this = _super.call(this, $scope, portalService, '/app/detail1/detail1.html', 'Detail-1', 'TypeScript based', 500) || this;
            _this.activate();
            return _this;
        }
        // #endregion
        // #region Methods
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
    // #region Constructor
    Detail1.$inject = ['$scope', 'angularportalazure.portalService'];
    angular.module('sample1App').controller('detail1', Detail1);
})(Sample1 || (Sample1 = {}));
