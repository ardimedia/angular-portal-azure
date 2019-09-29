/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AreaBlades } from './area-blades';
import { AreaNotification } from './area-notification';
import { Panorama } from './panorama';
export class PortalService {
    // #region Constructor
    //static $inject = ['$injector'];
    constructor() {
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLXNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vcG9ydGFsLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUt0QyxNQUFNLE9BQU8sYUFBYTs7O0lBSXRCO1FBd0JBLGNBQVMsR0FBbUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztRQTJCMUQsYUFBUSxHQUFhLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBbERuRSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsbUJBQUssTUFBTSxFQUFBLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELDZCQUE2QjtRQUU3QixzQ0FBc0M7UUFDdEMsb0RBQW9EO1FBQ3BELGdDQUFnQztRQUNoQyxnREFBZ0Q7UUFDaEQsMENBQTBDO1FBQzFDLGdEQUFnRDtRQUNoRCw0Q0FBNEM7UUFDNUMsZ0RBQWdEO1FBRWhELGlEQUFpRDtRQUVqRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0E0REo7OztJQXRERyxtQ0FBdUI7O0lBQ3ZCLGtDQUEwRDs7SUFDMUQsbUNBQXdDOztJQXlCeEMsb0NBQXlCOztJQUN6QixpQ0FBdUU7O0lBQ3ZFLG1DQUF1Qjs7SUFDdkIseUNBQW1DOztJQU1uQyxpQ0FBYzs7SUFNZCxrQ0FBZTs7SUFDZiw4QkFBVzs7SUFDWCxxQ0FBa0I7O0lBQ2xCLDJCQUFROztJQUNSLG1DQUFnQjs7SUFDaEIsZ0NBQWE7O0lBQ2IsaUNBQWM7O0lBQ2QsbUNBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvYXBwL2FwcC5zZXJ2aWNlJztcclxuXHJcblxyXG5pbXBvcnQgeyBBcmVhQmxhZGVzIH0gZnJvbSAnLi9hcmVhLWJsYWRlcyc7XHJcbmltcG9ydCB7IEFyZWFOb3RpZmljYXRpb24gfSBmcm9tICcuL2FyZWEtbm90aWZpY2F0aW9uJztcclxuaW1wb3J0IHsgQmxhZGVQYXJhbWV0ZXIgfSBmcm9tICcuL2JsYWRlLXBhcmFtZXRlcic7XHJcbmltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYSc7XHJcbmltcG9ydCB7IFBvcnRhbFNoZWxsIH0gZnJvbSAnLi9wb3J0YWwtc2hlbGwnO1xyXG5pbXBvcnQgeyBBbmd1bGFydGljczJNb2R1bGUgfSBmcm9tICdhbmd1bGFydGljczInO1xyXG5pbXBvcnQgeyBBbmd1bGFydGljczJHb29nbGVBbmFseXRpY3MgfSBmcm9tICdhbmd1bGFydGljczIvZ2EnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcnRhbFNlcnZpY2Uge1xyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvclxyXG5cclxuICAgIC8vc3RhdGljICRpbmplY3QgPSBbJyRpbmplY3RvciddO1xyXG4gICAgY29uc3RydWN0b3IoKSB7IC8vICRpbmplY3RvcjogYW55LCBhbmd1bGFydGljczJHb29nbGVBbmFseXRpY3M6IEFuZ3VsYXJ0aWNzMkdvb2dsZUFuYWx5dGljc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHsgUG9ydGFsU2VydmljZTogKDxhbnk+T2JqZWN0KS5pZCh0aGlzKSB9KTtcclxuICAgICAgICAvL3RoaXMuJGluamVjdG9yID0gJGluamVjdG9yO1xyXG5cclxuICAgICAgICAvL3RoaXMuJGh0dHAgPSAkaW5qZWN0b3IuZ2V0KCckaHR0cCcpO1xyXG4gICAgICAgIC8vdGhpcy4kaHR0cEJhY2tlbmQgPSAkaW5qZWN0b3IuZ2V0KCckaHR0cEJhY2tlbmQnKTtcclxuICAgICAgICAvL3RoaXMuJHEgPSAkaW5qZWN0b3IuZ2V0KCckcScpO1xyXG4gICAgICAgIC8vdGhpcy4kcm9vdFNjb3BlID0gJGluamVjdG9yLmdldCgnJHJvb3RTY29wZScpO1xyXG4gICAgICAgIC8vdGhpcy4kd2luZG93ID0gJGluamVjdG9yLmdldCgnJHdpbmRvdycpO1xyXG4gICAgICAgIC8vdGhpcy4kYW5hbHl0aWNzID0gJGluamVjdG9yLmdldCgnJGFuYWx5dGljcycpO1xyXG4gICAgICAgIC8vdGhpcy4kdGltZW91dCA9ICRpbmplY3Rvci5nZXQoJyR0aW1lb3V0Jyk7XHJcbiAgICAgICAgLy90aGlzLiR0cmFuc2xhdGUgPSAkaW5qZWN0b3IuZ2V0KCckdHJhbnNsYXRlJyk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5uZ0RpYWxvZyA9IDxhbnk+JGluamVjdG9yLmdldCgnbmdEaWFsb2cnKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcmVhQmxhZGVzID0gbmV3IEFyZWFCbGFkZXModGhpcyk7XHJcbiAgICAgICAgdGhpcy5hcmVhTm90aWZpY2F0aW9uID0gbmV3IEFyZWFOb3RpZmljYXRpb24odGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xyXG5cclxuICAgIGFwcFNlcnZpY2U6IEFwcFNlcnZpY2U7XHJcbiAgICBwYXJhbWV0ZXI6IEJsYWRlUGFyYW1ldGVyID0geyBhY3Rpb246ICdub25lJywgaXRlbUlkOiAwIH07XHJcbiAgICAkYW5hbHl0aWNzOiBBbmd1bGFydGljczJHb29nbGVBbmFseXRpY3M7XHJcblxyXG4gICAgLy8gI3JlZ2lvbiBuZy5JTW9kdWxlIHByb3BlcnRpZXNcclxuXHJcbiAgICAvL2FuaW1hdGU7XHJcbiAgICAvL2FuaW1hdGlvbjtcclxuICAgIC8vY29tcG9uZW50O1xyXG4gICAgLy9jb25maWc7XHJcbiAgICAvL2NvbnN0YW50O1xyXG4gICAgLy9jb250cm9sbGVyO1xyXG4gICAgLy9kaXJlY3RpdmU7XHJcbiAgICAvL2ZhY3Rvcnk7XHJcbiAgICAvL2ZpbHRlcjtcclxuICAgIC8vcHJvdmlkZXI7XHJcbiAgICAvL3J1bjtcclxuICAgIC8vc2VydmljZTtcclxuICAgIC8vdmFsdWU7XHJcbiAgICAvL2RlY29yYXRvcjtcclxuICAgIC8vbmFtZTtcclxuICAgIC8vcmVxdWlyZXM7XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gVmlzdWFsIGNvbXBvbmVudHNcclxuXHJcbiAgICBwb3J0YWxTaGVsbDogUG9ydGFsU2hlbGw7XHJcbiAgICBwYW5vcmFtYTogUGFub3JhbWEgPSBuZXcgUGFub3JhbWEodGhpcywgJ2FuZ3VsYXItcG9ydGFsLWF6dXJlLW1vZHVsZScpO1xyXG4gICAgYXJlYUJsYWRlczogQXJlYUJsYWRlcztcclxuICAgIGFyZWFOb3RpZmljYXRpb246IEFyZWFOb3RpZmljYXRpb247IC8vIGlzIGNyZWF0ZWQgYW5kIHNldCBpbiAnaG9tZScgZGlyZWN0aXZlXHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gTmdEaWFsb2dzXHJcblxyXG4gICAgbmdEaWFsb2c6IGFueTsgLy8gYW55IHNob3VsZCBiZTogYW5ndWxhci5kaWFsb2cuSURpYWxvZ1NlcnZpY2U7XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gQW5ndWxhciBTZXJ2aWNlc1xyXG5cclxuICAgICRpbmplY3RvcjogYW55OyAvLyBhbmd1bGFyLmF1dG8uSUluamVjdG9yU2VydmljZTtcclxuICAgICRodHRwOiBhbnk7IC8vIGFuZ3VsYXIuSUh0dHBTZXJ2aWNlO1xyXG4gICAgJGh0dHBCYWNrZW5kOiBhbnk7IC8vIGFuZ3VsYXIuSUh0dHBCYWNrZW5kU2VydmljZTtcclxuICAgICRxOiBhbnk7IC8vIGFuZ3VsYXIuSVFTZXJ2aWNlO1xyXG4gICAgJHJvb3RTY29wZTogYW55OyAvLyBhbmd1bGFyLklSb290U2NvcGVTZXJ2aWNlO1xyXG4gICAgJHdpbmRvdzogYW55OyAvLyBhbmd1bGFyLklXaW5kb3dTZXJ2aWNlO1xyXG4gICAgJHRpbWVvdXQ6IGFueTsgLy8gYW5ndWxhci5JVGltZW91dFNlcnZpY2U7XHJcbiAgICAkdHJhbnNsYXRlOiBhbnk7IC8vIGFuZ3VsYXIudHJhbnNsYXRlLklUcmFuc2xhdGVTZXJ2aWNlO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuXHJcbi8vIGFuZ3VsYXIubW9kdWxlKCdhbmd1bGFycG9ydGFsYXp1cmUnKS5zZXJ2aWNlKCdwb3J0YWxTZXJ2aWNlJywgUG9ydGFsU2VydmljZSk7XHJcbiJdfQ==