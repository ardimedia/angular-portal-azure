import { AreaBlades } from './area-blades';
import { Panorama } from './panorama';
import { PortalService } from './portal-service';
import { Tiles } from './tiles';
import { UserControlBase } from './user-control-base';

export class PortalShell {
    // #region Constructor

    constructor(public portalService: PortalService, title: string = null) {

        this.portalService = portalService;
        //this.portalService.panorama = new Panorama(this.portalService, title);

        if (title === '' || title === null || title === undefined) {
            this.portalService.panorama.title = this.portalService.$window.location.hostname.toLowerCase();
        } else {
            this.portalService.panorama.title = title;
        }
    }

    // #endregion
}
