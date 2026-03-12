import { TileSizes } from './tile-sizes';
export declare class TileSize {
    tileSizes: TileSizes;
    width: number;
    height: number;
    constructor(tileSizes: TileSizes, width: number, height: number);
    static getTileSizes(): Array<TileSize>;
}
