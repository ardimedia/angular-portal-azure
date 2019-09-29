/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    console.log('showPanoramaIfNoBlades');
                    console.log({ a: this.portalService.panorama.isVisible });
                    console.log({ a: this.portalService.panorama.startboard.tiles.showTiles });
                    this.portalService.panorama.isVisible = true;
                    this.portalService.panorama.startboard.tiles.showTiles = true;
                    console.log({ a: this.portalService.panorama.isVisible });
                    console.log({ a: this.portalService.panorama.startboard.tiles.showTiles });
                }
            }
        }
    }
    /**
     * @return {?}
     */
    hidePanorama() {
        if (this.portalService.panorama !== undefined) {
            console.log('hidePanorama');
            console.log({ a: this.portalService.panorama.isVisible });
            console.log({ a: this.portalService.panorama.startboard.tiles.showTiles });
            this.portalService.panorama.isVisible = false;
            this.portalService.panorama.startboard.tiles.showTiles = false;
            console.log(((/** @type {?} */ (Object))).id(this));
            console.log(((/** @type {?} */ (Object))).id(this.portalService));
            console.log(((/** @type {?} */ (Object))).id(this.portalService.panorama));
            console.log(((/** @type {?} */ (Object))).id(this.portalService.panorama.startboard));
            console.log(((/** @type {?} */ (Object))).id(this.portalService.panorama.startboard.tiles));
            console.log({ a: this.portalService.panorama.isVisible });
            console.log({ a: this.portalService.panorama.startboard.tiles.showTiles });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS1ibGFkZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vYXJlYS1ibGFkZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBR2hDLE1BQU0sT0FBTyxVQUFXLFNBQVEsZUFBZTs7Ozs7O0lBSTNDLFlBQVksYUFBNEI7UUFDcEMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQW1CcEMsV0FBTSxHQUFpQixJQUFJLEtBQUssRUFBUyxDQUFDO1FBakJ0QyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLHlCQUF5Qjs7O1FBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztRQUVyRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBa0JELHlCQUF5QixDQUFDLElBQXdCOztZQUMxQyxhQUFhLEdBQVksS0FBSztRQUVsQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzFCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUN0RCx5QkFBeUI7Z0JBQ3pCLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbkIsYUFBYSxHQUFHLElBQUksQ0FBQztnQkFDckIsT0FBTzthQUNWO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVELGtCQUFr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Ozs7OztJQUVsQyxzQ0FBcUM7Ozs7O0lBQ3JDLGtEQUFpRDs7Ozs7SUFDakQsa0RBQWlEOztJQUVqRCw0QkFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cbmltcG9ydCB7IFBvcnRhbFNlcnZpY2UgfSBmcm9tICcuL3BvcnRhbC1zZXJ2aWNlJztcbmltcG9ydCB7IFRpbGVzIH0gZnJvbSAnLi90aWxlcyc7XG5pbXBvcnQgeyBVc2VyQ29udHJvbEJhc2UgfSBmcm9tICcuL3VzZXItY29udHJvbC1iYXNlJztcbmltcG9ydCB7IEJsYWRlIH0gZnJvbSAnLi9ibGFkZSc7XG5pbXBvcnQgeyBJQWRkQmxhZGVFdmVudEFyZ3MgfSBmcm9tICcuL2lhZGQtYmxhZGUtZXZlbnQtYXJncyc7XG5cbmV4cG9ydCBjbGFzcyBBcmVhQmxhZGVzIGV4dGVuZHMgVXNlckNvbnRyb2xCYXNlIHtcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yXG5cbiAgICAvL3N0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnLCAncG9ydGFsU2VydmljZSddO1xuICAgIGNvbnN0cnVjdG9yKHBvcnRhbFNlcnZpY2U6IFBvcnRhbFNlcnZpY2UpIHsgLy8gJHNjb3BlOiBhbnksXG4gICAgICAgIHN1cGVyKHBvcnRhbFNlcnZpY2UpOyAvLyAkc2NvcGUsXG5cbiAgICAgICAgdGhpcy5wb3J0YWxTY3JvbGwgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwYS1wb3J0YWwtc2Nyb2xsJyk7XG5cbiAgICAgICAgdGhpcy5zZXR1cFdpbmRvd1Jlc2l6ZUxpc3RlbmVyKCgpID0+IHsgdGhpcy5zZXRQb3J0YWxTY3JvbGxDc3MoKTsgfSk7XG5cbiAgICAgICAgdGhpcy5ibGFkZXMgPSBbXTtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcblxuICAgIHByaXZhdGUgcG9ydGFsU2Nyb2xsOiBIVE1MRWxlbWVudDtcblxuICAgIHByaXZhdGUgYWRkQmxhZGVMaXN0ZW5lcjogKCkgPT4gdm9pZDtcbiAgICBwcml2YXRlIGFyZWFOb3RpZmljYXRpb25TaG93TGlzdGVuZXI6ICgpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBhcmVhTm90aWZpY2F0aW9uSGlkZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xuXG4gICAgYmxhZGVzOiBBcnJheTxCbGFkZT4gPSBuZXcgQXJyYXk8QmxhZGU+KCk7XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIE1ldGhvZHNcblxuICAgIHJhaXNlQmxhZGVPbkFjdGl2YXRlRXZlbnQoYXJnczogSUFkZEJsYWRlRXZlbnRBcmdzKSB7XG4gICAgICAgIGxldCBpc0V2ZW50UmFpc2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5ibGFkZXMuZm9yRWFjaCgoYmxhZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChibGFkZS5wYXRoLnRvTG93ZXJDYXNlKCkgPT09IGFyZ3MucGF0aC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gUmFpc2UgZXZlbnQgb25BY3RpdmF0ZVxuICAgICAgICAgICAgICAgIGJsYWRlLm9uQWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICBpc0V2ZW50UmFpc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJhaXNlQWRkQmxhZGVFdmVudChhcmdzOiBJQWRkQmxhZGVFdmVudEFyZ3MpIHtcbiAgICAgICAgbGV0IGlzQmxhZGVBbHJlYWR5U2hvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ibGFkZXMuZm9yRWFjaCgoYmxhZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChibGFkZS5wYXRoLnRvTG93ZXJDYXNlKCkgPT09IGFyZ3MucGF0aC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gQmxhZGUgaXMgYWxyZWFkeSBzaG93biwganVzdCBhY3RpdmF0ZSBpdCBhZ2FpblxuICAgICAgICAgICAgICAgIGJsYWRlLm9uQWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICBpc0JsYWRlQWxyZWFkeVNob3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghaXNCbGFkZUFscmVhZHlTaG93bikge1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBibGFkZSwgc2luY2UgaXQgaXMgbm90IHlldCBzaG93blxuICAgICAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFCbGFkZXMuYWRkQmxhZGUoYXJncy5wYXRoLCBhcmdzLnBhdGhTZW5kZXIpO1xuICAgICAgICAgICAgLy90aGlzLnBvcnRhbFNlcnZpY2UuJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdBcmVhQmxhZGVzLkFkZEJsYWRlJywgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRGaXJzdEJsYWRlKHBhdGg6IHN0cmluZyk6IEJsYWRlIHwgdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXJBbGwoKTtcbiAgICAgICAgdGhpcy5oaWRlUGFub3JhbWEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQmxhZGUocGF0aCk7XG4gICAgfVxuXG4gICAgYWRkQmxhZGUocGF0aDogc3RyaW5nLCBzZW5kZXJQYXRoOiBzdHJpbmcgPSAnJyk6IEJsYWRlIHwgdm9pZCB7XG4gICAgICAgIGlmIChwYXRoID09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmIChzZW5kZXJQYXRoID09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgICAgIGxldCBwb3J0YWxjb250ZW50OiBIVE1MRWxlbWVudCA9IG51bGw7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRlZCBjb2RlIGF0IDogQXJlYUJsYWRlcy5hZGRCbGFkZSAoYW5hbHl0aWNzKScpO1xuICAgICAgICAvLyB0aGlzLnBvcnRhbFNlcnZpY2UuJGFuYWx5dGljcy5wYWdlVHJhY2socGF0aC50b0xvd2VyQ2FzZSgpKTtcblxuICAgICAgICBwYXRoID0gcGF0aC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBzZW5kZXJQYXRoID0gc2VuZGVyUGF0aC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vICNyZWdpb24gVmVyaWZ5XG5cbiAgICAgICAgaWYgKHBhdGggPT09IHVuZGVmaW5lZCB8fCBwYXRoID09PSAnJykgeyByZXR1cm47IH1cblxuICAgICAgICBpZiAodGhpcy5wb3J0YWxTZXJ2aWNlLiR3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucG9ydGFsU2VydmljZS4kd2luZG93LmRvY3VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tBcmVhQmxhZGVzXSBcXCd0aGlzLiR3aW5kb3cuZG9jdW1lbnRcXCcgdW5kZWZpbmVkLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb3J0YWxjb250ZW50ID0gdGhpcy5wb3J0YWxTZXJ2aWNlLiR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwYS1wb3J0YWwtc2Nyb2xsJyk7XG4gICAgICAgICAgICBpZiAocG9ydGFsY29udGVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW0FyZWFCbGFkZXNdIEhUTUwgZWxlbWVudCB3aXRoIElEIFthcGEtcG9ydGFsLXNjcm9sbF0gbm90IGZvdW5kLiBNYXliZSBpdCBpcyB0byBlYXJseSB0byBjYWxsIGZ1bmN0aW9uIFxcJ0JsYWRlQXJlYS5hZGRCbGFkZVxcJy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vICNlbmRyZWdpb25cblxuICAgICAgICAvLyAjcmVnaW9uIENsZWFyIGFsbCBjaGlsZHJlbiBvZiB0aGUgcGFyZW50IHBhdGhcblxuICAgICAgICB0aGlzLmNsZWFyQ2hpbGQoc2VuZGVyUGF0aCk7XG5cbiAgICAgICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vICNyZWdpb24gTWFrZSBzdXJlIHRoZSBibGFkZSBpcyBub3QgeWV0IHNob3dcblxuICAgICAgICB0aGlzLmJsYWRlcy5mb3JFYWNoKChibGFkZSkgPT4ge1xuICAgICAgICAgICAgLy8gd2UgZG8gbm90IGRpc3Rpbmd1aXNoIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGNhc2UgcGF0aCBuYW1lXG4gICAgICAgICAgICBpZiAoYmxhZGUuY29tcGFyZVBhdGhzKGJsYWRlLnBhdGgsIHBhdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQXJlYUJsYWRlc10gcGF0aDogXFwnJyArIHBhdGggKyAnXFwnIHdpbGwgbm90IGJlIGFkZGVkLiBJdCBpcyBhbHJlYWR5IGFkZGVkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgICAgLy8gI3JlZ2lvbiBTaG93IHRoZSBibGFkZVxuXG4gICAgICAgIGxldCBibGFkZSA9IG5ldyBCbGFkZSh0aGlzLnBvcnRhbFNlcnZpY2UsIHBhdGgsICcnKTsgLy8gdGhpcy4kc2NvcGUsXG4gICAgICAgIHRoaXMuYmxhZGVzLnB1c2goYmxhZGUpO1xuXG4gICAgICAgIC8vICNlbmRyZWdpb25cblxuICAgICAgICAvLyAjcmVnaW9uIFBvc2l0aW9uIHRoZSBibGFkZVxuXG4gICAgICAgIGlmICh0aGlzLnBvcnRhbFNlcnZpY2UuJHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuJHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYXp1cmVwb3J0YWxibGFkZXMgPSB0aGlzLnBvcnRhbFNlcnZpY2UuJHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhenVyZXBvcnRhbGJsYWRlJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaSA9IHRoaXMuYmxhZGVzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgICAgICAvLyBIQUNLOiBTb21ldGltZSBhenVyZXBvcnRhbGJsYWRlc1tpXS5vZmZzZXRMZWZ0IGlzIHVuZGVmaW5lZC5cbiAgICAgICAgICAgICAgICAvLyAgICAgICBTbyBub3cgaWYgaXQgaXMsIHRoZSB1c2VyIGhhcyB0byBzY3JvbGwgb24gaXRzIG93bi5cbiAgICAgICAgICAgICAgICBpZiAoYXp1cmVwb3J0YWxibGFkZXNbaV0gIT09IHVuZGVmaW5lZCAmJiAoPGFueT5henVyZXBvcnRhbGJsYWRlc1tpXSkub2Zmc2V0TGVmdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzbCA9ICg8YW55PmF6dXJlcG9ydGFsYmxhZGVzW2ldKS5vZmZzZXRMZWZ0IC0gMzA7XG4gICAgICAgICAgICAgICAgICAgIHBvcnRhbGNvbnRlbnQuc2Nyb2xsTGVmdCA9IHNsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgICAgcmV0dXJuIGJsYWRlO1xuICAgIH1cblxuICAgIGNsZWFyQWxsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJsYWRlcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLnNob3dQYW5vcmFtYUlmTm9CbGFkZXMoKTtcbiAgICB9XG5cbiAgICBjbGVhclBhdGgocGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIC8vIHdlIGRvIG5vdCBkaXN0aW5ndWlzaCBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBjYXNlIHBhdGggbmFtZVxuICAgICAgICBwYXRoID0gcGF0aC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGxldCBpc3JlbW92ZWQgPSB0aGlzLmJsYWRlcy5zb21lKChibGFkZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChibGFkZS5jb21wYXJlUGF0aHMoYmxhZGUucGF0aCwgcGF0aCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJsYWRlcy5sZW5ndGggPSBpbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFpc3JlbW92ZWQgJiYgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFOb3RpZmljYXRpb24ucGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFOb3RpZmljYXRpb24uaGlkZSgpO1xuICAgICAgICAgICAgaXNyZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNyZW1vdmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tBcmVhQmxhZGVzLmNsZWFyUGF0aF0gcGF0aDogXFwnJyArIHBhdGggKyAnXFwnIGNvdWxkIG5vdCBiZSByZW1vdmVkLCBzaW5jZSBwYXRoIG5vdCBmb3VuZCBpbiBibGFkZVVybHMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dQYW5vcmFtYUlmTm9CbGFkZXMoKTtcbiAgICB9XG5cbiAgICBjbGVhckxldmVsKGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuYmxhZGVzLmxlbmd0aCA8IGxldmVsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tBcmVhQmxhZGVzXSBsZXZlbDogXFwnJyArIGxldmVsICsgJ1xcJyBjb3VsZCBub3QgYmUgY2xlYXJkLCBzaW5jZSBvbmx5IFxcJycgKyB0aGlzLmJsYWRlcy5sZW5ndGggKyAnXFwnIGF2YWlsYWJsZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZXZlbCA9PT0gMCkgeyBsZXZlbCA9IDE7IH1cbiAgICAgICAgdGhpcy5ibGFkZXMubGVuZ3RoID0gbGV2ZWwgLSAxO1xuICAgICAgICB0aGlzLnNob3dQYW5vcmFtYUlmTm9CbGFkZXMoKTtcbiAgICB9XG5cbiAgICBjbGVhckxhc3RMZXZlbCgpIHtcbiAgICAgICAgdGhpcy5jbGVhckxldmVsKHRoaXMuYmxhZGVzLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuc2hvd1Bhbm9yYW1hSWZOb0JsYWRlcygpO1xuICAgIH1cblxuICAgIGNsZWFyQ2hpbGQocGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHBhdGggPSBwYXRoLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHBhdGggPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzcmVtb3ZlZCA9IHRoaXMuYmxhZGVzLnNvbWUoKGJsYWRlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gd2UgZG8gbm90IGRpc3Rpbmd1aXNoIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGNhc2UgcGF0aCBuYW1lXG4gICAgICAgICAgICBpZiAoYmxhZGUuY29tcGFyZVBhdGhzKGJsYWRlLnBhdGgsIHBhdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ibGFkZXMubGVuZ3RoID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc3JlbW92ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW0FyZWFCbGFkZXMuY2xlYXJDaGlsZF0gcGF0aDogXFwnJyArIHBhdGggKyAnXFwnIGNvdWxkIG5vdCBiZSByZW1vdmVkLCBzaW5jZSBwYXRoIG5vdCBmb3VuZCBpbiBibGFkZVVybHMuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93UGFub3JhbWFJZk5vQmxhZGVzKCkge1xuICAgICAgICBpZiAodGhpcy5ibGFkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzaG93UGFub3JhbWFJZk5vQmxhZGVzJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgYTogdGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hLmlzVmlzaWJsZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeyBhOiB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuc3RhcnRib2FyZC50aWxlcy5zaG93VGlsZXMgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuc3RhcnRib2FyZC50aWxlcy5zaG93VGlsZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IGE6IHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5pc1Zpc2libGUgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgYTogdGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hLnN0YXJ0Ym9hcmQudGlsZXMuc2hvd1RpbGVzIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVQYW5vcmFtYSgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGlkZVBhbm9yYW1hJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7IGE6IHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5pc1Zpc2libGUgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7IGE6IHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5zdGFydGJvYXJkLnRpbGVzLnNob3dUaWxlcyB9KTtcbiAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5pc1Zpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5zdGFydGJvYXJkLnRpbGVzLnNob3dUaWxlcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygoPGFueT5PYmplY3QpLmlkKHRoaXMpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCg8YW55Pk9iamVjdCkuaWQodGhpcy5wb3J0YWxTZXJ2aWNlKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygoPGFueT5PYmplY3QpLmlkKHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYSkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coKDxhbnk+T2JqZWN0KS5pZCh0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuc3RhcnRib2FyZCkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coKDxhbnk+T2JqZWN0KS5pZCh0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuc3RhcnRib2FyZC50aWxlcykpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7IGE6IHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5pc1Zpc2libGUgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7IGE6IHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5zdGFydGJvYXJkLnRpbGVzLnNob3dUaWxlcyB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBXZSBuZWVkIHRvIGNhbGwgdGhpcyB3aGVuIEFyZWFCbGFkZXMgaXMgbm8gbG9uZ2VyIHVzZWQsIG90aGVyd2lzZSB0aGUgbGlzdGVuZXIgZG9lcyBub3QgZ2V0IHJlbW92ZWQuICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIC8vIFVucmVnaXN0ZXIgTGlzdGVuZXJzXG4gICAgICAgIHRoaXMuYWRkQmxhZGVMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmFyZWFOb3RpZmljYXRpb25TaG93TGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5hcmVhTm90aWZpY2F0aW9uSGlkZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgc2V0UG9ydGFsU2Nyb2xsQ3NzKCkge1xuICAgICAgICBpZiAodGhpcy5wb3J0YWxTY3JvbGwgIT0gbnVsbCAmJiB0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYU5vdGlmaWNhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBvcnRhbFNjcm9sbC5zdHlsZS5tYXJnaW5SaWdodCA9IHRoaXMucG9ydGFsU2VydmljZS5hcmVhTm90aWZpY2F0aW9uLndpZHRoQXJlYVVzZWQgKyAncHgnO1xuICAgICAgICB9XHJcbiAgICB9XG59XG5cbi8vIGFuZ3VsYXIubW9kdWxlKCdhbmd1bGFycG9ydGFsYXp1cmUnKS5zZXJ2aWNlKCdhcmVhQmxhZGVzJywgQXJlYUJsYWRlcyk7XG4iXX0=