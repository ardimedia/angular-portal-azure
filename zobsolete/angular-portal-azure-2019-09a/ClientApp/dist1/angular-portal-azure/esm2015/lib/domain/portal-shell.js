/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class PortalShell {
    // #region Constructor
    /**
     * @param {?} portalService
     * @param {?=} title
     */
    constructor(portalService, title = null) {
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
}
if (false) {
    /** @type {?} */
    PortalShell.prototype.portalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGFsLXNoZWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvZG9tYWluL3BvcnRhbC1zaGVsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBTUEsTUFBTSxPQUFPLFdBQVc7Ozs7OztJQUdwQixZQUFtQixhQUE0QixFQUFFLFFBQWdCLElBQUk7UUFBbEQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFFM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsd0VBQXdFO1FBRXhFLElBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbEc7YUFBTTtZQUNILElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDN0M7SUFDTCxDQUFDO0NBR0o7OztJQWJlLG9DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvcnRhbFNlcnZpY2UgfSBmcm9tICcuL3BvcnRhbC1zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGlsZXMgfSBmcm9tICcuL3RpbGVzJztcclxuaW1wb3J0IHsgVXNlckNvbnRyb2xCYXNlIH0gZnJvbSAnLi91c2VyLWNvbnRyb2wtYmFzZSc7XHJcbmltcG9ydCB7IEFyZWFCbGFkZXMgfSBmcm9tICcuL2FyZWEtYmxhZGVzJztcclxuaW1wb3J0IHsgUGFub3JhbWEgfSBmcm9tICcuL3Bhbm9yYW1hJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3J0YWxTaGVsbCB7XHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yXHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHBvcnRhbFNlcnZpY2U6IFBvcnRhbFNlcnZpY2UsIHRpdGxlOiBzdHJpbmcgPSBudWxsKSB7XHJcblxyXG4gICAgICAgIHRoaXMucG9ydGFsU2VydmljZSA9IHBvcnRhbFNlcnZpY2U7XHJcbiAgICAgICAgLy90aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEgPSBuZXcgUGFub3JhbWEodGhpcy5wb3J0YWxTZXJ2aWNlLCB0aXRsZSk7XHJcblxyXG4gICAgICAgIGlmICh0aXRsZSA9PT0gJycgfHwgdGl0bGUgPT09IG51bGwgfHwgdGl0bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEudGl0bGUgPSB0aGlzLnBvcnRhbFNlcnZpY2UuJHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19