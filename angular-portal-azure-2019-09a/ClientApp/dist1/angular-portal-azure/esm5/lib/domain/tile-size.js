/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TileSizes } from './tile-sizes';
var TileSize = /** @class */ (function () {
    // #region Constructor
    function TileSize(tileSizes, width, height) {
        this.tileSizes = tileSizes;
        this.width = width;
        this.height = height;
    }
    // #endregion
    // #region Methods
    // #endregion
    // #region Methods
    /**
     * @return {?}
     */
    TileSize.getTileSizes = 
    // #endregion
    // #region Methods
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS1zaXplLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvZG9tYWluL3RpbGUtc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QztJQUNJLHNCQUFzQjtJQUV0QixrQkFBbUIsU0FBb0IsRUFBUyxLQUFhLEVBQVMsTUFBYztRQUFqRSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDcEYsQ0FBQztJQUVELGFBQWE7SUFFYixrQkFBa0I7Ozs7OztJQUVYLHFCQUFZOzs7Ozs7SUFBbkI7O1lBQ1EsU0FBUyxHQUFHLEtBQUssRUFBWTtRQUVqQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6RCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFM0QsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUdMLGVBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDOzs7O0lBbkJlLDZCQUEyQjs7SUFBRSx5QkFBb0I7O0lBQUUsMEJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlsZVNpemVzIH0gZnJvbSAnLi90aWxlLXNpemVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlU2l6ZSB7XHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yXHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRpbGVTaXplczogVGlsZVNpemVzLCBwdWJsaWMgd2lkdGg6IG51bWJlciwgcHVibGljIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gTWV0aG9kc1xyXG5cclxuICAgIHN0YXRpYyBnZXRUaWxlU2l6ZXMoKTogQXJyYXk8VGlsZVNpemU+IHtcclxuICAgICAgICBsZXQgdGlsZVNpemVzID0gQXJyYXk8VGlsZVNpemU+KCk7XHJcblxyXG4gICAgICAgIHRpbGVTaXplcy5wdXNoKG5ldyBUaWxlU2l6ZShUaWxlU2l6ZXMuc21hbGwsIDkwLCA5MCkpO1xyXG4gICAgICAgIHRpbGVTaXplcy5wdXNoKG5ldyBUaWxlU2l6ZShUaWxlU2l6ZXMubWluaSwgMTgwLCA5MCkpO1xyXG4gICAgICAgIHRpbGVTaXplcy5wdXNoKG5ldyBUaWxlU2l6ZShUaWxlU2l6ZXMubm9ybWFsLCAxODAsIDE4MCkpO1xyXG4gICAgICAgIHRpbGVTaXplcy5wdXNoKG5ldyBUaWxlU2l6ZShUaWxlU2l6ZXMuaGVyb3dpZGUsIDU0MCwgMzYwKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aWxlU2l6ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==