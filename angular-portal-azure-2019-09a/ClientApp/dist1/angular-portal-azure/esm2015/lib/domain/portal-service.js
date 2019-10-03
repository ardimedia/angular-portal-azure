/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AreaBlades } from './area-blades';
import { AreaNotification } from './area-notification';
import { Panorama } from './panorama';
export class PortalService {
    // #region Constructor
    //static $inject = ['$injector'];
    constructor() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLXNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vcG9ydGFsLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUt0QyxNQUFNLE9BQU8sYUFBYTs7O0lBSXRCO1FBQ0ksNkJBQTZCO1FBc0JqQyxjQUFTLEdBQW1CLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUEyQjFELGFBQVEsR0FBYSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQS9DbkUsc0NBQXNDO1FBQ3RDLG9EQUFvRDtRQUNwRCxnQ0FBZ0M7UUFDaEMsZ0RBQWdEO1FBQ2hELDBDQUEwQztRQUMxQyxnREFBZ0Q7UUFDaEQsNENBQTRDO1FBQzVDLGdEQUFnRDtRQUVoRCxpREFBaUQ7UUFFakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0NBNERKOzs7SUF0REcsbUNBQXVCOztJQUN2QixrQ0FBMEQ7O0lBQzFELG1DQUF3Qzs7SUF5QnhDLG9DQUF5Qjs7SUFDekIsaUNBQXVFOztJQUN2RSxtQ0FBdUI7O0lBQ3ZCLHlDQUFtQzs7SUFNbkMsaUNBQWM7O0lBTWQsa0NBQWU7O0lBQ2YsOEJBQVc7O0lBQ1gscUNBQWtCOztJQUNsQiwyQkFBUTs7SUFDUixtQ0FBZ0I7O0lBQ2hCLGdDQUFhOztJQUNiLGlDQUFjOztJQUNkLG1DQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2FwcC9hcHAuc2VydmljZSc7XHJcblxyXG5cclxuaW1wb3J0IHsgQXJlYUJsYWRlcyB9IGZyb20gJy4vYXJlYS1ibGFkZXMnO1xyXG5pbXBvcnQgeyBBcmVhTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9hcmVhLW5vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7IEJsYWRlUGFyYW1ldGVyIH0gZnJvbSAnLi9ibGFkZS1wYXJhbWV0ZXInO1xyXG5pbXBvcnQgeyBQYW5vcmFtYSB9IGZyb20gJy4vcGFub3JhbWEnO1xyXG5pbXBvcnQgeyBQb3J0YWxTaGVsbCB9IGZyb20gJy4vcG9ydGFsLXNoZWxsJztcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyTW9kdWxlIH0gZnJvbSAnYW5ndWxhcnRpY3MyJztcclxuaW1wb3J0IHsgQW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzIH0gZnJvbSAnYW5ndWxhcnRpY3MyL2dhJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3J0YWxTZXJ2aWNlIHtcclxuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JcclxuXHJcbiAgICAvL3N0YXRpYyAkaW5qZWN0ID0gWyckaW5qZWN0b3InXTtcclxuICAgIGNvbnN0cnVjdG9yKCkgeyAvLyAkaW5qZWN0b3I6IGFueSwgYW5ndWxhcnRpY3MyR29vZ2xlQW5hbHl0aWNzOiBBbmd1bGFydGljczJHb29nbGVBbmFseXRpY3NcclxuICAgICAgICAvL3RoaXMuJGluamVjdG9yID0gJGluamVjdG9yO1xyXG5cclxuICAgICAgICAvL3RoaXMuJGh0dHAgPSAkaW5qZWN0b3IuZ2V0KCckaHR0cCcpO1xyXG4gICAgICAgIC8vdGhpcy4kaHR0cEJhY2tlbmQgPSAkaW5qZWN0b3IuZ2V0KCckaHR0cEJhY2tlbmQnKTtcclxuICAgICAgICAvL3RoaXMuJHEgPSAkaW5qZWN0b3IuZ2V0KCckcScpO1xyXG4gICAgICAgIC8vdGhpcy4kcm9vdFNjb3BlID0gJGluamVjdG9yLmdldCgnJHJvb3RTY29wZScpO1xyXG4gICAgICAgIC8vdGhpcy4kd2luZG93ID0gJGluamVjdG9yLmdldCgnJHdpbmRvdycpO1xyXG4gICAgICAgIC8vdGhpcy4kYW5hbHl0aWNzID0gJGluamVjdG9yLmdldCgnJGFuYWx5dGljcycpO1xyXG4gICAgICAgIC8vdGhpcy4kdGltZW91dCA9ICRpbmplY3Rvci5nZXQoJyR0aW1lb3V0Jyk7XHJcbiAgICAgICAgLy90aGlzLiR0cmFuc2xhdGUgPSAkaW5qZWN0b3IuZ2V0KCckdHJhbnNsYXRlJyk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5uZ0RpYWxvZyA9IDxhbnk+JGluamVjdG9yLmdldCgnbmdEaWFsb2cnKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcmVhQmxhZGVzID0gbmV3IEFyZWFCbGFkZXModGhpcyk7XHJcbiAgICAgICAgdGhpcy5hcmVhTm90aWZpY2F0aW9uID0gbmV3IEFyZWFOb3RpZmljYXRpb24odGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xyXG5cclxuICAgIGFwcFNlcnZpY2U6IEFwcFNlcnZpY2U7XHJcbiAgICBwYXJhbWV0ZXI6IEJsYWRlUGFyYW1ldGVyID0geyBhY3Rpb246ICdub25lJywgaXRlbUlkOiAwIH07XHJcbiAgICAkYW5hbHl0aWNzOiBBbmd1bGFydGljczJHb29nbGVBbmFseXRpY3M7XHJcblxyXG4gICAgLy8gI3JlZ2lvbiBuZy5JTW9kdWxlIHByb3BlcnRpZXNcclxuXHJcbiAgICAvL2FuaW1hdGU7XHJcbiAgICAvL2FuaW1hdGlvbjtcclxuICAgIC8vY29tcG9uZW50O1xyXG4gICAgLy9jb25maWc7XHJcbiAgICAvL2NvbnN0YW50O1xyXG4gICAgLy9jb250cm9sbGVyO1xyXG4gICAgLy9kaXJlY3RpdmU7XHJcbiAgICAvL2ZhY3Rvcnk7XHJcbiAgICAvL2ZpbHRlcjtcclxuICAgIC8vcHJvdmlkZXI7XHJcbiAgICAvL3J1bjtcclxuICAgIC8vc2VydmljZTtcclxuICAgIC8vdmFsdWU7XHJcbiAgICAvL2RlY29yYXRvcjtcclxuICAgIC8vbmFtZTtcclxuICAgIC8vcmVxdWlyZXM7XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gVmlzdWFsIGNvbXBvbmVudHNcclxuXHJcbiAgICBwb3J0YWxTaGVsbDogUG9ydGFsU2hlbGw7XHJcbiAgICBwYW5vcmFtYTogUGFub3JhbWEgPSBuZXcgUGFub3JhbWEodGhpcywgJ2FuZ3VsYXItcG9ydGFsLWF6dXJlLW1vZHVsZScpO1xyXG4gICAgYXJlYUJsYWRlczogQXJlYUJsYWRlcztcclxuICAgIGFyZWFOb3RpZmljYXRpb246IEFyZWFOb3RpZmljYXRpb247IC8vIGlzIGNyZWF0ZWQgYW5kIHNldCBpbiAnaG9tZScgZGlyZWN0aXZlXHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gTmdEaWFsb2dzXHJcblxyXG4gICAgbmdEaWFsb2c6IGFueTsgLy8gYW55IHNob3VsZCBiZTogYW5ndWxhci5kaWFsb2cuSURpYWxvZ1NlcnZpY2U7XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gQW5ndWxhciBTZXJ2aWNlc1xyXG5cclxuICAgICRpbmplY3RvcjogYW55OyAvLyBhbmd1bGFyLmF1dG8uSUluamVjdG9yU2VydmljZTtcclxuICAgICRodHRwOiBhbnk7IC8vIGFuZ3VsYXIuSUh0dHBTZXJ2aWNlO1xyXG4gICAgJGh0dHBCYWNrZW5kOiBhbnk7IC8vIGFuZ3VsYXIuSUh0dHBCYWNrZW5kU2VydmljZTtcclxuICAgICRxOiBhbnk7IC8vIGFuZ3VsYXIuSVFTZXJ2aWNlO1xyXG4gICAgJHJvb3RTY29wZTogYW55OyAvLyBhbmd1bGFyLklSb290U2NvcGVTZXJ2aWNlO1xyXG4gICAgJHdpbmRvdzogYW55OyAvLyBhbmd1bGFyLklXaW5kb3dTZXJ2aWNlO1xyXG4gICAgJHRpbWVvdXQ6IGFueTsgLy8gYW5ndWxhci5JVGltZW91dFNlcnZpY2U7XHJcbiAgICAkdHJhbnNsYXRlOiBhbnk7IC8vIGFuZ3VsYXIudHJhbnNsYXRlLklUcmFuc2xhdGVTZXJ2aWNlO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuXHJcbi8vIGFuZ3VsYXIubW9kdWxlKCdhbmd1bGFycG9ydGFsYXp1cmUnKS5zZXJ2aWNlKCdwb3J0YWxTZXJ2aWNlJywgUG9ydGFsU2VydmljZSk7XHJcbiJdfQ==