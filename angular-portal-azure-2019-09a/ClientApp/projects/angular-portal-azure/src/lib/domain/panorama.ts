import { PortalService } from './portal-service';
import { Tiles } from './tiles';
import { UserControlBase } from './user-control-base';
import { Blade } from './blade';
import { IAddBladeEventArgs } from './iadd-blade-event-args';
import { AvatarMenu } from './avatar-menu';
import { Startboard } from './startboard';

export class Panorama extends UserControlBase {
    // #region Properties

    title: string;
    isVisible: boolean = true;

    avatarMenu: AvatarMenu;
    startboard: Startboard;

    // #endregion

    // #region Constructor

    //static $inject = ['$scope', 'portalService'];
    constructor(portalService: PortalService, title: string) { // $scope: any,
        super(portalService); // $scope,
        this.title = title;
        this.portalService.panorama = this;

        this.avatarMenu = new AvatarMenu(this.portalService);
        this.startboard = new Startboard(this.portalService);
    }

    // #endregion
}
