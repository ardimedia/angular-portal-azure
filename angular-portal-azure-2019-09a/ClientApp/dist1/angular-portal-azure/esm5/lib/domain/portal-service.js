/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AreaBlades } from './area-blades';
import { AreaNotification } from './area-notification';
import { Panorama } from './panorama';
var PortalService = /** @class */ (function () {
    // #region Constructor
    //static $inject = ['$injector'];
    function PortalService() {
        this.parameter = { action: 'none', itemId: 0 };
        this.panorama = new Panorama(this, 'angular-portal-azure-module');
        console.log({ PortalService: ((/** @type {?} */ (Object))).id(this) });
        //this.$injector = $injector;
        //this.$http = $injector.get('$http');
        //this.$httpBackend = $injector.get('$httpBackend');
        //this.$q = $injector.get('$q');
        //this.$rootScope = $injector.get('$rootScope');
        //this.$window = $injector.get('$window');
        //this.$analytics = $injector.get('$analytics');
        //this.$timeout = $injector.get('$timeout');
        //this.$translate = $injector.get('$translate');
        //this.ngDialog = <any>$injector.get('ngDialog');
        this.areaBlades = new AreaBlades(this);
        this.areaNotification = new AreaNotification(this);
    }
    return PortalService;
}());
export { PortalService };
if (false) {
    /** @type {?} */
    PortalService.prototype.appService;
    /** @type {?} */
    PortalService.prototype.parameter;
    /** @type {?} */
    PortalService.prototype.$analytics;
    /** @type {?} */
    PortalService.prototype.portalShell;
    /** @type {?} */
    PortalService.prototype.panorama;
    /** @type {?} */
    PortalService.prototype.areaBlades;
    /** @type {?} */
    PortalService.prototype.areaNotification;
    /** @type {?} */
    PortalService.prototype.ngDialog;
    /** @type {?} */
    PortalService.prototype.$injector;
    /** @type {?} */
    PortalService.prototype.$http;
    /** @type {?} */
    PortalService.prototype.$httpBackend;
    /** @type {?} */
    PortalService.prototype.$q;
    /** @type {?} */
    PortalService.prototype.$rootScope;
    /** @type {?} */
    PortalService.prototype.$window;
    /** @type {?} */
    PortalService.prototype.$timeout;
    /** @type {?} */
    PortalService.prototype.$translate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLXNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vcG9ydGFsLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUt0QztJQUNJLHNCQUFzQjtJQUV0QixpQ0FBaUM7SUFDakM7UUF3QkEsY0FBUyxHQUFtQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBMkIxRCxhQUFRLEdBQWEsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFsRG5FLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkQsNkJBQTZCO1FBRTdCLHNDQUFzQztRQUN0QyxvREFBb0Q7UUFDcEQsZ0NBQWdDO1FBQ2hDLGdEQUFnRDtRQUNoRCwwQ0FBMEM7UUFDMUMsZ0RBQWdEO1FBQ2hELDRDQUE0QztRQUM1QyxnREFBZ0Q7UUFFaEQsaURBQWlEO1FBRWpELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQTRETCxvQkFBQztBQUFELENBQUMsQUFqRkQsSUFpRkM7Ozs7SUF0REcsbUNBQXVCOztJQUN2QixrQ0FBMEQ7O0lBQzFELG1DQUF3Qzs7SUF5QnhDLG9DQUF5Qjs7SUFDekIsaUNBQXVFOztJQUN2RSxtQ0FBdUI7O0lBQ3ZCLHlDQUFtQzs7SUFNbkMsaUNBQWM7O0lBTWQsa0NBQWU7O0lBQ2YsOEJBQVc7O0lBQ1gscUNBQWtCOztJQUNsQiwyQkFBUTs7SUFDUixtQ0FBZ0I7O0lBQ2hCLGdDQUFhOztJQUNiLGlDQUFjOztJQUNkLG1DQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2FwcC9hcHAuc2VydmljZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgQXJlYUJsYWRlcyB9IGZyb20gJy4vYXJlYS1ibGFkZXMnO1xyXG5pbXBvcnQgeyBBcmVhTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9hcmVhLW5vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7IEJsYWRlUGFyYW1ldGVyIH0gZnJvbSAnLi9ibGFkZS1wYXJhbWV0ZXInO1xyXG5pbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEnO1xyXG5pbXBvcnQgeyBQb3J0YWxTaGVsbCB9IGZyb20gJy4vcG9ydGFsLXNoZWxsJztcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyTW9kdWxlIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzIH0gZnJvbSAnYW5ndWxhcnRpY3MyL2dhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3J0YWxTZXJ2aWNlIHtcclxuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JcclxuXHJcbiAgICAvL3N0YXRpYyAkaW5qZWN0ID0gWyckaW5qZWN0b3InXTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyAvLyAkaW5qZWN0b3I6IGFueSwgYW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzOiBBbmd1bGFydGljczJHb29nbGVBbmFseXRpY3NcclxuICAgICAgICBjb25zb2xlLmxvZyh7IFBvcnRhbFNlcnZpY2U6ICg8YW55Pk9iamVjdCkuaWQodGhpcykgfSk7XHJcbiAgICAgICAgLy90aGlzLiRpbmplY3RvciA9ICRpbmplY3RvcjtcclxuXHJcbiAgICAgICAgLy90aGlzLiRodHRwID0gJGluamVjdG9yLmdldCgnJGh0dHAnKTtcclxuICAgICAgICAvL3RoaXMuJGh0dHBCYWNrZW5kID0gJGluamVjdG9yLmdldCgnJGh0dHBCYWNrZW5kJyk7XHJcbiAgICAgICAgLy90aGlzLiRxID0gJGluamVjdG9yLmdldCgnJHEnKTtcclxuICAgICAgICAvL3RoaXMuJHJvb3RTY29wZSA9ICRpbmplY3Rvci5nZXQoJyRyb290U2NvcGUnKTtcclxuICAgICAgICAvL3RoaXMuJHdpbmRvdyA9ICRpbmplY3Rvci5nZXQoJyR3aW5kb3cnKTtcclxuICAgICAgICAvL3RoaXMuJGFuYWx5dGljcyA9ICRpbmplY3Rvci5nZXQoJyRhbmFseXRpY3MnKTtcclxuICAgICAgICAvL3RoaXMuJHRpbWVvdXQgPSAkaW5qZWN0b3IuZ2V0KCckdGltZW91dCcpO1xyXG4gICAgICAgIC8vdGhpcy4kdHJhbnNsYXRlID0gJGluamVjdG9yLmdldCgnJHRyYW5zbGF0ZScpO1xyXG5cclxuICAgICAgICAvL3RoaXMubmdEaWFsb2cgPSA8YW55PiRpbmplY3Rvci5nZXQoJ25nRGlhbG9nJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYXJlYUJsYWRlcyA9IG5ldyBBcmVhQmxhZGVzKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXJlYU5vdGlmaWNhdGlvbiA9IG5ldyBBcmVhTm90aWZpY2F0aW9uKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcclxuXHJcbiAgICBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlO1xyXG4gICAgcGFyYW1ldGVyOiBCbGFkZVBhcmFtZXRlciA9IHsgYWN0aW9uOiAnbm9uZScsIGl0ZW1JZDogMCB9O1xyXG4gICAgJGFuYWx5dGljczogQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzO1xyXG5cclxuICAgIC8vICNyZWdpb24gbmcuSU1vZHVsZSBwcm9wZXJ0aWVzXHJcblxyXG4gICAgLy9hbmltYXRlO1xyXG4gICAgLy9hbmltYXRpb247XHJcbiAgICAvL2NvbXBvbmVudDtcclxuICAgIC8vY29uZmlnO1xyXG4gICAgLy9jb25zdGFudDtcclxuICAgIC8vY29udHJvbGxlcjtcclxuICAgIC8vZGlyZWN0aXZlO1xyXG4gICAgLy9mYWN0b3J5O1xyXG4gICAgLy9maWx0ZXI7XHJcbiAgICAvL3Byb3ZpZGVyO1xyXG4gICAgLy9ydW47XHJcbiAgICAvL3NlcnZpY2U7XHJcbiAgICAvL3ZhbHVlO1xyXG4gICAgLy9kZWNvcmF0b3I7XHJcbiAgICAvL25hbWU7XHJcbiAgICAvL3JlcXVpcmVzO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFZpc3VhbCBjb21wb25lbnRzXHJcblxyXG4gICAgcG9ydGFsU2hlbGw6IFBvcnRhbFNoZWxsO1xyXG4gICAgcGFub3JhbWE6IFBhbm9yYW1hID0gbmV3IFBhbm9yYW1hKHRoaXMsICdhbmd1bGFyLXBvcnRhbC1henVyZS1tb2R1bGUnKTtcclxuICAgIGFyZWFCbGFkZXM6IEFyZWFCbGFkZXM7XHJcbiAgICBhcmVhTm90aWZpY2F0aW9uOiBBcmVhTm90aWZpY2F0aW9uOyAvLyBpcyBjcmVhdGVkIGFuZCBzZXQgaW4gJ2hvbWUnIGRpcmVjdGl2ZVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIE5nRGlhbG9nc1xyXG5cclxuICAgIG5nRGlhbG9nOiBhbnk7IC8vIGFueSBzaG91bGQgYmU6IGFuZ3VsYXIuZGlhbG9nLklEaWFsb2dTZXJ2aWNlO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIEFuZ3VsYXIgU2VydmljZXNcclxuXHJcbiAgICAkaW5qZWN0b3I6IGFueTsgLy8gYW5ndWxhci5hdXRvLklJbmplY3RvclNlcnZpY2U7XHJcbiAgICAkaHR0cDogYW55OyAvLyBhbmd1bGFyLklIdHRwU2VydmljZTtcclxuICAgICRodHRwQmFja2VuZDogYW55OyAvLyBhbmd1bGFyLklIdHRwQmFja2VuZFNlcnZpY2U7XHJcbiAgICAkcTogYW55OyAvLyBhbmd1bGFyLklRU2VydmljZTtcclxuICAgICRyb290U2NvcGU6IGFueTsgLy8gYW5ndWxhci5JUm9vdFNjb3BlU2VydmljZTtcclxuICAgICR3aW5kb3c6IGFueTsgLy8gYW5ndWxhci5JV2luZG93U2VydmljZTtcclxuICAgICR0aW1lb3V0OiBhbnk7IC8vIGFuZ3VsYXIuSVRpbWVvdXRTZXJ2aWNlO1xyXG4gICAgJHRyYW5zbGF0ZTogYW55OyAvLyBhbmd1bGFyLnRyYW5zbGF0ZS5JVHJhbnNsYXRlU2VydmljZTtcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcblxyXG4vLyBhbmd1bGFyLm1vZHVsZSgnYW5ndWxhcnBvcnRhbGF6dXJlJykuc2VydmljZSgncG9ydGFsU2VydmljZScsIFBvcnRhbFNlcnZpY2UpO1xyXG4iXX0=