import { Tile } from './tile';
export declare class Tiles {
    showTiles: boolean;
    tiles: Array<any>;
    isTilesLoaded: boolean;
    hideTileIfOnlyOne: boolean;
    private tileSizes;
    private nextLeft;
    private nextTop;
    private columnHeightMax;
    addTile(tile: Tile): Tile;
}
