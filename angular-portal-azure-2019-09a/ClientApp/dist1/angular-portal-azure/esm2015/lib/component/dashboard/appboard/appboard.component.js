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
export class AppboardComponent {
    // #region Constructors
    /**
     * @param {?} appService
     * @param {?} portalService
     * @param {?} router
     */
    constructor(appService, portalService, router) {
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
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => { this.appService.appConfigService.appConfig.isShowSplashScreen = false; }), 500);
        // TODO:2019-09-27/hp: convert NEW API to OLD - Copy TILES
        //                     refactor this.portalService.panorama.startboard.tiles
        //                       to use this.appService.appConfigService.appConfig.appboard
        if (this.portalService.panorama.startboard.tiles.tiles.length == 0) {
            this.appService.appConfigService.appConfig.appboard.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                /** @type {?} */
                let tile = this.portalService.panorama.startboard.tiles.addTile(new Tile(item.title, item.routerPath, this.portalService));
                tile.subTitle = item.subTitle;
            }));
        }
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
                template: "  <!-- PANORAMA -->\r\n<div class=\"fxs-panorama-homearea\" style=\"padding-top:45px;\"\r\n     [ngClass]=\"{'collapsed': !portalService.panorama.startboard.tiles.showTiles}\"\r\n     [hidden]=\"!portalService.panorama.isVisible\">\r\n  <div class=\"fxs-startboard-target fxs-startboard fx-rightClick\"\r\n       [ngClass]=\"{'collapsed': !portalService.panorama.startboard.tiles.showTiles}\">\r\n    <!-- INFO AREA -->\r\n    <div hidden class=\"xfxs-part fxs-part-clickable\" style=\"background-color:#293644; padding:25px; max-width: 800px;margin-bottom:15px;\">\r\n      <header class=\"xfxs-part-title\" style=\"color:white\">\r\n        <h3 class=\"xmsportalfx-tooltip-overflow\">Redesign</h3>\r\n        <p class=\"xmsportalfx-tooltip-overflow\" style=\"margin:0;padding:0\">\r\n          Zur Zeit stehen nicht alle Applikation in der PREVIEW-Umgebung zur Verf\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00BCgung. <b>\r\n            Falls Ihre Applikation unten nicht aufgelistet wird,\r\n            entfernen sie in der URL den Teil mit [.preview] und navigieren Sie somit zur STANDARD-Umgebung.\r\n            In der STANDARD-Umgebung k\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00B6nnen Sie wie gewohnt weiterarbeiten.\r\n          </b>\r\n          In den kommenden Monaten werden alle Applikationen auf das neue Layout angepasst.\r\n          <br /><br />Bei Fragen stehen wir gerne zur Verf\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00BCgung.\r\n          <br />Ihr Ardimedia Team\r\n        </p>\r\n      </header>\r\n      <section class=\"fxs-part-content css-scope-HubsExtension\"></section>\r\n    </div>\r\n    <!-- NO TILES/APPS -->\r\n    <div *ngIf=\"portalService.panorama.startboard.tiles.tiles.length === 0\" class=\"xfxs-part fxs-part-clickable\" style=\"background-color:#293644; padding:25px; max-width: 800px;margin-bottom:15px;height:auto;\">\r\n      <header class=\"xfxs-part-title\" style=\"color:white\">\r\n        <h3 class=\"xmsportalfx-tooltip-overflow\">Keine Applikationen zugeordnet</h3>\r\n        <p class=\"xmsportalfx-tooltip-overflow\" style=\"margin:0;padding:0\">\r\n          Wenden Sie sich bitte an den Administrator damit entsprechende Applikationen zugeordnet werden k\u00F6nnen.\r\n          <br />Ihr Ardimedia Team\r\n        </p>\r\n      </header>\r\n    </div>\r\n    <!-- TILES/APPS -->\r\n    <div class=\"fxs-startboard-layout fxs-flowlayout\">\r\n      <div class=\"fxs-flowlayout-childcontainer\">\r\n        <!-- track by $index -->\r\n        <section *ngFor=\"let tile of portalService.panorama.startboard.tiles.tiles\" class=\"fxs-tile fx-rightClick fxs-flowlayout-element\"\r\n                 [ngClass]=\"{'fxs-tilesize-normal':tile.size=='normal', 'fxs-tilesize-mini':tile.size=='mini', 'fxs-tilesize-herowide':tile.size=='herowide'}\"\r\n                 [ngStyle]=\"{'left': tile.left, 'top': tile.top}\">\r\n          <div class=\"fxs-part fxs-part-clickable\" style=\"cursor:pointer;\"\r\n               (click)=\"tile.clicked();\">\r\n            <header class=\"fxs-part-title\">\r\n              <h2 class=\"msportalfx-tooltip-overflow\">{{tile.title}}</h2>\r\n              <h3 class=\"msportalfx-tooltip-overflow\">{{tile.subTitle}}</h3>\r\n            </header>\r\n            <section class=\"fxs-part-content css-scope-HubsExtension\"></section>\r\n          </div>\r\n          <div class=\"fxs-title-overlay\"></div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".appboard-layout{padding:40px}.appboard-no-apps{padding:25px;max-width:800px;margin-bottom:15px;height:auto}.appboard-title-text{padding-bottom:5px;margin:auto;width:100%;font-weight:500;text-transform:uppercase}.appboard-tile{border-radius:2px;margin-right:7px;margin-bottom:7px;cursor:pointer;padding-top:10px}.appboard-tile:hover{background-color:rgba(220,220,220,.6)}.appboard-tile-size-small{height:180px;width:200px;display:inline-block}@media only screen and (max-width:540px){.appboard-tile-size-small{width:100%}}.onesys-mode-light{color:#000;background-color:#fff}.appboard-no-apps{background-color:#293644;color:#fff}.appboard-tile-icon{margin:auto;width:100%;height:100px;color:#f1f1f1}.appboard-tile-title-text{text-align:center;margin-top:0;font-size:16px;font-weight:700}.appboard-tile-subtitle-text{text-align:center;margin:0;font-size:14px;font-weight:400}.appboard-tile.onesys-mode-light{border:1px solid rgba(204,204,204,.8);box-shadow:0 2px 4px 0 rgba(0,0,0,.1)}"]
            }] }
];
/** @nocollapse */
AppboardComponent.ctorParameters = () => [
    { type: AppService },
    { type: PortalService },
    { type: Router }
];
if (false) {
    /** @type {?} */
    AppboardComponent.prototype.appService;
    /** @type {?} */
    AppboardComponent.prototype.portalService;
    /** @type {?} */
    AppboardComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2Rhc2hib2FyZC9hcHBib2FyZC9hcHBib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU81QyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7O0lBRzFCLFlBQW1CLFVBQXNCLEVBQVMsYUFBNEIsRUFBUyxNQUFjO1FBQWxGLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBUyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVuRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQU1ELFFBQVE7UUFDSixVQUFVOzs7UUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7UUFFbEcsMERBQTBEO1FBQzFELDRFQUE0RTtRQUM1RSxtRkFBbUY7UUFDbkYsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ2hFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1lBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7b0JBQzdELElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbEMsQ0FBQyxFQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7Ozs7Ozs7SUFNRCxVQUFVLENBQUMsVUFBVTtRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBeENKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsczZHQUF3Qzs7YUFFM0M7Ozs7WUFYUSxVQUFVO1lBRVYsYUFBYTtZQUpiLE1BQU07Ozs7SUFpQkMsdUNBQTZCOztJQUFFLDBDQUFtQzs7SUFBRSxtQ0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2UvYXBwL2FwcC5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IFBvcnRhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vcG9ydGFsLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcmVhTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2FyZWEtbm90aWZpY2F0aW9uJztcclxuaW1wb3J0IHsgQXJlYUJsYWRlcyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9hcmVhLWJsYWRlcyc7XHJcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vdGlsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnb3NwYS1hcHBib2FyZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwYm9hcmQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYXBwYm9hcmQuY29tcG9uZW50LnNjc3MnXSAvLyBidWlsZCBlcnJvcjogVW5rbm93biB2ZXJzaW9uIDY3IG9mIGFuZHJvaWRcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcGJvYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JzXHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGFwcFNlcnZpY2U6IEFwcFNlcnZpY2UsIHB1YmxpYyBwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlLCBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuYXBwU2VydmljZSA9IHRoaXMuYXBwU2VydmljZTtcclxuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYU5vdGlmaWNhdGlvbiA9IG5ldyBBcmVhTm90aWZpY2F0aW9uKHRoaXMucG9ydGFsU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFCbGFkZXMgPSBuZXcgQXJlYUJsYWRlcyh0aGlzLnBvcnRhbFNlcnZpY2UpO1xyXG5cclxuICAgICAgICB0aGlzLmFwcFNlcnZpY2UucG9ydGFsU2VydmljZSA9IHRoaXMucG9ydGFsU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBBbmd1bGFyIE1ldGhvZHNcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5hcHBTZXJ2aWNlLmFwcENvbmZpZ1NlcnZpY2UuYXBwQ29uZmlnLmlzU2hvd1NwbGFzaFNjcmVlbiA9IGZhbHNlOyB9LCA1MDApO1xyXG5cclxuICAgICAgICAvLyBUT0RPOjIwMTktMDktMjcvaHA6IGNvbnZlcnQgTkVXIEFQSSB0byBPTEQgLSBDb3B5IFRJTEVTXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZWZhY3RvciB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuc3RhcnRib2FyZC50aWxlc1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICB0byB1c2UgdGhpcy5hcHBTZXJ2aWNlLmFwcENvbmZpZ1NlcnZpY2UuYXBwQ29uZmlnLmFwcGJvYXJkXHJcbiAgICAgICAgaWYgKHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5zdGFydGJvYXJkLnRpbGVzLnRpbGVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwU2VydmljZS5hcHBDb25maWdTZXJ2aWNlLmFwcENvbmZpZy5hcHBib2FyZC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5zdGFydGJvYXJkLnRpbGVzLmFkZFRpbGUobmV3IFRpbGUoaXRlbS50aXRsZSwgaXRlbS5yb3V0ZXJQYXRoLCB0aGlzLnBvcnRhbFNlcnZpY2UpKTtcclxuICAgICAgICAgICAgICAgIHRpbGUuc3ViVGl0bGUgPSBpdGVtLnN1YlRpdGxlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHVibGljIE1ldGhvZHNcclxuXHJcbiAgICBuYXZpZ2F0ZVRvKHJvdXRlclBhdGgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFwcFNlcnZpY2UuYmxhZGVTZXJ2aWNlLm5hdmlnYXRlVG8ocm91dGVyUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==