/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { MainService } from '../../../service/main/main.service';
import { TileSizes } from './tile-sizes';
var Tile = /** @class */ (function () {
    // #endregion
    // #region Constructors
    // mainService: MainService, 
    function Tile(title, bladePath) {
        //this.mainService = mainService;
        this.title = title;
        this.bladePath = bladePath;
        this.tileSize = TileSizes.normal;
    }
    Object.defineProperty(Tile.prototype, "bladePath", {
        get: /**
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
    // #region Public Methods
    // #endregion
    // #region Public Methods
    /**
     * @return {?}
     */
    Tile.prototype.clicked = 
    // #endregion
    // #region Public Methods
    /**
     * @return {?}
     */
    function () {
        //this.mainService.areaBlades.setFirstBlade(this.bladePath);
    };
    return Tile;
}());
export { Tile };
if (false) {
    /** @type {?} */
    Tile.prototype.title;
    /** @type {?} */
    Tile.prototype.subTitle;
    /** @type {?} */
    Tile.prototype.tileSize;
    /** @type {?} */
    Tile.prototype.size;
    /** @type {?} */
    Tile.prototype.left;
    /** @type {?} */
    Tile.prototype.top;
    /**
     * @type {?}
     * @private
     */
    Tile.prototype._bladePath;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2RvbWFpbi9kYXNoYm9hcmQvdGlsZS90aWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QztJQXdCSSxhQUFhO0lBRWIsdUJBQXVCO0lBRXZCLDZCQUE2QjtJQUM3QixjQUFZLEtBQWEsRUFBRSxTQUFpQjtRQUN4QyxpQ0FBaUM7UUFFakMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7SUFwQkQsc0JBQUksMkJBQVM7Ozs7UUFBYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO1FBRUQsOEVBQThFOzs7Ozs7O1FBQzlFLFVBQWMsWUFBb0I7WUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakQsQ0FBQzs7O09BTEE7SUFvQkQsYUFBYTtJQUViLHlCQUF5Qjs7Ozs7O0lBRXpCLHNCQUFPOzs7Ozs7SUFBUDtRQUNJLDREQUE0RDtJQUNoRSxDQUFDO0lBT0wsV0FBQztBQUFELENBQUMsQUFsREQsSUFrREM7Ozs7SUE3Q0cscUJBQWM7O0lBQ2Qsd0JBQWlCOztJQUVqQix3QkFBb0I7O0lBQ3BCLG9CQUFhOztJQUViLG9CQUFhOztJQUNiLG1CQUFZOzs7OztJQUVaLDBCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgTWFpblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlL21haW4vbWFpbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGlsZVNpemVzIH0gZnJvbSAnLi90aWxlLXNpemVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlIHtcclxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xyXG5cclxuICAgIC8vbWFpblNlcnZpY2U6IE1haW5TZXJ2aWNlO1xyXG5cclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBzdWJUaXRsZTogc3RyaW5nO1xyXG5cclxuICAgIHRpbGVTaXplOiBUaWxlU2l6ZXM7XHJcbiAgICBzaXplOiBzdHJpbmc7IC8vIENTUyBzdHlsZSBjbGFzcyBuYW1lIC0gcmVmYWN0b3Jpbmc6IHJlbmFtZSB0byBjc3NDbGFzc1xyXG5cclxuICAgIGxlZnQ6IHN0cmluZzsgLy8gbGVmdCBwb3NpdGlvbiAoQ1NTKVxyXG4gICAgdG9wOiBzdHJpbmc7IC8vIHRvcCBwb3NpdGlvbiAoQ1NTKVxyXG5cclxuICAgIHByaXZhdGUgX2JsYWRlUGF0aDogc3RyaW5nO1xyXG4gICAgZ2V0IGJsYWRlUGF0aCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ibGFkZVBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIHRoZSBtb21lbnQgd2UgZG8gbm90IGRpc3Rpbmd1aXNoIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGNhc2UgcGF0aCBuYW1lXHJcbiAgICBzZXQgYmxhZGVQYXRoKG5ld0JsYWRlUGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fYmxhZGVQYXRoID0gbmV3QmxhZGVQYXRoLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JzXHJcblxyXG4gICAgLy8gbWFpblNlcnZpY2U6IE1haW5TZXJ2aWNlLCBcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcsIGJsYWRlUGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy90aGlzLm1haW5TZXJ2aWNlID0gbWFpblNlcnZpY2U7XHJcblxyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmJsYWRlUGF0aCA9IGJsYWRlUGF0aDtcclxuICAgICAgICB0aGlzLnRpbGVTaXplID0gVGlsZVNpemVzLm5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQdWJsaWMgTWV0aG9kc1xyXG5cclxuICAgIGNsaWNrZWQoKSB7XHJcbiAgICAgICAgLy90aGlzLm1haW5TZXJ2aWNlLmFyZWFCbGFkZXMuc2V0Rmlyc3RCbGFkZSh0aGlzLmJsYWRlUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHJpdmF0ZSBNZXRob2RzXHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==