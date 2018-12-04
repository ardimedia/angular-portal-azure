import { AvatarMenu } from './AvatarMenu';
import { Startboard } from './Startboard';
import { PortalService } from './PortalService';
import { UserControlBase } from './UserControlBase';

export class Panorama extends UserControlBase {
    // #region Properties

    title: string;
    isVisible: boolean = true;

    avatarMenu: AvatarMenu;
    startboard: Startboard;

    // #endregion

    // #region Constructor

    constructor(portalService: PortalService, title: string) { // $scope: angular.IScope
        super(portalService); // $scope, 
        this.title = title;
        this.portalService.panorama = this;

        this.avatarMenu = new AvatarMenu(this.portalService); // this.$scope, 
        this.startboard = new Startboard(this.portalService); // this.$scope, 
    }

    // #endregion
}
