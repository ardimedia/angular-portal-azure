/// <reference types="angular" />
/// <reference path="blade.ts" />
/// <reference path="usercontrolbase.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="iaddbladeeventargs.ts" />

namespace angularportalazure {
    export class AreaBlades extends angularportalazure.UserControlBase {
        // #region Constructor

        static $inject = ['$scope', 'angularportalazure.portalService'];
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService) {
            super($scope, portalService);

            // this.areaBlades = this.portalService.$window.document.getElementById('apa-blade-area');
            this.portalScroll = this.portalService.$window.document.getElementById('apa-portal-scroll');

            this.setupAddBladeListener();
            this.setupShowHideNotificationAreaListener();
            this.setupWindowResizeListener(() => { this.setPortalScrollCss(); });
        }

        // #endregion

        // #region Properties

        // private areaBlades: HTMLElement;
        private portalScroll: HTMLElement;

        private addBladeListener;
        private areaNotificationShowListener;
        private areaNotificationHideListener;

        blades: Array<angularportalazure.Blade> = new Array<angularportalazure.Blade>();

        // #endregion

        // #region Methods

        raiseAddBladeEvent(args: angularportalazure.IAddBladeEventArgs) {
            let isBladeAlreadyShown: boolean = false;
            this.blades.forEach((blade) => {
                if (blade.path === args.path) {
                    // Blade is already show, just activate it again
                    blade.onActivate();
                    isBladeAlreadyShown = true;
                    return;
                }
            });

            if (!isBladeAlreadyShown) {
                // Add the blade, since it is not yet shown
                this.portalService.$rootScope.$broadcast('AreaBlades.AddBlade', args);
            }
        }

        setFirstBlade(path: string): angularportalazure.Blade | void {
            this.clearAll();
            this.hidePanorama();
            return this.addBlade(path);
        }

        addBlade(path: string, senderPath: string = ''): angularportalazure.Blade | void {
            if (path == null) { return; }
            if (senderPath == null) { return; }
            let portalcontent = null;
            this.portalService.$analytics.pageTrack(path);

            path = path.toLowerCase();
            senderPath = senderPath.toLowerCase();

            // #region Verify

            if (path === undefined || path === '') { return; }

            if (this.portalService.$window !== undefined) {
                if (this.portalService.$window.document === undefined) {
                    throw new Error('[angularportalazure.AreaBlades] \'this.$window.document\' undefined.');
                }

                portalcontent = this.portalService.$window.document.getElementById('apa-portal-scroll');
                if (portalcontent === null) {
                    throw new Error('[angularportalazure.AreaBlades] HTML element with ID [apa-portal-scroll] not found. Maybe it is to early to call function \'BladeArea.addBlade\'.');
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
                    throw new Error('[angularportalazure.AreaBlades] path: \'' + path + '\' will not be added. It is already added.');
                };
            });

            // #endregion

            // #region Show the blade

            let blade = new angularportalazure.Blade(this.$scope, this.portalService, path, '');
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
                throw new Error('[angularportalazure.AreaBlades.clearPath] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
            }

            this.showPanoramaIfNoBlades();
        }

        clearLevel(level: number) {
            if (this.blades.length < level) {
                throw new Error('[angularportalazure.AreaBlades] level: \'' + level + '\' could not be cleard, since only \'' + this.blades.length + '\' available.');
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
                throw new Error('[angularportalazure.AreaBlades.clearChild] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
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

        /** We need to call this when AreaBlades is no longer used, otherwise the listener does not get removed. */
        close() {
            // Unregister Listeners
            this.addBladeListener();
            this.areaNotificationShowListener();
            this.areaNotificationHideListener();
        }

        // #endregion

        private setPortalScrollCss() {
            this.portalScroll.style.marginRight = this.portalService.areaNotification.widthAreaUsed + 'px';
        }

        private setupShowHideNotificationAreaListener() {
            this.areaNotificationShowListener = this.portalService.$rootScope.$on('AreaNotification.Show', (event: ng.IAngularEvent, args: angularportalazure.IAddBladeEventArgs) => {
                this.setPortalScrollCss();
            });

            this.areaNotificationHideListener = this.portalService.$rootScope.$on('AreaNotification.Hide', (event: ng.IAngularEvent, args: angularportalazure.IAddBladeEventArgs) => {
                this.setPortalScrollCss();
            });
        }

        private setupAddBladeListener() {
            this.addBladeListener = this.portalService.$rootScope.$on('AreaBlades.AddBlade', (event: ng.IAngularEvent, args: angularportalazure.IAddBladeEventArgs) => {
                this.addBlade(args.path, args.pathSender);
            });
        }
    }

    angular.module('angularportalazure').service('angularportalazure.areaBlades', AreaBlades);
}
