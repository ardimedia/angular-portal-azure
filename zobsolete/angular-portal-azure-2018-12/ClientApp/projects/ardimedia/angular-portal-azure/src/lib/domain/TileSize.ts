import { TileSizes } from './TileSizes';

export class TileSize {

    // #region Constructor

    constructor(public tileSizes: TileSizes, public width: number, public height: number) {
    }

    // #endregion

    // #region Methods

    static getTileSizes(): Array<TileSize> {
        let tileSizes = Array<TileSize>();

        tileSizes.push(new TileSize(TileSizes.small, 90, 90));
        tileSizes.push(new TileSize(TileSizes.mini, 180, 90));
        tileSizes.push(new TileSize(TileSizes.normal, 180, 180));
        tileSizes.push(new TileSize(TileSizes.herowide, 540, 360));

        return tileSizes;
    }

    // #endregion
}
