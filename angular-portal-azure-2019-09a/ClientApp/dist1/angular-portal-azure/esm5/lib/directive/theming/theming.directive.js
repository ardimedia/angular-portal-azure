/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
var ThemingDirective = /** @class */ (function () {
    function ThemingDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ThemingDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        var _this = this;
        Object.keys(this.theme).forEach((/**
         * @param {?} prop
         * @return {?}
         */
        function (prop) {
            _this.el.nativeElement.style.setProperty("" + prop, _this.theme[prop]);
        }));
    };
    ThemingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[theming]'
                },] }
    ];
    /** @nocollapse */
    ThemingDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ThemingDirective.propDecorators = {
        theme: [{ type: Input, args: ['theming',] }]
    };
    return ThemingDirective;
}());
export { ThemingDirective };
if (false) {
    /** @type {?} */
    ThemingDirective.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    ThemingDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWluZy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvdGhlbWluZy90aGVtaW5nLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRXhFO0lBTUksMEJBQW9CLEVBQTJCO1FBQTNCLE9BQUUsR0FBRixFQUFFLENBQXlCO0lBQy9DLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFBQSxpQkFJQztRQUhHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLElBQUk7WUFDaEMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFHLElBQU0sRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOztnQkFiSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7aUJBQ3hCOzs7O2dCQUptQixVQUFVOzs7d0JBTXpCLEtBQUssU0FBQyxTQUFTOztJQVVwQix1QkFBQztDQUFBLEFBZEQsSUFjQztTQVhZLGdCQUFnQjs7O0lBQ3pCLGlDQUFvRDs7Ozs7SUFFeEMsOEJBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1t0aGVtaW5nXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRoZW1pbmdEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgQElucHV0KCd0aGVtaW5nJykgdGhlbWU6IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy50aGVtZSkuZm9yRWFjaChwcm9wID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KGAke3Byb3B9YCwgdGhpcy50aGVtZVtwcm9wXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19