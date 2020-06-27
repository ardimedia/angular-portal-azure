import { BladeData } from './blade-data';
//import { BladeNavItem } from './blade-nav-item';
import { PortalService } from './portal-service';

export class BladeDetail<T> extends BladeData<T> {
  // #region Constructor

  //constructor($scope: angular.IScope, portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
  constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
    //super($scope, portalService, path, title, subtitle, width);
    super(portalService, path, title, subtitle, width);

    this.commandNewText = 'neu';
    this.commandSaveText = 'speichern';
    this.commandDeleteText = 'lÃ¶schen';
    this.commandCancelText = 'abbrechen';
  }

  // #endregion

  // #region Properties

  item: T = <T>{};

  // #endregion

  // #region Methods

  onCommandCancel(): void {
    this.close();
  }

  // #endregion
}
