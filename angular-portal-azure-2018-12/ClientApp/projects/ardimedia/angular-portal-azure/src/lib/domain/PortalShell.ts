﻿import { Panorama } from './Panorama';
import { PortalService } from './PortalService';

export class PortalShell {
    // #region Constructor

    constructor(public portalService: PortalService, title: string = null) {

        this.portalService = portalService;
        this.portalService.panorama = new Panorama(this.portalService, title);

        if (title === '' || title === null || title === undefined) {
            if (this.portalService.$window !== undefined) {
                this.portalService.panorama.title = this.portalService.$window.location.hostname.toLowerCase();
            }
        } else {
            this.portalService.panorama.title = title;
        }
    }

    // #endregion
}
