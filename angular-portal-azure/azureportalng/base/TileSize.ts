import * as AzurePortal from './AzurePortal';

export class TileSize {
    //#region Constructors

    constructor(public tileSizes: AzurePortal.TileSizes, public width: number, public height: number) {
        AzurePortal.Debug.write('[azureportalng-debug] \'TileSize\' constructor called.', [this, tileSizes, width, height]);
    }

    //#endregion

    //#region Methods

    static getTileSizes(): Array<TileSize> {
        AzurePortal.Debug.write('[azureportalng-debug] \'TileSize.getTileSizes\' called.', [this]);
        var tileSizes = Array<TileSize>();

        tileSizes.push(new TileSize(AzurePortal.TileSizes.small, 90, 90));
        tileSizes.push(new TileSize(AzurePortal.TileSizes.mini, 180, 90));
        tileSizes.push(new TileSize(AzurePortal.TileSizes.normal, 180, 180));
        tileSizes.push(new TileSize(AzurePortal.TileSizes.herowide, 540, 360));

        return tileSizes;
    }

    //#endregion
}
