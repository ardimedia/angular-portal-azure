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
var Blade = /** @class */ (function (_super) {
    __extends(Blade, _super);
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    function Blade(portalService, path, title, subtitle, width) {
        if (subtitle === void 0) { subtitle = ''; }
        if (width === void 0) { width = 200; }
        var _this = _super.call(this, portalService) || this;
        // #endregion
        // #region Properties
        /**
         * HACK: 2016-11-06/hp
         * [angular-portal-blade] needs [this] as the controller.
         * We don't know how to provide [this] to the directive.
         * So we came up with this [vm] property.
         */
        _this.vm = {};
        // Indicates if maximize icon is shown
        // TODO: 2019-09-26/hp: it probably should be named isMaximizedShown
        _this.isMaximize = false;
        // TODO: 2019-09-26/hp: not sure what that is, checkout
        _this.isCommandMore = false;
        // Indicates if this is a navigation blade
        _this.isNav = false;
        // Indicates if this is a navigation grid blade
        _this.isGrid = false;
        _this.visibility = 'collapse';
        _this.title = '';
        _this.subTitle = '';
        _this.width = { 'width': '0' };
        _this.widthStackLayout = { 'width': '50px' };
        _this.isInnerHtml = true;
        // #endregion
        // #endregion
        // #region Commands
        _this.isCommandBrowse = false;
        _this.isCommandBrowseEnabled = true;
        _this.commandBrowse = (/**
         * @return {?}
         */
        function () { _this.onCommandBrowse(); });
        _this.commandBrowseText = '';
        _this.isCommandCancel = false;
        _this.isCommandCancelEnabled = true;
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
        _this.isCommandDocumentEnabled = true;
        _this.commandDocument = (/**
         * @return {?}
         */
        function () { _this.onCommandDocument(); });
        _this.commandDocumentText = '';
        _this.isCommandDocument2 = false;
        _this.isCommandDocument2Enabled = true;
        _this.commandDocument2 = (/**
         * @return {?}
         */
        function () { _this.onCommandDocument2(); });
        _this.commandDocument2Text = '';
        _this.isCommandDocument3 = false;
        _this.isCommandDocument3Enabled = true;
        _this.commandDocument3 = (/**
         * @return {?}
         */
        function () { _this.onCommandDocument3(); });
        _this.commandDocument3Text = '';
        _this.isCommandDocument4 = false;
        _this.isCommandDocument4Enabled = true;
        _this.commandDocument4 = (/**
         * @return {?}
         */
        function () { _this.onCommandDocument4(); });
        _this.commandDocument4Text = '';
        _this.isCommandDocument5 = false;
        _this.isCommandDocument5Enabled = true;
        _this.commandDocument5 = (/**
         * @return {?}
         */
        function () { _this.onCommandDocument5(); });
        _this.commandDocument5Text = '';
        _this.isCommandNew = false;
        _this.isCommandNewEnabled = true;
        _this.commandNew = (/**
         * @return {?}
         */
        function () { _this.onCommandNew(); });
        _this.commandNewText = '';
        _this.isCommandOrder = false;
        _this.isCommandOrderEnabled = true;
        _this.commandOrder = (/**
         * @return {?}
         */
        function () { _this.onCommandOrder(); });
        _this.commandOrderText = '';
        _this.isCommandRestart = false;
        _this.isCommandRestartEnabled = true;
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
        _this.isCommandSearchEnabled = true;
        _this.commandSearch = (/**
         * @return {?}
         */
        function () { _this.onCommandSearch(); });
        _this.commandSearchText = '';
        _this.isCommandStart = false;
        _this.isCommandStartEnabled = true;
        _this.commandStart = (/**
         * @return {?}
         */
        function () { _this.onCommandStart(); });
        _this.commandStartText = '';
        _this.isCommandStop = false;
        _this.isCommandStopEnabled = true;
        _this.commandStop = (/**
         * @return {?}
         */
        function () { _this.onCommandStop(); });
        _this.commandStopText = '';
        _this.isCommandSwap = false;
        _this.isCommandSwapEnabled = true;
        _this.commandSwap = (/**
         * @return {?}
         */
        function () { _this.onCommandSwap(); });
        _this.commandSwapText = '';
        _this.isCommandExcel = false;
        _this.isCommandExcelEnabled = true;
        _this.commandExcel = (/**
         * @return {?}
         */
        function () { _this.onCommandExcel(); });
        _this.commandExcelText = '';
        _this.vm = _this;
        _this.path = path;
        _this.title = title;
        _this.subTitle = subtitle;
        _this.width.width = width + 'px';
        _this.widthStackLayout.width = width - 50 + 'px'; // 50 = padding (left and right)
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
        _this.portalService.areaBlades.blades.forEach((/**
         * @param {?} blade
         * @param {?} index
         * @return {?}
         */
        function (blade, index) {
            if (blade.path != null && _this.path != null && blade.path.toLowerCase() === _this.path.toLowerCase()) {
                _this.portalService.areaBlades.blades[index] = _this;
            }
        }));
        _this.setupWindowResizeListener((/**
         * @return {?}
         */
        function () { _this.setBladeHeights(); }));
        _this.setBladeHeights();
        return _this;
    }
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
    // #region Methods
    // #endregion
    // #region Methods
    /**
     * @return {?}
     */
    Blade.prototype.activate = 
    // #endregion
    // #region Methods
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
        if (this.portalService.areaBlades !== undefined) {
            this.portalService.areaBlades.clearPath(this.path);
        }
        else {
            throw new Error('[Blade] path: \'' + this.path + '\' could not be removed, since no \'this.portalService.areaBlades\' available.');
        }
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
    // #region Commands
    // #region Commands
    /**
     * @return {?}
     */
    Blade.prototype.onCommandBrowse = 
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
    /** Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2] */
    // #endregion
    // #endregion
    /**
     * Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2]
     * @param {?} watchExpression
     * @param {?} func
     * @return {?}
     */
    Blade.prototype.setTitle = 
    // #endregion
    // #endregion
    /**
     * Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2]
     * @param {?} watchExpression
     * @param {?} func
     * @return {?}
     */
    function (watchExpression, func) {
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
    };
    /**
     * @private
     * @return {?}
     */
    Blade.prototype.setBladeHeights = /**
     * @private
     * @return {?}
     */
    function () {
        this.bladeContentHeight = window.innerHeight - 40 - 125; // 40 = topbar, 125 = blade header
        this.bladeContentHeightInner = this.bladeContentHeight - 50 - 3; // 50 = padding (top and bottom), somehow we miss 3px
        // this.portalService.$timeout(() => { }, 50);
        //window.setTimeout(() => { }, 50);
    };
    return Blade;
}(UserControlBase));
export { Blade };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLXBvcnRhbC1henVyZS8iLCJzb3VyY2VzIjpbImxpYi9kb21haW4vYmxhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJdEQ7SUFBMkIseUJBQWU7SUFDdEMsc0JBQXNCO0lBRXRCLCtDQUErQztJQUMvQyxlQUFZLGFBQTRCLEVBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxRQUFxQixFQUFFLEtBQW1CO1FBQTFDLHlCQUFBLEVBQUEsYUFBcUI7UUFBRSxzQkFBQSxFQUFBLFdBQW1CO1FBQWpILFlBQ0ksa0JBQU0sYUFBYSxDQUFDLFNBMkJ2Qjs7Ozs7Ozs7O1FBVUQsUUFBRSxHQUFRLEVBQUUsQ0FBQzs7O1FBSWIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7O1FBRzVCLG1CQUFhLEdBQVksS0FBSyxDQUFDOztRQUcvQixXQUFLLEdBQVksS0FBSyxDQUFDOztRQUd2QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLGdCQUFVLEdBQVcsVUFBVSxDQUFDO1FBT2hDLFdBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsY0FBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixXQUFLLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDekIsc0JBQWdCLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFFdkMsaUJBQVcsR0FBWSxJQUFJLENBQUM7Ozs7UUFzQjVCLHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLDRCQUFzQixHQUFZLElBQUksQ0FBQztRQUN2QyxtQkFBYTs7O1FBQWUsY0FBUSxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDOUQsdUJBQWlCLEdBQVcsRUFBRSxDQUFDO1FBRS9CLHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLDRCQUFzQixHQUFZLElBQUksQ0FBQztRQUN2QyxtQkFBYTs7O1FBQWUsY0FBUSxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDOUQsdUJBQWlCLEdBQVcsRUFBRSxDQUFDO1FBRS9CLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLDBCQUFvQixHQUFZLElBQUksQ0FBQztRQUNyQyxpQkFBVzs7O1FBQWUsY0FBUSxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDMUQscUJBQWUsR0FBVyxFQUFFLENBQUM7UUFFN0IscUJBQWUsR0FBWSxLQUFLLENBQUM7UUFDakMsNEJBQXNCLEdBQVksSUFBSSxDQUFDO1FBQ3ZDLG1CQUFhOzs7UUFBZSxjQUFRLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQztRQUM5RCx1QkFBaUIsR0FBVyxFQUFFLENBQUM7UUFFL0IsdUJBQWlCLEdBQVksS0FBSyxDQUFDO1FBQ25DLDhCQUF3QixHQUFZLElBQUksQ0FBQztRQUN6QyxxQkFBZTs7O1FBQWUsY0FBUSxLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQztRQUNsRSx5QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFFakMsd0JBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLCtCQUF5QixHQUFZLElBQUksQ0FBQztRQUMxQyxzQkFBZ0I7OztRQUFlLGNBQVEsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDcEUsMEJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBRWxDLHdCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQywrQkFBeUIsR0FBWSxJQUFJLENBQUM7UUFDMUMsc0JBQWdCOzs7UUFBZSxjQUFRLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDO1FBQ3BFLDBCQUFvQixHQUFXLEVBQUUsQ0FBQztRQUVsQyx3QkFBa0IsR0FBWSxLQUFLLENBQUM7UUFDcEMsK0JBQXlCLEdBQVksSUFBSSxDQUFDO1FBQzFDLHNCQUFnQjs7O1FBQWUsY0FBUSxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQztRQUNwRSwwQkFBb0IsR0FBVyxFQUFFLENBQUM7UUFFbEMsd0JBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLCtCQUF5QixHQUFZLElBQUksQ0FBQztRQUMxQyxzQkFBZ0I7OztRQUFlLGNBQVEsS0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDcEUsMEJBQW9CLEdBQVcsRUFBRSxDQUFDO1FBRWxDLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLHlCQUFtQixHQUFZLElBQUksQ0FBQztRQUNwQyxnQkFBVTs7O1FBQWUsY0FBUSxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDeEQsb0JBQWMsR0FBVyxFQUFFLENBQUM7UUFFNUIsb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsMkJBQXFCLEdBQVksSUFBSSxDQUFDO1FBQ3RDLGtCQUFZOzs7UUFBZSxjQUFRLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQztRQUM1RCxzQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFFOUIsc0JBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLDZCQUF1QixHQUFZLElBQUksQ0FBQztRQUN4QyxvQkFBYzs7O1FBQWUsY0FBUSxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQztRQUNoRSx3QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFFaEMsbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsMEJBQW9CLEdBQVksSUFBSSxDQUFDO1FBQ3JDLGlCQUFXOzs7UUFBZSxjQUFRLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQztRQUMxRCxxQkFBZSxHQUFXLEVBQUUsQ0FBQztRQUU3QixxQkFBZSxHQUFZLEtBQUssQ0FBQztRQUNqQyw0QkFBc0IsR0FBWSxJQUFJLENBQUM7UUFDdkMsbUJBQWE7OztRQUFlLGNBQVEsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDO1FBQzlELHVCQUFpQixHQUFXLEVBQUUsQ0FBQztRQUUvQixvQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQywyQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFDdEMsa0JBQVk7OztRQUFlLGNBQVEsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDO1FBQzVELHNCQUFnQixHQUFXLEVBQUUsQ0FBQztRQUU5QixtQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQiwwQkFBb0IsR0FBWSxJQUFJLENBQUM7UUFDckMsaUJBQVc7OztRQUFlLGNBQVEsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFDO1FBQzFELHFCQUFlLEdBQVcsRUFBRSxDQUFDO1FBRTdCLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLDBCQUFvQixHQUFZLElBQUksQ0FBQztRQUNyQyxpQkFBVzs7O1FBQWUsY0FBUSxLQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUM7UUFDMUQscUJBQWUsR0FBVyxFQUFFLENBQUM7UUFFN0Isb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsMkJBQXFCLEdBQVksSUFBSSxDQUFDO1FBQ3RDLGtCQUFZOzs7UUFBZSxjQUFRLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQztRQUM1RCxzQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUE1SzFCLEtBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSSxDQUFDO1FBQ2YsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsS0FBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNoQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUUsZ0NBQWdDO1FBRWxGLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7U0FBRTtRQUM3RyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1NBQUU7UUFDM0YsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDO1NBQUU7UUFDM0gsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLEtBQUssRUFBRSxFQUFFO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO1NBQUU7UUFDcEksSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDO1NBQUU7UUFFMUgsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO1lBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1NBQUU7UUFFcEcsOERBQThEO1FBQzlELGtGQUFrRjtRQUNsRixLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLEtBQUssRUFBRSxLQUFLO1lBQ3RELElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksS0FBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUNqRyxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSSxDQUFDO2FBQ3REO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFFSCxLQUFJLENBQUMseUJBQXlCOzs7UUFBQyxjQUFRLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQ2xFLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7SUFDM0IsQ0FBQztJQTRDRCxzQkFBSSx1QkFBSTs7OztRQUFSO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7UUFDRCwwRUFBMEU7Ozs7Ozs7UUFDMUUsVUFBUyxPQUFlO1lBQ3BCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsQ0FBQzs7O09BTEE7SUF1R0QsYUFBYTtJQUViLGtCQUFrQjs7Ozs7O0lBRWxCLHdCQUFROzs7Ozs7SUFBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCwwQkFBVTs7OztJQUFWLFVBQVcsSUFBUztRQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCwwQkFBMEI7Ozs7OztJQUMxQiw0QkFBWTs7Ozs7SUFBWixVQUFhLEtBQVU7UUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxvRkFBb0YsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFFRCw2RUFBNkU7Ozs7Ozs7SUFDN0UsNEJBQVk7Ozs7Ozs7SUFBWixVQUFhLEtBQWEsRUFBRSxLQUFhO1FBQ3JDLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUFFLE9BQU8sS0FBSyxDQUFDO1NBQUU7UUFDcEMsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQUUsT0FBTyxLQUFLLENBQUM7U0FBRTtRQUNwQyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUM7U0FDZjthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDaEI7SUFDTCxDQUFDO0lBRUQsbUJBQW1COzs7OztJQUNuQixxQkFBSzs7OztJQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixPQUFPLENBQUMscUJBQXFCO1NBQ2hDO1FBRUQsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0RDthQUFNO1lBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLGdGQUFnRixDQUFDLENBQUM7U0FDdEk7SUFDTCxDQUFDO0lBRUQsZUFBZTs7Ozs7SUFDZix1QkFBTzs7OztJQUFQO1FBQ0ksT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELG1CQUFtQjs7Ozs7SUFFbkIsK0JBQWU7Ozs7O0lBQWY7UUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHVGQUF1RixDQUFDLENBQUM7SUFDN0csQ0FBQzs7OztJQUVELCtCQUFlOzs7SUFBZjtRQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsdUZBQXVGLENBQUMsQ0FBQztJQUM3RyxDQUFDOzs7O0lBRUQsNkJBQWE7OztJQUFiO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxxRkFBcUYsQ0FBQyxDQUFDO0lBQzNHLENBQUM7Ozs7SUFFRCwrQkFBZTs7O0lBQWY7UUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHVGQUF1RixDQUFDLENBQUM7SUFDN0csQ0FBQzs7OztJQUVELGlDQUFpQjs7O0lBQWpCO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx5RkFBeUYsQ0FBQyxDQUFDO0lBQy9HLENBQUM7Ozs7SUFFRCxrQ0FBa0I7OztJQUFsQjtRQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsMEZBQTBGLENBQUMsQ0FBQztJQUNoSCxDQUFDOzs7O0lBRUQsa0NBQWtCOzs7SUFBbEI7UUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLDBGQUEwRixDQUFDLENBQUM7SUFDaEgsQ0FBQzs7OztJQUVELGtDQUFrQjs7O0lBQWxCO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQywwRkFBMEYsQ0FBQyxDQUFDO0lBQ2hILENBQUM7Ozs7SUFFRCxrQ0FBa0I7OztJQUFsQjtRQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsMEZBQTBGLENBQUMsQ0FBQztJQUNoSCxDQUFDOzs7O0lBRUQsNEJBQVk7OztJQUFaO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxvRkFBb0YsQ0FBQyxDQUFDO0lBQzFHLENBQUM7Ozs7SUFFRCw4QkFBYzs7O0lBQWQ7UUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHNGQUFzRixDQUFDLENBQUM7SUFDNUcsQ0FBQzs7OztJQUVELGdDQUFnQjs7O0lBQWhCO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyx3RkFBd0YsQ0FBQyxDQUFDO0lBQzlHLENBQUM7Ozs7SUFFRCw2QkFBYTs7O0lBQWI7UUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHFGQUFxRixDQUFDLENBQUM7SUFDM0csQ0FBQzs7OztJQUVELCtCQUFlOzs7SUFBZjtRQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMsdUZBQXVGLENBQUMsQ0FBQztJQUM3RyxDQUFDOzs7O0lBRUQsOEJBQWM7OztJQUFkO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxzRkFBc0YsQ0FBQyxDQUFDO0lBQzVHLENBQUM7Ozs7SUFFRCw2QkFBYTs7O0lBQWI7UUFDSSxNQUFNLElBQUksS0FBSyxDQUFDLHFGQUFxRixDQUFDLENBQUM7SUFDM0csQ0FBQzs7OztJQUVELDZCQUFhOzs7SUFBYjtRQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMscUZBQXFGLENBQUMsQ0FBQztJQUMzRyxDQUFDOzs7O0lBRUQsOEJBQWM7OztJQUFkO1FBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxzRkFBc0YsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFRCxhQUFhO0lBRWIsYUFBYTtJQUViLHFJQUFxSTs7Ozs7Ozs7O0lBQ3JJLHdCQUFROzs7Ozs7Ozs7SUFBUixVQUFTLGVBQXVCLEVBQUUsSUFBZ0I7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBQ2xELHdDQUF3QztRQUN4QyxpQ0FBaUM7UUFDakMscUJBQXFCO1FBQ3JCLHFGQUFxRjtRQUNyRixzRUFBc0U7UUFDdEUsY0FBYztRQUNkLHFCQUFxQjtRQUNyQixtR0FBbUc7UUFDbkcsT0FBTztRQUNQLEdBQUc7SUFDUCxDQUFDOzs7OztJQUVPLCtCQUFlOzs7O0lBQXZCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLGtDQUFrQztRQUMzRixJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxxREFBcUQ7UUFFdEgsOENBQThDO1FBQzlDLG1DQUFtQztJQUN2QyxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUF4VUQsQ0FBMkIsZUFBZSxHQXdVekM7Ozs7Ozs7Ozs7SUE5UkcsbUJBQWE7O0lBSWIsMkJBQTRCOztJQUc1Qiw4QkFBK0I7O0lBRy9CLHNCQUF1Qjs7SUFHdkIsdUJBQXdCOztJQUV4QiwyQkFBZ0M7Ozs7O0lBRWhDLDZCQUFpQzs7SUFFakMsbUNBQTJCOztJQUMzQix3Q0FBZ0M7O0lBRWhDLHNCQUFtQjs7SUFDbkIseUJBQXNCOztJQUN0QixzQkFBeUI7O0lBQ3pCLGlDQUF1Qzs7SUFFdkMsNEJBQTRCOztJQUU1QiwwQkFBZTs7Ozs7SUFJZixzQkFBc0I7O0lBZ0J0QixnQ0FBaUM7O0lBQ2pDLHVDQUF1Qzs7SUFDdkMsOEJBQThEOztJQUM5RCxrQ0FBK0I7O0lBRS9CLGdDQUFpQzs7SUFDakMsdUNBQXVDOztJQUN2Qyw4QkFBOEQ7O0lBQzlELGtDQUErQjs7SUFFL0IsOEJBQStCOztJQUMvQixxQ0FBcUM7O0lBQ3JDLDRCQUEwRDs7SUFDMUQsZ0NBQTZCOztJQUU3QixnQ0FBaUM7O0lBQ2pDLHVDQUF1Qzs7SUFDdkMsOEJBQThEOztJQUM5RCxrQ0FBK0I7O0lBRS9CLGtDQUFtQzs7SUFDbkMseUNBQXlDOztJQUN6QyxnQ0FBa0U7O0lBQ2xFLG9DQUFpQzs7SUFFakMsbUNBQW9DOztJQUNwQywwQ0FBMEM7O0lBQzFDLGlDQUFvRTs7SUFDcEUscUNBQWtDOztJQUVsQyxtQ0FBb0M7O0lBQ3BDLDBDQUEwQzs7SUFDMUMsaUNBQW9FOztJQUNwRSxxQ0FBa0M7O0lBRWxDLG1DQUFvQzs7SUFDcEMsMENBQTBDOztJQUMxQyxpQ0FBb0U7O0lBQ3BFLHFDQUFrQzs7SUFFbEMsbUNBQW9DOztJQUNwQywwQ0FBMEM7O0lBQzFDLGlDQUFvRTs7SUFDcEUscUNBQWtDOztJQUVsQyw2QkFBOEI7O0lBQzlCLG9DQUFvQzs7SUFDcEMsMkJBQXdEOztJQUN4RCwrQkFBNEI7O0lBRTVCLCtCQUFnQzs7SUFDaEMsc0NBQXNDOztJQUN0Qyw2QkFBNEQ7O0lBQzVELGlDQUE4Qjs7SUFFOUIsaUNBQWtDOztJQUNsQyx3Q0FBd0M7O0lBQ3hDLCtCQUFnRTs7SUFDaEUsbUNBQWdDOztJQUVoQyw4QkFBK0I7O0lBQy9CLHFDQUFxQzs7SUFDckMsNEJBQTBEOztJQUMxRCxnQ0FBNkI7O0lBRTdCLGdDQUFpQzs7SUFDakMsdUNBQXVDOztJQUN2Qyw4QkFBOEQ7O0lBQzlELGtDQUErQjs7SUFFL0IsK0JBQWdDOztJQUNoQyxzQ0FBc0M7O0lBQ3RDLDZCQUE0RDs7SUFDNUQsaUNBQThCOztJQUU5Qiw4QkFBK0I7O0lBQy9CLHFDQUFxQzs7SUFDckMsNEJBQTBEOztJQUMxRCxnQ0FBNkI7O0lBRTdCLDhCQUErQjs7SUFDL0IscUNBQXFDOztJQUNyQyw0QkFBMEQ7O0lBQzFELGdDQUE2Qjs7SUFFN0IsK0JBQWdDOztJQUNoQyxzQ0FBc0M7O0lBQ3RDLDZCQUE0RDs7SUFDNUQsaUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9ydGFsU2VydmljZSB9IGZyb20gJy4vcG9ydGFsLXNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckFjY291bnQgfSBmcm9tICcuL3VzZXItYWNjb3VudCc7XG5pbXBvcnQgeyBVc2VyQ29udHJvbEJhc2UgfSBmcm9tICcuL3VzZXItY29udHJvbC1iYXNlJztcbmltcG9ydCB7IElBZGRCbGFkZUV2ZW50QXJncyB9IGZyb20gJy4vaWFkZC1ibGFkZS1ldmVudC1hcmdzJztcbmltcG9ydCB7IHRpbWVvdXQgfSBmcm9tICdxJztcclxuXG5leHBvcnQgY2xhc3MgQmxhZGUgZXh0ZW5kcyBVc2VyQ29udHJvbEJhc2Uge1xuICAgIC8vICNyZWdpb24gQ29uc3RydWN0b3JcblxuICAgIC8vc3RhdGljICRpbmplY3QgPSBbJyRzY29wZScsICdwb3J0YWxTZXJ2aWNlJ107XG4gICAgY29uc3RydWN0b3IocG9ydGFsU2VydmljZTogUG9ydGFsU2VydmljZSwgcGF0aDogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBzdWJ0aXRsZTogc3RyaW5nID0gJycsIHdpZHRoOiBudW1iZXIgPSAyMDApIHsvLyRzY29wZTogYW55LFxuICAgICAgICBzdXBlcihwb3J0YWxTZXJ2aWNlKTsgLy8kc2NvcGUsXG5cbiAgICAgICAgdGhpcy52bSA9IHRoaXM7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5zdWJUaXRsZSA9IHN1YnRpdGxlO1xuICAgICAgICB0aGlzLndpZHRoLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLndpZHRoU3RhY2tMYXlvdXQud2lkdGggPSB3aWR0aCAtIDUwICsgJ3B4JzsgIC8vIDUwID0gcGFkZGluZyAobGVmdCBhbmQgcmlnaHQpXG5cbiAgICAgICAgaWYgKCFwb3J0YWxTZXJ2aWNlKSB7IHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgXFwncG9ydGFsU2VydmljZVxcJyBtdXN0IGJlIHByb3ZpZGVkLicpOyB9XG4gICAgICAgIGlmICghcGF0aCkgeyB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gY29uc3RydWN0b3IgcGFyYW1ldGVyIFxcJ3BhdGhcXCcgbXVzdCBiZSBhIHN0cmluZy4nKTsgfVxuICAgICAgICBpZiAoIXRpdGxlICYmIHRpdGxlICE9PSAnJykgeyB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gY29uc3RydWN0b3IgcGFyYW1ldGVyIFxcJ3RpdGxlXFwnIG11c3QgYmUgYSBzdHJpbmcgd2hlbiBwcm92aWRlZC4nKTsgfVxuICAgICAgICBpZiAoIXN1YnRpdGxlICYmIHN1YnRpdGxlICE9PSAnJykgeyB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gY29uc3RydWN0b3IgcGFyYW1ldGVyIFxcJ3N1YnRpdGxlXFwnIG11c3QgYmUgYSBzdHJpbmcgd2hlbiBwcm92aWRlZC4nKTsgfVxuICAgICAgICBpZiAoIXdpZHRoICYmIHdpZHRoICE9PSAwKSB7IHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBjb25zdHJ1Y3RvciBwYXJhbWV0ZXIgXFwnd2lkdGhcXCcgbXVzdCBiZSBhIG51bWJlciB3aGVuIHByb3ZpZGVkLicpOyB9XG5cbiAgICAgICAgaWYgKHdpZHRoIDwgNTApIHsgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIGNvbnN0cnVjdG9yIHBhcmFtZXRlciBcXCd3aWR0aFxcJyBtdXN0IGJlIGF0IGxlYXN0IDUwLicpOyB9XG5cbiAgICAgICAgLy8gU2V0ICd0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYUJsYWRlcy5ibGFkZXNbaW5kZXhdJyB0byAndGhpcydcbiAgICAgICAgLy8gICAgICd0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYUJsYWRlcy5ibGFkZXNbaW5kZXhdJyB3YXMgZ2VuZXJhdGVkIGR1cmluZyBBZGRCbGFkZVxuICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYUJsYWRlcy5ibGFkZXMuZm9yRWFjaCgoYmxhZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoYmxhZGUucGF0aCAhPSBudWxsICYmIHRoaXMucGF0aCAhPSBudWxsICYmIGJsYWRlLnBhdGgudG9Mb3dlckNhc2UoKSA9PT0gdGhpcy5wYXRoLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYUJsYWRlcy5ibGFkZXNbaW5kZXhdID0gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXR1cFdpbmRvd1Jlc2l6ZUxpc3RlbmVyKCgpID0+IHsgdGhpcy5zZXRCbGFkZUhlaWdodHMoKTsgfSk7XG4gICAgICAgIHRoaXMuc2V0QmxhZGVIZWlnaHRzKCk7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBQcm9wZXJ0aWVzXG5cbiAgICAvKiogSEFDSzogMjAxNi0xMS0wNi9ocFxuICAgIFthbmd1bGFyLXBvcnRhbC1ibGFkZV0gbmVlZHMgW3RoaXNdIGFzIHRoZSBjb250cm9sbGVyLlxuICAgIFdlIGRvbid0IGtub3cgaG93IHRvIHByb3ZpZGUgW3RoaXNdIHRvIHRoZSBkaXJlY3RpdmUuXG4gICAgU28gd2UgY2FtZSB1cCB3aXRoIHRoaXMgW3ZtXSBwcm9wZXJ0eS4qL1xuICAgIHZtOiBhbnkgPSB7fTtcblxuICAgIC8vIEluZGljYXRlcyBpZiBtYXhpbWl6ZSBpY29uIGlzIHNob3duXG4gICAgLy8gVE9ETzogMjAxOS0wOS0yNi9ocDogaXQgcHJvYmFibHkgc2hvdWxkIGJlIG5hbWVkIGlzTWF4aW1pemVkU2hvd25cbiAgICBpc01heGltaXplOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvLyBUT0RPOiAyMDE5LTA5LTI2L2hwOiBub3Qgc3VyZSB3aGF0IHRoYXQgaXMsIGNoZWNrb3V0XG4gICAgaXNDb21tYW5kTW9yZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLy8gSW5kaWNhdGVzIGlmIHRoaXMgaXMgYSBuYXZpZ2F0aW9uIGJsYWRlXG4gICAgaXNOYXY6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8vIEluZGljYXRlcyBpZiB0aGlzIGlzIGEgbmF2aWdhdGlvbiBncmlkIGJsYWRlXG4gICAgaXNHcmlkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICB2aXNpYmlsaXR5OiBzdHJpbmcgPSAnY29sbGFwc2UnO1xuXG4gICAgcHJpdmF0ZSB3YXRjaGVyVGl0bGU6ICgpID0+IHZvaWQ7XG5cbiAgICBibGFkZUNvbnRlbnRIZWlnaHQ6IG51bWJlcjtcbiAgICBibGFkZUNvbnRlbnRIZWlnaHRJbm5lcjogbnVtYmVyO1xuXG4gICAgdGl0bGU6IHN0cmluZyA9ICcnO1xuICAgIHN1YlRpdGxlOiBzdHJpbmcgPSAnJztcbiAgICB3aWR0aCA9IHsgJ3dpZHRoJzogJzAnIH07XG4gICAgd2lkdGhTdGFja0xheW91dCA9IHsgJ3dpZHRoJzogJzUwcHgnIH07XG5cbiAgICBpc0lubmVySHRtbDogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBmb3JtYmxhZGU6IGFueTsgLy8gYW5ndWxhci5JRm9ybUNvbnRyb2xsZXI7IC8vIG5hbWUgb2YgdGhlIG5nLWZvcm0gZGlyZWN0aXZlXG5cbiAgICAvLyAjcmVnaW9uIHBhdGhcblxuICAgIHByaXZhdGUgX3BhdGg6IHN0cmluZztcbiAgICBnZXQgcGF0aCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgICB9XG4gICAgLy8gRm9yIHRoZSBtb21lbnQgd2UgZG8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgY2FzZSBwYXRoIG5hbWVcbiAgICBzZXQgcGF0aChuZXdQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKG5ld1BhdGggPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5fcGF0aCA9IG5ld1BhdGgudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIENvbW1hbmRzXG5cbiAgICBpc0NvbW1hbmRCcm93c2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbW1hbmRCcm93c2VFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb21tYW5kQnJvd3NlOiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZEJyb3dzZSgpOyB9O1xuICAgIGNvbW1hbmRCcm93c2VUZXh0OiBzdHJpbmcgPSAnJztcblxuICAgIGlzQ29tbWFuZENhbmNlbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tbWFuZENhbmNlbEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbW1hbmRDYW5jZWw6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kQ2FuY2VsKCk7IH07XG4gICAgY29tbWFuZENhbmNlbFRleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNDb21tYW5kQ29weTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tbWFuZENvcHlFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb21tYW5kQ29weTogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmRDb3B5KCk7IH07XG4gICAgY29tbWFuZENvcHlUZXh0OiBzdHJpbmcgPSAnJztcblxuICAgIGlzQ29tbWFuZERlbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tbWFuZERlbGV0ZUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbW1hbmREZWxldGU6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kRGVsZXRlKCk7IH07XG4gICAgY29tbWFuZERlbGV0ZVRleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNDb21tYW5kRG9jdW1lbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbW1hbmREb2N1bWVudEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbW1hbmREb2N1bWVudDogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmREb2N1bWVudCgpOyB9O1xuICAgIGNvbW1hbmREb2N1bWVudFRleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNDb21tYW5kRG9jdW1lbnQyOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21tYW5kRG9jdW1lbnQyRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgY29tbWFuZERvY3VtZW50MjogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmREb2N1bWVudDIoKTsgfTtcbiAgICBjb21tYW5kRG9jdW1lbnQyVGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBpc0NvbW1hbmREb2N1bWVudDM6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbW1hbmREb2N1bWVudDNFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb21tYW5kRG9jdW1lbnQzOiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZERvY3VtZW50MygpOyB9O1xuICAgIGNvbW1hbmREb2N1bWVudDNUZXh0OiBzdHJpbmcgPSAnJztcblxuICAgIGlzQ29tbWFuZERvY3VtZW50NDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tbWFuZERvY3VtZW50NEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbW1hbmREb2N1bWVudDQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kRG9jdW1lbnQ0KCk7IH07XG4gICAgY29tbWFuZERvY3VtZW50NFRleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNDb21tYW5kRG9jdW1lbnQ1OiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21tYW5kRG9jdW1lbnQ1RW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgY29tbWFuZERvY3VtZW50NTogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmREb2N1bWVudDUoKTsgfTtcbiAgICBjb21tYW5kRG9jdW1lbnQ1VGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBpc0NvbW1hbmROZXc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbW1hbmROZXdFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb21tYW5kTmV3OiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZE5ldygpOyB9O1xuICAgIGNvbW1hbmROZXdUZXh0OiBzdHJpbmcgPSAnJztcblxuICAgIGlzQ29tbWFuZE9yZGVyOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21tYW5kT3JkZXJFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb21tYW5kT3JkZXI6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kT3JkZXIoKTsgfTtcbiAgICBjb21tYW5kT3JkZXJUZXh0OiBzdHJpbmcgPSAnJztcblxuICAgIGlzQ29tbWFuZFJlc3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0NvbW1hbmRSZXN0YXJ0RW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgY29tbWFuZFJlc3RhcnQ6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kUmVzdGFydCgpOyB9O1xuICAgIGNvbW1hbmRSZXN0YXJ0VGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBpc0NvbW1hbmRTYXZlOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21tYW5kU2F2ZUVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbW1hbmRTYXZlOiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZFNhdmUoKTsgfTtcbiAgICBjb21tYW5kU2F2ZVRleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNDb21tYW5kU2VhcmNoOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21tYW5kU2VhcmNoRW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgY29tbWFuZFNlYXJjaDogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmRTZWFyY2goKTsgfTtcbiAgICBjb21tYW5kU2VhcmNoVGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBpc0NvbW1hbmRTdGFydDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tbWFuZFN0YXJ0RW5hYmxlZDogYm9vbGVhbiA9IHRydWU7XG4gICAgY29tbWFuZFN0YXJ0OiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZFN0YXJ0KCk7IH07XG4gICAgY29tbWFuZFN0YXJ0VGV4dDogc3RyaW5nID0gJyc7XG5cbiAgICBpc0NvbW1hbmRTdG9wOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21tYW5kU3RvcEVuYWJsZWQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIGNvbW1hbmRTdG9wOiAoKSA9PiB2b2lkID0gKCkgPT4geyB0aGlzLm9uQ29tbWFuZFN0b3AoKTsgfTtcbiAgICBjb21tYW5kU3RvcFRleHQ6IHN0cmluZyA9ICcnO1xuXG4gICAgaXNDb21tYW5kU3dhcDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tbWFuZFN3YXBFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb21tYW5kU3dhcDogKCkgPT4gdm9pZCA9ICgpID0+IHsgdGhpcy5vbkNvbW1hbmRTd2FwKCk7IH07XG4gICAgY29tbWFuZFN3YXBUZXh0OiBzdHJpbmcgPSAnJztcblxuICAgIGlzQ29tbWFuZEV4Y2VsOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21tYW5kRXhjZWxFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcbiAgICBjb21tYW5kRXhjZWw6ICgpID0+IHZvaWQgPSAoKSA9PiB7IHRoaXMub25Db21tYW5kRXhjZWwoKTsgfTtcbiAgICBjb21tYW5kRXhjZWxUZXh0OiBzdHJpbmcgPSAnJztcblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gTWV0aG9kc1xuXG4gICAgYWN0aXZhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25BY3RpdmF0ZSgpO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGVkKCk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVUbyhwYXRoOiBhbnkpIHtcbiAgICAgICAgdGhpcy5vbk5hdmlnYXRlVG8ocGF0aCk7XG4gICAgfVxuXG4gICAgLyoqIE11c3QgYmUgb3ZlcnJpZGRlbi4gKi9cbiAgICBvbk5hdmlnYXRlVG8odmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25OYXZpZ2F0ZVRvXFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIC8vIEF0IHRoZSBtb21lbnQgd2UgZG8gbm90IGRpc3Rpbmd1aXNoIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGNhc2UgcGF0aCBuYW1lXG4gICAgY29tcGFyZVBhdGhzKHBhdGgxOiBzdHJpbmcsIHBhdGgyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHBhdGgxID09IG51bGwpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIGlmIChwYXRoMiA9PSBudWxsKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBpZiAocGF0aDEudG9Mb3dlckNhc2UoKSA9PT0gcGF0aDIudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogY2xvc2UgYmxhZGUuICovXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy5vbkNsb3NlKSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIGRvIG5vdCBjbG9zZSBibGFkZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucG9ydGFsU2VydmljZS5hcmVhQmxhZGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucG9ydGFsU2VydmljZS5hcmVhQmxhZGVzLmNsZWFyUGF0aCh0aGlzLnBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIHBhdGg6IFxcJycgKyB0aGlzLnBhdGggKyAnXFwnIGNvdWxkIG5vdCBiZSByZW1vdmVkLCBzaW5jZSBubyBcXCd0aGlzLnBvcnRhbFNlcnZpY2UuYXJlYUJsYWRlc1xcJyBhdmFpbGFibGUuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogT3ZlcnJpZGUgKi9cbiAgICBvbkNsb3NlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAjcmVnaW9uIENvbW1hbmRzXG5cbiAgICBvbkNvbW1hbmRCcm93c2UoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRCcm93c2VcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XG4gICAgfVxuXG4gICAgb25Db21tYW5kQ2FuY2VsKCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kQ2FuY2VsXFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIG9uQ29tbWFuZENvcHkoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRDb3B5XFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIG9uQ29tbWFuZERlbGV0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZERlbGV0ZVxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcbiAgICB9XG5cbiAgICBvbkNvbW1hbmREb2N1bWVudCgpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZERvY3VtZW50XFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIG9uQ29tbWFuZERvY3VtZW50MigpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZERvY3VtZW50MlxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcbiAgICB9XG5cbiAgICBvbkNvbW1hbmREb2N1bWVudDMoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmREb2N1bWVudDNcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XG4gICAgfVxuXG4gICAgb25Db21tYW5kRG9jdW1lbnQ0KCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kRG9jdW1lbnQ0XFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIG9uQ29tbWFuZERvY3VtZW50NSgpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZERvY3VtZW50NVxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcbiAgICB9XG5cbiAgICBvbkNvbW1hbmROZXcoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmROZXdcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XG4gICAgfVxuXG4gICAgb25Db21tYW5kT3JkZXIoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRPcmRlclxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcbiAgICB9XG5cbiAgICBvbkNvbW1hbmRSZXN0YXJ0KCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kUmVzdGFydFxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcbiAgICB9XG5cbiAgICBvbkNvbW1hbmRTYXZlKCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kU2F2ZVxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcbiAgICB9XG5cbiAgICBvbkNvbW1hbmRTZWFyY2goKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRTZWFyY2hcXCcgaXMgYW4gYWJzdHJhY3QgZnVuY3Rpb24uIERlZmluZSBvbmUgaW4gdGhlIGRlcml2ZWQgY2xhc3MuJyk7XG4gICAgfVxuXG4gICAgb25Db21tYW5kU3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW0JsYWRlXSBcXCdvbkNvbW1hbmRTdGFydFxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcbiAgICB9XG5cbiAgICBvbkNvbW1hbmRTdG9wKCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kU3RvcFxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcbiAgICB9XG5cbiAgICBvbkNvbW1hbmRTd2FwKCk6IHZvaWQge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tCbGFkZV0gXFwnb25Db21tYW5kU3dhcFxcJyBpcyBhbiBhYnN0cmFjdCBmdW5jdGlvbi4gRGVmaW5lIG9uZSBpbiB0aGUgZGVyaXZlZCBjbGFzcy4nKTtcbiAgICB9XG5cbiAgICBvbkNvbW1hbmRFeGNlbCgpOiB2b2lkIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbQmxhZGVdIFxcJ29uQ29tbWFuZEV4Y2VsXFwnIGlzIGFuIGFic3RyYWN0IGZ1bmN0aW9uLiBEZWZpbmUgb25lIGluIHRoZSBkZXJpdmVkIGNsYXNzLicpO1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8qKiBDaGFuZ2UgdGl0bGUsIGFzIHNvb24gYXMgd2F0Y2hFeHByZXNzaW9uIGNoYW5nZXMuIHdhdGNoRXhwcmVzc2lvbiBpcyBlaXRoZXIgYSB2YXJpYWJsZSBvcmUgYW4gZXhwcmVzc2lvbiwgZS5nLiBbbmFtZTEgKyBuYW1lMl0gKi9cbiAgICBzZXRUaXRsZSh3YXRjaEV4cHJlc3Npb246IHN0cmluZywgZnVuYzogKCkgPT4gdm9pZCkge1xuICAgICAgICBjb25zb2xlLmxvZygnY29tbWVudGVkIGNvZGUgYXQgOiBCbGFkZS5zZXRUaXRsZScpO1xuICAgICAgICAvL2lmICh0aGlzLndhdGNoZXJUaXRsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vICAgIGlmICh0aGlzLiRzY29wZSAhPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgICAgLy8gYW5ndWxhcjFcbiAgICAgICAgLy8gICAgICAgIHRoaXMud2F0Y2hlclRpdGxlID0gdGhpcy4kc2NvcGUuJHdhdGNoKHdhdGNoRXhwcmVzc2lvbiwgKCkgPT4geyBmdW5jKCk7IH0pO1xuICAgICAgICAvLyAgICAgICAgdGhpcy4kc2NvcGUuJG9uKCckZGVzdHJveScsICgpID0+IHsgdGhpcy53YXRjaGVyVGl0bGUoKTsgfSk7XG4gICAgICAgIC8vICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAvLyBhbmd1bGFyMlxuICAgICAgICAvLyAgICAgICAgY29uc29sZS5sb2coJ1tCbGFkZS5zZXRUaXRsZSgpXSBub3Qgc3VwcG9ydGVkIGZvciBhbmd1bGFyMi4gdXNlIFtuZ09uQ2hhbmdlc10gaW5zdGVhZC4nKTtcbiAgICAgICAgLy8gICAgfVxuICAgICAgICAvL31cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEJsYWRlSGVpZ2h0cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ibGFkZUNvbnRlbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSA0MCAtIDEyNTsgLy8gNDAgPSB0b3BiYXIsIDEyNSA9IGJsYWRlIGhlYWRlclxuICAgICAgICB0aGlzLmJsYWRlQ29udGVudEhlaWdodElubmVyID0gdGhpcy5ibGFkZUNvbnRlbnRIZWlnaHQgLSA1MCAtIDM7IC8vIDUwID0gcGFkZGluZyAodG9wIGFuZCBib3R0b20pLCBzb21laG93IHdlIG1pc3MgM3B4XG5cbiAgICAgICAgLy8gdGhpcy5wb3J0YWxTZXJ2aWNlLiR0aW1lb3V0KCgpID0+IHsgfSwgNTApO1xuICAgICAgICAvL3dpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHsgfSwgNTApO1xuICAgIH1cbn1cbiJdfQ==