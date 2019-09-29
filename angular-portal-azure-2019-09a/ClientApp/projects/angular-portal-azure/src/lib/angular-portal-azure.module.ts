import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
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

@NgModule({
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
})
export class AngularPortalAzureModule {
    constructor(@Optional() @SkipSelf() parentModule: AngularPortalAzureModule) {
        if (parentModule) {
            throw new Error(
                'OneSysCoreModule is already loaded. Import it in only in one AppModule.');
        }
    }

    static forRoot(appConfig: AppConfig): ModuleWithProviders {
        return {
            ngModule: AngularPortalAzureModule,
            providers: [
                { provide: AppConfig, useValue: appConfig }
            ]
        };
    }
}
