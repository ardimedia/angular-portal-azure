/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { AppConfigService } from '../app-config/app-config.service';
import { BladeService } from '../blade/blade.service';
import { InjectorService } from '../injector/injector.service';
import * as i0 from "@angular/core";
import * as i1 from "../app-config/app-config.service";
import * as i2 from "../blade/blade.service";
export class AppService {
    // #region Constructors
    //constructor(title: string = null) {
    /**
     * @param {?} appConfigService
     * @param {?} bladeService
     * @param {?} injector
     */
    constructor(appConfigService, bladeService, injector) {
        this.appConfigService = appConfigService;
        this.bladeService = bladeService;
        InjectorService.setInjector(injector);
    }
}
AppService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root' // singleton: should be provided in the application root
            },] }
];
/** @nocollapse */
AppService.ctorParameters = () => [
    { type: AppConfigService },
    { type: BladeService },
    { type: Injector }
];
/** @nocollapse */ AppService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AppService_Factory() { return new AppService(i0.ɵɵinject(i1.AppConfigService), i0.ɵɵinject(i2.BladeService), i0.ɵɵinject(i0.INJECTOR)); }, token: AppService, providedIn: "root" });
if (false) {
    /** @type {?} */
    AppService.prototype.portalService;
    /** @type {?} */
    AppService.prototype.appConfigService;
    /** @type {?} */
    AppService.prototype.bladeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlL2FwcC9hcHAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUE7QUFDbkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQTs7OztBQUs5RCxNQUFNLE9BQU8sVUFBVTs7Ozs7Ozs7SUFJbkIsWUFDVyxnQkFBa0MsRUFDbEMsWUFBMEIsRUFDakMsUUFBa0I7UUFGWCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBR2pDLGVBQWUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7O1lBYkosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNLENBQUMsd0RBQXdEO2FBQzlFOzs7O1lBTlEsZ0JBQWdCO1lBQ2hCLFlBQVk7WUFMQSxRQUFROzs7OztJQXlCekIsbUNBQTZCOztJQVR6QixzQ0FBeUM7O0lBQ3pDLGtDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BvcnRhbC1zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEFwcENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9hcHAtY29uZmlnL2FwcC1jb25maWcuc2VydmljZSdcclxuaW1wb3J0IHsgQmxhZGVTZXJ2aWNlIH0gZnJvbSAnLi4vYmxhZGUvYmxhZGUuc2VydmljZSdcclxuaW1wb3J0IHsgSW5qZWN0b3JTZXJ2aWNlIH0gZnJvbSAnLi4vaW5qZWN0b3IvaW5qZWN0b3Iuc2VydmljZSdcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyAvLyBzaW5nbGV0b246IHNob3VsZCBiZSBwcm92aWRlZCBpbiB0aGUgYXBwbGljYXRpb24gcm9vdFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwU2VydmljZSB7XHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yc1xyXG5cclxuICAgIC8vY29uc3RydWN0b3IodGl0bGU6IHN0cmluZyA9IG51bGwpIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBhcHBDb25maWdTZXJ2aWNlOiBBcHBDb25maWdTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBibGFkZVNlcnZpY2U6IEJsYWRlU2VydmljZSxcclxuICAgICAgICBpbmplY3RvcjogSW5qZWN0b3JcclxuICAgICkge1xyXG4gICAgICAgIEluamVjdG9yU2VydmljZS5zZXRJbmplY3RvcihpbmplY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIHBvcnRhbFNlcnZpY2U6IFBvcnRhbFNlcnZpY2U7XHJcbn1cclxuIl19