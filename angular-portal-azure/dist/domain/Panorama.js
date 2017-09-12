"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var usercontrolbase_1 = require("./usercontrolbase");
var avatarmenu_1 = require("./avatarmenu");
var startboard_1 = require("./startboard");
var Panorama = (function (_super) {
    __extends(Panorama, _super);
    // #endregion
    // #region Constructor
    function Panorama($scope, title, portalService) {
        var _this = _super.call(this, $scope, portalService) || this;
        _this.isVisible = true;
        _this.title = title;
        _this.portalService.panorama = _this;
        _this.avatarMenu = new avatarmenu_1.AvatarMenu(_this.$scope, _this.portalService);
        _this.startboard = new startboard_1.Startboard(_this.$scope, _this.portalService);
        return _this;
    }
    return Panorama;
}(usercontrolbase_1.UserControlBase));
exports.Panorama = Panorama;
exports.default = angular.module('angularportalazure', [])
    .service('angularportalazure.panorama', Panorama)
    .name;
