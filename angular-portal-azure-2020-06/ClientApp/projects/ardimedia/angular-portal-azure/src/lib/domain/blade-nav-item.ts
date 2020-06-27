import { BladeNav } from './blade-nav';

export class BladeNavItem {
  // #region Constructor

  constructor(public title: string = '', public cssClass: string = '', public bladePath: string = '', public hrefPath: string = '', public roles: string = '', public isVisible: boolean = true, public callback: () => any = null, public bladeNav: BladeNav | null = null) {
  }

  // #endregion

  // #region Methods

  onNavItemClick() {
    if (this.callback != null) {
      this.callback();
    }
  }

  // #endregion
}
