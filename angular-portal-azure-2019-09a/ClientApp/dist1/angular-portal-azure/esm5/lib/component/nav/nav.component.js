/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    /**
     * @return {?}
     */
    NavComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'apa-nav',
                    template: "<div>\r\n  <table class=\"azc-grid-full azc-grid-multiselectable\" ng-if=\"!$ctrl.vm.isInnerHtml\">\r\n    <caption data-bind=\"text: data.summary\"></caption>\r\n    <colgroup>\r\n      <col class=\"col0\" style=\"width: 25px;\">\r\n      <col class=\"col1\">\r\n    </colgroup>\r\n    <tbody class=\"azc-grid-groupdata\" role=\"rowgroup\">\r\n      <tr repeat=\"item in $ctrl.vm.items track by $index\" click=\"$ctrl.vm.navigateTo(item.bladePath);item.onNavItemClick();\" role=\"row\" aria-selected=\"false\" data-grid-row-activated=\"false\" data-grid-selectable=\"true\" data-grid-focusable=\"true\" data-grid-activateable=\"true\" show=\"<!--item.isVisible-->\" style=\"cursor:pointer\" style=\"<!--item.style-->\">\r\n        <td class=\"msportalfx-gridcolumn-asseticon\" role=\"gridcell\" data-grid-cell-activated=\"false\">\r\n          <i ng-class=\"<!--item.cssClass-->\"></i>\r\n        </td>\r\n        <td tabindex=\"0\" role=\"gridcell\" data-activatable=\"true\" data-grid-cell-activated=\"false\">\r\n          <a href=\"<!--item.hrefPath-->\" target=\"_blank\" style=\"color:black\"><!--{{item.title}}--></a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div ng-if=\"$ctrl.vm.isInnerHtml\">\r\n    <div ng-transclude></div>\r\n  </div>\r\n</div>\r\n"
                }] }
    ];
    /** @nocollapse */
    NavComponent.ctorParameters = function () { return []; };
    return NavComponent;
}());
export { NavComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9uYXYvbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRDtJQU1JO0lBQWdCLENBQUM7Ozs7SUFFakIsK0JBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBVEosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixveENBQW1DO2lCQUV0Qzs7OztJQU9ELG1CQUFDO0NBQUEsQUFYRCxJQVdDO1NBTlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBhLW5hdicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25hdi5jb21wb25lbnQuaHRtbCcsXG4gICAgLy9zdHlsZVVybHM6IFsnLi9uYXYuY29tcG9uZW50LnNjc3MnXSAvLyBidWlsZCBlcnJvcjogVW5rbm93biB2ZXJzaW9uIDY3IG9mIGFuZHJvaWRcbn0pXG5leHBvcnQgY2xhc3MgTmF2Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG59XG4iXX0=