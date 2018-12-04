import { Component, OnInit } from '@angular/core';

import { PortalService } from '../../domain/portalService';

@Component({
    selector: 'angular-portal-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor() { }

    portalService: PortalService = new PortalService('HomeComponent TITLE');

    ngOnInit() {
    }
}
