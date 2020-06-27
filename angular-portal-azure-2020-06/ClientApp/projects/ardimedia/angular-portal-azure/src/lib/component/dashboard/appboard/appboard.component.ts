import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../../../service/app/app.service';

import { PortalService } from '../../../domain/portal-service';
import { AreaNotification } from '../../../domain/area-notification';
import { AreaBlades } from '../../../domain/area-blades';
import { Tile } from '../../../domain/tile';

@Component({
    selector: 'ospa-appboard',
    templateUrl: './appboard.component.html',
    styleUrls: ['./appboard.component.scss'] // build error: Unknown version 67 of android
})
export class AppboardComponent implements OnInit {
    // #region Constructors

    constructor(public appService: AppService, public portalService: PortalService, public router: Router) {
        this.portalService.appService = this.appService;
        this.portalService.areaNotification = new AreaNotification(this.portalService);
        this.portalService.areaBlades = new AreaBlades(this.portalService);

        this.appService.portalService = this.portalService;
    }

    // #endregion

    // #region Angular Methods

    ngOnInit() {
        setTimeout(() => { this.appService.appConfigService.appConfig.isShowSplashScreen = false; }, 500);

        // TODO:2019-09-27/hp: convert NEW API to OLD - Copy TILES
        //                     refactor this.portalService.panorama.startboard.tiles
        //                       to use this.appService.appConfigService.appConfig.appboard
        if (this.portalService.panorama.startboard.tiles.tiles.length == 0) {
            this.appService.appConfigService.appConfig.appboard.forEach((item) => {
                let tile = this.portalService.panorama.startboard.tiles.addTile(new Tile(item.title, item.routerPath, this.portalService));
                tile.subTitle = item.subTitle;
            });
        }
    }

    // #endregion

    // #region Public Methods

    navigateTo(routerPath): void {
        this.appService.bladeService.navigateTo(routerPath);
    }

    // #endregion
}
