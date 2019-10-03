import { Component } from '@angular/core';

import { BladeService } from 'dist1/angular-portal-azure';

@Component({
    selector: 'app-nav1',
    templateUrl: './nav1.component.html',
})
export class Nav1Component {
    constructor(private bladeService: BladeService) { }

    navigateTo(routerToPath: string): void {
        this.bladeService.navigateTo(routerToPath);
    }
}
