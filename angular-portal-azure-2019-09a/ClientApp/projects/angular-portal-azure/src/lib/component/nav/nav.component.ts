import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'apa-nav',
    templateUrl: './nav.component.html',
    //styleUrls: ['./nav.component.scss'] // build error: Unknown version 67 of android
})
export class NavComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }

}
