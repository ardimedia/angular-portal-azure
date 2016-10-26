/// <reference path="debug.ts" />
/// <reference path="tile.ts" />
/// <reference path="tilesize.ts" />
/// <reference path="tilesizes.ts" />

namespace angularportalazure {
    export class Tiles {
        //#region Properties

        showTiles: boolean = true;
        tiles: Array<any> = new Array<any>();
        hideTileIfOnlyOne: boolean = true;  // not yet evaluated in HTML, but this is the standard behavior

        private tileSizes = TileSize.getTileSizes();
        private nextLeft: number = 0;
        private nextTop: number = 0;
        private columnHeightMax: number = 0;

        //#endregion

        //#region Methods

        addTile(tile: Tile): Tile {
            Debug.write('[angularportalazure-debug] \'Tiles.addTile\' called.', [this, tile]);
            var tileSize = this.tileSizes[tile.tileSize];
            tile.size = TileSizes[tile.tileSize];  // Get CSS Name

            tile.top = this.nextTop + 'px';
            tile.left = this.nextLeft + 'px';

            this.nextLeft += tileSize.width;

            if (tileSize.height > this.columnHeightMax) {
                this.columnHeightMax = tileSize.height;
            }

            if (this.nextLeft > 360) {
                this.nextLeft = 0;
                this.nextTop += this.columnHeightMax;
                this.columnHeightMax = 0;
            }

            this.tiles.push(tile);

            return tile;
        }

        //#endregion
    }
}
