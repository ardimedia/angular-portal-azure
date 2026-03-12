/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PortalShell = /** @class */ (function () {
    // #region Constructor
    function PortalShell(portalService, title) {
        if (title === void 0) { title = null; }
        this.portalService = portalService;
        this.portalService = portalService;
        //this.portalService.panorama = new Panorama(this.portalService, title);
        if (title === '' || title === null || title === undefined) {
            this.portalService.panorama.title = this.portalService.$window.location.hostname.toLowerCase();
        }
        else {
            this.portalService.panorama.title = title;
        }
    }
    return PortalShell;
}());
export { PortalShell };
if (false) {
    /** @type {?} */
    PortalShell.prototype.portalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLXNoZWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvZG9tYWluL3BvcnRhbC1zaGVsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUE7SUFDSSxzQkFBc0I7SUFFdEIscUJBQW1CLGFBQTRCLEVBQUUsS0FBb0I7UUFBcEIsc0JBQUEsRUFBQSxZQUFvQjtRQUFsRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUUzQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyx3RUFBd0U7UUFFeEUsSUFBSSxLQUFLLEtBQUssRUFBRSxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2RCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNsRzthQUFNO1lBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUM3QztJQUNMLENBQUM7SUFHTCxrQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7Ozs7SUFiZSxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi9wb3J0YWwtc2VydmljZSc7XHJcbmltcG9ydCB7IFRpbGVzIH0gZnJvbSAnLi90aWxlcyc7XHJcbmltcG9ydCB7IFVzZXJDb250cm9sQmFzZSB9IGZyb20gJy4vdXNlci1jb250cm9sLWJhc2UnO1xyXG5pbXBvcnQgeyBBcmVhQmxhZGVzIH0gZnJvbSAnLi9hcmVhLWJsYWRlcyc7XHJcbmltcG9ydCB7IFBhbm9yYW1hIH0gZnJvbSAnLi9wYW5vcmFtYSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9ydGFsU2hlbGwge1xyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvclxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlLCB0aXRsZTogc3RyaW5nID0gbnVsbCkge1xyXG5cclxuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UgPSBwb3J0YWxTZXJ2aWNlO1xyXG4gICAgICAgIC8vdGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hID0gbmV3IFBhbm9yYW1hKHRoaXMucG9ydGFsU2VydmljZSwgdGl0bGUpO1xyXG5cclxuICAgICAgICBpZiAodGl0bGUgPT09ICcnIHx8IHRpdGxlID09PSBudWxsIHx8IHRpdGxlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hLnRpdGxlID0gdGhpcy5wb3J0YWxTZXJ2aWNlLiR3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==