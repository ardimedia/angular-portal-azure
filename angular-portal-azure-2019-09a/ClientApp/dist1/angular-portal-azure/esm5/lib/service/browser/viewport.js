/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Viewport = /** @class */ (function () {
    function Viewport() {
        // #region Properties
        // provided by the browser itself
        this.fixedHeight = 0; // contains the heights of all the fixed area in the browser | 20 is the scroller
        // contains the heights of all the fixed area in the browser | 20 is the scroller
        this.dynamicHeight = 0; // calculated Height (browserWindowInnerHeight - fixedHeight)
        // #endregion
    }
    // #endregion
    // #region Public Methods
    // calculated Height (browserWindowInnerHeight - fixedHeight)
    // #endregion
    // #region Public Methods
    /**
     * @param {?} browserWindow
     * @return {?}
     */
    Viewport.prototype.setBrowserWindow = 
    // calculated Height (browserWindowInnerHeight - fixedHeight)
    // #endregion
    // #region Public Methods
    /**
     * @param {?} browserWindow
     * @return {?}
     */
    function (browserWindow) {
        this.browserWindowInnerHeight = browserWindow.innerHeight;
        this.browserWindowInnerWidth = browserWindow.innerWidth;
        this.dynamicHeight = this.browserWindowInnerHeight - this.fixedHeight;
    };
    /**
     * @param {?} height
     * @return {?}
     */
    Viewport.prototype.addFixedHeight = /**
     * @param {?} height
     * @return {?}
     */
    function (height) {
        this.fixedHeight = this.fixedHeight + height;
        this.dynamicHeight = this.browserWindowInnerHeight - this.fixedHeight;
    };
    /**
     * @return {?}
     */
    Viewport.prototype.log = /**
     * @return {?}
     */
    function () {
        console.group('Viewport');
        console.log("browserWindowInnerHeight: " + this.browserWindowInnerHeight);
        console.log("browserWindowInnerWidth: " + this.browserWindowInnerWidth);
        console.log("dynamicHeight: " + this.dynamicHeight);
        console.log("fixedHeight: " + this.fixedHeight);
        console.groupEnd();
    };
    return Viewport;
}());
export { Viewport };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld3BvcnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2Jyb3dzZXIvdmlld3BvcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0lBQUE7UUFDSSxxQkFBcUI7O1FBS2IsZ0JBQVcsR0FBVyxDQUFDLENBQUMsQ0FBTyxpRkFBaUY7O1FBQ3hILGtCQUFhLEdBQVcsQ0FBQyxDQUFDLENBQWMsNkRBQTZEO1FBMEJyRyxhQUFhO0lBQ2pCLENBQUM7SUF6QkcsYUFBYTtJQUViLHlCQUF5Qjs7Ozs7Ozs7SUFFekIsbUNBQWdCOzs7Ozs7OztJQUFoQixVQUFpQixhQUFxQjtRQUNsQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMxRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBRUQsaUNBQWM7Ozs7SUFBZCxVQUFlLE1BQWM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFFLENBQUM7Ozs7SUFFRCxzQkFBRzs7O0lBQUg7UUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQTZCLElBQUksQ0FBQyx3QkFBMEIsQ0FBQyxDQUFDO1FBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQTRCLElBQUksQ0FBQyx1QkFBeUIsQ0FBQyxDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQWtCLElBQUksQ0FBQyxhQUFlLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFnQixJQUFJLENBQUMsV0FBYSxDQUFDLENBQUM7UUFDaEQsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFHTCxlQUFDO0FBQUQsQ0FBQyxBQWxDRCxJQWtDQzs7OztJQS9CRyw0Q0FBaUM7O0lBQ2pDLDJDQUFnQzs7Ozs7SUFFaEMsK0JBQWdDOztJQUNoQyxpQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVmlld3BvcnQge1xyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgYnJvd3NlcldpbmRvd0lubmVySGVpZ2h0OiBudW1iZXI7ICAgICAgIC8vIHByb3ZpZGVkIGJ5IHRoZSBicm93c2VyIGl0c2VsZlxyXG4gICAgYnJvd3NlcldpbmRvd0lubmVyV2lkdGg6IG51bWJlcjsgICAgICAgIC8vIHByb3ZpZGVkIGJ5IHRoZSBicm93c2VyIGl0c2VsZlxyXG5cclxuICAgIHByaXZhdGUgZml4ZWRIZWlnaHQ6IG51bWJlciA9IDA7ICAgICAgIC8vIGNvbnRhaW5zIHRoZSBoZWlnaHRzIG9mIGFsbCB0aGUgZml4ZWQgYXJlYSBpbiB0aGUgYnJvd3NlciB8IDIwIGlzIHRoZSBzY3JvbGxlclxyXG4gICAgZHluYW1pY0hlaWdodDogbnVtYmVyID0gMDsgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZWQgSGVpZ2h0IChicm93c2VyV2luZG93SW5uZXJIZWlnaHQgLSBmaXhlZEhlaWdodClcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQdWJsaWMgTWV0aG9kc1xyXG5cclxuICAgIHNldEJyb3dzZXJXaW5kb3coYnJvd3NlcldpbmRvdzogV2luZG93KSB7XHJcbiAgICAgICAgdGhpcy5icm93c2VyV2luZG93SW5uZXJIZWlnaHQgPSBicm93c2VyV2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYnJvd3NlcldpbmRvd0lubmVyV2lkdGggPSBicm93c2VyV2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgdGhpcy5keW5hbWljSGVpZ2h0ID0gdGhpcy5icm93c2VyV2luZG93SW5uZXJIZWlnaHQgLSB0aGlzLmZpeGVkSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZpeGVkSGVpZ2h0KGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5maXhlZEhlaWdodCA9IHRoaXMuZml4ZWRIZWlnaHQgKyBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5keW5hbWljSGVpZ2h0ID0gdGhpcy5icm93c2VyV2luZG93SW5uZXJIZWlnaHQgLSB0aGlzLmZpeGVkSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGxvZygpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmdyb3VwKCdWaWV3cG9ydCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBicm93c2VyV2luZG93SW5uZXJIZWlnaHQ6ICR7dGhpcy5icm93c2VyV2luZG93SW5uZXJIZWlnaHR9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGJyb3dzZXJXaW5kb3dJbm5lcldpZHRoOiAke3RoaXMuYnJvd3NlcldpbmRvd0lubmVyV2lkdGh9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYGR5bmFtaWNIZWlnaHQ6ICR7dGhpcy5keW5hbWljSGVpZ2h0fWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBmaXhlZEhlaWdodDogJHt0aGlzLmZpeGVkSGVpZ2h0fWApO1xyXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19