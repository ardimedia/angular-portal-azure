/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Exception } from './exception';
export class UserControlBase {
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    /**
     * @param {?} portalService
     */
    constructor(portalService) {
        this.statusBar = '';
        this.statusBarClass = '';
        //this.$scope = $scope;
        this.portalService = portalService;
    }
    // #endregion
    // #region Methods
    /**
     * angular1: $onInit(), $onChanges(changesObj), $doCheck(), $onDestroy(), $postLink()
     * @return {?}
     */
    $onDestroy() {
        this.removeWindowResizeListener();
    }
    /**
     * angular2: ngOnChanges(), ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy
     * @return {?}
     */
    ngOnDestroy() {
        this.removeWindowResizeListener();
    }
    /**
     * Override
     * @return {?}
     */
    onActivate() {
    }
    /**
     * Override
     * @return {?}
     */
    onActivated() {
    }
    /**
     * @private
     * @return {?}
     */
    removeWindowResizeListener() {
        if (this.windowResizeHandler !== undefined) {
            this.portalService.$window.removeEventListener('resize', this.windowResizeHandler);
        }
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    setupWindowResizeListener(callback) {
        // http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
        /** @type {?} */
        let id;
        window.addEventListener('resize', this.windowResizeHandler = (/**
         * @return {?}
         */
        () => {
            clearTimeout(id);
            id = setTimeout((/**
             * @return {?}
             */
            () => { callback(); }), 50);
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isNumberUndefinedNullOr0(value) {
        if (value && value > 0) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isObjectNullUndefinedOrEmpty(value) {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isStringNullOrEmpty(value) {
        if (value && value.replace(' ', '').length > 0) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * @param {?=} length
     * @return {?}
     */
    getRandomString(length = 20) {
        return 'a' + Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).replace('.', '').replace('(e+', '').replace(')', '').slice(1);
    }
    // #region Set StatusBar
    /**
     * @return {?}
     */
    clearStatusBar() {
        this.statusBar = '';
        this.statusBarClass = '';
    }
    /**
     * @param {?=} text
     * @param {?=} style
     * @return {?}
     */
    setStatusBar(text, style) {
        this.statusBar = text ? text : '';
        this.statusBarClass = style ? style : '';
    }
    /**
     * @return {?}
     */
    setStatusBarCopyData() {
        this.statusBar = 'Daten kopieren...';
        this.statusBarClass = 'apa-statusbar-info';
    }
    /**
     * @return {?}
     */
    setStatusBarLoadData() {
        this.statusBar = 'Daten laden...';
        this.statusBarClass = 'apa-statusbar-info';
    }
    /**
     * @return {?}
     */
    setStatusBarSaveData() {
        this.statusBar = 'Daten speichern...';
        this.statusBarClass = 'apa-statusbar-info';
    }
    /**
     * @return {?}
     */
    setStatusBarDeleteData() {
        this.statusBar = 'Daten lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¶schen...';
        this.statusBarClass = 'apa-statusbar-info';
    }
    /**
     * @return {?}
     */
    setStatusBarDeleteDataCanceled() {
        this.statusBar = 'LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¶schen abgebrochen.';
        this.statusBarClass = 'apa-statusbar-info';
    }
    /**
     * @param {?} text
     * @return {?}
     */
    setStatusBarInfo(text) {
        this.statusBar = text;
        this.statusBarClass = 'apa-statusbar-info';
    }
    /**
     * @param {?} text
     * @return {?}
     */
    setStatusBarError(text) {
        this.statusBar = text;
        this.statusBarClass = 'apa-statusbar-error';
    }
    /**
     * @return {?}
     */
    setStatusBarNoDataFound() {
        this.statusBar = 'Keine Daten gefunden!';
        this.statusBarClass = 'apa-statusbar-error';
    }
    /**
     * @param {?} exception
     * @return {?}
     */
    setStatusBarException(exception) {
        this.statusBar = Exception.getOneLineMessage(exception);
        this.statusBarClass = 'apa-statusbar-error';
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb250cm9sLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vdXNlci1jb250cm9sLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHeEMsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUl4QixZQUFZLGFBQTRCO1FBY3hDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFkeEIsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7Ozs7Ozs7SUFtQkQsVUFBVTtRQUNOLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBR0QsV0FBVztRQUNQLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBR0QsVUFBVTtJQUNWLENBQUM7Ozs7O0lBR0QsV0FBVztJQUNYLENBQUM7Ozs7O0lBRU8sMEJBQTBCO1FBQzlCLElBQUksSUFBSSxDQUFDLG1CQUFtQixLQUFLLFNBQVMsRUFBRTtZQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FDdEY7SUFDTCxDQUFDOzs7OztJQUVELHlCQUF5QixDQUFDLFFBQW9COzs7WUFFdEMsRUFBVTtRQUVkLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjs7O1FBQUcsR0FBRyxFQUFFO1lBQzlELFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNqQixFQUFFLEdBQUcsVUFBVTs7O1lBQUMsR0FBRyxFQUFFLEdBQUcsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUUsRUFBRSxD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QW9CLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFZO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQW9CLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxJQUFZO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELHVCQUF1QjtRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLHVCQUF1QixDQUFDO1FBQ3pDLElBQUksQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxTQUFvQjtRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsY0FBYyxHQUFHLHFCQUFxQixDQUFDO0lBQ2hELENBQUM7Q0FLSjs7O0lBdklHLHdDQUE2Qjs7SUFFN0IsOENBQWdDOztJQUVoQyxvQ0FBdUI7O0lBQ3ZCLHlDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJBY2NvdW50IH0gZnJvbSAnLi91c2VyLWFjY291bnQnO1xuaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4vcG9ydGFsLXNlcnZpY2UnO1xuaW1wb3J0IHsgRXhjZXB0aW9uIH0gZnJvbSAnLi9leGNlcHRpb24nO1xuXG5cbmV4cG9ydCBjbGFzcyBVc2VyQ29udHJvbEJhc2Uge1xuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JcblxuICAgIC8vc3RhdGljICRpbmplY3QgPSBbJyRzY29wZScsICdwb3J0YWxTZXJ2aWNlJ107XG4gICAgY29uc3RydWN0b3IocG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSkgeyAvLyAkc2NvcGU6IGFueSxcbiAgICAgICAgLy90aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlID0gcG9ydGFsU2VydmljZTtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcblxuICAgIC8vJHNjb3BlOiBhbnk7XG4gICAgcG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZTtcblxuICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXI6ICgpID0+IHZvaWQ7XG5cbiAgICBzdGF0dXNCYXI6IHN0cmluZyA9ICcnO1xuICAgIHN0YXR1c0JhckNsYXNzOiBzdHJpbmcgPSAnJztcblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gTWV0aG9kc1xuXG4gICAgLyoqIGFuZ3VsYXIxOiAkb25Jbml0KCksICRvbkNoYW5nZXMoY2hhbmdlc09iaiksICRkb0NoZWNrKCksICRvbkRlc3Ryb3koKSwgJHBvc3RMaW5rKCkgKi9cbiAgICAkb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnJlbW92ZVdpbmRvd1Jlc2l6ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqIGFuZ3VsYXIyOiBuZ09uQ2hhbmdlcygpLCBuZ09uSW5pdCwgbmdEb0NoZWNrLCBuZ0FmdGVyQ29udGVudEluaXQsIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCwgbmdBZnRlclZpZXdJbml0LCBuZ0FmdGVyVmlld0NoZWNrZWQsIG5nT25EZXN0cm95ICovXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlV2luZG93UmVzaXplTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgKi9cbiAgICBvbkFjdGl2YXRlKCk6IHZvaWQge1xuICAgIH1cblxuICAgIC8qKiBPdmVycmlkZSAqL1xuICAgIG9uQWN0aXZhdGVkKCk6IHZvaWQge1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVtb3ZlV2luZG93UmVzaXplTGlzdGVuZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLiR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldHVwV2luZG93UmVzaXplTGlzdGVuZXIoY2FsbGJhY2s6ICgpID0+IHZvaWQpIHtcbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80Mjk4NjEyL2pxdWVyeS1ob3ctdG8tY2FsbC1yZXNpemUtZXZlbnQtb25seS1vbmNlLWl0cy1maW5pc2hlZC1yZXNpemluZ1xuICAgICAgICBsZXQgaWQ6IG51bWJlcjtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgICAgIGlkID0gc2V0VGltZW91dCgoKSA9PiB7IGNhbGxiYWNrKCk7IH0sIDUwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaXNOdW1iZXJVbmRlZmluZWROdWxsT3IwKHZhbHVlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc09iamVjdE51bGxVbmRlZmluZWRPckVtcHR5KHZhbHVlOiBvYmplY3QpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHsgcmV0dXJuIHRydWU7IH1cbiAgICAgICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCkgeyByZXR1cm4gdHJ1ZTsgfVxuICAgICAgICBpZiAodmFsdWUgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaXNTdHJpbmdOdWxsT3JFbXB0eSh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5yZXBsYWNlKCcgJywgJycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UmFuZG9tU3RyaW5nKGxlbmd0aDogbnVtYmVyID0gMjApIHtcbiAgICAgICAgcmV0dXJuICdhJyArIE1hdGgucm91bmQoKE1hdGgucG93KDM2LCBsZW5ndGggKyAxKSAtIE1hdGgucmFuZG9tKCkgKiBNYXRoLnBvdygzNiwgbGVuZ3RoKSkpLnRvU3RyaW5nKDM2KS5yZXBsYWNlKCcuJywgJycpLnJlcGxhY2UoJyhlKycsICcnKS5yZXBsYWNlKCcpJywgJycpLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIC8vICNyZWdpb24gU2V0IFN0YXR1c0JhclxuXG4gICAgY2xlYXJTdGF0dXNCYXIoKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gJyc7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyQ2xhc3MgPSAnJztcbiAgICB9XG5cbiAgICBzZXRTdGF0dXNCYXIodGV4dD86IHN0cmluZywgc3R5bGU/OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSB0ZXh0ID8gdGV4dCA6ICcnO1xuICAgICAgICB0aGlzLnN0YXR1c0JhckNsYXNzID0gc3R5bGUgPyBzdHlsZSA6ICcnO1xuICAgIH1cblxuICAgIHNldFN0YXR1c0JhckNvcHlEYXRhKCkge1xuICAgICAgICB0aGlzLnN0YXR1c0JhciA9ICdEYXRlbiBrb3BpZXJlbi4uLic7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyQ2xhc3MgPSAnYXBhLXN0YXR1c2Jhci1pbmZvJztcbiAgICB9XG5cbiAgICBzZXRTdGF0dXNCYXJMb2FkRGF0YSgpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSAnRGF0ZW4gbGFkZW4uLi4nO1xuICAgICAgICB0aGlzLnN0YXR1c0JhckNsYXNzID0gJ2FwYS1zdGF0dXNiYXItaW5mbyc7XG4gICAgfVxuXG4gICAgc2V0U3RhdHVzQmFyU2F2ZURhdGEoKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gJ0RhdGVuIHNwZWljaGVybi4uLic7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyQ2xhc3MgPSAnYXBhLXN0YXR1c2Jhci1pbmZvJztcbiAgICB9XG5cbiAgICBzZXRTdGF0dXNCYXJEZWxldGVEYXRhKCkge1xuICAgICAgICB0aGlzLnN0YXR1c0JhciA9ICdEYXRlbiBsw4PGksOG4oCZw4PigKDDouKCrOKEosODxpLDouKCrMKgw4PCosOi4oCawqzDouKAnsKiw4PGksOG4oCZw4PCosOi4oCawqzDgsKgw4PGksOCwqLDg8Kiw6LigqzFocOCwqzDg8Kiw6LigqzFvsOCwqLDg8aSw4bigJnDg+KAoMOi4oKs4oSiw4PGksOCwqLDg8Kiw6LigqzFocOCwqzDg+KApsOCwqHDg8aSw4bigJnDg8Kiw6LigJrCrMOFwqHDg8aSw6LigqzFocOD4oCaw4LCtnNjaGVuLi4uJztcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWluZm8nO1xuICAgIH1cblxuICAgIHNldFN0YXR1c0JhckRlbGV0ZURhdGFDYW5jZWxlZCgpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSAnTMODxpLDhuKAmcOD4oCgw6LigqzihKLDg8aSw6LigqzCoMODwqLDouKAmsKsw6LigJ7CosODxpLDhuKAmcODwqLDouKAmsKsw4LCoMODxpLDgsKiw4PCosOi4oKsxaHDgsKsw4PCosOi4oKsxb7DgsKiw4PGksOG4oCZw4PigKDDouKCrOKEosODxpLDgsKiw4PCosOi4oKsxaHDgsKsw4PigKbDgsKhw4PGksOG4oCZw4PCosOi4oCawqzDhcKhw4PGksOi4oKsxaHDg+KAmsOCwrZzY2hlbiBhYmdlYnJvY2hlbi4nO1xuICAgICAgICB0aGlzLnN0YXR1c0JhckNsYXNzID0gJ2FwYS1zdGF0dXNiYXItaW5mbyc7XG4gICAgfVxuXG4gICAgc2V0U3RhdHVzQmFySW5mbyh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSB0ZXh0O1xuICAgICAgICB0aGlzLnN0YXR1c0JhckNsYXNzID0gJ2FwYS1zdGF0dXNiYXItaW5mbyc7XG4gICAgfVxuXG4gICAgc2V0U3RhdHVzQmFyRXJyb3IodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gdGV4dDtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWVycm9yJztcbiAgICB9XG5cbiAgICBzZXRTdGF0dXNCYXJOb0RhdGFGb3VuZCgpIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSAnS2VpbmUgRGF0ZW4gZ2VmdW5kZW4hJztcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWVycm9yJztcbiAgICB9XG5cbiAgICBzZXRTdGF0dXNCYXJFeGNlcHRpb24oZXhjZXB0aW9uOiBFeGNlcHRpb24pIHtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSBFeGNlcHRpb24uZ2V0T25lTGluZU1lc3NhZ2UoZXhjZXB0aW9uKTtcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWVycm9yJztcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=