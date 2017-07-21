import * as angular from 'angular';

import { UserControlBase } from './usercontrolbase';
import { AvatarMenu } from './avatarmenu';
import { Startboard } from './startboard';
import { PortalService } from './portalservice';

export class Panorama extends UserControlBase {

    // #region Properties

    title: string;
    isVisible: boolean = true;

    avatarMenu: AvatarMenu;
    startboard: Startboard;

    // #endregion

    // #region Constructor

    constructor($scope: angular.IScope, title: string, portalService: PortalService) {
        super($scope, portalService);
        this.title = title;
        this.portalService.panorama = this;

        this.avatarMenu = new AvatarMenu(this.$scope, this.portalService);
        this.startboard = new Startboard(this.$scope, this.portalService);
    }

    // #endregion
}

export default angular.module('angularportalazure', [])
    .service('angularportalazure.panorama', Panorama)
    .name;
