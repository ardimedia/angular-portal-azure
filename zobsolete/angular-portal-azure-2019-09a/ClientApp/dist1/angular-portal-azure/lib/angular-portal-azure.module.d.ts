import { ModuleWithProviders } from '@angular/core';
import { AppConfig } from './domain/app-config';
export declare class AngularPortalAzureModule {
    constructor(parentModule: AngularPortalAzureModule);
    static forRoot(appConfig: AppConfig): ModuleWithProviders;
}
