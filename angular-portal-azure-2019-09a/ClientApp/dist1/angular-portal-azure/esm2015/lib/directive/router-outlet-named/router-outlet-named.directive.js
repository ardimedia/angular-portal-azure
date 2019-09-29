/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef } from "@angular/core";
import { RouterOutlet, ChildrenOutletContexts } from "@angular/router";
// #region README
// <router-outlet> does not yet support a [name] attribute, therefore we have implemented this. Usage:
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
     */
    constructor(parentContexts, location, resolver, changeDetector) {
        this.parentContexts = parentContexts;
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
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
    { type: ChangeDetectorRef }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLW91dGxldC1uYW1lZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvcm91dGVyLW91dGxldC1uYW1lZC9yb3V0ZXItb3V0bGV0LW5hbWVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLHdCQUF3QixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFhdkUsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7Ozs7O0lBVW5DLFlBQ1ksY0FBc0MsRUFDdEMsUUFBMEIsRUFDMUIsUUFBa0MsRUFDbEMsY0FBaUM7UUFIakMsbUJBQWMsR0FBZCxjQUFjLENBQXdCO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQTBCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtJQUN6QyxDQUFDOzs7Ozs7SUFNTCxRQUFRO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsSCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUM3QjtJQUNMLENBQUM7OztZQWxDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLFFBQVE7YUFDckI7Ozs7WUFac0Isc0JBQXNCO1lBRDJCLGdCQUFnQjtZQUExQyx3QkFBd0I7WUFBb0IsaUJBQWlCOzs7bUJBa0J0RyxLQUFLOzs7O0lBRE4sNENBQTRCOztJQUM1QiwwQ0FBNkI7Ozs7O0lBT3pCLG9EQUE4Qzs7Ozs7SUFDOUMsOENBQWtDOzs7OztJQUNsQyw4Q0FBMEM7Ozs7O0lBQzFDLG9EQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBPbkRlc3Ryb3ksIElucHV0LCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFZpZXdDb250YWluZXJSZWYsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyT3V0bGV0LCBDaGlsZHJlbk91dGxldENvbnRleHRzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuLy8gI3JlZ2lvbiBSRUFETUVcclxuXHJcbi8vIDxyb3V0ZXItb3V0bGV0PiBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBhIFtuYW1lXSBhdHRyaWJ1dGUsIHRoZXJlZm9yZSB3ZSBoYXZlIGltcGxlbWVudGVkIHRoaXMuIFVzYWdlOlxyXG4vLyA8cm91dGVyLW91dGxldC1uYW1lZCBbbmFtZV09XCJuYW1lMVwiPlxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ3JvdXRlci1vdXRsZXQtbmFtZWQnLFxyXG4gICAgZXhwb3J0QXM6ICdvdXRsZXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSb3V0ZXJPdXRsZXROYW1lZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xyXG5cclxuICAgIHB1YmxpYyBvdXRsZXQ6IFJvdXRlck91dGxldDtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGFyZW50Q29udGV4dHM6IENoaWxkcmVuT3V0bGV0Q29udGV4dHMsXHJcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvbjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICApIHsgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIEFuZ3VsYXIgTWV0aG9kc1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMub3V0bGV0ID0gbmV3IFJvdXRlck91dGxldCh0aGlzLnBhcmVudENvbnRleHRzLCB0aGlzLmxvY2F0aW9uLCB0aGlzLnJlc29sdmVyLCB0aGlzLm5hbWUsIHRoaXMuY2hhbmdlRGV0ZWN0b3IpO1xyXG4gICAgICAgIHRoaXMub3V0bGV0Lm5nT25Jbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3V0bGV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3V0bGV0Lm5nT25EZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=