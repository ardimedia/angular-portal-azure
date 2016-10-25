import { Blade } from './Blade';
import { Debug } from './Debug';
import { PortalService } from './PortalService';
import { TileSizes } from './TileSizes';

export class Tile {

    //#region Properties

    portalService: PortalService;

    title: string;
    subTitle: string;

    bladePath: string;

    tileSize: TileSizes;
    size: string; // CSS style class name - refactor: rename to cssClass

    left: string; // Obsolete, use leftN
    top: string; // Obsolete, use topN
    leftN: string; // left position (CSS) - during refactoring, rename to left
    topN: string; // top position (CSS) - during refactoring, rename to top

    //#endregion

    //#region Constructors

    constructor(title: string, bladePath: string, portalService: PortalService) {
        Debug.write('[azureportalng-debug] \'Tile\' constructor called.', [this, title, bladePath, portalService]);
        this.portalService = portalService;

        this.title = title;
        this.bladePath = bladePath;
        this.tileSize = TileSizes.normal;
    }

    //#endregion

    //#region Methods

    clicked() {
        Debug.write('[azureportalng-debug] \'Tile.clicked\' called.', [this]);
        var blade = <Blade>this.portalService.bladeArea.setFirstBlade(this.bladePath);
        blade.activate();
    }

    //#endregion
}
