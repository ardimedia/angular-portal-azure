import { TileSizes } from './tile-sizes';

export class TileSize {
    // #region Properties

    // #endregion

    // #region Constructors

    constructor(public tileSizes: TileSizes, public width: number, public height: number) {
    }

    // #endregion

    // #region Static Methods

    static getTileSizes(): Array<TileSize> {
        let tileSizes = Array<TileSize>();

        tileSizes.push(new TileSize(TileSizes.small, 90, 90));
        tileSizes.push(new TileSize(TileSizes.mini, 180, 90));
        tileSizes.push(new TileSize(TileSizes.normal, 180, 180));
        tileSizes.push(new TileSize(TileSizes.herowide, 540, 360));

        return tileSizes;
    }
    // #endregion

    // #region Private Methods

    // #endregion
}
