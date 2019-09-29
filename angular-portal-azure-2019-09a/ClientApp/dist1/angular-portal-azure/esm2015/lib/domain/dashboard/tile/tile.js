/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//import { MainService } from '../../../service/main/main.service';
import { TileSizes } from './tile-sizes';
export class Tile {
    /**
     * @return {?}
     */
    get bladePath() {
        return this._bladePath;
    }
    // For the moment we do not distinguish between lower and upper case path name
    /**
     * @param {?} newBladePath
     * @return {?}
     */
    set bladePath(newBladePath) {
        this._bladePath = newBladePath.toLowerCase();
    }
    // #endregion
    // #region Constructors
    // mainService: MainService, 
    /**
     * @param {?} title
     * @param {?} bladePath
     */
    constructor(title, bladePath) {
        //this.mainService = mainService;
        this.title = title;
        this.bladePath = bladePath;
        this.tileSize = TileSizes.normal;
    }
    // #endregion
    // #region Public Methods
    /**
     * @return {?}
     */
    clicked() {
        //this.mainService.areaBlades.setFirstBlade(this.bladePath);
    }
}
if (false) {
    /** @type {?} */
    Tile.prototype.title;
    /** @type {?} */
    Tile.prototype.subTitle;
    /** @type {?} */
    Tile.prototype.tileSize;
    /** @type {?} */
    Tile.prototype.size;
    /** @type {?} */
    Tile.prototype.left;
    /** @type {?} */
    Tile.prototype.top;
    /**
     * @type {?}
     * @private
     */
    Tile.prototype._bladePath;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2RvbWFpbi9kYXNoYm9hcmQvdGlsZS90aWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QyxNQUFNLE9BQU8sSUFBSTs7OztJQWViLElBQUksU0FBUztRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFHRCxJQUFJLFNBQVMsQ0FBQyxZQUFvQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7OztJQU9ELFlBQVksS0FBYSxFQUFFLFNBQWlCO1FBQ3hDLGlDQUFpQztRQUVqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQzs7Ozs7O0lBTUQsT0FBTztRQUNILDREQUE0RDtJQUNoRSxDQUFDO0NBT0o7OztJQTdDRyxxQkFBYzs7SUFDZCx3QkFBaUI7O0lBRWpCLHdCQUFvQjs7SUFDcEIsb0JBQWE7O0lBRWIsb0JBQWE7O0lBQ2IsbUJBQVk7Ozs7O0lBRVosMEJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBNYWluU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2UvbWFpbi9tYWluLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaWxlU2l6ZXMgfSBmcm9tICcuL3RpbGUtc2l6ZXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGUge1xyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgLy9tYWluU2VydmljZTogTWFpblNlcnZpY2U7XHJcblxyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHN1YlRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgdGlsZVNpemU6IFRpbGVTaXplcztcclxuICAgIHNpemU6IHN0cmluZzsgLy8gQ1NTIHN0eWxlIGNsYXNzIG5hbWUgLSByZWZhY3RvcmluZzogcmVuYW1lIHRvIGNzc0NsYXNzXHJcblxyXG4gICAgbGVmdDogc3RyaW5nOyAvLyBsZWZ0IHBvc2l0aW9uIChDU1MpXHJcbiAgICB0b3A6IHN0cmluZzsgLy8gdG9wIHBvc2l0aW9uIChDU1MpXHJcblxyXG4gICAgcHJpdmF0ZSBfYmxhZGVQYXRoOiBzdHJpbmc7XHJcbiAgICBnZXQgYmxhZGVQYXRoKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JsYWRlUGF0aDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBGb3IgdGhlIG1vbWVudCB3ZSBkbyBub3QgZGlzdGluZ3Vpc2ggYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgY2FzZSBwYXRoIG5hbWVcclxuICAgIHNldCBibGFkZVBhdGgobmV3QmxhZGVQYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9ibGFkZVBhdGggPSBuZXdCbGFkZVBhdGgudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvcnNcclxuXHJcbiAgICAvLyBtYWluU2VydmljZTogTWFpblNlcnZpY2UsIFxyXG4gICAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgYmxhZGVQYXRoOiBzdHJpbmcpIHtcclxuICAgICAgICAvL3RoaXMubWFpblNlcnZpY2UgPSBtYWluU2VydmljZTtcclxuXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuYmxhZGVQYXRoID0gYmxhZGVQYXRoO1xyXG4gICAgICAgIHRoaXMudGlsZVNpemUgPSBUaWxlU2l6ZXMubm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFB1YmxpYyBNZXRob2RzXHJcblxyXG4gICAgY2xpY2tlZCgpIHtcclxuICAgICAgICAvL3RoaXMubWFpblNlcnZpY2UuYXJlYUJsYWRlcy5zZXRGaXJzdEJsYWRlKHRoaXMuYmxhZGVQYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQcml2YXRlIE1ldGhvZHNcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19