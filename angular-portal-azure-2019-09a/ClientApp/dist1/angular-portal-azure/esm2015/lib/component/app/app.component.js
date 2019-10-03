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
                template: "<div class=\"fxs-portal fxs-theme-blue\">\r\n  <!-- TOOLBAR -->\r\n  <div class=\"fxs-topbar container-fluid row\">\r\n    <div class=\"col-6\" style=\"padding-left: 25px;\">\r\n      <a [routerLink]=\"['/appboard']\" class=\"fxs-topbar-home fxs-has-hover\">{{portalService.panorama.title}}</a>\r\n    </div>\r\n    <div class=\"col-6 fxs-avatarmenu-tenant-container\" style=\"padding-right:10px;\">\r\n      <a class=\"fxs-has-hover\" href=\"/Account/Manage\">\r\n        <span>{{portalService.panorama.avatarMenu.userAccount.name}}</span><br />\r\n        <span>{{portalService.panorama.avatarMenu.userAccount.userName}}</span>\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <div id=\"apa-portal-scroll\" class=\"fxs-portal-content fxs-panorama\" style=\"height:calc(100% - 40px)\">\r\n    <!-- PRIMARY ROUTER OUTLET -->\r\n    <!-- E.G.: APPBOARD -->\r\n    <router-outlet></router-outlet>\r\n    <!-- BLADES -->\r\n    <div id=\"apa-blade-area\" class=\"fxs-journey-target fxs-journey\">\r\n      <div class=\"fxs-journey-layout fxs-stacklayout fxs-stacklayout-horizontal\">\r\n        <!-- track by $index -->\r\n        <!--<div *ngFor=\"let blade of portalService.areaBlades.blades\" class=\"azureportalblade fxs-stacklayout-child\" ng-include=\"blade.path\"></div>-->\r\n        <!--<router-outlet [name]=\"blade.bladeId\" *ngFor=\"let blade of appService.appConfigService.appConfig.blades\"></router-outlet>-->\r\n        <router-outlet-named [name]=\"blade.bladeId\" *ngFor=\"let blade of appService.appConfigService.appConfig.blades\"></router-outlet-named>\r\n      </div>\r\n    </div>\r\n    <!-- NOTIFICATION AREA -->\r\n    <div id=\"apa-notification-area\" style=\"display: none;\">\r\n      <div style=\"height:40px;background-color:#202428\"></div>\r\n      <button ng-if=\"!portalService.areaNotification.path\" (click)=\"portalService.areaNotification.hide();\">Schliessen</button>\r\n      <div ng-include=\"portalService.areaNotification.path\"></div>\r\n    </div>\r\n  </div>\r\n",
                styles: [""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUEwRCxNQUFNLGlCQUFpQixDQUFDO0FBRWpHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUV6Qyx5QkFFQzs7OztBQUVELHdCQU1DOzs7Ozs7Ozs7Ozs7O0FBT0QsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBNkJyQixZQUFtQixVQUFzQixFQUFVLE1BQWM7UUFBOUMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUE1QnhELGVBQVUsR0FBRztZQUNsQixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsY0FBYztTQUNqQixDQUFDO1FBRU8sV0FBTSxHQUFlO1lBQzFCLE9BQU8sRUFBRTtnQkFDTCxnQkFBZ0IsRUFBRSxNQUFNO2dCQUN4QiwyQkFBMkIsRUFBRSxTQUFTO2dCQUN0QyxxQkFBcUIsRUFBRSxNQUFNO2dCQUM3QixvQ0FBb0MsRUFBRSxTQUFTO2dCQUMvQyxtQ0FBbUMsRUFBRSxTQUFTO2FBQ2pEO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGdCQUFnQixFQUFFLFNBQVM7Z0JBQzNCLDJCQUEyQixFQUFFLFNBQVM7Z0JBQ3RDLHFCQUFxQixFQUFFLFNBQVM7Z0JBQ2hDLG9DQUFvQyxFQUFFLFNBQVM7Z0JBQy9DLG1DQUFtQyxFQUFFLFNBQVM7YUFDakQ7U0FDSixDQUFDO1FBR0Ysa0JBQWEsR0FBYyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELFFBQVE7UUFDSixVQUFVOzs7UUFBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7UUFFbEcsMERBQTBEO1FBQzFELDRFQUE0RTtRQUM1RSxtRkFBbUY7UUFDbkYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFOztnQkFDN0QsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUgsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsVUFBa0I7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7OztZQXpESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsODlEQUFtQzs7YUFFdEM7Ozs7WUF2QlEsVUFBVTtZQUZWLE1BQU07Ozs7SUEyQlgsa0NBTUU7O0lBRUYsOEJBZUU7O0lBRUYscUNBQTZCOztJQUM3QixxQ0FBZ0Q7O0lBRXBDLGtDQUE2Qjs7Ozs7SUFBRSw4QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyLCBFdmVudCwgTmF2aWdhdGlvblN0YXJ0LCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uRXJyb3IgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBcHBTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9hcHAvYXBwLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BvcnRhbC1zZXJ2aWNlJztcbmltcG9ydCB7IEFyZWFOb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi9kb21haW4vYXJlYS1ub3RpZmljYXRpb24nO1xuaW1wb3J0IHsgQXJlYUJsYWRlcyB9IGZyb20gJy4uLy4uL2RvbWFpbi9hcmVhLWJsYWRlcyc7XG5pbXBvcnQgeyBUaWxlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3RpbGUnO1xuXG5pbnRlcmZhY2UgRGlub1RoZW1lcyB7XG4gICAgW25hbWU6IHN0cmluZ106IERpbm9UaGVtZTtcbn1cblxuaW50ZXJmYWNlIERpbm9UaGVtZSB7XG4gICAgJy0tdG9wYmFyLWNvbG9yJzogc3RyaW5nO1xuICAgICctLXRvcGJhci1iYWNrZ3JvdW5kLWNvbG9yJzogc3RyaW5nO1xuICAgICctLXRvcGJhci1ob21lLWNvbG9yJzogc3RyaW5nO1xuICAgICctLWJsYWRlLXN0YXR1c2Jhci1iYWNrZ3JvdW5kLWNvbG9yJzogc3RyaW5nO1xuICAgICctLWJsYWRlLWNvbW1hbmRzLWJhY2tncm91bmQtY29sb3InOiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYW5ndWxhci1wb3J0YWwtYXp1cmUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2FwcC5jb21wb25lbnQuc2NzcyddIC8vIGJ1aWxkIGVycm9yOiBVbmtub3duIHZlcnNpb24gNjcgb2YgYW5kcm9pZFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHJlYWRvbmx5IHRoZW1lUHJvcHMgPSBbXG4gICAgICAgICdjb2xvci1tYWluJyxcbiAgICAgICAgJ2NvbG9yLW1haW4tZGFya2VuJyxcbiAgICAgICAgJ2NvbG9yLW1haW4tZGFya2VuMicsXG4gICAgICAgICdjb2xvci1tYWluLWxpZ2h0ZW4nLFxuICAgICAgICAnY29sb3ItYWNjZW50JyxcbiAgICBdO1xuXG4gICAgcmVhZG9ubHkgdGhlbWVzOiBEaW5vVGhlbWVzID0ge1xuICAgICAgICAnYmxhY2snOiB7XG4gICAgICAgICAgICAnLS10b3BiYXItY29sb3InOiAnI2ZmZicsXG4gICAgICAgICAgICAnLS10b3BiYXItYmFja2dyb3VuZC1jb2xvcic6ICcjMWMxYzFjJyxcbiAgICAgICAgICAgICctLXRvcGJhci1ob21lLWNvbG9yJzogJyNmZmYnLFxuICAgICAgICAgICAgJy0tYmxhZGUtc3RhdHVzYmFyLWJhY2tncm91bmQtY29sb3InOiAnIzI5MzY0NCcsXG4gICAgICAgICAgICAnLS1ibGFkZS1jb21tYW5kcy1iYWNrZ3JvdW5kLWNvbG9yJzogJyMzZTQwNDUnLFxuICAgICAgICB9LFxuICAgICAgICAnd2hpdGUnOiB7XG4gICAgICAgICAgICAnLS10b3BiYXItY29sb3InOiAnIzFjMWMxYycsXG4gICAgICAgICAgICAnLS10b3BiYXItYmFja2dyb3VuZC1jb2xvcic6ICcjZWZlZmVmJyxcbiAgICAgICAgICAgICctLXRvcGJhci1ob21lLWNvbG9yJzogJyMxYzFjMWMnLFxuICAgICAgICAgICAgJy0tYmxhZGUtc3RhdHVzYmFyLWJhY2tncm91bmQtY29sb3InOiAnI2RjZGNkYycsXG4gICAgICAgICAgICAnLS1ibGFkZS1jb21tYW5kcy1iYWNrZ3JvdW5kLWNvbG9yJzogJyNjN2M3YzcnLFxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHBvcnRhbFNlcnZpY2U6IFBvcnRhbFNlcnZpY2U7XG4gICAgc2VsZWN0ZWRUaGVtZTogRGlub1RoZW1lID0gdGhpcy50aGVtZXNbJ2JsYWNrJ107XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYXBwU2VydmljZTogQXBwU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UgPSBuZXcgUG9ydGFsU2VydmljZSgpO1xuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuYXBwU2VydmljZSA9IHRoaXMuYXBwU2VydmljZTtcbiAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFOb3RpZmljYXRpb24gPSBuZXcgQXJlYU5vdGlmaWNhdGlvbih0aGlzLnBvcnRhbFNlcnZpY2UpO1xuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYUJsYWRlcyA9IG5ldyBBcmVhQmxhZGVzKHRoaXMucG9ydGFsU2VydmljZSk7XG5cbiAgICAgICAgdGhpcy5hcHBTZXJ2aWNlLnBvcnRhbFNlcnZpY2UgPSB0aGlzLnBvcnRhbFNlcnZpY2U7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmFwcFNlcnZpY2UuYXBwQ29uZmlnU2VydmljZS5hcHBDb25maWcuaXNTaG93U3BsYXNoU2NyZWVuID0gZmFsc2U7IH0sIDUwMCk7XG5cbiAgICAgICAgLy8gVE9ETzoyMDE5LTA5LTI3L2hwOiBjb252ZXJ0IE5FVyBBUEkgdG8gT0xEIC0gQ29weSBUSUxFU1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHJlZmFjdG9yIHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5zdGFydGJvYXJkLnRpbGVzXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICB0byB1c2UgdGhpcy5hcHBTZXJ2aWNlLmFwcENvbmZpZ1NlcnZpY2UuYXBwQ29uZmlnLmFwcGJvYXJkXG4gICAgICAgIHRoaXMuYXBwU2VydmljZS5hcHBDb25maWdTZXJ2aWNlLmFwcENvbmZpZy5hcHBib2FyZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5zdGFydGJvYXJkLnRpbGVzLmFkZFRpbGUobmV3IFRpbGUoaXRlbS50aXRsZSwgaXRlbS5yb3V0ZXJQYXRoLCB0aGlzLnBvcnRhbFNlcnZpY2UpKTtcbiAgICAgICAgICAgIHRpbGUuc3ViVGl0bGUgPSBpdGVtLnN1YlRpdGxlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRUaGVtZSh0aGVtZUluZGV4OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFRoZW1lID0gdGhpcy50aGVtZXNbdGhlbWVJbmRleF07XG4gICAgfVxufVxuIl19