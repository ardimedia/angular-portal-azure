import { Input } from '@angular/core';

import { Blade } from './blade';
import { IAddBladeEventArgs } from './iadd-blade-event-args';
import { PortalService } from './portal-service';
import { Tiles } from './tiles';
import { UserControlBase } from './user-control-base';

export class AreaBlades extends UserControlBase {
    // #region Constructor

    //static $inject = ['$scope', 'portalService'];
    constructor(portalService: PortalService) { // $scope: any,
        super(portalService); // $scope,

        this.portalScroll = window.document.getElementById('apa-portal-scroll');

        this.setupWindowResizeListener(() => { this.setPortalScrollCss(); });

        this.blades = [];
    }

    // #endregion

    // #region Properties

    private portalScroll: HTMLElement;

    private addBladeListener: () => void;
    private areaNotificationShowListener: () => void;
    private areaNotificationHideListener: () => void;

    blades: Array<Blade> = new Array<Blade>();

    // #endregion

    // #region Methods

    raiseBladeOnActivateEvent(args: IAddBladeEventArgs) {
        let isEventRaised: boolean = false;

        this.blades.forEach((blade) => {
            if (blade.path.toLowerCase() === args.path.toLowerCase()) {
                // Raise event onActivate
                blade.onActivate();
                isEventRaised = true;
                return;
            }
        });
    }

    raiseAddBladeEvent(args: IAddBladeEventArgs) {
        let isBladeAlreadyShown: boolean = false;
        this.blades.forEach((blade) => {
            if (blade.path.toLowerCase() === args.path.toLowerCase()) {
                // Blade is already shown, just activate it again
                blade.onActivate();
                isBladeAlreadyShown = true;
                return;
            }
        });

        if (!isBladeAlreadyShown) {
            // Add the blade, since it is not yet shown
            this.portalService.areaBlades.addBlade(args.path, args.pathSender);
            //this.portalService.$rootScope.$broadcast('AreaBlades.AddBlade', args);
        }
    }

    setFirstBlade(path: string): Blade | void {
        this.clearAll();
        this.hidePanorama();
        return this.addBlade(path);
    }

    addBlade(path: string, senderPath: string = ''): Blade | void {
        if (path == null) { return; }
        if (senderPath == null) { return; }
        let portalcontent: HTMLElement = null;

        console.log('commented code at : AreaBlades.addBlade (analytics)');
        // this.portalService.$analytics.pageTrack(path.toLowerCase());

        path = path.toLowerCase();
        senderPath = senderPath.toLowerCase();

        // #region Verify

        if (path === undefined || path === '') { return; }

        if (this.portalService.$window !== undefined) {
            if (this.portalService.$window.document === undefined) {
                throw new Error('[AreaBlades] \'this.$window.document\' undefined.');
            }

            portalcontent = this.portalService.$window.document.getElementById('apa-portal-scroll');
            if (portalcontent === null) {
                throw new Error('[AreaBlades] HTML element with ID [apa-portal-scroll] not found. Maybe it is to early to call function \'BladeArea.addBlade\'.');
            }
        }

        // #endregion

        // #region Clear all children of the parent path

        this.clearChild(senderPath);

        // #endregion

        // #region Make sure the blade is not yet show

        this.blades.forEach((blade) => {
            // we do not distinguish between lower and upper case path name
            if (blade.comparePaths(blade.path, path)) {
                throw new Error('[AreaBlades] path: \'' + path + '\' will not be added. It is already added.');
            }
        });

        // #endregion

        // #region Show the blade

        let blade = new Blade(this.portalService, path, ''); // this.$scope,
        this.blades.push(blade);

        // #endregion

        // #region Position the blade

        if (this.portalService.$window !== undefined) {
            this.portalService.$window.setTimeout(() => {
                let azureportalblades = this.portalService.$window.document.getElementsByClassName('azureportalblade');

                let i = this.blades.length - 1;

                // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
                //       So now if it is, the user has to scroll on its own.
                if (azureportalblades[i] !== undefined && (<any>azureportalblades[i]).offsetLeft !== undefined) {
                    let sl = (<any>azureportalblades[i]).offsetLeft - 30;
                    portalcontent.scrollLeft = sl;
                }
            }, 250);
        }

        // #endregion

        return blade;
    }

    clearAll(): void {
        this.blades.length = 0;
        this.showPanoramaIfNoBlades();
    }

    clearPath(path: string): void {
        // we do not distinguish between lower and upper case path name
        path = path.toLowerCase();

        let isremoved = this.blades.some((blade, index) => {
            if (blade.comparePaths(blade.path, path)) {
                this.blades.length = index;
                return true;
            }
        });

        if (!isremoved && this.portalService.areaNotification.path === path) {
            this.portalService.areaNotification.hide();
            isremoved = true;
        }

        if (!isremoved) {
            throw new Error('[AreaBlades.clearPath] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
        }

        this.showPanoramaIfNoBlades();
    }

    clearLevel(level: number) {
        if (this.blades.length < level) {
            throw new Error('[AreaBlades] level: \'' + level + '\' could not be cleard, since only \'' + this.blades.length + '\' available.');
        }

        if (level === 0) { level = 1; }
        this.blades.length = level - 1;
        this.showPanoramaIfNoBlades();
    }

    clearLastLevel() {
        this.clearLevel(this.blades.length);
        this.showPanoramaIfNoBlades();
    }

    clearChild(path: string): void {
        path = path.toLowerCase();

        if (path === '') {
            return;
        }
        let isremoved = this.blades.some((blade, index) => {
            // we do not distinguish between lower and upper case path name
            if (blade.comparePaths(blade.path, path)) {
                this.blades.length = index + 1;
                return true;
            }
        });
        if (!isremoved) {
            throw new Error('[AreaBlades.clearChild] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
        }
    }

    showPanoramaIfNoBlades() {
        if (this.blades.length === 0) {
            if (this.portalService.panorama !== undefined) {
                {
                    this.portalService.panorama.isVisible = true;
                    this.portalService.panorama.startboard.tiles.showTiles = true;
                }
            }
        }
    }

    hidePanorama() {
        if (this.portalService.panorama !== undefined) {
            this.portalService.panorama.isVisible = false;
            this.portalService.panorama.startboard.tiles.showTiles = false;
        }
    }

    /** We need to call this when AreaBlades is no longer used, otherwise the listener does not get removed. */
    close() {
        // Unregister Listeners
        this.addBladeListener();
        this.areaNotificationShowListener();
        this.areaNotificationHideListener();
    }

    // #endregion

    setPortalScrollCss() {
        if (this.portalScroll != null && this.portalService.areaNotification != null) {
            this.portalScroll.style.marginRight = this.portalService.areaNotification.widthAreaUsed + 'px';
        }
    }
}

// angular.module('angularportalazure').service('areaBlades', AreaBlades);
