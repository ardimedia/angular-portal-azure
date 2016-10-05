import * as AzurePortal from './AzurePortal';

export class PortalShell extends AzurePortal.UserControlBase {
    //#region Constructors

    constructor(title: string, portalService: AzurePortal.PortalService) {
        super(portalService);
        AzurePortal.Debug.write('[azureportalng-debug] \'PortalShell\' constructor called.', [this, title, portalService]);

        this.portalService = portalService;
        this.portalService.portalShell = this;
        this.portalService.panorama = new AzurePortal.Panorama(title, this.portalService);
        this.portalService.bladeArea = new AzurePortal.BladeArea(portalService);

        this.initialize();
    }

    //#endregion

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
    tiles: AzurePortal.Tiles[]; // Obsolete,
    /** Obsolete
     * start using this.bladesNew.blades. */
    blades: any[];

    //#endregion

    //#endregion

    //#region Methods

    initialize() {
        AzurePortal.Debug.write('[azureportalng-debug] \'PortalShell.initialize\' called.', [this]);
        this.setObsoleteLayoutProperites();
    }

    setObsoleteLayoutProperites() {
        AzurePortal.Debug.write('[azureportalng-debug] \'PortalShell.setObsoleteLayoutProperites\' called.', [this]);
        this.title = this.portalService.panorama.title;
        this.tiles = this.portalService.panorama.startboard.tiles.tiles;
        this.blades = this.portalService.bladeArea.blades;

        //var bladeServiceOLD = <AzurePortal.Blade>this.portalService.$injector.get('bladeService');
        //bladeServiceOLD.blades = this.portalService.bladeArea.blades;

        if (this.portalService.panorama.avatarMenu.userAccount != undefined) {
            this.user = {
                name: this.portalService.panorama.avatarMenu.userAccount.name,
                emailaddress: this.portalService.panorama.avatarMenu.userAccount.userName
            };
        }

        if (this.portalService.bladeArea != null) {
            this.portalService.bladeArea.blades.forEach(function (blade) {
                blade.setObsoleteLayoutProperites();
            });
        }
    }

    //#endregion
}
