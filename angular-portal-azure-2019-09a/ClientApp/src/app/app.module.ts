import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AngularPortalAzureModule } from 'dist1/angular-portal-azure';
import { AppConfig } from 'dist1/angular-portal-azure';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { Nav1Component } from './component/blades/nav1/nav1.component';
import { Nav2Component } from './component/blades/nav1/nav2.component';
import { CounterComponent } from './component/blades/counter/counter.component';
import { FetchDataComponent } from './component/blades/fetch-data/fetch-data.component';
import { HomeComponent } from './component/blades/home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

const appConfig: AppConfig = new AppConfig();

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        Nav1Component,
        Nav2Component,
        NavMenuComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        AngularPortalAzureModule.forRoot(appConfig) // Should be last, since it contains the ** route
        // OneSysCoreModule.forRoot(appConfig),
        // OneSysPortalAzureModule // Should be last, since it contains the ** route
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
