/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserControlBase } from './user-control-base';
import { Blade } from './blade';
export class AreaBlades extends UserControlBase {
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    /**
     * @param {?} portalService
     */
    constructor(portalService) {
        super(portalService); // $scope,
        this.blades = new Array();
        this.portalScroll = window.document.getElementById('apa-portal-scroll');
        this.setupWindowResizeListener((/**
         * @return {?}
         */
        () => { this.setPortalScrollCss(); }));
        this.blades = [];
    }
    // #endregion
    // #region Methods
    /**
     * @param {?} args
     * @return {?}
     */
    raiseBladeOnActivateEvent(args) {
        /** @type {?} */
        let isEventRaised = false;
        this.blades.forEach((/**
         * @param {?} blade
         * @return {?}
         */
        (blade) => {
            if (blade.path.toLowerCase() === args.path.toLowerCase()) {
                // Raise event onActivate
                blade.onActivate();
                isEventRaised = true;
                return;
            }
        }));
    }
    /**
     * @param {?} args
     * @return {?}
     */
    raiseAddBladeEvent(args) {
        /** @type {?} */
        let isBladeAlreadyShown = false;
        this.blades.forEach((/**
         * @param {?} blade
         * @return {?}
         */
        (blade) => {
            if (blade.path.toLowerCase() === args.path.toLowerCase()) {
                // Blade is already shown, just activate it again
                blade.onActivate();
                isBladeAlreadyShown = true;
                return;
            }
        }));
        if (!isBladeAlreadyShown) {
            // Add the blade, since it is not yet shown
            this.portalService.areaBlades.addBlade(args.path, args.pathSender);
            //this.portalService.$rootScope.$broadcast('AreaBlades.AddBlade', args);
        }
    }
    /**
     * @param {?} path
     * @return {?}
     */
    setFirstBlade(path) {
        this.clearAll();
        this.hidePanorama();
        return this.addBlade(path);
    }
    /**
     * @param {?} path
     * @param {?=} senderPath
     * @return {?}
     */
    addBlade(path, senderPath = '') {
        if (path == null) {
            return;
        }
        if (senderPath == null) {
            return;
        }
        /** @type {?} */
        let portalcontent = null;
        console.log('commented code at : AreaBlades.addBlade (analytics)');
        // this.portalService.$analytics.pageTrack(path.toLowerCase());
        path = path.toLowerCase();
        senderPath = senderPath.toLowerCase();
        // #region Verify
        if (path === undefined || path === '') {
            return;
        }
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
        this.blades.forEach((/**
         * @param {?} blade
         * @return {?}
         */
        (blade) => {
            // we do not distinguish between lower and upper case path name
            if (blade.comparePaths(blade.path, path)) {
                throw new Error('[AreaBlades] path: \'' + path + '\' will not be added. It is already added.');
            }
        }));
        // #endregion
        // #region Show the blade
        /** @type {?} */
        let blade = new Blade(this.portalService, path, '');
        this.blades.push(blade);
        // #endregion
        // #region Position the blade
        if (this.portalService.$window !== undefined) {
            this.portalService.$window.setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                let azureportalblades = this.portalService.$window.document.getElementsByClassName('azureportalblade');
                /** @type {?} */
                let i = this.blades.length - 1;
                // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
                //       So now if it is, the user has to scroll on its own.
                if (azureportalblades[i] !== undefined && ((/** @type {?} */ (azureportalblades[i]))).offsetLeft !== undefined) {
                    /** @type {?} */
                    let sl = ((/** @type {?} */ (azureportalblades[i]))).offsetLeft - 30;
                    portalcontent.scrollLeft = sl;
                }
            }), 250);
        }
        // #endregion
        return blade;
    }
    /**
     * @return {?}
     */
    clearAll() {
        this.blades.length = 0;
        this.showPanoramaIfNoBlades();
    }
    /**
     * @param {?} path
     * @return {?}
     */
    clearPath(path) {
        // we do not distinguish between lower and upper case path name
        path = path.toLowerCase();
        /** @type {?} */
        let isremoved = this.blades.some((/**
         * @param {?} blade
         * @param {?} index
         * @return {?}
         */
        (blade, index) => {
            if (blade.comparePaths(blade.path, path)) {
                this.blades.length = index;
                return true;
            }
        }));
        if (!isremoved && this.portalService.areaNotification.path === path) {
            this.portalService.areaNotification.hide();
            isremoved = true;
        }
        if (!isremoved) {
            throw new Error('[AreaBlades.clearPath] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
        }
        this.showPanoramaIfNoBlades();
    }
    /**
     * @param {?} level
     * @return {?}
     */
    clearLevel(level) {
        if (this.blades.length < level) {
            throw new Error('[AreaBlades] level: \'' + level + '\' could not be cleard, since only \'' + this.blades.length + '\' available.');
        }
        if (level === 0) {
            level = 1;
        }
        this.blades.length = level - 1;
        this.showPanoramaIfNoBlades();
    }
    /**
     * @return {?}
     */
    clearLastLevel() {
        this.clearLevel(this.blades.length);
        this.showPanoramaIfNoBlades();
    }
    /**
     * @param {?} path
     * @return {?}
     */
    clearChild(path) {
        path = path.toLowerCase();
        if (path === '') {
            return;
        }
        /** @type {?} */
        let isremoved = this.blades.some((/**
         * @param {?} blade
         * @param {?} index
         * @return {?}
         */
        (blade, index) => {
            // we do not distinguish between lower and upper case path name
            if (blade.comparePaths(blade.path, path)) {
                this.blades.length = index + 1;
                return true;
            }
        }));
        if (!isremoved) {
            throw new Error('[AreaBlades.clearChild] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
        }
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    hidePanorama() {
        if (this.portalService.panorama !== undefined) {
            this.portalService.panorama.isVisible = false;
            this.portalService.panorama.startboard.tiles.showTiles = false;
        }
    }
    /**
     * We need to call this when AreaBlades is no longer used, otherwise the listener does not get removed.
     * @return {?}
     */
    close() {
        // Unregister Listeners
        this.addBladeListener();
        this.areaNotificationShowListener();
        this.areaNotificationHideListener();
    }
    // #endregion
    /**
     * @return {?}
     */
    setPortalScrollCss() {
        if (this.portalScroll != null && this.portalService.areaNotification != null) {
            this.portalScroll.style.marginRight = this.portalService.areaNotification.widthAreaUsed + 'px';
        }
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AreaBlades.prototype.portalScroll;
    /**
     * @type {?}
     * @private
     */
    AreaBlades.prototype.addBladeListener;
    /**
     * @type {?}
     * @private
     */
    AreaBlades.prototype.areaNotificationShowListener;
    /**
     * @type {?}
     * @private
     */
    AreaBlades.prototype.areaNotificationHideListener;
    /** @type {?} */
    AreaBlades.prototype.blades;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS1ibGFkZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vYXJlYS1ibGFkZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBR2hDLE1BQU0sT0FBTyxVQUFXLFNBQVEsZUFBZTs7Ozs7O0lBSTNDLFlBQVksYUFBNEI7UUFDcEMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQW1CcEMsV0FBTSxHQUFpQixJQUFJLEtBQUssRUFBUyxDQUFDO1FBakJ0QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLHlCQUF5Qjs7O1FBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUVyRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBa0JELHlCQUF5QixDQUFDLElBQXdCOztZQUMxQyxhQUFhLEdBQVksS0FBSztRQUVsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzFCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUN0RCx5QkFBeUI7Z0JBQ3pCLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbkIsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDckIsT0FBTzthQUNWO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLElBQXdCOztZQUNuQyxtQkFBbUIsR0FBWSxLQUFLO1FBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3RELGlEQUFpRDtnQkFDakQsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNuQixtQkFBbUIsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLE9BQU87YUFDVjtRQUNMLENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ3RCLDJDQUEyQztZQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkUsd0VBQXdFO1NBQzNFO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsSUFBWTtRQUN0QixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBWSxFQUFFLGFBQXFCLEVBQUU7UUFDMUMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzdCLElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtZQUFFLE9BQU87U0FBRTs7WUFDL0IsYUFBYSxHQUFnQixJQUFJO1FBRXJDLE9BQU8sQ0FBQyxHQUFHLENBQUMscURBQXFELENBQUMsQ0FBQztRQUNuRSwrREFBK0Q7UUFFL0QsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixVQUFVLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXRDLGlCQUFpQjtRQUVqQixJQUFJLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUVsRCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQ25ELE1BQU0sSUFBSSxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQzthQUN4RTtZQUVELGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDeEYsSUFBSSxhQUFhLEtBQUssSUFBSSxFQUFFO2dCQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLGdJQUFnSSxDQUFDLENBQUM7YUFDcko7U0FDSjtRQUVELGFBQWE7UUFFYixnREFBZ0Q7UUFFaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUU1QixhQUFhO1FBRWIsOENBQThDO1FBRTlDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDMUIsK0RBQStEO1lBQy9ELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUN0QyxNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixHQUFHLElBQUksR0FBRyw0Q0FBNEMsQ0FBQyxDQUFDO2FBQ2xHO1FBQ0wsQ0FBQyxFQUFDLENBQUM7Ozs7WUFNQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhCLGFBQWE7UUFFYiw2QkFBNkI7UUFFN0IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVTs7O1lBQUMsR0FBRyxFQUFFOztvQkFDbkMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDOztvQkFFbEcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBRTlCLCtEQUErRDtnQkFDL0QsNERBQTREO2dCQUM1RCxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsSUFBSSxDQUFDLG1CQUFLLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFBLENBQUMsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFOzt3QkFDeEYsRUFBRSxHQUFHLENBQUMsbUJBQUssaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUEsQ0FBQyxDQUFDLFVBQVUsR0FBRyxFQUFFO29CQUNwRCxhQUFhLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztpQkFDakM7WUFDTCxDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7U0FDWDtRQUVELGFBQWE7UUFFYixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFZO1FBQ2xCLCtEQUErRDtRQUMvRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDOztZQUV0QixTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7OztRQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzlDLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDLEVBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtZQUNqRSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLEdBQUcsNkRBQTZELENBQUMsQ0FBQztTQUM3SDtRQUVELElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQUU7WUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLEdBQUcsdUNBQXVDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDLENBQUM7U0FDdEk7UUFFRCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQUU7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsY0FBYztRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ25CLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFMUIsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2IsT0FBTztTQUNWOztZQUNHLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7O1FBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDOUMsK0RBQStEO1lBQy9ELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLElBQUksQ0FBQzthQUNmO1FBQ0wsQ0FBQyxFQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLEdBQUcsSUFBSSxHQUFHLDZEQUE2RCxDQUFDLENBQUM7U0FDOUg7SUFDTCxDQUFDOzs7O0lBRUQsc0JBQXNCO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO2dCQUMzQztvQkFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO29CQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7aUJBQ2pFO2FBQ0o7U0FDSjtJQUNMLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDM0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUM5QyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDbEU7SUFDTCxDQUFDOzs7OztJQUdELEtBQUs7UUFDRCx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFJRCxrQkFBa0I7UUFDZCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLElBQUksSUFBSSxFQUFFO1lBQzFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDbEc7SUFDTCxDQUFDO0NBQ0o7Ozs7OztJQXpORyxrQ0FBa0M7Ozs7O0lBRWxDLHNDQUFxQzs7Ozs7SUFDckMsa0RBQWlEOzs7OztJQUNqRCxrREFBaUQ7O0lBRWpELDRCQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4vcG9ydGFsLXNlcnZpY2UnO1xuaW1wb3J0IHsgVGlsZXMgfSBmcm9tICcuL3RpbGVzJztcbmltcG9ydCB7IFVzZXJDb250cm9sQmFzZSB9IGZyb20gJy4vdXNlci1jb250cm9sLWJhc2UnO1xuaW1wb3J0IHsgQmxhZGUgfSBmcm9tICcuL2JsYWRlJztcbmltcG9ydCB7IElBZGRCbGFkZUV2ZW50QXJncyB9IGZyb20gJy4vaWFkZC1ibGFkZS1ldmVudC1hcmdzJztcblxuZXhwb3J0IGNsYXNzIEFyZWFCbGFkZXMgZXh0ZW5kcyBVc2VyQ29udHJvbEJhc2Uge1xuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JcblxuICAgIC8vc3RhdGljICRpbmplY3QgPSBbJyRzY29wZScsICdwb3J0YWxTZXJ2aWNlJ107XG4gICAgY29uc3RydWN0b3IocG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSkgeyAvLyAkc2NvcGU6IGFueSxcbiAgICAgICAgc3VwZXIocG9ydGFsU2VydmljZSk7IC8vICRzY29wZSxcblxuICAgICAgICB0aGlzLnBvcnRhbFNjcm9sbCA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBhLXBvcnRhbC1zY3JvbGwnKTtcblxuICAgICAgICB0aGlzLnNldHVwV2luZG93UmVzaXplTGlzdGVuZXIoKCkgPT4geyB0aGlzLnNldFBvcnRhbFNjcm9sbENzcygpOyB9KTtcblxuICAgICAgICB0aGlzLmJsYWRlcyA9IFtdO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xuXG4gICAgcHJpdmF0ZSBwb3J0YWxTY3JvbGw6IEhUTUxFbGVtZW50O1xuXG4gICAgcHJpdmF0ZSBhZGRCbGFkZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xuICAgIHByaXZhdGUgYXJlYU5vdGlmaWNhdGlvblNob3dMaXN0ZW5lcjogKCkgPT4gdm9pZDtcbiAgICBwcml2YXRlIGFyZWFOb3RpZmljYXRpb25IaWRlTGlzdGVuZXI6ICgpID0+IHZvaWQ7XG5cbiAgICBibGFkZXM6IEFycmF5PEJsYWRlPiA9IG5ldyBBcnJheTxCbGFkZT4oKTtcblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gTWV0aG9kc1xuXG4gICAgcmFpc2VCbGFkZU9uQWN0aXZhdGVFdmVudChhcmdzOiBJQWRkQmxhZGVFdmVudEFyZ3MpIHtcbiAgICAgICAgbGV0IGlzRXZlbnRSYWlzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmJsYWRlcy5mb3JFYWNoKChibGFkZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGJsYWRlLnBhdGgudG9Mb3dlckNhc2UoKSA9PT0gYXJncy5wYXRoLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBSYWlzZSBldmVudCBvbkFjdGl2YXRlXG4gICAgICAgICAgICAgICAgYmxhZGUub25BY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgIGlzRXZlbnRSYWlzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmFpc2VBZGRCbGFkZUV2ZW50KGFyZ3M6IElBZGRCbGFkZUV2ZW50QXJncykge1xuICAgICAgICBsZXQgaXNCbGFkZUFscmVhZHlTaG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJsYWRlcy5mb3JFYWNoKChibGFkZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGJsYWRlLnBhdGgudG9Mb3dlckNhc2UoKSA9PT0gYXJncy5wYXRoLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBCbGFkZSBpcyBhbHJlYWR5IHNob3duLCBqdXN0IGFjdGl2YXRlIGl0IGFnYWluXG4gICAgICAgICAgICAgICAgYmxhZGUub25BY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgIGlzQmxhZGVBbHJlYWR5U2hvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFpc0JsYWRlQWxyZWFkeVNob3duKSB7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGJsYWRlLCBzaW5jZSBpdCBpcyBub3QgeWV0IHNob3duXG4gICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYUJsYWRlcy5hZGRCbGFkZShhcmdzLnBhdGgsIGFyZ3MucGF0aFNlbmRlcik7XG4gICAgICAgICAgICAvL3RoaXMucG9ydGFsU2VydmljZS4kcm9vdFNjb3BlLiRicm9hZGNhc3QoJ0FyZWFCbGFkZXMuQWRkQmxhZGUnLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEZpcnN0QmxhZGUocGF0aDogc3RyaW5nKTogQmxhZGUgfCB2b2lkIHtcbiAgICAgICAgdGhpcy5jbGVhckFsbCgpO1xuICAgICAgICB0aGlzLmhpZGVQYW5vcmFtYSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRCbGFkZShwYXRoKTtcbiAgICB9XG5cbiAgICBhZGRCbGFkZShwYXRoOiBzdHJpbmcsIHNlbmRlclBhdGg6IHN0cmluZyA9ICcnKTogQmxhZGUgfCB2b2lkIHtcbiAgICAgICAgaWYgKHBhdGggPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgICAgaWYgKHNlbmRlclBhdGggPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgICAgbGV0IHBvcnRhbGNvbnRlbnQ6IEhUTUxFbGVtZW50ID0gbnVsbDtcblxuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudGVkIGNvZGUgYXQgOiBBcmVhQmxhZGVzLmFkZEJsYWRlIChhbmFseXRpY3MpJyk7XG4gICAgICAgIC8vIHRoaXMucG9ydGFsU2VydmljZS4kYW5hbHl0aWNzLnBhZ2VUcmFjayhwYXRoLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgICAgIHBhdGggPSBwYXRoLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHNlbmRlclBhdGggPSBzZW5kZXJQYXRoLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy8gI3JlZ2lvbiBWZXJpZnlcblxuICAgICAgICBpZiAocGF0aCA9PT0gdW5kZWZpbmVkIHx8IHBhdGggPT09ICcnKSB7IHJldHVybjsgfVxuXG4gICAgICAgIGlmICh0aGlzLnBvcnRhbFNlcnZpY2UuJHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3J0YWxTZXJ2aWNlLiR3aW5kb3cuZG9jdW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW0FyZWFCbGFkZXNdIFxcJ3RoaXMuJHdpbmRvdy5kb2N1bWVudFxcJyB1bmRlZmluZWQuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvcnRhbGNvbnRlbnQgPSB0aGlzLnBvcnRhbFNlcnZpY2UuJHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBhLXBvcnRhbC1zY3JvbGwnKTtcbiAgICAgICAgICAgIGlmIChwb3J0YWxjb250ZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQXJlYUJsYWRlc10gSFRNTCBlbGVtZW50IHdpdGggSUQgW2FwYS1wb3J0YWwtc2Nyb2xsXSBub3QgZm91bmQuIE1heWJlIGl0IGlzIHRvIGVhcmx5IHRvIGNhbGwgZnVuY3Rpb24gXFwnQmxhZGVBcmVhLmFkZEJsYWRlXFwnLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vICNyZWdpb24gQ2xlYXIgYWxsIGNoaWxkcmVuIG9mIHRoZSBwYXJlbnQgcGF0aFxuXG4gICAgICAgIHRoaXMuY2xlYXJDaGlsZChzZW5kZXJQYXRoKTtcblxuICAgICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgICAgLy8gI3JlZ2lvbiBNYWtlIHN1cmUgdGhlIGJsYWRlIGlzIG5vdCB5ZXQgc2hvd1xuXG4gICAgICAgIHRoaXMuYmxhZGVzLmZvckVhY2goKGJsYWRlKSA9PiB7XG4gICAgICAgICAgICAvLyB3ZSBkbyBub3QgZGlzdGluZ3Vpc2ggYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgY2FzZSBwYXRoIG5hbWVcbiAgICAgICAgICAgIGlmIChibGFkZS5jb21wYXJlUGF0aHMoYmxhZGUucGF0aCwgcGF0aCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tBcmVhQmxhZGVzXSBwYXRoOiBcXCcnICsgcGF0aCArICdcXCcgd2lsbCBub3QgYmUgYWRkZWQuIEl0IGlzIGFscmVhZHkgYWRkZWQuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vICNlbmRyZWdpb25cblxuICAgICAgICAvLyAjcmVnaW9uIFNob3cgdGhlIGJsYWRlXG5cbiAgICAgICAgbGV0IGJsYWRlID0gbmV3IEJsYWRlKHRoaXMucG9ydGFsU2VydmljZSwgcGF0aCwgJycpOyAvLyB0aGlzLiRzY29wZSxcbiAgICAgICAgdGhpcy5ibGFkZXMucHVzaChibGFkZSk7XG5cbiAgICAgICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vICNyZWdpb24gUG9zaXRpb24gdGhlIGJsYWRlXG5cbiAgICAgICAgaWYgKHRoaXMucG9ydGFsU2VydmljZS4kd2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS4kd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhenVyZXBvcnRhbGJsYWRlcyA9IHRoaXMucG9ydGFsU2VydmljZS4kd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2F6dXJlcG9ydGFsYmxhZGUnKTtcblxuICAgICAgICAgICAgICAgIGxldCBpID0gdGhpcy5ibGFkZXMubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgICAgIC8vIEhBQ0s6IFNvbWV0aW1lIGF6dXJlcG9ydGFsYmxhZGVzW2ldLm9mZnNldExlZnQgaXMgdW5kZWZpbmVkLlxuICAgICAgICAgICAgICAgIC8vICAgICAgIFNvIG5vdyBpZiBpdCBpcywgdGhlIHVzZXIgaGFzIHRvIHNjcm9sbCBvbiBpdHMgb3duLlxuICAgICAgICAgICAgICAgIGlmIChhenVyZXBvcnRhbGJsYWRlc1tpXSAhPT0gdW5kZWZpbmVkICYmICg8YW55PmF6dXJlcG9ydGFsYmxhZGVzW2ldKS5vZmZzZXRMZWZ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNsID0gKDxhbnk+YXp1cmVwb3J0YWxibGFkZXNbaV0pLm9mZnNldExlZnQgLSAzMDtcbiAgICAgICAgICAgICAgICAgICAgcG9ydGFsY29udGVudC5zY3JvbGxMZWZ0ID0gc2w7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vICNlbmRyZWdpb25cblxuICAgICAgICByZXR1cm4gYmxhZGU7XG4gICAgfVxuXG4gICAgY2xlYXJBbGwoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmxhZGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuc2hvd1Bhbm9yYW1hSWZOb0JsYWRlcygpO1xuICAgIH1cblxuICAgIGNsZWFyUGF0aChwYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgLy8gd2UgZG8gbm90IGRpc3Rpbmd1aXNoIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGNhc2UgcGF0aCBuYW1lXG4gICAgICAgIHBhdGggPSBwYXRoLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgbGV0IGlzcmVtb3ZlZCA9IHRoaXMuYmxhZGVzLnNvbWUoKGJsYWRlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJsYWRlLmNvbXBhcmVQYXRocyhibGFkZS5wYXRoLCBwYXRoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmxhZGVzLmxlbmd0aCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWlzcmVtb3ZlZCAmJiB0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYU5vdGlmaWNhdGlvbi5wYXRoID09PSBwYXRoKSB7XG4gICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYU5vdGlmaWNhdGlvbi5oaWRlKCk7XG4gICAgICAgICAgICBpc3JlbW92ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc3JlbW92ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW0FyZWFCbGFkZXMuY2xlYXJQYXRoXSBwYXRoOiBcXCcnICsgcGF0aCArICdcXCcgY291bGQgbm90IGJlIHJlbW92ZWQsIHNpbmNlIHBhdGggbm90IGZvdW5kIGluIGJsYWRlVXJscy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd1Bhbm9yYW1hSWZOb0JsYWRlcygpO1xuICAgIH1cblxuICAgIGNsZWFyTGV2ZWwobGV2ZWw6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5ibGFkZXMubGVuZ3RoIDwgbGV2ZWwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW0FyZWFCbGFkZXNdIGxldmVsOiBcXCcnICsgbGV2ZWwgKyAnXFwnIGNvdWxkIG5vdCBiZSBjbGVhcmQsIHNpbmNlIG9ubHkgXFwnJyArIHRoaXMuYmxhZGVzLmxlbmd0aCArICdcXCcgYXZhaWxhYmxlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxldmVsID09PSAwKSB7IGxldmVsID0gMTsgfVxuICAgICAgICB0aGlzLmJsYWRlcy5sZW5ndGggPSBsZXZlbCAtIDE7XG4gICAgICAgIHRoaXMuc2hvd1Bhbm9yYW1hSWZOb0JsYWRlcygpO1xuICAgIH1cblxuICAgIGNsZWFyTGFzdExldmVsKCkge1xuICAgICAgICB0aGlzLmNsZWFyTGV2ZWwodGhpcy5ibGFkZXMubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5zaG93UGFub3JhbWFJZk5vQmxhZGVzKCk7XG4gICAgfVxuXG4gICAgY2xlYXJDaGlsZChwYXRoOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgcGF0aCA9IHBhdGgudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAocGF0aCA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXNyZW1vdmVkID0gdGhpcy5ibGFkZXMuc29tZSgoYmxhZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAvLyB3ZSBkbyBub3QgZGlzdGluZ3Vpc2ggYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgY2FzZSBwYXRoIG5hbWVcbiAgICAgICAgICAgIGlmIChibGFkZS5jb21wYXJlUGF0aHMoYmxhZGUucGF0aCwgcGF0aCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJsYWRlcy5sZW5ndGggPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzcmVtb3ZlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQXJlYUJsYWRlcy5jbGVhckNoaWxkXSBwYXRoOiBcXCcnICsgcGF0aCArICdcXCcgY291bGQgbm90IGJlIHJlbW92ZWQsIHNpbmNlIHBhdGggbm90IGZvdW5kIGluIGJsYWRlVXJscy4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQYW5vcmFtYUlmTm9CbGFkZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmJsYWRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hLmlzVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5zdGFydGJvYXJkLnRpbGVzLnNob3dUaWxlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGlkZVBhbm9yYW1hKCkge1xuICAgICAgICBpZiAodGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5zdGFydGJvYXJkLnRpbGVzLnNob3dUaWxlcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFdlIG5lZWQgdG8gY2FsbCB0aGlzIHdoZW4gQXJlYUJsYWRlcyBpcyBubyBsb25nZXIgdXNlZCwgb3RoZXJ3aXNlIHRoZSBsaXN0ZW5lciBkb2VzIG5vdCBnZXQgcmVtb3ZlZC4gKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgLy8gVW5yZWdpc3RlciBMaXN0ZW5lcnNcbiAgICAgICAgdGhpcy5hZGRCbGFkZUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuYXJlYU5vdGlmaWNhdGlvblNob3dMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmFyZWFOb3RpZmljYXRpb25IaWRlTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICBzZXRQb3J0YWxTY3JvbGxDc3MoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvcnRhbFNjcm9sbCAhPSBudWxsICYmIHRoaXMucG9ydGFsU2VydmljZS5hcmVhTm90aWZpY2F0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucG9ydGFsU2Nyb2xsLnN0eWxlLm1hcmdpblJpZ2h0ID0gdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFOb3RpZmljYXRpb24ud2lkdGhBcmVhVXNlZCArICdweCc7XG4gICAgICAgIH1cclxuICAgIH1cbn1cblxuLy8gYW5ndWxhci5tb2R1bGUoJ2FuZ3VsYXJwb3J0YWxhenVyZScpLnNlcnZpY2UoJ2FyZWFCbGFkZXMnLCBBcmVhQmxhZGVzKTtcbiJdfQ==