/// <reference path="blade.ts" />
/// <reference path="debug.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="tilesize.ts" />

namespace angularportalazure {
    export class Tile {

        //#region Properties

        portalService: angularportalazure.PortalService;

        title: string;
        subTitle: string;

        bladePath: string;

        tileSize: angularportalazure.TileSizes;
        size: string; // CSS style class name - refactor: rename to cssClass

        left: string; // Obsolete, use leftN
        top: string; // Obsolete, use topN
        leftN: string; // left position (CSS) - during refactoring, rename to left
        topN: string; // top position (CSS) - during refactoring, rename to top

        //#endregion

        //#region Constructors

        constructor(title: string, bladePath: string, portalService: angularportalazure.PortalService) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'Tile\' constructor called.', [this, title, bladePath, portalService]);
            this.portalService = portalService;

            this.title = title;
            this.bladePath = bladePath;
            this.tileSize = angularportalazure.TileSizes.normal;
        }

        //#endregion

        //#region Methods

        clicked() {
            angularportalazure.Debug.write('[angularportalazure-debug] \'Tile.clicked\' called.', [this]);
            var blade = <angularportalazure.Blade>this.portalService.bladeArea.setFirstBlade(this.bladePath);
            blade.activate();
        }

        //#endregion
    }
}
