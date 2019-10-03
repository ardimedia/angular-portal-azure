import { TileSizes } from './tile-sizes';
import { PortalService } from './portal-service';
export declare class Tile {
    constructor(title: string, bladePath: string, portalService: PortalService);
    portalService: PortalService;
    title: string;
    subTitle: string;
    bladePath: string;
    private _bladePath;
    tileSize: TileSizes;
    size: string;
    left: string;
    top: string;
    leftN: string;
    topN: string;
    clicked(): void;
}
