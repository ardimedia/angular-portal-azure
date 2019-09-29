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
var blade_data_1 = require("./blade-data");
var BladeNav = /** @class */ (function (_super) {
    __extends(BladeNav, _super);
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    function BladeNav(portalService, path, title, subtitle, width) {
        if (title === void 0) { title = ''; }
        if (subtitle === void 0) { subtitle = ''; }
        if (width === void 0) { width = 315; }
        var _this = _super.call(this, portalService, path, title, subtitle, width) || this;
        _this.isInnerHtml = false;
        _this.isNav = true;
        return _this;
    }
    // #endregion
    // #region Properties
    //items: Array<BladeNavItem> = new Array<BladeNavItem>();
    // #endregion
    // #region Methods
    BladeNav.prototype.onNavigateTo = function (path) {
        if (path === '') {
            return;
        }
        this.portalService.areaBlades.raiseAddBladeEvent({ path: path, pathSender: this.path });
    };
    return BladeNav;
}(blade_data_1.BladeData));
exports.BladeNav = BladeNav;
//# sourceMappingURL=blade-nav.js.map