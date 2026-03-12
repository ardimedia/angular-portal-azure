import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../service/app/app.service';
import { PortalService } from '../../domain/portal-service';
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
export declare class AppComponent implements OnInit {
    appService: AppService;
    private router;
    readonly themeProps: string[];
    readonly themes: DinoThemes;
    portalService: PortalService;
    selectedTheme: DinoTheme;
    constructor(appService: AppService, router: Router);
    ngOnInit(): void;
    setTheme(themeIndex: string): void;
}
export {};
