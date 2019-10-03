/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../service/app/app.service';
import { PortalService } from '../../../domain/portal-service';
import { AreaNotification } from '../../../domain/area-notification';
import { AreaBlades } from '../../../domain/area-blades';
import { Tile } from '../../../domain/tile';
var AppboardComponent = /** @class */ (function () {
    // #region Constructors
    function AppboardComponent(appService, portalService, router) {
        this.appService = appService;
        this.portalService = portalService;
        this.router = router;
        this.portalService.appService = this.appService;
        this.portalService.areaNotification = new AreaNotification(this.portalService);
        this.portalService.areaBlades = new AreaBlades(this.portalService);
        this.appService.portalService = this.portalService;
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
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { _this.appService.appConfigService.appConfig.isShowSplashScreen = false; }), 500);
        // TODO:2019-09-27/hp: convert NEW API to OLD - Copy TILES
        //                     refactor this.portalService.panorama.startboard.tiles
        //                       to use this.appService.appConfigService.appConfig.appboard
        if (this.portalService.panorama.startboard.tiles.tiles.length == 0) {
            this.appService.appConfigService.appConfig.appboard.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var tile = _this.portalService.panorama.startboard.tiles.addTile(new Tile(item.title, item.routerPath, _this.portalService));
                tile.subTitle = item.subTitle;
            }));
        }
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
                    template: "  <!-- PANORAMA -->\r\n<div class=\"fxs-panorama-homearea\" style=\"padding-top:45px;\"\r\n     [ngClass]=\"{'collapsed': !portalService.panorama.startboard.tiles.showTiles}\"\r\n     [hidden]=\"!portalService.panorama.isVisible\">\r\n  <div class=\"fxs-startboard-target fxs-startboard fx-rightClick\"\r\n       [ngClass]=\"{'collapsed': !portalService.panorama.startboard.tiles.showTiles}\">\r\n    <!-- INFO AREA -->\r\n    <div hidden class=\"xfxs-part fxs-part-clickable\" style=\"background-color:#293644; padding:25px; max-width: 800px;margin-bottom:15px;\">\r\n      <header class=\"xfxs-part-title\" style=\"color:white\">\r\n        <h3 class=\"xmsportalfx-tooltip-overflow\">Redesign</h3>\r\n        <p class=\"xmsportalfx-tooltip-overflow\" style=\"margin:0;padding:0\">\r\n          Zur Zeit stehen nicht alle Applikation in der PREVIEW-Umgebung zur Verf\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00BCgung. <b>\r\n            Falls Ihre Applikation unten nicht aufgelistet wird,\r\n            entfernen sie in der URL den Teil mit [.preview] und navigieren Sie somit zur STANDARD-Umgebung.\r\n            In der STANDARD-Umgebung k\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00B6nnen Sie wie gewohnt weiterarbeiten.\r\n          </b>\r\n          In den kommenden Monaten werden alle Applikationen auf das neue Layout angepasst.\r\n          <br /><br />Bei Fragen stehen wir gerne zur Verf\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00BCgung.\r\n          <br />Ihr Ardimedia Team\r\n        </p>\r\n      </header>\r\n      <section class=\"fxs-part-content css-scope-HubsExtension\"></section>\r\n    </div>\r\n    <!-- NO TILES/APPS -->\r\n    <div *ngIf=\"portalService.panorama.startboard.tiles.tiles.length === 0\" class=\"xfxs-part fxs-part-clickable\" style=\"background-color:#293644; padding:25px; max-width: 800px;margin-bottom:15px;height:auto;\">\r\n      <header class=\"xfxs-part-title\" style=\"color:white\">\r\n        <h3 class=\"xmsportalfx-tooltip-overflow\">Keine Applikationen zugeordnet</h3>\r\n        <p class=\"xmsportalfx-tooltip-overflow\" style=\"margin:0;padding:0\">\r\n          Wenden Sie sich bitte an den Administrator damit entsprechende Applikationen zugeordnet werden k\u00F6nnen.\r\n          <br />Ihr Ardimedia Team\r\n        </p>\r\n      </header>\r\n    </div>\r\n    <!-- TILES/APPS -->\r\n    <div class=\"fxs-startboard-layout fxs-flowlayout\">\r\n      <div class=\"fxs-flowlayout-childcontainer\">\r\n        <!-- track by $index -->\r\n        <section *ngFor=\"let tile of portalService.panorama.startboard.tiles.tiles\" class=\"fxs-tile fx-rightClick fxs-flowlayout-element\"\r\n                 [ngClass]=\"{'fxs-tilesize-normal':tile.size=='normal', 'fxs-tilesize-mini':tile.size=='mini', 'fxs-tilesize-herowide':tile.size=='herowide'}\"\r\n                 [ngStyle]=\"{'left': tile.left, 'top': tile.top}\">\r\n          <div class=\"fxs-part fxs-part-clickable\" style=\"cursor:pointer;\"\r\n               (click)=\"tile.clicked();\">\r\n            <header class=\"fxs-part-title\">\r\n              <h2 class=\"msportalfx-tooltip-overflow\">{{tile.title}}</h2>\r\n              <h3 class=\"msportalfx-tooltip-overflow\">{{tile.subTitle}}</h3>\r\n            </header>\r\n            <section class=\"fxs-part-content css-scope-HubsExtension\"></section>\r\n          </div>\r\n          <div class=\"fxs-title-overlay\"></div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".appboard-layout{padding:40px}.appboard-no-apps{padding:25px;max-width:800px;margin-bottom:15px;height:auto}.appboard-title-text{padding-bottom:5px;margin:auto;width:100%;font-weight:500;text-transform:uppercase}.appboard-tile{border-radius:2px;margin-right:7px;margin-bottom:7px;cursor:pointer;padding-top:10px}.appboard-tile:hover{background-color:rgba(220,220,220,.6)}.appboard-tile-size-small{height:180px;width:200px;display:inline-block}@media only screen and (max-width:540px){.appboard-tile-size-small{width:100%}}.onesys-mode-light{color:#000;background-color:#fff}.appboard-no-apps{background-color:#293644;color:#fff}.appboard-tile-icon{margin:auto;width:100%;height:100px;color:#f1f1f1}.appboard-tile-title-text{text-align:center;margin-top:0;font-size:16px;font-weight:700}.appboard-tile-subtitle-text{text-align:center;margin:0;font-size:14px;font-weight:400}.appboard-tile.onesys-mode-light{border:1px solid rgba(204,204,204,.8);box-shadow:0 2px 4px 0 rgba(0,0,0,.1)}"]
                }] }
    ];
    /** @nocollapse */
    AppboardComponent.ctorParameters = function () { return [
        { type: AppService },
        { type: PortalService },
        { type: Router }
    ]; };
    return AppboardComponent;
}());
export { AppboardComponent };
if (false) {
    /** @type {?} */
    AppboardComponent.prototype.appService;
    /** @type {?} */
    AppboardComponent.prototype.portalService;
    /** @type {?} */
    AppboardComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2Rhc2hib2FyZC9hcHBib2FyZC9hcHBib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU1QztJQU1JLHVCQUF1QjtJQUV2QiwyQkFBbUIsVUFBc0IsRUFBUyxhQUE0QixFQUFTLE1BQWM7UUFBbEYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNqRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDdkQsQ0FBQztJQUVELGFBQWE7SUFFYiwwQkFBMEI7Ozs7OztJQUUxQixvQ0FBUTs7Ozs7O0lBQVI7UUFBQSxpQkFZQztRQVhHLFVBQVU7OztRQUFDLGNBQVEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWxHLDBEQUEwRDtRQUMxRCw0RUFBNEU7UUFDNUUsbUZBQW1GO1FBQ25GLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsSUFBSTs7b0JBQ3pELElBQUksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbEMsQ0FBQyxFQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFFRCxhQUFhO0lBRWIseUJBQXlCOzs7Ozs7O0lBRXpCLHNDQUFVOzs7Ozs7O0lBQVYsVUFBVyxVQUFVO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4RCxDQUFDOztnQkF4Q0osU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixzNkdBQXdDOztpQkFFM0M7Ozs7Z0JBWFEsVUFBVTtnQkFFVixhQUFhO2dCQUpiLE1BQU07O0lBb0RmLHdCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0F0Q1ksaUJBQWlCOzs7SUFHZCx1Q0FBNkI7O0lBQUUsMENBQW1DOztJQUFFLG1DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZS9hcHAvYXBwLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9wb3J0YWwtc2VydmljZSc7XHJcbmltcG9ydCB7IEFyZWFOb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9kb21haW4vYXJlYS1ub3RpZmljYXRpb24nO1xyXG5pbXBvcnQgeyBBcmVhQmxhZGVzIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2FyZWEtYmxhZGVzJztcclxuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi90aWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdvc3BhLWFwcGJvYXJkJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHBib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hcHBib2FyZC5jb21wb25lbnQuc2NzcyddIC8vIGJ1aWxkIGVycm9yOiBVbmtub3duIHZlcnNpb24gNjcgb2YgYW5kcm9pZFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvcnNcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU2VydmljZTogQXBwU2VydmljZSwgcHVibGljIHBvcnRhbFNlcnZpY2U6IFBvcnRhbFNlcnZpY2UsIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hcHBTZXJ2aWNlID0gdGhpcy5hcHBTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hcmVhTm90aWZpY2F0aW9uID0gbmV3IEFyZWFOb3RpZmljYXRpb24odGhpcy5wb3J0YWxTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYUJsYWRlcyA9IG5ldyBBcmVhQmxhZGVzKHRoaXMucG9ydGFsU2VydmljZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwU2VydmljZS5wb3J0YWxTZXJ2aWNlID0gdGhpcy5wb3J0YWxTZXJ2aWNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIEFuZ3VsYXIgTWV0aG9kc1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmFwcFNlcnZpY2UuYXBwQ29uZmlnU2VydmljZS5hcHBDb25maWcuaXNTaG93U3BsYXNoU2NyZWVuID0gZmFsc2U7IH0sIDUwMCk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86MjAxOS0wOS0yNy9ocDogY29udmVydCBORVcgQVBJIHRvIE9MRCAtIENvcHkgVElMRVNcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlZmFjdG9yIHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5zdGFydGJvYXJkLnRpbGVzXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgIHRvIHVzZSB0aGlzLmFwcFNlcnZpY2UuYXBwQ29uZmlnU2VydmljZS5hcHBDb25maWcuYXBwYm9hcmRcclxuICAgICAgICBpZiAodGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hLnN0YXJ0Ym9hcmQudGlsZXMudGlsZXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hcHBTZXJ2aWNlLmFwcENvbmZpZ1NlcnZpY2UuYXBwQ29uZmlnLmFwcGJvYXJkLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hLnN0YXJ0Ym9hcmQudGlsZXMuYWRkVGlsZShuZXcgVGlsZShpdGVtLnRpdGxlLCBpdGVtLnJvdXRlclBhdGgsIHRoaXMucG9ydGFsU2VydmljZSkpO1xyXG4gICAgICAgICAgICAgICAgdGlsZS5zdWJUaXRsZSA9IGl0ZW0uc3ViVGl0bGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQdWJsaWMgTWV0aG9kc1xyXG5cclxuICAgIG5hdmlnYXRlVG8ocm91dGVyUGF0aCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYXBwU2VydmljZS5ibGFkZVNlcnZpY2UubmF2aWdhdGVUbyhyb3V0ZXJQYXRoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcbn1cclxuIl19