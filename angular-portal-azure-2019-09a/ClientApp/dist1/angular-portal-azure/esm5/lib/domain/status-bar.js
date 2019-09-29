/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Exception } from "./exception";
var StatusBar = /** @class */ (function () {
    function StatusBar() {
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
    // #endregion
    // #region Constructors
    // #endregion
    // #region Public Methods
    // #region Set StatusBar
    /**
     * @return {?}
     */
    StatusBar.prototype.clearStatusBar = 
    // #endregion
    // #region Constructors
    // #endregion
    // #region Public Methods
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
    StatusBar.prototype.setStatusBar = /**
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
    StatusBar.prototype.setStatusBarCopyData = /**
     * @return {?}
     */
    function () {
        this.statusBar = 'Daten kopieren...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    /**
     * @return {?}
     */
    StatusBar.prototype.setStatusBarLoadData = /**
     * @return {?}
     */
    function () {
        this.statusBar = 'Daten laden...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    /**
     * @return {?}
     */
    StatusBar.prototype.setStatusBarSaveData = /**
     * @return {?}
     */
    function () {
        this.statusBar = 'Daten speichern...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    /**
     * @return {?}
     */
    StatusBar.prototype.setStatusBarDeleteData = /**
     * @return {?}
     */
    function () {
        this.statusBar = 'Daten löschen...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    /**
     * @return {?}
     */
    StatusBar.prototype.setStatusBarDeleteDataCanceled = /**
     * @return {?}
     */
    function () {
        this.statusBar = 'Löschen abgebrochen.';
        this.statusBarClass = 'apa-statusbar-info';
    };
    /**
     * @param {?} text
     * @return {?}
     */
    StatusBar.prototype.setStatusBarInfo = /**
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
    StatusBar.prototype.setStatusBarError = /**
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
    StatusBar.prototype.setStatusBarNoDataFound = /**
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
    StatusBar.prototype.setStatusBarException = /**
     * @param {?} exception
     * @return {?}
     */
    function (exception) {
        this.statusBar = Exception.getOneLineMessage(exception);
        this.statusBarClass = 'apa-statusbar-error';
    };
    return StatusBar;
}());
export { StatusBar };
if (false) {
    /** @type {?} */
    StatusBar.prototype.statusBar;
    /** @type {?} */
    StatusBar.prototype.statusBarClass;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2RvbWFpbi9zdGF0dXMtYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhDO0lBQUE7UUFDSSxxQkFBcUI7O1FBRXJCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsbUJBQWMsR0FBVyxFQUFFLENBQUM7UUFtRTVCLGFBQWE7UUFFYixhQUFhO0lBQ2pCLENBQUM7SUFwRUcsYUFBYTtJQUViLHVCQUF1QjtJQUV2QixhQUFhO0lBRWIseUJBQXlCO0lBRXpCLHdCQUF3Qjs7Ozs7Ozs7O0lBRXhCLGtDQUFjOzs7Ozs7Ozs7SUFBZDtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7OztJQUVELGdDQUFZOzs7OztJQUFaLFVBQWEsSUFBYSxFQUFFLEtBQWM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUQsd0NBQW9COzs7SUFBcEI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQW9CLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELHdDQUFvQjs7O0lBQXBCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztRQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCx3Q0FBb0I7OztJQUFwQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsb0JBQW9CLENBQUM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsMENBQXNCOzs7SUFBdEI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFrQixDQUFDO1FBQ3BDLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQW9CLENBQUM7SUFDL0MsQ0FBQzs7OztJQUVELGtEQUE4Qjs7O0lBQTlCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxzQkFBc0IsQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsb0NBQWdCOzs7O0lBQWhCLFVBQWlCLElBQVk7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELHFDQUFpQjs7OztJQUFqQixVQUFrQixJQUFZO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUM7SUFDaEQsQ0FBQzs7OztJQUVELDJDQUF1Qjs7O0lBQXZCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLHFCQUFxQixDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQseUNBQXFCOzs7O0lBQXJCLFVBQXNCLFNBQW9CO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxjQUFjLEdBQUcscUJBQXFCLENBQUM7SUFDaEQsQ0FBQztJQUtMLGdCQUFDO0FBQUQsQ0FBQyxBQTFFRCxJQTBFQzs7OztJQXZFRyw4QkFBdUI7O0lBQ3ZCLG1DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4Y2VwdGlvbiB9IGZyb20gXCIuL2V4Y2VwdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhciB7XHJcbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcclxuXHJcbiAgICBzdGF0dXNCYXI6IHN0cmluZyA9ICcnO1xyXG4gICAgc3RhdHVzQmFyQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIENvbnN0cnVjdG9yc1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjcmVnaW9uIFB1YmxpYyBNZXRob2RzXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBTZXQgU3RhdHVzQmFyXHJcblxyXG4gICAgY2xlYXJTdGF0dXNCYXIoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSAnJztcclxuICAgICAgICB0aGlzLnN0YXR1c0JhckNsYXNzID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdHVzQmFyKHRleHQ/OiBzdHJpbmcsIHN0eWxlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSB0ZXh0ID8gdGV4dCA6ICcnO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyQ2xhc3MgPSBzdHlsZSA/IHN0eWxlIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdHVzQmFyQ29weURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSAnRGF0ZW4ga29waWVyZW4uLi4nO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyQ2xhc3MgPSAnYXBhLXN0YXR1c2Jhci1pbmZvJztcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0dXNCYXJMb2FkRGF0YSgpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c0JhciA9ICdEYXRlbiBsYWRlbi4uLic7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWluZm8nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXR1c0JhclNhdmVEYXRhKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gJ0RhdGVuIHNwZWljaGVybi4uLic7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWluZm8nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXR1c0JhckRlbGV0ZURhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSAnRGF0ZW4gbMO2c2NoZW4uLi4nO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyQ2xhc3MgPSAnYXBhLXN0YXR1c2Jhci1pbmZvJztcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0dXNCYXJEZWxldGVEYXRhQ2FuY2VsZWQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXIgPSAnTMO2c2NoZW4gYWJnZWJyb2NoZW4uJztcclxuICAgICAgICB0aGlzLnN0YXR1c0JhckNsYXNzID0gJ2FwYS1zdGF0dXNiYXItaW5mbyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdHVzQmFySW5mbyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWluZm8nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXR1c0JhckVycm9yKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gdGV4dDtcclxuICAgICAgICB0aGlzLnN0YXR1c0JhckNsYXNzID0gJ2FwYS1zdGF0dXNiYXItZXJyb3InO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXR1c0Jhck5vRGF0YUZvdW5kKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyID0gJ0tlaW5lIERhdGVuIGdlZnVuZGVuISc7XHJcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJDbGFzcyA9ICdhcGEtc3RhdHVzYmFyLWVycm9yJztcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0dXNCYXJFeGNlcHRpb24oZXhjZXB0aW9uOiBFeGNlcHRpb24pIHtcclxuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IEV4Y2VwdGlvbi5nZXRPbmVMaW5lTWVzc2FnZShleGNlcHRpb24pO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyQ2xhc3MgPSAnYXBhLXN0YXR1c2Jhci1lcnJvcic7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxufVxyXG4iXX0=