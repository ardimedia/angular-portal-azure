/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserControlBase } from './user-control-base';
export class Blade extends UserControlBase {
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    /**
     * @param {?} portalService
     * @param {?} path
     * @param {?} title
     * @param {?=} subtitle
     * @param {?=} width
     */
    constructor(portalService, path, title, subtitle = '', width = 200) {
        super(portalService); //$scope,
        // #endregion
        // #region Properties
        /**
         * HACK: 2016-11-06/hp
         * [angular-portal-blade] needs [this] as the controller.
         * We don't know how to provide [this] to the directive.
         * So we came up with this [vm] property.
         */
        this.vm = {};
        // Indicates if maximize icon is shown
        // TODO: 2019-09-26/hp: it probably should be named isMaximizedShown
        this.isMaximize = false;
        // TODO: 2019-09-26/hp: not sure what that is, checkout
        this.isCommandMore = false;
        // Indicates if this is a navigation blade
        this.isNav = false;
        // Indicates if this is a navigation grid blade
        this.isGrid = false;
        this.visibility = 'collapse';
        this.title = '';
        this.subTitle = '';
        this.width = { 'width': '0' };
        this.widthStackLayout = { 'width': '50px' };
        this.isInnerHtml = true;
        // #endregion
        // #endregion
        // #region Commands
        this.isCommandBrowse = false;
        this.isCommandBrowseEnabled = true;
        this.commandBrowse = (/**
         * @return {?}
         */
        () => { this.onCommandBrowse(); });
        this.commandBrowseText = '';
        this.isCommandCancel = false;
        this.isCommandCancelEnabled = true;
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
        this.isCommandDocumentEnabled = true;
        this.commandDocument = (/**
         * @return {?}
         */
        () => { this.onCommandDocument(); });
        this.commandDocumentText = '';
        this.isCommandDocument2 = false;
        this.isCommandDocument2Enabled = true;
        this.commandDocument2 = (/**
         * @return {?}
         */
        () => { this.onCommandDocument2(); });
        this.commandDocument2Text = '';
        this.isCommandDocument3 = false;
        this.isCommandDocument3Enabled = true;
        this.commandDocument3 = (/**
         * @return {?}
         */
        () => { this.onCommandDocument3(); });
        this.commandDocument3Text = '';
        this.isCommandDocument4 = false;
        this.isCommandDocument4Enabled = true;
        this.commandDocument4 = (/**
         * @return {?}
         */
        () => { this.onCommandDocument4(); });
        this.commandDocument4Text = '';
        this.isCommandDocument5 = false;
        this.isCommandDocument5Enabled = true;
        this.commandDocument5 = (/**
         * @return {?}
         */
        () => { this.onCommandDocument5(); });
        this.commandDocument5Text = '';
        this.isCommandNew = false;
        this.isCommandNewEnabled = true;
        this.commandNew = (/**
         * @return {?}
         */
        () => { this.onCommandNew(); });
        this.commandNewText = '';
        this.isCommandOrder = false;
        this.isCommandOrderEnabled = true;
        this.commandOrder = (/**
         * @return {?}
         */
        () => { this.onCommandOrder(); });
        this.commandOrderText = '';
        this.isCommandRestart = false;
        this.isCommandRestartEnabled = true;
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
        this.isCommandSearchEnabled = true;
        this.commandSearch = (/**
         * @return {?}
         */
        () => { this.onCommandSearch(); });
        this.commandSearchText = '';
        this.isCommandStart = false;
        this.isCommandStartEnabled = true;
        this.commandStart = (/**
         * @return {?}
         */
        () => { this.onCommandStart(); });
        this.commandStartText = '';
        this.isCommandStop = false;
        this.isCommandStopEnabled = true;
        this.commandStop = (/**
         * @return {?}
         */
        () => { this.onCommandStop(); });
        this.commandStopText = '';
        this.isCommandSwap = false;
        this.isCommandSwapEnabled = true;
        this.commandSwap = (/**
         * @return {?}
         */
        () => { this.onCommandSwap(); });
        this.commandSwapText = '';
        this.isCommandExcel = false;
        this.isCommandExcelEnabled = true;
        this.commandExcel = (/**
         * @return {?}
         */
        () => { this.onCommandExcel(); });
        this.commandExcelText = '';
        this.vm = this;
        this.path = path;
        this.title = title;
        this.subTitle = subtitle;
        this.width.width = width + 'px';
        this.widthStackLayout.width = width - 50 + 'px'; // 50 = padding (left and right)
        if (!portalService) {
            throw new Error('[Blade] constructor parameter \'portalService\' must be provided.');
        }
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
        // Set 'this.portalService.areaBlades.blades[index]' to 'this'
        //     'this.portalService.areaBlades.blades[index]' was generated during AddBlade
        this.portalService.areaBlades.blades.forEach((/**
         * @param {?} blade
         * @param {?} index
         * @return {?}
         */
        (blade, index) => {
            if (blade.path != null && this.path != null && blade.path.toLowerCase() === this.path.toLowerCase()) {
                this.portalService.areaBlades.blades[index] = this;
            }
        }));
        this.setupWindowResizeListener((/**
         * @return {?}
         */
        () => { this.setBladeHeights(); }));
        this.setBladeHeights();
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
    // #region Methods
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
        if (this.portalService.areaBlades !== undefined) {
            this.portalService.areaBlades.clearPath(this.path);
        }
        else {
            throw new Error('[Blade] path: \'' + this.path + '\' could not be removed, since no \'this.portalService.areaBlades\' available.');
        }
    }
    /**
     * Override
     * @return {?}
     */
    onClose() {
        return true;
    }
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
    /**
     * Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2]
     * @param {?} watchExpression
     * @param {?} func
     * @return {?}
     */
    setTitle(watchExpression, func) {
        console.log('commented code at : Blade.setTitle');
        //if (this.watcherTitle === undefined) {
        //    if (this.$scope !== null) {
        //        // angular1
        //        this.watcherTitle = this.$scope.$watch(watchExpression, () => { func(); });
        //        this.$scope.$on('$destroy', () => { this.watcherTitle(); });
        //    } else {
        //        // angular2
        //        console.log('[Blade.setTitle()] not supported for angular2. use [ngOnChanges] instead.');
        //    }
        //}
    }
    /**
     * @private
     * @return {?}
     */
    setBladeHeights() {
        this.bladeContentHeight = window.innerHeight - 40 - 125; // 40 = topbar, 125 = blade header
        this.bladeContentHeightInner = this.bladeContentHeight - 50 - 3; // 50 = padding (top and bottom), somehow we miss 3px
        // this.portalService.$timeout(() => { }, 50);
        //window.setTimeout(() => { }, 50);
    }
}
if (false) {
    /**
     * HACK: 2016-11-06/hp
     * [angular-portal-blade] needs [this] as the controller.
     * We don't know how to provide [this] to the directive.
     * So we came up with this [vm] property.
     * @type {?}
     */
    Blade.prototype.vm;
    /** @type {?} */
    Blade.prototype.isMaximize;
    /** @type {?} */
    Blade.prototype.isCommandMore;
    /** @type {?} */
    Blade.prototype.isNav;
    /** @type {?} */
    Blade.prototype.isGrid;
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
    Blade.prototype.isCommandBrowseEnabled;
    /** @type {?} */
    Blade.prototype.commandBrowse;
    /** @type {?} */
    Blade.prototype.commandBrowseText;
    /** @type {?} */
    Blade.prototype.isCommandCancel;
    /** @type {?} */
    Blade.prototype.isCommandCancelEnabled;
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
    Blade.prototype.isCommandDocumentEnabled;
    /** @type {?} */
    Blade.prototype.commandDocument;
    /** @type {?} */
    Blade.prototype.commandDocumentText;
    /** @type {?} */
    Blade.prototype.isCommandDocument2;
    /** @type {?} */
    Blade.prototype.isCommandDocument2Enabled;
    /** @type {?} */
    Blade.prototype.commandDocument2;
    /** @type {?} */
    Blade.prototype.commandDocument2Text;
    /** @type {?} */
    Blade.prototype.isCommandDocument3;
    /** @type {?} */
    Blade.prototype.isCommandDocument3Enabled;
    /** @type {?} */
    Blade.prototype.commandDocument3;
    /** @type {?} */
    Blade.prototype.commandDocument3Text;
    /** @type {?} */
    Blade.prototype.isCommandDocument4;
    /** @type {?} */
    Blade.prototype.isCommandDocument4Enabled;
    /** @type {?} */
    Blade.prototype.commandDocument4;
    /** @type {?} */
    Blade.prototype.commandDocument4Text;
    /** @type {?} */
    Blade.prototype.isCommandDocument5;
    /** @type {?} */
    Blade.prototype.isCommandDocument5Enabled;
    /** @type {?} */
    Blade.prototype.commandDocument5;
    /** @type {?} */
    Blade.prototype.commandDocument5Text;
    /** @type {?} */
    Blade.prototype.isCommandNew;
    /** @type {?} */
    Blade.prototype.isCommandNewEnabled;
    /** @type {?} */
    Blade.prototype.commandNew;
    /** @type {?} */
    Blade.prototype.commandNewText;
    /** @type {?} */
    Blade.prototype.isCommandOrder;
    /** @type {?} */
    Blade.prototype.isCommandOrderEnabled;
    /** @type {?} */
    Blade.prototype.commandOrder;
    /** @type {?} */
    Blade.prototype.commandOrderText;
    /** @type {?} */
    Blade.prototype.isCommandRestart;
    /** @type {?} */
    Blade.prototype.isCommandRestartEnabled;
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
    Blade.prototype.isCommandSearchEnabled;
    /** @type {?} */
    Blade.prototype.commandSearch;
    /** @type {?} */
    Blade.prototype.commandSearchText;
    /** @type {?} */
    Blade.prototype.isCommandStart;
    /** @type {?} */
    Blade.prototype.isCommandStartEnabled;
    /** @type {?} */
    Blade.prototype.commandStart;
    /** @type {?} */
    Blade.prototype.commandStartText;
    /** @type {?} */
    Blade.prototype.isCommandStop;
    /** @type {?} */
    Blade.prototype.isCommandStopEnabled;
    /** @type {?} */
    Blade.prototype.commandStop;
    /** @type {?} */
    Blade.prototype.commandStopText;
    /** @type {?} */
    Blade.prototype.isCommandSwap;
    /** @type {?} */
    Blade.prototype.isCommandSwapEnabled;
    /** @type {?} */
    Blade.prototype.commandSwap;
    /** @type {?} */
    Blade.prototype.commandSwapText;
    /** @type {?} */
    Blade.prototype.isCommandExcel;
    /** @type {?} */
    Blade.prototype.isCommandExcelEnabled;
    /** @type {?} */
    Blade.prototype.commandExcel;
    /** @type {?} */
    Blade.prototype.commandExcelText;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vYmxhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUl0RCxNQUFNLE9BQU8sS0FBTSxTQUFRLGVBQWU7Ozs7Ozs7Ozs7SUFJdEMsWUFBWSxhQUE0QixFQUFFLElBQVksRUFBRSxLQUFhLEVBQUUsV0FBbUIsRUFBRSxFQUFFLFFBQWdCLEdBQUc7UUFDN0csS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7Ozs7Ozs7O1FBcUNuQyxPQUFFLEdBQVEsRUFBRSxDQUFDOzs7UUFJYixlQUFVLEdBQVksS0FBSyxDQUFDOztRQUc1QixrQkFBYSxHQUFZLEtBQUssQ0FBQzs7UUFHL0IsVUFBSyxHQUFZLEtBQUssQ0FBQzs7UUFHdkIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixlQUFVLEdBQVcsVUFBVSxDQUFDO1FBT2hDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixVQUFLLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDekIscUJBQWdCLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFFdkMsZ0JBQVcsR0FBWSxJQUFJLENBQUM7Ozs7UUFzQjVCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLDJCQUFzQixHQUFZLElBQUksQ0FBQztRQUN2QyxrQkFBYTs7O1FBQWUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDO1FBQzlELHNCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUUvQixvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQywyQkFBc0IsR0FBWSxJQUFJLENBQUM7UUFDdkMsa0JBQWE7OztR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QUFrQzs7SUFFbEMsbUNBQW9DOztJQUNwQywwQ0FBMEM7O0lBQzFDLGlDQUFvRTs7SUFDcEUscUNBQWtDOztJQUVsQyxtQ0FBb0M7O0lBQ3BDLDBDQUEwQzs7SUFDMUMsaUNBQW9FOztJQUNwRSxxQ0FBa0M7O0lBRWxDLDZCQUE4Qjs7SUFDOUIsb0NBQW9DOztJQUNwQywyQkFBd0Q7O0lBQ3hELCtCQUE0Qjs7SUFFNUIsK0JBQWdDOztJQUNoQyxzQ0FBc0M7O0lBQ3RDLDZCQUE0RDs7SUFDNUQsaUNBQThCOztJQUU5QixpQ0FBa0M7O0lBQ2xDLHdDQUF3Qzs7SUFDeEMsK0JBQWdFOztJQUNoRSxtQ0FBZ0M7O0lBRWhDLDhCQUErQjs7SUFDL0IscUNBQXFDOztJQUNyQyw0QkFBMEQ7O0lBQzFELGdDQUE2Qjs7SUFFN0IsZ0NBQWlDOztJQUNqQyx1Q0FBdUM7O0lBQ3ZDLDhCQUE4RDs7SUFDOUQsa0NBQStCOztJQUUvQiwrQkFBZ0M7O0lBQ2hDLHNDQUFzQzs7SUFDdEMsNkJBQTREOztJQUM1RCxpQ0FBOEI7O0lBRTlCLDhCQUErQjs7SUFDL0IscUNBQXFDOztJQUNyQyw0QkFBMEQ7O0lBQzFELGdDQUE2Qjs7SUFFN0IsOEJBQStCOztJQUMvQixxQ0FBcUM7O0lBQ3JDLDRCQUEwRDs7SUFDMUQsZ0NBQTZCOztJQUU3QiwrQkFBZ0M7O0lBQ2hDLHNDQUFzQzs7SUFDdEMsNkJBQTREOztJQUM1RCxpQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi9wb3J0YWwtc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQWNjb3VudCB9IGZyb20gJy4vdXNlci1hY2NvdW50JztcbmltcG9ydCB7IFVzZXJDb250cm9sQmFzZSB9IGZyb20gJy4vdXNlci1jb250cm9sLWJhc2UnO1xuaW1wb3J0IHsgSUFkZEJsYWRlRXZlbnRBcmdzIH0gZnJvbSAnLi9pYWRkLWJsYWRlLWV2ZW50LWFyZ3MnO1xuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJ3EnO1xyXG5cbmV4cG9ydCBjbGFzcyBCbGFkZSBleHRlbmRzIFVzZXJDb250cm9sQmFzZSB7XG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvclxuXG4gICAgLy9zdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJywgJ3BvcnRhbFNlcnZpY2UnXTtcbiAgICBjb25zdHJ1Y3Rvcihwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlLCBwYXRoOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIHN1YnRpdGxlOiBzdHJpbmcgPSAnJywgd2lkdGg6IG51bWJlciA9IDIwMCkgey8vJHNjb3BlOiBhbnksXG4gICAgICAgIHN1cGVyKHBvcnRhbFNlcnZpY2UpOyAvLyRzY29wZSxcblxuICAgICAgICB0aGlzLnZtID0gdGhpcztcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnN1YlRpdGxlID0gc3VidGl0bGU7XG4gICAgICAgIHRoaXMud2lkdGgud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIHRoaXMud2lkdGhTdGFja0xheW91dC53aWR0aCA9IHdpZHRoIC0gNTAgKyAncHgnOyAgLy8gNTAgPSBwYWRkaW5nIChsZWZ0IGFuZCByaWdodClcblxuICAgICAgICBpZiAoIXBvcnRhbFNlcnZpY2UpIHsgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIGNvbnN0cnVjdG9yIHBhcmFtZXRlciBcXCdwb3J0YWxTZXJ2aWNlXFwnIG11c3QgYmUgcHJvdmlkZWQuJyk7IH1cbiAgICAgICAgaWYgKCFwYXRoKSB7IHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgXFwncGF0aFxcJyBtdXN0IGJlIGEgc3RyaW5nLicpOyB9XG4gICAgICAgIGlmICghdGl0bGUgJiYgdGl0bGUgIT09ICcnKSB7IHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgXFwndGl0bGVcXCcgbXVzdCBiZSBhIHN0cmluZyB3aGVuIHByb3ZpZGVkLicpOyB9XG4gICAgICAgIGlmICghc3VidGl0bGUgJiYgc3VidGl0bGUgIT09ICcnKSB7IHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgXFwnc3VidGl0bGVcXCcgbXVzdCBiZSBhIHN0cmluZyB3aGVuIHByb3ZpZGVkLicpOyB9XG4gICAgICAgIGlmICghd2lkdGggJiYgd2lkdGggIT09IDApIHsgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIGNvbnN0cnVjdG9yIHBhcmFtZXRlciBcXCd3aWR0aFxcJyBtdXN0IGJlIGEgbnVtYmVyIHdoZW4gcHJvdmlkZWQuJyk7IH1cblxuICAgICAgICBpZiAod2lkdGggPCA1MCkgeyB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gY29uc3RydWN0b3IgcGFyYW1ldGVyIFxcJ3dpZHRoXFwnIG11c3QgYmUgYXQgbGVhc3QgNTAuJyk7IH1cblxuICAgICAgICAvLyBTZXQgJ3RoaXMucG9ydGFsU2VydmljZS5hcmVhQmxhZGVzLmJsYWRlc1tpbmRleF0nIHRvICd0aGlzJ1xuICAgICAgICAvLyAgICAgJ3RoaXMucG9ydGFsU2VydmljZS5hcmVhQmxhZGVzLmJsYWRlc1tpbmRleF0nIHdhcyBnZW5lcmF0ZWQgZHVyaW5nIEFkZEJsYWRlXG4gICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hcmVhQmxhZGVzLmJsYWRlcy5mb3JFYWNoKChibGFkZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChibGFkZS5wYXRoICE9IG51bGwgJiYgdGhpcy5wYXRoICE9IG51bGwgJiYgYmxhZGUucGF0aC50b0xvd2VyQ2FzZSgpID09PSB0aGlzLnBhdGgudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hcmVhQmxhZGVzLmJsYWRlc1tpbmRleF0gPSB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldHVwV2luZG93UmVzaXplTGlzdGVuZXIoKCkgPT4geyB0aGlzLnNldEJsYWRlSGVpZ2h0cygpOyB9KTtcbiAgICAgICAgdGhpcy5zZXRCbGFkZUhlaWdodHMoKTtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIFByb3BlcnRpZXNcblxuICAgIC8qKiBIQUNLOiAyMDE2LTExLTA2L2hwXG4gICAgW2FuZ3VsYXItcG9ydGFsLWJsYWRlXSBuZWVkcyBbdGhpc10gYXMgdGhlIGNvbnRyb2xsZXIuXG4gICAgV2UgZG9uJ3Qga25vdyBob3cgdG8gcHJvdmlkZSBbdGhpc10gdG8gdGhlIGRpcmVjdGl2ZS5cbiAgICBTbyB3ZSBjYW1lIHVwIHdpdGggdGhpcyBbdm1dIHByb3BlcnR5LiovXG4gICAgdm06IGFueSA9IHt9O1xuXG4gICAgLy8gSW5kaWNhdGVzIGlmIG1heGltaXplIGljb24gaXMgc2hvd25cbiAgICAvLyBUT0RPOiAyMDE5LTA5LTI2L2hwOiBpdCBwcm9iYWJseSBzaG91bGQgYmUgbmFtZWQgaXNNYXhpbWl6ZWRTaG93blxuICAgIGlzTWF4aW1pemU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8vIFRPRE86IDIwMTktMDktMjYvaHA6IG5vdCBzdXJlIHdoYXQgdGhhdCBpcywgY2hlY2tvdXRcbiAgICBpc0NvbW1hbmRNb3JlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLyBJbmRpY2F0ZXMgaWYgdGhpcyBpcyBhIG5hdmlnYXRpb24gYmxhZGVcbiAgICBpc05hdjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLy8gSW5kaWNhdGVzIGlmIHRoaXMgaXMgYSBuYXZpZ2F0aW9uIGdyaWQgYmxhZGVcbiAgICBpc0dyaWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHZpc2liaWxpdHk6IHN0cmluZyA9ICdjb2xsYXBzZSc7XG5cbiAgICBwcml2YXRlIHdhdGNoZXJUaXRsZTogKCkgPT4gdm9pZDtcblxuICAgIGJsYWRlQ29udGVudEhlaWdodDogbnVtYmVyO1xuICAgIGJsYWRlQ29udGVudEhlaWdodElubmVyOiBudW1iZXI7XG5cbiAgICB0aXRsZTogc3RyaW5nID0gJyc7XG4gICAgc3ViVGl0bGU6IHN0cmluZyA9ICcnO1xuICAgIHdpZHRoID0geyAnd2lkdGgnOiAnMCcgfTtcbiAgICB3aWR0aFN0YWNrTGF5b3V0ID0geyAnd2lkdGgnOiAnNTBweCcgfTtcblxuICAgIGlzSW5uZXJIdG1sOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGZvcm1ibGFkZTogYW55OyAvLyBhbmd1bGFyLklGb3JtQ29udHJvbGxlcjsgLy8gbmFtZSBvZiB0aGUgbmctZm9ybSBkaXJlY3RpdmVcblxuICAgIC8vICNyZWdpb24gcGF0aFxuXG4gICAgcHJpdmF0ZSBfcGF0aDogc3RyaW5nO1xuICAgIGdldCBwYXRoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRoO1xuICAgIH1cbiAgICAvLyBGb3IgdGhlIG1vbWVudCB3ZSBkbyBkaXN0aW5ndWlzaCBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBjYXNlIHBhdGggbmFtZVxuICAgIHNldCBwYXRoKG5ld1BhdGg6IHN0cmluZykge1xuICAgICAgICBpZiAobmV3UGF0aCA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLl9wYXRoID0gbmV3UGF0aC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gQ29tbWFuZHNcblxuICAgIGlzQ29tbWFuZEJyb3dzZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tbWFuZEJyb3dzZUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbW1hbmRCcm93c2U6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kQnJvd3NlKCk7IH07XG4gICAgY29tbWFuZEJyb3dzZVRleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNDb21tYW5kQ2FuY2VsOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21tYW5kQ2FuY2VsRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgY29tbWFuZENhbmNlbDogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmRDYW5jZWwoKTsgfTtcbiAgICBjb21tYW5kQ2FuY2VsVGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBpc0NvbW1hbmRDb3B5OiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21tYW5kQ29weUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbW1hbmRDb3B5OiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZENvcHkoKTsgfTtcbiAgICBjb21tYW5kQ29weVRleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNDb21tYW5kRGVsZXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21tYW5kRGVsZXRlRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgY29tbWFuZERlbGV0ZTogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmREZWxldGUoKTsgfTtcbiAgICBjb21tYW5kRGVsZXRlVGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBpc0NvbW1hbmREb2N1bWVudDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tbWFuZERvY3VtZW50RW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgY29tbWFuZERvY3VtZW50OiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZERvY3VtZW50KCk7IH07XG4gICAgY29tbWFuZERvY3VtZW50VGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBpc0NvbW1hbmREb2N1bWVudDI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbW1hbmREb2N1bWVudDJFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb21tYW5kRG9jdW1lbnQyOiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZERvY3VtZW50MigpOyB9O1xuICAgIGNvbW1hbmREb2N1bWVudDJUZXh0OiBzdHJpbmcgPSAnJztcblxuICAgIGlzQ29tbWFuZERvY3VtZW50MzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tbWFuZERvY3VtZW50M0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbW1hbmREb2N1bWVudDM6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kRG9jdW1lbnQzKCk7IH07XG4gICAgY29tbWFuZERvY3VtZW50M1RleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNDb21tYW5kRG9jdW1lbnQ0OiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21tYW5kRG9jdW1lbnQ0RW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgY29tbWFuZERvY3VtZW50NDogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmREb2N1bWVudDQoKTsgfTtcbiAgICBjb21tYW5kRG9jdW1lbnQ0VGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBpc0NvbW1hbmREb2N1bWVudDU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbW1hbmREb2N1bWVudDVFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb21tYW5kRG9jdW1lbnQ1OiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZERvY3VtZW50NSgpOyB9O1xuICAgIGNvbW1hbmREb2N1bWVudDVUZXh0OiBzdHJpbmcgPSAnJztcblxuICAgIGlzQ29tbWFuZE5ldzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tbWFuZE5ld0VuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbW1hbmROZXc6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kTmV3KCk7IH07XG4gICAgY29tbWFuZE5ld1RleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNDb21tYW5kT3JkZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbW1hbmRPcmRlckVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbW1hbmRPcmRlcjogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmRPcmRlcigpOyB9O1xuICAgIGNvbW1hbmRPcmRlclRleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNDb21tYW5kUmVzdGFydDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tbWFuZFJlc3RhcnRFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb21tYW5kUmVzdGFydDogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmRSZXN0YXJ0KCk7IH07XG4gICAgY29tbWFuZFJlc3RhcnRUZXh0OiBzdHJpbmcgPSAnJztcblxuICAgIGlzQ29tbWFuZFNhdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbW1hbmRTYXZlRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgY29tbWFuZFNhdmU6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kU2F2ZSgpOyB9O1xuICAgIGNvbW1hbmRTYXZlVGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBpc0NvbW1hbmRTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbW1hbmRTZWFyY2hFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb21tYW5kU2VhcmNoOiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZFNlYXJjaCgpOyB9O1xuICAgIGNvbW1hbmRTZWFyY2hUZXh0OiBzdHJpbmcgPSAnJztcblxuICAgIGlzQ29tbWFuZFN0YXJ0OiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21tYW5kU3RhcnRFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb21tYW5kU3RhcnQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kU3RhcnQoKTsgfTtcbiAgICBjb21tYW5kU3RhcnRUZXh0OiBzdHJpbmcgPSAnJztcblxuICAgIGlzQ29tbWFuZFN0b3A6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbW1hbmRTdG9wRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgY29tbWFuZFN0b3A6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kU3RvcCgpOyB9O1xuICAgIGNvbW1hbmRTdG9wVGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBpc0NvbW1hbmRTd2FwOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21tYW5kU3dhcEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbW1hbmRTd2FwOiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZFN3YXAoKTsgfTtcbiAgICBjb21tYW5kU3dhcFRleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNDb21tYW5kRXhjZWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbW1hbmRFeGNlbEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbW1hbmRFeGNlbDogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmRFeGNlbCgpOyB9O1xuICAgIGNvbW1hbmRFeGNlbFRleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBNZXRob2RzXG5cbiAgICBhY3RpdmF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkFjdGl2YXRlKCk7XG4gICAgICAgIHRoaXMub25BY3RpdmF0ZWQoKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVRvKHBhdGg6IGFueSkge1xuICAgICAgICB0aGlzLm9uTmF2aWdhdGVUbyhwYXRoKTtcbiAgICB9XG5cbiAgICAvKiogTXVzdCBiZSBvdmVycmlkZGVuLiAqL1xuICAgIG9uTmF2aWdhdGVUbyh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbk5hdmlnYXRlVG9cXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XG4gICAgfVxuXG4gICAgLy8gQXQgdGhlIG1vbWVudCB3ZSBkbyBub3QgZGlzdGluZ3Vpc2ggYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgY2FzZSBwYXRoIG5hbWVcbiAgICBjb21wYXJlUGF0aHMocGF0aDE6IHN0cmluZywgcGF0aDI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAocGF0aDEgPT0gbnVsbCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgaWYgKHBhdGgyID09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIGlmIChwYXRoMS50b0xvd2VyQ2FzZSgpID09PSBwYXRoMi50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBjbG9zZSBibGFkZS4gKi9cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm9uQ2xvc2UpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gZG8gbm90IGNsb3NlIGJsYWRlXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFCbGFkZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5wb3J0YWxTZXJ2aWNlLmFyZWFCbGFkZXMuY2xlYXJQYXRoKHRoaXMucGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gcGF0aDogXFwnJyArIHRoaXMucGF0aCArICdcXCcgY291bGQgbm90IGJlIHJlbW92ZWQsIHNpbmNlIG5vIFxcJ3RoaXMucG9ydGFsU2VydmljZS5hcmVhQmxhZGVzXFwnIGF2YWlsYWJsZS4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBPdmVycmlkZSAqL1xuICAgIG9uQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vICNyZWdpb24gQ29tbWFuZHNcblxuICAgIG9uQ29tbWFuZEJyb3dzZSgpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZEJyb3dzZVxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcbiAgICB9XG5cbiAgICBvbkNvbW1hbmRDYW5jZWwoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRDYW5jZWxcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XG4gICAgfVxuXG4gICAgb25Db21tYW5kQ29weSgpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZENvcHlcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XG4gICAgfVxuXG4gICAgb25Db21tYW5kRGVsZXRlKCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kRGVsZXRlXFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIG9uQ29tbWFuZERvY3VtZW50KCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kRG9jdW1lbnRcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XG4gICAgfVxuXG4gICAgb25Db21tYW5kRG9jdW1lbnQyKCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kRG9jdW1lbnQyXFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIG9uQ29tbWFuZERvY3VtZW50MygpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZERvY3VtZW50M1xcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcbiAgICB9XG5cbiAgICBvbkNvbW1hbmREb2N1bWVudDQoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmREb2N1bWVudDRcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XG4gICAgfVxuXG4gICAgb25Db21tYW5kRG9jdW1lbnQ1KCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kRG9jdW1lbnQ1XFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIG9uQ29tbWFuZE5ldygpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZE5ld1xcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcbiAgICB9XG5cbiAgICBvbkNvbW1hbmRPcmRlcigpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZE9yZGVyXFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIG9uQ29tbWFuZFJlc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRSZXN0YXJ0XFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIG9uQ29tbWFuZFNhdmUoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRTYXZlXFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIG9uQ29tbWFuZFNlYXJjaCgpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZFNlYXJjaFxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcbiAgICB9XG5cbiAgICBvbkNvbW1hbmRTdGFydCgpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZFN0YXJ0XFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIG9uQ29tbWFuZFN0b3AoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRTdG9wXFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIG9uQ29tbWFuZFN3YXAoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRTd2FwXFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIG9uQ29tbWFuZEV4Y2VsKCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kRXhjZWxcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLyoqIENoYW5nZSB0aXRsZSwgYXMgc29vbiBhcyB3YXRjaEV4cHJlc3Npb24gY2hhbmdlcy4gd2F0Y2hFeHByZXNzaW9uIGlzIGVpdGhlciBhIHZhcmlhYmxlIG9yZSBhbiBleHByZXNzaW9uLCBlLmcuIFtuYW1lMSArIG5hbWUyXSAqL1xuICAgIHNldFRpdGxlKHdhdGNoRXhwcmVzc2lvbjogc3RyaW5nLCBmdW5jOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb21tZW50ZWQgY29kZSBhdCA6IEJsYWRlLnNldFRpdGxlJyk7XG4gICAgICAgIC8vaWYgKHRoaXMud2F0Y2hlclRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gICAgaWYgKHRoaXMuJHNjb3BlICE9PSBudWxsKSB7XG4gICAgICAgIC8vICAgICAgICAvLyBhbmd1bGFyMVxuICAgICAgICAvLyAgICAgICAgdGhpcy53YXRjaGVyVGl0bGUgPSB0aGlzLiRzY29wZS4kd2F0Y2god2F0Y2hFeHByZXNzaW9uLCAoKSA9PiB7IGZ1bmMoKTsgfSk7XG4gICAgICAgIC8vICAgICAgICB0aGlzLiRzY29wZS4kb24oJyRkZXN0cm95JywgKCkgPT4geyB0aGlzLndhdGNoZXJUaXRsZSgpOyB9KTtcbiAgICAgICAgLy8gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgIC8vIGFuZ3VsYXIyXG4gICAgICAgIC8vICAgICAgICBjb25zb2xlLmxvZygnW0JsYWRlLnNldFRpdGxlKCldIG5vdCBzdXBwb3J0ZWQgZm9yIGFuZ3VsYXIyLiB1c2UgW25nT25DaGFuZ2VzXSBpbnN0ZWFkLicpO1xuICAgICAgICAvLyAgICB9XG4gICAgICAgIC8vfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0QmxhZGVIZWlnaHRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJsYWRlQ29udGVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIDQwIC0gMTI1OyAvLyA0MCA9IHRvcGJhciwgMTI1ID0gYmxhZGUgaGVhZGVyXG4gICAgICAgIHRoaXMuYmxhZGVDb250ZW50SGVpZ2h0SW5uZXIgPSB0aGlzLmJsYWRlQ29udGVudEhlaWdodCAtIDUwIC0gMzsgLy8gNTAgPSBwYWRkaW5nICh0b3AgYW5kIGJvdHRvbSksIHNvbWVob3cgd2UgbWlzcyAzcHhcblxuICAgICAgICAvLyB0aGlzLnBvcnRhbFNlcnZpY2UuJHRpbWVvdXQoKCkgPT4geyB9LCA1MCk7XG4gICAgICAgIC8vd2luZG93LnNldFRpbWVvdXQoKCkgPT4geyB9LCA1MCk7XG4gICAgfVxufVxuIl19