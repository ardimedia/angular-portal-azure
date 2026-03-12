import { Injector } from '@angular/core';
import { PortalService } from '../../domain/portal-service';
import { AppConfigService } from '../app-config/app-config.service';
import { BladeService } from '../blade/blade.service';
export declare class AppService {
    appConfigService: AppConfigService;
    bladeService: BladeService;
    constructor(appConfigService: AppConfigService, bladeService: BladeService, injector: Injector);
    portalService: PortalService;
}
