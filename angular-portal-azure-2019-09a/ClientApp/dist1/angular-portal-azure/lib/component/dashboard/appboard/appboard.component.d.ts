import { OnInit } from '@angular/core';
import { AppService } from '../../../service/app/app.service';
export declare class AppboardComponent implements OnInit {
    appService: AppService;
    constructor(appService: AppService);
    ngOnInit(): void;
    navigateTo(routerPath: any): void;
}
