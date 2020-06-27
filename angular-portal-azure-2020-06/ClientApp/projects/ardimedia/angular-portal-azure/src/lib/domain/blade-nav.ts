import { BladeData } from './blade-data';
import { BladeNavItem } from './blade-nav-item';
import { PortalService } from './portal-service';

export class BladeNav extends BladeData<BladeNavItem> {
  // #region Constructor

  //constructor($scope: angular.IScope, portalService: PortalService, path: string, title: string = '', subtitle: string = '', width: number = 315) {
  constructor(portalService: PortalService, path: string, title: string = '', subtitle: string = '', width: number = 315) {
    //super($scope, portalService, path, title, subtitle, width);
    super(portalService, path, title, subtitle, width);
    this.isInnerHtml = false;
  }

  // #endregion

  // #region Properties

  //items: Array<BladeNavItem> = new Array<BladeNavItem>();
  isNav: boolean = true;

  // #endregion

  // #region Methods

  onNavigateTo(path: string) {
    if (path === '') { return; }
    this.portalService.areaBlades.raiseAddBladeEvent({ path: path, pathSender: this.path });
  }

  // #endregion
}
