import { Input } from '@angular/core';

import { PortalService } from './portal-service';
import { Tiles } from './tiles';
import { UserControlBase } from './user-control-base';
import { Blade } from './blade';
import { BladeData } from './blade-data';
import { BladeNavItem } from './blade-nav-item';
import { IAddBladeEventArgs } from './iadd-blade-event-args';


export class AreaNotification extends UserControlBase {
    // #region Constructor

    //static $inject = ['$scope', 'portalService'];
    constructor(portalService: PortalService) { // $scope: any,
        super(portalService); // $scope,

        this.areaNotification = window.document.getElementById('apa-notification-area');

        this.hide();
        this.setupWindowResizeListener(() => { this.calcualteCssStyles(); });
    }

    // #endregion

    // #region Properties

    path: string = '';
    widthAreaUsed: number = 0;

    private areaNotification: HTMLElement;

    private _width: number = 250;
    get width(): number {
        return this._width;
    }
    set width(value: number) {
        this._width = value;
        this.calcualteCssStyles();
    }

    private _backgroundColor: string = '#32383f';
    get backgroundColor(): string {
        return this._backgroundColor;
    }
    set backgroundColor(value: string) {
        this._backgroundColor = value;
        this.calcualteCssStyles();
    }

    // #endregion

    // #region Methods

    hide() {
        // Do not hide on false
        if (!this.onHide) {
            return;
        }

        this.path = '';
        this.widthAreaUsed = 0;
        if (this.areaNotification != null) { this.areaNotification.style.display = 'none' };

        this.portalService.areaBlades.setPortalScrollCss();
        //this.portalService.$rootScope.$broadcast('AreaNotification.Hide');
    }

    show(width: number = 250) {
        this.onShow();
        this.width = width;
        this.widthAreaUsed = 1; // Indicate to the calcualteCssStyles function, that we need to set this value
        this.calcualteCssStyles();
        if (this.areaNotification != null) { this.areaNotification.style.display = 'inline-block' };

        console.log('commented code at : AreaNotification.show');
        this.portalService.areaBlades.setPortalScrollCss()
        //this.portalService.$rootScope.$broadcast('AreaNotification.Show');
        this.onShowed();
    }

    /* Override */
    onHide(): boolean {
        return true;
    }

    /* Override */
    onShow() {
    }

    /* Override */
    onShowed() {
    }

    private calcualteCssStyles() {
        this.areaNotification = window.document.getElementById('apa-notification-area');

        this.areaNotification.style.position = 'absolute';
        this.areaNotification.style.top = '0';
        this.areaNotification.style.height = '100%';
        this.areaNotification.style.backgroundColor = this.backgroundColor;
        this.areaNotification.style.borderLeft = '2px solid gray';
        this.areaNotification.style.width = this.width + 'px';
        this.areaNotification.style.left = this.portalService.$window.innerWidth - this.width + 'px';

        if (this.widthAreaUsed !== 0) {
            this.widthAreaUsed = this.width;
        }
    }

    // #endregion
}
