import { Component, OnInit } from '@angular/core';

//import { MainOscService } from '@one-system/one-sys-core';

@Component({
    selector: 'ospa-splash-screen',
    templateUrl: './splash-screen.component.html',
    styleUrls: ['./splash-screen.component.scss'] // build error: Unknown version 67 of android
})
export class SplashScreenComponent implements OnInit {
    //constructor(public mainOscService: MainOscService) { }
    constructor(/*public mainOscService: MainOscService*/) { }

    ngOnInit() {
    }
}
