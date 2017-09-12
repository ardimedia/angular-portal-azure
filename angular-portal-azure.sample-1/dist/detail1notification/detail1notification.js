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
    var Detail1Notification = (function (_super) {
        __extends(Detail1Notification, _super);
        function Detail1Notification($scope, portalService) {
            var _this = _super.call(this, $scope, portalService, '/app/detail1notification/detail1notification.html', 'Detail-1-Notification', 'TypeScript based', 500) || this;
            _this.activate();
            return _this;
        }
        // #endregion
        // #region Methods
        Detail1Notification.prototype.onActivate = function () {
            this.commandDocumentText = 'Show Notification';
            this.isCommandDocument = true;
            return;
        };
        Detail1Notification.prototype.onCommandDocument = function () {
            this.portalService.areaNotification.path = '/app/grid1/grid1.html';
            this.portalService.areaNotification.show(500);
        };
        return Detail1Notification;
    }(angularportalazure.BladeDetail));
    // #region Constructor
    Detail1Notification.$inject = ['$scope', 'angularportalazure.portalService'];
    angular.module('sample1App').controller('detail1', Detail1Notification);
})(Sample1 || (Sample1 = {}));
