/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserControlBase } from './user-control-base';
export class AreaNotification extends UserControlBase {
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    /**
     * @param {?} portalService
     */
    constructor(portalService) {
        super(portalService); // $scope,
        // #endregion
        // #region Properties
        this.path = '';
        this.widthAreaUsed = 0;
        this._width = 250;
        this._backgroundColor = '#32383f';
        this.areaNotification = window.document.getElementById('apa-notification-area');
        this.hide();
        this.setupWindowResizeListener((/**
         * @return {?}
         */
        () => { this.calcualteCssStyles(); }));
    }
    /**
     * @return {?}
     */
    get width() {
        return this._width;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set width(value) {
        this._width = value;
        this.calcualteCssStyles();
    }
    /**
     * @return {?}
     */
    get backgroundColor() {
        return this._backgroundColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set backgroundColor(value) {
        this._backgroundColor = value;
        this.calcualteCssStyles();
    }
    // #endregion
    // #region Methods
    /**
     * @return {?}
     */
    hide() {
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
    }
    /**
     * @param {?=} width
     * @return {?}
     */
    show(width = 250) {
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
    }
    /* Override */
    /**
     * @return {?}
     */
    onHide() {
        return true;
    }
    /* Override */
    /**
     * @return {?}
     */
    onShow() {
    }
    /* Override */
    /**
     * @return {?}
     */
    onShowed() {
    }
    /**
     * @private
     * @return {?}
     */
    calcualteCssStyles() {
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
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS1ub3RpZmljYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vYXJlYS1ub3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU90RCxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsZUFBZTs7Ozs7O0lBSWpELFlBQVksYUFBNEI7UUFDcEMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsVUFBVTs7O1FBWXBDLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFJbEIsV0FBTSxHQUFXLEdBQUcsQ0FBQztRQVNyQixxQkFBZ0IsR0FBVyxTQUFTLENBQUM7UUF4QnpDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRWhGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyx5QkFBeUI7OztRQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7SUFDekUsQ0FBQzs7OztJQVlELElBQUksS0FBSztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7OztJQUNELElBQUksS0FBSyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDOUIsQ0FBQzs7OztJQUdELElBQUksZUFBZTtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBQ0QsSUFBSSxlQUFlLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQU1ELElBQUk7UUFDQSx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksRUFBRTtZQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtTQUFFO1FBQUEsQ0FBQztRQUVwRixJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ25ELG9FQUFvRTtJQUN4RSxDQUFDOzs7OztJQUVELElBQUksQ0FBQyxRQUFnQixHQUFHO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsOEVBQThFO1FBQ3RHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksRUFBRTtZQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQTtTQUFFO1FBQUEsQ0FBQztRQUU1RixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtRQUNsRCxvRUFBb0U7UUFDcEUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBR0QsTUFBTTtRQUNGLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBR0QsTUFBTTtJQUNOLENBQUM7Ozs7O0lBR0QsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRU8sa0JBQWtCO1FBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRWhGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNsRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDbkUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUM7UUFDMUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRTdGLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztDQUdKOzs7SUFwRkcsZ0NBQWtCOztJQUNsQix5Q0FBMEI7Ozs7O0lBRTFCLDRDQUFzQzs7Ozs7SUFFdEMsa0NBQTZCOzs7OztJQVM3Qiw0Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4vcG9ydGFsLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUaWxlcyB9IGZyb20gJy4vdGlsZXMnO1xyXG5pbXBvcnQgeyBVc2VyQ29udHJvbEJhc2UgfSBmcm9tICcuL3VzZXItY29udHJvbC1iYXNlJztcclxuaW1wb3J0IHsgQmxhZGUgfSBmcm9tICcuL2JsYWRlJztcclxuaW1wb3J0IHsgQmxhZGVEYXRhIH0gZnJvbSAnLi9ibGFkZS1kYXRhJztcclxuaW1wb3J0IHsgQmxhZGVOYXZJdGVtIH0gZnJvbSAnLi9ibGFkZS1uYXYtaXRlbSc7XHJcbmltcG9ydCB7IElBZGRCbGFkZUV2ZW50QXJncyB9IGZyb20gJy4vaWFkZC1ibGFkZS1ldmVudC1hcmdzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQXJlYU5vdGlmaWNhdGlvbiBleHRlbmRzIFVzZXJDb250cm9sQmFzZSB7XHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yXHJcblxyXG4gICAgLy9zdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJywgJ3BvcnRhbFNlcnZpY2UnXTtcclxuICAgIGNvbnN0cnVjdG9yKHBvcnRhbFNlcnZpY2U6IFBvcnRhbFNlcnZpY2UpIHsgLy8gJHNjb3BlOiBhbnksXHJcbiAgICAgICAgc3VwZXIocG9ydGFsU2VydmljZSk7IC8vICRzY29wZSxcclxuXHJcbiAgICAgICAgdGhpcy5hcmVhTm90aWZpY2F0aW9uID0gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcGEtbm90aWZpY2F0aW9uLWFyZWEnKTtcclxuXHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cFdpbmRvd1Jlc2l6ZUxpc3RlbmVyKCgpID0+IHsgdGhpcy5jYWxjdWFsdGVDc3NTdHlsZXMoKTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xyXG5cclxuICAgIHBhdGg6IHN0cmluZyA9ICcnO1xyXG4gICAgd2lkdGhBcmVhVXNlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIGFyZWFOb3RpZmljYXRpb246IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXIgPSAyNTA7XHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XHJcbiAgICB9XHJcbiAgICBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jYWxjdWFsdGVDc3NTdHlsZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9iYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICcjMzIzODNmJztcclxuICAgIGdldCBiYWNrZ3JvdW5kQ29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmFja2dyb3VuZENvbG9yO1xyXG4gICAgfVxyXG4gICAgc2V0IGJhY2tncm91bmRDb2xvcih2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fYmFja2dyb3VuZENvbG9yID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jYWxjdWFsdGVDc3NTdHlsZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBNZXRob2RzXHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICAvLyBEbyBub3QgaGlkZSBvbiBmYWxzZVxyXG4gICAgICAgIGlmICghdGhpcy5vbkhpZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wYXRoID0gJyc7XHJcbiAgICAgICAgdGhpcy53aWR0aEFyZWFVc2VkID0gMDtcclxuICAgICAgICBpZiAodGhpcy5hcmVhTm90aWZpY2F0aW9uICE9IG51bGwpIHsgdGhpcy5hcmVhTm90aWZpY2F0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgfTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFCbGFkZXMuc2V0UG9ydGFsU2Nyb2xsQ3NzKCk7XHJcbiAgICAgICAgLy90aGlzLnBvcnRhbFNlcnZpY2UuJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdBcmVhTm90aWZpY2F0aW9uLkhpZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KHdpZHRoOiBudW1iZXIgPSAyNTApIHtcclxuICAgICAgICB0aGlzLm9uU2hvdygpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLndpZHRoQXJlYVVzZWQgPSAxOyAvLyBJbmRpY2F0ZSB0byB0aGUgY2FsY3VhbHRlQ3NzU3R5bGVzIGZ1bmN0aW9uLCB0aGF0IHdlIG5lZWQgdG8gc2V0IHRoaXMgdmFsdWVcclxuICAgICAgICB0aGlzLmNhbGN1YWx0ZUNzc1N0eWxlcygpO1xyXG4gICAgICAgIGlmICh0aGlzLmFyZWFOb3RpZmljYXRpb24gIT0gbnVsbCkgeyB0aGlzLmFyZWFOb3RpZmljYXRpb24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50ZWQgY29kZSBhdCA6IEFyZWFOb3RpZmljYXRpb24uc2hvdycpO1xyXG4gICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hcmVhQmxhZGVzLnNldFBvcnRhbFNjcm9sbENzcygpXHJcbiAgICAgICAgLy90aGlzLnBvcnRhbFNlcnZpY2UuJHJvb3RTY29wZS4kYnJvYWRjYXN0KCdBcmVhTm90aWZpY2F0aW9uLlNob3cnKTtcclxuICAgICAgICB0aGlzLm9uU2hvd2VkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogT3ZlcnJpZGUgKi9cclxuICAgIG9uSGlkZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBPdmVycmlkZSAqL1xyXG4gICAgb25TaG93KCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qIE92ZXJyaWRlICovXHJcbiAgICBvblNob3dlZCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNhbGN1YWx0ZUNzc1N0eWxlcygpIHtcclxuICAgICAgICB0aGlzLmFyZWFOb3RpZmljYXRpb24gPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwYS1ub3RpZmljYXRpb24tYXJlYScpO1xyXG5cclxuICAgICAgICB0aGlzLmFyZWFOb3RpZmljYXRpb24uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHRoaXMuYXJlYU5vdGlmaWNhdGlvbi5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgdGhpcy5hcmVhTm90aWZpY2F0aW9uLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICB0aGlzLmFyZWFOb3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgdGhpcy5hcmVhTm90aWZpY2F0aW9uLnN0eWxlLmJvcmRlckxlZnQgPSAnMnB4IHNvbGlkIGdyYXknO1xyXG4gICAgICAgIHRoaXMuYXJlYU5vdGlmaWNhdGlvbi5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyAncHgnO1xyXG4gICAgICAgIHRoaXMuYXJlYU5vdGlmaWNhdGlvbi5zdHlsZS5sZWZ0ID0gdGhpcy5wb3J0YWxTZXJ2aWNlLiR3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMud2lkdGggKyAncHgnO1xyXG5cclxuICAgICAgICBpZiAodGhpcy53aWR0aEFyZWFVc2VkICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2lkdGhBcmVhVXNlZCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=