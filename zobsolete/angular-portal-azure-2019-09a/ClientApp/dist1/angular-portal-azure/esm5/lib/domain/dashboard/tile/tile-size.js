/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TileSizes } from './tile-sizes';
var TileSize = /** @class */ (function () {
    // #region Properties
    // #endregion
    // #region Constructors
    function TileSize(tileSizes, width, height) {
        this.tileSizes = tileSizes;
        this.width = width;
        this.height = height;
    }
    // #endregion
    // #region Static Methods
    // #endregion
    // #region Static Methods
    /**
     * @return {?}
     */
    TileSize.getTileSizes = 
    // #endregion
    // #region Static Methods
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tileSizes = Array();
        tileSizes.push(new TileSize(TileSizes.small, 90, 90));
        tileSizes.push(new TileSize(TileSizes.mini, 180, 90));
        tileSizes.push(new TileSize(TileSizes.normal, 180, 180));
        tileSizes.push(new TileSize(TileSizes.herowide, 540, 360));
        return tileSizes;
    };
    return TileSize;
}());
export { TileSize };
if (false) {
    /** @type {?} */
    TileSize.prototype.tileSizes;
    /** @type {?} */
    TileSize.prototype.width;
    /** @type {?} */
    TileSize.prototype.height;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS1zaXplLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvZG9tYWluL2Rhc2hib2FyZC90aWxlL3RpbGUtc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QztJQUNJLHFCQUFxQjtJQUVyQixhQUFhO0lBRWIsdUJBQXVCO0lBRXZCLGtCQUFtQixTQUFvQixFQUFTLEtBQWEsRUFBUyxNQUFjO1FBQWpFLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNwRixDQUFDO0lBRUQsYUFBYTtJQUViLHlCQUF5Qjs7Ozs7O0lBRWxCLHFCQUFZOzs7Ozs7SUFBbkI7O1lBQ1EsU0FBUyxHQUFHLEtBQUssRUFBWTtRQUVqQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6RCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFM0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQU1MLGVBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDOzs7O0lBdEJlLDZCQUEyQjs7SUFBRSx5QkFBb0I7O0lBQUUsMEJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlsZVNpemVzIH0gZnJvbSAnLi90aWxlLXNpemVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlU2l6ZSB7XHJcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvcnNcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGlsZVNpemVzOiBUaWxlU2l6ZXMsIHB1YmxpYyB3aWR0aDogbnVtYmVyLCBwdWJsaWMgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBTdGF0aWMgTWV0aG9kc1xyXG5cclxuICAgIHN0YXRpYyBnZXRUaWxlU2l6ZXMoKTogQXJyYXk8VGlsZVNpemU+IHtcclxuICAgICAgICBsZXQgdGlsZVNpemVzID0gQXJyYXk8VGlsZVNpemU+KCk7XHJcblxyXG4gICAgICAgIHRpbGVTaXplcy5wdXNoKG5ldyBUaWxlU2l6ZShUaWxlU2l6ZXMuc21hbGwsIDkwLCA5MCkpO1xyXG4gICAgICAgIHRpbGVTaXplcy5wdXNoKG5ldyBUaWxlU2l6ZShUaWxlU2l6ZXMubWluaSwgMTgwLCA5MCkpO1xyXG4gICAgICAgIHRpbGVTaXplcy5wdXNoKG5ldyBUaWxlU2l6ZShUaWxlU2l6ZXMubm9ybWFsLCAxODAsIDE4MCkpO1xyXG4gICAgICAgIHRpbGVTaXplcy5wdXNoKG5ldyBUaWxlU2l6ZShUaWxlU2l6ZXMuaGVyb3dpZGUsIDU0MCwgMzYwKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aWxlU2l6ZXM7XHJcbiAgICB9XHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQcml2YXRlIE1ldGhvZHNcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19