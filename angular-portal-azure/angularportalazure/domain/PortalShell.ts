﻿/// <reference path="bladearea.ts" />
/// <reference path="usercontrolbase.ts" />
/// <reference path="debug.ts" />
/// <reference path="panorama.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="tiles.ts" />

namespace angularportalazure {
    export class PortalShell extends angularportalazure.UserControlBase {

        //#region Properties

        //#region OLD LAYOUT PROPERTIES --> OBSOLETE

        /** Obsolete
         * start using this.panorama.title */
        title: string;
        /** Obsolete
         * start using this.panorama.avatarMenu.userAccount */
        user: {};
        /** Obsolete
         * start using this.panorama.startboard.tiles */
        tiles: angularportalazure.Tiles[]; // Obsolete,
        /** Obsolete
         * start using this.bladesNew.blades. */
        blades: any[];

        //#endregion

        //#endregion

        //#region Constructor

        constructor(portalService: angularportalazure.PortalService, title: string) {
            super(null, portalService);
            this.portalService = portalService;
            this.portalService.portalShell = this;
            this.portalService.panorama = new angularportalazure.Panorama(this.$scope, title, this.portalService);
            this.portalService.bladeArea = new angularportalazure.BladeArea(this.$scope, portalService);

            this.initialize();
        }

        //#endregion

        //#region Methods

        initialize() {
            this.setObsoleteLayoutProperites();
        }

        setObsoleteLayoutProperites() {
            this.title = this.portalService.panorama.title;
            this.tiles = this.portalService.panorama.startboard.tiles.tiles;
            this.blades = this.portalService.bladeArea.blades;

            //var bladeServiceOLD = <angularportalazure.Blade>this.portalService.$injector.get('bladeService');
            //bladeServiceOLD.blades = this.portalService.bladeArea.blades;

            if (this.portalService.panorama.avatarMenu.userAccount != undefined) {
                this.user = {
                    name: this.portalService.panorama.avatarMenu.userAccount.name,
                    emailaddress: this.portalService.panorama.avatarMenu.userAccount.userName
                };
            }

            //if (this.portalService.bladeArea != null) {
            //    this.portalService.bladeArea.blades.forEach(function (blade) {
            //        //blade.setObsoleteLayoutProperites();
            //    });
            //}
        }

        //#endregion
    }
}
