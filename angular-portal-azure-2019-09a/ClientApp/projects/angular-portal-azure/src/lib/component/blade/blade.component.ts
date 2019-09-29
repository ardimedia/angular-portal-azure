import { Component, OnInit } from '@angular/core';

import { Blade } from '../../domain/blade';
import { PortalService } from '../../domain/portal-service';

@Component({
    selector: 'apa-blade',
    templateUrl: './blade.component.html',
    // styleUrls: ['./blade.component.scss'] // build error: Unknown version 67 of android
})
export class BladeComponent extends Blade implements OnInit {
    constructor(portalService: PortalService) {
        super(portalService, 'blade1', '', '', 500)
    }

    ngOnInit() {
    }

    //close = () => { };
}
