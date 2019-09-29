import { Tiles } from '../tile/tiles';
import { TileSize } from '../tile/tile-size';
import { AppboardEntry } from './appboard-entry';

export class Appboard extends Tiles<AppboardEntry> {
    // #region Properties

    isVisible: boolean = true;

    // #endregion

    // #region Constructors

    constructor(...appboardEntries: Array<AppboardEntry>) {
        super(...appboardEntries);
        this.tileSizes = TileSize.getTileSizes();
        this.nextLeft = 0;
        this.nextTop = 0;
        this.columnHeightMax = 0;
    }

    static create<Appboard>(): Appboard {
        let object = Object.create(Appboard.prototype);
        object.tileSizes = TileSize.getTileSizes();
        object.nextLeft = 0;
        object.nextTop = 0;
        object.columnHeightMax = 0;
        return object;
    }

    // #endregion

    // #region Public Methods

    push(...appboardEntries: Array<AppboardEntry>): number {
        return super.push(...appboardEntries);
    }

    // #endregion
}
