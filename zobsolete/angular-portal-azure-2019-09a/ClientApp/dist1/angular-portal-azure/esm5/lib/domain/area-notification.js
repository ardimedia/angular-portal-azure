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
var AreaNotification = /** @class */ (function (_super) {
    __extends(AreaNotification, _super);
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    function AreaNotification(portalService) {
        var _this = _super.call(this, portalService) || this;
        // #endregion
        // #region Properties
        _this.path = '';
        _this.widthAreaUsed = 0;
        _this._width = 250;
        _this._backgroundColor = '#32383f';
        _this.areaNotification = window.document.getElementById('apa-notification-area');
        _this.hide();
        _this.setupWindowResizeListener((/**
         * @return {?}
         */
        function () { _this.calcualteCssStyles(); }));
        return _this;
    }
    Object.defineProperty(AreaNotification.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            return this._width;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._width = value;
            this.calcualteCssStyles();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaNotification.prototype, "backgroundColor", {
        get: /**
         * @return {?}
         */
        function () {
            return this._backgroundColor;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._backgroundColor = value;
            this.calcualteCssStyles();
        },
        enumerable: true,
        configurable: true
    });
    // #endregion
    // #region Methods
    // #endregion
    // #region Methods
    /**
     * @return {?}
     */
    AreaNotification.prototype.hide = 
    // #endregion
    // #region Methods
    /**
     * @return {?}
     */
    function () {
        // Do not hide on false
        if (!this.onHide) {
            return;
        }
        this.path = '';
        this.widthAreaUsed = 0;
        if (this.areaNotification != null) {
            this.areaNotification.style.display = 'none';
        }
        ;
        this.portalService.areaBlades.setPortalScrollCss();
        //this.portalService.$rootScope.$broadcast('AreaNotification.Hide');
    };
    /**
     * @param {?=} width
     * @return {?}
     */
    AreaNotification.prototype.show = /**
     * @param {?=} width
     * @return {?}
     */
    function (width) {
        if (width === void 0) { width = 250; }
        this.onShow();
        this.width = width;
        this.widthAreaUsed = 1; // Indicate to the calcualteCssStyles function, that we need to set this value
        this.calcualteCssStyles();
        if (this.areaNotification != null) {
            this.areaNotification.style.display = 'inline-block';
        }
        ;
        console.log('commented code at : AreaNotification.show');
        this.portalService.areaBlades.setPortalScrollCss();
        //this.portalService.$rootScope.$broadcast('AreaNotification.Show');
        this.onShowed();
    };
    /* Override */
    /* Override */
    /**
     * @return {?}
     */
    AreaNotification.prototype.onHide = /* Override */
    /**
     * @return {?}
     */
    function () {
        return true;
    };
    /* Override */
    /* Override */
    /**
     * @return {?}
     */
    AreaNotification.prototype.onShow = /* Override */
    /**
     * @return {?}
     */
    function () {
    };
    /* Override */
    /* Override */
    /**
     * @return {?}
     */
    AreaNotification.prototype.onShowed = /* Override */
    /**
     * @return {?}
     */
    function () {
    };
    /**
     * @private
     * @return {?}
     */
    AreaNotification.prototype.calcualteCssStyles = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    return AreaNotification;
}(UserControlBase));
export { AreaNotification };
if (false) {
    /** @type {?} */
    AreaNotification.prototype.path;
    /** @type {?} */
    AreaNotification.prototype.widthAreaUsed;
    /**
     * @type {?}
     * @private
     */
    AreaNotification.prototype.areaNotification;
    /**
     * @type {?}
     * @private
     */
    AreaNotification.prototype._width;
    /**
     * @type {?}
     * @private
     */
    AreaNotification.prototype._backgroundColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS1ub3RpZmljYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vYXJlYS1ub3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFPdEQ7SUFBc0Msb0NBQWU7SUFDakQsc0JBQXNCO0lBRXRCLCtDQUErQztJQUMvQywwQkFBWSxhQUE0QjtRQUF4QyxZQUNJLGtCQUFNLGFBQWEsQ0FBQyxTQU12Qjs7O1FBTUQsVUFBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixtQkFBYSxHQUFXLENBQUMsQ0FBQztRQUlsQixZQUFNLEdBQVcsR0FBRyxDQUFDO1FBU3JCLHNCQUFnQixHQUFXLFNBQVMsQ0FBQztRQXhCekMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFaEYsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osS0FBSSxDQUFDLHlCQUF5Qjs7O1FBQUMsY0FBUSxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDOztJQUN6RSxDQUFDO0lBWUQsc0JBQUksbUNBQUs7Ozs7UUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDOzs7OztRQUNELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUM5QixDQUFDOzs7T0FKQTtJQU9ELHNCQUFJLDZDQUFlOzs7O1FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzs7Ozs7UUFDRCxVQUFvQixLQUFhO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0Is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cUdwRDs7OztJQXBGRyxnQ0FBa0I7O0lBQ2xCLHlDQUEwQjs7Ozs7SUFFMUIsNENBQXNDOzs7OztJQUV0QyxrQ0FBNkI7Ozs7O0lBUzdCLDRDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi9wb3J0YWwtc2VydmljZSc7XHJcbmltcG9ydCB7IFRpbGVzIH0gZnJvbSAnLi90aWxlcyc7XHJcbmltcG9ydCB7IFVzZXJDb250cm9sQmFzZSB9IGZyb20gJy4vdXNlci1jb250cm9sLWJhc2UnO1xyXG5pbXBvcnQgeyBCbGFkZSB9IGZyb20gJy4vYmxhZGUnO1xyXG5pbXBvcnQgeyBCbGFkZURhdGEgfSBmcm9tICcuL2JsYWRlLWRhdGEnO1xyXG5pbXBvcnQgeyBCbGFkZU5hdkl0ZW0gfSBmcm9tICcuL2JsYWRlLW5hdi1pdGVtJztcclxuaW1wb3J0IHsgSUFkZEJsYWRlRXZlbnRBcmdzIH0gZnJvbSAnLi9pYWRkLWJsYWRlLWV2ZW50LWFyZ3MnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBcmVhTm90aWZpY2F0aW9uIGV4dGVuZHMgVXNlckNvbnRyb2xCYXNlIHtcclxuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JcclxuXHJcbiAgICAvL3N0YXRpYyAkaW5qZWN0ID0gWyckc2NvcGUnLCAncG9ydGFsU2VydmljZSddO1xyXG4gICAgY29uc3RydWN0b3IocG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSkgeyAvLyAkc2NvcGU6IGFueSxcclxuICAgICAgICBzdXBlcihwb3J0YWxTZXJ2aWNlKTsgLy8gJHNjb3BlLFxyXG5cclxuICAgICAgICB0aGlzLmFyZWFOb3RpZmljYXRpb24gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwYS1ub3RpZmljYXRpb24tYXJlYScpO1xyXG5cclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnNldHVwV2luZG93UmVzaXplTGlzdGVuZXIoKCkgPT4geyB0aGlzLmNhbGN1YWx0ZUNzc1N0eWxlcygpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgcGF0aDogc3RyaW5nID0gJyc7XHJcbiAgICB3aWR0aEFyZWFVc2VkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgYXJlYU5vdGlmaWNhdGlvbjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IDI1MDtcclxuICAgIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICAgIH1cclxuICAgIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmNhbGN1YWx0ZUNzc1N0eWxlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2JhY2tncm91bmRDb2xvcjogc3RyaW5nID0gJyMzMjM4M2YnO1xyXG4gICAgZ2V0IGJhY2tncm91bmRDb2xvcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB9XHJcbiAgICBzZXQgYmFja2dyb3VuZENvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9iYWNrZ3JvdW5kQ29sb3IgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmNhbGN1YWx0ZUNzc1N0eWxlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIE1ldGhvZHNcclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIC8vIERvIG5vdCBoaWRlIG9uIGZhbHNlXHJcbiAgICAgICAgaWYgKCF0aGlzLm9uSGlkZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnBhdGggPSAnJztcclxuICAgICAgICB0aGlzLndpZHRoQXJlYVVzZWQgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFOb3RpZmljYXRpb24gIT0gbnVsbCkgeyB0aGlzLmFyZWFOb3RpZmljYXRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJyB9O1xyXG5cclxuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYUJsYWRlcy5zZXRQb3J0YWxTY3JvbGxDc3MoKTtcclxuICAgICAgICAvL3RoaXMucG9ydGFsU2VydmljZS4kcm9vdFNjb3BlLiRicm9hZGNhc3QoJ0FyZWFOb3RpZmljYXRpb24uSGlkZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3cod2lkdGg6IG51bWJlciA9IDI1MCkge1xyXG4gICAgICAgIHRoaXMub25TaG93KCk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMud2lkdGhBcmVhVXNlZCA9IDE7IC8vIEluZGljYXRlIHRvIHRoZSBjYWxjdWFsdGVDc3NTdHlsZXMgZnVuY3Rpb24sIHRoYXQgd2UgbmVlZCB0byBzZXQgdGhpcyB2YWx1ZVxyXG4gICAgICAgIHRoaXMuY2FsY3VhbHRlQ3NzU3R5bGVzKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYXJlYU5vdGlmaWNhdGlvbiAhPSBudWxsKSB7IHRoaXMuYXJlYU5vdGlmaWNhdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jaycgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbW1lbnRlZCBjb2RlIGF0IDogQXJlYU5vdGlmaWNhdGlvbi5zaG93Jyk7XHJcbiAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFCbGFkZXMuc2V0UG9ydGFsU2Nyb2xsQ3NzKClcclxuICAgICAgICAvL3RoaXMucG9ydGFsU2VydmljZS4kcm9vdFNjb3BlLiRicm9hZGNhc3QoJ0FyZWFOb3RpZmljYXRpb24uU2hvdycpO1xyXG4gICAgICAgIHRoaXMub25TaG93ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBPdmVycmlkZSAqL1xyXG4gICAgb25IaWRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE92ZXJyaWRlICovXHJcbiAgICBvblNob3coKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLyogT3ZlcnJpZGUgKi9cclxuICAgIG9uU2hvd2VkKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY3VhbHRlQ3NzU3R5bGVzKCkge1xyXG4gICAgICAgIHRoaXMuYXJlYU5vdGlmaWNhdGlvbiA9IHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBhLW5vdGlmaWNhdGlvbi1hcmVhJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYXJlYU5vdGlmaWNhdGlvbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgdGhpcy5hcmVhTm90aWZpY2F0aW9uLnN0eWxlLnRvcCA9ICcwJztcclxuICAgICAgICB0aGlzLmFyZWFOb3RpZmljYXRpb24uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgIHRoaXMuYXJlYU5vdGlmaWNhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB0aGlzLmFyZWFOb3RpZmljYXRpb24uc3R5bGUuYm9yZGVyTGVmdCA9ICcycHggc29saWQgZ3JheSc7XHJcbiAgICAgICAgdGhpcy5hcmVhTm90aWZpY2F0aW9uLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XHJcbiAgICAgICAgdGhpcy5hcmVhTm90aWZpY2F0aW9uLnN0eWxlLmxlZnQgPSB0aGlzLnBvcnRhbFNlcnZpY2UuJHdpbmRvdy5pbm5lcldpZHRoIC0gdGhpcy53aWR0aCArICdweCc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLndpZHRoQXJlYVVzZWQgIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy53aWR0aEFyZWFVc2VkID0gdGhpcy53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==