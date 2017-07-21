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
var UserControlBase_1 = require("./UserControlBase");
var AvatarMenu = (function (_super) {
    __extends(AvatarMenu, _super);
    // #region Constructor
    function AvatarMenu($scope, portalService) {
        return _super.call(this, $scope, portalService) || this;
    }
    return AvatarMenu;
}(UserControlBase_1.UserControlBase));
exports.AvatarMenu = AvatarMenu;
