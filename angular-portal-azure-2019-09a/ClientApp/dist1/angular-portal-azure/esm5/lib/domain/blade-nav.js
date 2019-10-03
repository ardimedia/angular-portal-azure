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
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BladeData } from './blade-data';
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
    // #endregion
    // #region Properties
    //items: Array<BladeNavItem> = new Array<BladeNavItem>();
    // #endregion
    // #region Methods
    /**
     * @param {?} path
     * @return {?}
     */
    BladeNav.prototype.onNavigateTo = 
    // #endregion
    // #region Properties
    //items: Array<BladeNavItem> = new Array<BladeNavItem>();
    // #endregion
    // #region Methods
    /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        if (path === '') {
            return;
        }
        this.portalService.areaBlades.raiseAddBladeEvent({ path: path, pathSender: this.path });
    };
    return BladeNav;
}(BladeData));
export { BladeNav };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUtbmF2LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvZG9tYWluL2JsYWRlLW5hdi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFJekM7SUFBOEIsNEJBQXVCO0lBQ2pELHNCQUFzQjtJQUV0QiwrQ0FBK0M7SUFDL0Msa0JBQVksYUFBNEIsRUFBRSxJQUFZLEVBQUUsS0FBa0IsRUFBRSxRQUFxQixFQUFFLEtBQW1CO1FBQTlELHNCQUFBLEVBQUEsVUFBa0I7UUFBRSx5QkFBQSxFQUFBLGFBQXFCO1FBQUUsc0JBQUEsRUFBQSxXQUFtQjtRQUF0SCxZQUNJLGtCQUFNLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FHckQ7UUFGRyxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs7SUFDdEIsQ0FBQztJQUVELGFBQWE7SUFFYixxQkFBcUI7SUFFckIseURBQXlEO0lBRXpELGFBQWE7SUFFYixrQkFBa0I7Ozs7Ozs7Ozs7SUFFbEIsK0JBQVk7Ozs7Ozs7Ozs7SUFBWixVQUFhLElBQVk7UUFDckIsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUdMLGVBQUM7QUFBRCxDQUFDLEFBMUJELENBQThCLFNBQVMsR0EwQnRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxhZGVEYXRhIH0gZnJvbSAnLi9ibGFkZS1kYXRhJztcbmltcG9ydCB7IEJsYWRlTmF2SXRlbSB9IGZyb20gJy4vYmxhZGUtbmF2LWl0ZW0nO1xuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4vcG9ydGFsLXNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgQmxhZGVOYXYgZXh0ZW5kcyBCbGFkZURhdGE8QmxhZGVOYXZJdGVtPiB7XG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvclxuXG4gICAgLy9zdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJywgJ3BvcnRhbFNlcnZpY2UnXTtcbiAgICBjb25zdHJ1Y3Rvcihwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlLCBwYXRoOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcgPSAnJywgc3VidGl0bGU6IHN0cmluZyA9ICcnLCB3aWR0aDogbnVtYmVyID0gMzE1KSB7Ly8kc2NvcGU6IGFueSxcbiAgICAgICAgc3VwZXIocG9ydGFsU2VydmljZSwgcGF0aCwgdGl0bGUsIHN1YnRpdGxlLCB3aWR0aCk7Ly8kc2NvcGUsXG4gICAgICAgIHRoaXMuaXNJbm5lckh0bWwgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc05hdiA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXG5cbiAgICAvL2l0ZW1zOiBBcnJheTxCbGFkZU5hdkl0ZW0+ID0gbmV3IEFycmF5PEJsYWRlTmF2SXRlbT4oKTtcblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gTWV0aG9kc1xuXG4gICAgb25OYXZpZ2F0ZVRvKHBhdGg6IHN0cmluZykge1xuICAgICAgICBpZiAocGF0aCA9PT0gJycpIHsgcmV0dXJuOyB9XG4gICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hcmVhQmxhZGVzLnJhaXNlQWRkQmxhZGVFdmVudCh7IHBhdGg6IHBhdGgsIHBhdGhTZW5kZXI6IHRoaXMucGF0aCB9KTtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=