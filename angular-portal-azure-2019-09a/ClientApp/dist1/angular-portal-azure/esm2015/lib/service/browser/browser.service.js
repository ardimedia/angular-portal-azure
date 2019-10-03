/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// More information: https://brianflove.com/2018/01/11/angular-window-provider/
import { Injectable } from '@angular/core';
import { Viewport } from './viewport';
import * as i0 from "@angular/core";
//import { pipe } from '@angular/core/src/render3';
// #region Global JavaScript Functions
/**
 * @return {?}
 */
function getWindow() {
    return window;
}
// #endregion
export class BrowserService {
    // #endregion
    // #region Constructors
    constructor() {
        this.viewport = new Viewport();
        this.viewport.addFixedHeight(40);
        this.viewport.setBrowserWindow(this.browserWindow); // Initialize values
        console.log('commented code at : BrowserService.constructor');
        //this.onResize = fromEvent(this.browserWindow, 'resize')
        //    .pipe(
        //        throttleTime(20),
        //        map((event) => {
        //            this.viewport.setBrowserWindow(<Window>event.currentTarget);
        //            return this.viewport;
        //        }),
        //        startWith(this.viewport),
        //        //tap(viewport => console.log(viewport))
        //    );
    }
    // #region Properties
    /**
     * @return {?}
     */
    get browserWindow() {
        return getWindow();
    }
}
BrowserService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root' // singleton: should be provided in the application root
            },] }
];
/** @nocollapse */
BrowserService.ctorParameters = () => [];
/** @nocollapse */ BrowserService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function BrowserService_Factory() { return new BrowserService(); }, token: BrowserService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    BrowserService.prototype.viewport;
    /** @type {?} */
    BrowserService.prototype.onResize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9icm93c2VyL2Jyb3dzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7OztBQUt0QyxTQUFTLFNBQVM7SUFDZCxPQUFPLE1BQU0sQ0FBQztBQUNsQixDQUFDOztBQU9ELE1BQU0sT0FBTyxjQUFjOzs7SUFldkI7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7UUFFeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1FBQzlELHlEQUF5RDtRQUN6RCxZQUFZO1FBQ1osMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQiwwRUFBMEU7UUFDMUUsbUNBQW1DO1FBQ25DLGFBQWE7UUFDYixtQ0FBbUM7UUFDbkMsa0RBQWtEO1FBQ2xELFFBQVE7SUFDWixDQUFDOzs7OztJQTVCRCxJQUFJLGFBQWE7UUFDYixPQUFPLFNBQVMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OztZQVJKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTSxDQUFDLHdEQUF3RDthQUM5RTs7Ozs7Ozs7OztJQVFHLGtDQUEyQjs7SUFFM0Isa0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9yZSBpbmZvcm1hdGlvbjogaHR0cHM6Ly9icmlhbmZsb3ZlLmNvbS8yMDE4LzAxLzExL2FuZ3VsYXItd2luZG93LXByb3ZpZGVyL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRocm90dGxlVGltZSwgc3RhcnRXaXRoLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBWaWV3cG9ydCB9IGZyb20gJy4vdmlld3BvcnQnO1xyXG4vL2ltcG9ydCB7IHBpcGUgfSBmcm9tICdAYW5ndWxhci9jb3JlL3NyYy9yZW5kZXIzJztcclxuXHJcbi8vICNyZWdpb24gR2xvYmFsIEphdmFTY3JpcHQgRnVuY3Rpb25zXHJcblxyXG5mdW5jdGlvbiBnZXRXaW5kb3coKTogYW55IHtcclxuICAgIHJldHVybiB3aW5kb3c7XHJcbn1cclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyAvLyBzaW5nbGV0b246IHNob3VsZCBiZSBwcm92aWRlZCBpbiB0aGUgYXBwbGljYXRpb24gcm9vdFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnJvd3NlclNlcnZpY2Uge1xyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgZ2V0IGJyb3dzZXJXaW5kb3coKTogV2luZG93IHtcclxuICAgICAgICByZXR1cm4gZ2V0V2luZG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2aWV3cG9ydDogVmlld3BvcnQ7XHJcblxyXG4gICAgb25SZXNpemU6IE9ic2VydmFibGU8Vmlld3BvcnQ+O1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yc1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMudmlld3BvcnQgPSBuZXcgVmlld3BvcnQoKTtcclxuICAgICAgICB0aGlzLnZpZXdwb3J0LmFkZEZpeGVkSGVpZ2h0KDQwKTtcclxuICAgICAgICB0aGlzLnZpZXdwb3J0LnNldEJyb3dzZXJXaW5kb3codGhpcy5icm93c2VyV2luZG93KTsgLy8gSW5pdGlhbGl6ZSB2YWx1ZXNcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRlZCBjb2RlIGF0IDogQnJvd3NlclNlcnZpY2UuY29uc3RydWN0b3InKTtcclxuICAgICAgICAvL3RoaXMub25SZXNpemUgPSBmcm9tRXZlbnQodGhpcy5icm93c2VyV2luZG93LCAncmVzaXplJylcclxuICAgICAgICAvLyAgICAucGlwZShcclxuICAgICAgICAvLyAgICAgICAgdGhyb3R0bGVUaW1lKDIwKSxcclxuICAgICAgICAvLyAgICAgICAgbWFwKChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgdGhpcy52aWV3cG9ydC5zZXRCcm93c2VyV2luZG93KDxXaW5kb3c+ZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICByZXR1cm4gdGhpcy52aWV3cG9ydDtcclxuICAgICAgICAvLyAgICAgICAgfSksXHJcbiAgICAgICAgLy8gICAgICAgIHN0YXJ0V2l0aCh0aGlzLnZpZXdwb3J0KSxcclxuICAgICAgICAvLyAgICAgICAgLy90YXAodmlld3BvcnQgPT4gY29uc29sZS5sb2codmlld3BvcnQpKVxyXG4gICAgICAgIC8vICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==