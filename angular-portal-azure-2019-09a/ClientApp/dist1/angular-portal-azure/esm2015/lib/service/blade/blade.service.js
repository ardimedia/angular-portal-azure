/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from "rxjs/operators";
import { AppService } from '../app/app.service';
import { AppConfigService } from '../app-config/app-config.service';
import { PortalService } from '../../domain/portal-service';
export class BladeService {
    // #endregion
    // #region Constructors
    /**
     * @param {?} appConfigService
     * @param {?} router
     * @param {?} portalService
     * @param {?} appService
     */
    constructor(appConfigService, router, portalService, appService) {
        // #region Handle router events
        this.appConfigService = appConfigService;
        this.router = router;
        this.portalService = portalService;
        this.appService = appService;
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
            // See [https://angular.io/api/router/Event] for routes sequences
            // NavigationStart
            if (event instanceof NavigationStart) {
                // console.log({ NavigationStart: '', event: event, eventUrl: event.url, eventRestoreState: event.restoredState, routerConfig: this.router.config });
                this.fixRouterConfigBladeOutlet(event);
                this.handleRestoreStateEventForBlades(event);
            }
            console.groupEnd();
        }));
        // #endregion
    }
    // #endregion
    // #region Public Methods
    /**
     *
     * @param {?} routerToPath
     * @return {?}
     */
    navigateTo(routerToPath) {
        /** @type {?} */
        let isRouteMatchFound = false;
        // Process all route configuration entries
        this.router.config.forEach((/**
         * @param {?} routeConfig
         * @return {?}
         */
        (routeConfig) => {
            // Try to match a configured route, with the one requested
            // (forEach cannot break out (stop execution), therefore we check for isRouteMatchFound for no further processing)
            if (routeConfig.path === routerToPath && !isRouteMatchFound) {
                this.bladeId = this.bladeId + 1; // create a unique id
                // create a unique id
                /** @type {?} */
                const outletId = 'blade' + this.bladeId;
                this.appConfigService.appConfig.blades.push((/** @type {?} */ ({ bladeId: outletId })));
                routeConfig.outlet = outletId; // set outlet, so the route knows, in which router-outlet it should be shown
                // Navigate to the route
                this.router.navigate([{ outlets: { [outletId]: [routerToPath] } }]);
                //this.router.navigate([{ outlets: { primary: ['appboard'], [outletId]: [routerToPath] } }]);
                isRouteMatchFound = true;
            }
        }));
        // No match found
        if (!isRouteMatchFound) {
            console.log('XXXXXX');
            if (this.appConfigService.appConfig.blades.length > 0) {
                this.appConfigService.appConfig.appboard.isVisible = false;
            }
            else {
                this.appConfigService.appConfig.appboard.isVisible = true;
            }
            if (this.portalService.areaBlades.blades.length == 0) {
                this.portalService.panorama.isVisible = true;
                this.portalService.panorama.startboard.tiles.showTiles = true;
            }
            this.router.navigate(['/' + routerToPath]);
        }
    }
    // #endregion
    // #region Private Methods
    /**
     * Fix router configuration for blades
     * When a blade is added to the router, the route for the blade is updated with an outlet identifier (e.g. blade1),
     * see above in the navigateTo function.
     * Because this identifier is not persistent and may changes between sessions, we need to add the outlet identifier
     * to the route configuration, so that a corresponding URL can be reconstructed.
     *
     * @private
     * @param {?} event
     * @return {?}
     */
    fixRouterConfigBladeOutlet(event) {
        // TODO:2019-09-30/hp: Not yet finished.
        //                     Processing multiple blade outlets(https://localhost:44398/appboard(blade2:counter//blade1:fetchdata)).
        //                     We need to parse event.url and find all blade outlets.
        //                     At the moment only the first one is found and processed.
        /** @type {?} */
        const outlet1 = event.url.substring(10, 16);
        /** @type {?} */
        const path1 = event.url.substring(17).replace(')', '');
        //this.router.routerState.root.children.forEach((child) => {
        //    if (child.outlet.startsWith('blade')) {
        //        console.log({ child: child });
        this.router.config.forEach((/**
         * @param {?} config
         * @return {?}
         */
        (config) => {
            if (config.path == path1
                && config.outlet === undefined) {
                config.outlet = outlet1;
                this.appConfigService.appConfig.blades.push((/** @type {?} */ ({ bladeId: outlet1 })));
            }
        }));
        //    }
        //});
    }
    /**
     *
     * @private
     * @param {?} event
     * @return {?}
     */
    handleRestoreStateEventForBlades(event) {
        // The "restoredState" property is set/defined when the navigation
        // event is triggered by a "popstate" event (e.g.: back / forward buttons).
        // It will contain the ID of the earlier navigation event
        // to which the browser is returning.
        // CAUTION: This ID may not be part of the current page rendering.
        // This value is pulled out of the browser; and, may exist across page refreshes.
        if (event.restoredState) {
            if (event.url.indexOf('(blade') < 0) {
                console.log('no more blades, reset appboard visibility');
                this.appConfigService.appConfig.appboard.isVisible = true;
                this.portalService.panorama.isVisible = true;
                this.portalService.panorama.startboard.tiles.showTiles = true;
            }
            else {
                console.log('remove latest blade');
                this.appConfigService.appConfig.blades.pop();
            }
        }
    }
}
BladeService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BladeService.ctorParameters = () => [
    { type: AppConfigService },
    { type: Router },
    { type: PortalService },
    { type: AppService }
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
    /**
     * @type {?}
     * @private
     */
    BladeService.prototype.portalService;
    /**
     * @type {?}
     * @private
     */
    BladeService.prototype.appService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2UvYmxhZGUvYmxhZGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBbUIsTUFBTSxpQkFBaUIsQ0FBQztBQUUzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBSXBFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUc1RCxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7O0lBU3JCLFlBQW9CLGdCQUFrQyxFQUFVLE1BQWMsRUFBVSxhQUE0QixFQUFVLFVBQXNCO1FBQ2hKLCtCQUErQjtRQURmLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZOztRQU5wSixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBU2hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNiLElBQUk7UUFDRCx5RUFBeUU7UUFDekUsc0VBQXNFO1FBQ3RFLDREQUE0RDtRQUM1RCxNQUFNOzs7O1FBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUNyQixPQUFPLENBQUMsS0FBSyxZQUFZLGVBQWUsQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUNMO2FBQ0EsU0FBUzs7OztRQUNOLENBQUMsS0FBd0IsRUFBRSxFQUFFO1lBQ3pCLGlFQUFpRTtZQUVqRSxrQkFBa0I7WUFD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WUFMaEIsTUFBTTtZQVNOLGFBQWE7WUFMYixVQUFVOzs7O0lBV2YsK0JBQW9COzs7OztJQU1SLHdDQUEwQzs7Ozs7SUFBRSw4QkFBc0I7Ozs7O0lBQUUscUNBQW9DOzs7OztJQUFFLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBOYXZpZ2F0aW9uU3RhcnQsIEV2ZW50IGFzIEV2ZW50WCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuXHJcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi9hcHAvYXBwLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vYXBwLWNvbmZpZy9hcHAtY29uZmlnLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQmxhZGUgfSBmcm9tICcuLi8uLi9kb21haW4vYmxhZGUvYmxhZGUnO1xyXG5cclxuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9wb3J0YWwtc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCbGFkZVNlcnZpY2Uge1xyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgYmxhZGVJZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvcnNcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcENvbmZpZ1NlcnZpY2U6IEFwcENvbmZpZ1NlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSwgcHJpdmF0ZSBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlKSB7XHJcbiAgICAgICAgLy8gI3JlZ2lvbiBIYW5kbGUgcm91dGVyIGV2ZW50c1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgXCJldmVudHNcIiBzdHJlYW0gY29udGFpbnMgYWxsIHRoZSBuYXZpZ2F0aW9uIGV2ZW50cy4gRm9yIHRoaXMgZGVtbyxcclxuICAgICAgICAgICAgICAgIC8vIHRob3VnaCwgd2Ugb25seSBjYXJlIGFib3V0IHRoZSBOYXZpZ2F0aW9uU3RhcnQgZXZlbnQgYXMgaXQgY29udGFpbnNcclxuICAgICAgICAgICAgICAgIC8vIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgaW5pdGlhdGVkIHRoZSBuYXZpZ2F0aW9uIHNlcXVlbmNlLlxyXG4gICAgICAgICAgICAgICAgZmlsdGVyKChldmVudDogRXZlbnRYKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAoZXZlbnQ6IChOYXZpZ2F0aW9uU3RhcnQpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlIFtodHRwczovL2FuZ3VsYXIuaW8vYXBpL3JvdXRlci9FdmVudF0gZm9yIHJvdXRlcyBzZXF1ZW5jZXNcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTmF2aWdhdGlvblN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHsgTmF2aWdhdGlvblN0YXJ0OiAnJywgZXZlbnQ6IGV2ZW50LCBldmVudFVybDogZXZlbnQudXJsLCBldmVudFJlc3RvcmVTdGF0ZTogZXZlbnQucmVzdG9yZWRTdGF0ZSwgcm91dGVyQ29uZmlnOiB0aGlzLnJvdXRlci5jb25maWcgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZml4Um91dGVyQ29uZmlnQmxhZGVPdXRsZXQoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVJlc3RvcmVTdGF0ZUV2ZW50Rm9yQmxhZGVzKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAjZW5kcmVnaW9uXHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHVibGljIE1ldGhvZHNcclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICovXHJcbiAgICBuYXZpZ2F0ZVRvKHJvdXRlclRvUGF0aDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGlzUm91dGVNYXRjaEZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3MgYWxsIHJvdXRlIGNvbmZpZ3VyYXRpb24gZW50cmllc1xyXG4gICAgICAgIHRoaXMucm91dGVyLmNvbmZpZy5mb3JFYWNoKChyb3V0ZUNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgICAvLyBUcnkgdG8gbWF0Y2ggYSBjb25maWd1cmVkIHJvdXRlLCB3aXRoIHRoZSBvbmUgcmVxdWVzdGVkXHJcbiAgICAgICAgICAgIC8vIChmb3JFYWNoIGNhbm5vdCBicmVhayBvdXQgKHN0b3AgZXhlY3V0aW9uKSwgdGhlcmVmb3JlIHdlIGNoZWNrIGZvciBpc1JvdXRlTWF0Y2hGb3VuZCBmb3Igbm8gZnVydGhlciBwcm9jZXNzaW5nKVxyXG4gICAgICAgICAgICBpZiAocm91dGVDb25maWcucGF0aCA9PT0gcm91dGVyVG9QYXRoICYmICFpc1JvdXRlTWF0Y2hGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ibGFkZUlkID0gdGhpcy5ibGFkZUlkICsgMTsgLy8gY3JlYXRlIGEgdW5pcXVlIGlkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvdXRsZXRJZCA9ICdibGFkZScgKyB0aGlzLmJsYWRlSWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcENvbmZpZ1NlcnZpY2UuYXBwQ29uZmlnLmJsYWRlcy5wdXNoKHsgYmxhZGVJZDogb3V0bGV0SWQgfSBhcyBCbGFkZSk7XHJcbiAgICAgICAgICAgICAgICByb3V0ZUNvbmZpZy5vdXRsZXQgPSBvdXRsZXRJZDsgLy8gc2V0IG91dGxldCwgc28gdGhlIHJvdXRlIGtub3dzLCBpbiB3aGljaCByb3V0ZXItb3V0bGV0IGl0IHNob3VsZCBiZSBzaG93blxyXG5cclxuICAgICAgICAgICAgICAgIC8vIE5hdmlnYXRlIHRvIHRoZSByb3V0ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3sgb3V0bGV0czogeyBbb3V0bGV0SWRdOiBbcm91dGVyVG9QYXRoXSB9IH1dKTtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3sgb3V0bGV0czogeyBwcmltYXJ5OiBbJ2FwcGJvYXJkJ10sIFtvdXRsZXRJZF06IFtyb3V0ZXJUb1BhdGhdIH0gfV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlzUm91dGVNYXRjaEZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBObyBtYXRjaCBmb3VuZFxyXG4gICAgICAgIGlmICghaXNSb3V0ZU1hdGNoRm91bmQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1hYWFhYWCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwQ29uZmlnU2VydmljZS5hcHBDb25maWcuYmxhZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwQ29uZmlnU2VydmljZS5hcHBDb25maWcuYXBwYm9hcmQuaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcENvbmZpZ1NlcnZpY2UuYXBwQ29uZmlnLmFwcGJvYXJkLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYUJsYWRlcy5ibGFkZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hLnN0YXJ0Ym9hcmQudGlsZXMuc2hvd1RpbGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJyArIHJvdXRlclRvUGF0aF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQcml2YXRlIE1ldGhvZHNcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZpeCByb3V0ZXIgY29uZmlndXJhdGlvbiBmb3IgYmxhZGVzXHJcbiAgICAgKiBXaGVuIGEgYmxhZGUgaXMgYWRkZWQgdG8gdGhlIHJvdXRlciwgdGhlIHJvdXRlIGZvciB0aGUgYmxhZGUgaXMgdXBkYXRlZCB3aXRoIGFuIG91dGxldCBpZGVudGlmaWVyIChlLmcuIGJsYWRlMSksXHJcbiAgICAgKiBzZWUgYWJvdmUgaW4gdGhlIG5hdmlnYXRlVG8gZnVuY3Rpb24uXHJcbiAgICAgKiBCZWNhdXNlIHRoaXMgaWRlbnRpZmllciBpcyBub3QgcGVyc2lzdGVudCBhbmQgbWF5IGNoYW5nZXMgYmV0d2VlbiBzZXNzaW9ucywgd2UgbmVlZCB0byBhZGQgdGhlIG91dGxldCBpZGVudGlmaWVyXHJcbiAgICAgKiB0byB0aGUgcm91dGUgY29uZmlndXJhdGlvbiwgc28gdGhhdCBhIGNvcnJlc3BvbmRpbmcgVVJMIGNhbiBiZSByZWNvbnN0cnVjdGVkLlxyXG4gICAgICogKi9cclxuICAgIHByaXZhdGUgZml4Um91dGVyQ29uZmlnQmxhZGVPdXRsZXQoZXZlbnQ6IE5hdmlnYXRpb25TdGFydCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFRPRE86MjAxOS0wOS0zMC9ocDogTm90IHlldCBmaW5pc2hlZC5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIFByb2Nlc3NpbmcgbXVsdGlwbGUgYmxhZGUgb3V0bGV0cyhodHRwczovL2xvY2FsaG9zdDo0NDM5OC9hcHBib2FyZChibGFkZTI6Y291bnRlci8vYmxhZGUxOmZldGNoZGF0YSkpLlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgV2UgbmVlZCB0byBwYXJzZSBldmVudC51cmwgYW5kIGZpbmQgYWxsIGJsYWRlIG91dGxldHMuXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBBdCB0aGUgbW9tZW50IG9ubHkgdGhlIGZpcnN0IG9uZSBpcyBmb3VuZCBhbmQgcHJvY2Vzc2VkLlxyXG4gICAgICAgIGNvbnN0IG91dGxldDEgPSBldmVudC51cmwuc3Vic3RyaW5nKDEwLCAxNik7XHJcbiAgICAgICAgY29uc3QgcGF0aDEgPSBldmVudC51cmwuc3Vic3RyaW5nKDE3KS5yZXBsYWNlKCcpJywgJycpO1xyXG4gICAgICAgIC8vdGhpcy5yb3V0ZXIucm91dGVyU3RhdGUucm9vdC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgICAgIC8vICAgIGlmIChjaGlsZC5vdXRsZXQuc3RhcnRzV2l0aCgnYmxhZGUnKSkge1xyXG4gICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZyh7IGNoaWxkOiBjaGlsZCB9KTtcclxuICAgICAgICB0aGlzLnJvdXRlci5jb25maWcuZm9yRWFjaCgoY29uZmlnKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb25maWcucGF0aCA9PSBwYXRoMVxyXG4gICAgICAgICAgICAgICAgJiYgY29uZmlnLm91dGxldCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcub3V0bGV0ID0gb3V0bGV0MTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwQ29uZmlnU2VydmljZS5hcHBDb25maWcuYmxhZGVzLnB1c2goeyBibGFkZUlkOiBvdXRsZXQxIH0gYXMgQmxhZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgfVxyXG4gICAgICAgIC8vfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVSZXN0b3JlU3RhdGVFdmVudEZvckJsYWRlcyhldmVudDogTmF2aWdhdGlvblN0YXJ0KTogdm9pZCB7XHJcbiAgICAgICAgLy8gVGhlIFwicmVzdG9yZWRTdGF0ZVwiIHByb3BlcnR5IGlzIHNldC9kZWZpbmVkIHdoZW4gdGhlIG5hdmlnYXRpb25cclxuICAgICAgICAvLyBldmVudCBpcyB0cmlnZ2VyZWQgYnkgYSBcInBvcHN0YXRlXCIgZXZlbnQgKGUuZy46IGJhY2sgLyBmb3J3YXJkIGJ1dHRvbnMpLlxyXG4gICAgICAgIC8vIEl0IHdpbGwgY29udGFpbiB0aGUgSUQgb2YgdGhlIGVhcmxpZXIgbmF2aWdhdGlvbiBldmVudFxyXG4gICAgICAgIC8vIHRvIHdoaWNoIHRoZSBicm93c2VyIGlzIHJldHVybmluZy5cclxuICAgICAgICAvLyBDQVVUSU9OOiBUaGlzIElEIG1heSBub3QgYmUgcGFydCBvZiB0aGUgY3VycmVudCBwYWdlIHJlbmRlcmluZy5cclxuICAgICAgICAvLyBUaGlzIHZhbHVlIGlzIHB1bGxlZCBvdXQgb2YgdGhlIGJyb3dzZXI7IGFuZCwgbWF5IGV4aXN0IGFjcm9zcyBwYWdlIHJlZnJlc2hlcy5cclxuICAgICAgICBpZiAoZXZlbnQucmVzdG9yZWRTdGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudXJsLmluZGV4T2YoJyhibGFkZScpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIG1vcmUgYmxhZGVzLCByZXNldCBhcHBib2FyZCB2aXNpYmlsaXR5JylcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwQ29uZmlnU2VydmljZS5hcHBDb25maWcuYXBwYm9hcmQuaXNWaXNpYmxlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5zdGFydGJvYXJkLnRpbGVzLnNob3dUaWxlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZlIGxhdGVzdCBibGFkZScpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcENvbmZpZ1NlcnZpY2UuYXBwQ29uZmlnLmJsYWRlcy5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19