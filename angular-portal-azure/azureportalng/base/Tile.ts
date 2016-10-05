import * as AzurePortal from './AzurePortal';

export class Tile {
    //#region Constructors

    constructor(title: string, bladePath: string, portalService: AzurePortal.PortalService) {
        AzurePortal.Debug.write('[azureportalng-debug] \'Tile\' constructor called.', [this, title, bladePath, portalService]);
        this.portalService = portalService;

        this.title = title;
        this.bladePath = bladePath;
        this.tileSize = AzurePortal.TileSizes.normal;
    }

    //#endregion

    //#region Properties

    portalService: AzurePortal.PortalService;

    title: string;
    subTitle: string;

    bladePath: string;

    tileSize: AzurePortal.TileSizes;
    size: string; // CSS style class name - refactor: rename to cssClass

    left: string; // Obsolete, use leftN
    top: string; // Obsolete, use topN
    leftN: string; // left position (CSS) - during refactoring, rename to left
    topN: string; // top position (CSS) - during refactoring, rename to top

    //#endregion

    //#region Methods

    clicked() {
        AzurePortal.Debug.write('[azureportalng-debug] \'Tile.clicked\' called.', [this]);
        var blade = <AzurePortal.Blade>this.portalService.bladeArea.setFirstBlade(this.bladePath);
        blade.activate();
    }

    //#endregion
}
