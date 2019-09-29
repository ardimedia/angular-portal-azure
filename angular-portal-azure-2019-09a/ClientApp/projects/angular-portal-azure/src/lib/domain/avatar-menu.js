"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var user_control_base_1 = require("./user-control-base");
var user_account_1 = require("./user-account");
var AvatarMenu = /** @class */ (function (_super) {
    __extends(AvatarMenu, _super);
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    function AvatarMenu(portalService) {
        var _this = _super.call(this, portalService) || this;
        _this.userAccount = new user_account_1.UserAccount('demo@apa.org', 'demo', 'apa');
        return _this;
    }
    return AvatarMenu;
}(user_control_base_1.UserControlBase));
exports.AvatarMenu = AvatarMenu;
//# sourceMappingURL=avatar-menu.js.map