/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
export class ThemingDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        Object.keys(this.theme).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        prop => {
            this.el.nativeElement.style.setProperty(`${prop}`, this.theme[prop]);
        }));
    }
}
ThemingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[theming]'
            },] }
];
/** @nocollapse */
ThemingDirective.ctorParameters = () => [
    { type: ElementRef }
];
ThemingDirective.propDecorators = {
    theme: [{ type: Input, args: ['theming',] }]
};
if (false) {
    /** @type {?} */
    ThemingDirective.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    ThemingDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvdGhlbWluZy90aGVtaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBS3hFLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFHekIsWUFBb0IsRUFBMkI7UUFBM0IsT0FBRSxHQUFGLEVBQUUsQ0FBeUI7SUFDL0MsQ0FBQzs7OztJQUVELFdBQVc7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7OztZQWJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsV0FBVzthQUN4Qjs7OztZQUptQixVQUFVOzs7b0JBTXpCLEtBQUssU0FBQyxTQUFTOzs7O0lBQWhCLGlDQUFvRDs7Ozs7SUFFeEMsOEJBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t0aGVtaW5nXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZW1pbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCd0aGVtaW5nJykgdGhlbWU6IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy50aGVtZSkuZm9yRWFjaChwcm9wID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAke3Byb3B9YCwgdGhpcy50aGVtZVtwcm9wXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19