import { PortalService } from './portal-service';
import { Tiles } from './tiles';
import { UserControlBase } from './user-control-base';
export declare class Startboard extends UserControlBase {
    constructor(portalService: PortalService);
    tiles: Tiles;
}
