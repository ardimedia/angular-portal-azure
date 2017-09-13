﻿// #region Declarations

/// <reference path="avatarmenu.ts" />
/// <reference path="startboard.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="usercontrolbase.ts" />

// #endregion

namespace angularportalazure {
    export class Panorama extends angularportalazure.UserControlBase {

        // #region Properties

        title: string;
        isVisible: boolean = true;

        avatarMenu: angularportalazure.AvatarMenu;
        startboard: angularportalazure.Startboard;

        // #endregion

        // #region Constructor

        constructor($scope: angular.IScope, title: string, portalService: angularportalazure.PortalService) {
            super($scope, portalService);
            this.title = title;
            this.portalService.panorama = this;

            this.avatarMenu = new angularportalazure.AvatarMenu(this.$scope, this.portalService);
            this.startboard = new angularportalazure.Startboard(this.$scope, this.portalService);
        }

        // #endregion
    }
}
