/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserControlBase } from './../base/user-control-base';
import { BrowserService } from '../../service/browser/browser.service';
import { InjectorService } from '../../service/injector/injector.service';
import { Viewport } from '../../service/browser/viewport';
export class Blade extends UserControlBase {
    // #endregion
    // #endregion
    // #region Constructors
    // mainService: MainService, 
    /**
     * @param {?=} path
     * @param {?=} title
     * @param {?=} subtitle
     * @param {?=} width
     */
    constructor(path = '', title = '', subtitle = '', width = 200) {
        super();
        this.viewport = new Viewport();
        // bladeId: string = '';
        this._bladeId = '';
        /**
         * HACK:2016-11-06/hp: [angular-portal-blade] needs [this] as the controller.
         * We don't know how to provide [this] to the directive.
         * So we came up with this [vm] property.
         */
        this.vm = {};
        this.visibility = 'collapse';
        this.title = '';
        this.subTitle = '';
        this.width = '0';
        this.widthStackLayout = { 'width': '50px' };
        this.height = '0';
        this.isInnerHtml = true;
        // #endregion
        // #region Commands
        this.isCommandBrowse = false;
        this.commandBrowse = (/**
         * @return {?}
         */
        () => { this.onCommandBrowse(); });
        this.commandBrowseText = '';
        this.isCommandCancel = false;
        this.commandCancel = (/**
         * @return {?}
         */
        () => { this.onCommandCancel(); });
        this.commandCancelText = '';
        this.isCommandCopy = false;
        this.isCommandCopyEnabled = true;
        this.commandCopy = (/**
         * @return {?}
         */
        () => { this.onCommandCopy(); });
        this.commandCopyText = '';
        this.isCommandDelete = false;
        this.isCommandDeleteEnabled = true;
        this.commandDelete = (/**
         * @return {?}
         */
        () => { this.onCommandDelete(); });
        this.commandDeleteText = '';
        this.isCommandDocument = false;
        this.commandDocument = (/**
         * @return {?}
         */
        () => { this.onCommandDocument(); });
        this.commandDocumentText = '';
        this.isCommandDocument2 = false;
        this.commandDocument2 = (/**
         * @return {?}
         */
        () => { this.onCommandDocument2(); });
        this.commandDocument2Text = '';
        this.isCommandDocument3 = false;
        this.commandDocument3 = (/**
         * @return {?}
         */
        () => { this.onCommandDocument3(); });
        this.commandDocument3Text = '';
        this.isCommandDocument4 = false;
        this.commandDocument4 = (/**
         * @return {?}
         */
        () => { this.onCommandDocument4(); });
        this.commandDocument4Text = '';
        this.isCommandDocument5 = false;
        this.commandDocument5 = (/**
         * @return {?}
         */
        () => { this.onCommandDocument5(); });
        this.commandDocument5Text = '';
        this.isCommandNew = false;
        this.commandNew = (/**
         * @return {?}
         */
        () => { this.onCommandNew(); });
        this.commandNewText = '';
        this.isCommandOrder = false;
        this.commandOrder = (/**
         * @return {?}
         */
        () => { this.onCommandOrder(); });
        this.commandOrderText = '';
        this.isCommandRestart = false;
        this.commandRestart = (/**
         * @return {?}
         */
        () => { this.onCommandRestart(); });
        this.commandRestartText = '';
        this.isCommandSave = false;
        this.isCommandSaveEnabled = true;
        this.commandSave = (/**
         * @return {?}
         */
        () => { this.onCommandSave(); });
        this.commandSaveText = '';
        this.isCommandSearch = false;
        this.commandSearch = (/**
         * @return {?}
         */
        () => { this.onCommandSearch(); });
        this.commandSearchText = '';
        this.isCommandStart = false;
        this.commandStart = (/**
         * @return {?}
         */
        () => { this.onCommandStart(); });
        this.commandStartText = '';
        this.isCommandStop = false;
        this.commandStop = (/**
         * @return {?}
         */
        () => { this.onCommandStop(); });
        this.commandStopText = '';
        this.isCommandSwap = false;
        this.commandSwap = (/**
         * @return {?}
         */
        () => { this.onCommandSwap(); });
        this.commandSwapText = '';
        this.isCommandExcel = false;
        this.commandExcel = (/**
         * @return {?}
         */
        () => { this.onCommandExcel(); });
        this.commandExcelText = '';
        this.browserService = InjectorService.getInjector().get(BrowserService);
        this.browserService.onResize.subscribe((/**
         * @param {?} viewport
         * @return {?}
         */
        (viewport) => this.viewport = viewport));
        this.vm = this;
        this.path = path;
        this.title = title;
        this.subTitle = subtitle;
        this.width = width + 'px';
        this.widthStackLayout.width = width - 50 + 'px'; // 50 = padding (left and right)
        //if (!mainService) { throw new Error('[Blade] constructor parameter \'mainService\' must be provided.'); }
        if (!path) {
            throw new Error('[Blade] constructor parameter \'path\' must be a string.');
        }
        if (!title && title !== '') {
            throw new Error('[Blade] constructor parameter \'title\' must be a string when provided.');
        }
        if (!subtitle && subtitle !== '') {
            throw new Error('[Blade] constructor parameter \'subtitle\' must be a string when provided.');
        }
        if (!width && width !== 0) {
            throw new Error('[Blade] constructor parameter \'width\' must be a number when provided.');
        }
        if (width < 50) {
            throw new Error('[Blade] constructor parameter \'width\' must be at least 50.');
        }
        // Set 'this.mainService.areaBlades.blades[index]' to 'this'
        //     'this.mainService.areaBlades.blades[index]' was generated during AddBlade
        //this.mainService.areaBlades.blades.forEach((blade, index) => {
        //    if (blade.path != null && this.path != null && blade.path.toLowerCase() === this.path.toLowerCase()) {
        //        this.mainService.areaBlades.blades[index] = this;
        //    }
        //});
        //this.browserWindow.setupWindowResizeListener(() => { this.setBladeHeights(); });
        this.setBladeHeights();
    }
    /**
     * @return {?}
     */
    get bladeId() {
        return this._bladeId;
    }
    /**
     * @param {?} bladeId
     * @return {?}
     */
    set bladeId(bladeId) {
        if (bladeId == null) {
            return;
        }
        this._bladeId = bladeId.toLowerCase();
    }
    /**
     * @return {?}
     */
    get path() {
        return this._path;
    }
    // For the moment we do distinguish between lower and upper case path name
    /**
     * @param {?} newPath
     * @return {?}
     */
    set path(newPath) {
        if (newPath == null) {
            return;
        }
        this._path = newPath.toLowerCase();
    }
    // #endregion
    // #region Angular Methods
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log('ngOnInit');
    }
    // #endregion
    // #region Public Methods
    /**
     * @return {?}
     */
    activate() {
        this.onActivate();
        this.onActivated();
    }
    /**
     * @param {?} path
     * @return {?}
     */
    navigateTo(path) {
        this.onNavigateTo(path);
    }
    /**
     * Must be overridden.
     * @param {?} value
     * @return {?}
     */
    onNavigateTo(value) {
        throw new Error('[Blade] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
    }
    // At the moment we do not distinguish between lower and upper case path name
    /**
     * @param {?} path1
     * @param {?} path2
     * @return {?}
     */
    comparePaths(path1, path2) {
        if (path1 == null) {
            return false;
        }
        if (path2 == null) {
            return false;
        }
        if (path1.toLowerCase() === path2.toLowerCase()) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * close blade.
     * @return {?}
     */
    close() {
        if (!this.onClose) {
            return; // do not close blade
        }
        //if (this.mainService.areaBlades !== undefined) {
        //    this.mainService.areaBlades.clearPath(this.path);
        //} else {
        //    throw new Error('[Blade] path: \'' + this.path + '\' could not be removed, since no \'this.mainService.areaBlades\' available.');
        //}
    }
    /**
     * Override
     * @return {?}
     */
    onClose() {
        return true;
    }
    ///** Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2] */
    //setTitle(watchExpression: string, func: () => void) {
    //    if (this.watcherTitle === undefined) {
    //        if (this.$scope !== null) {
    //            // angular1
    //            this.watcherTitle = this.$scope.$watch(watchExpression, () => { func(); });
    //            this.$scope.$on('$destroy', () => { this.watcherTitle(); });
    //        } else {
    //            // angular2
    //        }
    //    }
    //}
    // #region Commands
    /**
     * @return {?}
     */
    onCommandBrowse() {
        throw new Error('[Blade] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandCancel() {
        throw new Error('[Blade] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandCopy() {
        throw new Error('[Blade] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandDelete() {
        throw new Error('[Blade] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandDocument() {
        throw new Error('[Blade] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandDocument2() {
        throw new Error('[Blade] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandDocument3() {
        throw new Error('[Blade] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandDocument4() {
        throw new Error('[Blade] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandDocument5() {
        throw new Error('[Blade] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandNew() {
        throw new Error('[Blade] \'onCommandNew\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandOrder() {
        throw new Error('[Blade] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandRestart() {
        throw new Error('[Blade] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandSave() {
        throw new Error('[Blade] \'onCommandSave\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandSearch() {
        throw new Error('[Blade] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandStart() {
        throw new Error('[Blade] \'onCommandStart\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandStop() {
        throw new Error('[Blade] \'onCommandStop\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandSwap() {
        throw new Error('[Blade] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
    }
    /**
     * @return {?}
     */
    onCommandExcel() {
        throw new Error('[Blade] \'onCommandExcel\' is an abstract function. Define one in the derived class.');
    }
    // #endregion
    // #endregion
    // #region Private Methods
    /**
     * @private
     * @return {?}
     */
    setBladeHeights() {
        //this.bladeContentHeight = this.mainService.browserWindowService.browserWindow.innerHeight - 40 - 125; // 40 = topbar, 125 = blade header
        this.bladeContentHeightInner = this.bladeContentHeight - 50 - 3; // 50 = padding (top and bottom), somehow we miss 3px
        // this.mainService.$timeout(() => {
        // }, 50);
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Blade.prototype.browserService;
    /** @type {?} */
    Blade.prototype.viewport;
    /**
     * @type {?}
     * @private
     */
    Blade.prototype._bladeId;
    /**
     * HACK:2016-11-06/hp: [angular-portal-blade] needs [this] as the controller.
     * We don't know how to provide [this] to the directive.
     * So we came up with this [vm] property.
     * @type {?}
     */
    Blade.prototype.vm;
    /** @type {?} */
    Blade.prototype.statusBar;
    /** @type {?} */
    Blade.prototype.visibility;
    /**
     * @type {?}
     * @private
     */
    Blade.prototype.watcherTitle;
    /** @type {?} */
    Blade.prototype.bladeContentHeight;
    /** @type {?} */
    Blade.prototype.bladeContentHeightInner;
    /** @type {?} */
    Blade.prototype.title;
    /** @type {?} */
    Blade.prototype.subTitle;
    /** @type {?} */
    Blade.prototype.width;
    /** @type {?} */
    Blade.prototype.widthStackLayout;
    /** @type {?} */
    Blade.prototype.height;
    /** @type {?} */
    Blade.prototype.isInnerHtml;
    /** @type {?} */
    Blade.prototype.formblade;
    /**
     * @type {?}
     * @private
     */
    Blade.prototype._path;
    /** @type {?} */
    Blade.prototype.isCommandBrowse;
    /** @type {?} */
    Blade.prototype.commandBrowse;
    /** @type {?} */
    Blade.prototype.commandBrowseText;
    /** @type {?} */
    Blade.prototype.isCommandCancel;
    /** @type {?} */
    Blade.prototype.commandCancel;
    /** @type {?} */
    Blade.prototype.commandCancelText;
    /** @type {?} */
    Blade.prototype.isCommandCopy;
    /** @type {?} */
    Blade.prototype.isCommandCopyEnabled;
    /** @type {?} */
    Blade.prototype.commandCopy;
    /** @type {?} */
    Blade.prototype.commandCopyText;
    /** @type {?} */
    Blade.prototype.isCommandDelete;
    /** @type {?} */
    Blade.prototype.isCommandDeleteEnabled;
    /** @type {?} */
    Blade.prototype.commandDelete;
    /** @type {?} */
    Blade.prototype.commandDeleteText;
    /** @type {?} */
    Blade.prototype.isCommandDocument;
    /** @type {?} */
    Blade.prototype.commandDocument;
    /** @type {?} */
    Blade.prototype.commandDocumentText;
    /** @type {?} */
    Blade.prototype.isCommandDocument2;
    /** @type {?} */
    Blade.prototype.commandDocument2;
    /** @type {?} */
    Blade.prototype.commandDocument2Text;
    /** @type {?} */
    Blade.prototype.isCommandDocument3;
    /** @type {?} */
    Blade.prototype.commandDocument3;
    /** @type {?} */
    Blade.prototype.commandDocument3Text;
    /** @type {?} */
    Blade.prototype.isCommandDocument4;
    /** @type {?} */
    Blade.prototype.commandDocument4;
    /** @type {?} */
    Blade.prototype.commandDocument4Text;
    /** @type {?} */
    Blade.prototype.isCommandDocument5;
    /** @type {?} */
    Blade.prototype.commandDocument5;
    /** @type {?} */
    Blade.prototype.commandDocument5Text;
    /** @type {?} */
    Blade.prototype.isCommandNew;
    /** @type {?} */
    Blade.prototype.commandNew;
    /** @type {?} */
    Blade.prototype.commandNewText;
    /** @type {?} */
    Blade.prototype.isCommandOrder;
    /** @type {?} */
    Blade.prototype.commandOrder;
    /** @type {?} */
    Blade.prototype.commandOrderText;
    /** @type {?} */
    Blade.prototype.isCommandRestart;
    /** @type {?} */
    Blade.prototype.commandRestart;
    /** @type {?} */
    Blade.prototype.commandRestartText;
    /** @type {?} */
    Blade.prototype.isCommandSave;
    /** @type {?} */
    Blade.prototype.isCommandSaveEnabled;
    /** @type {?} */
    Blade.prototype.commandSave;
    /** @type {?} */
    Blade.prototype.commandSaveText;
    /** @type {?} */
    Blade.prototype.isCommandSearch;
    /** @type {?} */
    Blade.prototype.commandSearch;
    /** @type {?} */
    Blade.prototype.commandSearchText;
    /** @type {?} */
    Blade.prototype.isCommandStart;
    /** @type {?} */
    Blade.prototype.commandStart;
    /** @type {?} */
    Blade.prototype.commandStartText;
    /** @type {?} */
    Blade.prototype.isCommandStop;
    /** @type {?} */
    Blade.prototype.commandStop;
    /** @type {?} */
    Blade.prototype.commandStopText;
    /** @type {?} */
    Blade.prototype.isCommandSwap;
    /** @type {?} */
    Blade.prototype.commandSwap;
    /** @type {?} */
    Blade.prototype.commandSwapText;
    /** @type {?} */
    Blade.prototype.isCommandExcel;
    /** @type {?} */
    Blade.prototype.commandExcel;
    /** @type {?} */
    Blade.prototype.commandExcelText;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vYmxhZGUvYmxhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUUxRCxNQUFNLE9BQU8sS0FBTSxTQUFRLGVBQWU7Ozs7Ozs7Ozs7O0lBMkl0QyxZQUFZLE9BQWUsRUFBRSxFQUFFLFFBQWdCLEVBQUUsRUFBRSxXQUFtQixFQUFFLEVBQUUsUUFBZ0IsR0FBRztRQUN6RixLQUFLLEVBQUUsQ0FBQztRQXhJWixhQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQzs7UUFHNUIsYUFBUSxHQUFXLEVBQUUsQ0FBQzs7Ozs7O1FBWTlCLE9BQUUsR0FBUSxFQUFFLENBQUM7UUFJYixlQUFVLEdBQVcsVUFBVSxDQUFDO1FBT2hDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixVQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ1oscUJBQWdCLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFFdkMsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUViLGdCQUFXLEdBQVksSUFBSSxDQUFDOzs7UUFvQjVCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLGtCQUFhOzs7UUFBZSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDOUQsc0JBQWlCLEdBQVcsRUFBRSxDQUFDO1FBRS9CLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FB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QyxnQ0FBa0U7O0lBQ2xFLG9DQUFpQzs7SUFFakMsbUNBQW9DOztJQUNwQyxpQ0FBb0U7O0lBQ3BFLHFDQUFrQzs7SUFFbEMsbUNBQW9DOztJQUNwQyxpQ0FBb0U7O0lBQ3BFLHFDQUFrQzs7SUFFbEMsbUNBQW9DOztJQUNwQyxpQ0FBb0U7O0lBQ3BFLHFDQUFrQzs7SUFFbEMsbUNBQW9DOztJQUNwQyxpQ0FBb0U7O0lBQ3BFLHFDQUFrQzs7SUFFbEMsNkJBQThCOztJQUM5QiwyQkFBd0Q7O0lBQ3hELCtCQUE0Qjs7SUFFNUIsK0JBQWdDOztJQUNoQyw2QkFBNEQ7O0lBQzVELGlDQUE4Qjs7SUFFOUIsaUNBQWtDOztJQUNsQywrQkFBZ0U7O0lBQ2hFLG1DQUFnQzs7SUFFaEMsOEJBQStCOztJQUMvQixxQ0FBcUM7O0lBQ3JDLDRCQUEwRDs7SUFDMUQsZ0NBQTZCOztJQUU3QixnQ0FBaUM7O0lBQ2pDLDhCQUE4RDs7SUFDOUQsa0NBQStCOztJQUUvQiwrQkFBZ0M7O0lBQ2hDLDZCQUE0RDs7SUFDNUQsaUNBQThCOztJQUU5Qiw4QkFBK0I7O0lBQy9CLDRCQUEwRDs7SUFDMUQsZ0NBQTZCOztJQUU3Qiw4QkFBK0I7O0lBQy9CLDRCQUEwRDs7SUFDMUQsZ0NBQTZCOztJQUU3QiwrQkFBZ0M7O0lBQ2hDLDZCQUE0RDs7SUFDNUQsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnLi8uLi9zdGF0dXMtYmFyJztcclxuaW1wb3J0IHsgVXNlckNvbnRyb2xCYXNlIH0gZnJvbSAnLi8uLi9iYXNlL3VzZXItY29udHJvbC1iYXNlJztcclxuXHJcbmltcG9ydCB7IEJyb3dzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9icm93c2VyL2Jyb3dzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEluamVjdG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvaW5qZWN0b3IvaW5qZWN0b3Iuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBWaWV3cG9ydCB9IGZyb20gJy4uLy4uL3NlcnZpY2UvYnJvd3Nlci92aWV3cG9ydCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxhZGUgZXh0ZW5kcyBVc2VyQ29udHJvbEJhc2Uge1xyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgcHJpdmF0ZSBicm93c2VyU2VydmljZTogQnJvd3NlclNlcnZpY2U7XHJcbiAgICB2aWV3cG9ydDogVmlld3BvcnQgPSBuZXcgVmlld3BvcnQoKTtcclxuXHJcbiAgICAvLyBibGFkZUlkOiBzdHJpbmcgPSAnJztcclxuICAgIHByaXZhdGUgX2JsYWRlSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgZ2V0IGJsYWRlSWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmxhZGVJZDtcclxuICAgIH1cclxuICAgIHNldCBibGFkZUlkKGJsYWRlSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChibGFkZUlkID09IG51bGwpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5fYmxhZGVJZCA9IGJsYWRlSWQudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogSEFDSzoyMDE2LTExLTA2L2hwOiBbYW5ndWxhci1wb3J0YWwtYmxhZGVdIG5lZWRzIFt0aGlzXSBhcyB0aGUgY29udHJvbGxlci5cclxuICAgIFdlIGRvbid0IGtub3cgaG93IHRvIHByb3ZpZGUgW3RoaXNdIHRvIHRoZSBkaXJlY3RpdmUuXHJcbiAgICBTbyB3ZSBjYW1lIHVwIHdpdGggdGhpcyBbdm1dIHByb3BlcnR5LiovXHJcbiAgICB2bTogYW55ID0ge307XHJcblxyXG4gICAgc3RhdHVzQmFyOiBTdGF0dXNCYXI7XHJcblxyXG4gICAgdmlzaWJpbGl0eTogc3RyaW5nID0gJ2NvbGxhcHNlJztcclxuXHJcbiAgICBwcml2YXRlIHdhdGNoZXJUaXRsZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBibGFkZUNvbnRlbnRIZWlnaHQ6IG51bWJlcjtcclxuICAgIGJsYWRlQ29udGVudEhlaWdodElubmVyOiBudW1iZXI7XHJcblxyXG4gICAgdGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gICAgc3ViVGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gICAgd2lkdGggPSAnMCc7XHJcbiAgICB3aWR0aFN0YWNrTGF5b3V0ID0geyAnd2lkdGgnOiAnNTBweCcgfTtcclxuXHJcbiAgICBoZWlnaHQgPSAnMCc7XHJcblxyXG4gICAgaXNJbm5lckh0bWw6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGZvcm1ibGFkZTogYW55OyAvLyBhbmd1bGFyLklGb3JtQ29udHJvbGxlcjsgLy8gbmFtZSBvZiB0aGUgbmctZm9ybSBkaXJlY3RpdmVcclxuXHJcbiAgICAvLyAjcmVnaW9uIHBhdGhcclxuXHJcbiAgICBwcml2YXRlIF9wYXRoOiBzdHJpbmc7XHJcbiAgICBnZXQgcGF0aCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRoO1xyXG4gICAgfVxyXG4gICAgLy8gRm9yIHRoZSBtb21lbnQgd2UgZG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgY2FzZSBwYXRoIG5hbWVcclxuICAgIHNldCBwYXRoKG5ld1BhdGg6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChuZXdQYXRoID09IG51bGwpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5fcGF0aCA9IG5ld1BhdGgudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBDb21tYW5kc1xyXG5cclxuICAgIGlzQ29tbWFuZEJyb3dzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29tbWFuZEJyb3dzZTogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmRCcm93c2UoKTsgfTtcclxuICAgIGNvbW1hbmRCcm93c2VUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpc0NvbW1hbmRDYW5jZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbW1hbmRDYW5jZWw6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kQ2FuY2VsKCk7IH07XHJcbiAgICBjb21tYW5kQ2FuY2VsVGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgaXNDb21tYW5kQ29weTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNDb21tYW5kQ29weUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgY29tbWFuZENvcHk6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kQ29weSgpOyB9O1xyXG4gICAgY29tbWFuZENvcHlUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpc0NvbW1hbmREZWxldGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzQ29tbWFuZERlbGV0ZUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgY29tbWFuZERlbGV0ZTogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmREZWxldGUoKTsgfTtcclxuICAgIGNvbW1hbmREZWxldGVUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpc0NvbW1hbmREb2N1bWVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29tbWFuZERvY3VtZW50OiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZERvY3VtZW50KCk7IH07XHJcbiAgICBjb21tYW5kRG9jdW1lbnRUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpc0NvbW1hbmREb2N1bWVudDI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbW1hbmREb2N1bWVudDI6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kRG9jdW1lbnQyKCk7IH07XHJcbiAgICBjb21tYW5kRG9jdW1lbnQyVGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgaXNDb21tYW5kRG9jdW1lbnQzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb21tYW5kRG9jdW1lbnQzOiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZERvY3VtZW50MygpOyB9O1xyXG4gICAgY29tbWFuZERvY3VtZW50M1RleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGlzQ29tbWFuZERvY3VtZW50NDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29tbWFuZERvY3VtZW50NDogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmREb2N1bWVudDQoKTsgfTtcclxuICAgIGNvbW1hbmREb2N1bWVudDRUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpc0NvbW1hbmREb2N1bWVudDU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbW1hbmREb2N1bWVudDU6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kRG9jdW1lbnQ1KCk7IH07XHJcbiAgICBjb21tYW5kRG9jdW1lbnQ1VGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgaXNDb21tYW5kTmV3OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb21tYW5kTmV3OiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZE5ldygpOyB9O1xyXG4gICAgY29tbWFuZE5ld1RleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGlzQ29tbWFuZE9yZGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb21tYW5kT3JkZXI6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kT3JkZXIoKTsgfTtcclxuICAgIGNvbW1hbmRPcmRlclRleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGlzQ29tbWFuZFJlc3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbW1hbmRSZXN0YXJ0OiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZFJlc3RhcnQoKTsgfTtcclxuICAgIGNvbW1hbmRSZXN0YXJ0VGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgaXNDb21tYW5kU2F2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNDb21tYW5kU2F2ZUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgY29tbWFuZFNhdmU6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kU2F2ZSgpOyB9O1xyXG4gICAgY29tbWFuZFNhdmVUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpc0NvbW1hbmRTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbW1hbmRTZWFyY2g6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kU2VhcmNoKCk7IH07XHJcbiAgICBjb21tYW5kU2VhcmNoVGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgaXNDb21tYW5kU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbW1hbmRTdGFydDogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmRTdGFydCgpOyB9O1xyXG4gICAgY29tbWFuZFN0YXJ0VGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgaXNDb21tYW5kU3RvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29tbWFuZFN0b3A6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kU3RvcCgpOyB9O1xyXG4gICAgY29tbWFuZFN0b3BUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpc0NvbW1hbmRTd2FwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb21tYW5kU3dhcDogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmRTd2FwKCk7IH07XHJcbiAgICBjb21tYW5kU3dhcFRleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGlzQ29tbWFuZEV4Y2VsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb21tYW5kRXhjZWw6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kRXhjZWwoKTsgfTtcclxuICAgIGNvbW1hbmRFeGNlbFRleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvcnNcclxuXHJcbiAgICAvLyBtYWluU2VydmljZTogTWFpblNlcnZpY2UsIFxyXG4gICAgY29uc3RydWN0b3IocGF0aDogc3RyaW5nID0gJycsIHRpdGxlOiBzdHJpbmcgPSAnJywgc3VidGl0bGU6IHN0cmluZyA9ICcnLCB3aWR0aDogbnVtYmVyID0gMjAwKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmJyb3dzZXJTZXJ2aWNlID0gSW5qZWN0b3JTZXJ2aWNlLmdldEluamVjdG9yKCkuZ2V0KEJyb3dzZXJTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmJyb3dzZXJTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodmlld3BvcnQpID0+IHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydCk7XHJcblxyXG4gICAgICAgIHRoaXMudm0gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuc3ViVGl0bGUgPSBzdWJ0aXRsZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG4gICAgICAgIHRoaXMud2lkdGhTdGFja0xheW91dC53aWR0aCA9IHdpZHRoIC0gNTAgKyAncHgnOyAgLy8gNTAgPSBwYWRkaW5nIChsZWZ0IGFuZCByaWdodClcclxuXHJcbiAgICAgICAgLy9pZiAoIW1haW5TZXJ2aWNlKSB7IHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgXFwnbWFpblNlcnZpY2VcXCcgbXVzdCBiZSBwcm92aWRlZC4nKTsgfVxyXG4gICAgICAgIGlmICghcGF0aCkgeyB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gY29uc3RydWN0b3IgcGFyYW1ldGVyIFxcJ3BhdGhcXCcgbXVzdCBiZSBhIHN0cmluZy4nKTsgfVxyXG4gICAgICAgIGlmICghdGl0bGUgJiYgdGl0bGUgIT09ICcnKSB7IHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgXFwndGl0bGVcXCcgbXVzdCBiZSBhIHN0cmluZyB3aGVuIHByb3ZpZGVkLicpOyB9XHJcbiAgICAgICAgaWYgKCFzdWJ0aXRsZSAmJiBzdWJ0aXRsZSAhPT0gJycpIHsgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIGNvbnN0cnVjdG9yIHBhcmFtZXRlciBcXCdzdWJ0aXRsZVxcJyBtdXN0IGJlIGEgc3RyaW5nIHdoZW4gcHJvdmlkZWQuJyk7IH1cclxuICAgICAgICBpZiAoIXdpZHRoICYmIHdpZHRoICE9PSAwKSB7IHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgXFwnd2lkdGhcXCcgbXVzdCBiZSBhIG51bWJlciB3aGVuIHByb3ZpZGVkLicpOyB9XHJcblxyXG4gICAgICAgIGlmICh3aWR0aCA8IDUwKSB7IHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgXFwnd2lkdGhcXCcgbXVzdCBiZSBhdCBsZWFzdCA1MC4nKTsgfVxyXG5cclxuICAgICAgICAvLyBTZXQgJ3RoaXMubWFpblNlcnZpY2UuYXJlYUJsYWRlcy5ibGFkZXNbaW5kZXhdJyB0byAndGhpcydcclxuICAgICAgICAvLyAgICAgJ3RoaXMubWFpblNlcnZpY2UuYXJlYUJsYWRlcy5ibGFkZXNbaW5kZXhdJyB3YXMgZ2VuZXJhdGVkIGR1cmluZyBBZGRCbGFkZVxyXG4gICAgICAgIC8vdGhpcy5tYWluU2VydmljZS5hcmVhQmxhZGVzLmJsYWRlcy5mb3JFYWNoKChibGFkZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAvLyAgICBpZiAoYmxhZGUucGF0aCAhPSBudWxsICYmIHRoaXMucGF0aCAhPSBudWxsICYmIGJsYWRlLnBhdGgudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy5wYXRoLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAvLyAgICAgICAgdGhpcy5tYWluU2VydmljZS5hcmVhQmxhZGVzLmJsYWRlc1tpbmRleF0gPSB0aGlzO1xyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICAvL3RoaXMuYnJvd3NlcldpbmRvdy5zZXR1cFdpbmRvd1Jlc2l6ZUxpc3RlbmVyKCgpID0+IHsgdGhpcy5zZXRCbGFkZUhlaWdodHMoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRCbGFkZUhlaWdodHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBBbmd1bGFyIE1ldGhvZHNcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmdPbkluaXQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQdWJsaWMgTWV0aG9kc1xyXG5cclxuICAgIGFjdGl2YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25BY3RpdmF0ZSgpO1xyXG4gICAgICAgIHRoaXMub25BY3RpdmF0ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZVRvKHBhdGg6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25OYXZpZ2F0ZVRvKHBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBNdXN0IGJlIG92ZXJyaWRkZW4uICovXHJcbiAgICBvbk5hdmlnYXRlVG8odmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbk5hdmlnYXRlVG9cXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXQgdGhlIG1vbWVudCB3ZSBkbyBub3QgZGlzdGluZ3Vpc2ggYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgY2FzZSBwYXRoIG5hbWVcclxuICAgIGNvbXBhcmVQYXRocyhwYXRoMTogc3RyaW5nLCBwYXRoMjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHBhdGgxID09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICAgICAgaWYgKHBhdGgyID09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICAgICAgaWYgKHBhdGgxLnRvTG93ZXJDYXNlKCkgPT09IHBhdGgyLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogY2xvc2UgYmxhZGUuICovXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMub25DbG9zZSkge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIGRvIG5vdCBjbG9zZSBibGFkZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9pZiAodGhpcy5tYWluU2VydmljZS5hcmVhQmxhZGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyAgICB0aGlzLm1haW5TZXJ2aWNlLmFyZWFCbGFkZXMuY2xlYXJQYXRoKHRoaXMucGF0aCk7XHJcbiAgICAgICAgLy99IGVsc2Uge1xyXG4gICAgICAgIC8vICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBwYXRoOiBcXCcnICsgdGhpcy5wYXRoICsgJ1xcJyBjb3VsZCBub3QgYmUgcmVtb3ZlZCwgc2luY2Ugbm8gXFwndGhpcy5tYWluU2VydmljZS5hcmVhQmxhZGVzXFwnIGF2YWlsYWJsZS4nKTtcclxuICAgICAgICAvL31cclxuICAgIH1cclxuXHJcbiAgICAvKiogT3ZlcnJpZGUgKi9cclxuICAgIG9uQ2xvc2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vKiogQ2hhbmdlIHRpdGxlLCBhcyBzb29uIGFzIHdhdGNoRXhwcmVzc2lvbiBjaGFuZ2VzLiB3YXRjaEV4cHJlc3Npb24gaXMgZWl0aGVyIGEgdmFyaWFibGUgb3JlIGFuIGV4cHJlc3Npb24sIGUuZy4gW25hbWUxICsgbmFtZTJdICovXHJcbiAgICAvL3NldFRpdGxlKHdhdGNoRXhwcmVzc2lvbjogc3RyaW5nLCBmdW5jOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAvLyAgICBpZiAodGhpcy53YXRjaGVyVGl0bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICAgICAgIGlmICh0aGlzLiRzY29wZSAhPT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICAvLyBhbmd1bGFyMVxyXG4gICAgLy8gICAgICAgICAgICB0aGlzLndhdGNoZXJUaXRsZSA9IHRoaXMuJHNjb3BlLiR3YXRjaCh3YXRjaEV4cHJlc3Npb24sICgpID0+IHsgZnVuYygpOyB9KTtcclxuICAgIC8vICAgICAgICAgICAgdGhpcy4kc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHsgdGhpcy53YXRjaGVyVGl0bGUoKTsgfSk7XHJcbiAgICAvLyAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgLy8gYW5ndWxhcjJcclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICB9XHJcbiAgICAvL31cclxuXHJcbiAgICAvLyAjcmVnaW9uIENvbW1hbmRzXHJcblxyXG4gICAgb25Db21tYW5kQnJvd3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRCcm93c2VcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRDYW5jZWxcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kQ29weSgpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kQ29weVxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbW1hbmREZWxldGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZERlbGV0ZVxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbW1hbmREb2N1bWVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kRG9jdW1lbnRcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kRG9jdW1lbnQyKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmREb2N1bWVudDJcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kRG9jdW1lbnQzKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmREb2N1bWVudDNcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kRG9jdW1lbnQ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmREb2N1bWVudDRcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kRG9jdW1lbnQ1KCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmREb2N1bWVudDVcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kTmV3KCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmROZXdcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kT3JkZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZE9yZGVyXFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29tbWFuZFJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZFJlc3RhcnRcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kU2F2ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kU2F2ZVxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbW1hbmRTZWFyY2goKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZFNlYXJjaFxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbW1hbmRTdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kU3RhcnRcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kU3RvcFxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbW1hbmRTd2FwKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRTd2FwXFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29tbWFuZEV4Y2VsKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRFeGNlbFxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHJpdmF0ZSBNZXRob2RzXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRCbGFkZUhlaWdodHMoKTogdm9pZCB7XHJcbiAgICAgICAgLy90aGlzLmJsYWRlQ29udGVudEhlaWdodCA9IHRoaXMubWFpblNlcnZpY2UuYnJvd3NlcldpbmRvd1NlcnZpY2UuYnJvd3NlcldpbmRvdy5pbm5lckhlaWdodCAtIDQwIC0gMTI1OyAvLyA0MCA9IHRvcGJhciwgMTI1ID0gYmxhZGUgaGVhZGVyXHJcbiAgICAgICAgdGhpcy5ibGFkZUNvbnRlbnRIZWlnaHRJbm5lciA9IHRoaXMuYmxhZGVDb250ZW50SGVpZ2h0IC0gNTAgLSAzOyAvLyA1MCA9IHBhZGRpbmcgKHRvcCBhbmQgYm90dG9tKSwgc29tZWhvdyB3ZSBtaXNzIDNweFxyXG5cclxuICAgICAgICAvLyB0aGlzLm1haW5TZXJ2aWNlLiR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyB9LCA1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==