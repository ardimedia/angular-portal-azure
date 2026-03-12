/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Exception } from './exception';
var UserControlBase = /** @class */ (function () {
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    function UserControlBase(portalService) {
        this.statusBar = '';
        this.statusBarClass = '';
        //this.$scope = $scope;
        this.portalService = portalService;
    }
    // #endregion
    // #region Methods
    /** angular1: $onInit(), $onChanges(changesObj), $doCheck(), $onDestroy(), $postLink() */
    // #endregion
    // #region Methods
    /**
     * angular1: $onInit(), $onChanges(changesObj), $doCheck(), $onDestroy(), $postLink()
     * @return {?}
     */
    UserControlBase.prototype.$onDestroy = 
    // #endregion
    // #region Methods
    /**
     * angular1: $onInit(), $onChanges(changesObj), $doCheck(), $onDestroy(), $postLink()
     * @return {?}
     */
    function () {
        this.removeWindowResizeListener();
    };
    /** angular2: ngOnChanges(), ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy */
    /**
     * angular2: ngOnChanges(), ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy
     * @return {?}
     */
    UserControlBase.prototype.ngOnDestroy = /**
     * angular2: ngOnChanges(), ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy
     * @return {?}
     */
    function () {
        this.removeWindowResizeListener();
    };
    /** Override */
    /**
     * Override
     * @return {?}
     */
    UserControlBase.prototype.onActivate = /**
     * Override
     * @return {?}
     */
    function () {
    };
    /** Override */
    /**
     * Override
     * @return {?}
     */
    UserControlBase.prototype.onActivated = /**
     * Override
     * @return {?}
     */
    function () {
    };
    /**
     * @private
     * @return {?}
     */
    UserControlBase.prototype.removeWindowResizeListener = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.windowResizeHandler !== undefined && this.portalService.$window) {
            this.portalService.$window.removeEventListener('resize', this.windowResizeHandler);
        }
    };
    /**
     * @param {?} callback
     * @return {?}
     */
    UserControlBase.prototype.setupWindowResizeListener = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        // http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
        /** @type {?} */
        var id;
        window.addEventListener('resize', this.windowResizeHandler = (/**
         * @return {?}
         */
        function () {
            clearTimeout(id);
            id = setTimeout((/**
             * @return {?}
             */
            function () { callback(); }), 50);
        }));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    UserControlBase.prototype.isNumberUndefinedNullOr0 = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value && value > 0) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    UserControlBase.prototype.isObjectNullUndefinedOrEmpty = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value == null) {
            return true;
        }
        if (value == undefined) {
            return true;
        }
        if (value && Object.keys(value).length > 0) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    UserControlBase.prototype.isStringNullOrEmpty = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value && value.replace(' ', '').length > 0) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * @param {?=} length
     * @return {?}
     */
    UserControlBase.prototype.getRandomString = /**
     * @param {?=} length
     * @return {?}
     */
    function (length) {
        if (length === void 0) { length = 20; }
        return 'a' + Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).replace('.', '').replace('(e+', '').replace(')', '').slice(1);
    };
    // #region Set StatusBar
    // #region Set StatusBar
    /**
     * @return {?}
     */
    UserControlBase.prototype.clearStatusBar = 
    // #region Set StatusBar
    /**
     * @return {?}
     */
    function () {
        this.statusBar = '';
        this.statusBarClass = '';
    };
    /**
     * @param {?=} text
     * @param {?=} style
     * @return {?}
     */
    UserControlBase.prototype.setStatusBar = /**
     * @param {?=} text
     * @param {?=} style
     * @return {?}
     */
    function (text, style) {
        this.statusBar = text ? text : '';
        this.statusBarClass = style ? style : '';
    };
    /**
     * @return {?}
     */
    UserControlBase.prototype.setStatusBarCopyData = /**
     * @return {?}
     */
    function () {
        this.statusBar = 'Daten kopieren...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    /**
     * @return {?}
     */
    UserControlBase.prototype.setStatusBarLoadData = /**
     * @return {?}
     */
    function () {
        this.statusBar = 'Daten laden...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    /**
     * @return {?}
     */
    UserControlBase.prototype.setStatusBarSaveData = /**
     * @return {?}
     */
    function () {
        this.statusBar = 'Daten speichern...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    /**
     * @return {?}
     */
    UserControlBase.prototype.setStatusBarDeleteData = /**
     * @return {?}
     */
    function () {
        this.statusBar = 'Daten lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¶schen...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    /**
     * @return {?}
     */
    UserControlBase.prototype.setStatusBarDeleteDataCanceled = /**
     * @return {?}
     */
    function () {
        this.statusBar = 'LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¶schen abgebrochen.';
        this.statusBarClass = 'apa-statusbar-info';
    };
    /**
     * @param {?} text
     * @return {?}
     */
    UserControlBase.prototype.setStatusBarInfo = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.statusBar = text;
        this.statusBarClass = 'apa-statusbar-info';
    };
    /**
     * @param {?} text
     * @return {?}
     */
    UserControlBase.prototype.setStatusBarError = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.statusBar = text;
        this.statusBarClass = 'apa-statusbar-error';
    };
    /**
     * @return {?}
     */
    UserControlBase.prototype.setStatusBarNoDataFound = /**
     * @return {?}
     */
    function () {
        this.statusBar = 'Keine Daten gefunden!';
        this.statusBarClass = 'apa-statusbar-error';
    };
    /**
     * @param {?} exception
     * @return {?}
     */
    UserControlBase.prototype.setStatusBarException = /**
     * @param {?} exception
     * @return {?}
     */
    function (exception) {
        this.statusBar = Exception.getOneLineMessage(exception);
        this.statusBarClass = 'apa-statusbar-error';
    };
    return UserControlBase;
}());
export { UserControlBase };
if (false) {
    /** @type {?} */
    UserControlBase.prototype.portalService;
    /** @type {?} */
    UserControlBase.prototype.windowResizeHandler;
    /** @type {?} */
    UserControlBase.prototype.statusBar;
    /** @type {?} */
    UserControlBase.prototype.statusBarClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb250cm9sLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vdXNlci1jb250cm9sLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHeEM7SUFDSSxzQkFBc0I7SUFFdEIsK0NBQStDO0lBQy9DLHlCQUFZLGFBQTRCO1FBY3hDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFkeEIsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFjRCxhQUFhO0lBRWIsa0JBQWtCO0lBRWxCLHlGQUF5Rjs7Ozs7OztJQUN6RixvQ0FBVTs7Ozs7OztJQUFWO1FBQ0ksSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELGdKQUFnSjs7Ozs7SUFDaEoscUNBQVc7Ozs7SUFBWDtRQUNJLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxlQUFlOzs7OztJQUNmLG9DQUFVOzs7O0lBQVY7SUFDQSxDQUFDO0lBRUQsZUFBZTs7Ozs7SUFDZixxQ0FBVzs7OztJQUFYO0lBQ0EsQ0FBQzs7Ozs7SUFFTyxvREFBMEI7Ozs7SUFBbEM7UUFDSSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7WUFDdEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3RGO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxtREFBeUI7Ozs7SUFBekIsVUFBMEIsUUFBb0I7OztZQUV0QyxFQUFVO1FBRWQsTUFBTSxDQUFDLGdCQUFn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cG9ydCB7IFVzZXJBY2NvdW50IH0gZnJvbSAnLi91c2VyLWFjY291bnQnO1xuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4vcG9ydGFsLXNlcnZpY2UnO1xuaW1wb3J0IHsgRXhjZXB0aW9uIH0gZnJvbSAnLi9leGNlcHRpb24nO1xuXG5cbmV4cG9ydCBjbGFzcyBVc2VyQ29udHJvbEJhc2Uge1xuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JcblxuICAgIC8vc3RhdGljICRpbmplY3QgPSBbJyRzY29wZScsICdwb3J0YWxTZXJ2aWNlJ107XG4gICAgY29uc3RydWN0b3IocG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSkgeyAvLyAkc2NvcGU6IGFueSxcbiAgICAgICAgLy90aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlID0gcG9ydGFsU2VydmljZTtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcblxuICAgIC8vJHNjb3BlOiBhbnk7XG4gICAgcG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZTtcblxuICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXI6ICgpID0+IHZvaWQ7XG5cbiAgICBzdGF0dXNCYXI6IHN0cmluZyA9ICcnO1xuICAgIHN0YXR1c0JhckNsYXNzOiBzdHJpbmcgPSAnJztcblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gTWV0aG9kc1xuXG4gICAgLyoqIGFuZ3VsYXIxOiAkb25Jbml0KCksICRvbkNoYW5nZXMoY2hhbmdlc09iaiksICRkb0NoZWNrKCksICRvbkRlc3Ryb3koKSwgJHBvc3RMaW5rKCkgKi9cbiAgICAkb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJlbW92ZVdpbmRvd1Jlc2l6ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqIGFuZ3VsYXIyOiBuZ09uQ2hhbmdlcygpLCBuZ09uSW5pdCwgbmdEb0NoZWNrLCBuZ0FmdGVyQ29udGVudEluaXQsIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCwgbmdBZnRlclZpZXdJbml0LCBuZ0FmdGVyVmlld0NoZWNrZWQsIG5nT25EZXN0cm95ICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlV2luZG93UmVzaXplTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgKi9cbiAgICBvbkFjdGl2YXRlKCk6IHZvaWQge1xuICAgIH1cblxuICAgIC8qKiBPdmVycmlkZSAqL1xuICAgIG9uQWN0aXZhdGVkKCk6IHZvaWQge1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlV2luZG93UmVzaXplTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnBvcnRhbFNlcnZpY2UuJHdpbmRvdykge1xuICAgICAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLiR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldHVwV2luZG93UmVzaXplTGlzdGVuZXIoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80Mjk4NjEyL2pxdWVyeS1ob3ctdG8tY2FsbC1yZXNpemUtZXZlbnQtb25seS1vbmNlLWl0cy1maW5pc2hlZC1yZXNpemluZ1xuICAgICAgICBsZXQgaWQ6IG51bWJlcjtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgICAgIGlkID0gc2V0VGltZW91dCgoKSA9PiB7IGNhbGxiYWNrKCk7IH0sIDUwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNOdW1iZXJVbmRlZmluZWROdWxsT3IwKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc09iamVjdE51bGxVbmRlZmluZWRPckVtcHR5KHZhbHVlOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICBpZiAodmFsdWUgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNTdHJpbmdOdWxsT3JFbXB0eSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5yZXBsYWNlKCcgJywgJycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tU3RyaW5nKGxlbmd0aDogbnVtYmVyID0gMjApIHtcbiAgICAgICAgcmV0dXJuICdhJyArIE1hdGgucm91bmQoKE1hdGgucG93KDM2LCBsZW5ndGggKyAxKSAtIE1hdGgucmFuZG9tKCkgKiBNYXRoLnBvdygzNiwgbGVuZ3RoKSkpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKCcuJywgJycpLnJlcGxhY2UoJyhlKycsICcnKS5yZXBsYWNlKCcpJywgJycpLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIC8vICNyZWdpb24gU2V0IFN0YXR1c0JhclxuXG4gICAgY2xlYXJTdGF0dXNCYXIoKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gJyc7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyQ2xhc3MgPSAnJztcbiAgICB9XG5cbiAgICBzZXRTdGF0dXNCYXIodGV4dD86IHN0cmluZywgc3R5bGU/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSB0ZXh0ID8gdGV4dCA6ICcnO1xuICAgICAgICB0aGlzLnN0YXR1c0JhckNsYXNzID0gc3R5bGUgPyBzdHlsZSA6ICcnO1xuICAgIH1cblxuICAgIHNldFN0YXR1c0JhckNvcHlEYXRhKCkge1xuICAgICAgICB0aGlzLnN0YXR1c0JhciA9ICdEYXRlbiBrb3BpZXJlbi4uLic7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyQ2xhc3MgPSAnYXBhLXN0YXR1c2Jhci1pbmZvJztcbiAgICB9XG5cbiAgICBzZXRTdGF0dXNCYXJMb2FkRGF0YSgpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSAnRGF0ZW4gbGFkZW4uLi4nO1xuICAgICAgICB0aGlzLnN0YXR1c0JhckNsYXNzID0gJ2FwYS1zdGF0dXNiYXItaW5mbyc7XG4gICAgfVxuXG4gICAgc2V0U3RhdHVzQmFyU2F2ZURhdGEoKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gJ0RhdGVuIHNwZWljaGVybi4uLic7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyQ2xhc3MgPSAnYXBhLXN0YXR1c2Jhci1pbmZvJztcbiAgICB9XG5cbiAgICBzZXRTdGF0dXNCYXJEZWxldGVEYXRhKCkge1xuICAgICAgICB0aGlzLnN0YXR1c0JhciA9ICdEYXRlbiBsw4PGksOG4oCZw4PigKDDouKCrOKEosODxpLDouKCrMKgw4PCosOi4oCawqzDouKAnsKiw4PGksOG4oCZw4PCosOi4oCawqzDgsKgw4PGksOCwqLDg8Kiw6LigqzFocOCwqzDg8Kiw6LigqzFvsOCwqLDg8aSw4bigJnDg+KAoMOi4oKs4oSiw4PGksOCwqLDg8Kiw6LigqzFocOCwqzDg+KApsOCwqHDg8aSw4bigJnDg8Kiw6LigJrCrMOFwqHDg8aSw6LigqzFocOD4oCaw4LCtnNjaGVuLi4uJztcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWluZm8nO1xuICAgIH1cblxuICAgIHNldFN0YXR1c0JhckRlbGV0ZURhdGFDYW5jZWxlZCgpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSAnTMODxpLDhuKAmcOD4oCgw6LigqzihKLDg8aSw6LigqzCoMODwqLDouKAmsKsw6LigJ7CosODxpLDhuKAmcODwqLDouKAmsKsw4LCoMODxpLDgsKiw4PCosOi4oKsxaHDgsKsw4PCosOi4oKsxb7DgsKiw4PGksOG4oCZw4PigKDDouKCrOKEosODxpLDgsKiw4PCosOi4oKsxaHDgsKsw4PigKbDgsKhw4PGksOG4oCZw4PCosOi4oCawqzDhcKhw4PGksOi4oKsxaHDg+KAmsOCwrZzY2hlbiBhYmdlYnJvY2hlbi4nO1xuICAgICAgICB0aGlzLnN0YXR1c0JhckNsYXNzID0gJ2FwYS1zdGF0dXNiYXItaW5mbyc7XG4gICAgfVxuXG4gICAgc2V0U3RhdHVzQmFySW5mbyh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSB0ZXh0O1xuICAgICAgICB0aGlzLnN0YXR1c0JhckNsYXNzID0gJ2FwYS1zdGF0dXNiYXItaW5mbyc7XG4gICAgfVxuXG4gICAgc2V0U3RhdHVzQmFyRXJyb3IodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gdGV4dDtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWVycm9yJztcbiAgICB9XG5cbiAgICBzZXRTdGF0dXNCYXJOb0RhdGFGb3VuZCgpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSAnS2VpbmUgRGF0ZW4gZ2VmdW5kZW4hJztcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWVycm9yJztcbiAgICB9XG5cbiAgICBzZXRTdGF0dXNCYXJFeGNlcHRpb24oZXhjZXB0aW9uOiBFeGNlcHRpb24pIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSBFeGNlcHRpb24uZ2V0T25lTGluZU1lc3NhZ2UoZXhjZXB0aW9uKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWVycm9yJztcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=