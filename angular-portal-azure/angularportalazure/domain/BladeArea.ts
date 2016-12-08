/// <reference types="angular" />
/// <reference path="debug.ts" />
/// <reference path="blade.ts" />
/// <reference path="usercontrolbase.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="iaddbladeeventargs.ts" />

namespace angularportalazure {
    export class BladeArea extends angularportalazure.UserControlBase {
        //#region Constructor

        constructor(portalService: angularportalazure.PortalService) {
            super(portalService);
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea\' constructor called.', [this, portalService]);
            var that = this;

            // Set dependencies
            this.portalService = portalService;
            this.portalService.bladeArea = this;

            //#region Add BladeArea.AddBlade event listener

            /** OBSOLETE: remove when all OBSOLETE code has been removed */
            if (portalService instanceof angularportalazure.PortalService == false) {
                return;
            }
            /** OBSOLETE: end */

            // Register listener1
            this.listener1 = that.portalService.$rootScope.$on('BladeArea.AddBlade', function (event: ng.IAngularEvent, args: angularportalazure.IAddBladeEventArgs) {
                angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea\' BladeArea.AddBlade event processing.', [this, event, args]);
                that.addBlade(args.path, args.pathSender);
            });

            //#endregion
        }

        //#endregion

        //#region Properties

        private listener1;

        blades: Array<angularportalazure.Blade> = new Array<angularportalazure.Blade>();

        //#endregion

        //#region Methods

        raiseAddBladeEvent(args: angularportalazure.IAddBladeEventArgs) {
            this.portalService.$rootScope.$broadcast('BladeArea.AddBlade', args);
        }

        setFirstBlade(path: string): angularportalazure.Blade {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.setFirstBlade\' called.', [this, path]);
            this.clearAll();
            this.hidePanorama();
            return this.addBlade(path);
        }

        /** obsolete */
        addBlade(path: string, senderPath: string = ''): angularportalazure.Blade {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.addBlade\' called.', [this, senderPath, path]);
            if (path == null) { return; }
            if (senderPath == null) { return; }
            var that = this;

            this.portalService.$analytics.pageTrack(path);

            path = path.toLowerCase();
            senderPath = senderPath.toLowerCase();

            //#region Verify

            if (path === undefined || path === '') { return; }

            if (that.portalService.$window !== undefined) {
                if (that.portalService.$window.document === undefined) {
                    throw new Error('[angularportalazure.BladeArea] \'this.$window.document\' undefined.');
                }

                var portalcontent = that.portalService.$window.document.getElementById('azureportalscroll');
                if (portalcontent === null) {
                    throw new Error('[angularportalazure.BladeArea] HTML element with ID [azureportalscroll] not found. Maybe it is to early to call function \'BladeArea.addBlade\'.');
                }
            }

            //#endregion

            //#region Clear all children of the parent path

            this.clearChild(senderPath);

            //#endregion

            //#region Make sure the blade is not yet show

            this.blades.forEach(function (blade) {
                // we do not distinguish between lower and upper case path name
                if (blade.comparePaths(blade.path, path)) {
                    throw new Error('[angularportalazure.BladeArea] path: \'' + path + '\' will not be added. It is already added.');
                };
            });

            //#endregion

            //#region Show the blade

            var blade = new angularportalazure.Blade(that.portalService, path, '');
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
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearAll\' called.', [this]);
            this.blades.length = 0;
            this.showPanoramaIfNoBlades();
        }

        clearPath(path: string): void {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearPath\' called.', [this, path]);
            var that = this;
            // we do not distinguish between lower and upper case path name
            path = path.toLowerCase()

            var isremoved = that.blades.some(function (blade, index) {
                if (blade.comparePaths(blade.path, path)) {
                    angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearPath\' set bladeUrls.length to: ' + index);
                    that.blades.length = index;
                    return true;
                }
            });
            if (!isremoved) {
                angularportalazure.Debug.write('>>> bladeUrls:', [that.blades]);
                throw new Error('[angularportalazure.BladeArea.clearPath] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
            }
            this.showPanoramaIfNoBlades();
        }

        clearLevel(level: number) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearLevel\' called.', [this, level]);
            if (this.blades.length < level) {
                //throw new Error('[angularportalazure.BladeArea] level: \'' + level + '\' could not be cleard, since only \'' + this.blades.length + '\' available.');
            }

            if (level == 0) { level = 1; }
            this.blades.length = level - 1;
            this.showPanoramaIfNoBlades();
        }

        clearLastLevel() {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearLastLevel\' called.', [this]);
            this.clearLevel(this.blades.length);
            this.showPanoramaIfNoBlades();
        }

        clearChild(path: string): void {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearChild\' called.', [this, path]);
            var that = this;

            path = path.toLowerCase();

            if (path === '') {
                angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearChild\' path is empty, nothing to clear.');
                return;
            }
            var isremoved = that.blades.some(function (blade, index) {
                // we do not distinguish between lower and upper case path name
                if (blade.comparePaths(blade.path, path)) {
                    angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.clearChild\' set bladeUrls.length to: ' + (index + 1));
                    that.blades.length = index + 1;
                    return true;
                }
            });
            if (!isremoved) {
                angularportalazure.Debug.write('>>> bladeUrls:', [that.blades]);
                throw new Error('[angularportalazure.BladeArea.clearChild] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
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
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.addBladePath\' called.', [this, path]);
            // Fix issue with old code
            if (this.portalService.$window === undefined) {
                this.portalService.$window = <any>this.portalService;
            }
            this.addBlade(path);
            //this.addBladeOld(path);
        }

        addBladeOld(path: string) {
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeArea.addBladeOld\' called.', [this, path]);
            var that = this;
            if (path === undefined || path == '') { return; }

            var blade = new angularportalazure.Blade(that.portalService, path, '');
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
        'use strict';
        angular.module('angularportalazure').service('angularportalazure.bladeArea', ['$window', BladeArea]);
    })();

    //#endregion
}
