/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef } from "@angular/core";
import { Router, RouterOutlet, ChildrenOutletContexts } from "@angular/router";
// #region README
// <router-outlet> does not yet support a dynamic [name] attribute
// During ng build, we get the following error:
// > ERROR: Can't bind to 'name' since it isn't a known property of 'router-outlet'.
// Therefore we have implemented this. Usage:
// <router-outlet-named [name]="name1">
// #endregion
export class RouterOutletNamedDirective {
    // #endregion
    // #region Properties
    /**
     * @param {?} parentContexts
     * @param {?} location
     * @param {?} resolver
     * @param {?} changeDetector
     * @param {?} router
     */
    constructor(parentContexts, location, resolver, changeDetector, router) {
        this.parentContexts = parentContexts;
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        this.router = router;
    }
    // #endregion
    // #region Angular Methods
    /**
     * @return {?}
     */
    ngOnInit() {
        this.outlet = new RouterOutlet(this.parentContexts, this.location, this.resolver, this.name, this.changeDetector);
        this.outlet.ngOnInit();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.outlet) {
            this.outlet.ngOnDestroy();
        }
    }
}
RouterOutletNamedDirective.decorators = [
    { type: Directive, args: [{
                selector: 'router-outlet-named',
                exportAs: 'outlet'
            },] }
];
/** @nocollapse */
RouterOutletNamedDirective.ctorParameters = () => [
    { type: ChildrenOutletContexts },
    { type: ViewContainerRef },
    { type: ComponentFactoryResolver },
    { type: ChangeDetectorRef },
    { type: Router }
];
RouterOutletNamedDirective.propDecorators = {
    name: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RouterOutletNamedDirective.prototype.outlet;
    /** @type {?} */
    RouterOutletNamedDirective.prototype.name;
    /**
     * @type {?}
     * @private
     */
    RouterOutletNamedDirective.prototype.parentContexts;
    /**
     * @type {?}
     * @private
     */
    RouterOutletNamedDirective.prototype.location;
    /**
     * @type {?}
     * @private
     */
    RouterOutletNamedDirective.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    RouterOutletNamedDirective.prototype.changeDetector;
    /**
     * @type {?}
     * @private
     */
    RouterOutletNamedDirective.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLW91dGxldC1uYW1lZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvcm91dGVyLW91dGxldC1uYW1lZC9yb3V0ZXItb3V0bGV0LW5hbWVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLHdCQUF3QixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7O0FBZ0IvRSxNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7Ozs7O0lBVW5DLFlBQ1ksY0FBc0MsRUFDdEMsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsY0FBaUMsRUFDakMsTUFBYztRQUpkLG1CQUFjLEdBQWQsY0FBYyxDQUF3QjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUN0QixDQUFDOzs7Ozs7SUFNTCxRQUFRO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7OztZQW5DSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLFFBQVE7YUFDckI7Ozs7WUFmOEIsc0JBQXNCO1lBRG1CLGdCQUFnQjtZQUExQyx3QkFBd0I7WUFBb0IsaUJBQWlCO1lBQ2xHLE1BQU07OzttQkFvQlYsS0FBSzs7OztJQUROLDRDQUE0Qjs7SUFDNUIsMENBQTZCOzs7OztJQU96QixvREFBOEM7Ozs7O0lBQzlDLDhDQUFrQzs7Ozs7SUFDbEMsOENBQTBDOzs7OztJQUMxQyxvREFBeUM7Ozs7O0lBQ3pDLDRDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJPdXRsZXQsIENoaWxkcmVuT3V0bGV0Q29udGV4dHMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG4vLyAjcmVnaW9uIFJFQURNRVxyXG5cclxuLy8gPHJvdXRlci1vdXRsZXQ+IGRvZXMgbm90IHlldCBzdXBwb3J0IGEgZHluYW1pYyBbbmFtZV0gYXR0cmlidXRlXHJcbi8vIER1cmluZyBuZyBidWlsZCwgd2UgZ2V0IHRoZSBmb2xsb3dpbmcgZXJyb3I6XHJcbi8vID4gRVJST1I6IENhbid0IGJpbmQgdG8gJ25hbWUnIHNpbmNlIGl0IGlzbid0IGEga25vd24gcHJvcGVydHkgb2YgJ3JvdXRlci1vdXRsZXQnLlxyXG4vLyBUaGVyZWZvcmUgd2UgaGF2ZSBpbXBsZW1lbnRlZCB0aGlzLiBVc2FnZTpcclxuLy8gPHJvdXRlci1vdXRsZXQtbmFtZWQgW25hbWVdPVwibmFtZTFcIj5cclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdyb3V0ZXItb3V0bGV0LW5hbWVkJyxcclxuICAgIGV4cG9ydEFzOiAnb3V0bGV0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUm91dGVyT3V0bGV0TmFtZWREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcclxuXHJcbiAgICBwdWJsaWMgb3V0bGV0OiBSb3V0ZXJPdXRsZXQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBhcmVudENvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLFxyXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICApIHsgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIEFuZ3VsYXIgTWV0aG9kc1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMub3V0bGV0ID0gbmV3IFJvdXRlck91dGxldCh0aGlzLnBhcmVudENvbnRleHRzLCB0aGlzLmxvY2F0aW9uLCB0aGlzLnJlc29sdmVyLCB0aGlzLm5hbWUsIHRoaXMuY2hhbmdlRGV0ZWN0b3IpO1xyXG4gICAgICAgIHRoaXMub3V0bGV0Lm5nT25Jbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3V0bGV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0bGV0Lm5nT25EZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=