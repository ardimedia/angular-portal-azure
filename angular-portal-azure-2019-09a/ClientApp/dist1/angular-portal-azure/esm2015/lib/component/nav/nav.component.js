/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class NavComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NavComponent.decorators = [
    { type: Component, args: [{
                selector: 'apa-nav',
                template: "<div>\r\n  <table class=\"azc-grid-full azc-grid-multiselectable\" ng-if=\"!$ctrl.vm.isInnerHtml\">\r\n    <caption data-bind=\"text: data.summary\"></caption>\r\n    <colgroup>\r\n      <col class=\"col0\" style=\"width: 25px;\">\r\n      <col class=\"col1\">\r\n    </colgroup>\r\n    <tbody class=\"azc-grid-groupdata\" role=\"rowgroup\">\r\n      <tr repeat=\"item in $ctrl.vm.items track by $index\" click=\"$ctrl.vm.navigateTo(item.bladePath);item.onNavItemClick();\" role=\"row\" aria-selected=\"false\" data-grid-row-activated=\"false\" data-grid-selectable=\"true\" data-grid-focusable=\"true\" data-grid-activateable=\"true\" show=\"<!--item.isVisible-->\" style=\"cursor:pointer\" style=\"<!--item.style-->\">\r\n        <td class=\"msportalfx-gridcolumn-asseticon\" role=\"gridcell\" data-grid-cell-activated=\"false\">\r\n          <i ng-class=\"<!--item.cssClass-->\"></i>\r\n        </td>\r\n        <td tabindex=\"0\" role=\"gridcell\" data-activatable=\"true\" data-grid-cell-activated=\"false\">\r\n          <a href=\"<!--item.hrefPath-->\" target=\"_blank\" style=\"color:black\"><!--{{item.title}}--></a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div ng-if=\"$ctrl.vm.isInnerHtml\">\r\n    <div ng-transclude></div>\r\n  </div>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
NavComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9uYXYvbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU9sRCxNQUFNLE9BQU8sWUFBWTtJQUNyQixnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBVEosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixveENBQW1DO2FBRXRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcGEtbmF2JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgICAvL3N0eWxlVXJsczogWycuL25hdi5jb21wb25lbnQuc2NzcyddIC8vIGJ1aWxkIGVycm9yOiBVbmtub3duIHZlcnNpb24gNjcgb2YgYW5kcm9pZFxufSlcbmV4cG9ydCBjbGFzcyBOYXZDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbn1cbiJdfQ==