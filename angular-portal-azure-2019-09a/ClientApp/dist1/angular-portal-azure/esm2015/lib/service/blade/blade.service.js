/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from "rxjs/operators";
import { AppConfigService } from '../app-config/app-config.service';
export class BladeService {
    // #endregion
    // #region Constructors
    /**
     * @param {?} appConfigService
     * @param {?} router
     */
    constructor(appConfigService, router) {
        // #region Handle router events
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
        (event) => {
            return (event instanceof NavigationStart);
        })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
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
                    this.appConfigService.appConfig.appboard.isVisible = true;
                }
                else {
                    this.appConfigService.appConfig.blades.pop();
                }
            }
            console.groupEnd();
        }));
        // #endregion
    }
    // #endregion
    // #region Public Methods
    /**
     * @param {?} routerPath
     * @return {?}
     */
    navigateTo(routerPath) {
        this.router.config.forEach((/**
         * @param {?} route
         * @return {?}
         */
        (route) => {
            if (route.path === routerPath) {
                this.bladeId = this.bladeId + 1;
                route.outlet = 'blade' + this.bladeId;
                this.appConfigService.appConfig.blades.push((/** @type {?} */ ({ bladeId: 'blade' + this.bladeId })));
                this.router.navigate([{ outlets: { ['blade' + this.bladeId]: [routerPath] } }]);
            }
        }));
        if (this.appConfigService.appConfig.blades.length > 0) {
            this.appConfigService.appConfig.appboard.isVisible = false;
        }
    }
}
BladeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BladeService.ctorParameters = () => [
    { type: AppConfigService },
    { type: Router }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvYmxhZGUvYmxhZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBNEIsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFLcEUsTUFBTSxPQUFPLFlBQVk7Ozs7Ozs7SUFTckIsWUFBb0IsZ0JBQWtDLEVBQVUsTUFBYztRQUMxRSwrQkFBK0I7UUFEZixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTs7UUFOOUUsWUFBTyxHQUFXLENBQUMsQ0FBQztRQVNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDYixJQUFJO1FBQ0QseUVBQXlFO1FBQ3pFLHNFQUFzRTtRQUN0RSw0REFBNEQ7UUFDNUQsTUFBTTs7OztRQUFDLENBQUMsS0FBc0IsRUFBRSxFQUFFO1lBQzlCLE9BQU8sQ0FBQyxLQUFLLFlBQVksZUFBZSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxFQUFDLENBQ0w7YUFDQSxTQUFTOzs7O1FBQ04sQ0FBQyxLQUFzQixFQUFFLEVBQUU7WUFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ2pDLG9FQUFvRTtZQUNwRSxvRUFBb0U7WUFDcEUsc0JBQXNCO1lBQ3RCLDBDQUEwQztZQUMxQyxtQ0FBbUM7WUFDbkMsNENBQTRDO1lBQzVDLE9BQU87WUFDUCw0Q0FBNEM7WUFDNUMsb0VBQW9FO1lBQ3BFLGlCQUFpQjtZQUNqQixPQUFPO1lBQ1AsNkRBQTZEO1lBQzdELG1EQUFtRDtZQUVuRCwrREFBK0Q7WUFDL0QsK0RBQStEO1lBQy9ELG1FQUFtRTtZQUNuRSxxQ0FBcUM7WUFDckMsS0FBSztZQUNMLGtFQUFrRTtZQUNsRSxpRUFBaUU7WUFDakUsa0JBQWtCO1lBQ2xCLElBQUksS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMxRSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFBO29CQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2lCQUM3RDtxQkFBTTtvQkFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDaEQ7YUFDSjtZQUVELE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztRQUVYLGFBQWE7SUFDakIsQ0FBQzs7Ozs7OztJQU1ELFVBQVUsQ0FBQyxVQUFrQjtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNqQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO2dCQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQUEsRUFBRSxPQUFPLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBUyxDQUFDLENBQUM7Z0JBQzFGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ25GO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUM5RDtJQUNMLENBQUM7OztZQWhGSixVQUFVOzs7O1lBSkYsZ0JBQWdCO1lBSmhCLE1BQU07Ozs7SUFZWCwrQkFBb0I7Ozs7O0lBTVIsd0NBQTBDOzs7OztJQUFFLDhCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQsIEV2ZW50IGFzIE5hdmlnYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IEFwcENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9hcHAtY29uZmlnL2FwcC1jb25maWcuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBCbGFkZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9ibGFkZS9ibGFkZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCbGFkZVNlcnZpY2Uge1xyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgYmxhZGVJZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvcnNcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcENvbmZpZ1NlcnZpY2U6IEFwcENvbmZpZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICAvLyAjcmVnaW9uIEhhbmRsZSByb3V0ZXIgZXZlbnRzXHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xyXG4gICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBcImV2ZW50c1wiIHN0cmVhbSBjb250YWlucyBhbGwgdGhlIG5hdmlnYXRpb24gZXZlbnRzLiBGb3IgdGhpcyBkZW1vLFxyXG4gICAgICAgICAgICAgICAgLy8gdGhvdWdoLCB3ZSBvbmx5IGNhcmUgYWJvdXQgdGhlIE5hdmlnYXRpb25TdGFydCBldmVudCBhcyBpdCBjb250YWluc1xyXG4gICAgICAgICAgICAgICAgLy8gaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBpbml0aWF0ZWQgdGhlIG5hdmlnYXRpb24gc2VxdWVuY2UuXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIoKGV2ZW50OiBOYXZpZ2F0aW9uRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChldmVudDogTmF2aWdhdGlvblN0YXJ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5ncm91cCgnTmF2aWdhdGlvblN0YXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8vLyBFdmVyeSBuYXZpZ2F0aW9uIHNlcXVlbmNlIGlzIGdpdmVuIGEgdW5pcXVlIElELiBFdmVuIFwicG9wc3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8gbmF2aWdhdGlvbnMgYXJlIHJlYWxseSBqdXN0IFwicm9sbCBmb3J3YXJkXCIgbmF2aWdhdGlvbnMgdGhhdCBnZXRcclxuICAgICAgICAgICAgICAgICAgICAvLy8vIGEgbmV3LCB1bmlxdWUgSUQuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5hdmlnYXRpb24gaWQ6XCIsIGV2ZW50LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwicm91dGU6XCIsIGV2ZW50LnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8vLyBUaGUgXCJuYXZpZ2F0aW9uVHJpZ2dlclwiIHdpbGwgYmUgb25lIG9mOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8gLS1cclxuICAgICAgICAgICAgICAgICAgICAvLy8vIC0gaW1wZXJhdGl2ZSAoaWUsIHVzZXIgY2xpY2tlZCBhIGxpbmspLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vLy8gLSBwb3BzdGF0ZSAoaWUsIGJyb3dzZXIgY29udHJvbGxlZCBjaGFuZ2Ugc3VjaCBhcyBCYWNrIGJ1dHRvbikuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8vLyAtIGhhc2hjaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICAvLy8vIC0tXHJcbiAgICAgICAgICAgICAgICAgICAgLy8vLyBOT1RFOiBJIGFtIG5vdCBzdXJlIHdoYXQgdHJpZ2dlcnMgdGhlIFwiaGFzaGNoYW5nZVwiIHR5cGUuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInRyaWdnZXI6XCIsIGV2ZW50Lm5hdmlnYXRpb25UcmlnZ2VyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBcInJlc3RvcmVkU3RhdGVcIiBwcm9wZXJ0eSBpcyBkZWZpbmVkIHdoZW4gdGhlIG5hdmlnYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAvLyBldmVudCBpcyB0cmlnZ2VyZWQgYnkgYSBcInBvcHN0YXRlXCIgZXZlbnQgKGV4LCBiYWNrIC8gZm9yd2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dHRvbnMpLiBJdCB3aWxsIGNvbnRhaW4gdGhlIElEIG9mIHRoZSBlYXJsaWVyIG5hdmlnYXRpb24gZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAvLyB0byB3aGljaCB0aGUgYnJvd3NlciBpcyByZXR1cm5pbmcuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLS1cclxuICAgICAgICAgICAgICAgICAgICAvLyBDQVVUSU9OOiBUaGlzIElEIG1heSBub3QgYmUgcGFydCBvZiB0aGUgY3VycmVudCBwYWdlIHJlbmRlcmluZy5cclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHZhbHVlIGlzIHB1bGxlZCBvdXQgb2YgdGhlIGJyb3dzZXI7IGFuZCwgbWF5IGV4aXN0IGFjcm9zc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhZ2UgcmVmcmVzaGVzLlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5yZXN0b3JlZFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVzdG9yaW5nIG5hdmlnYXRpb24gaWQ6XCIsIGV2ZW50LnJlc3RvcmVkU3RhdGUubmF2aWdhdGlvbklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnVybC5pbmRleE9mKCcoYmxhZGUnKSA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNldCBhcHBib2FyZCB2aXNpYmlsaXR5JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwQ29uZmlnU2VydmljZS5hcHBDb25maWcuYXBwYm9hcmQuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwQ29uZmlnU2VydmljZS5hcHBDb25maWcuYmxhZGVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gI2VuZHJlZ2lvblxyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFB1YmxpYyBNZXRob2RzXHJcblxyXG4gICAgbmF2aWdhdGVUbyhyb3V0ZXJQYXRoOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5jb25maWcuZm9yRWFjaCgocm91dGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJvdXRlLnBhdGggPT09IHJvdXRlclBhdGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmxhZGVJZCA9IHRoaXMuYmxhZGVJZCArIDE7XHJcbiAgICAgICAgICAgICAgICByb3V0ZS5vdXRsZXQgPSAnYmxhZGUnICsgdGhpcy5ibGFkZUlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBDb25maWdTZXJ2aWNlLmFwcENvbmZpZy5ibGFkZXMucHVzaCh7IGJsYWRlSWQ6ICdibGFkZScgKyB0aGlzLmJsYWRlSWQgfSBhcyBCbGFkZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbeyBvdXRsZXRzOiB7IFsnYmxhZGUnICsgdGhpcy5ibGFkZUlkXTogW3JvdXRlclBhdGhdIH0gfV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFwcENvbmZpZ1NlcnZpY2UuYXBwQ29uZmlnLmJsYWRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwQ29uZmlnU2VydmljZS5hcHBDb25maWcuYXBwYm9hcmQuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=