/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TileSizes } from './tile-sizes';
export class TileSize {
    // #region Constructor
    /**
     * @param {?} tileSizes
     * @param {?} width
     * @param {?} height
     */
    constructor(tileSizes, width, height) {
        this.tileSizes = tileSizes;
        this.width = width;
        this.height = height;
    }
    // #endregion
    // #region Methods
    /**
     * @return {?}
     */
    static getTileSizes() {
        /** @type {?} */
        let tileSizes = Array();
        tileSizes.push(new TileSize(TileSizes.small, 90, 90));
        tileSizes.push(new TileSize(TileSizes.mini, 180, 90));
        tileSizes.push(new TileSize(TileSizes.normal, 180, 180));
        tileSizes.push(new TileSize(TileSizes.herowide, 540, 360));
        return tileSizes;
    }
}
if (false) {
    /** @type {?} */
    TileSize.prototype.tileSizes;
    /** @type {?} */
    TileSize.prototype.width;
    /** @type {?} */
    TileSize.prototype.height;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS1zaXplLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvZG9tYWluL3RpbGUtc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QyxNQUFNLE9BQU8sUUFBUTs7Ozs7OztJQUdqQixZQUFtQixTQUFvQixFQUFTLEtBQWEsRUFBUyxNQUFjO1FBQWpFLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNwRixDQUFDOzs7Ozs7SUFNRCxNQUFNLENBQUMsWUFBWTs7WUFDWCxTQUFTLEdBQUcsS0FBSyxFQUFZO1FBRWpDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUzRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0NBR0o7OztJQW5CZSw2QkFBMkI7O0lBQUUseUJBQW9COztJQUFFLDBCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbGVTaXplcyB9IGZyb20gJy4vdGlsZS1zaXplcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZVNpemUge1xyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0aWxlU2l6ZXM6IFRpbGVTaXplcywgcHVibGljIHdpZHRoOiBudW1iZXIsIHB1YmxpYyBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIE1ldGhvZHNcclxuXHJcbiAgICBzdGF0aWMgZ2V0VGlsZVNpemVzKCk6IEFycmF5PFRpbGVTaXplPiB7XHJcbiAgICAgICAgbGV0IHRpbGVTaXplcyA9IEFycmF5PFRpbGVTaXplPigpO1xyXG5cclxuICAgICAgICB0aWxlU2l6ZXMucHVzaChuZXcgVGlsZVNpemUoVGlsZVNpemVzLnNtYWxsLCA5MCwgOTApKTtcclxuICAgICAgICB0aWxlU2l6ZXMucHVzaChuZXcgVGlsZVNpemUoVGlsZVNpemVzLm1pbmksIDE4MCwgOTApKTtcclxuICAgICAgICB0aWxlU2l6ZXMucHVzaChuZXcgVGlsZVNpemUoVGlsZVNpemVzLm5vcm1hbCwgMTgwLCAxODApKTtcclxuICAgICAgICB0aWxlU2l6ZXMucHVzaChuZXcgVGlsZVNpemUoVGlsZVNpemVzLmhlcm93aWRlLCA1NDAsIDM2MCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGlsZVNpemVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=