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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TileSize } from './tile-size';
import { TileSizes } from './tile-sizes';
/**
 * @template T
 */
var /**
 * @template T
 */
Tiles = /** @class */ (function (_super) {
    __extends(Tiles, _super);
    // #endregion
    // #region Constructors
    function Tiles() {
        var tiles = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tiles[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spread(tiles)) || this;
        // #region Properties
        //tiles: Array<T> = new Array<T>();
        _this.isShowTiles = true;
        _this.isTilesLoaded = false;
        _this.hideTileIfOnlyOne = true; // not yet evaluated in HTML, but this is the standard behavior
        // not yet evaluated in HTML, but this is the standard behavior
        _this.tileSizes = TileSize.getTileSizes();
        _this.nextLeft = 0;
        _this.nextTop = 0;
        _this.columnHeightMax = 0;
        return _this;
        //this.tiles = tiles;
    }
    /**
     * @template Apps
     * @return {?}
     */
    Tiles.create = /**
     * @template Apps
     * @return {?}
     */
    function () {
        /** @type {?} */
        var object = Object.create(Tiles.prototype);
        return object;
    };
    // #endregion
    // #region Public Methods
    // #endregion
    // #region Public Methods
    /**
     * @param {...?} tiles
     * @return {?}
     */
    Tiles.prototype.push = 
    // #endregion
    // #region Public Methods
    /**
     * @param {...?} tiles
     * @return {?}
     */
    function () {
        var _this = this;
        var tiles = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tiles[_i] = arguments[_i];
        }
        tiles.forEach((/**
         * @param {?} tile
         * @return {?}
         */
        function (tile) {
            _this.processTile(tile);
        }));
        return _super.prototype.push.apply(this, __spread(tiles));
    };
    /**
     * @param {?} tile
     * @return {?}
     */
    Tiles.prototype.processTile = /**
     * @param {?} tile
     * @return {?}
     */
    function (tile) {
        return;
        //this.isTilesLoaded = true;
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
        //this.tiles.push(tile);
        return tile;
    };
    return Tiles;
}(Array));
/**
 * @template T
 */
