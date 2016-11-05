/// <reference path="blade.ts" />
/// <reference path="debug.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="tilesize.ts" />

namespace angularportalazure {
    export class Tile {
        //#region Constructors

        constructor(title: string, bladePath: string, portalService: angularportalazure.PortalService) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'Tile\' constructor called.', [this, title, bladePath, portalService]);
            this.portalService = portalService;

            this.title = title;
            this.bladePath = bladePath;
            this.tileSize = angularportalazure.TileSizes.normal;
        }

        //#endregion

        //#region Properties

        portalService: angularportalazure.PortalService;

        title: string;
        subTitle: string;

        //#region bladePath

        get bladePath(): string {
            return this._bladePath;
        }
        // For the moment we do not distinguish between lower and upper case path name
        set bladePath(newBladePath: string) {
            this._bladePath = newBladePath.toLowerCase();
        }
        private _bladePath: string;

        //#endregion

        tileSize: angularportalazure.TileSizes;
        size: string; // CSS style class name - refactoring: rename to cssClass

        left: string; // Obsolete, use leftN
        top: string; // Obsolete, use topN
        leftN: string; // left position (CSS) - during refactoring, rename to left
        topN: string; // top position (CSS) - during refactoring, rename to top

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
