import { Component, OnInit } from '@angular/core';

import { AppService } from '../../../service/app/app.service';

@Component({
    selector: 'ospa-appboard',
    templateUrl: './appboard.component.html',
    //styleUrls: ['./appboard.component.scss'] // build error: Unknown version 67 of android
})
export class AppboardComponent implements OnInit {
    // #region Constructors

    constructor(public appService: AppService) { }

    // #endregion

    // #region Angular Methods

    ngOnInit() {
    }

    // #endregion

    // #region Public Methods

    navigateTo(routerPath): void {
        this.appService.bladeService.navigateTo(routerPath);
    }

    // #endregion
}
