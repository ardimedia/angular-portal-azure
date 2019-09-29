/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    // #endregion
    // #region Methods
    /**
     * @return {?}
     */
    BladeNavItem.prototype.onNavItemClick = 
    // #endregion
    // #region Methods
    /**
     * @return {?}
     */
    function () {
        if (this.callback != null) {
            this.callback();
        }
    };
    return BladeNavItem;
}());
export { BladeNavItem };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUtbmF2LWl0ZW0uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vYmxhZGUtbmF2LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBO0lBQ0ksc0JBQXNCO0lBRXRCLHNCQUFtQixLQUFrQixFQUFTLFFBQXFCLEVBQVMsU0FBc0IsRUFBUyxRQUFxQixFQUFTLEtBQWtCLEVBQVMsU0FBeUIsRUFBUyxRQUEwQixFQUFTLFFBQWdDO1FBQXRQLHNCQUFBLEVBQUEsVUFBa0I7UUFBUyx5QkFBQSxFQUFBLGFBQXFCO1FBQVMsMEJBQUEsRUFBQSxjQUFzQjtRQUFTLHlCQUFBLEVBQUEsYUFBcUI7UUFBUyxzQkFBQSxFQUFBLFVBQWtCO1FBQVMsMEJBQUEsRUFBQSxnQkFBeUI7UUFBUyx5QkFBQSxFQUFBLGVBQTBCO1FBQVMseUJBQUEsRUFBQSxlQUFnQztRQUF0UCxVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWdCO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUF3QjtJQUN6USxDQUFDO0lBRUQsYUFBYTtJQUViLGtCQUFrQjs7Ozs7O0lBRWxCLHFDQUFjOzs7Ozs7SUFBZDtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztJQUdMLG1CQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQzs7OztJQWRlLDZCQUF5Qjs7SUFBRSxnQ0FBNEI7O0lBQUUsaUNBQTZCOztJQUFFLGdDQUE0Qjs7SUFBRSw2QkFBeUI7O0lBQUUsaUNBQWdDOztJQUFFLGdDQUFpQzs7SUFBRSxnQ0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbGFkZU5hdiB9IGZyb20gJy4vYmxhZGUtbmF2JztcblxuZXhwb3J0IGNsYXNzIEJsYWRlTmF2SXRlbSB7XG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvclxuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRpdGxlOiBzdHJpbmcgPSAnJywgcHVibGljIGNzc0NsYXNzOiBzdHJpbmcgPSAnJywgcHVibGljIGJsYWRlUGF0aDogc3RyaW5nID0gJycsIHB1YmxpYyBocmVmUGF0aDogc3RyaW5nID0gJycsIHB1YmxpYyByb2xlczogc3RyaW5nID0gJycsIHB1YmxpYyBpc1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlLCBwdWJsaWMgY2FsbGJhY2s6ICgpID0+IGFueSA9IG51bGwsIHB1YmxpYyBibGFkZU5hdjogQmxhZGVOYXYgfCBudWxsID0gbnVsbCkge1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gTWV0aG9kc1xuXG4gICAgb25OYXZJdGVtQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cbn1cbiJdfQ==