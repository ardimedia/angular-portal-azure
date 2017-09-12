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
var blade_1 = require("./blade");
var BladeData = (function (_super) {
    __extends(BladeData, _super);
    // #region Constructor
    function BladeData($scope, portalService, path, title, subtitle, width) {
        if (subtitle === void 0) { subtitle = ''; }
        if (width === void 0) { width = 300; }
        return _super.call(this, $scope, portalService, path, title, subtitle, width) || this;
    }
    // #endregion
    BladeData.prototype.onLoadItem = function () {
        this.visibility = 'collapse';
        this.setStatusBarLoadData();
    };
    BladeData.prototype.onLoadItems = function () {
        this.visibility = 'collapse';
        this.setStatusBarLoadData();
    };
    BladeData.prototype.onLoadedItem = function () {
        this.visibility = 'visible';
        this.clearStatusBar();
    };
    BladeData.prototype.onLoadedItems = function () {
        this.visibility = 'visible';
        this.clearStatusBar();
    };
    return BladeData;
}(blade_1.Blade));
exports.BladeData = BladeData;
