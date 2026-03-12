import { Tile } from './tile';
import { TileSize } from './tile-size';
export declare class Tiles<T extends Tile> extends Array<T> {
    isShowTiles: boolean;
    isTilesLoaded: boolean;
    hideTileIfOnlyOne: boolean;
    tileSizes: TileSize[];
    nextLeft: number;
    nextTop: number;
    columnHeightMax: number;
    constructor(...tiles: Array<T>);
    static create<Apps>(): Apps;
    push(...tiles: Array<T>): number;
    processTile(tile: T): T;
}
