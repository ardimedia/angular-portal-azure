import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../../service/app/app.service';
import { PortalService } from '../../../domain/portal-service';
export declare class AppboardComponent implements OnInit {
    appService: AppService;
    portalService: PortalService;
    router: Router;
    constructor(appService: AppService, portalService: PortalService, router: Router);
    ngOnInit(): void;
    navigateTo(routerPath: any): void;
}
