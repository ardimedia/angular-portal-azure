import { Component } from '@angular/core';

import { BladeService } from 'dist1/angular-portal-azure';

@Component({
    selector: 'app-nav2',
    templateUrl: './nav2.component.html',
})
export class Nav2Component {
    constructor(private bladeService: BladeService) { }

    navigateTo(routerToPath: string): void {
        this.bladeService.navigateTo(routerToPath);
    }
}
