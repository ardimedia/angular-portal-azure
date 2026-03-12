import { OnInit } from '@angular/core';
import { Blade } from '../../domain/blade';
import { PortalService } from '../../domain/portal-service';
export declare class BladeComponent extends Blade implements OnInit {
    constructor(portalService: PortalService);
    ngOnInit(): void;
}
