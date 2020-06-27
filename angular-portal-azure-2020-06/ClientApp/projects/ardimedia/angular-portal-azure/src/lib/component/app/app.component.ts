import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { AppService } from '../../service/app/app.service';

import { PortalService } from '../../domain/portal-service';
import { AreaNotification } from '../../domain/area-notification';
import { AreaBlades } from '../../domain/area-blades';
import { Tile } from '../../domain/tile';

interface DinoThemes {
    [name: string]: DinoTheme;
}

interface DinoTheme {
    '--topbar-color': string;
    '--topbar-background-color': string;
    '--topbar-home-color': string;
    '--blade-statusbar-background-color': string;
    '--blade-commands-background-color': string;
}

@Component({
    selector: 'angular-portal-azure',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'] // build error: Unknown version 67 of android
})
export class AppComponent implements OnInit {
    readonly themeProps = [
        'color-main',
        'color-main-darken',
        'color-main-darken2',
        'color-main-lighten',
        'color-accent',
    ];

    readonly themes: DinoThemes = {
        'black': {
            '--topbar-color': '#fff',
            '--topbar-background-color': '#1c1c1c',
            '--topbar-home-color': '#fff',
            '--blade-statusbar-background-color': '#293644',
            '--blade-commands-background-color': '#3e4045',
        },
        'white': {
            '--topbar-color': '#1c1c1c',
            '--topbar-background-color': '#efefef',
            '--topbar-home-color': '#1c1c1c',
            '--blade-statusbar-background-color': '#dcdcdc',
            '--blade-commands-background-color': '#c7c7c7',
        }
    };

    portalService: PortalService;
    selectedTheme: DinoTheme = this.themes['black'];

    constructor(public appService: AppService, private router: Router) {
        this.portalService = new PortalService();
        this.portalService.appService = this.appService;
        this.portalService.areaNotification = new AreaNotification(this.portalService);
        this.portalService.areaBlades = new AreaBlades(this.portalService);

        this.appService.portalService = this.portalService;
    }

    ngOnInit() {
        setTimeout(() => { this.appService.appConfigService.appConfig.isShowSplashScreen = false; }, 500);

        // TODO:2019-09-27/hp: convert NEW API to OLD - Copy TILES
        //                     refactor this.portalService.panorama.startboard.tiles
        //                       to use this.appService.appConfigService.appConfig.appboard
        this.appService.appConfigService.appConfig.appboard.forEach((item) => {
            let tile = this.portalService.panorama.startboard.tiles.addTile(new Tile(item.title, item.routerPath, this.portalService));
            tile.subTitle = item.subTitle;
        });
    }

    setTheme(themeIndex: string) {
        this.selectedTheme = this.themes[themeIndex];
    }
}
