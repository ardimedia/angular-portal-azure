//import { MainService } from './../../service/main/main.service';
import { BladeData } from './blade-data';
import { BladeNavItem } from './blade-nav-item';

export class BladeNav extends BladeData<BladeNavItem> {
    // #region Properties

    isNav: boolean = true;

    // #endregion

    // #region Constructors

    // mainService: MainService, 
    constructor(path: string, title: string, subtitle: string = '', width: number = 300) {
        super(path, title, subtitle, width);
        this.isInnerHtml = false;
    }

    // #endregion

    // #region Public Methods

    // #endregion

    // #region Private Methods

    onNavigateTo(path: string) {
        if (path === '') { return; }
        //this.mainService.areaBlades.raiseAddBladeEvent({ path: path, pathSender: this.path });
    }
    // #endregion
}
