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
var RouterOutletNamedDirective = /** @class */ (function () {
    // #endregion
    // #region Properties
    function RouterOutletNamedDirective(parentContexts, location, resolver, changeDetector) {
        this.parentContexts = parentContexts;
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
    }
    // #endregion
    // #region Angular Methods
    // #endregion
    // #region Angular Methods
    /**
     * @return {?}
     */
    RouterOutletNamedDirective.prototype.ngOnInit = 
    // #endregion
    // #region Angular Methods
    /**
     * @return {?}
     */
    function () {
        this.outlet = new RouterOutlet(this.parentContexts, this.location, this.resolver, this.name, this.changeDetector);
        this.outlet.ngOnInit();
    };
    /**
     * @return {?}
     */
    RouterOutletNamedDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.outlet) {
            this.outlet.ngOnDestroy();
        }
    };
    RouterOutletNamedDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'router-outlet-named',
                    exportAs: 'outlet'
                },] }
    ];
    /** @nocollapse */
    RouterOutletNamedDirective.ctorParameters = function () { return [
        { type: ChildrenOutletContexts },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: ChangeDetectorRef }
    ]; };
    RouterOutletNamedDirective.propDecorators = {
        name: [{ type: Input }]
    };
    return RouterOutletNamedDirective;
}());
export { RouterOutletNamedDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLW91dGxldC1uYW1lZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvcm91dGVyLW91dGxldC1uYW1lZC9yb3V0ZXItb3V0bGV0LW5hbWVkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFFLHdCQUF3QixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25JLE9BQU8sRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFTdkU7SUFVSSxhQUFhO0lBRWIscUJBQXFCO0lBRXJCLG9DQUNZLGNBQXNDLEVBQ3RDLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLGNBQWlDO1FBSGpDLG1CQUFjLEdBQWQsY0FBYyxDQUF3QjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFrQjtRQUMxQixhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7SUFDekMsQ0FBQztJQUVMLGFBQWE7SUFFYiwwQkFBMEI7Ozs7OztJQUUxQiw2Q0FBUTs7Ozs7O0lBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELGdEQUFXOzs7SUFBWDtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDN0I7SUFDTCxDQUFDOztnQkFsQ0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxRQUFRO2lCQUNyQjs7OztnQkFac0Isc0JBQXNCO2dCQUQyQixnQkFBZ0I7Z0JBQTFDLHdCQUF3QjtnQkFBb0IsaUJBQWlCOzs7dUJBa0J0RyxLQUFLOztJQTZCVixpQ0FBQztDQUFBLEFBckNELElBcUNDO1NBakNZLDBCQUEwQjs7O0lBR25DLDRDQUE0Qjs7SUFDNUIsMENBQTZCOzs7OztJQU96QixvREFBOEM7Ozs7O0lBQzlDLDhDQUFrQzs7Ozs7SUFDbEMsOENBQTBDOzs7OztJQUMxQyxvREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgT25EZXN0cm95LCBJbnB1dCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBWaWV3Q29udGFpbmVyUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlck91dGxldCwgQ2hpbGRyZW5PdXRsZXRDb250ZXh0cyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbi8vICNyZWdpb24gUkVBRE1FXHJcblxyXG4vLyA8cm91dGVyLW91dGxldD4gZG9lcyBub3QgeWV0IHN1cHBvcnQgYSBbbmFtZV0gYXR0cmlidXRlLCB0aGVyZWZvcmUgd2UgaGF2ZSBpbXBsZW1lbnRlZCB0aGlzLiBVc2FnZTpcclxuLy8gPHJvdXRlci1vdXRsZXQtbmFtZWQgW25hbWVdPVwibmFtZTFcIj5cclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdyb3V0ZXItb3V0bGV0LW5hbWVkJyxcclxuICAgIGV4cG9ydEFzOiAnb3V0bGV0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUm91dGVyT3V0bGV0TmFtZWREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcclxuXHJcbiAgICBwdWJsaWMgb3V0bGV0OiBSb3V0ZXJPdXRsZXQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHBhcmVudENvbnRleHRzOiBDaGlsZHJlbk91dGxldENvbnRleHRzLFxyXG4gICAgICAgIHByaXZhdGUgbG9jYXRpb246IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBBbmd1bGFyIE1ldGhvZHNcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLm91dGxldCA9IG5ldyBSb3V0ZXJPdXRsZXQodGhpcy5wYXJlbnRDb250ZXh0cywgdGhpcy5sb2NhdGlvbiwgdGhpcy5yZXNvbHZlciwgdGhpcy5uYW1lLCB0aGlzLmNoYW5nZURldGVjdG9yKTtcclxuICAgICAgICB0aGlzLm91dGxldC5uZ09uSW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm91dGxldCkge1xyXG4gICAgICAgICAgICB0aGlzLm91dGxldC5uZ09uRGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19