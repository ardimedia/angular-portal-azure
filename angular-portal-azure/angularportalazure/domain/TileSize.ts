/// <reference path="tilesizes.ts" />

namespace angularportalazure {
    export class TileSize {

        //#region Constructor

        constructor(public tileSizes: angularportalazure.TileSizes, public width: number, public height: number) {
        }

        //#endregion

        //#region Methods

        static getTileSizes(): Array<TileSize> {
            let tileSizes = Array<TileSize>();

            tileSizes.push(new TileSize(angularportalazure.TileSizes.small, 90, 90));
            tileSizes.push(new TileSize(angularportalazure.TileSizes.mini, 180, 90));
            tileSizes.push(new TileSize(angularportalazure.TileSizes.normal, 180, 180));
            tileSizes.push(new TileSize(angularportalazure.TileSizes.herowide, 540, 360));

            return tileSizes;
        }

        //#endregion
    }
}
