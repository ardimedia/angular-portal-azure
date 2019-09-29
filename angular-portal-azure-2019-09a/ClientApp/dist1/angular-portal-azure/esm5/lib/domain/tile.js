/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TileSizes } from './tile-sizes';
var Tile = /** @class */ (function () {
    // #region Constructor
    function Tile(title, bladePath, portalService) {
        this.portalService = portalService;
        this.title = title;
        this.bladePath = bladePath;
        this.tileSize = TileSizes.normal;
    }
    Object.defineProperty(Tile.prototype, "bladePath", {
        // #region bladePath
        get: 
        // #region bladePath
        /**
         * @return {?}
         */
        function () {
            return this._bladePath;
        },
        // For the moment we do not distinguish between lower and upper case path name
        set: 
        // For the moment we do not distinguish between lower and upper case path name
        /**
         * @param {?} newBladePath
         * @return {?}
         */
        function (newBladePath) {
            this._bladePath = newBladePath.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    // #endregion
    // #region Methods
    // top position (CSS) - during refactoring, rename to top
    // #endregion
    // #region Methods
    /**
     * @return {?}
     */
    Tile.prototype.clicked = 
    // top position (CSS) - during refactoring, rename to top
    // #endregion
    // #region Methods
    /**
     * @return {?}
     */
    function () {
        this.portalService.areaBlades.setFirstBlade(this.bladePath);
        this.portalService.appService.bladeService.navigateTo(this.bladePath);
    };
    return Tile;
}());
export { Tile };
if (false) {
    /** @type {?} */
    Tile.prototype.portalService;
    /** @type {?} */
    Tile.prototype.title;
    /** @type {?} */
    Tile.prototype.subTitle;
    /**
     * @type {?}
     * @private
     */
    Tile.prototype._bladePath;
    /** @type {?} */
    Tile.prototype.tileSize;
    /** @type {?} */
    Tile.prototype.size;
    /** @type {?} */
    Tile.prototype.left;
    /** @type {?} */
    Tile.prototype.top;
    /** @type {?} */
    Tile.prototype.leftN;
    /** @type {?} */
    Tile.prototype.topN;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2RvbWFpbi90aWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3pDO0lBQ0ksc0JBQXNCO0lBRXRCLGNBQVksS0FBYSxFQUFFLFNBQWlCLEVBQUUsYUFBNEI7UUFDdEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFFbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7SUFhRCxzQkFBSSwyQkFBUztRQUZiLG9CQUFvQjs7Ozs7O1FBRXBCO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7UUFDRCw4RUFBOEU7Ozs7Ozs7UUFDOUUsVUFBYyxZQUFvQjtZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqRCxDQUFDOzs7T0FKQTtJQWlCRCxhQUFhO0lBRWIsa0JBQWtCOzs7Ozs7O0lBRWxCLHNCQUFPOzs7Ozs7O0lBQVA7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFHTCxXQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQzs7OztJQXBDRyw2QkFBNkI7O0lBRTdCLHFCQUFjOztJQUNkLHdCQUFpQjs7Ozs7SUFXakIsMEJBQTJCOztJQUkzQix3QkFBb0I7O0lBQ3BCLG9CQUFhOztJQUViLG9CQUFhOztJQUNiLG1CQUFZOztJQUNaLHFCQUFjOztJQUNkLG9CQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxhZGUgfSBmcm9tICcuL2JsYWRlJztcclxuaW1wb3J0IHsgVGlsZVNpemVzIH0gZnJvbSAnLi90aWxlLXNpemVzJztcclxuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4vcG9ydGFsLXNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGUge1xyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGJsYWRlUGF0aDogc3RyaW5nLCBwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlID0gcG9ydGFsU2VydmljZTtcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuYmxhZGVQYXRoID0gYmxhZGVQYXRoO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSBUaWxlU2l6ZXMubm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcclxuXHJcbiAgICBwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlO1xyXG5cclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBzdWJUaXRsZTogc3RyaW5nO1xyXG5cclxuICAgIC8vICNyZWdpb24gYmxhZGVQYXRoXHJcblxyXG4gICAgZ2V0IGJsYWRlUGF0aCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ibGFkZVBhdGg7XHJcbiAgICB9XHJcbiAgICAvLyBGb3IgdGhlIG1vbWVudCB3ZSBkbyBub3QgZGlzdGluZ3Vpc2ggYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgY2FzZSBwYXRoIG5hbWVcclxuICAgIHNldCBibGFkZVBhdGgobmV3QmxhZGVQYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9ibGFkZVBhdGggPSBuZXdCbGFkZVBhdGgudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2JsYWRlUGF0aDogc3RyaW5nO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICB0aWxlU2l6ZTogVGlsZVNpemVzO1xyXG4gICAgc2l6ZTogc3RyaW5nOyAvLyBDU1Mgc3R5bGUgY2xhc3MgbmFtZSAtIHJlZmFjdG9yaW5nOiByZW5hbWUgdG8gY3NzQ2xhc3NcclxuXHJcbiAgICBsZWZ0OiBzdHJpbmc7IC8vIE9ic29sZXRlLCB1c2UgbGVmdE5cclxuICAgIHRvcDogc3RyaW5nOyAvLyBPYnNvbGV0ZSwgdXNlIHRvcE5cclxuICAgIGxlZnROOiBzdHJpbmc7IC8vIGxlZnQgcG9zaXRpb24gKENTUykgLSBkdXJpbmcgcmVmYWN0b3JpbmcsIHJlbmFtZSB0byBsZWZ0XHJcbiAgICB0b3BOOiBzdHJpbmc7IC8vIHRvcCBwb3NpdGlvbiAoQ1NTKSAtIGR1cmluZyByZWZhY3RvcmluZywgcmVuYW1lIHRvIHRvcFxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIE1ldGhvZHNcclxuXHJcbiAgICBjbGlja2VkKCkge1xyXG4gICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hcmVhQmxhZGVzLnNldEZpcnN0QmxhZGUodGhpcy5ibGFkZVBhdGgpO1xyXG4gICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hcHBTZXJ2aWNlLmJsYWRlU2VydmljZS5uYXZpZ2F0ZVRvKHRoaXMuYmxhZGVQYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19