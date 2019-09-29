/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TileSize } from './tile-size';
import { TileSizes } from './tile-sizes';
var Tiles = /** @class */ (function () {
    function Tiles() {
        // #region Properties
        // #region Properties
        this.showTiles = true;
        this.tiles = new Array();
        this.isTilesLoaded = false;
        this.hideTileIfOnlyOne = true; // not yet evaluated in HTML, but this is the standard behavior
        // not yet evaluated in HTML, but this is the standard behavior
        this.tileSizes = TileSize.getTileSizes();
        this.nextLeft = 0;
        this.nextTop = 0;
        this.columnHeightMax = 0;
        // #endregion
    }
    // #endregion
    // #region Methods
    // #endregion
    // #region Methods
    /**
     * @param {?} tile
     * @return {?}
     */
    Tiles.prototype.addTile = 
    // #endregion
    // #region Methods
    /**
     * @param {?} tile
     * @return {?}
     */
    function (tile) {
        this.isTilesLoaded = true;
        /** @type {?} */
        var tileSize = this.tileSizes[tile.tileSize];
        tile.size = TileSizes[tile.tileSize]; // Get CSS Name
        tile.top = this.nextTop + 'px';
        tile.left = this.nextLeft + 'px';
        this.nextLeft += tileSize.width;
        if (tileSize.height > this.columnHeightMax) {
            this.columnHeightMax = tileSize.height;
        }
        if (this.nextLeft > 540) {
            this.nextLeft = 0;
            this.nextTop += this.columnHeightMax;
            this.columnHeightMax = 0;
        }
        this.tiles.push(tile);
        return tile;
    };
    return Tiles;
}());
export { Tiles };
if (false) {
    /** @type {?} */
    Tiles.prototype.showTiles;
    /** @type {?} */
    Tiles.prototype.tiles;
    /** @type {?} */
    Tiles.prototype.isTilesLoaded;
    /** @type {?} */
    Tiles.prototype.hideTileIfOnlyOne;
    /**
     * @type {?}
     * @private
     */
    Tiles.prototype.tileSizes;
    /**
     * @type {?}
     * @private
     */
    Tiles.prototype.nextLeft;
    /**
     * @type {?}
     * @private
     */
    Tiles.prototype.nextTop;
    /**
     * @type {?}
     * @private
     */
    Tiles.prototype.columnHeightMax;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vdGlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QztJQUFBO1FBQ0kscUJBQXFCOztRQUVyQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLFVBQUssR0FBZSxJQUFJLEtBQUssRUFBTyxDQUFDO1FBQ3JDLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLHNCQUFpQixHQUFZLElBQUksQ0FBQyxDQUFFLCtEQUErRDs7UUFFM0YsY0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsb0JBQWUsR0FBVyxDQUFDLENBQUM7UUErQnBDLGFBQWE7SUFDakIsQ0FBQztJQTlCRyxhQUFhO0lBRWIsa0JBQWtCOzs7Ozs7O0lBRWxCLHVCQUFPOzs7Ozs7O0lBQVAsVUFBUSxJQUFVO1FBQ2QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7O1lBQ3RCLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUUsZUFBZTtRQUV0RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDO1FBRWhDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUMxQztRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUdMLFlBQUM7QUFBRCxDQUFDLEFBM0NELElBMkNDOzs7O0lBeENHLDBCQUEwQjs7SUFDMUIsc0JBQXFDOztJQUNyQyw4QkFBK0I7O0lBQy9CLGtDQUFrQzs7Ozs7SUFFbEMsMEJBQTRDOzs7OztJQUM1Qyx5QkFBNkI7Ozs7O0lBQzdCLHdCQUE0Qjs7Ozs7SUFDNUIsZ0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4vdGlsZSc7XHJcbmltcG9ydCB7IFRpbGVTaXplIH0gZnJvbSAnLi90aWxlLXNpemUnO1xyXG5pbXBvcnQgeyBUaWxlU2l6ZXMgfSBmcm9tICcuL3RpbGUtc2l6ZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVzIHtcclxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xyXG5cclxuICAgIHNob3dUaWxlczogYm9vbGVhbiA9IHRydWU7XHJcbiAgICB0aWxlczogQXJyYXk8YW55PiA9IG5ldyBBcnJheTxhbnk+KCk7XHJcbiAgICBpc1RpbGVzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBoaWRlVGlsZUlmT25seU9uZTogYm9vbGVhbiA9IHRydWU7ICAvLyBub3QgeWV0IGV2YWx1YXRlZCBpbiBIVE1MLCBidXQgdGhpcyBpcyB0aGUgc3RhbmRhcmQgYmVoYXZpb3JcclxuXHJcbiAgICBwcml2YXRlIHRpbGVTaXplcyA9IFRpbGVTaXplLmdldFRpbGVTaXplcygpO1xyXG4gICAgcHJpdmF0ZSBuZXh0TGVmdDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgbmV4dFRvcDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgY29sdW1uSGVpZ2h0TWF4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIE1ldGhvZHNcclxuXHJcbiAgICBhZGRUaWxlKHRpbGU6IFRpbGUpOiBUaWxlIHtcclxuICAgICAgICB0aGlzLmlzVGlsZXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0aWxlU2l6ZSA9IHRoaXMudGlsZVNpemVzW3RpbGUudGlsZVNpemVdO1xyXG4gICAgICAgIHRpbGUuc2l6ZSA9IFRpbGVTaXplc1t0aWxlLnRpbGVTaXplXTsgIC8vIEdldCBDU1MgTmFtZVxyXG5cclxuICAgICAgICB0aWxlLnRvcCA9IHRoaXMubmV4dFRvcCArICdweCc7XHJcbiAgICAgICAgdGlsZS5sZWZ0ID0gdGhpcy5uZXh0TGVmdCArICdweCc7XHJcblxyXG4gICAgICAgIHRoaXMubmV4dExlZnQgKz0gdGlsZVNpemUud2lkdGg7XHJcblxyXG4gICAgICAgIGlmICh0aWxlU2l6ZS5oZWlnaHQgPiB0aGlzLmNvbHVtbkhlaWdodE1heCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbkhlaWdodE1heCA9IHRpbGVTaXplLmhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5leHRMZWZ0ID4gNTQwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dExlZnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRUb3AgKz0gdGhpcy5jb2x1bW5IZWlnaHRNYXg7XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1uSGVpZ2h0TWF4ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGlsZXMucHVzaCh0aWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==