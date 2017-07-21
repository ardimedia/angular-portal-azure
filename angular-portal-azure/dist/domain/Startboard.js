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
var Tiles_1 = require("./Tiles");
var UserControlBase_1 = require("./UserControlBase");
var Startboard = (function (_super) {
    __extends(Startboard, _super);
    // #region Constructor
    function Startboard($scope, portalService) {
        var _this = _super.call(this, $scope, portalService) || this;
        _this.tiles = new Tiles_1.Tiles();
        return _this;
    }
    return Startboard;
}(UserControlBase_1.UserControlBase));
exports.Startboard = Startboard;
