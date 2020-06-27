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
exports.Panorama = void 0;
var user_control_base_1 = require("./user-control-base");
var avatar_menu_1 = require("./avatar-menu");
var startboard_1 = require("./startboard");
var Panorama = /** @class */ (function (_super) {
    __extends(Panorama, _super);
    // #endregion
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    function Panorama(portalService, title) {
        var _this = _super.call(this, portalService) || this;
        _this.isVisible = true;
        _this.title = title;
        _this.portalService.panorama = _this;
        _this.avatarMenu = new avatar_menu_1.AvatarMenu(_this.portalService);
        _this.startboard = new startboard_1.Startboard(_this.portalService);
        return _this;
    }
    return Panorama;
}(user_control_base_1.UserControlBase));
exports.Panorama = Panorama;
//# sourceMappingURL=panorama.js.map