import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularPortalAzureComponent } from './angular-portal-azure.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AngularPortalAzureComponent,
        HomeComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AngularPortalAzureComponent,
        HomeComponent
    ]
})
export class AngularPortalAzureModule { }
