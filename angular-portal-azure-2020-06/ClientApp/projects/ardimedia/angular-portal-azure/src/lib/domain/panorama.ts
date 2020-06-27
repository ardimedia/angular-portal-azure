import { AvatarMenu } from './avatar-menu';
//import { Blade } from './blade';
//import { IAddBladeEventArgs } from './iadd-blade-event-args';
import { PortalService } from './portal-service';
import { Startboard } from './startboard';
//import { Tiles } from './tiles';
import { UserControlBase } from './user-control-base';

export class Panorama extends UserControlBase {

  // #region Properties

  title: string;
  isVisible: boolean = true;

  avatarMenu: AvatarMenu;
  startboard: Startboard;

  // #endregion

  // #region Constructor

  //constructor($scope: angular.IScope, title: string, portalService: PortalService) {
  constructor(title: string, portalService: PortalService) {
    //super($scope, portalService);
    super(portalService);
    this.title = title;
    this.portalService.panorama = this;

    //this.avatarMenu = new AvatarMenu(this.$scope, this.portalService);
    this.avatarMenu = new AvatarMenu(this.portalService);
    //this.startboard = new Startboard(this.$scope, this.portalService);
    this.startboard = new Startboard(this.portalService);
  }

  // #endregion
}
