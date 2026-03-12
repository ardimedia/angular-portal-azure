/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AreaBlades } from './area-blades';
import { AreaNotification } from './area-notification';
import { Panorama } from './panorama';
var PortalService = /** @class */ (function () {
    // #region Constructor
    //static $inject = ['$injector'];
    function PortalService() {
        //this.$injector = $injector;
        this.parameter = { action: 'none', itemId: 0 };
        this.panorama = new Panorama(this, 'angular-portal-azure-module');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLXNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vcG9ydGFsLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUt0QztJQUNJLHNCQUFzQjtJQUV0QixpQ0FBaUM7SUFDakM7UUFDSSw2QkFBNkI7UUFzQmpDLGNBQVMsR0FBbUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztRQTJCMUQsYUFBUSxHQUFhLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBL0NuRSxzQ0FBc0M7UUFDdEMsb0RBQW9EO1FBQ3BELGdDQUFnQztRQUNoQyxnREFBZ0Q7UUFDaEQsMENBQTBDO1FBQzFDLGdEQUFnRDtRQUNoRCw0Q0FBNEM7UUFDNUMsZ0RBQWdEO1FBRWhELGlEQUFpRDtRQUVqRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUE0REwsb0JBQUM7QUFBRCxDQUFDLEFBaEZELElBZ0ZDOzs7O0lBdERHLG1DQUF1Qjs7SUFDdkIsa0NBQTBEOztJQUMxRCxtQ0FBd0M7O0lBeUJ4QyxvQ0FBeUI7O0lBQ3pCLGlDQUF1RTs7SUFDdkUsbUNBQXVCOztJQUN2Qix5Q0FBbUM7O0lBTW5DLGlDQUFjOztJQU1kLGtDQUFlOztJQUNmLDhCQUFXOztJQUNYLHFDQUFrQjs7SUFDbEIsMkJBQVE7O0lBQ1IsbUNBQWdCOztJQUNoQixnQ0FBYTs7SUFDYixpQ0FBYzs7SUFDZCxtQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9hcHAvYXBwLnNlcnZpY2UnO1xyXG5cclxuXHJcbmltcG9ydCB7IEFyZWFCbGFkZXMgfSBmcm9tICcuL2FyZWEtYmxhZGVzJztcclxuaW1wb3J0IHsgQXJlYU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vYXJlYS1ub3RpZmljYXRpb24nO1xyXG5pbXBvcnQgeyBCbGFkZVBhcmFtZXRlciB9IGZyb20gJy4vYmxhZGUtcGFyYW1ldGVyJztcclxuaW1wb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hJztcclxuaW1wb3J0IHsgUG9ydGFsU2hlbGwgfSBmcm9tICcuL3BvcnRhbC1zaGVsbCc7XHJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMk1vZHVsZSB9IGZyb20gJ2FuZ3VsYXJ0aWNzMic7XHJcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljcyB9IGZyb20gJ2FuZ3VsYXJ0aWNzMi9nYSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9ydGFsU2VydmljZSB7XHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yXHJcblxyXG4gICAgLy9zdGF0aWMgJGluamVjdCA9IFsnJGluamVjdG9yJ107XHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgLy8gJGluamVjdG9yOiBhbnksIGFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljczogQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzXHJcbiAgICAgICAgLy90aGlzLiRpbmplY3RvciA9ICRpbmplY3RvcjtcclxuXHJcbiAgICAgICAgLy90aGlzLiRodHRwID0gJGluamVjdG9yLmdldCgnJGh0dHAnKTtcclxuICAgICAgICAvL3RoaXMuJGh0dHBCYWNrZW5kID0gJGluamVjdG9yLmdldCgnJGh0dHBCYWNrZW5kJyk7XHJcbiAgICAgICAgLy90aGlzLiRxID0gJGluamVjdG9yLmdldCgnJHEnKTtcclxuICAgICAgICAvL3RoaXMuJHJvb3RTY29wZSA9ICRpbmplY3Rvci5nZXQoJyRyb290U2NvcGUnKTtcclxuICAgICAgICAvL3RoaXMuJHdpbmRvdyA9ICRpbmplY3Rvci5nZXQoJyR3aW5kb3cnKTtcclxuICAgICAgICAvL3RoaXMuJGFuYWx5dGljcyA9ICRpbmplY3Rvci5nZXQoJyRhbmFseXRpY3MnKTtcclxuICAgICAgICAvL3RoaXMuJHRpbWVvdXQgPSAkaW5qZWN0b3IuZ2V0KCckdGltZW91dCcpO1xyXG4gICAgICAgIC8vdGhpcy4kdHJhbnNsYXRlID0gJGluamVjdG9yLmdldCgnJHRyYW5zbGF0ZScpO1xyXG5cclxuICAgICAgICAvL3RoaXMubmdEaWFsb2cgPSA8YW55PiRpbmplY3Rvci5nZXQoJ25nRGlhbG9nJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYXJlYUJsYWRlcyA9IG5ldyBBcmVhQmxhZGVzKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXJlYU5vdGlmaWNhdGlvbiA9IG5ldyBBcmVhTm90aWZpY2F0aW9uKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcclxuXHJcbiAgICBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlO1xyXG4gICAgcGFyYW1ldGVyOiBCbGFkZVBhcmFtZXRlciA9IHsgYWN0aW9uOiAnbm9uZScsIGl0ZW1JZDogMCB9O1xyXG4gICAgJGFuYWx5dGljczogQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzO1xyXG5cclxuICAgIC8vICNyZWdpb24gbmcuSU1vZHVsZSBwcm9wZXJ0aWVzXHJcblxyXG4gICAgLy9hbmltYXRlO1xyXG4gICAgLy9hbmltYXRpb247XHJcbiAgICAvL2NvbXBvbmVudDtcclxuICAgIC8vY29uZmlnO1xyXG4gICAgLy9jb25zdGFudDtcclxuICAgIC8vY29udHJvbGxlcjtcclxuICAgIC8vZGlyZWN0aXZlO1xyXG4gICAgLy9mYWN0b3J5O1xyXG4gICAgLy9maWx0ZXI7XHJcbiAgICAvL3Byb3ZpZGVyO1xyXG4gICAgLy9ydW47XHJcbiAgICAvL3NlcnZpY2U7XHJcbiAgICAvL3ZhbHVlO1xyXG4gICAgLy9kZWNvcmF0b3I7XHJcbiAgICAvL25hbWU7XHJcbiAgICAvL3JlcXVpcmVzO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFZpc3VhbCBjb21wb25lbnRzXHJcblxyXG4gICAgcG9ydGFsU2hlbGw6IFBvcnRhbFNoZWxsO1xyXG4gICAgcGFub3JhbWE6IFBhbm9yYW1hID0gbmV3IFBhbm9yYW1hKHRoaXMsICdhbmd1bGFyLXBvcnRhbC1henVyZS1tb2R1bGUnKTtcclxuICAgIGFyZWFCbGFkZXM6IEFyZWFCbGFkZXM7XHJcbiAgICBhcmVhTm90aWZpY2F0aW9uOiBBcmVhTm90aWZpY2F0aW9uOyAvLyBpcyBjcmVhdGVkIGFuZCBzZXQgaW4gJ2hvbWUnIGRpcmVjdGl2ZVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIE5nRGlhbG9nc1xyXG5cclxuICAgIG5nRGlhbG9nOiBhbnk7IC8vIGFueSBzaG91bGQgYmU6IGFuZ3VsYXIuZGlhbG9nLklEaWFsb2dTZXJ2aWNlO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIEFuZ3VsYXIgU2VydmljZXNcclxuXHJcbiAgICAkaW5qZWN0b3I6IGFueTsgLy8gYW5ndWxhci5hdXRvLklJbmplY3RvclNlcnZpY2U7XHJcbiAgICAkaHR0cDogYW55OyAvLyBhbmd1bGFyLklIdHRwU2VydmljZTtcclxuICAgICRodHRwQmFja2VuZDogYW55OyAvLyBhbmd1bGFyLklIdHRwQmFja2VuZFNlcnZpY2U7XHJcbiAgICAkcTogYW55OyAvLyBhbmd1bGFyLklRU2VydmljZTtcclxuICAgICRyb290U2NvcGU6IGFueTsgLy8gYW5ndWxhci5JUm9vdFNjb3BlU2VydmljZTtcclxuICAgICR3aW5kb3c6IGFueTsgLy8gYW5ndWxhci5JV2luZG93U2VydmljZTtcclxuICAgICR0aW1lb3V0OiBhbnk7IC8vIGFuZ3VsYXIuSVRpbWVvdXRTZXJ2aWNlO1xyXG4gICAgJHRyYW5zbGF0ZTogYW55OyAvLyBhbmd1bGFyLnRyYW5zbGF0ZS5JVHJhbnNsYXRlU2VydmljZTtcclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcblxyXG4vLyBhbmd1bGFyLm1vZHVsZSgnYW5ndWxhcnBvcnRhbGF6dXJlJykuc2VydmljZSgncG9ydGFsU2VydmljZScsIFBvcnRhbFNlcnZpY2UpO1xyXG4iXX0=