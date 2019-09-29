/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Exception } from "./exception";
export class StatusBar {
    constructor() {
        // #region Properties
        // #region Properties
        this.statusBar = '';
        this.statusBarClass = '';
        // #endregion
        // #endregion
    }
    // #endregion
    // #region Constructors
    // #endregion
    // #region Public Methods
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
        this.statusBar = 'Daten löschen...';
        this.statusBarClass = 'apa-statusbar-info';
    }
    /**
     * @return {?}
     */
    setStatusBarDeleteDataCanceled() {
        this.statusBar = 'Löschen abgebrochen.';
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
    StatusBar.prototype.statusBar;
    /** @type {?} */
    StatusBar.prototype.statusBarClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2RvbWFpbi9zdGF0dXMtYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhDLE1BQU0sT0FBTyxTQUFTO0lBQXRCO1FBQ0kscUJBQXFCOztRQUVyQixjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBbUU1QixhQUFhO1FBRWIsYUFBYTtJQUNqQixDQUFDOzs7Ozs7Ozs7SUExREcsY0FBYztRQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVELFlBQVksQ0FBQyxJQUFhLEVBQUUsS0FBYztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxvQkFBb0I7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQztRQUN0QyxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxzQkFBc0I7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCw4QkFBOEI7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsSUFBWTtRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsSUFBWTtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLHFCQUFxQixDQUFDO0lBQ2hELENBQUM7Ozs7SUFFRCx1QkFBdUI7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLHFCQUFxQixDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQscUJBQXFCLENBQUMsU0FBb0I7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxxQkFBcUIsQ0FBQztJQUNoRCxDQUFDO0NBS0o7OztJQXZFRyw4QkFBdUI7O0lBQ3ZCLG1DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4Y2VwdGlvbiB9IGZyb20gXCIuL2V4Y2VwdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhciB7XHJcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcclxuXHJcbiAgICBzdGF0dXNCYXI6IHN0cmluZyA9ICcnO1xyXG4gICAgc3RhdHVzQmFyQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yc1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFB1YmxpYyBNZXRob2RzXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBTZXQgU3RhdHVzQmFyXHJcblxyXG4gICAgY2xlYXJTdGF0dXNCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSAnJztcclxuICAgICAgICB0aGlzLnN0YXR1c0JhckNsYXNzID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdHVzQmFyKHRleHQ/OiBzdHJpbmcsIHN0eWxlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSB0ZXh0ID8gdGV4dCA6ICcnO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyQ2xhc3MgPSBzdHlsZSA/IHN0eWxlIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdHVzQmFyQ29weURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSAnRGF0ZW4ga29waWVyZW4uLi4nO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyQ2xhc3MgPSAnYXBhLXN0YXR1c2Jhci1pbmZvJztcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0dXNCYXJMb2FkRGF0YSgpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c0JhciA9ICdEYXRlbiBsYWRlbi4uLic7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWluZm8nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXR1c0JhclNhdmVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gJ0RhdGVuIHNwZWljaGVybi4uLic7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWluZm8nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXR1c0JhckRlbGV0ZURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSAnRGF0ZW4gbMO2c2NoZW4uLi4nO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyQ2xhc3MgPSAnYXBhLXN0YXR1c2Jhci1pbmZvJztcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0dXNCYXJEZWxldGVEYXRhQ2FuY2VsZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSAnTMO2c2NoZW4gYWJnZWJyb2NoZW4uJztcclxuICAgICAgICB0aGlzLnN0YXR1c0JhckNsYXNzID0gJ2FwYS1zdGF0dXNiYXItaW5mbyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdHVzQmFySW5mbyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWluZm8nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXR1c0JhckVycm9yKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gdGV4dDtcclxuICAgICAgICB0aGlzLnN0YXR1c0JhckNsYXNzID0gJ2FwYS1zdGF0dXNiYXItZXJyb3InO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXR1c0Jhck5vRGF0YUZvdW5kKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gJ0tlaW5lIERhdGVuIGdlZnVuZGVuISc7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWVycm9yJztcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0dXNCYXJFeGNlcHRpb24oZXhjZXB0aW9uOiBFeGNlcHRpb24pIHtcclxuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IEV4Y2VwdGlvbi5nZXRPbmVMaW5lTWVzc2FnZShleGNlcHRpb24pO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyQ2xhc3MgPSAnYXBhLXN0YXR1c2Jhci1lcnJvcic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=