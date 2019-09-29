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
import { UserControlBase } from './../base/user-control-base';
import { BrowserService } from '../../service/browser/browser.service';
import { InjectorService } from '../../service/injector/injector.service';
import { Viewport } from '../../service/browser/viewport';
var Blade = /** @class */ (function (_super) {
    __extends(Blade, _super);
    // #endregion
    // #endregion
    // #region Constructors
    // mainService: MainService, 
    function Blade(path, title, subtitle, width) {
        if (path === void 0) { path = ''; }
        if (title === void 0) { title = ''; }
        if (subtitle === void 0) { subtitle = ''; }
        if (width === void 0) { width = 200; }
        var _this = _super.call(this) || this;
        _this.viewport = new Viewport();
        // bladeId: string = '';
        _this._bladeId = '';
        /**
         * HACK:2016-11-06/hp: [angular-portal-blade] needs [this] as the controller.
         * We don't know how to provide [this] to the directive.
         * So we came up with this [vm] property.
         */
        _this.vm = {};
        _this.visibility = 'collapse';
        _this.title = '';
        _this.subTitle = '';
        _this.width = '0';
        _this.widthStackLayout = { 'width': '50px' };
        _this.height = '0';
        _this.isInnerHtml = true;
        // #endregion
        // #region Commands
        _this.isCommandBrowse = false;
        _this.commandBrowse = (/**
         * @return {?}
         */
        function () { _this.onCommandBrowse(); });
        _this.commandBrowseText = '';
        _this.isCommandCancel = false;
        _this.commandCancel = (/**
         * @return {?}
         */
        function () { _this.onCommandCancel(); });
        _this.commandCancelText = '';
        _this.isCommandCopy = false;
        _this.isCommandCopyEnabled = true;
        _this.commandCopy = (/**
         * @return {?}
         */
        function () { _this.onCommandCopy(); });
        _this.commandCopyText = '';
        _this.isCommandDelete = false;
        _this.isCommandDeleteEnabled = true;
        _this.commandDelete = (/**
         * @return {?}
         */
        function () { _this.onCommandDelete(); });
        _this.commandDeleteText = '';
        _this.isCommandDocument = false;
        _this.commandDocument = (/**
         * @return {?}
         */
        function () { _this.onCommandDocument(); });
        _this.commandDocumentText = '';
        _this.isCommandDocument2 = false;
        _this.commandDocument2 = (/**
         * @return {?}
         */
        function () { _this.onCommandDocument2(); });
        _this.commandDocument2Text = '';
        _this.isCommandDocument3 = false;
        _this.commandDocument3 = (/**
         * @return {?}
         */
        function () { _this.onCommandDocument3(); });
        _this.commandDocument3Text = '';
        _this.isCommandDocument4 = false;
        _this.commandDocument4 = (/**
         * @return {?}
         */
        function () { _this.onCommandDocument4(); });
        _this.commandDocument4Text = '';
        _this.isCommandDocument5 = false;
        _this.commandDocument5 = (/**
         * @return {?}
         */
        function () { _this.onCommandDocument5(); });
        _this.commandDocument5Text = '';
        _this.isCommandNew = false;
        _this.commandNew = (/**
         * @return {?}
         */
        function () { _this.onCommandNew(); });
        _this.commandNewText = '';
        _this.isCommandOrder = false;
        _this.commandOrder = (/**
         * @return {?}
         */
        function () { _this.onCommandOrder(); });
        _this.commandOrderText = '';
        _this.isCommandRestart = false;
        _this.commandRestart = (/**
         * @return {?}
         */
        function () { _this.onCommandRestart(); });
        _this.commandRestartText = '';
        _this.isCommandSave = false;
        _this.isCommandSaveEnabled = true;
        _this.commandSave = (/**
         * @return {?}
         */
        function () { _this.onCommandSave(); });
        _this.commandSaveText = '';
        _this.isCommandSearch = false;
        _this.commandSearch = (/**
         * @return {?}
         */
        function () { _this.onCommandSearch(); });
        _this.commandSearchText = '';
        _this.isCommandStart = false;
        _this.commandStart = (/**
         * @return {?}
         */
        function () { _this.onCommandStart(); });
        _this.commandStartText = '';
        _this.isCommandStop = false;
        _this.commandStop = (/**
         * @return {?}
         */
        function () { _this.onCommandStop(); });
        _this.commandStopText = '';
        _this.isCommandSwap = false;
        _this.commandSwap = (/**
         * @return {?}
         */
        function () { _this.onCommandSwap(); });
        _this.commandSwapText = '';
        _this.isCommandExcel = false;
        _this.commandExcel = (/**
         * @return {?}
         */
        function () { _this.onCommandExcel(); });
        _this.commandExcelText = '';
        _this.browserService = InjectorService.getInjector().get(BrowserService);
        _this.browserService.onResize.subscribe((/**
         * @param {?} viewport
         * @return {?}
         */
        function (viewport) { return _this.viewport = viewport; }));
        _this.vm = _this;
        _this.path = path;
        _this.title = title;
        _this.subTitle = subtitle;
        _this.width = width + 'px';
        _this.widthStackLayout.width = width - 50 + 'px'; // 50 = padding (left and right)
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
        _this.setBladeHeights();
        return _this;
    }
    Object.defineProperty(Blade.prototype, "bladeId", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bladeId;
        },
        set: /**
         * @param {?} bladeId
         * @return {?}
         */
        function (bladeId) {
            if (bladeId == null) {
                return;
            }
            this._bladeId = bladeId.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Blade.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () {
            return this._path;
        },
        // For the moment we do distinguish between lower and upper case path name
        set: 
        // For the moment we do distinguish between lower and upper case path name
        /**
         * @param {?} newPath
         * @return {?}
         */
        function (newPath) {
            if (newPath == null) {
                return;
            }
            this._path = newPath.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    // #endregion
    // #region Angular Methods
    // #endregion
    // #region Angular Methods
    /**
     * @return {?}
     */
    Blade.prototype.ngOnInit = 
    // #endregion
    // #region Angular Methods
    /**
     * @return {?}
     */
    function () {
        console.log('ngOnInit');
    };
    // #endregion
    // #region Public Methods
    // #endregion
    // #region Public Methods
    /**
     * @return {?}
     */
    Blade.prototype.activate = 
    // #endregion
    // #region Public Methods
    /**
     * @return {?}
     */
    function () {
        this.onActivate();
        this.onActivated();
    };
    /**
     * @param {?} path
     * @return {?}
     */
    Blade.prototype.navigateTo = /**
     * @param {?} path
     * @return {?}
     */
    function (path) {
        this.onNavigateTo(path);
    };
    /** Must be overridden. */
    /**
     * Must be overridden.
     * @param {?} value
     * @return {?}
     */
    Blade.prototype.onNavigateTo = /**
     * Must be overridden.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        throw new Error('[Blade] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
    };
    // At the moment we do not distinguish between lower and upper case path name
    // At the moment we do not distinguish between lower and upper case path name
    /**
     * @param {?} path1
     * @param {?} path2
     * @return {?}
     */
    Blade.prototype.comparePaths = 
    // At the moment we do not distinguish between lower and upper case path name
    /**
     * @param {?} path1
     * @param {?} path2
     * @return {?}
     */
    function (path1, path2) {
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
    };
    /** close blade. */
    /**
     * close blade.
     * @return {?}
     */
    Blade.prototype.close = /**
     * close blade.
     * @return {?}
     */
    function () {
        if (!this.onClose) {
            return; // do not close blade
        }
        //if (this.mainService.areaBlades !== undefined) {
        //    this.mainService.areaBlades.clearPath(this.path);
        //} else {
        //    throw new Error('[Blade] path: \'' + this.path + '\' could not be removed, since no \'this.mainService.areaBlades\' available.');
        //}
    };
    /** Override */
    /**
     * Override
     * @return {?}
     */
    Blade.prototype.onClose = /**
     * Override
     * @return {?}
     */
    function () {
        return true;
    };
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
    Blade.prototype.onCommandBrowse = 
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
    function () {
        throw new Error('[Blade] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandCancel = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandCopy = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandDelete = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandDocument = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandDocument2 = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandDocument3 = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandDocument4 = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandDocument5 = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandNew = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandNew\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandOrder = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandRestart = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandSave = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandSave\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandSearch = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandStart = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandStart\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandStop = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandStop\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandSwap = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
    };
    /**
     * @return {?}
     */
    Blade.prototype.onCommandExcel = /**
     * @return {?}
     */
    function () {
        throw new Error('[Blade] \'onCommandExcel\' is an abstract function. Define one in the derived class.');
    };
    // #endregion
    // #endregion
    // #region Private Methods
    // #endregion
    // #endregion
    // #region Private Methods
    /**
     * @private
     * @return {?}
     */
    Blade.prototype.setBladeHeights = 
    // #endregion
    // #endregion
    // #region Private Methods
    /**
     * @private
     * @return {?}
     */
    function () {
        //this.bladeContentHeight = this.mainService.browserWindowService.browserWindow.innerHeight - 40 - 125; // 40 = topbar, 125 = blade header
        this.bladeContentHeightInner = this.bladeContentHeight - 50 - 3; // 50 = padding (top and bottom), somehow we miss 3px
        // this.mainService.$timeout(() => {
        // }, 50);
    };
    return Blade;
}(UserControlBase));
export { Blade };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vYmxhZGUvYmxhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUUxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFMUQ7SUFBMkIseUJBQWU7SUFvSXRDLGFBQWE7SUFFYixhQUFhO0lBRWIsdUJBQXVCO0lBRXZCLDZCQUE2QjtJQUM3QixlQUFZLElBQWlCLEVBQUUsS0FBa0IsRUFBRSxRQUFxQixFQUFFLEtBQW1CO1FBQWpGLHFCQUFBLEVBQUEsU0FBaUI7UUFBRSxzQkFBQSxFQUFBLFVBQWtCO1FBQUUseUJBQUEsRUFBQSxhQUFxQjtRQUFFLHNCQUFBLEVBQUEsV0FBbUI7UUFBN0YsWUFDSSxpQkFBTyxTQTZCVjtRQXJLRCxjQUFRLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQzs7UUFHNUIsY0FBUSxHQUFXLEVBQUUsQ0FBQzs7Ozs7O1FBWTlCLFFBQUUsR0FBUSxFQUFFLENBQUM7UUFJYixnQkFBVSxHQUFXLFVBQVUsQ0FBQztRQU9oQyxXQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLGNBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsV0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNaLHNCQUFnQixHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBRXZDLFlBQU0sR0FBRyxHQUFHLENBQUM7UUFFYixpQkFBVyxHQUFZLElBQUksQ0FBQzs7O1FBb0I1QixxQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyxtQkFBYTs7O1FBQWUsY0FB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QTZCOztJQUU3QixnQ0FBaUM7O0lBQ2pDLDhCQUE4RDs7SUFDOUQsa0NBQStCOztJQUUvQiwrQkFBZ0M7O0lBQ2hDLDZCQUE0RDs7SUFDNUQsaUNBQThCOztJQUU5Qiw4QkFBK0I7O0lBQy9CLDRCQUEwRDs7SUFDMUQsZ0NBQTZCOztJQUU3Qiw4QkFBK0I7O0lBQy9CLDRCQUEwRDs7SUFDMUQsZ0NBQTZCOztJQUU3QiwrQkFBZ0M7O0lBQ2hDLDZCQUE0RDs7SUFDNUQsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnLi8uLi9zdGF0dXMtYmFyJztcclxuaW1wb3J0IHsgVXNlckNvbnRyb2xCYXNlIH0gZnJvbSAnLi8uLi9iYXNlL3VzZXItY29udHJvbC1iYXNlJztcclxuXHJcbmltcG9ydCB7IEJyb3dzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9icm93c2VyL2Jyb3dzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEluamVjdG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvaW5qZWN0b3IvaW5qZWN0b3Iuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBWaWV3cG9ydCB9IGZyb20gJy4uLy4uL3NlcnZpY2UvYnJvd3Nlci92aWV3cG9ydCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmxhZGUgZXh0ZW5kcyBVc2VyQ29udHJvbEJhc2Uge1xyXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcblxyXG4gICAgcHJpdmF0ZSBicm93c2VyU2VydmljZTogQnJvd3NlclNlcnZpY2U7XHJcbiAgICB2aWV3cG9ydDogVmlld3BvcnQgPSBuZXcgVmlld3BvcnQoKTtcclxuXHJcbiAgICAvLyBibGFkZUlkOiBzdHJpbmcgPSAnJztcclxuICAgIHByaXZhdGUgX2JsYWRlSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgZ2V0IGJsYWRlSWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmxhZGVJZDtcclxuICAgIH1cclxuICAgIHNldCBibGFkZUlkKGJsYWRlSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChibGFkZUlkID09IG51bGwpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5fYmxhZGVJZCA9IGJsYWRlSWQudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogSEFDSzoyMDE2LTExLTA2L2hwOiBbYW5ndWxhci1wb3J0YWwtYmxhZGVdIG5lZWRzIFt0aGlzXSBhcyB0aGUgY29udHJvbGxlci5cclxuICAgIFdlIGRvbid0IGtub3cgaG93IHRvIHByb3ZpZGUgW3RoaXNdIHRvIHRoZSBkaXJlY3RpdmUuXHJcbiAgICBTbyB3ZSBjYW1lIHVwIHdpdGggdGhpcyBbdm1dIHByb3BlcnR5LiovXHJcbiAgICB2bTogYW55ID0ge307XHJcblxyXG4gICAgc3RhdHVzQmFyOiBTdGF0dXNCYXI7XHJcblxyXG4gICAgdmlzaWJpbGl0eTogc3RyaW5nID0gJ2NvbGxhcHNlJztcclxuXHJcbiAgICBwcml2YXRlIHdhdGNoZXJUaXRsZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBibGFkZUNvbnRlbnRIZWlnaHQ6IG51bWJlcjtcclxuICAgIGJsYWRlQ29udGVudEhlaWdodElubmVyOiBudW1iZXI7XHJcblxyXG4gICAgdGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gICAgc3ViVGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gICAgd2lkdGggPSAnMCc7XHJcbiAgICB3aWR0aFN0YWNrTGF5b3V0ID0geyAnd2lkdGgnOiAnNTBweCcgfTtcclxuXHJcbiAgICBoZWlnaHQgPSAnMCc7XHJcblxyXG4gICAgaXNJbm5lckh0bWw6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGZvcm1ibGFkZTogYW55OyAvLyBhbmd1bGFyLklGb3JtQ29udHJvbGxlcjsgLy8gbmFtZSBvZiB0aGUgbmctZm9ybSBkaXJlY3RpdmVcclxuXHJcbiAgICAvLyAjcmVnaW9uIHBhdGhcclxuXHJcbiAgICBwcml2YXRlIF9wYXRoOiBzdHJpbmc7XHJcbiAgICBnZXQgcGF0aCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRoO1xyXG4gICAgfVxyXG4gICAgLy8gRm9yIHRoZSBtb21lbnQgd2UgZG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgY2FzZSBwYXRoIG5hbWVcclxuICAgIHNldCBwYXRoKG5ld1BhdGg6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChuZXdQYXRoID09IG51bGwpIHsgcmV0dXJuOyB9XHJcbiAgICAgICAgdGhpcy5fcGF0aCA9IG5ld1BhdGgudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBDb21tYW5kc1xyXG5cclxuICAgIGlzQ29tbWFuZEJyb3dzZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29tbWFuZEJyb3dzZTogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmRCcm93c2UoKTsgfTtcclxuICAgIGNvbW1hbmRCcm93c2VUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpc0NvbW1hbmRDYW5jZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbW1hbmRDYW5jZWw6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kQ2FuY2VsKCk7IH07XHJcbiAgICBjb21tYW5kQ2FuY2VsVGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgaXNDb21tYW5kQ29weTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNDb21tYW5kQ29weUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgY29tbWFuZENvcHk6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kQ29weSgpOyB9O1xyXG4gICAgY29tbWFuZENvcHlUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpc0NvbW1hbmREZWxldGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzQ29tbWFuZERlbGV0ZUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgY29tbWFuZERlbGV0ZTogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmREZWxldGUoKTsgfTtcclxuICAgIGNvbW1hbmREZWxldGVUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpc0NvbW1hbmREb2N1bWVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29tbWFuZERvY3VtZW50OiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZERvY3VtZW50KCk7IH07XHJcbiAgICBjb21tYW5kRG9jdW1lbnRUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpc0NvbW1hbmREb2N1bWVudDI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbW1hbmREb2N1bWVudDI6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kRG9jdW1lbnQyKCk7IH07XHJcbiAgICBjb21tYW5kRG9jdW1lbnQyVGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgaXNDb21tYW5kRG9jdW1lbnQzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb21tYW5kRG9jdW1lbnQzOiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZERvY3VtZW50MygpOyB9O1xyXG4gICAgY29tbWFuZERvY3VtZW50M1RleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGlzQ29tbWFuZERvY3VtZW50NDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29tbWFuZERvY3VtZW50NDogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmREb2N1bWVudDQoKTsgfTtcclxuICAgIGNvbW1hbmREb2N1bWVudDRUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpc0NvbW1hbmREb2N1bWVudDU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbW1hbmREb2N1bWVudDU6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kRG9jdW1lbnQ1KCk7IH07XHJcbiAgICBjb21tYW5kRG9jdW1lbnQ1VGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgaXNDb21tYW5kTmV3OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb21tYW5kTmV3OiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZE5ldygpOyB9O1xyXG4gICAgY29tbWFuZE5ld1RleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGlzQ29tbWFuZE9yZGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb21tYW5kT3JkZXI6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kT3JkZXIoKTsgfTtcclxuICAgIGNvbW1hbmRPcmRlclRleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGlzQ29tbWFuZFJlc3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbW1hbmRSZXN0YXJ0OiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZFJlc3RhcnQoKTsgfTtcclxuICAgIGNvbW1hbmRSZXN0YXJ0VGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgaXNDb21tYW5kU2F2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNDb21tYW5kU2F2ZUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgY29tbWFuZFNhdmU6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kU2F2ZSgpOyB9O1xyXG4gICAgY29tbWFuZFNhdmVUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpc0NvbW1hbmRTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbW1hbmRTZWFyY2g6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kU2VhcmNoKCk7IH07XHJcbiAgICBjb21tYW5kU2VhcmNoVGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgaXNDb21tYW5kU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbW1hbmRTdGFydDogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmRTdGFydCgpOyB9O1xyXG4gICAgY29tbWFuZFN0YXJ0VGV4dDogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgaXNDb21tYW5kU3RvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29tbWFuZFN0b3A6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kU3RvcCgpOyB9O1xyXG4gICAgY29tbWFuZFN0b3BUZXh0OiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBpc0NvbW1hbmRTd2FwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb21tYW5kU3dhcDogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmRTd2FwKCk7IH07XHJcbiAgICBjb21tYW5kU3dhcFRleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIGlzQ29tbWFuZEV4Y2VsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb21tYW5kRXhjZWw6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kRXhjZWwoKTsgfTtcclxuICAgIGNvbW1hbmRFeGNlbFRleHQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgIC8vICNlbmRyZWdpb25cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvcnNcclxuXHJcbiAgICAvLyBtYWluU2VydmljZTogTWFpblNlcnZpY2UsIFxyXG4gICAgY29uc3RydWN0b3IocGF0aDogc3RyaW5nID0gJycsIHRpdGxlOiBzdHJpbmcgPSAnJywgc3VidGl0bGU6IHN0cmluZyA9ICcnLCB3aWR0aDogbnVtYmVyID0gMjAwKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmJyb3dzZXJTZXJ2aWNlID0gSW5qZWN0b3JTZXJ2aWNlLmdldEluamVjdG9yKCkuZ2V0KEJyb3dzZXJTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmJyb3dzZXJTZXJ2aWNlLm9uUmVzaXplLnN1YnNjcmliZSgodmlld3BvcnQpID0+IHRoaXMudmlld3BvcnQgPSB2aWV3cG9ydCk7XHJcblxyXG4gICAgICAgIHRoaXMudm0gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuc3ViVGl0bGUgPSBzdWJ0aXRsZTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG4gICAgICAgIHRoaXMud2lkdGhTdGFja0xheW91dC53aWR0aCA9IHdpZHRoIC0gNTAgKyAncHgnOyAgLy8gNTAgPSBwYWRkaW5nIChsZWZ0IGFuZCByaWdodClcclxuXHJcbiAgICAgICAgLy9pZiAoIW1haW5TZXJ2aWNlKSB7IHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgXFwnbWFpblNlcnZpY2VcXCcgbXVzdCBiZSBwcm92aWRlZC4nKTsgfVxyXG4gICAgICAgIGlmICghcGF0aCkgeyB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gY29uc3RydWN0b3IgcGFyYW1ldGVyIFxcJ3BhdGhcXCcgbXVzdCBiZSBhIHN0cmluZy4nKTsgfVxyXG4gICAgICAgIGlmICghdGl0bGUgJiYgdGl0bGUgIT09ICcnKSB7IHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgXFwndGl0bGVcXCcgbXVzdCBiZSBhIHN0cmluZyB3aGVuIHByb3ZpZGVkLicpOyB9XHJcbiAgICAgICAgaWYgKCFzdWJ0aXRsZSAmJiBzdWJ0aXRsZSAhPT0gJycpIHsgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIGNvbnN0cnVjdG9yIHBhcmFtZXRlciBcXCdzdWJ0aXRsZVxcJyBtdXN0IGJlIGEgc3RyaW5nIHdoZW4gcHJvdmlkZWQuJyk7IH1cclxuICAgICAgICBpZiAoIXdpZHRoICYmIHdpZHRoICE9PSAwKSB7IHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgXFwnd2lkdGhcXCcgbXVzdCBiZSBhIG51bWJlciB3aGVuIHByb3ZpZGVkLicpOyB9XHJcblxyXG4gICAgICAgIGlmICh3aWR0aCA8IDUwKSB7IHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgXFwnd2lkdGhcXCcgbXVzdCBiZSBhdCBsZWFzdCA1MC4nKTsgfVxyXG5cclxuICAgICAgICAvLyBTZXQgJ3RoaXMubWFpblNlcnZpY2UuYXJlYUJsYWRlcy5ibGFkZXNbaW5kZXhdJyB0byAndGhpcydcclxuICAgICAgICAvLyAgICAgJ3RoaXMubWFpblNlcnZpY2UuYXJlYUJsYWRlcy5ibGFkZXNbaW5kZXhdJyB3YXMgZ2VuZXJhdGVkIGR1cmluZyBBZGRCbGFkZVxyXG4gICAgICAgIC8vdGhpcy5tYWluU2VydmljZS5hcmVhQmxhZGVzLmJsYWRlcy5mb3JFYWNoKChibGFkZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAvLyAgICBpZiAoYmxhZGUucGF0aCAhPSBudWxsICYmIHRoaXMucGF0aCAhPSBudWxsICYmIGJsYWRlLnBhdGgudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy5wYXRoLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAvLyAgICAgICAgdGhpcy5tYWluU2VydmljZS5hcmVhQmxhZGVzLmJsYWRlc1tpbmRleF0gPSB0aGlzO1xyXG4gICAgICAgIC8vICAgIH1cclxuICAgICAgICAvL30pO1xyXG5cclxuICAgICAgICAvL3RoaXMuYnJvd3NlcldpbmRvdy5zZXR1cFdpbmRvd1Jlc2l6ZUxpc3RlbmVyKCgpID0+IHsgdGhpcy5zZXRCbGFkZUhlaWdodHMoKTsgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRCbGFkZUhlaWdodHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBBbmd1bGFyIE1ldGhvZHNcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbmdPbkluaXQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI3JlZ2lvbiBQdWJsaWMgTWV0aG9kc1xyXG5cclxuICAgIGFjdGl2YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25BY3RpdmF0ZSgpO1xyXG4gICAgICAgIHRoaXMub25BY3RpdmF0ZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZVRvKHBhdGg6IGFueSkge1xyXG4gICAgICAgIHRoaXMub25OYXZpZ2F0ZVRvKHBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBNdXN0IGJlIG92ZXJyaWRkZW4uICovXHJcbiAgICBvbk5hdmlnYXRlVG8odmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbk5hdmlnYXRlVG9cXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXQgdGhlIG1vbWVudCB3ZSBkbyBub3QgZGlzdGluZ3Vpc2ggYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgY2FzZSBwYXRoIG5hbWVcclxuICAgIGNvbXBhcmVQYXRocyhwYXRoMTogc3RyaW5nLCBwYXRoMjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHBhdGgxID09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICAgICAgaWYgKHBhdGgyID09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XHJcbiAgICAgICAgaWYgKHBhdGgxLnRvTG93ZXJDYXNlKCkgPT09IHBhdGgyLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiogY2xvc2UgYmxhZGUuICovXHJcbiAgICBjbG9zZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMub25DbG9zZSkge1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIGRvIG5vdCBjbG9zZSBibGFkZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9pZiAodGhpcy5tYWluU2VydmljZS5hcmVhQmxhZGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAvLyAgICB0aGlzLm1haW5TZXJ2aWNlLmFyZWFCbGFkZXMuY2xlYXJQYXRoKHRoaXMucGF0aCk7XHJcbiAgICAgICAgLy99IGVsc2Uge1xyXG4gICAgICAgIC8vICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBwYXRoOiBcXCcnICsgdGhpcy5wYXRoICsgJ1xcJyBjb3VsZCBub3QgYmUgcmVtb3ZlZCwgc2luY2Ugbm8gXFwndGhpcy5tYWluU2VydmljZS5hcmVhQmxhZGVzXFwnIGF2YWlsYWJsZS4nKTtcclxuICAgICAgICAvL31cclxuICAgIH1cclxuXHJcbiAgICAvKiogT3ZlcnJpZGUgKi9cclxuICAgIG9uQ2xvc2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vKiogQ2hhbmdlIHRpdGxlLCBhcyBzb29uIGFzIHdhdGNoRXhwcmVzc2lvbiBjaGFuZ2VzLiB3YXRjaEV4cHJlc3Npb24gaXMgZWl0aGVyIGEgdmFyaWFibGUgb3JlIGFuIGV4cHJlc3Npb24sIGUuZy4gW25hbWUxICsgbmFtZTJdICovXHJcbiAgICAvL3NldFRpdGxlKHdhdGNoRXhwcmVzc2lvbjogc3RyaW5nLCBmdW5jOiAoKSA9PiB2b2lkKSB7XHJcbiAgICAvLyAgICBpZiAodGhpcy53YXRjaGVyVGl0bGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICAgICAgIGlmICh0aGlzLiRzY29wZSAhPT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgICAgICAvLyBhbmd1bGFyMVxyXG4gICAgLy8gICAgICAgICAgICB0aGlzLndhdGNoZXJUaXRsZSA9IHRoaXMuJHNjb3BlLiR3YXRjaCh3YXRjaEV4cHJlc3Npb24sICgpID0+IHsgZnVuYygpOyB9KTtcclxuICAgIC8vICAgICAgICAgICAgdGhpcy4kc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHsgdGhpcy53YXRjaGVyVGl0bGUoKTsgfSk7XHJcbiAgICAvLyAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgLy8gYW5ndWxhcjJcclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICB9XHJcbiAgICAvL31cclxuXHJcbiAgICAvLyAjcmVnaW9uIENvbW1hbmRzXHJcblxyXG4gICAgb25Db21tYW5kQnJvd3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRCcm93c2VcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRDYW5jZWxcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kQ29weSgpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kQ29weVxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbW1hbmREZWxldGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZERlbGV0ZVxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbW1hbmREb2N1bWVudCgpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kRG9jdW1lbnRcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kRG9jdW1lbnQyKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmREb2N1bWVudDJcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kRG9jdW1lbnQzKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmREb2N1bWVudDNcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kRG9jdW1lbnQ0KCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmREb2N1bWVudDRcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kRG9jdW1lbnQ1KCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmREb2N1bWVudDVcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kTmV3KCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmROZXdcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kT3JkZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZE9yZGVyXFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29tbWFuZFJlc3RhcnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZFJlc3RhcnRcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kU2F2ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kU2F2ZVxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbW1hbmRTZWFyY2goKTogdm9pZCB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZFNlYXJjaFxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbW1hbmRTdGFydCgpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kU3RhcnRcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21tYW5kU3RvcCgpOiB2b2lkIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kU3RvcFxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbW1hbmRTd2FwKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRTd2FwXFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29tbWFuZEV4Y2VsKCk6IHZvaWQge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRFeGNlbFxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG5cclxuICAgIC8vICNyZWdpb24gUHJpdmF0ZSBNZXRob2RzXHJcblxyXG4gICAgcHJpdmF0ZSBzZXRCbGFkZUhlaWdodHMoKTogdm9pZCB7XHJcbiAgICAgICAgLy90aGlzLmJsYWRlQ29udGVudEhlaWdodCA9IHRoaXMubWFpblNlcnZpY2UuYnJvd3NlcldpbmRvd1NlcnZpY2UuYnJvd3NlcldpbmRvdy5pbm5lckhlaWdodCAtIDQwIC0gMTI1OyAvLyA0MCA9IHRvcGJhciwgMTI1ID0gYmxhZGUgaGVhZGVyXHJcbiAgICAgICAgdGhpcy5ibGFkZUNvbnRlbnRIZWlnaHRJbm5lciA9IHRoaXMuYmxhZGVDb250ZW50SGVpZ2h0IC0gNTAgLSAzOyAvLyA1MCA9IHBhZGRpbmcgKHRvcCBhbmQgYm90dG9tKSwgc29tZWhvdyB3ZSBtaXNzIDNweFxyXG5cclxuICAgICAgICAvLyB0aGlzLm1haW5TZXJ2aWNlLiR0aW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyB9LCA1MCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gI2VuZHJlZ2lvblxyXG59XHJcbiJdfQ==