var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserControlBase } from './user-control-base';
import { Blade } from './blade';
var AreaBlades = /** @class */ (function (_super) {
    __extends(AreaBlades, _super);
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    function AreaBlades(portalService) {
        var _this = _super.call(this, portalService) || this;
        _this.blades = new Array();
        _this.portalScroll = window.document.getElementById('apa-portal-scroll');
        _this.setupWindowResizeListener((/**
         * @return {?}
         */
        function () { _this.setPortalScrollCss(); }));
        _this.blades = [];
        return _this;
    }
    // #endregion
    // #region Methods
    // #endregion
    // #region Methods
    /**
     * @param {?} args
     * @return {?}
     */
    AreaBlades.prototype.raiseBladeOnActivateEvent = 
    // #endregion
    // #region Methods
    /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        /** @type {?} */
        var isEventRaised = false;
        this.blades.forEach((/**
         * @param {?} blade
         * @return {?}
         */
        function (blade) {
            if (blade.path.toLowerCase() === args.path.toLowerCase()) {
                // Raise event onActivate
                blade.onActivate();
                isEventRaised = true;
                return;
            }
        }));
    };
    /**
     * @param {?} args
     * @return {?}
     */
    AreaBlades.prototype.raiseAddBladeEvent = /**
     * @param {?} args
     * @return {?}
     */
    function (args) {
        /** @type {?} */
        var isBladeAlreadyShown = false;
        this.blades.forEach((/**
         * @param {?} blade
         * @return {?}
         */
        function (blade) {
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
    };
    /**
     * @param {?} path
     * @return {?}
     */
    AreaBlades.prototype.setFirstBlade = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        this.clearAll();
        this.hidePanorama();
        return this.addBlade(path);
    };
    /**
     * @param {?} path
     * @param {?=} senderPath
     * @return {?}
     */
    AreaBlades.prototype.addBlade = /**
     * @param {?} path
     * @param {?=} senderPath
     * @return {?}
     */
    function (path, senderPath) {
        var _this = this;
        if (senderPath === void 0) { senderPath = ''; }
        if (path == null) {
            return;
        }
        if (senderPath == null) {
            return;
        }
        /** @type {?} */
        var portalcontent = null;
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
        function (blade) {
            // we do not distinguish between lower and upper case path name
            if (blade.comparePaths(blade.path, path)) {
                throw new Error('[AreaBlades] path: \'' + path + '\' will not be added. It is already added.');
            }
        }));
        // #endregion
        // #region Show the blade
        /** @type {?} */
        var blade = new Blade(this.portalService, path, '');
        this.blades.push(blade);
        // #endregion
        // #region Position the blade
        if (this.portalService.$window !== undefined) {
            this.portalService.$window.setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var azureportalblades = _this.portalService.$window.document.getElementsByClassName('azureportalblade');
                /** @type {?} */
                var i = _this.blades.length - 1;
                // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
                //       So now if it is, the user has to scroll on its own.
                if (azureportalblades[i] !== undefined && ((/** @type {?} */ (azureportalblades[i]))).offsetLeft !== undefined) {
                    /** @type {?} */
                    var sl = ((/** @type {?} */ (azureportalblades[i]))).offsetLeft - 30;
                    portalcontent.scrollLeft = sl;
                }
            }), 250);
        }
        // #endregion
        return blade;
    };
    /**
     * @return {?}
     */
    AreaBlades.prototype.clearAll = /**
     * @return {?}
     */
    function () {
        this.blades.length = 0;
        this.showPanoramaIfNoBlades();
    };
    /**
     * @param {?} path
     * @return {?}
     */
    AreaBlades.prototype.clearPath = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var _this = this;
        // we do not distinguish between lower and upper case path name
        path = path.toLowerCase();
        /** @type {?} */
        var isremoved = this.blades.some((/**
         * @param {?} blade
         * @param {?} index
         * @return {?}
         */
        function (blade, index) {
            if (blade.comparePaths(blade.path, path)) {
                _this.blades.length = index;
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
    };
    /**
     * @param {?} level
     * @return {?}
     */
    AreaBlades.prototype.clearLevel = /**
     * @param {?} level
     * @return {?}
     */
    function (level) {
        if (this.blades.length < level) {
            throw new Error('[AreaBlades] level: \'' + level + '\' could not be cleard, since only \'' + this.blades.length + '\' available.');
        }
        if (level === 0) {
            level = 1;
        }
        this.blades.length = level - 1;
        this.showPanoramaIfNoBlades();
    };
    /**
     * @return {?}
     */
    AreaBlades.prototype.clearLastLevel = /**
     * @return {?}
     */
    function () {
        this.clearLevel(this.blades.length);
        this.showPanoramaIfNoBlades();
    };
    /**
     * @param {?} path
     * @return {?}
     */
    AreaBlades.prototype.clearChild = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        var _this = this;
        path = path.toLowerCase();
        if (path === '') {
            return;
        }
        /** @type {?} */
        var isremoved = this.blades.some((/**
         * @param {?} blade
         * @param {?} index
         * @return {?}
         */
        function (blade, index) {
            // we do not distinguish between lower and upper case path name
            if (blade.comparePaths(blade.path, path)) {
                _this.blades.length = index + 1;
                return true;
            }
        }));
        if (!isremoved) {
            throw new Error('[AreaBlades.clearChild] path: \'' + path + '\' could not be removed, since path not found in bladeUrls.');
        }
    };
    /**
     * @return {?}
     */
    AreaBlades.prototype.showPanoramaIfNoBlades = /**
     * @return {?}
     */
    function () {
        if (this.blades.length === 0) {
            if (this.portalService.panorama !== undefined) {
                {
                    this.portalService.panorama.isVisible = true;
                    this.portalService.panorama.startboard.tiles.showTiles = true;
                }
            }
        }
    };
    /**
     * @return {?}
     */
    AreaBlades.prototype.hidePanorama = /**
     * @return {?}
     */
    function () {
        if (this.portalService.panorama !== undefined) {
            this.portalService.panorama.isVisible = false;
            this.portalService.panorama.startboard.tiles.showTiles = false;
        }
    };
    /** We need to call this when AreaBlades is no longer used, otherwise the listener does not get removed. */
    /**
     * We need to call this when AreaBlades is no longer used, otherwise the listener does not get removed.
     * @return {?}
     */
    AreaBlades.prototype.close = /**
     * We need to call this when AreaBlades is no longer used, otherwise the listener does not get removed.
     * @return {?}
     */
    function () {
        // Unregister Listeners
        this.addBladeListener();
        this.areaNotificationShowListener();
        this.areaNotificationHideListener();
    };
    // #endregion
    // #endregion
    /**
     * @return {?}
     */
    AreaBlades.prototype.setPortalScrollCss = 
    // #endregion
    /**
     * @return {?}
     */
    function () {
        if (this.portalScroll != null && this.portalService.areaNotification != null) {
            this.portalScroll.style.marginRight = this.portalService.areaNotification.widthAreaUsed + 'px';
        }
    };
    return AreaBlades;
}(UserControlBase));
export { AreaBlades };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS1ibGFkZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vYXJlYS1ibGFkZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUdoQztJQUFnQyw4QkFBZTtJQUMzQyxzQkFBc0I7SUFFdEIsK0NBQStDO0lBQy9DLG9CQUFZLGFBQTRCO1FBQXhDLFlBQ0ksa0JBQU0sYUFBYSxDQUFDLFNBT3ZCO1FBWUQsWUFBTSxHQUFpQixJQUFJLEtBQUssRUFBUyxDQUFDO1FBakJ0QyxLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFeEUsS0FBSSxDQUFDLHlCQUF5Qjs7O1FBQUMsY0FBUSxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBRXJFLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDOztJQUNyQixDQUFDO0lBY0QsYUFBYTtJQUViLGtCQUFrQjs7Ozs7OztJQUVsQiw4Q0FBeUI7Ozs7Ozs7SUFBekIsVUFBMEIsSUFBd0I7O1lBQzFDLGFBQWEsR0FBWSxLQUFLO1FBRWxDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBSztZQUN0QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDdEQseUJBQXlCO2dCQUN6QixLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ25CLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLE9BQU87YUFDVjtRQUNMLENBQUMsRUFBQyxD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QVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUNsRTtJQUNMLENBQUM7SUFFRCwyR0FBMkc7Ozs7O0lBQzNHLDBCQUFLOzs7O0lBQUw7UUFDSSx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELGFBQWE7Ozs7O0lBRWIsdUNBQWtCOzs7OztJQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLEVBQUU7WUFDMUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUNsRztJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUEzT0QsQ0FBZ0MsZUFBZSxHQTJPOUM7Ozs7Ozs7SUF6Tkcsa0NBQWtDOzs7OztJQUVsQyxzQ0FBcUM7Ozs7O0lBQ3JDLGtEQUFpRDs7Ozs7SUFDakQsa0RBQWlEOztJQUVqRCw0QkFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cbmltcG9ydCB7IFBvcnRhbFNlcnZpY2UgfSBmcm9tICcuL3BvcnRhbC1zZXJ2aWNlJztcbmltcG9ydCB7IFRpbGVzIH0gZnJvbSAnLi90aWxlcyc7XG5pbXBvcnQgeyBVc2VyQ29udHJvbEJhc2UgfSBmcm9tICcuL3VzZXItY29udHJvbC1iYXNlJztcbmltcG9ydCB7IEJsYWRlIH0gZnJvbSAnLi9ibGFkZSc7XG5pbXBvcnQgeyBJQWRkQmxhZGVFdmVudEFyZ3MgfSBmcm9tICcuL2lhZGQtYmxhZGUtZXZlbnQtYXJncyc7XG5cbmV4cG9ydCBjbGFzcyBBcmVhQmxhZGVzIGV4dGVuZHMgVXNlckNvbnRyb2xCYXNlIHtcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yXG5cbiAgICAvL3N0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnLCAncG9ydGFsU2VydmljZSddO1xuICAgIGNvbnN0cnVjdG9yKHBvcnRhbFNlcnZpY2U6IFBvcnRhbFNlcnZpY2UpIHsgLy8gJHNjb3BlOiBhbnksXG4gICAgICAgIHN1cGVyKHBvcnRhbFNlcnZpY2UpOyAvLyAkc2NvcGUsXG5cbiAgICAgICAgdGhpcy5wb3J0YWxTY3JvbGwgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwYS1wb3J0YWwtc2Nyb2xsJyk7XG5cbiAgICAgICAgdGhpcy5zZXR1cFdpbmRvd1Jlc2l6ZUxpc3RlbmVyKCgpID0+IHsgdGhpcy5zZXRQb3J0YWxTY3JvbGxDc3MoKTsgfSk7XG5cbiAgICAgICAgdGhpcy5ibGFkZXMgPSBbXTtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcblxuICAgIHByaXZhdGUgcG9ydGFsU2Nyb2xsOiBIVE1MRWxlbWVudDtcblxuICAgIHByaXZhdGUgYWRkQmxhZGVMaXN0ZW5lcjogKCkgPT4gdm9pZDtcbiAgICBwcml2YXRlIGFyZWFOb3RpZmljYXRpb25TaG93TGlzdGVuZXI6ICgpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBhcmVhTm90aWZpY2F0aW9uSGlkZUxpc3RlbmVyOiAoKSA9PiB2b2lkO1xuXG4gICAgYmxhZGVzOiBBcnJheTxCbGFkZT4gPSBuZXcgQXJyYXk8QmxhZGU+KCk7XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIE1ldGhvZHNcblxuICAgIHJhaXNlQmxhZGVPbkFjdGl2YXRlRXZlbnQoYXJnczogSUFkZEJsYWRlRXZlbnRBcmdzKSB7XG4gICAgICAgIGxldCBpc0V2ZW50UmFpc2VkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5ibGFkZXMuZm9yRWFjaCgoYmxhZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChibGFkZS5wYXRoLnRvTG93ZXJDYXNlKCkgPT09IGFyZ3MucGF0aC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gUmFpc2UgZXZlbnQgb25BY3RpdmF0ZVxuICAgICAgICAgICAgICAgIGJsYWRlLm9uQWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICBpc0V2ZW50UmFpc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJhaXNlQWRkQmxhZGVFdmVudChhcmdzOiBJQWRkQmxhZGVFdmVudEFyZ3MpIHtcbiAgICAgICAgbGV0IGlzQmxhZGVBbHJlYWR5U2hvd246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ibGFkZXMuZm9yRWFjaCgoYmxhZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChibGFkZS5wYXRoLnRvTG93ZXJDYXNlKCkgPT09IGFyZ3MucGF0aC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gQmxhZGUgaXMgYWxyZWFkeSBzaG93biwganVzdCBhY3RpdmF0ZSBpdCBhZ2FpblxuICAgICAgICAgICAgICAgIGJsYWRlLm9uQWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICBpc0JsYWRlQWxyZWFkeVNob3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghaXNCbGFkZUFscmVhZHlTaG93bikge1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBibGFkZSwgc2luY2UgaXQgaXMgbm90IHlldCBzaG93blxuICAgICAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFCbGFkZXMuYWRkQmxhZGUoYXJncy5wYXRoLCBhcmdzLnBhdGhTZW5kZXIpO1xuICAgICAgICAgICAgLy90aGlzLnBvcnRhbFNlcnZpY2UuJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdBcmVhQmxhZGVzLkFkZEJsYWRlJywgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRGaXJzdEJsYWRlKHBhdGg6IHN0cmluZyk6IEJsYWRlIHwgdm9pZCB7XG4gICAgICAgIHRoaXMuY2xlYXJBbGwoKTtcbiAgICAgICAgdGhpcy5oaWRlUGFub3JhbWEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQmxhZGUocGF0aCk7XG4gICAgfVxuXG4gICAgYWRkQmxhZGUocGF0aDogc3RyaW5nLCBzZW5kZXJQYXRoOiBzdHJpbmcgPSAnJyk6IEJsYWRlIHwgdm9pZCB7XG4gICAgICAgIGlmIChwYXRoID09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgICAgIGlmIChzZW5kZXJQYXRoID09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgICAgIGxldCBwb3J0YWxjb250ZW50OiBIVE1MRWxlbWVudCA9IG51bGw7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRlZCBjb2RlIGF0IDogQXJlYUJsYWRlcy5hZGRCbGFkZSAoYW5hbHl0aWNzKScpO1xuICAgICAgICAvLyB0aGlzLnBvcnRhbFNlcnZpY2UuJGFuYWx5dGljcy5wYWdlVHJhY2socGF0aC50b0xvd2VyQ2FzZSgpKTtcblxuICAgICAgICBwYXRoID0gcGF0aC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBzZW5kZXJQYXRoID0gc2VuZGVyUGF0aC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vICNyZWdpb24gVmVyaWZ5XG5cbiAgICAgICAgaWYgKHBhdGggPT09IHVuZGVmaW5lZCB8fCBwYXRoID09PSAnJykgeyByZXR1cm47IH1cblxuICAgICAgICBpZiAodGhpcy5wb3J0YWxTZXJ2aWNlLiR3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucG9ydGFsU2VydmljZS4kd2luZG93LmRvY3VtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tBcmVhQmxhZGVzXSBcXCd0aGlzLiR3aW5kb3cuZG9jdW1lbnRcXCcgdW5kZWZpbmVkLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwb3J0YWxjb250ZW50ID0gdGhpcy5wb3J0YWxTZXJ2aWNlLiR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwYS1wb3J0YWwtc2Nyb2xsJyk7XG4gICAgICAgICAgICBpZiAocG9ydGFsY29udGVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW0FyZWFCbGFkZXNdIEhUTUwgZWxlbWVudCB3aXRoIElEIFthcGEtcG9ydGFsLXNjcm9sbF0gbm90IGZvdW5kLiBNYXliZSBpdCBpcyB0byBlYXJseSB0byBjYWxsIGZ1bmN0aW9uIFxcJ0JsYWRlQXJlYS5hZGRCbGFkZVxcJy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vICNlbmRyZWdpb25cblxuICAgICAgICAvLyAjcmVnaW9uIENsZWFyIGFsbCBjaGlsZHJlbiBvZiB0aGUgcGFyZW50IHBhdGhcblxuICAgICAgICB0aGlzLmNsZWFyQ2hpbGQoc2VuZGVyUGF0aCk7XG5cbiAgICAgICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vICNyZWdpb24gTWFrZSBzdXJlIHRoZSBibGFkZSBpcyBub3QgeWV0IHNob3dcblxuICAgICAgICB0aGlzLmJsYWRlcy5mb3JFYWNoKChibGFkZSkgPT4ge1xuICAgICAgICAgICAgLy8gd2UgZG8gbm90IGRpc3Rpbmd1aXNoIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGNhc2UgcGF0aCBuYW1lXG4gICAgICAgICAgICBpZiAoYmxhZGUuY29tcGFyZVBhdGhzKGJsYWRlLnBhdGgsIHBhdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQXJlYUJsYWRlc10gcGF0aDogXFwnJyArIHBhdGggKyAnXFwnIHdpbGwgbm90IGJlIGFkZGVkLiBJdCBpcyBhbHJlYWR5IGFkZGVkLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgICAgLy8gI3JlZ2lvbiBTaG93IHRoZSBibGFkZVxuXG4gICAgICAgIGxldCBibGFkZSA9IG5ldyBCbGFkZSh0aGlzLnBvcnRhbFNlcnZpY2UsIHBhdGgsICcnKTsgLy8gdGhpcy4kc2NvcGUsXG4gICAgICAgIHRoaXMuYmxhZGVzLnB1c2goYmxhZGUpO1xuXG4gICAgICAgIC8vICNlbmRyZWdpb25cblxuICAgICAgICAvLyAjcmVnaW9uIFBvc2l0aW9uIHRoZSBibGFkZVxuXG4gICAgICAgIGlmICh0aGlzLnBvcnRhbFNlcnZpY2UuJHdpbmRvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuJHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYXp1cmVwb3J0YWxibGFkZXMgPSB0aGlzLnBvcnRhbFNlcnZpY2UuJHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhenVyZXBvcnRhbGJsYWRlJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaSA9IHRoaXMuYmxhZGVzLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgICAgICAgICAvLyBIQUNLOiBTb21ldGltZSBhenVyZXBvcnRhbGJsYWRlc1tpXS5vZmZzZXRMZWZ0IGlzIHVuZGVmaW5lZC5cbiAgICAgICAgICAgICAgICAvLyAgICAgICBTbyBub3cgaWYgaXQgaXMsIHRoZSB1c2VyIGhhcyB0byBzY3JvbGwgb24gaXRzIG93bi5cbiAgICAgICAgICAgICAgICBpZiAoYXp1cmVwb3J0YWxibGFkZXNbaV0gIT09IHVuZGVmaW5lZCAmJiAoPGFueT5henVyZXBvcnRhbGJsYWRlc1tpXSkub2Zmc2V0TGVmdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzbCA9ICg8YW55PmF6dXJlcG9ydGFsYmxhZGVzW2ldKS5vZmZzZXRMZWZ0IC0gMzA7XG4gICAgICAgICAgICAgICAgICAgIHBvcnRhbGNvbnRlbnQuc2Nyb2xsTGVmdCA9IHNsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDI1MCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgICAgcmV0dXJuIGJsYWRlO1xuICAgIH1cblxuICAgIGNsZWFyQWxsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJsYWRlcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLnNob3dQYW5vcmFtYUlmTm9CbGFkZXMoKTtcbiAgICB9XG5cbiAgICBjbGVhclBhdGgocGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIC8vIHdlIGRvIG5vdCBkaXN0aW5ndWlzaCBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBjYXNlIHBhdGggbmFtZVxuICAgICAgICBwYXRoID0gcGF0aC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGxldCBpc3JlbW92ZWQgPSB0aGlzLmJsYWRlcy5zb21lKChibGFkZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChibGFkZS5jb21wYXJlUGF0aHMoYmxhZGUucGF0aCwgcGF0aCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJsYWRlcy5sZW5ndGggPSBpbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFpc3JlbW92ZWQgJiYgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFOb3RpZmljYXRpb24ucGF0aCA9PT0gcGF0aCkge1xuICAgICAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFOb3RpZmljYXRpb24uaGlkZSgpO1xuICAgICAgICAgICAgaXNyZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNyZW1vdmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tBcmVhQmxhZGVzLmNsZWFyUGF0aF0gcGF0aDogXFwnJyArIHBhdGggKyAnXFwnIGNvdWxkIG5vdCBiZSByZW1vdmVkLCBzaW5jZSBwYXRoIG5vdCBmb3VuZCBpbiBibGFkZVVybHMuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dQYW5vcmFtYUlmTm9CbGFkZXMoKTtcbiAgICB9XG5cbiAgICBjbGVhckxldmVsKGxldmVsOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuYmxhZGVzLmxlbmd0aCA8IGxldmVsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tBcmVhQmxhZGVzXSBsZXZlbDogXFwnJyArIGxldmVsICsgJ1xcJyBjb3VsZCBub3QgYmUgY2xlYXJkLCBzaW5jZSBvbmx5IFxcJycgKyB0aGlzLmJsYWRlcy5sZW5ndGggKyAnXFwnIGF2YWlsYWJsZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZXZlbCA9PT0gMCkgeyBsZXZlbCA9IDE7IH1cbiAgICAgICAgdGhpcy5ibGFkZXMubGVuZ3RoID0gbGV2ZWwgLSAxO1xuICAgICAgICB0aGlzLnNob3dQYW5vcmFtYUlmTm9CbGFkZXMoKTtcbiAgICB9XG5cbiAgICBjbGVhckxhc3RMZXZlbCgpIHtcbiAgICAgICAgdGhpcy5jbGVhckxldmVsKHRoaXMuYmxhZGVzLmxlbmd0aCk7XG4gICAgICAgIHRoaXMuc2hvd1Bhbm9yYW1hSWZOb0JsYWRlcygpO1xuICAgIH1cblxuICAgIGNsZWFyQ2hpbGQocGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHBhdGggPSBwYXRoLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHBhdGggPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGlzcmVtb3ZlZCA9IHRoaXMuYmxhZGVzLnNvbWUoKGJsYWRlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gd2UgZG8gbm90IGRpc3Rpbmd1aXNoIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGNhc2UgcGF0aCBuYW1lXG4gICAgICAgICAgICBpZiAoYmxhZGUuY29tcGFyZVBhdGhzKGJsYWRlLnBhdGgsIHBhdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ibGFkZXMubGVuZ3RoID0gaW5kZXggKyAxO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFpc3JlbW92ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW0FyZWFCbGFkZXMuY2xlYXJDaGlsZF0gcGF0aDogXFwnJyArIHBhdGggKyAnXFwnIGNvdWxkIG5vdCBiZSByZW1vdmVkLCBzaW5jZSBwYXRoIG5vdCBmb3VuZCBpbiBibGFkZVVybHMuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93UGFub3JhbWFJZk5vQmxhZGVzKCkge1xuICAgICAgICBpZiAodGhpcy5ibGFkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuc3RhcnRib2FyZC50aWxlcy5zaG93VGlsZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhpZGVQYW5vcmFtYSgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuc3RhcnRib2FyZC50aWxlcy5zaG93VGlsZXMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBXZSBuZWVkIHRvIGNhbGwgdGhpcyB3aGVuIEFyZWFCbGFkZXMgaXMgbm8gbG9uZ2VyIHVzZWQsIG90aGVyd2lzZSB0aGUgbGlzdGVuZXIgZG9lcyBub3QgZ2V0IHJlbW92ZWQuICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIC8vIFVucmVnaXN0ZXIgTGlzdGVuZXJzXG4gICAgICAgIHRoaXMuYWRkQmxhZGVMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmFyZWFOb3RpZmljYXRpb25TaG93TGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5hcmVhTm90aWZpY2F0aW9uSGlkZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgc2V0UG9ydGFsU2Nyb2xsQ3NzKCkge1xuICAgICAgICBpZiAodGhpcy5wb3J0YWxTY3JvbGwgIT0gbnVsbCAmJiB0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYU5vdGlmaWNhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBvcnRhbFNjcm9sbC5zdHlsZS5tYXJnaW5SaWdodCA9IHRoaXMucG9ydGFsU2VydmljZS5hcmVhTm90aWZpY2F0aW9uLndpZHRoQXJlYVVzZWQgKyAncHgnO1xuICAgICAgICB9XHJcbiAgICB9XG59XG5cbi8vIGFuZ3VsYXIubW9kdWxlKCdhbmd1bGFycG9ydGFsYXp1cmUnKS5zZXJ2aWNlKCdhcmVhQmxhZGVzJywgQXJlYUJsYWRlcyk7XG4iXX0=