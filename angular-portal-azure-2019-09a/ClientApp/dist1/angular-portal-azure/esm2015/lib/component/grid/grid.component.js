/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class GridComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
GridComponent.decorators = [
    { type: Component, args: [{
                selector: 'apa-grid',
                template: "<table class=\"azc-grid-full azc-grid-multiselectable\">\r\n  <caption data-bind=\"text: data.summary\"></caption>\r\n  <colgroup>\r\n    <col class=\"col0\" style=\"width: 41px;\">\r\n    <col class=\"col1\">\r\n  </colgroup>\r\n  <tbody class=\"azc-grid-groupdata\" role=\"rowgroup\">\r\n    <tr data-ng-repeat=\"<!--item in $ctrl.vm.items track by $index-->\" data-ng-click=\"<!--$ctrl.vm.navigateTo(item.bladePath);-->\" role=\"row\" aria-selected=\"false\" data-grid-row-activated=\"false\" data-grid-selectable=\"true\" data-grid-focusable=\"true\" data-grid-activateable=\"true\" ng-show=\"<!--item.isVisible-->\" style=\"cursor:pointer\" ng-style=\"<!--item.style-->\">\r\n      <td class=\"msportalfx-gridcolumn-asseticon\" role=\"gridcell\" data-grid-cell-activated=\"false\">\r\n        <div class=\"azc-vivaControl\" data-bind='vivaControl: \"DEB28B4C-518F-4F70-A817-BF9277606CAB\"'>\r\n          <div data-bind=\"image: value\">\r\n            <svg data-ng-show=\"item.title\" xmlns=\"http://www.w3.org/2000/svg\" class=\"msportal-fx-svg-placeholder\" viewBox=\"0 0 50 50\" focusable=\"false\">\r\n              <rect class=\"msportalfx-svg-c04\" x=\"19.8\" y=\"39.4\" width=\"10.6\" height=\"3.4\" />\r\n              <polygon class=\"msportalfx-svg-c04\" points=\"23.1,50 27,50 30.3,46.5 19.8,46.5\" />\r\n              <path class=\"msportalfx-svg-c20\" d=\"M 41.2 14.7 L 41.2 14.7 v -0.3 c 0 -7.7 -6.6 -14.1 -14.7 -14.2 c -0.2 -0.3 -4.8 0.1 -4.8 0.1 l 0 0 c -7.3 0.9 -13 7 -13 14.1 c 0 0.2 -0.8 5.8 4.9 10.5 c 2.6 2.3 5.3 8.5 5.7 10.3 l 0.3 0.6 h 10.6 l 0.3 -0.6 c 0.4 -1.8 3.2 -8 5.7 -10.2 C 41.9 20.2 41.2 14.9 41.2 14.7 Z\" />\r\n              <path class=\"msportalfx-svg-c01\" d=\"M 30.4 18.1 l -1.7 10.6 h -2 V 18.2 l 0.1 -0.2 c 3.8 0 3.3 -3.5 3.3 -3.5 H 19.8 v 0.3 c 0 0.8 0.3 3.3 3.5 3.3 v 10.6 h -2 l -0.5 -2.5 l -1.3 -8.1 c -2.3 0 -3 -1.5 -3.3 -2.6 c 0 -0.4 0 -0.9 0 -1.4 c 0 -2.8 3.2 -3.1 3.2 -3.1 h 11 c 0 0 3.5 0.4 3.5 3.5 C 33.8 14.5 33.9 18.1 30.4 18.1 Z\" />\r\n              <path class=\"msportalfx-svg-c01\" opacity=\"0.15\" enable-background=\"new \" d=\"M 41.2 16.4 c 0.1 -1 0 -1.7 0 -1.8 l 0 0 v -0.3 c 0 -7.7 -6.6 -14.1 -14.7 -14.2 c -0.2 -0.3 -4.8 0.1 -4.8 0.1 l 0 0 c -7.3 0.9 -13 7 -13 14.1 c 0 0.1 -0.1 0.9 0 2.1 H 41.2 Z\" />\r\n            </svg>\r\n          </div>\r\n        </div>\r\n      </td>\r\n      <td tabindex=\"0\" role=\"gridcell\" data-activatable=\"true\" data-grid-cell-activated=\"false\">\r\n        <a href=\"<!--item.hrefPath-->\" target=\"_blank\" style=\"color:black\"><!--{{item.title}}--></a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
GridComponent.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQU9sRCxNQUFNLE9BQU8sYUFBYTtJQUV0QixnQkFBZ0IsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBVkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxVQUFVO2dCQUNwQix5a0ZBQW9DOzthQUV2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBhLWdyaWQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9ncmlkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9ncmlkLmNvbXBvbmVudC5zY3NzJ10gLy8gYnVpbGQgZXJyb3I6IFVua25vd24gdmVyc2lvbiA2NyBvZiBhbmRyb2lkXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxufVxuIl19