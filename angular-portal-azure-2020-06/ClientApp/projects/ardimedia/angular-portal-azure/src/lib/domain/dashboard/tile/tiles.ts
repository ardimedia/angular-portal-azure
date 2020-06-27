import { Tile } from './tile';
import { TileSize } from './tile-size';
import { TileSizes } from './tile-sizes';

export class Tiles<T extends Tile> extends Array<T>  {
    // #region Properties

    //tiles: Array<T> = new Array<T>();
    isShowTiles: boolean = true;
    isTilesLoaded: boolean = false;
    hideTileIfOnlyOne: boolean = true;  // not yet evaluated in HTML, but this is the standard behavior

    tileSizes = TileSize.getTileSizes();
    nextLeft: number = 0;
    nextTop: number = 0;
    columnHeightMax: number = 0;

    // #endregion

    // #region Constructors

    constructor(...tiles: Array<T>) {
        super(...tiles);
        //this.tiles = tiles;
    }

    static create<Apps>(): Apps {
        let object = Object.create(Tiles.prototype);
        return object;
    }

    // #endregion

    // #region Public Methods

    push(...tiles: Array<T>): number {
        tiles.forEach((tile) => {
            this.processTile(tile);
        });

        return super.push(...tiles);
    }

    processTile(tile: T): T {
        return;
        ////this.isTilesLoaded = true;
        //let tileSize = this.tileSizes[tile.tileSize];
        //tile.size = TileSizes[tile.tileSize];  // Get CSS Name

        //tile.top = this.nextTop + 'px';
        //tile.left = this.nextLeft + 'px';

        //this.nextLeft += tileSize.width;

        //if (tileSize.height > this.columnHeightMax) {
        //    this.columnHeightMax = tileSize.height;
        //}

        //if (this.nextLeft > 540) {
        //    this.nextLeft = 0;
        //    this.nextTop += this.columnHeightMax;
        //    this.columnHeightMax = 0;
        //}

        ////this.tiles.push(tile);

        //return tile;
    }

    // #endregion

    // #region Private Methods

    // #endregion
}
