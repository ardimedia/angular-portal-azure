//import { MainService } from './../../service/main/main.service';
import { BladeNav } from './blade-nav';

export class BladeNavItem {
    // #region Properties

    // #endregion

    // #region Constructors

    constructor(public title: string = '', public cssClass: string = '', public bladePath: string = '', public hrefPath: string = '', public roles: string = '', public isVisible: boolean = true, public callback: () => any = null, public bladeNav: BladeNav | null = null) {
    }

    // #endregion

    // #region Public Methods

    onNavItemClick() {
        if (this.callback != null) {
            this.callback();
        }
    }

    // #endregion

    // #region Private Methods

    // #endregion
}
