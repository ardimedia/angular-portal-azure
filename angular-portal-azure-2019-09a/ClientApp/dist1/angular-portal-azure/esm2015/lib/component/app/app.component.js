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
export class AppComponent {
    /**
     * @param {?} appService
     * @param {?} router
     */
    constructor(appService, router) {
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
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => { this.appService.appConfigService.appConfig.isShowSplashScreen = false; }), 500);
        // TODO:2019-09-27/hp: convert NEW API to OLD - Copy TILES
        //                     refactor this.portalService.panorama.startboard.tiles
        //                       to use this.appService.appConfigService.appConfig.appboard
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
    /**
     * @param {?} themeIndex
     * @return {?}
     */
    setTheme(themeIndex) {
        this.selectedTheme = this.themes[themeIndex];
    }
}
AppComponent.decorators = [
    { type: Component, args: [{
                selector: 'angular-portal-azure',
                template: "<div class=\"fxs-portal fxs-theme-blue\">\r\n  <!-- TOOLBAR -->\r\n  <div class=\"fxs-topbar container-fluid row\">\r\n    <div class=\"col-6\" style=\"padding-left: 25px;\">\r\n      <a href=\"#\" class=\"fxs-topbar-home fxs-has-hover\">{{portalService.panorama.title}}</a>\r\n    </div>\r\n    <div class=\"col-6 fxs-avatarmenu-tenant-container\" style=\"padding-right:10px;\">\r\n      <a class=\"fxs-has-hover\" href=\"/Account/Manage\">\r\n        <span>{{portalService.panorama.avatarMenu.userAccount.name}}</span><br />\r\n        <span>{{portalService.panorama.avatarMenu.userAccount.userName}}</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div id=\"apa-portal-scroll\" class=\"fxs-portal-content fxs-panorama\" style=\"height:calc(100% - 40px)\">\r\n    <!-- PANORAMA -->\r\n    {{portalService.panorama.isVisible}}\r\n    {{portalService.panorama.startboard.tiles.showTiles}}\r\n    <div class=\"fxs-panorama-homearea\" style=\"padding-top:45px;\"\r\n         [ngClass]=\"{'collapsed': !portalService.panorama.startboard.tiles.showTiles}\"\r\n         [hidden]=\"!portalService.panorama.isVisible\">\r\n      <div class=\"fxs-startboard-target fxs-startboard fx-rightClick\"\r\n           [ngClass]=\"{'collapsed': !portalService.panorama.startboard.tiles.showTiles}\">\r\n        <!-- INFO AREA -->\r\n        <div hidden class=\"xfxs-part fxs-part-clickable\" style=\"background-color:#293644; padding:25px; max-width: 800px;margin-bottom:15px;\">\r\n          <header class=\"xfxs-part-title\" style=\"color:white\">\r\n            <h3 class=\"xmsportalfx-tooltip-overflow\">Redesign</h3>\r\n            <p class=\"xmsportalfx-tooltip-overflow\" style=\"margin:0;padding:0\">\r\n              Zur Zeit stehen nicht alle Applikation in der PREVIEW-Umgebung zur Verf\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00BCgung. <b>\r\n                Falls Ihre Applikation unten nicht aufgelistet wird,\r\n                entfernen sie in der URL den Teil mit [.preview] und navigieren Sie somit zur STANDARD-Umgebung.\r\n                In der STANDARD-Umgebung k\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00B6nnen Sie wie gewohnt weiterarbeiten.\r\n              </b>\r\n              In den kommenden Monaten werden alle Applikationen auf das neue Layout angepasst.\r\n              <br /><br />Bei Fragen stehen wir gerne zur Verf\u00C3\u0192\u00C6\u2019\u00C3\u201A\u00C2\u00BCgung.\r\n              <br />Ihr Ardimedia Team\r\n            </p>\r\n          </header>\r\n          <section class=\"fxs-part-content css-scope-HubsExtension\"></section>\r\n        </div>\r\n        <!-- NO TILES/APPS -->\r\n        <div *ngIf=\"portalService.panorama.startboard.tiles.tiles.length === 0\" class=\"xfxs-part fxs-part-clickable\" style=\"background-color:#293644; padding:25px; max-width: 800px;margin-bottom:15px;height:auto;\">\r\n          <header class=\"xfxs-part-title\" style=\"color:white\">\r\n            <h3 class=\"xmsportalfx-tooltip-overflow\">Keine Applikationen zugeordnet</h3>\r\n            <p class=\"xmsportalfx-tooltip-overflow\" style=\"margin:0;padding:0\">\r\n              Wenden Sie sich bitte an den Administrator damit entsprechende Applikationen zugeordnet werden k\u00F6nnen.\r\n              <br />Ihr Ardimedia Team\r\n            </p>\r\n          </header>\r\n        </div>\r\n        <!-- TILES/APPS -->\r\n        <div class=\"fxs-startboard-layout fxs-flowlayout\">\r\n          <div class=\"fxs-flowlayout-childcontainer\">\r\n            <!-- track by $index -->\r\n            <section *ngFor=\"let tile of portalService.panorama.startboard.tiles.tiles\" class=\"fxs-tile fx-rightClick fxs-flowlayout-element\"\r\n                     [ngClass]=\"{'fxs-tilesize-normal':tile.size=='normal', 'fxs-tilesize-mini':tile.size=='mini', 'fxs-tilesize-herowide':tile.size=='herowide'}\"\r\n                     [ngStyle]=\"{'left': tile.left, 'top': tile.top}\">\r\n              <div class=\"fxs-part fxs-part-clickable\" style=\"cursor:pointer;\"\r\n                   (click)=\"tile.clicked();\">\r\n                <header class=\"fxs-part-title\">\r\n                  <h2 class=\"msportalfx-tooltip-overflow\">{{tile.title}}</h2>\r\n                  <h3 class=\"msportalfx-tooltip-overflow\">{{tile.subTitle}}</h3>\r\n                </header>\r\n                <section class=\"fxs-part-content css-scope-HubsExtension\"></section>\r\n              </div>\r\n              <div class=\"fxs-title-overlay\"></div>\r\n            </section>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- BLADES -->\r\n    <div id=\"apa-blade-area\" class=\"fxs-journey-target fxs-journey\">\r\n      <div class=\"fxs-journey-layout fxs-stacklayout fxs-stacklayout-horizontal\">\r\n        <!-- track by $index -->\r\n        <!--<div *ngFor=\"let blade of portalService.areaBlades.blades\" class=\"azureportalblade fxs-stacklayout-child\" ng-include=\"blade.path\"></div>-->\r\n        <router-outlet-named [name]=\"blade.bladeId\" *ngFor=\"let blade of portalService.areaBlades.blades\"></router-outlet-named>\r\n        <!--<div *ngFor=\"let blade of portalService.areaBlades.blades\">{{blade}}</div>-->\r\n      </div>\r\n    </div>\r\n    <!-- NOTIFICATION AREA -->\r\n    <div id=\"apa-notification-area\" style=\"display: none;\">\r\n      <div style=\"height:40px;background-color:#202428\"></div>\r\n      <button ng-if=\"!portalService.areaNotification.path\" (click)=\"portalService.areaNotification.hide();\">Schliessen</button>\r\n      <div ng-include=\"portalService.areaNotification.path\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
            }] }
];
/** @nocollapse */
AppComponent.ctorParameters = () => [
    { type: AppService },
    { type: Router }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUEwRCxNQUFNLGlCQUFpQixDQUFDO0FBRWpHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUV6Qyx5QkFFQzs7OztBQUVELHdCQU1DOzs7Ozs7Ozs7Ozs7O0FBT0QsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBNkJyQixZQUFtQixVQUFzQixFQUFVLE1BQWM7UUFBOUMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUE1QnhELGVBQVUsR0FBRztZQUNsQixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsY0FBYztTQUNqQixDQUFDO1FBRU8sV0FBTSxHQUFlO1lBQzFCLE9BQU8sRUFBRTtnQkFDTCxnQkFBZ0IsRUFBRSxNQUFNO2dCQUN4QiwyQkFBMkIsRUFBRSxTQUFTO2dCQUN0QyxxQkFBcUIsRUFBRSxNQUFNO2dCQUM3QixvQ0FBb0MsRUFBRSxTQUFTO2dCQUMvQyxtQ0FBbUMsRUFBRSxTQUFTO2FBQ2pEO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGdCQUFnQixFQUFFLFNBQVM7Z0JBQzNCLDJCQUEyQixFQUFFLFNBQVM7Z0JBQ3RDLHFCQUFxQixFQUFFLFNBQVM7Z0JBQ2hDLG9DQUFvQyxFQUFFLFNBQVM7Z0JBQy9DLG1DQUFtQyxFQUFFLFNBQVM7YUFDakQ7U0FDSixDQUFDO1FBR0Ysa0JBQWEsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxtQkFBSyxNQUFNLEVBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNKLFVBQVU7OztRQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUVsRywwREFBMEQ7UUFDMUQsNEVBQTRFO1FBQzVFLG1GQUFtRjtRQUNuRixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7O2dCQUM3RCxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbEMsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxVQUFrQjtRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7O1lBMURKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxtZ0xBQW1DO2FBRXRDOzs7O1lBdkJRLFVBQVU7WUFGVixNQUFNOzs7O0lBMkJYLGtDQU1FOztJQUVGLDhCQWVFOztJQUVGLHFDQUE2Qjs7SUFDN0IscUNBQWdEOztJQUVwQyxrQ0FBNkI7Ozs7O0lBQUUsOEJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgRXZlbnQsIE5hdmlnYXRpb25TdGFydCwgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvbkVycm9yIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQXBwU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvYXBwL2FwcC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9wb3J0YWwtc2VydmljZSc7XG5pbXBvcnQgeyBBcmVhTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vZG9tYWluL2FyZWEtbm90aWZpY2F0aW9uJztcbmltcG9ydCB7IEFyZWFCbGFkZXMgfSBmcm9tICcuLi8uLi9kb21haW4vYXJlYS1ibGFkZXMnO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gJy4uLy4uL2RvbWFpbi90aWxlJztcblxuaW50ZXJmYWNlIERpbm9UaGVtZXMge1xuICAgIFtuYW1lOiBzdHJpbmddOiBEaW5vVGhlbWU7XG59XG5cbmludGVyZmFjZSBEaW5vVGhlbWUge1xuICAgICctLXRvcGJhci1jb2xvcic6IHN0cmluZztcbiAgICAnLS10b3BiYXItYmFja2dyb3VuZC1jb2xvcic6IHN0cmluZztcbiAgICAnLS10b3BiYXItaG9tZS1jb2xvcic6IHN0cmluZztcbiAgICAnLS1ibGFkZS1zdGF0dXNiYXItYmFja2dyb3VuZC1jb2xvcic6IHN0cmluZztcbiAgICAnLS1ibGFkZS1jb21tYW5kcy1iYWNrZ3JvdW5kLWNvbG9yJzogc3RyaW5nO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FuZ3VsYXItcG9ydGFsLWF6dXJlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgICAvL3N0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuc2NzcyddIC8vIGJ1aWxkIGVycm9yOiBVbmtub3duIHZlcnNpb24gNjcgb2YgYW5kcm9pZFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHJlYWRvbmx5IHRoZW1lUHJvcHMgPSBbXG4gICAgICAgICdjb2xvci1tYWluJyxcbiAgICAgICAgJ2NvbG9yLW1haW4tZGFya2VuJyxcbiAgICAgICAgJ2NvbG9yLW1haW4tZGFya2VuMicsXG4gICAgICAgICdjb2xvci1tYWluLWxpZ2h0ZW4nLFxuICAgICAgICAnY29sb3ItYWNjZW50JyxcbiAgICBdO1xuXG4gICAgcmVhZG9ubHkgdGhlbWVzOiBEaW5vVGhlbWVzID0ge1xuICAgICAgICAnYmxhY2snOiB7XG4gICAgICAgICAgICAnLS10b3BiYXItY29sb3InOiAnI2ZmZicsXG4gICAgICAgICAgICAnLS10b3BiYXItYmFja2dyb3VuZC1jb2xvcic6ICcjMWMxYzFjJyxcbiAgICAgICAgICAgICctLXRvcGJhci1ob21lLWNvbG9yJzogJyNmZmYnLFxuICAgICAgICAgICAgJy0tYmxhZGUtc3RhdHVzYmFyLWJhY2tncm91bmQtY29sb3InOiAnIzI5MzY0NCcsXG4gICAgICAgICAgICAnLS1ibGFkZS1jb21tYW5kcy1iYWNrZ3JvdW5kLWNvbG9yJzogJyMzZTQwNDUnLFxuICAgICAgICB9LFxuICAgICAgICAnd2hpdGUnOiB7XG4gICAgICAgICAgICAnLS10b3BiYXItY29sb3InOiAnIzFjMWMxYycsXG4gICAgICAgICAgICAnLS10b3BiYXItYmFja2dyb3VuZC1jb2xvcic6ICcjZWZlZmVmJyxcbiAgICAgICAgICAgICctLXRvcGJhci1ob21lLWNvbG9yJzogJyMxYzFjMWMnLFxuICAgICAgICAgICAgJy0tYmxhZGUtc3RhdHVzYmFyLWJhY2tncm91bmQtY29sb3InOiAnI2RjZGNkYycsXG4gICAgICAgICAgICAnLS1ibGFkZS1jb21tYW5kcy1iYWNrZ3JvdW5kLWNvbG9yJzogJyNjN2M3YzcnLFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHBvcnRhbFNlcnZpY2U6IFBvcnRhbFNlcnZpY2U7XG4gICAgc2VsZWN0ZWRUaGVtZTogRGlub1RoZW1lID0gdGhpcy50aGVtZXNbJ2JsYWNrJ107XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU2VydmljZTogQXBwU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICBjb25zb2xlLmxvZyh7IEFwcENvbXBvbmVudDogKDxhbnk+T2JqZWN0KS5pZCh0aGlzKSB9KTtcbiAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlID0gbmV3IFBvcnRhbFNlcnZpY2UoKTtcbiAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLmFwcFNlcnZpY2UgPSB0aGlzLmFwcFNlcnZpY2U7XG4gICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hcmVhTm90aWZpY2F0aW9uID0gbmV3IEFyZWFOb3RpZmljYXRpb24odGhpcy5wb3J0YWxTZXJ2aWNlKTtcbiAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFCbGFkZXMgPSBuZXcgQXJlYUJsYWRlcyh0aGlzLnBvcnRhbFNlcnZpY2UpO1xuXG4gICAgICAgIHRoaXMuYXBwU2VydmljZS5wb3J0YWxTZXJ2aWNlID0gdGhpcy5wb3J0YWxTZXJ2aWNlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5hcHBTZXJ2aWNlLmFwcENvbmZpZ1NlcnZpY2UuYXBwQ29uZmlnLmlzU2hvd1NwbGFzaFNjcmVlbiA9IGZhbHNlOyB9LCA1MDApO1xuXG4gICAgICAgIC8vIFRPRE86MjAxOS0wOS0yNy9ocDogY29udmVydCBORVcgQVBJIHRvIE9MRCAtIENvcHkgVElMRVNcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICByZWZhY3RvciB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuc3RhcnRib2FyZC50aWxlc1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgdG8gdXNlIHRoaXMuYXBwU2VydmljZS5hcHBDb25maWdTZXJ2aWNlLmFwcENvbmZpZy5hcHBib2FyZFxuICAgICAgICB0aGlzLmFwcFNlcnZpY2UuYXBwQ29uZmlnU2VydmljZS5hcHBDb25maWcuYXBwYm9hcmQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRpbGUgPSB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuc3RhcnRib2FyZC50aWxlcy5hZGRUaWxlKG5ldyBUaWxlKGl0ZW0udGl0bGUsIGl0ZW0ucm91dGVyUGF0aCwgdGhpcy5wb3J0YWxTZXJ2aWNlKSk7XG4gICAgICAgICAgICB0aWxlLnN1YlRpdGxlID0gaXRlbS5zdWJUaXRsZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0VGhlbWUodGhlbWVJbmRleDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRUaGVtZSA9IHRoaXMudGhlbWVzW3RoZW1lSW5kZXhdO1xuICAgIH1cbn1cbiJdfQ==