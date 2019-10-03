import { Router } from '@angular/router';
import { AppService } from '../app/app.service';
import { AppConfigService } from '../app-config/app-config.service';
import { PortalService } from '../../domain/portal-service';
export declare class BladeService {
    private appConfigService;
    private router;
    private portalService;
    private appService;
    bladeId: number;
    constructor(appConfigService: AppConfigService, router: Router, portalService: PortalService, appService: AppService);
    /**
     *
     */
    navigateTo(routerToPath: string): void;
    /**
     * Fix router configuration for blades
     * When a blade is added to the router, the route for the blade is updated with an outlet identifier (e.g. blade1),
     * see above in the navigateTo function.
     * Because this identifier is not persistent and may changes between sessions, we need to add the outlet identifier
     * to the route configuration, so that a corresponding URL can be reconstructed.
     * */
    private fixRouterConfigBladeOutlet;
    /**
     *
     */
    private handleRestoreStateEventForBlades;
}
