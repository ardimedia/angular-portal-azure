/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { AppService } from '../../../service/app/app.service';
export class AppboardComponent {
    // #region Constructors
    /**
     * @param {?} appService
     */
    constructor(appService) {
        this.appService = appService;
    }
    // #endregion
    // #region Angular Methods
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    // #endregion
    // #region Public Methods
    /**
     * @param {?} routerPath
     * @return {?}
     */
    navigateTo(routerPath) {
        this.appService.bladeService.navigateTo(routerPath);
    }
}
AppboardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ospa-appboard',
                template: "<div class=\"appboard-layout\">\r\n  <div class=\"#title-container\">\r\n    <div class=\"appboard-title-text\">Applikationen</div>\r\n  </div>\r\n  <div class=\"#child-container\">\r\n    <!-- NO APPLICATIONS AVAILABLE -->\r\n    <div class=\"appboard-no-apps\" <!--[style.display]=\"mainOscService.appConfigService.appConfig.appboard.length === 0 ? 'block' : 'none'\"-->>\r\n      <header>\r\n        <h3><i class=\"fas fa-exclamation fa-pull-left fa-border\"></i>Keine Applikationen zugeordnet</h3>\r\n        <p>\r\n          Wenden Sie sich bitte an den Administrator damit entsprechende Applikationen zugeordnet werden k\u00F6nnen.\r\n        </p>\r\n      </header>\r\n    </div>\r\n    <!-- SHOW APPLICATIONS -->\r\n    <div class=\"appboard-tile appboard-tile-size-small onesys-mode-light\"\r\n             <!--*ngFor=\"let appboardEntry of mainOscService.appConfigService.appConfig.appboard\"-->\r\n             (click)=\"navigateTo(appboardEntry.routerPath)\">\r\n            <header>\r\n                <div class=\"appboard-tile-icon fa-stack fa-2x\">\r\n                    <i class=\"fas fa-circle fa-stack-2x\"></i>\r\n                    <i <!--[class]=\"appboardEntry.iconClass + ' fa-stack-1x fa-inverse'\"--> <!--[style.color]=\"appboardEntry.iconColor\"-->></i>\r\n                </div>\r\n                <!--<div class=\"appboard-tile-title-text\">{{appboardEntry.title}}</div>\r\n                <div class=\"appboard-tile-subtitle-text\">{{appboardEntry.subTitle}}</div>-->\r\n            </header>\r\n        </div>\r\n  </div>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
AppboardComponent.ctorParameters = () => [
    { type: AppService }
];
if (false) {
    /** @type {?} */
    AppboardComponent.prototype.appService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2Rhc2hib2FyZC9hcHBib2FyZC9hcHBib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBTzlELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBRzFCLFlBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBSSxDQUFDOzs7Ozs7SUFNOUMsUUFBUTtJQUNSLENBQUM7Ozs7Ozs7SUFNRCxVQUFVLENBQUMsVUFBVTtRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBdkJKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsNGlEQUF3QzthQUUzQzs7OztZQU5RLFVBQVU7Ozs7SUFVSCx1Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2UvYXBwL2FwcC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdvc3BhLWFwcGJvYXJkJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHBib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICAvL3N0eWxlVXJsczogWycuL2FwcGJvYXJkLmNvbXBvbmVudC5zY3NzJ10gLy8gYnVpbGQgZXJyb3I6IFVua25vd24gdmVyc2lvbiA2NyBvZiBhbmRyb2lkXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yc1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBBbmd1bGFyIE1ldGhvZHNcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQdWJsaWMgTWV0aG9kc1xyXG5cclxuICAgIG5hdmlnYXRlVG8ocm91dGVyUGF0aCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXBwU2VydmljZS5ibGFkZVNlcnZpY2UubmF2aWdhdGVUbyhyb3V0ZXJQYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19