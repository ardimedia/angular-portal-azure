/// <reference path="areablades.ts" />
/// <reference path="usercontrolbase.ts" />
/// <reference path="debug.ts" />
/// <reference path="panorama.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="tiles.ts" />

namespace angularportalazure {
    export class PortalShell extends angularportalazure.UserControlBase {
        //#region Constructor

        constructor(portalService: angularportalazure.PortalService, title: string) {
            super(null, portalService);

            this.portalService = portalService;
            this.portalService.portalShell = this;
            this.portalService.panorama = new angularportalazure.Panorama(this.portalService.$scope, title, this.portalService);
            //this.portalService.areaBlades = new angularportalazure.BladeArea(this.$scope, portalService);

            this.portalService.panorama.title = title;

            //this.initialize();
        }

        //#endregion

        //#region Properties

        //#region OLD LAYOUT PROPERTIES --> OBSOLETE

        /** Obsolete
         * start using this.panorama.title */
        //title: string;
        /** Obsolete
         * start using this.panorama.avatarMenu.userAccount */
        //user: {};
        /** Obsolete
         * start using this.panorama.startboard.tiles */
        //tiles: angularportalazure.Tiles[]; // Obsolete,
        /** Obsolete
         * start using this.bladesNew.blades. */
        //blades: any[];

        //#endregion

        //#endregion

        //#region Methods

        //initialize() {
        //    this.setObsoleteLayoutProperites();
        //}

        //setObsoleteLayoutProperites() {
        //    this.title = this.portalService.panorama.title;
        //    this.tiles = this.portalService.panorama.startboard.tiles.tiles;
        //    this.blades = this.portalService.areaBlades.blades;

        //    //var bladeServiceOLD = <angularportalazure.Blade>this.portalService.$injector.get('bladeService');
        //    //bladeServiceOLD.blades = this.portalService.areaBlades.blades;

        //    if (this.portalService.panorama.avatarMenu.userAccount != undefined) {
        //        this.user = {
        //            name: this.portalService.panorama.avatarMenu.userAccount.name,
        //            emailaddress: this.portalService.panorama.avatarMenu.userAccount.userName
        //        };
        //    }

        //    //if (this.portalService.areaBlades != null) {
        //    //    this.portalService.areaBlades.blades.forEach(function (blade) {
        //    //        //blade.setObsoleteLayoutProperites();
        //    //    });
        //    //}
        //}

        //#endregion
    }
}
