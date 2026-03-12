import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularPortalAzureModule } from '@ardimedia/angular-portal-azure';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularPortalAzureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
