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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    };
    /**
     * @return {?}
     */
    AreaBlades.prototype.hidePanorama = /**
     * @return {?}
     */
    function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS1ibGFkZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vYXJlYS1ibGFkZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUdoQztJQUFnQyw4QkFBZTtJQUMzQyxzQkFBc0I7SUFFdEIsK0NBQStDO0lBQy9DLG9CQUFZLGFBQTRCO1FBQXhDLFlBQ0ksa0JBQU0sYUFBYSxDQUFDLFNBT3ZCO1FBWUQsWUFBTSxHQUFpQixJQUFJLEtBQUssRUFBUyxDQUFDO1FBakJ0QyxLQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFeEUsS0FBSSxDQUFDLHlCQUF5Qjs7O1FBQUMsY0FBUSxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBRXJFLEtBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDOztJQUNyQixDQUFDO0lBY0QsYUFBYTtJQUViLGtCQUFrQjs7Ozs7OztJQUVsQiw4Q0FBeUI7Ozs7Ozs7SUFBekIsVUFBMEIsSUFBd0I7O1lBQzFDLGFBQWEsR0FBWSxLQUFLO1FBRWxDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsS0FBSztZQUN0QixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDdEQseUJBQXlCO2dCQUN6QixLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ25CLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLE9BQU87YUFDVjtRQUNMLENBQUMsRUFBQyxD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LENBQUMsZ0JBQWdCLElBQUksSUFBSSxFQUFFO1lBQzFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDbEc7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBNVBELENBQWdDLGVBQWUsR0E0UDlDOzs7Ozs7O0lBMU9HLGtDQUFrQzs7Ozs7SUFFbEMsc0NBQXFDOzs7OztJQUNyQyxrREFBaUQ7Ozs7O0lBQ2pELGtEQUFpRDs7SUFFakQsNEJBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXG5pbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi9wb3J0YWwtc2VydmljZSc7XG5pbXBvcnQgeyBUaWxlcyB9IGZyb20gJy4vdGlsZXMnO1xuaW1wb3J0IHsgVXNlckNvbnRyb2xCYXNlIH0gZnJvbSAnLi91c2VyLWNvbnRyb2wtYmFzZSc7XG5pbXBvcnQgeyBCbGFkZSB9IGZyb20gJy4vYmxhZGUnO1xuaW1wb3J0IHsgSUFkZEJsYWRlRXZlbnRBcmdzIH0gZnJvbSAnLi9pYWRkLWJsYWRlLWV2ZW50LWFyZ3MnO1xuXG5leHBvcnQgY2xhc3MgQXJlYUJsYWRlcyBleHRlbmRzIFVzZXJDb250cm9sQmFzZSB7XG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvclxuXG4gICAgLy9zdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJywgJ3BvcnRhbFNlcnZpY2UnXTtcbiAgICBjb25zdHJ1Y3Rvcihwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlKSB7IC8vICRzY29wZTogYW55LFxuICAgICAgICBzdXBlcihwb3J0YWxTZXJ2aWNlKTsgLy8gJHNjb3BlLFxuXG4gICAgICAgIHRoaXMucG9ydGFsU2Nyb2xsID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcGEtcG9ydGFsLXNjcm9sbCcpO1xuXG4gICAgICAgIHRoaXMuc2V0dXBXaW5kb3dSZXNpemVMaXN0ZW5lcigoKSA9PiB7IHRoaXMuc2V0UG9ydGFsU2Nyb2xsQ3NzKCk7IH0pO1xuXG4gICAgICAgIHRoaXMuYmxhZGVzID0gW107XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXG5cbiAgICBwcml2YXRlIHBvcnRhbFNjcm9sbDogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGFkZEJsYWRlTGlzdGVuZXI6ICgpID0+IHZvaWQ7XG4gICAgcHJpdmF0ZSBhcmVhTm90aWZpY2F0aW9uU2hvd0xpc3RlbmVyOiAoKSA9PiB2b2lkO1xuICAgIHByaXZhdGUgYXJlYU5vdGlmaWNhdGlvbkhpZGVMaXN0ZW5lcjogKCkgPT4gdm9pZDtcblxuICAgIGJsYWRlczogQXJyYXk8QmxhZGU+ID0gbmV3IEFycmF5PEJsYWRlPigpO1xuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBNZXRob2RzXG5cbiAgICByYWlzZUJsYWRlT25BY3RpdmF0ZUV2ZW50KGFyZ3M6IElBZGRCbGFkZUV2ZW50QXJncykge1xuICAgICAgICBsZXQgaXNFdmVudFJhaXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYmxhZGVzLmZvckVhY2goKGJsYWRlKSA9PiB7XG4gICAgICAgICAgICBpZiAoYmxhZGUucGF0aC50b0xvd2VyQ2FzZSgpID09PSBhcmdzLnBhdGgudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIC8vIFJhaXNlIGV2ZW50IG9uQWN0aXZhdGVcbiAgICAgICAgICAgICAgICBibGFkZS5vbkFjdGl2YXRlKCk7XG4gICAgICAgICAgICAgICAgaXNFdmVudFJhaXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByYWlzZUFkZEJsYWRlRXZlbnQoYXJnczogSUFkZEJsYWRlRXZlbnRBcmdzKSB7XG4gICAgICAgIGxldCBpc0JsYWRlQWxyZWFkeVNob3duOiBib29sZWFuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYmxhZGVzLmZvckVhY2goKGJsYWRlKSA9PiB7XG4gICAgICAgICAgICBpZiAoYmxhZGUucGF0aC50b0xvd2VyQ2FzZSgpID09PSBhcmdzLnBhdGgudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIC8vIEJsYWRlIGlzIGFscmVhZHkgc2hvd24sIGp1c3QgYWN0aXZhdGUgaXQgYWdhaW5cbiAgICAgICAgICAgICAgICBibGFkZS5vbkFjdGl2YXRlKCk7XG4gICAgICAgICAgICAgICAgaXNCbGFkZUFscmVhZHlTaG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWlzQmxhZGVBbHJlYWR5U2hvd24pIHtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgYmxhZGUsIHNpbmNlIGl0IGlzIG5vdCB5ZXQgc2hvd25cbiAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hcmVhQmxhZGVzLmFkZEJsYWRlKGFyZ3MucGF0aCwgYXJncy5wYXRoU2VuZGVyKTtcbiAgICAgICAgICAgIC8vdGhpcy5wb3J0YWxTZXJ2aWNlLiRyb290U2NvcGUuJGJyb2FkY2FzdCgnQXJlYUJsYWRlcy5BZGRCbGFkZScsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Rmlyc3RCbGFkZShwYXRoOiBzdHJpbmcpOiBCbGFkZSB8IHZvaWQge1xuICAgICAgICB0aGlzLmNsZWFyQWxsKCk7XG4gICAgICAgIHRoaXMuaGlkZVBhbm9yYW1hKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEJsYWRlKHBhdGgpO1xuICAgIH1cblxuICAgIGFkZEJsYWRlKHBhdGg6IHN0cmluZywgc2VuZGVyUGF0aDogc3RyaW5nID0gJycpOiBCbGFkZSB8IHZvaWQge1xuICAgICAgICBpZiAocGF0aCA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgICBpZiAoc2VuZGVyUGF0aCA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgICBsZXQgcG9ydGFsY29udGVudDogSFRNTEVsZW1lbnQgPSBudWxsO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50ZWQgY29kZSBhdCA6IEFyZWFCbGFkZXMuYWRkQmxhZGUgKGFuYWx5dGljcyknKTtcbiAgICAgICAgLy8gdGhpcy5wb3J0YWxTZXJ2aWNlLiRhbmFseXRpY3MucGFnZVRyYWNrKHBhdGgudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAgICAgcGF0aCA9IHBhdGgudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgc2VuZGVyUGF0aCA9IHNlbmRlclBhdGgudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvLyAjcmVnaW9uIFZlcmlmeVxuXG4gICAgICAgIGlmIChwYXRoID09PSB1bmRlZmluZWQgfHwgcGF0aCA9PT0gJycpIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9ydGFsU2VydmljZS4kd2luZG93ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvcnRhbFNlcnZpY2UuJHdpbmRvdy5kb2N1bWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQXJlYUJsYWRlc10gXFwndGhpcy4kd2luZG93LmRvY3VtZW50XFwnIHVuZGVmaW5lZC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9ydGFsY29udGVudCA9IHRoaXMucG9ydGFsU2VydmljZS4kd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcGEtcG9ydGFsLXNjcm9sbCcpO1xuICAgICAgICAgICAgaWYgKHBvcnRhbGNvbnRlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tBcmVhQmxhZGVzXSBIVE1MIGVsZW1lbnQgd2l0aCBJRCBbYXBhLXBvcnRhbC1zY3JvbGxdIG5vdCBmb3VuZC4gTWF5YmUgaXQgaXMgdG8gZWFybHkgdG8gY2FsbCBmdW5jdGlvbiBcXCdCbGFkZUFyZWEuYWRkQmxhZGVcXCcuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgICAgLy8gI3JlZ2lvbiBDbGVhciBhbGwgY2hpbGRyZW4gb2YgdGhlIHBhcmVudCBwYXRoXG5cbiAgICAgICAgdGhpcy5jbGVhckNoaWxkKHNlbmRlclBhdGgpO1xuXG4gICAgICAgIC8vICNlbmRyZWdpb25cblxuICAgICAgICAvLyAjcmVnaW9uIE1ha2Ugc3VyZSB0aGUgYmxhZGUgaXMgbm90IHlldCBzaG93XG5cbiAgICAgICAgdGhpcy5ibGFkZXMuZm9yRWFjaCgoYmxhZGUpID0+IHtcbiAgICAgICAgICAgIC8vIHdlIGRvIG5vdCBkaXN0aW5ndWlzaCBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBjYXNlIHBhdGggbmFtZVxuICAgICAgICAgICAgaWYgKGJsYWRlLmNvbXBhcmVQYXRocyhibGFkZS5wYXRoLCBwYXRoKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignW0FyZWFCbGFkZXNdIHBhdGg6IFxcJycgKyBwYXRoICsgJ1xcJyB3aWxsIG5vdCBiZSBhZGRlZC4gSXQgaXMgYWxyZWFkeSBhZGRlZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgICAgIC8vICNyZWdpb24gU2hvdyB0aGUgYmxhZGVcblxuICAgICAgICBsZXQgYmxhZGUgPSBuZXcgQmxhZGUodGhpcy5wb3J0YWxTZXJ2aWNlLCBwYXRoLCAnJyk7IC8vIHRoaXMuJHNjb3BlLFxuICAgICAgICB0aGlzLmJsYWRlcy5wdXNoKGJsYWRlKTtcblxuICAgICAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAgICAgLy8gI3JlZ2lvbiBQb3NpdGlvbiB0aGUgYmxhZGVcblxuICAgICAgICBpZiAodGhpcy5wb3J0YWxTZXJ2aWNlLiR3aW5kb3cgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLiR3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGF6dXJlcG9ydGFsYmxhZGVzID0gdGhpcy5wb3J0YWxTZXJ2aWNlLiR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYXp1cmVwb3J0YWxibGFkZScpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGkgPSB0aGlzLmJsYWRlcy5sZW5ndGggLSAxO1xuXG4gICAgICAgICAgICAgICAgLy8gSEFDSzogU29tZXRpbWUgYXp1cmVwb3J0YWxibGFkZXNbaV0ub2Zmc2V0TGVmdCBpcyB1bmRlZmluZWQuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgU28gbm93IGlmIGl0IGlzLCB0aGUgdXNlciBoYXMgdG8gc2Nyb2xsIG9uIGl0cyBvd24uXG4gICAgICAgICAgICAgICAgaWYgKGF6dXJlcG9ydGFsYmxhZGVzW2ldICE9PSB1bmRlZmluZWQgJiYgKDxhbnk+YXp1cmVwb3J0YWxibGFkZXNbaV0pLm9mZnNldExlZnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2wgPSAoPGFueT5henVyZXBvcnRhbGJsYWRlc1tpXSkub2Zmc2V0TGVmdCAtIDMwO1xuICAgICAgICAgICAgICAgICAgICBwb3J0YWxjb250ZW50LnNjcm9sbExlZnQgPSBzbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyNTApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgICAgIHJldHVybiBibGFkZTtcbiAgICB9XG5cbiAgICBjbGVhckFsbCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ibGFkZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5zaG93UGFub3JhbWFJZk5vQmxhZGVzKCk7XG4gICAgfVxuXG4gICAgY2xlYXJQYXRoKHBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAvLyB3ZSBkbyBub3QgZGlzdGluZ3Vpc2ggYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgY2FzZSBwYXRoIG5hbWVcbiAgICAgICAgcGF0aCA9IHBhdGgudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBsZXQgaXNyZW1vdmVkID0gdGhpcy5ibGFkZXMuc29tZSgoYmxhZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoYmxhZGUuY29tcGFyZVBhdGhzKGJsYWRlLnBhdGgsIHBhdGgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ibGFkZXMubGVuZ3RoID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghaXNyZW1vdmVkICYmIHRoaXMucG9ydGFsU2VydmljZS5hcmVhTm90aWZpY2F0aW9uLnBhdGggPT09IHBhdGgpIHtcbiAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hcmVhTm90aWZpY2F0aW9uLmhpZGUoKTtcbiAgICAgICAgICAgIGlzcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzcmVtb3ZlZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQXJlYUJsYWRlcy5jbGVhclBhdGhdIHBhdGg6IFxcJycgKyBwYXRoICsgJ1xcJyBjb3VsZCBub3QgYmUgcmVtb3ZlZCwgc2luY2UgcGF0aCBub3QgZm91bmQgaW4gYmxhZGVVcmxzLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93UGFub3JhbWFJZk5vQmxhZGVzKCk7XG4gICAgfVxuXG4gICAgY2xlYXJMZXZlbChsZXZlbDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmJsYWRlcy5sZW5ndGggPCBsZXZlbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQXJlYUJsYWRlc10gbGV2ZWw6IFxcJycgKyBsZXZlbCArICdcXCcgY291bGQgbm90IGJlIGNsZWFyZCwgc2luY2Ugb25seSBcXCcnICsgdGhpcy5ibGFkZXMubGVuZ3RoICsgJ1xcJyBhdmFpbGFibGUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGV2ZWwgPT09IDApIHsgbGV2ZWwgPSAxOyB9XG4gICAgICAgIHRoaXMuYmxhZGVzLmxlbmd0aCA9IGxldmVsIC0gMTtcbiAgICAgICAgdGhpcy5zaG93UGFub3JhbWFJZk5vQmxhZGVzKCk7XG4gICAgfVxuXG4gICAgY2xlYXJMYXN0TGV2ZWwoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJMZXZlbCh0aGlzLmJsYWRlcy5sZW5ndGgpO1xuICAgICAgICB0aGlzLnNob3dQYW5vcmFtYUlmTm9CbGFkZXMoKTtcbiAgICB9XG5cbiAgICBjbGVhckNoaWxkKHBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBwYXRoID0gcGF0aC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChwYXRoID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpc3JlbW92ZWQgPSB0aGlzLmJsYWRlcy5zb21lKChibGFkZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIC8vIHdlIGRvIG5vdCBkaXN0aW5ndWlzaCBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBjYXNlIHBhdGggbmFtZVxuICAgICAgICAgICAgaWYgKGJsYWRlLmNvbXBhcmVQYXRocyhibGFkZS5wYXRoLCBwYXRoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmxhZGVzLmxlbmd0aCA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNyZW1vdmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tBcmVhQmxhZGVzLmNsZWFyQ2hpbGRdIHBhdGg6IFxcJycgKyBwYXRoICsgJ1xcJyBjb3VsZCBub3QgYmUgcmVtb3ZlZCwgc2luY2UgcGF0aCBub3QgZm91bmQgaW4gYmxhZGVVcmxzLicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd1Bhbm9yYW1hSWZOb0JsYWRlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuYmxhZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvd1Bhbm9yYW1hSWZOb0JsYWRlcycpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IGE6IHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5pc1Zpc2libGUgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgYTogdGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hLnN0YXJ0Ym9hcmQudGlsZXMuc2hvd1RpbGVzIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hLnN0YXJ0Ym9hcmQudGlsZXMuc2hvd1RpbGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeyBhOiB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuaXNWaXNpYmxlIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh7IGE6IHRoaXMucG9ydGFsU2VydmljZS5wYW5vcmFtYS5zdGFydGJvYXJkLnRpbGVzLnNob3dUaWxlcyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoaWRlUGFub3JhbWEoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hpZGVQYW5vcmFtYScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coeyBhOiB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuaXNWaXNpYmxlIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coeyBhOiB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuc3RhcnRib2FyZC50aWxlcy5zaG93VGlsZXMgfSk7XG4gICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuc3RhcnRib2FyZC50aWxlcy5zaG93VGlsZXMgPSBmYWxzZTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coKDxhbnk+T2JqZWN0KS5pZCh0aGlzKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygoPGFueT5PYmplY3QpLmlkKHRoaXMucG9ydGFsU2VydmljZSkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coKDxhbnk+T2JqZWN0KS5pZCh0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCg8YW55Pk9iamVjdCkuaWQodGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hLnN0YXJ0Ym9hcmQpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCg8YW55Pk9iamVjdCkuaWQodGhpcy5wb3J0YWxTZXJ2aWNlLnBhbm9yYW1hLnN0YXJ0Ym9hcmQudGlsZXMpKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coeyBhOiB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuaXNWaXNpYmxlIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coeyBhOiB0aGlzLnBvcnRhbFNlcnZpY2UucGFub3JhbWEuc3RhcnRib2FyZC50aWxlcy5zaG93VGlsZXMgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogV2UgbmVlZCB0byBjYWxsIHRoaXMgd2hlbiBBcmVhQmxhZGVzIGlzIG5vIGxvbmdlciB1c2VkLCBvdGhlcndpc2UgdGhlIGxpc3RlbmVyIGRvZXMgbm90IGdldCByZW1vdmVkLiAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICAvLyBVbnJlZ2lzdGVyIExpc3RlbmVyc1xuICAgICAgICB0aGlzLmFkZEJsYWRlTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5hcmVhTm90aWZpY2F0aW9uU2hvd0xpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuYXJlYU5vdGlmaWNhdGlvbkhpZGVMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIHNldFBvcnRhbFNjcm9sbENzcygpIHtcbiAgICAgICAgaWYgKHRoaXMucG9ydGFsU2Nyb2xsICE9IG51bGwgJiYgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFOb3RpZmljYXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wb3J0YWxTY3JvbGwuc3R5bGUubWFyZ2luUmlnaHQgPSB0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYU5vdGlmaWNhdGlvbi53aWR0aEFyZWFVc2VkICsgJ3B4JztcbiAgICAgICAgfVxyXG4gICAgfVxufVxuXG4vLyBhbmd1bGFyLm1vZHVsZSgnYW5ndWxhcnBvcnRhbGF6dXJlJykuc2VydmljZSgnYXJlYUJsYWRlcycsIEFyZWFCbGFkZXMpO1xuIl19