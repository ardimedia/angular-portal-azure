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
exports.Startboard = void 0;
var tiles_1 = require("./tiles");
var user_control_base_1 = require("./user-control-base");
var Startboard = /** @class */ (function (_super) {
    __extends(Startboard, _super);
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    function Startboard(portalService) {
        var _this = _super.call(this, portalService) || this;
        _this.tiles = new tiles_1.Tiles();
        return _this;
    }
    return Startboard;
}(user_control_base_1.UserControlBase));
exports.Startboard = Startboard;
//# sourceMappingURL=startboard.js.map