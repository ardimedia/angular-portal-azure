/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppConfig } from './domain/app-config';
import { AppRoutingModule } from './app-routing.module';
import { AppboardComponent } from '../lib/component/dashboard/appboard/appboard.component';
import { PageNotFoundComponent } from '../lib/component/general/page-not-found/page-not-found.component';
import { SplashScreenComponent } from '../lib/component/general/splash-screen/splash-screen.component';
import { AppComponent } from './component/app/app.component';
import { NavComponent } from './component/nav/nav.component';
import { GridComponent } from './component/grid/grid.component';
import { BladeComponent } from './component/blade/blade.component';
import { BladeService } from './service/blade/blade.service';
import { PortalService } from './domain/portal-service';
import { BrowserService } from './service/browser/browser.service';
import { RouterOutletNamedDirective } from './directive/router-outlet-named/router-outlet-named.directive';
import { ThemingDirective } from './directive/theming/theming.directive';
export class AngularPortalAzureModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('OneSysCoreModule is already loaded. Import it in only in one AppModule.');
        }
    }
    /**
     * @param {?} appConfig
     * @return {?}
     */
    static forRoot(appConfig) {
        return {
            ngModule: AngularPortalAzureModule,
            providers: [
                { provide: AppConfig, useValue: appConfig }
            ]
        };
    }
}
AngularPortalAzureModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    // Component
                    AppboardComponent,
                    PageNotFoundComponent,
                    SplashScreenComponent,
                    AppComponent,
                    NavComponent,
                    GridComponent,
                    BladeComponent,
                    // Directives
                    RouterOutletNamedDirective,
                    ThemingDirective
                ],
                providers: [
                    PortalService,
                    BladeService,
                    BrowserService
                ],
                imports: [
                    CommonModule,
                    FormsModule,
                    AppRoutingModule // Should be last, since it contains the ** route
                ],
                exports: [
                    // Component
                    AppComponent,
                    PageNotFoundComponent,
                    SplashScreenComponent,
                    NavComponent,
                    GridComponent,
                    BladeComponent,
                    // Directives
                    RouterOutletNamedDirective,
                    ThemingDirective
                ]
            },] }
];
/** @nocollapse */
AngularPortalAzureModule.ctorParameters = () => [
    { type: AngularPortalAzureModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1wb3J0YWwtYXp1cmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1wb3J0YWwtYXp1cmUvIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1wb3J0YWwtYXp1cmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBRXZHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUMzRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQXVDekUsTUFBTSxPQUFPLHdCQUF3Qjs7OztJQUNqQyxZQUFvQyxZQUFzQztRQUN0RSxJQUFJLFlBQVksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQ1gseUVBQXlFLENBQUMsQ0FBQztTQUNsRjtJQUNMLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFvQjtRQUMvQixPQUFPO1lBQ0gsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxTQUFTLEVBQUU7Z0JBQ1AsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUU7YUFDOUM7U0FDSixDQUFDO0lBQ04sQ0FBQzs7O1lBcERKLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsWUFBWTtvQkFDWixpQkFBaUI7b0JBQ2pCLHFCQUFxQjtvQkFDckIscUJBQXFCO29CQUNyQixZQUFZO29CQUNaLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsMEJBQTBCO29CQUMxQixnQkFBZ0I7aUJBQ25CO2dCQUNELFNBQVMsRUFBRTtvQkFDUCxhQUFhO29CQUNiLFlBQVk7b0JBQ1osY0FBYztpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxnQkFBZ0IsQ0FBQyxpREFBaUQ7aUJBQ3JFO2dCQUNELE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLFlBQVk7b0JBQ1oscUJBQXFCO29CQUNyQixxQkFBcUI7b0JBQ3JCLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsMEJBQTBCO29CQUMxQixnQkFBZ0I7aUJBQ25CO2FBQ0o7Ozs7WUFFcUQsd0JBQXdCLHVCQUE3RCxRQUFRLFlBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGYsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgQXBwQ29uZmlnIH0gZnJvbSAnLi9kb21haW4vYXBwLWNvbmZpZyc7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5cbmltcG9ydCB7IEFwcGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi4vbGliL2NvbXBvbmVudC9kYXNoYm9hcmQvYXBwYm9hcmQvYXBwYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFBhZ2VOb3RGb3VuZENvbXBvbmVudCB9IGZyb20gJy4uL2xpYi9jb21wb25lbnQvZ2VuZXJhbC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3BsYXNoU2NyZWVuQ29tcG9uZW50IH0gZnJvbSAnLi4vbGliL2NvbXBvbmVudC9nZW5lcmFsL3NwbGFzaC1zY3JlZW4vc3BsYXNoLXNjcmVlbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9hcHAvYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9uYXYvbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvZ3JpZC9ncmlkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCbGFkZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2JsYWRlL2JsYWRlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEJsYWRlU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9ibGFkZS9ibGFkZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBvcnRhbFNlcnZpY2UgfSBmcm9tICcuL2RvbWFpbi9wb3J0YWwtc2VydmljZSc7XG5pbXBvcnQgeyBCcm93c2VyU2VydmljZSB9IGZyb20gJy4vc2VydmljZS9icm93c2VyL2Jyb3dzZXIuc2VydmljZSc7XG5cbmltcG9ydCB7IFJvdXRlck91dGxldE5hbWVkRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvcm91dGVyLW91dGxldC1uYW1lZC9yb3V0ZXItb3V0bGV0LW5hbWVkLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUaGVtaW5nRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUvdGhlbWluZy90aGVtaW5nLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIC8vIENvbXBvbmVudFxuICAgICAgICBBcHBib2FyZENvbXBvbmVudCxcbiAgICAgICAgUGFnZU5vdEZvdW5kQ29tcG9uZW50LFxuICAgICAgICBTcGxhc2hTY3JlZW5Db21wb25lbnQsXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTmF2Q29tcG9uZW50LFxuICAgICAgICBHcmlkQ29tcG9uZW50LFxuICAgICAgICBCbGFkZUNvbXBvbmVudCxcbiAgICAgICAgLy8gRGlyZWN0aXZlc1xuICAgICAgICBSb3V0ZXJPdXRsZXROYW1lZERpcmVjdGl2ZSxcbiAgICAgICAgVGhlbWluZ0RpcmVjdGl2ZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFBvcnRhbFNlcnZpY2UsXG4gICAgICAgIEJsYWRlU2VydmljZSxcbiAgICAgICAgQnJvd3NlclNlcnZpY2VcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBGb3Jtc01vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSAvLyBTaG91bGQgYmUgbGFzdCwgc2luY2UgaXQgY29udGFpbnMgdGhlICoqIHJvdXRlXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIC8vIENvbXBvbmVudFxuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIFBhZ2VOb3RGb3VuZENvbXBvbmVudCxcbiAgICAgICAgU3BsYXNoU2NyZWVuQ29tcG9uZW50LFxuICAgICAgICBOYXZDb21wb25lbnQsXG4gICAgICAgIEdyaWRDb21wb25lbnQsXG4gICAgICAgIEJsYWRlQ29tcG9uZW50LFxuICAgICAgICAvLyBEaXJlY3RpdmVzXG4gICAgICAgIFJvdXRlck91dGxldE5hbWVkRGlyZWN0aXZlLFxuICAgICAgICBUaGVtaW5nRGlyZWN0aXZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyUG9ydGFsQXp1cmVNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQW5ndWxhclBvcnRhbEF6dXJlTW9kdWxlKSB7XG4gICAgICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAnT25lU3lzQ29yZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIG9ubHkgaW4gb25lIEFwcE1vZHVsZS4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBmb3JSb290KGFwcENvbmZpZzogQXBwQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogQW5ndWxhclBvcnRhbEF6dXJlTW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBBcHBDb25maWcsIHVzZVZhbHVlOiBhcHBDb25maWcgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==