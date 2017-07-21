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
var BladeData_1 = require("./BladeData");
var BladeNav = (function (_super) {
    __extends(BladeNav, _super);
    // #region Constructor
    function BladeNav($scope, portalService, path, title, subtitle, width) {
        if (title === void 0) { title = ''; }
        if (subtitle === void 0) { subtitle = ''; }
        if (width === void 0) { width = 315; }
        var _this = _super.call(this, $scope, portalService, path, title, subtitle, width) || this;
        // #endregion
        // #region Properties
        _this.items = new Array();
        _this.isNav = true;
        _this.isInnerHtml = false;
        return _this;
    }
    // #endregion
    // #region Methods
    BladeNav.prototype.onNavigateTo = function (path) {
        if (path === '') {
            return;
        }
        this.portalService.areaBlades.raiseAddBladeEvent({ path: path, pathSender: this.path });
    };
    return BladeNav;
}(BladeData_1.BladeData));
exports.BladeNav = BladeNav;
