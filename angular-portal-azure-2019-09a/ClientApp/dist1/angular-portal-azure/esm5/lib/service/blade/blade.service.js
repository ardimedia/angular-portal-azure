/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from "rxjs/operators";
import { AppConfigService } from '../app-config/app-config.service';
var BladeService = /** @class */ (function () {
    // #endregion
    // #region Constructors
    function BladeService(appConfigService, router) {
        // #region Handle router events
        var _this = this;
        this.appConfigService = appConfigService;
        this.router = router;
        // #region Properties
        this.bladeId = 0;
        this.router.events
            .pipe(
        // The "events" stream contains all the navigation events. For this demo,
        // though, we only care about the NavigationStart event as it contains
        // information about what initiated the navigation sequence.
        filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return (event instanceof NavigationStart);
        })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            console.group('NavigationStart');
            //// Every navigation sequence is given a unique ID. Even "popstate"
            //// navigations are really just "roll forward" navigations that get
            //// a new, unique ID.
            //console.log("navigation id:", event.id);
            //console.log("route:", event.url);
            //// The "navigationTrigger" will be one of:
            //// --
            //// - imperative (ie, user clicked a link).
            //// - popstate (ie, browser controlled change such as Back button).
            //// - hashchange
            //// --
            //// NOTE: I am not sure what triggers the "hashchange" type.
            //console.log("trigger:", event.navigationTrigger);
            // This "restoredState" property is defined when the navigation
            // event is triggered by a "popstate" event (ex, back / forward
            // buttons). It will contain the ID of the earlier navigation event
            // to which the browser is returning.
            // --
            // CAUTION: This ID may not be part of the current page rendering.
            // This value is pulled out of the browser; and, may exist across
            // page refreshes.
            if (event.restoredState) {
                console.log("restoring navigation id:", event.restoredState.navigationId);
                if (event.url.indexOf('(blade') < 0) {
                    console.log('reset appboard visibility');
                    _this.appConfigService.appConfig.appboard.isVisible = true;
                }
                else {
                    _this.appConfigService.appConfig.blades.pop();
                }
            }
            console.groupEnd();
        }));
        // #endregion
    }
    // #endregion
    // #region Public Methods
    // #endregion
    // #region Public Methods
    /**
     * @param {?} routerPath
     * @return {?}
     */
    BladeService.prototype.navigateTo = 
    // #endregion
    // #region Public Methods
    /**
     * @param {?} routerPath
     * @return {?}
     */
    function (routerPath) {
        var _this = this;
        this.router.config.forEach((/**
         * @param {?} route
         * @return {?}
         */
        function (route) {
            var _a;
            if (route.path === routerPath) {
                _this.bladeId = _this.bladeId + 1;
                route.outlet = 'blade' + _this.bladeId;
                _this.appConfigService.appConfig.blades.push((/** @type {?} */ ({ bladeId: 'blade' + _this.bladeId })));
                _this.router.navigate([{ outlets: (_a = {}, _a['blade' + _this.bladeId] = [routerPath], _a) }]);
            }
        }));
        if (this.appConfigService.appConfig.blades.length > 0) {
            this.appConfigService.appConfig.appboard.isVisible = false;
        }
    };
    BladeService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BladeService.ctorParameters = function () { return [
        { type: AppConfigService },
        { type: Router }
    ]; };
    return BladeService;
}());
export { BladeService };
if (false) {
    /** @type {?} */
    BladeService.prototype.bladeId;
    /**
     * @type {?}
     * @private
     */
    BladeService.prototype.appConfigService;
    /**
     * @type {?}
     * @private
     */
    BladeService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvYmxhZGUvYmxhZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBNEIsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFJcEU7SUFNSSxhQUFhO0lBRWIsdUJBQXVCO0lBRXZCLHNCQUFvQixnQkFBa0MsRUFBVSxNQUFjO1FBQzFFLCtCQUErQjtRQURuQyxpQkFtREM7UUFuRG1CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFROztRQU45RSxZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBU2hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNiLElBQUk7UUFDRCx5RUFBeUU7UUFDekUsc0VBQXNFO1FBQ3RFLDREQUE0RDtRQUM1RCxNQUFNOzs7O1FBQUMsVUFBQyxLQUFzQjtZQUMxQixPQUFPLENBQUMsS0FBSyxZQUFZLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUNMO2FBQ0EsU0FBUzs7OztRQUNOLFVBQUMsS0FBc0I7WUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2pDLG9FQUFvRTtZQUNwRSxvRUFBb0U7WUFDcEUsc0JBQXNCO1lBQ3RCLDBDQUEwQztZQUMxQyxtQ0FBbUM7WUFDbkMsNENBQTRDO1lBQzVDLE9BQU87WUFDUCw0Q0FBNEM7WUFDNUMsb0VBQW9FO1lBQ3BFLGlCQUFpQjtZQUNqQixPQUFPO1lBQ1AsNkRBQTZEO1lBQzdELG1EQUFtRDtZQUVuRCwrREFBK0Q7WUFDL0QsK0RBQStEO1lBQy9ELG1FQUFtRTtZQUNuRSxxQ0FBcUM7WUFDckMsS0FBSztZQUNMLGtFQUFrRTtZQUNsRSxpRUFBaUU7WUFDakUsa0JBQWtCO1lBQ2xCLElBQUksS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO29CQUN4QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUM3RDtxQkFBTTtvQkFDSCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDaEQ7YUFDSjtZQUVELE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztRQUVYLGFBQWE7SUFDakIsQ0FBQztJQUVELGFBQWE7SUFFYix5QkFBeUI7Ozs7Ozs7SUFFekIsaUNBQVU7Ozs7Ozs7SUFBVixVQUFXLFVBQWtCO1FBQTdCLGlCQWFDO1FBWkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBSzs7WUFDN0IsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTtnQkFDM0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFDaEMsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDdEMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFBLEVBQUUsT0FBTyxFQUFFLE9BQU8sR0FBRyxLQUFJLENBQUMsT0FBTyxFQUFFLEVBQVMsQ0FBQyxDQUFDO2dCQUMxRixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsT0FBTyxZQUFJLEdBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLElBQUcsQ0FBQyxVQUFVLENBQUMsS0FBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ25GO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUM5RDtJQUNMLENBQUM7O2dCQWhGSixVQUFVOzs7O2dCQUpGLGdCQUFnQjtnQkFKaEIsTUFBTTs7SUEyRmYsbUJBQUM7Q0FBQSxBQW5GRCxJQW1GQztTQWxGWSxZQUFZOzs7SUFHckIsK0JBQW9COzs7OztJQU1SLHdDQUEwQzs7Ozs7SUFBRSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0LCBFdmVudCBhcyBOYXZpZ2F0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG5pbXBvcnQgeyBBcHBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwLWNvbmZpZy9hcHAtY29uZmlnLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQmxhZGUgfSBmcm9tICcuLi8uLi9kb21haW4vYmxhZGUvYmxhZGUnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmxhZGVTZXJ2aWNlIHtcclxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xyXG5cclxuICAgIGJsYWRlSWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JzXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBDb25maWdTZXJ2aWNlOiBBcHBDb25maWdTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgLy8gI3JlZ2lvbiBIYW5kbGUgcm91dGVyIGV2ZW50c1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgXCJldmVudHNcIiBzdHJlYW0gY29udGFpbnMgYWxsIHRoZSBuYXZpZ2F0aW9uIGV2ZW50cy4gRm9yIHRoaXMgZGVtbyxcclxuICAgICAgICAgICAgICAgIC8vIHRob3VnaCwgd2Ugb25seSBjYXJlIGFib3V0IHRoZSBOYXZpZ2F0aW9uU3RhcnQgZXZlbnQgYXMgaXQgY29udGFpbnNcclxuICAgICAgICAgICAgICAgIC8vIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgaW5pdGlhdGVkIHRoZSBuYXZpZ2F0aW9uIHNlcXVlbmNlLlxyXG4gICAgICAgICAgICAgICAgZmlsdGVyKChldmVudDogTmF2aWdhdGlvbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAoZXZlbnQ6IE5hdmlnYXRpb25TdGFydCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ05hdmlnYXRpb25TdGFydCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8gRXZlcnkgbmF2aWdhdGlvbiBzZXF1ZW5jZSBpcyBnaXZlbiBhIHVuaXF1ZSBJRC4gRXZlbiBcInBvcHN0YXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAvLy8vIG5hdmlnYXRpb25zIGFyZSByZWFsbHkganVzdCBcInJvbGwgZm9yd2FyZFwiIG5hdmlnYXRpb25zIHRoYXQgZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8vLyBhIG5ldywgdW5pcXVlIElELlxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJuYXZpZ2F0aW9uIGlkOlwiLCBldmVudC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInJvdXRlOlwiLCBldmVudC51cmwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8gVGhlIFwibmF2aWdhdGlvblRyaWdnZXJcIiB3aWxsIGJlIG9uZSBvZjpcclxuICAgICAgICAgICAgICAgICAgICAvLy8vIC0tXHJcbiAgICAgICAgICAgICAgICAgICAgLy8vLyAtIGltcGVyYXRpdmUgKGllLCB1c2VyIGNsaWNrZWQgYSBsaW5rKS5cclxuICAgICAgICAgICAgICAgICAgICAvLy8vIC0gcG9wc3RhdGUgKGllLCBicm93c2VyIGNvbnRyb2xsZWQgY2hhbmdlIHN1Y2ggYXMgQmFjayBidXR0b24pLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8gLSBoYXNoY2hhbmdlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8vLyAtLVxyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8gTk9URTogSSBhbSBub3Qgc3VyZSB3aGF0IHRyaWdnZXJzIHRoZSBcImhhc2hjaGFuZ2VcIiB0eXBlLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJ0cmlnZ2VyOlwiLCBldmVudC5uYXZpZ2F0aW9uVHJpZ2dlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgXCJyZXN0b3JlZFN0YXRlXCIgcHJvcGVydHkgaXMgZGVmaW5lZCB3aGVuIHRoZSBuYXZpZ2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXZlbnQgaXMgdHJpZ2dlcmVkIGJ5IGEgXCJwb3BzdGF0ZVwiIGV2ZW50IChleCwgYmFjayAvIGZvcndhcmRcclxuICAgICAgICAgICAgICAgICAgICAvLyBidXR0b25zKS4gSXQgd2lsbCBjb250YWluIHRoZSBJRCBvZiB0aGUgZWFybGllciBuYXZpZ2F0aW9uIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gd2hpY2ggdGhlIGJyb3dzZXIgaXMgcmV0dXJuaW5nLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIC0tXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ0FVVElPTjogVGhpcyBJRCBtYXkgbm90IGJlIHBhcnQgb2YgdGhlIGN1cnJlbnQgcGFnZSByZW5kZXJpbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyB2YWx1ZSBpcyBwdWxsZWQgb3V0IG9mIHRoZSBicm93c2VyOyBhbmQsIG1heSBleGlzdCBhY3Jvc3NcclxuICAgICAgICAgICAgICAgICAgICAvLyBwYWdlIHJlZnJlc2hlcy5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucmVzdG9yZWRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3RvcmluZyBuYXZpZ2F0aW9uIGlkOlwiLCBldmVudC5yZXN0b3JlZFN0YXRlLm5hdmlnYXRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC51cmwuaW5kZXhPZignKGJsYWRlJykgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVzZXQgYXBwYm9hcmQgdmlzaWJpbGl0eScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcENvbmZpZ1NlcnZpY2UuYXBwQ29uZmlnLmFwcGJvYXJkLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcENvbmZpZ1NlcnZpY2UuYXBwQ29uZmlnLmJsYWRlcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vICNlbmRyZWdpb25cclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQdWJsaWMgTWV0aG9kc1xyXG5cclxuICAgIG5hdmlnYXRlVG8ocm91dGVyUGF0aDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIuY29uZmlnLmZvckVhY2goKHJvdXRlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb3V0ZS5wYXRoID09PSByb3V0ZXJQYXRoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsYWRlSWQgPSB0aGlzLmJsYWRlSWQgKyAxO1xyXG4gICAgICAgICAgICAgICAgcm91dGUub3V0bGV0ID0gJ2JsYWRlJyArIHRoaXMuYmxhZGVJZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwQ29uZmlnU2VydmljZS5hcHBDb25maWcuYmxhZGVzLnB1c2goeyBibGFkZUlkOiAnYmxhZGUnICsgdGhpcy5ibGFkZUlkIH0gYXMgQmxhZGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3sgb3V0bGV0czogeyBbJ2JsYWRlJyArIHRoaXMuYmxhZGVJZF06IFtyb3V0ZXJQYXRoXSB9IH1dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hcHBDb25maWdTZXJ2aWNlLmFwcENvbmZpZy5ibGFkZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcENvbmZpZ1NlcnZpY2UuYXBwQ29uZmlnLmFwcGJvYXJkLmlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19