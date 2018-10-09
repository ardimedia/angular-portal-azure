import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

//import { AppComponent } from './app.component';
import { AngularPortalAzureComponent } from './angular-portal-azure/angular-portal-azure.component';
import { AngularPortalAzureBladeComponent } from './angular-portal-azure-blade/angular-portal-azure-blade.component';

@NgModule({
  declarations: [
    //AppComponent,
    AngularPortalAzureComponent,
    AngularPortalAzureBladeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [
    AngularPortalAzureComponent,
    AngularPortalAzureBladeComponent
  ],
  //bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    // Do the following either here ...
    const el1 = createCustomElement(AngularPortalAzureComponent, { injector: this.injector });
    customElements.define('app-angular-portal-azure', el1);

    //const el2 = createCustomElement(AngularPortalAzureBladeComponent, { injector: this.injector });
    //customElements.define('app-angular-portal-azure-blade', el2);
  }
  ngDoBootstrap() {
    // ... or here
    //const el = createCustomElement(AngularPortalAzureComponent, { injector: this.injector });
    //customElements.define('app-angular-portal-azure', el);
  }
}
