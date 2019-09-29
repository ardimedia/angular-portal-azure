/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TileSize } from './tile-size';
import { TileSizes } from './tile-sizes';
/**
 * @template T
 */
export class Tiles extends Array {
    // #endregion
    // #region Constructors
    /**
     * @param {...?} tiles
     */
    constructor(...tiles) {
        super(...tiles);
        // #region Properties
        //tiles: Array<T> = new Array<T>();
        this.isShowTiles = true;
        this.isTilesLoaded = false;
        this.hideTileIfOnlyOne = true; // not yet evaluated in HTML, but this is the standard behavior
        // not yet evaluated in HTML, but this is the standard behavior
        this.tileSizes = TileSize.getTileSizes();
        this.nextLeft = 0;
        this.nextTop = 0;
        this.columnHeightMax = 0;
        //this.tiles = tiles;
    }
    /**
     * @template Apps
     * @return {?}
     */
    static create() {
        /** @type {?} */
        let object = Object.create(Tiles.prototype);
        return object;
    }
    // #endregion
    // #region Public Methods
    /**
     * @param {...?} tiles
     * @return {?}
     */
    push(...tiles) {
        tiles.forEach((/**
         * @param {?} tile
         * @return {?}
         */
        (tile) => {
            this.processTile(tile);
        }));
        return super.push(...tiles);
    }
    /**
     * @param {?} tile
     * @return {?}
     */
    processTile(tile) {
        return;
        //this.isTilesLoaded = true;
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
        //this.tiles.push(tile);
        return tile;
    }
}
if (false) {
    /** @type {?} */
    Tiles.prototype.isShowTiles;
    /** @type {?} */
    Tiles.prototype.isTilesLoaded;
    /** @type {?} */
    Tiles.prototype.hideTileIfOnlyOne;
    /** @type {?} */
    Tiles.prototype.tileSizes;
    /** @type {?} */
    Tiles.prototype.nextLeft;
    /** @type {?} */
    Tiles.prototype.nextTop;
    /** @type {?} */
    Tiles.prototype.columnHeightMax;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vZGFzaGJvYXJkL3RpbGUvdGlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUV6QyxNQUFNLE9BQU8sS0FBc0IsU0FBUSxLQUFROzs7Ozs7SUFpQi9DLFlBQVksR0FBRyxLQUFlO1FBQzFCLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDOzs7UUFkcEIsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDNUIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0Isc0JBQWlCLEdBQVksSUFBSSxDQUFDLENBQUUsK0RBQStEOztRQUVuRyxjQUFTLEdBQUcsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNwQixvQkFBZSxHQUFXLENBQUMsQ0FBQztRQVF4QixxQkFBcUI7SUFDekIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBTTs7WUFDTCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQzNDLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Ozs7Ozs7SUFNRCxJQUFJLENBQUMsR0FBRyxLQUFlO1FBQ25CLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBTztRQUNmLE9BQU87OztZQUVILFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUUsZUFBZTtRQUV0RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDO1FBRWhDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUMxQztRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsd0JBQXdCO1FBRXhCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FPSjs7O0lBbEVHLDRCQUE0Qjs7SUFDNUIsOEJBQStCOztJQUMvQixrQ0FBa0M7O0lBRWxDLDBCQUFvQzs7SUFDcEMseUJBQXFCOztJQUNyQix3QkFBb0I7O0lBQ3BCLGdDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbGUgfSBmcm9tICcuL3RpbGUnO1xyXG5pbXBvcnQgeyBUaWxlU2l6ZSB9IGZyb20gJy4vdGlsZS1zaXplJztcclxuaW1wb3J0IHsgVGlsZVNpemVzIH0gZnJvbSAnLi90aWxlLXNpemVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlczxUIGV4dGVuZHMgVGlsZT4gZXh0ZW5kcyBBcnJheTxUPiAge1xyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgLy90aWxlczogQXJyYXk8VD4gPSBuZXcgQXJyYXk8VD4oKTtcclxuICAgIGlzU2hvd1RpbGVzOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlzVGlsZXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGhpZGVUaWxlSWZPbmx5T25lOiBib29sZWFuID0gdHJ1ZTsgIC8vIG5vdCB5ZXQgZXZhbHVhdGVkIGluIEhUTUwsIGJ1dCB0aGlzIGlzIHRoZSBzdGFuZGFyZCBiZWhhdmlvclxyXG5cclxuICAgIHRpbGVTaXplcyA9IFRpbGVTaXplLmdldFRpbGVTaXplcygpO1xyXG4gICAgbmV4dExlZnQ6IG51bWJlciA9IDA7XHJcbiAgICBuZXh0VG9wOiBudW1iZXIgPSAwO1xyXG4gICAgY29sdW1uSGVpZ2h0TWF4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yc1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKC4uLnRpbGVzOiBBcnJheTxUPikge1xyXG4gICAgICAgIHN1cGVyKC4uLnRpbGVzKTtcclxuICAgICAgICAvL3RoaXMudGlsZXMgPSB0aWxlcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlPEFwcHM+KCk6IEFwcHMge1xyXG4gICAgICAgIGxldCBvYmplY3QgPSBPYmplY3QuY3JlYXRlKFRpbGVzLnByb3RvdHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQdWJsaWMgTWV0aG9kc1xyXG5cclxuICAgIHB1c2goLi4udGlsZXM6IEFycmF5PFQ+KTogbnVtYmVyIHtcclxuICAgICAgICB0aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1RpbGUodGlsZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdXBlci5wdXNoKC4uLnRpbGVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzVGlsZSh0aWxlOiBUKTogVCB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIC8vdGhpcy5pc1RpbGVzTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICBsZXQgdGlsZVNpemUgPSB0aGlzLnRpbGVTaXplc1t0aWxlLnRpbGVTaXplXTtcclxuICAgICAgICB0aWxlLnNpemUgPSBUaWxlU2l6ZXNbdGlsZS50aWxlU2l6ZV07ICAvLyBHZXQgQ1NTIE5hbWVcclxuXHJcbiAgICAgICAgdGlsZS50b3AgPSB0aGlzLm5leHRUb3AgKyAncHgnO1xyXG4gICAgICAgIHRpbGUubGVmdCA9IHRoaXMubmV4dExlZnQgKyAncHgnO1xyXG5cclxuICAgICAgICB0aGlzLm5leHRMZWZ0ICs9IHRpbGVTaXplLndpZHRoO1xyXG5cclxuICAgICAgICBpZiAodGlsZVNpemUuaGVpZ2h0ID4gdGhpcy5jb2x1bW5IZWlnaHRNYXgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5IZWlnaHRNYXggPSB0aWxlU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5uZXh0TGVmdCA+IDU0MCkge1xyXG4gICAgICAgICAgICB0aGlzLm5leHRMZWZ0ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5uZXh0VG9wICs9IHRoaXMuY29sdW1uSGVpZ2h0TWF4O1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbkhlaWdodE1heCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3RoaXMudGlsZXMucHVzaCh0aWxlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHJpdmF0ZSBNZXRob2RzXHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==