export { Tiles };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vZGFzaGJvYXJkL3RpbGUvdGlsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUV6Qzs7OztJQUEyQyx5QkFBUTtJQWEvQyxhQUFhO0lBRWIsdUJBQXVCO0lBRXZCO1FBQVksZUFBa0I7YUFBbEIsVUFBa0IsRUFBbEIscUJBQWtCLEVBQWxCLElBQWtCO1lBQWxCLDBCQUFrQjs7UUFBOUIsd0NBQ2EsS0FBSyxXQUVqQjs7O1FBaEJELGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLHVCQUFpQixHQUFZLElBQUksQ0FBQyxDQUFFLCtEQUErRDs7UUFFbkcsZUFBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIscUJBQWUsR0FBVyxDQUFDLENBQUM7O1FBUXhCLHFCQUFxQjtJQUN6QixDQUFDOzs7OztJQUVNLFlBQU07Ozs7SUFBYjs7WUFDUSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQzNDLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxhQUFhO0lBRWIseUJBQXlCOzs7Ozs7O0lBRXpCLG9CQUFJOzs7Ozs7O0lBQUo7UUFBQSxpQkFNQztRQU5JLGVBQWtCO2FBQWxCLFVBQWtCLEVBQWxCLHFCQUFrQixFQUFsQixJQUFrQjtZQUFsQiwwQkFBa0I7O1FBQ25CLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxJQUFJO1lBQ2YsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQztRQUVILE9BQU8saUJBQU0sSUFBSSxzQkFBSSxLQUFLLEdBQUU7SUFDaEMsQ0FBQzs7Ozs7SUFFRCwyQkFBVzs7OztJQUFYLFVBQVksSUFBTztRQUNmLE9BQU87OztZQUVILFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUUsZUFBZTtRQUV0RCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDO1FBRWhDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUMxQztRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBRUQsd0JBQXdCO1FBRXhCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFPTCxZQUFDO0FBQUQsQ0FBQyxBQXRFRCxDQUEyQyxLQUFLLEdBc0UvQzs7Ozs7OztJQWxFRyw0QkFBNEI7O0lBQzVCLDhCQUErQjs7SUFDL0Isa0NBQWtDOztJQUVsQywwQkFBb0M7O0lBQ3BDLHlCQUFxQjs7SUFDckIsd0JBQW9COztJQUNwQixnQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi90aWxlJztcclxuaW1wb3J0IHsgVGlsZVNpemUgfSBmcm9tICcuL3RpbGUtc2l6ZSc7XHJcbmltcG9ydCB7IFRpbGVTaXplcyB9IGZyb20gJy4vdGlsZS1zaXplcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZXM8VCBleHRlbmRzIFRpbGU+IGV4dGVuZHMgQXJyYXk8VD4gIHtcclxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xyXG5cclxuICAgIC8vdGlsZXM6IEFycmF5PFQ+ID0gbmV3IEFycmF5PFQ+KCk7XHJcbiAgICBpc1Nob3dUaWxlczogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc1RpbGVzTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBoaWRlVGlsZUlmT25seU9uZTogYm9vbGVhbiA9IHRydWU7ICAvLyBub3QgeWV0IGV2YWx1YXRlZCBpbiBIVE1MLCBidXQgdGhpcyBpcyB0aGUgc3RhbmRhcmQgYmVoYXZpb3JcclxuXHJcbiAgICB0aWxlU2l6ZXMgPSBUaWxlU2l6ZS5nZXRUaWxlU2l6ZXMoKTtcclxuICAgIG5leHRMZWZ0OiBudW1iZXIgPSAwO1xyXG4gICAgbmV4dFRvcDogbnVtYmVyID0gMDtcclxuICAgIGNvbHVtbkhlaWdodE1heDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvcnNcclxuXHJcbiAgICBjb25zdHJ1Y3RvciguLi50aWxlczogQXJyYXk8VD4pIHtcclxuICAgICAgICBzdXBlciguLi50aWxlcyk7XHJcbiAgICAgICAgLy90aGlzLnRpbGVzID0gdGlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZTxBcHBzPigpOiBBcHBzIHtcclxuICAgICAgICBsZXQgb2JqZWN0ID0gT2JqZWN0LmNyZWF0ZShUaWxlcy5wcm90b3R5cGUpO1xyXG4gICAgICAgIHJldHVybiBvYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHVibGljIE1ldGhvZHNcclxuXHJcbiAgICBwdXNoKC4uLnRpbGVzOiBBcnJheTxUPik6IG51bWJlciB7XHJcbiAgICAgICAgdGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NUaWxlKHRpbGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3VwZXIucHVzaCguLi50aWxlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc1RpbGUodGlsZTogVCk6IFQge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICAvL3RoaXMuaXNUaWxlc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHRpbGVTaXplID0gdGhpcy50aWxlU2l6ZXNbdGlsZS50aWxlU2l6ZV07XHJcbiAgICAgICAgdGlsZS5zaXplID0gVGlsZVNpemVzW3RpbGUudGlsZVNpemVdOyAgLy8gR2V0IENTUyBOYW1lXHJcblxyXG4gICAgICAgIHRpbGUudG9wID0gdGhpcy5uZXh0VG9wICsgJ3B4JztcclxuICAgICAgICB0aWxlLmxlZnQgPSB0aGlzLm5leHRMZWZ0ICsgJ3B4JztcclxuXHJcbiAgICAgICAgdGhpcy5uZXh0TGVmdCArPSB0aWxlU2l6ZS53aWR0aDtcclxuXHJcbiAgICAgICAgaWYgKHRpbGVTaXplLmhlaWdodCA+IHRoaXMuY29sdW1uSGVpZ2h0TWF4KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1uSGVpZ2h0TWF4ID0gdGlsZVNpemUuaGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubmV4dExlZnQgPiA1NDApIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0TGVmdCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFRvcCArPSB0aGlzLmNvbHVtbkhlaWdodE1heDtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5IZWlnaHRNYXggPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90aGlzLnRpbGVzLnB1c2godGlsZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aWxlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFByaXZhdGUgTWV0aG9kc1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=