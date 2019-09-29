//import { MainService } from '../../../service/main/main.service';
import { TileSizes } from './tile-sizes';

export class Tile {
    // #region Properties

    //mainService: MainService;

    title: string;
    subTitle: string;

    tileSize: TileSizes;
    size: string; // CSS style class name - refactoring: rename to cssClass

    left: string; // left position (CSS)
    top: string; // top position (CSS)

    private _bladePath: string;
    get bladePath(): string {
        return this._bladePath;
    }

    // For the moment we do not distinguish between lower and upper case path name
    set bladePath(newBladePath: string) {
        this._bladePath = newBladePath.toLowerCase();
    }

    // #endregion

    // #region Constructors

    // mainService: MainService, 
    constructor(title: string, bladePath: string) {
        //this.mainService = mainService;

        this.title = title;
        this.bladePath = bladePath;
        this.tileSize = TileSizes.normal;
    }

    // #endregion

    // #region Public Methods

    clicked() {
        //this.mainService.areaBlades.setFirstBlade(this.bladePath);
    }

    // #endregion

    // #region Private Methods

    // #endregion
}
