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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Tiles } from '../tile/tiles';
import { TileSize } from '../tile/tile-size';
var Appboard = /** @class */ (function (_super) {
    __extends(Appboard, _super);
    // #endregion
    // #region Constructors
    function Appboard() {
        var appboardEntries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            appboardEntries[_i] = arguments[_i];
        }
        var _this = _super.apply(this, __spread(appboardEntries)) || this;
        // #region Properties
        _this.isVisible = true;
        _this.tileSizes = TileSize.getTileSizes();
        _this.nextLeft = 0;
        _this.nextTop = 0;
        _this.columnHeightMax = 0;
        return _this;
    }
    /**
     * @template Appboard
     * @return {?}
     */
    Appboard.create = /**
     * @template Appboard
     * @return {?}
     */
    function () {
        /** @type {?} */
        var object = Object.create(Appboard.prototype);
        object.tileSizes = TileSize.getTileSizes();
        object.nextLeft = 0;
        object.nextTop = 0;
        object.columnHeightMax = 0;
        return object;
    };
    // #endregion
    // #region Public Methods
    // #endregion
    // #region Public Methods
    /**
     * @param {...?} appboardEntries
     * @return {?}
     */
    Appboard.prototype.push = 
    // #endregion
    // #region Public Methods
    /**
     * @param {...?} appboardEntries
     * @return {?}
     */
    function () {
        var appboardEntries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            appboardEntries[_i] = arguments[_i];
        }
        return _super.prototype.push.apply(this, __spread(appboardEntries));
    };
    return Appboard;
}(Tiles));
export { Appboard };
if (false) {
    /** @type {?} */
    Appboard.prototype.isVisible;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwYm9hcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vZGFzaGJvYXJkL2FwcGJvYXJkL2FwcGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUc3QztJQUE4Qiw0QkFBb0I7SUFLOUMsYUFBYTtJQUViLHVCQUF1QjtJQUV2QjtRQUFZLHlCQUF3QzthQUF4QyxVQUF3QyxFQUF4QyxxQkFBd0MsRUFBeEMsSUFBd0M7WUFBeEMsb0NBQXdDOztRQUFwRCx3Q0FDYSxlQUFlLFdBSzNCOztRQVpELGVBQVMsR0FBWSxJQUFJLENBQUM7UUFRdEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekMsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsS0FBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7O0lBQzdCLENBQUM7Ozs7O0lBRU0sZUFBTTs7OztJQUFiOztZQUNRLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDOUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDcEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDM0IsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELGFBQWE7SUFFYix5QkFBeUI7Ozs7Ozs7SUFFekIsdUJBQUk7Ozs7Ozs7SUFBSjtRQUFLLHlCQUF3QzthQUF4QyxVQUF3QyxFQUF4QyxxQkFBd0MsRUFBeEMsSUFBd0M7WUFBeEMsb0NBQXdDOztRQUN6QyxPQUFPLGlCQUFNLElBQUksc0JBQUksZUFBZSxHQUFFO0lBQzFDLENBQUM7SUFHTCxlQUFDO0FBQUQsQ0FBQyxBQW5DRCxDQUE4QixLQUFLLEdBbUNsQzs7OztJQWhDRyw2QkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaWxlcyB9IGZyb20gJy4uL3RpbGUvdGlsZXMnO1xyXG5pbXBvcnQgeyBUaWxlU2l6ZSB9IGZyb20gJy4uL3RpbGUvdGlsZS1zaXplJztcclxuaW1wb3J0IHsgQXBwYm9hcmRFbnRyeSB9IGZyb20gJy4vYXBwYm9hcmQtZW50cnknO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcGJvYXJkIGV4dGVuZHMgVGlsZXM8QXBwYm9hcmRFbnRyeT4ge1xyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgaXNWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvcnNcclxuXHJcbiAgICBjb25zdHJ1Y3RvciguLi5hcHBib2FyZEVudHJpZXM6IEFycmF5PEFwcGJvYXJkRW50cnk+KSB7XHJcbiAgICAgICAgc3VwZXIoLi4uYXBwYm9hcmRFbnRyaWVzKTtcclxuICAgICAgICB0aGlzLnRpbGVTaXplcyA9IFRpbGVTaXplLmdldFRpbGVTaXplcygpO1xyXG4gICAgICAgIHRoaXMubmV4dExlZnQgPSAwO1xyXG4gICAgICAgIHRoaXMubmV4dFRvcCA9IDA7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5IZWlnaHRNYXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGU8QXBwYm9hcmQ+KCk6IEFwcGJvYXJkIHtcclxuICAgICAgICBsZXQgb2JqZWN0ID0gT2JqZWN0LmNyZWF0ZShBcHBib2FyZC5wcm90b3R5cGUpO1xyXG4gICAgICAgIG9iamVjdC50aWxlU2l6ZXMgPSBUaWxlU2l6ZS5nZXRUaWxlU2l6ZXMoKTtcclxuICAgICAgICBvYmplY3QubmV4dExlZnQgPSAwO1xyXG4gICAgICAgIG9iamVjdC5uZXh0VG9wID0gMDtcclxuICAgICAgICBvYmplY3QuY29sdW1uSGVpZ2h0TWF4ID0gMDtcclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFB1YmxpYyBNZXRob2RzXHJcblxyXG4gICAgcHVzaCguLi5hcHBib2FyZEVudHJpZXM6IEFycmF5PEFwcGJvYXJkRW50cnk+KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gc3VwZXIucHVzaCguLi5hcHBib2FyZEVudHJpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=