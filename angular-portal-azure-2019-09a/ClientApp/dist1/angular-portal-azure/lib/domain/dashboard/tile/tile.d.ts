import { TileSizes } from './tile-sizes';
export declare class Tile {
    title: string;
    subTitle: string;
    tileSize: TileSizes;
    size: string;
    left: string;
    top: string;
    private _bladePath;
    bladePath: string;
    constructor(title: string, bladePath: string);
    clicked(): void;
}
