﻿import * as AzurePortal from './AzurePortal';
import * as angular from 'angular';

export class BladeArea extends AzurePortal.UserControlBase {
    //#region Constructors

    constructor(portalService: AzurePortal.PortalService) {
        super(portalService);
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeArea\' constructor called.', [this, portalService]);
        var that = this;

        // Set dependencies
        this.portalService = portalService;
        this.portalService.bladeArea = this;

        //#region Add BladeArea.AddBlade event listener

        /** OBSOLETE: remove when all OBSOLETE code has been removed */
        if (portalService instanceof AzurePortal.PortalService == false) {
            return;
        }
        /** OBSOLETE: end */

        // Register listener1
        this.listener1 = that.portalService.$rootScope.$on('BladeArea.AddBlade', function (event: ng.IAngularEvent, args: AzurePortal.IAddBladeEventArgs) {
            AzurePortal.Debug.write('[azureportalng-debug] \'BladeArea\' BladeArea.AddBlade event processing.', [this, event, args]);
            that.addBlade(args.path, args.pathSender);
        });

        //#endregion
    }

    //#endregion

    //#region Properties

    private listener1;

    blades: Array<AzurePortal.Blade> = new Array<AzurePortal.Blade>();

    //#endregion

    //#region Methods

    raiseAddBladeEvent(args: AzurePortal.IAddBladeEventArgs) {
        this.portalService.$rootScope.$broadcast('BladeArea.AddBlade', args);
    }

    setFirstBlade(path: string): AzurePortal.Blade {
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeArea.setFirstBlade\' called.', [this, path]);
        this.clearAll();
        this.hidePanorama();
        return this.addBlade(path);
    }

    /** obsolete */
    addBlade(path: string, senderPath: string = ''): AzurePortal.Blade {
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeArea.addBlade\' called.', [this, senderPath, path]);
        var that = this;

        //#region Verify

        if (path === undefined || path === '') { return; }

        if (that.portalService.$window !== undefined) {
            if (that.portalService.$window.document === undefined) {
                throw new Error('[AzurePortal.BladeArea] \'this.$window.document\' undefined.');
            }

            var portalcontent = that.portalService.$window.document.getElementById('azureportalscroll');
            if (portalcontent === null) {
                throw new Error('[AzurePortal.BladeArea] HTML element with ID [azureportalscroll] not found. Maybe it is to early to call function \'BladeArea.addBlade\'.');
            }
        }

        //#endregion

        //#region Clear all children of the parent path

        this.clearChild(senderPath);

        //#endregion

        //#region Make sure the blade is not yet show

        this.blades.forEach(function (blade) {
            if (blade.path === path) {
                throw new Error('[AzurePortal.BladeArea] path: \'' + path + '\' will not be added. It is already added.');
            };
        });

        //#endregion

        //#region Show the blade

        var blade = new AzurePortal.Blade(that.portalService, path, '');
        that.blades.push(blade);

        //#endregion

        //#region Position the blade

        if (that.portalService.$window !== undefined) {
            that.portalService.$window.setTimeout(function () {
                var azureportalblades = that.portalService.$window.document.getElementsByClassName('azureportalblade');

                var i = that.blades.length - 1;

                // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
                //       So now if it is, the user has to scroll on its own.
                if (azureportalblades[i] !== undefined && (<any>azureportalblades[i]).offsetLeft !== undefined) {
                    var sl = (<any>azureportalblades[i]).offsetLeft - 30;
                    portalcontent.scrollLeft = sl;
                }
            }, 250);
        }

        //#endregion

        return blade;
    }

    clearAll(): void {
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeArea.clearAll\' called.', [this]);
        this.blades.length = 0;
        this.showPanoramaIfNoBlades();
    }

    clearPath(path: string): void {
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeArea.clearPath\' called.', [this, path]);
        var that = this;
        var isremoved = that.blades.some(function (blade, index) {
            if (blade.path === path) {
                AzurePortal.Debug.write('[azureportalng-debug] \'BladeArea.clearPath\' set bladeUrls.length to: ' + index);
                that.blades.length = index;
                return true;
            }
        });
        if (!isremoved) {
            AzurePortal.Debug.write('>>> bladeUrls:', [that.blades]);
            throw new Error('[AzurePortal.BladeArea.clearPath] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
        }
        this.showPanoramaIfNoBlades();
    }

    clearLevel(level: number) {
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeArea.clearLevel\' called.', [this, level]);
        if (this.blades.length < level) {
            //throw new Error('[AzurePortal.BladeArea] level: \'' + level + '\' could not be cleard, since only \'' + this.blades.length + '\' available.');
        }

        if (level == 0) { level = 1; }
        this.blades.length = level - 1;
        this.showPanoramaIfNoBlades();
    }

    clearLastLevel() {
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeArea.clearLastLevel\' called.', [this]);
        this.clearLevel(this.blades.length);
        this.showPanoramaIfNoBlades();
    }

    clearChild(path: string): void {
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeArea.clearChild\' called.', [this, path]);
        var that = this;

        if (path === '') {
            AzurePortal.Debug.write('[azureportalng-debug] \'BladeArea.clearChild\' path is empty, nothing to clear.');
            return;
        }
        var isremoved = that.blades.some(function (blade, index) {
            if (blade.path === path) {
                AzurePortal.Debug.write('[azureportalng-debug] \'BladeArea.clearChild\' set bladeUrls.length to: ' + (index + 1));
                that.blades.length = index + 1;
                return true;
            }
        });
        if (!isremoved) {
            AzurePortal.Debug.write('>>> bladeUrls:', [that.blades]);
            throw new Error('[AzurePortal.BladeArea.clearChild] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
        }
    }

    showPanoramaIfNoBlades() {
        if (this.blades.length === 0) {
            if (this.portalService.panorama !== undefined) {
                {
                    this.portalService.panorama.isVisible = true;
                }
            }
        }
    }

    hidePanorama() {
        if (this.portalService.panorama !== undefined) {
            this.portalService.panorama.isVisible = false;
        }
    }

    /** You need to call this when BladeArea is no longer used, otherwise the listener does not get removed. */
    close() {
        this.listener1();  // Unregister listener1
    }

    //#endregion

    //#region OBSOLETE

    addBladePath(path: string) {
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeArea.addBladePath\' called.', [this, path]);
        // Fix issue with old code
        if (this.portalService.$window === undefined) {
            this.portalService.$window = <any>this.portalService;
        }
        this.addBlade(path);
        //this.addBladeOld(path);
    }

    addBladeOld(path: string) {
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeArea.addBladeOld\' called.', [this, path]);
        var that = this;
        if (path === undefined || path == '') { return; }

        var blade = new AzurePortal.Blade(that.portalService, path, '');
        that.blades.push(blade);

        var portalcontent = that.portalService.$window.document.getElementById('azureportalscroll');
        that.portalService.$window.setTimeout(function () {
            var azureportalblades = that.portalService.$window.document.getElementsByClassName('azureportalblade');

            var i = that.blades.length - 1;

            // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
            //       So now if it is, the user has to scroll on its own.
            if (azureportalblades[i] !== undefined && (<any>azureportalblades[i]).offsetLeft !== undefined) {
                var sl = (<any>azureportalblades[i]).offsetLeft - 30;
                portalcontent.scrollLeft = sl;
            }
        }, 250);
    }

    //#endregion
}

//#region Angular Registration

(function () {
    angular.module('azureportalng').service('azurePortalNg.bladeArea', ['$window', AzurePortal.BladeArea]);
})();

//#endregion
