/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class Viewport {
    constructor() {
        // #region Properties
        // provided by the browser itself
        this.fixedHeight = 0; // contains the heights of all the fixed area in the browser | 20 is the scroller
        // contains the heights of all the fixed area in the browser | 20 is the scroller
        this.dynamicHeight = 0; // calculated Height (browserWindowInnerHeight - fixedHeight)
        // #endregion
    }
    // calculated Height (browserWindowInnerHeight - fixedHeight)
    // #endregion
    // #region Public Methods
    /**
     * @param {?} browserWindow
     * @return {?}
     */
    setBrowserWindow(browserWindow) {
        this.browserWindowInnerHeight = browserWindow.innerHeight;
        this.browserWindowInnerWidth = browserWindow.innerWidth;
        this.dynamicHeight = this.browserWindowInnerHeight - this.fixedHeight;
    }
    /**
     * @param {?} height
     * @return {?}
     */
    addFixedHeight(height) {
        this.fixedHeight = this.fixedHeight + height;
        this.dynamicHeight = this.browserWindowInnerHeight - this.fixedHeight;
    }
    /**
     * @return {?}
     */
    log() {
        console.group('Viewport');
        console.log(`browserWindowInnerHeight: ${this.browserWindowInnerHeight}`);
        console.log(`browserWindowInnerWidth: ${this.browserWindowInnerWidth}`);
        console.log(`dynamicHeight: ${this.dynamicHeight}`);
        console.log(`fixedHeight: ${this.fixedHeight}`);
        console.groupEnd();
    }
}
if (false) {
    /** @type {?} */
    Viewport.prototype.browserWindowInnerHeight;
    /** @type {?} */
    Viewport.prototype.browserWindowInnerWidth;
    /**
     * @type {?}
     * @private
     */
    Viewport.prototype.fixedHeight;
    /** @type {?} */
    Viewport.prototype.dynamicHeight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2Jyb3dzZXIvdmlld3BvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU0sT0FBTyxRQUFRO0lBQXJCO1FBQ0kscUJBQXFCOztRQUtiLGdCQUFXLEdBQVcsQ0FBQyxDQUFDLENBQU8saUZBQWlGOztRQUN4SCxrQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFjLDZEQUE2RDtRQTBCckcsYUFBYTtJQUNqQixDQUFDOzs7Ozs7OztJQXJCRyxnQkFBZ0IsQ0FBQyxhQUFxQjtRQUNsQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMxRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLE1BQWM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFFLENBQUM7Ozs7SUFFRCxHQUFHO1FBQ0MsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUM7UUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Q0FHSjs7O0lBL0JHLDRDQUFpQzs7SUFDakMsMkNBQWdDOzs7OztJQUVoQywrQkFBZ0M7O0lBQ2hDLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBWaWV3cG9ydCB7XHJcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcclxuXHJcbiAgICBicm93c2VyV2luZG93SW5uZXJIZWlnaHQ6IG51bWJlcjsgICAgICAgLy8gcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIgaXRzZWxmXHJcbiAgICBicm93c2VyV2luZG93SW5uZXJXaWR0aDogbnVtYmVyOyAgICAgICAgLy8gcHJvdmlkZWQgYnkgdGhlIGJyb3dzZXIgaXRzZWxmXHJcblxyXG4gICAgcHJpdmF0ZSBmaXhlZEhlaWdodDogbnVtYmVyID0gMDsgICAgICAgLy8gY29udGFpbnMgdGhlIGhlaWdodHMgb2YgYWxsIHRoZSBmaXhlZCBhcmVhIGluIHRoZSBicm93c2VyIHwgMjAgaXMgdGhlIHNjcm9sbGVyXHJcbiAgICBkeW5hbWljSGVpZ2h0OiBudW1iZXIgPSAwOyAgICAgICAgICAgICAgLy8gY2FsY3VsYXRlZCBIZWlnaHQgKGJyb3dzZXJXaW5kb3dJbm5lckhlaWdodCAtIGZpeGVkSGVpZ2h0KVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFB1YmxpYyBNZXRob2RzXHJcblxyXG4gICAgc2V0QnJvd3NlcldpbmRvdyhicm93c2VyV2luZG93OiBXaW5kb3cpIHtcclxuICAgICAgICB0aGlzLmJyb3dzZXJXaW5kb3dJbm5lckhlaWdodCA9IGJyb3dzZXJXaW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5icm93c2VyV2luZG93SW5uZXJXaWR0aCA9IGJyb3dzZXJXaW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICB0aGlzLmR5bmFtaWNIZWlnaHQgPSB0aGlzLmJyb3dzZXJXaW5kb3dJbm5lckhlaWdodCAtIHRoaXMuZml4ZWRIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRml4ZWRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmZpeGVkSGVpZ2h0ID0gdGhpcy5maXhlZEhlaWdodCArIGhlaWdodDtcclxuICAgICAgICB0aGlzLmR5bmFtaWNIZWlnaHQgPSB0aGlzLmJyb3dzZXJXaW5kb3dJbm5lckhlaWdodCAtIHRoaXMuZml4ZWRIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXAoJ1ZpZXdwb3J0Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGJyb3dzZXJXaW5kb3dJbm5lckhlaWdodDogJHt0aGlzLmJyb3dzZXJXaW5kb3dJbm5lckhlaWdodH1gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgYnJvd3NlcldpbmRvd0lubmVyV2lkdGg6ICR7dGhpcy5icm93c2VyV2luZG93SW5uZXJXaWR0aH1gKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgZHluYW1pY0hlaWdodDogJHt0aGlzLmR5bmFtaWNIZWlnaHR9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGZpeGVkSGVpZ2h0OiAke3RoaXMuZml4ZWRIZWlnaHR9YCk7XHJcbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=