/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../service/app/app.service';
import { PortalService } from '../../domain/portal-service';
import { AreaNotification } from '../../domain/area-notification';
import { AreaBlades } from '../../domain/area-blades';
import { Tile } from '../../domain/tile';
/**
 * @record
 */
function DinoThemes() { }
/**
 * @record
 */
function DinoTheme() { }
if (false) {
    /* Skipping unnamed member:
    '--topbar-color': string;*/
    /* Skipping unnamed member:
    '--topbar-background-color': string;*/
    /* Skipping unnamed member:
    '--topbar-home-color': string;*/
    /* Skipping unnamed member:
    '--blade-statusbar-background-color': string;*/
    /* Skipping unnamed member:
    '--blade-commands-background-color': string;*/
}
var AppComponent = /** @class */ (function () {
    function AppComponent(appService, router) {
        this.appService = appService;
        this.router = router;
        this.themeProps = [
            'color-main',
            'color-main-darken',
            'color-main-darken2',
            'color-main-lighten',
            'color-accent',
        ];
        this.themes = {
            'black': {
                '--topbar-color': '#fff',
                '--topbar-background-color': '#1c1c1c',
                '--topbar-home-color': '#fff',
                '--blade-statusbar-background-color': '#293644',
                '--blade-commands-background-color': '#3e4045',
            },
            'white': {
                '--topbar-color': '#1c1c1c',
                '--topbar-background-color': '#efefef',
                '--topbar-home-color': '#1c1c1c',
                '--blade-statusbar-background-color': '#dcdcdc',
                '--blade-commands-background-color': '#c7c7c7',
            }
        };
        this.selectedTheme = this.themes['black'];
        console.log({ AppComponent: ((/** @type {?} */ (Object))).id(this) });
        this.portalService = new PortalService();
        this.portalService.appService = this.appService;
        this.portalService.areaNotification = new AreaNotification(this.portalService);
        this.portalService.areaBlades = new AreaBlades(this.portalService);
        this.appService.portalService = this.portalService;
    }
    /**
     * @return {?}
     */
    AppComponent.prototype.ngOnInit = /**
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
        this.appService.appConfigService.appConfig.appboard.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var tile = _this.portalService.panorama.startboard.tiles.addTile(new Tile(item.title, item.routerPath, _this.portalService));
            tile.subTitle = item.subTitle;
        }));
    };
    /**
     * @param {?} themeIndex
     * @return {?}
     */
    AppComponent.prototype.setTheme = /**
     * @param {?} themeIndex
     * @return {?}
     */
    function (themeIndex) {
        this.selectedTheme = this.themes[themeIndex];
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'angular-portal-azure',
                    template: "<div class=\"fxs-portal fxs-theme-blue\">\r\n  <!-- TOOLBAR -->\r\n  <div class=\"fxs-topbar container-fluid row\">\r\n    <div class=\"col-6\" style=\"padding-left: 25px;\">\r\n      <a href=\"#\" class=\"fxs-topbar-home fxs-has-hover\">{{portalService.panorama.title}}</a>\r\n    </div>\r\n    <div class=\"col-6 fxs-avatarmenu-tenant-container\" style=\"padding-right:10px;\">\r\n      <a class=\"fxs-has-hover\" href=\"/Account/Manage\">\r\n        <span>{{portalService.panorama.avatarMenu.userAccount.name}}</span><br />\r\n        <span>{{portalService.panorama.avatarMenu.userAccount.userName}}</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div id=\"apa-portal-scroll\" class=\"fxs-portal-content fxs-panorama\" style=\"height:calc(100% - 40px)\">\r\n    <!-- PANORAMA -->\r\n    {{portalService.panorama.isVisible}}\r\n    {{portalService.panorama.startboard.tiles.showTiles}}\r\n    <div class=\"fxs-panorama-homearea\" style=\"padding-top:45px;\"\r\n         [ngClass]=\"{'collapsed': !portalService.panorama.startboard.tiles.showTiles}\"\r\n         [hidden]=\"!portalService.panorama.isVisible\">\r\n      <div class=\"fxs-startboard-target fxs-startboard fx-rightClick\"\r\n           [ngClass]=\"{'collapsed': !portalService.panorama.startboard.tiles.showTiles}\">\r\n        <!-- INFO AREA -->\r\n        <div hidden class=\"xfxs-part fxs-part-clickable\" style=\"background-color:#293644; padding:25px; max-width: 800px;margin-bottom:15px;\">\r\n          <header class=\"xfxs-part-title\" style=\"color:white\">\r\n            <h3 class=\"xmsportalfx-tooltip-overflow\">Redesign</h3>\r\n            <p class=\"xmsportalfx-tooltip-overflow\" style=\"margin:0;padding:0\">\r\n              Zur Zeit stehen nicht alle Applikation in der PREVIEW-Umgebung zur Verf\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00BCgung. <b>\r\n                Falls Ihre Applikation unten nicht aufgelistet wird,\r\n                entfernen sie in der URL den Teil mit [.preview] und navigieren Sie somit zur STANDARD-Umgebung.\r\n                In der STANDARD-Umgebung k\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00B6nnen Sie wie gewohnt weiterarbeiten.\r\n              </b>\r\n              In den kommenden Monaten werden alle Applikationen auf das neue Layout angepasst.\r\n              <br /><br />Bei Fragen stehen wir gerne zur Verf\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00BCgung.\r\n              <br />Ihr Ardimedia Team\r\n            </p>\r\n          </header>\r\n          <section class=\"fxs-part-content css-scope-HubsExtension\"></section>\r\n        </div>\r\n        <!-- NO TILES/APPS -->\r\n        <div *ngIf=\"portalService.panorama.startboard.tiles.tiles.length === 0\" class=\"xfxs-part fxs-part-clickable\" style=\"background-color:#293644; padding:25px; max-width: 800px;margin-bottom:15px;height:auto;\">\r\n          <header class=\"xfxs-part-title\" style=\"color:white\">\r\n            <h3 class=\"xmsportalfx-tooltip-overflow\">Keine Applikationen zugeordnet</h3>\r\n            <p class=\"xmsportalfx-tooltip-overflow\" style=\"margin:0;padding:0\">\r\n              Wenden Sie sich bitte an den Administrator damit entsprechende Applikationen zugeordnet werden k\u00F6nnen.\r\n              <br />Ihr Ardimedia Team\r\n            </p>\r\n          </header>\r\n        </div>\r\n        <!-- TILES/APPS -->\r\n        <div class=\"fxs-startboard-layout fxs-flowlayout\">\r\n          <div class=\"fxs-flowlayout-childcontainer\">\r\n            <!-- track by $index -->\r\n            <section *ngFor=\"let tile of portalService.panorama.startboard.tiles.tiles\" class=\"fxs-tile fx-rightClick fxs-flowlayout-element\"\r\n                     [ngClass]=\"{'fxs-tilesize-normal':tile.size=='normal', 'fxs-tilesize-mini':tile.size=='mini', 'fxs-tilesize-herowide':tile.size=='herowide'}\"\r\n                     [ngStyle]=\"{'left': tile.left, 'top': tile.top}\">\r\n              <div class=\"fxs-part fxs-part-clickable\" style=\"cursor:pointer;\"\r\n                   (click)=\"tile.clicked();\">\r\n                <header class=\"fxs-part-title\">\r\n                  <h2 class=\"msportalfx-tooltip-overflow\">{{tile.title}}</h2>\r\n                  <h3 class=\"msportalfx-tooltip-overflow\">{{tile.subTitle}}</h3>\r\n                </header>\r\n                <section class=\"fxs-part-content css-scope-HubsExtension\"></section>\r\n              </div>\r\n              <div class=\"fxs-title-overlay\"></div>\r\n            </section>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- BLADES -->\r\n    <div id=\"apa-blade-area\" class=\"fxs-journey-target fxs-journey\">\r\n      <div class=\"fxs-journey-layout fxs-stacklayout fxs-stacklayout-horizontal\">\r\n        <!-- track by $index -->\r\n        <!--<div *ngFor=\"let blade of portalService.areaBlades.blades\" class=\"azureportalblade fxs-stacklayout-child\" ng-include=\"blade.path\"></div>-->\r\n        <router-outlet-named [name]=\"blade.bladeId\" *ngFor=\"let blade of portalService.areaBlades.blades\"></router-outlet-named>\r\n        <!--<div *ngFor=\"let blade of portalService.areaBlades.blades\">{{blade}}</div>-->\r\n      </div>\r\n    </div>\r\n    <!-- NOTIFICATION AREA -->\r\n    <div id=\"apa-notification-area\" style=\"display: none;\">\r\n      <div style=\"height:40px;background-color:#202428\"></div>\r\n      <button ng-if=\"!portalService.areaNotification.path\" (click)=\"portalService.areaNotification.hide();\">Schliessen</button>\r\n      <div ng-include=\"portalService.areaNotification.path\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
                }] }
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = function () { return [
        { type: AppService },
        { type: Router }
    ]; };
    return AppComponent;
}());
export { AppComponent };
if (false) {
    /** @type {?} */
    AppComponent.prototype.themeProps;
    /** @type {?} */
    AppComponent.prototype.themes;
    /** @type {?} */
    AppComponent.prototype.portalService;
    /** @type {?} */
    AppComponent.prototype.selectedTheme;
    /** @type {?} */
    AppComponent.prototype.appService;
    /**
     * @type {?}
     * @private
     */
    AppComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUEwRCxNQUFNLGlCQUFpQixDQUFDO0FBRWpHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUV6Qyx5QkFFQzs7OztBQUVELHdCQU1DOzs7Ozs7Ozs7Ozs7O0FBRUQ7SUFrQ0ksc0JBQW1CLFVBQXNCLEVBQVUsTUFBYztRQUE5QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTVCeEQsZUFBVSxHQUFHO1lBQ2xCLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixjQUFjO1NBQ2pCLENBQUM7UUFFTyxXQUFNLEdBQWU7WUFDMUIsT0FBTyxFQUFFO2dCQUNMLGdCQUFnQixFQUFFLE1BQU07Z0JBQ3hCLDJCQUEyQixFQUFFLFNBQVM7Z0JBQ3RDLHFCQUFxQixFQUFFLE1BQU07Z0JBQzdCLG9DQUFvQyxFQUFFLFNBQVM7Z0JBQy9DLG1DQUFtQyxFQUFFLFNBQVM7YUFDakQ7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsZ0JBQWdCLEVBQUUsU0FBUztnQkFDM0IsMkJBQTJCLEVBQUUsU0FBUztnQkFDdEMscUJBQXFCLEVBQUUsU0FBUztnQkFDaEMsb0NBQW9DLEVBQUUsU0FBUztnQkFDL0MsbUNBQW1DLEVBQUUsU0FBUzthQUNqRDtTQUNKLENBQUM7UUFHRixrQkFBYSxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixHQUFHLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVuRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCwrQkFBUTs7O0lBQVI7UUFBQSxpQkFVQztRQVRHLFVBQVU7OztRQUFDLGNBQVEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRWxHLDBEQUEwRDtRQUMxRCw0RUFBNEU7UUFDNUUsbUZBQW1GO1FBQ25GLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxJQUFJOztnQkFDekQsSUFBSSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUgsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFRCwrQkFBUTs7OztJQUFSLFVBQVMsVUFBa0I7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O2dCQTFESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsbWdMQUFtQztpQkFFdEM7Ozs7Z0JBdkJRLFVBQVU7Z0JBRlYsTUFBTTs7SUFnRmYsbUJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQXREWSxZQUFZOzs7SUFDckIsa0NBTUU7O0lBRUYsOEJBZUU7O0lBRUYscUNBQTZCOztJQUM3QixxQ0FBZ0Q7O0lBRXBDLGtDQUE2Qjs7Ozs7SUFBRSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBFdmVudCwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uRXJyb3IgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9hcHAvYXBwLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BvcnRhbC1zZXJ2aWNlJztcbmltcG9ydCB7IEFyZWFOb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi9kb21haW4vYXJlYS1ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgQXJlYUJsYWRlcyB9IGZyb20gJy4uLy4uL2RvbWFpbi9hcmVhLWJsYWRlcyc7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3RpbGUnO1xuXG5pbnRlcmZhY2UgRGlub1RoZW1lcyB7XG4gICAgW25hbWU6IHN0cmluZ106IERpbm9UaGVtZTtcbn1cblxuaW50ZXJmYWNlIERpbm9UaGVtZSB7XG4gICAgJy0tdG9wYmFyLWNvbG9yJzogc3RyaW5nO1xuICAgICctLXRvcGJhci1iYWNrZ3JvdW5kLWNvbG9yJzogc3RyaW5nO1xuICAgICctLXRvcGJhci1ob21lLWNvbG9yJzogc3RyaW5nO1xuICAgICctLWJsYWRlLXN0YXR1c2Jhci1iYWNrZ3JvdW5kLWNvbG9yJzogc3RyaW5nO1xuICAgICctLWJsYWRlLWNvbW1hbmRzLWJhY2tncm91bmQtY29sb3InOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYW5ndWxhci1wb3J0YWwtYXp1cmUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICAgIC8vc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5zY3NzJ10gLy8gYnVpbGQgZXJyb3I6IFVua25vd24gdmVyc2lvbiA2NyBvZiBhbmRyb2lkXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcmVhZG9ubHkgdGhlbWVQcm9wcyA9IFtcbiAgICAgICAgJ2NvbG9yLW1haW4nLFxuICAgICAgICAnY29sb3ItbWFpbi1kYXJrZW4nLFxuICAgICAgICAnY29sb3ItbWFpbi1kYXJrZW4yJyxcbiAgICAgICAgJ2NvbG9yLW1haW4tbGlnaHRlbicsXG4gICAgICAgICdjb2xvci1hY2NlbnQnLFxuICAgIF07XG5cbiAgICByZWFkb25seSB0aGVtZXM6IERpbm9UaGVtZXMgPSB7XG4gICAgICAgICdibGFjayc6IHtcbiAgICAgICAgICAgICctLXRvcGJhci1jb2xvcic6ICcjZmZmJyxcbiAgICAgICAgICAgICctLXRvcGJhci1iYWNrZ3JvdW5kLWNvbG9yJzogJyMxYzFjMWMnLFxuICAgICAgICAgICAgJy0tdG9wYmFyLWhvbWUtY29sb3InOiAnI2ZmZicsXG4gICAgICAgICAgICAnLS1ibGFkZS1zdGF0dXNiYXItYmFja2dyb3VuZC1jb2xvcic6ICcjMjkzNjQ0JyxcbiAgICAgICAgICAgICctLWJsYWRlLWNvbW1hbmRzLWJhY2tncm91bmQtY29sb3InOiAnIzNlNDA0NScsXG4gICAgICAgIH0sXG4gICAgICAgICd3aGl0ZSc6IHtcbiAgICAgICAgICAgICctLXRvcGJhci1jb2xvcic6ICcjMWMxYzFjJyxcbiAgICAgICAgICAgICctLXRvcGJhci1iYWNrZ3JvdW5kLWNvbG9yJzogJyNlZmVmZWYnLFxuICAgICAgICAgICAgJy0tdG9wYmFyLWhvbWUtY29sb3InOiAnIzFjMWMxYycsXG4gICAgICAgICAgICAnLS1ibGFkZS1zdGF0dXNiYXItYmFja2dyb3VuZC1jb2xvcic6ICcjZGNkY2RjJyxcbiAgICAgICAgICAgICctLWJsYWRlLWNvbW1hbmRzLWJhY2tncm91bmQtY29sb3InOiAnI2M3YzdjNycsXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZTtcbiAgICBzZWxlY3RlZFRoZW1lOiBEaW5vVGhlbWUgPSB0aGlzLnRoZW1lc1snYmxhY2snXTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHsgQXBwQ29tcG9uZW50OiAoPGFueT5PYmplY3QpLmlkKHRoaXMpIH0pO1xuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UgPSBuZXcgUG9ydGFsU2VydmljZSgpO1xuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuYXBwU2VydmljZSA9IHRoaXMuYXBwU2VydmljZTtcbiAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFOb3RpZmljYXRpb24gPSBuZXcgQXJlYU5vdGlmaWNhdGlvbih0aGlzLnBvcnRhbFNlcnZpY2UpO1xuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYUJsYWRlcyA9IG5ldyBBcmVhQmxhZGVzKHRoaXMucG9ydGFsU2VydmljZSk7XG5cbiAgICAgICAgdGhpcy5hcHBTZXJ2aWNlLnBvcnRhbFNlcnZpY2UgPSB0aGlzLnBvcnRhbFNlcnZpY2U7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmFwcFNlcnZpY2UuYXBwQ29uZmlnU2VydmljZS5hcHBDb25maWcuaXNTaG93U3BsYXNoU2NyZWVuID0gZmFsc2U7IH0sIDUwMCk7XG5cbiAgICAgICAgLy8gVE9ETzoyMDE5LTA5LTI3L2hwOiBjb252ZXJ0IE5FVyBBUEkgdG8gT0xEIC0gQ29weSBUSUxFU1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlZmFjdG9yIHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5zdGFydGJvYXJkLnRpbGVzXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICB0byB1c2UgdGhpcy5hcHBTZXJ2aWNlLmFwcENvbmZpZ1NlcnZpY2UuYXBwQ29uZmlnLmFwcGJvYXJkXG4gICAgICAgIHRoaXMuYXBwU2VydmljZS5hcHBDb25maWdTZXJ2aWNlLmFwcENvbmZpZy5hcHBib2FyZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5zdGFydGJvYXJkLnRpbGVzLmFkZFRpbGUobmV3IFRpbGUoaXRlbS50aXRsZSwgaXRlbS5yb3V0ZXJQYXRoLCB0aGlzLnBvcnRhbFNlcnZpY2UpKTtcbiAgICAgICAgICAgIHRpbGUuc3ViVGl0bGUgPSBpdGVtLnN1YlRpdGxlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRUaGVtZSh0aGVtZUluZGV4OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRoZW1lID0gdGhpcy50aGVtZXNbdGhlbWVJbmRleF07XG4gICAgfVxufVxuIl19