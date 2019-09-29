"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BladeNavItem = /** @class */ (function () {
    // #region Constructor
    function BladeNavItem(title, cssClass, bladePath, hrefPath, roles, isVisible, callback, bladeNav) {
        if (title === void 0) { title = ''; }
        if (cssClass === void 0) { cssClass = ''; }
        if (bladePath === void 0) { bladePath = ''; }
        if (hrefPath === void 0) { hrefPath = ''; }
        if (roles === void 0) { roles = ''; }
        if (isVisible === void 0) { isVisible = true; }
        if (callback === void 0) { callback = null; }
        if (bladeNav === void 0) { bladeNav = null; }
        this.title = title;
        this.cssClass = cssClass;
        this.bladePath = bladePath;
        this.hrefPath = hrefPath;
        this.roles = roles;
        this.isVisible = isVisible;
        this.callback = callback;
        this.bladeNav = bladeNav;
    }
    // #endregion
    // #region Methods
    BladeNavItem.prototype.onNavItemClick = function () {
        if (this.callback != null) {
            this.callback();
        }
    };
    return BladeNavItem;
}());
exports.BladeNavItem = BladeNavItem;
//# sourceMappingURL=blade-nav-item.js.map