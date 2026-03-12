/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TileSize } from './tile-size';
import { TileSizes } from './tile-sizes';
export class Tiles {
    constructor() {
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
    /**
     * @param {?} tile
     * @return {?}
     */
    addTile(tile) {
        this.isTilesLoaded = true;
        /** @type {?} */
        let tileSize = this.tileSizes[tile.tileSize];
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vdGlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QyxNQUFNLE9BQU8sS0FBSztJQUFsQjtRQUNJLHFCQUFxQjs7UUFFckIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUMxQixVQUFLLEdBQWUsSUFBSSxLQUFLLEVBQU8sQ0FBQztRQUNyQyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixzQkFBaUIsR0FBWSxJQUFJLENBQUMsQ0FBRSwrREFBK0Q7O1FBRTNGLGNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBK0JwQyxhQUFhO0lBQ2pCLENBQUM7Ozs7Ozs7SUExQkcsT0FBTyxDQUFDLElBQVU7UUFDZCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQzs7WUFDdEIsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBRSxlQUFlO1FBRXRELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUVqQyxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFFaEMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQzFDO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0NBR0o7OztJQXhDRywwQkFBMEI7O0lBQzFCLHNCQUFxQzs7SUFDckMsOEJBQStCOztJQUMvQixrQ0FBa0M7Ozs7O0lBRWxDLDBCQUE0Qzs7Ozs7SUFDNUMseUJBQTZCOzs7OztJQUM3Qix3QkFBNEI7Ozs7O0lBQzVCLGdDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnO1xyXG5pbXBvcnQgeyBUaWxlU2l6ZSB9IGZyb20gJy4vdGlsZS1zaXplJztcclxuaW1wb3J0IHsgVGlsZVNpemVzIH0gZnJvbSAnLi90aWxlLXNpemVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlcyB7XHJcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcclxuXHJcbiAgICBzaG93VGlsZXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgdGlsZXM6IEFycmF5PGFueT4gPSBuZXcgQXJyYXk8YW55PigpO1xyXG4gICAgaXNUaWxlc0xvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaGlkZVRpbGVJZk9ubHlPbmU6IGJvb2xlYW4gPSB0cnVlOyAgLy8gbm90IHlldCBldmFsdWF0ZWQgaW4gSFRNTCwgYnV0IHRoaXMgaXMgdGhlIHN0YW5kYXJkIGJlaGF2aW9yXHJcblxyXG4gICAgcHJpdmF0ZSB0aWxlU2l6ZXMgPSBUaWxlU2l6ZS5nZXRUaWxlU2l6ZXMoKTtcclxuICAgIHByaXZhdGUgbmV4dExlZnQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG5leHRUb3A6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNvbHVtbkhlaWdodE1heDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBNZXRob2RzXHJcblxyXG4gICAgYWRkVGlsZSh0aWxlOiBUaWxlKTogVGlsZSB7XHJcbiAgICAgICAgdGhpcy5pc1RpbGVzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICBsZXQgdGlsZVNpemUgPSB0aGlzLnRpbGVTaXplc1t0aWxlLnRpbGVTaXplXTtcclxuICAgICAgICB0aWxlLnNpemUgPSBUaWxlU2l6ZXNbdGlsZS50aWxlU2l6ZV07ICAvLyBHZXQgQ1NTIE5hbWVcclxuXHJcbiAgICAgICAgdGlsZS50b3AgPSB0aGlzLm5leHRUb3AgKyAncHgnO1xyXG4gICAgICAgIHRpbGUubGVmdCA9IHRoaXMubmV4dExlZnQgKyAncHgnO1xyXG5cclxuICAgICAgICB0aGlzLm5leHRMZWZ0ICs9IHRpbGVTaXplLndpZHRoO1xyXG5cclxuICAgICAgICBpZiAodGlsZVNpemUuaGVpZ2h0ID4gdGhpcy5jb2x1bW5IZWlnaHRNYXgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5IZWlnaHRNYXggPSB0aWxlU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5uZXh0TGVmdCA+IDU0MCkge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRMZWZ0ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5uZXh0VG9wICs9IHRoaXMuY29sdW1uSGVpZ2h0TWF4O1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbkhlaWdodE1heCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRpbGVzLnB1c2godGlsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=