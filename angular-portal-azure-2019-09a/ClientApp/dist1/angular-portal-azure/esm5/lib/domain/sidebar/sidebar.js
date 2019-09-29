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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Sidebar = /** @class */ (function (_super) {
    __extends(Sidebar, _super);
    // #endregion
    // #region Constructors
    function Sidebar(sidebarEntries) {
        var _this = _super.apply(this, __spread(sidebarEntries)) || this;
        // #region Properties
        _this.isVisible = true;
        return _this;
    }
    /**
     * @template Sidebars
     * @return {?}
     */
    Sidebar.create = /**
     * @template Sidebars
     * @return {?}
     */
    function () {
        return Object.create(Sidebar.prototype);
    };
    // #endregion
    // #region Public Methods
    // #endregion
    // #region Public Methods
    /**
     * @param {...?} sidebarEntries
     * @return {?}
     */
    Sidebar.prototype.push = 
    // #endregion
    // #region Public Methods
    /**
     * @param {...?} sidebarEntries
     * @return {?}
     */
    function () {
        var sidebarEntries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            sidebarEntries[_i] = arguments[_i];
        }
        return _super.prototype.push.apply(this, __spread(sidebarEntries));
    };
    return Sidebar;
}(Array));
export { Sidebar };
if (false) {
    /** @type {?} */
    Sidebar.prototype.isVisible;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2RvbWFpbi9zaWRlYmFyL3NpZGViYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQTZCLDJCQUFtQjtJQUs1QyxhQUFhO0lBRWIsdUJBQXVCO0lBRXZCLGlCQUFvQixjQUFvQztRQUF4RCx3Q0FDYSxjQUFjLFdBQzFCOztRQVJELGVBQVMsR0FBWSxJQUFJLENBQUM7O0lBUTFCLENBQUM7Ozs7O0lBRU0sY0FBTTs7OztJQUFiO1FBQ0ksT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsYUFBYTtJQUViLHlCQUF5Qjs7Ozs7OztJQUV6QixzQkFBSTs7Ozs7OztJQUFKO1FBQUssd0JBQXNDO2FBQXRDLFVBQXNDLEVBQXRDLHFCQUFzQyxFQUF0QyxJQUFzQztZQUF0QyxtQ0FBc0M7O1FBQ3ZDLE9BQU8saUJBQU0sSUFBSSxzQkFBSSxjQUFjLEdBQUU7SUFDekMsQ0FBQztJQUdMLGNBQUM7QUFBRCxDQUFDLEFBMUJELENBQTZCLEtBQUssR0EwQmpDOzs7O0lBdkJHLDRCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpZGViYXJFbnRyeSB9IGZyb20gJy4vc2lkZWJhci1lbnRyeSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU2lkZWJhciBleHRlbmRzIEFycmF5PFNpZGViYXJFbnRyeT4ge1xyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgaXNWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvcnNcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHNpZGViYXJFbnRyaWVzPzogQXJyYXk8U2lkZWJhckVudHJ5Pikge1xyXG4gICAgICAgIHN1cGVyKC4uLnNpZGViYXJFbnRyaWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlPFNpZGViYXJzPigpOiBTaWRlYmFycyB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoU2lkZWJhci5wcm90b3R5cGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFB1YmxpYyBNZXRob2RzXHJcblxyXG4gICAgcHVzaCguLi5zaWRlYmFyRW50cmllczogQXJyYXk8U2lkZWJhckVudHJ5Pik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnB1c2goLi4uc2lkZWJhckVudHJpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=