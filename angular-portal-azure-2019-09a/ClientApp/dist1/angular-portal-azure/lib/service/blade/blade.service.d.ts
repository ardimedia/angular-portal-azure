import { Router } from '@angular/router';
import { AppConfigService } from '../app-config/app-config.service';
export declare class BladeService {
    private appConfigService;
    private router;
    bladeId: number;
    constructor(appConfigService: AppConfigService, router: Router);
    navigateTo(routerPath: string): void;
}
