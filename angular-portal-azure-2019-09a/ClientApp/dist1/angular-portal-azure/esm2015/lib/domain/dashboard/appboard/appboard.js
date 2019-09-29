/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Tiles } from '../tile/tiles';
import { TileSize } from '../tile/tile-size';
export class Appboard extends Tiles {
    // #endregion
    // #region Constructors
    /**
     * @param {...?} appboardEntries
     */
    constructor(...appboardEntries) {
        super(...appboardEntries);
        // #region Properties
        this.isVisible = true;
        this.tileSizes = TileSize.getTileSizes();
        this.nextLeft = 0;
        this.nextTop = 0;
        this.columnHeightMax = 0;
    }
    /**
     * @template Appboard
     * @return {?}
     */
    static create() {
        /** @type {?} */
        let object = Object.create(Appboard.prototype);
        object.tileSizes = TileSize.getTileSizes();
        object.nextLeft = 0;
        object.nextTop = 0;
        object.columnHeightMax = 0;
        return object;
    }
    // #endregion
    // #region Public Methods
    /**
     * @param {...?} appboardEntries
     * @return {?}
     */
    push(...appboardEntries) {
        return super.push(...appboardEntries);
    }
}
if (false) {
    /** @type {?} */
    Appboard.prototype.isVisible;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwYm9hcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vZGFzaGJvYXJkL2FwcGJvYXJkL2FwcGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUc3QyxNQUFNLE9BQU8sUUFBUyxTQUFRLEtBQW9COzs7Ozs7SUFTOUMsWUFBWSxHQUFHLGVBQXFDO1FBQ2hELEtBQUssQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDOztRQVA5QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBUXRCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQU07O1lBQ0wsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUM5QyxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNwQixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUMzQixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDOzs7Ozs7O0lBTUQsSUFBSSxDQUFDLEdBQUcsZUFBcUM7UUFDekMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUdKOzs7SUFoQ0csNkJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlsZXMgfSBmcm9tICcuLi90aWxlL3RpbGVzJztcclxuaW1wb3J0IHsgVGlsZVNpemUgfSBmcm9tICcuLi90aWxlL3RpbGUtc2l6ZSc7XHJcbmltcG9ydCB7IEFwcGJvYXJkRW50cnkgfSBmcm9tICcuL2FwcGJvYXJkLWVudHJ5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBib2FyZCBleHRlbmRzIFRpbGVzPEFwcGJvYXJkRW50cnk+IHtcclxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xyXG5cclxuICAgIGlzVmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JzXHJcblxyXG4gICAgY29uc3RydWN0b3IoLi4uYXBwYm9hcmRFbnRyaWVzOiBBcnJheTxBcHBib2FyZEVudHJ5Pikge1xyXG4gICAgICAgIHN1cGVyKC4uLmFwcGJvYXJkRW50cmllcyk7XHJcbiAgICAgICAgdGhpcy50aWxlU2l6ZXMgPSBUaWxlU2l6ZS5nZXRUaWxlU2l6ZXMoKTtcclxuICAgICAgICB0aGlzLm5leHRMZWZ0ID0gMDtcclxuICAgICAgICB0aGlzLm5leHRUb3AgPSAwO1xyXG4gICAgICAgIHRoaXMuY29sdW1uSGVpZ2h0TWF4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlPEFwcGJvYXJkPigpOiBBcHBib2FyZCB7XHJcbiAgICAgICAgbGV0IG9iamVjdCA9IE9iamVjdC5jcmVhdGUoQXBwYm9hcmQucHJvdG90eXBlKTtcclxuICAgICAgICBvYmplY3QudGlsZVNpemVzID0gVGlsZVNpemUuZ2V0VGlsZVNpemVzKCk7XHJcbiAgICAgICAgb2JqZWN0Lm5leHRMZWZ0ID0gMDtcclxuICAgICAgICBvYmplY3QubmV4dFRvcCA9IDA7XHJcbiAgICAgICAgb2JqZWN0LmNvbHVtbkhlaWdodE1heCA9IDA7XHJcbiAgICAgICAgcmV0dXJuIG9iamVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQdWJsaWMgTWV0aG9kc1xyXG5cclxuICAgIHB1c2goLi4uYXBwYm9hcmRFbnRyaWVzOiBBcnJheTxBcHBib2FyZEVudHJ5Pik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHN1cGVyLnB1c2goLi4uYXBwYm9hcmRFbnRyaWVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19