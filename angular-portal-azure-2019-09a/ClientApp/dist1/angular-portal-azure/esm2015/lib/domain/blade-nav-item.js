/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class BladeNavItem {
    // #region Constructor
    /**
     * @param {?=} title
     * @param {?=} cssClass
     * @param {?=} bladePath
     * @param {?=} hrefPath
     * @param {?=} roles
     * @param {?=} isVisible
     * @param {?=} callback
     * @param {?=} bladeNav
     */
    constructor(title = '', cssClass = '', bladePath = '', hrefPath = '', roles = '', isVisible = true, callback = null, bladeNav = null) {
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
    /**
     * @return {?}
     */
    onNavItemClick() {
        if (this.callback != null) {
            this.callback();
        }
    }
}
if (false) {
    /** @type {?} */
    BladeNavItem.prototype.title;
    /** @type {?} */
    BladeNavItem.prototype.cssClass;
    /** @type {?} */
    BladeNavItem.prototype.bladePath;
    /** @type {?} */
    BladeNavItem.prototype.hrefPath;
    /** @type {?} */
    BladeNavItem.prototype.roles;
    /** @type {?} */
    BladeNavItem.prototype.isVisible;
    /** @type {?} */
    BladeNavItem.prototype.callback;
    /** @type {?} */
    BladeNavItem.prototype.bladeNav;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUtbmF2LWl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vYmxhZGUtbmF2LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU0sT0FBTyxZQUFZOzs7Ozs7Ozs7Ozs7SUFHckIsWUFBbUIsUUFBZ0IsRUFBRSxFQUFTLFdBQW1CLEVBQUUsRUFBUyxZQUFvQixFQUFFLEVBQVMsV0FBbUIsRUFBRSxFQUFTLFFBQWdCLEVBQUUsRUFBUyxZQUFxQixJQUFJLEVBQVMsV0FBc0IsSUFBSSxFQUFTLFdBQTRCLElBQUk7UUFBdFAsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQWE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFhO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWE7UUFBUyxjQUFTLEdBQVQsU0FBUyxDQUFnQjtRQUFTLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBd0I7SUFDelEsQ0FBQzs7Ozs7O0lBTUQsY0FBYztRQUNWLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztDQUdKOzs7SUFkZSw2QkFBeUI7O0lBQUUsZ0NBQTRCOztJQUFFLGlDQUE2Qjs7SUFBRSxnQ0FBNEI7O0lBQUUsNkJBQXlCOztJQUFFLGlDQUFnQzs7SUFBRSxnQ0FBaUM7O0lBQUUsZ0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxhZGVOYXYgfSBmcm9tICcuL2JsYWRlLW5hdic7XG5cbmV4cG9ydCBjbGFzcyBCbGFkZU5hdkl0ZW0ge1xuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJycsIHB1YmxpYyBjc3NDbGFzczogc3RyaW5nID0gJycsIHB1YmxpYyBibGFkZVBhdGg6IHN0cmluZyA9ICcnLCBwdWJsaWMgaHJlZlBhdGg6IHN0cmluZyA9ICcnLCBwdWJsaWMgcm9sZXM6IHN0cmluZyA9ICcnLCBwdWJsaWMgaXNWaXNpYmxlOiBib29sZWFuID0gdHJ1ZSwgcHVibGljIGNhbGxiYWNrOiAoKSA9PiBhbnkgPSBudWxsLCBwdWJsaWMgYmxhZGVOYXY6IEJsYWRlTmF2IHwgbnVsbCA9IG51bGwpIHtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIE1ldGhvZHNcblxuICAgIG9uTmF2SXRlbUNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5jYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=