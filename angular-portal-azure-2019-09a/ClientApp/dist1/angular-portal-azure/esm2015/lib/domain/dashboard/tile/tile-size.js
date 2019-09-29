/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TileSizes } from './tile-sizes';
export class TileSize {
    // #region Properties
    // #endregion
    // #region Constructors
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
    // #region Static Methods
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS1zaXplLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvZG9tYWluL2Rhc2hib2FyZC90aWxlL3RpbGUtc2l6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QyxNQUFNLE9BQU8sUUFBUTs7Ozs7Ozs7O0lBT2pCLFlBQW1CLFNBQW9CLEVBQVMsS0FBYSxFQUFTLE1BQWM7UUFBakUsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3BGLENBQUM7Ozs7OztJQU1ELE1BQU0sQ0FBQyxZQUFZOztZQUNYLFNBQVMsR0FBRyxLQUFLLEVBQVk7UUFFakMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RCxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekQsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTNELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7Q0FNSjs7O0lBdEJlLDZCQUEyQjs7SUFBRSx5QkFBb0I7O0lBQUUsMEJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlsZVNpemVzIH0gZnJvbSAnLi90aWxlLXNpemVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlU2l6ZSB7XHJcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvcnNcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGlsZVNpemVzOiBUaWxlU2l6ZXMsIHB1YmxpYyB3aWR0aDogbnVtYmVyLCBwdWJsaWMgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBTdGF0aWMgTWV0aG9kc1xyXG5cclxuICAgIHN0YXRpYyBnZXRUaWxlU2l6ZXMoKTogQXJyYXk8VGlsZVNpemU+IHtcclxuICAgICAgICBsZXQgdGlsZVNpemVzID0gQXJyYXk8VGlsZVNpemU+KCk7XHJcblxyXG4gICAgICAgIHRpbGVTaXplcy5wdXNoKG5ldyBUaWxlU2l6ZShUaWxlU2l6ZXMuc21hbGwsIDkwLCA5MCkpO1xyXG4gICAgICAgIHRpbGVTaXplcy5wdXNoKG5ldyBUaWxlU2l6ZShUaWxlU2l6ZXMubWluaSwgMTgwLCA5MCkpO1xyXG4gICAgICAgIHRpbGVTaXplcy5wdXNoKG5ldyBUaWxlU2l6ZShUaWxlU2l6ZXMubm9ybWFsLCAxODAsIDE4MCkpO1xyXG4gICAgICAgIHRpbGVTaXplcy5wdXNoKG5ldyBUaWxlU2l6ZShUaWxlU2l6ZXMuaGVyb3dpZGUsIDU0MCwgMzYwKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aWxlU2l6ZXM7XHJcbiAgICB9XHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQcml2YXRlIE1ldGhvZHNcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19