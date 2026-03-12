import { Component, OnInit } from '@angular/core';

import { AppService, AppboardEntry, SidebarEntry } from 'dist1/angular-portal-azure';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    title = 'angular-portal-azure SAMPLE';

    constructor(public appService: AppService) { }

    ngOnInit() {
        //this.appService.appConfigService.appConfig.sidebar.isVisible = false;
        //this.appService.appConfigService.appConfig.sidebar.push(new SidebarEntry('My App1', 'icon1'));

        this.appService.appConfigService.appConfig.appboard.isVisible = true;
        this.appService.appConfigService.appConfig.appboard.push(new AppboardEntry('Navigation', 'nav1', 'MENU', 'far fa-cannabis', 'rgb(45, 170, 112)'));
        this.appService.appConfigService.appConfig.appboard.push(new AppboardEntry('Description', 'home', 'Information', 'far fa-cannabis', 'rgb(45, 170, 112)'));
        this.appService.appConfigService.appConfig.appboard.push(new AppboardEntry('Counter', 'counter', 'Application', 'far fa-tablet', 'rgb(201, 112, 112)'));
        this.appService.appConfigService.appConfig.appboard.push(new AppboardEntry('Fetch Data', 'fetchdata', 'Application', 'far fa-alarm-clock', 'rgb(12, 112, 112)'));
   }
}
