/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<div class=\"fxs-portal fxs-theme-blue\">\r\n  <!-- TOOLBAR -->\r\n  <div class=\"fxs-topbar container-fluid row\">\r\n    <div class=\"col-6\" style=\"padding-left: 25px;\">\r\n      <a [routerLink]=\"['/appboard']\" class=\"fxs-topbar-home fxs-has-hover\">{{portalService.panorama.title}}</a>\r\n    </div>\r\n    <div class=\"col-6 fxs-avatarmenu-tenant-container\" style=\"padding-right:10px;\">\r\n      <a class=\"fxs-has-hover\" href=\"/Account/Manage\">\r\n        <span>{{portalService.panorama.avatarMenu.userAccount.name}}</span><br />\r\n        <span>{{portalService.panorama.avatarMenu.userAccount.userName}}</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div id=\"apa-portal-scroll\" class=\"fxs-portal-content fxs-panorama\" style=\"height:calc(100% - 40px)\">\r\n    <!-- PRIMARY ROUTER OUTLET -->\r\n    <!-- E.G.: APPBOARD -->\r\n    <router-outlet></router-outlet>\r\n    <!-- BLADES -->\r\n    <div id=\"apa-blade-area\" class=\"fxs-journey-target fxs-journey\">\r\n      <div class=\"fxs-journey-layout fxs-stacklayout fxs-stacklayout-horizontal\">\r\n        <!-- track by $index -->\r\n        <!--<div *ngFor=\"let blade of portalService.areaBlades.blades\" class=\"azureportalblade fxs-stacklayout-child\" ng-include=\"blade.path\"></div>-->\r\n        <!--<router-outlet [name]=\"blade.bladeId\" *ngFor=\"let blade of appService.appConfigService.appConfig.blades\"></router-outlet>-->\r\n        <router-outlet-named [name]=\"blade.bladeId\" *ngFor=\"let blade of appService.appConfigService.appConfig.blades\"></router-outlet-named>\r\n      </div>\r\n    </div>\r\n    <!-- NOTIFICATION AREA -->\r\n    <div id=\"apa-notification-area\" style=\"display: none;\">\r\n      <div style=\"height:40px;background-color:#202428\"></div>\r\n      <button ng-if=\"!portalService.areaNotification.path\" (click)=\"portalService.areaNotification.hide();\">Schliessen</button>\r\n      <div ng-include=\"portalService.areaNotification.path\"></div>\r\n    </div>\r\n  </div>\r\n",
                    styles: [""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUEwRCxNQUFNLGlCQUFpQixDQUFDO0FBRWpHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUV6Qyx5QkFFQzs7OztBQUVELHdCQU1DOzs7Ozs7Ozs7Ozs7O0FBRUQ7SUFrQ0ksc0JBQW1CLFVBQXNCLEVBQVUsTUFBYztRQUE5QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQTVCeEQsZUFBVSxHQUFHO1lBQ2xCLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixjQUFjO1NBQ2pCLENBQUM7UUFFTyxXQUFNLEdBQWU7WUFDMUIsT0FBTyxFQUFFO2dCQUNMLGdCQUFnQixFQUFFLE1BQU07Z0JBQ3hCLDJCQUEyQixFQUFFLFNBQVM7Z0JBQ3RDLHFCQUFxQixFQUFFLE1BQU07Z0JBQzdCLG9DQUFvQyxFQUFFLFNBQVM7Z0JBQy9DLG1DQUFtQyxFQUFFLFNBQVM7YUFDakQ7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsZ0JBQWdCLEVBQUUsU0FBUztnQkFDM0IsMkJBQTJCLEVBQUUsU0FBUztnQkFDdEMscUJBQXFCLEVBQUUsU0FBUztnQkFDaEMsb0NBQW9DLEVBQUUsU0FBUztnQkFDL0MsbUNBQW1DLEVBQUUsU0FBUzthQUNqRDtTQUNKLENBQUM7UUFHRixrQkFBYSxHQUFjLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFHNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRUQsK0JBQVE7OztJQUFSO1FBQUEsaUJBVUM7UUFURyxVQUFVOzs7UUFBQyxjQUFRLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUVsRywwREFBMEQ7UUFDMUQsNEVBQTRFO1FBQzVFLG1GQUFtRjtRQUNuRixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsSUFBSTs7Z0JBQ3pELElBQUksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRUQsK0JBQVE7Ozs7SUFBUixVQUFTLFVBQWtCO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDOztnQkF6REosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLDg5REFBbUM7O2lCQUV0Qzs7OztnQkF2QlEsVUFBVTtnQkFGVixNQUFNOztJQStFZixtQkFBQztDQUFBLEFBMURELElBMERDO1NBckRZLFlBQVk7OztJQUNyQixrQ0FNRTs7SUFFRiw4QkFlRTs7SUFFRixxQ0FBNkI7O0lBQzdCLHFDQUFnRDs7SUFFcEMsa0NBQTZCOzs7OztJQUFFLDhCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIsIEV2ZW50LCBOYXZpZ2F0aW9uU3RhcnQsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25FcnJvciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2FwcC9hcHAuc2VydmljZSc7XG5cbmltcG9ydCB7IFBvcnRhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi9kb21haW4vcG9ydGFsLXNlcnZpY2UnO1xuaW1wb3J0IHsgQXJlYU5vdGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uL2RvbWFpbi9hcmVhLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgeyBBcmVhQmxhZGVzIH0gZnJvbSAnLi4vLi4vZG9tYWluL2FyZWEtYmxhZGVzJztcbmltcG9ydCB7IFRpbGUgfSBmcm9tICcuLi8uLi9kb21haW4vdGlsZSc7XG5cbmludGVyZmFjZSBEaW5vVGhlbWVzIHtcbiAgICBbbmFtZTogc3RyaW5nXTogRGlub1RoZW1lO1xufVxuXG5pbnRlcmZhY2UgRGlub1RoZW1lIHtcbiAgICAnLS10b3BiYXItY29sb3InOiBzdHJpbmc7XG4gICAgJy0tdG9wYmFyLWJhY2tncm91bmQtY29sb3InOiBzdHJpbmc7XG4gICAgJy0tdG9wYmFyLWhvbWUtY29sb3InOiBzdHJpbmc7XG4gICAgJy0tYmxhZGUtc3RhdHVzYmFyLWJhY2tncm91bmQtY29sb3InOiBzdHJpbmc7XG4gICAgJy0tYmxhZGUtY29tbWFuZHMtYmFja2dyb3VuZC1jb2xvcic6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhbmd1bGFyLXBvcnRhbC1henVyZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYXBwLmNvbXBvbmVudC5zY3NzJ10gLy8gYnVpbGQgZXJyb3I6IFVua25vd24gdmVyc2lvbiA2NyBvZiBhbmRyb2lkXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcmVhZG9ubHkgdGhlbWVQcm9wcyA9IFtcbiAgICAgICAgJ2NvbG9yLW1haW4nLFxuICAgICAgICAnY29sb3ItbWFpbi1kYXJrZW4nLFxuICAgICAgICAnY29sb3ItbWFpbi1kYXJrZW4yJyxcbiAgICAgICAgJ2NvbG9yLW1haW4tbGlnaHRlbicsXG4gICAgICAgICdjb2xvci1hY2NlbnQnLFxuICAgIF07XG5cbiAgICByZWFkb25seSB0aGVtZXM6IERpbm9UaGVtZXMgPSB7XG4gICAgICAgICdibGFjayc6IHtcbiAgICAgICAgICAgICctLXRvcGJhci1jb2xvcic6ICcjZmZmJyxcbiAgICAgICAgICAgICctLXRvcGJhci1iYWNrZ3JvdW5kLWNvbG9yJzogJyMxYzFjMWMnLFxuICAgICAgICAgICAgJy0tdG9wYmFyLWhvbWUtY29sb3InOiAnI2ZmZicsXG4gICAgICAgICAgICAnLS1ibGFkZS1zdGF0dXNiYXItYmFja2dyb3VuZC1jb2xvcic6ICcjMjkzNjQ0JyxcbiAgICAgICAgICAgICctLWJsYWRlLWNvbW1hbmRzLWJhY2tncm91bmQtY29sb3InOiAnIzNlNDA0NScsXG4gICAgICAgIH0sXG4gICAgICAgICd3aGl0ZSc6IHtcbiAgICAgICAgICAgICctLXRvcGJhci1jb2xvcic6ICcjMWMxYzFjJyxcbiAgICAgICAgICAgICctLXRvcGJhci1iYWNrZ3JvdW5kLWNvbG9yJzogJyNlZmVmZWYnLFxuICAgICAgICAgICAgJy0tdG9wYmFyLWhvbWUtY29sb3InOiAnIzFjMWMxYycsXG4gICAgICAgICAgICAnLS1ibGFkZS1zdGF0dXNiYXItYmFja2dyb3VuZC1jb2xvcic6ICcjZGNkY2RjJyxcbiAgICAgICAgICAgICctLWJsYWRlLWNvbW1hbmRzLWJhY2tncm91bmQtY29sb3InOiAnI2M3YzdjNycsXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZTtcbiAgICBzZWxlY3RlZFRoZW1lOiBEaW5vVGhlbWUgPSB0aGlzLnRoZW1lc1snYmxhY2snXTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBhcHBTZXJ2aWNlOiBBcHBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIHRoaXMucG9ydGFsU2VydmljZSA9IG5ldyBQb3J0YWxTZXJ2aWNlKCk7XG4gICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hcHBTZXJ2aWNlID0gdGhpcy5hcHBTZXJ2aWNlO1xuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYU5vdGlmaWNhdGlvbiA9IG5ldyBBcmVhTm90aWZpY2F0aW9uKHRoaXMucG9ydGFsU2VydmljZSk7XG4gICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hcmVhQmxhZGVzID0gbmV3IEFyZWFCbGFkZXModGhpcy5wb3J0YWxTZXJ2aWNlKTtcblxuICAgICAgICB0aGlzLmFwcFNlcnZpY2UucG9ydGFsU2VydmljZSA9IHRoaXMucG9ydGFsU2VydmljZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuYXBwU2VydmljZS5hcHBDb25maWdTZXJ2aWNlLmFwcENvbmZpZy5pc1Nob3dTcGxhc2hTY3JlZW4gPSBmYWxzZTsgfSwgNTAwKTtcblxuICAgICAgICAvLyBUT0RPOjIwMTktMDktMjcvaHA6IGNvbnZlcnQgTkVXIEFQSSB0byBPTEQgLSBDb3B5IFRJTEVTXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcmVmYWN0b3IgdGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hLnN0YXJ0Ym9hcmQudGlsZXNcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgIHRvIHVzZSB0aGlzLmFwcFNlcnZpY2UuYXBwQ29uZmlnU2VydmljZS5hcHBDb25maWcuYXBwYm9hcmRcbiAgICAgICAgdGhpcy5hcHBTZXJ2aWNlLmFwcENvbmZpZ1NlcnZpY2UuYXBwQ29uZmlnLmFwcGJvYXJkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGxldCB0aWxlID0gdGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hLnN0YXJ0Ym9hcmQudGlsZXMuYWRkVGlsZShuZXcgVGlsZShpdGVtLnRpdGxlLCBpdGVtLnJvdXRlclBhdGgsIHRoaXMucG9ydGFsU2VydmljZSkpO1xuICAgICAgICAgICAgdGlsZS5zdWJUaXRsZSA9IGl0ZW0uc3ViVGl0bGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFRoZW1lKHRoZW1lSW5kZXg6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNlbGVjdGVkVGhlbWUgPSB0aGlzLnRoZW1lc1t0aGVtZUluZGV4XTtcbiAgICB9XG59XG4iXX0=