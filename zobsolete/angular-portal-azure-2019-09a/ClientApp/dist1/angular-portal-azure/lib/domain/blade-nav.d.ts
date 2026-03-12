import { BladeData } from './blade-data';
import { BladeNavItem } from './blade-nav-item';
import { PortalService } from './portal-service';
export declare class BladeNav extends BladeData<BladeNavItem> {
    constructor(portalService: PortalService, path: string, title?: string, subtitle?: string, width?: number);
    onNavigateTo(path: string): void;
}
