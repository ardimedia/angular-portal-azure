import * as angular from 'angular';

import { Panorama } from './panorama';
import { PortalService } from './portalservice';

export class PortalShell {
    // #region Constructor

    constructor(public portalService: PortalService, title: string = null) {

        this.portalService = portalService;
        this.portalService.panorama = new Panorama(null, title, this.portalService);

        if (title === '' || title === null || title === undefined) {
            this.portalService.panorama.title = this.portalService.$window.location.hostname.toLowerCase();
        } else {
            this.portalService.panorama.title = title;
        }
    }

    // #endregion
}
