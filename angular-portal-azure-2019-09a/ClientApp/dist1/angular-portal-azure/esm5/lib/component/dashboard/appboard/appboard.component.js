/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AppService } from '../../../service/app/app.service';
var AppboardComponent = /** @class */ (function () {
    // #region Constructors
    function AppboardComponent(appService) {
        this.appService = appService;
    }
    // #endregion
    // #region Angular Methods
    // #endregion
    // #region Angular Methods
    /**
     * @return {?}
     */
    AppboardComponent.prototype.ngOnInit = 
    // #endregion
    // #region Angular Methods
    /**
     * @return {?}
     */
    function () {
    };
    // #endregion
    // #region Public Methods
    // #endregion
    // #region Public Methods
    /**
     * @param {?} routerPath
     * @return {?}
     */
    AppboardComponent.prototype.navigateTo = 
    // #endregion
    // #region Public Methods
    /**
     * @param {?} routerPath
     * @return {?}
     */
    function (routerPath) {
        this.appService.bladeService.navigateTo(routerPath);
    };
    AppboardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ospa-appboard',
                    template: "<div class=\"appboard-layout\">\r\n  <div class=\"#title-container\">\r\n    <div class=\"appboard-title-text\">Applikationen</div>\r\n  </div>\r\n  <div class=\"#child-container\">\r\n    <!-- NO APPLICATIONS AVAILABLE -->\r\n    <div class=\"appboard-no-apps\" <!--[style.display]=\"mainOscService.appConfigService.appConfig.appboard.length === 0 ? 'block' : 'none'\"-->>\r\n      <header>\r\n        <h3><i class=\"fas fa-exclamation fa-pull-left fa-border\"></i>Keine Applikationen zugeordnet</h3>\r\n        <p>\r\n          Wenden Sie sich bitte an den Administrator damit entsprechende Applikationen zugeordnet werden k\u00F6nnen.\r\n        </p>\r\n      </header>\r\n    </div>\r\n    <!-- SHOW APPLICATIONS -->\r\n    <div class=\"appboard-tile appboard-tile-size-small onesys-mode-light\"\r\n             <!--*ngFor=\"let appboardEntry of mainOscService.appConfigService.appConfig.appboard\"-->\r\n             (click)=\"navigateTo(appboardEntry.routerPath)\">\r\n            <header>\r\n                <div class=\"appboard-tile-icon fa-stack fa-2x\">\r\n                    <i class=\"fas fa-circle fa-stack-2x\"></i>\r\n                    <i <!--[class]=\"appboardEntry.iconClass + ' fa-stack-1x fa-inverse'\"--> <!--[style.color]=\"appboardEntry.iconColor\"-->></i>\r\n                </div>\r\n                <!--<div class=\"appboard-tile-title-text\">{{appboardEntry.title}}</div>\r\n                <div class=\"appboard-tile-subtitle-text\">{{appboardEntry.subTitle}}</div>-->\r\n            </header>\r\n        </div>\r\n  </div>\r\n</div>\r\n"
                }] }
    ];
    /** @nocollapse */
    AppboardComponent.ctorParameters = function () { return [
        { type: AppService }
    ]; };
    return AppboardComponent;
}());
export { AppboardComponent };
if (false) {
    /** @type {?} */
    AppboardComponent.prototype.appService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2Rhc2hib2FyZC9hcHBib2FyZC9hcHBib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTlEO0lBTUksdUJBQXVCO0lBRXZCLDJCQUFtQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUksQ0FBQztJQUU5QyxhQUFhO0lBRWIsMEJBQTBCOzs7Ozs7SUFFMUIsb0NBQVE7Ozs7OztJQUFSO0lBQ0EsQ0FBQztJQUVELGFBQWE7SUFFYix5QkFBeUI7Ozs7Ozs7SUFFekIsc0NBQVU7Ozs7Ozs7SUFBVixVQUFXLFVBQVU7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7O2dCQXZCSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDRpREFBd0M7aUJBRTNDOzs7O2dCQU5RLFVBQVU7O0lBNEJuQix3QkFBQztDQUFBLEFBMUJELElBMEJDO1NBckJZLGlCQUFpQjs7O0lBR2QsdUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlL2FwcC9hcHAuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnb3NwYS1hcHBib2FyZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgLy9zdHlsZVVybHM6IFsnLi9hcHBib2FyZC5jb21wb25lbnQuc2NzcyddIC8vIGJ1aWxkIGVycm9yOiBVbmtub3duIHZlcnNpb24gNjcgb2YgYW5kcm9pZFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvcnNcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU2VydmljZTogQXBwU2VydmljZSkgeyB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gQW5ndWxhciBNZXRob2RzXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHVibGljIE1ldGhvZHNcclxuXHJcbiAgICBuYXZpZ2F0ZVRvKHJvdXRlclBhdGgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFwcFNlcnZpY2UuYmxhZGVTZXJ2aWNlLm5hdmlnYXRlVG8ocm91dGVyUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==