"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var user_control_base_1 = require("./../base/user-control-base");
var browser_service_1 = require("../../service/browser/browser.service");
var injector_service_1 = require("../../service/injector/injector.service");
var viewport_1 = require("../../service/browser/viewport");
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
        _this.viewport = new viewport_1.Viewport();
        // bladeId: string = '';
        _this._bladeId = '';
        /** HACK:2016-11-06/hp: [angular-portal-blade] needs [this] as the controller.
        We don't know how to provide [this] to the directive.
        So we came up with this [vm] property.*/
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
        _this.commandBrowse = function () { _this.onCommandBrowse(); };
        _this.commandBrowseText = '';
        _this.isCommandCancel = false;
        _this.commandCancel = function () { _this.onCommandCancel(); };
        _this.commandCancelText = '';
        _this.isCommandCopy = false;
        _this.isCommandCopyEnabled = true;
        _this.commandCopy = function () { _this.onCommandCopy(); };
        _this.commandCopyText = '';
        _this.isCommandDelete = false;
        _this.isCommandDeleteEnabled = true;
        _this.commandDelete = function () { _this.onCommandDelete(); };
        _this.commandDeleteText = '';
        _this.isCommandDocument = false;
        _this.commandDocument = function () { _this.onCommandDocument(); };
        _this.commandDocumentText = '';
        _this.isCommandDocument2 = false;
        _this.commandDocument2 = function () { _this.onCommandDocument2(); };
        _this.commandDocument2Text = '';
        _this.isCommandDocument3 = false;
        _this.commandDocument3 = function () { _this.onCommandDocument3(); };
        _this.commandDocument3Text = '';
        _this.isCommandDocument4 = false;
        _this.commandDocument4 = function () { _this.onCommandDocument4(); };
        _this.commandDocument4Text = '';
        _this.isCommandDocument5 = false;
        _this.commandDocument5 = function () { _this.onCommandDocument5(); };
        _this.commandDocument5Text = '';
        _this.isCommandNew = false;
        _this.commandNew = function () { _this.onCommandNew(); };
        _this.commandNewText = '';
        _this.isCommandOrder = false;
        _this.commandOrder = function () { _this.onCommandOrder(); };
        _this.commandOrderText = '';
        _this.isCommandRestart = false;
        _this.commandRestart = function () { _this.onCommandRestart(); };
        _this.commandRestartText = '';
        _this.isCommandSave = false;
        _this.isCommandSaveEnabled = true;
        _this.commandSave = function () { _this.onCommandSave(); };
        _this.commandSaveText = '';
        _this.isCommandSearch = false;
        _this.commandSearch = function () { _this.onCommandSearch(); };
        _this.commandSearchText = '';
        _this.isCommandStart = false;
        _this.commandStart = function () { _this.onCommandStart(); };
        _this.commandStartText = '';
        _this.isCommandStop = false;
        _this.commandStop = function () { _this.onCommandStop(); };
        _this.commandStopText = '';
        _this.isCommandSwap = false;
        _this.commandSwap = function () { _this.onCommandSwap(); };
        _this.commandSwapText = '';
        _this.isCommandExcel = false;
        _this.commandExcel = function () { _this.onCommandExcel(); };
        _this.commandExcelText = '';
        _this.browserService = injector_service_1.InjectorService.getInjector().get(browser_service_1.BrowserService);
        _this.browserService.onResize.subscribe(function (viewport) { return _this.viewport = viewport; });
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
        get: function () {
            return this._bladeId;
        },
        set: function (bladeId) {
            if (bladeId == null) {
                return;
            }
            this._bladeId = bladeId.toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Blade.prototype, "path", {
        get: function () {
            return this._path;
        },
        // For the moment we do distinguish between lower and upper case path name
        set: function (newPath) {
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
    Blade.prototype.ngOnInit = function () {
        console.log('ngOnInit');
    };
    // #endregion
    // #region Public Methods
    Blade.prototype.activate = function () {
        this.onActivate();
        this.onActivated();
    };
    Blade.prototype.navigateTo = function (path) {
        this.onNavigateTo(path);
    };
    /** Must be overridden. */
    Blade.prototype.onNavigateTo = function (value) {
        throw new Error('[Blade] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
    };
    // At the moment we do not distinguish between lower and upper case path name
    Blade.prototype.comparePaths = function (path1, path2) {
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
    Blade.prototype.close = function () {
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
    Blade.prototype.onClose = function () {
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
    Blade.prototype.onCommandBrowse = function () {
        throw new Error('[Blade] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandCancel = function () {
        throw new Error('[Blade] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandCopy = function () {
        throw new Error('[Blade] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandDelete = function () {
        throw new Error('[Blade] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandDocument = function () {
        throw new Error('[Blade] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandDocument2 = function () {
        throw new Error('[Blade] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandDocument3 = function () {
        throw new Error('[Blade] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandDocument4 = function () {
        throw new Error('[Blade] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandDocument5 = function () {
        throw new Error('[Blade] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandNew = function () {
        throw new Error('[Blade] \'onCommandNew\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandOrder = function () {
        throw new Error('[Blade] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandRestart = function () {
        throw new Error('[Blade] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandSave = function () {
        throw new Error('[Blade] \'onCommandSave\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandSearch = function () {
        throw new Error('[Blade] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandStart = function () {
        throw new Error('[Blade] \'onCommandStart\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandStop = function () {
        throw new Error('[Blade] \'onCommandStop\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandSwap = function () {
        throw new Error('[Blade] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandExcel = function () {
        throw new Error('[Blade] \'onCommandExcel\' is an abstract function. Define one in the derived class.');
    };
    // #endregion
    // #endregion
    // #region Private Methods
    Blade.prototype.setBladeHeights = function () {
        //this.bladeContentHeight = this.mainService.browserWindowService.browserWindow.innerHeight - 40 - 125; // 40 = topbar, 125 = blade header
        this.bladeContentHeightInner = this.bladeContentHeight - 50 - 3; // 50 = padding (top and bottom), somehow we miss 3px
        // this.mainService.$timeout(() => {
        // }, 50);
    };
    return Blade;
}(user_control_base_1.UserControlBase));
exports.Blade = Blade;
//# sourceMappingURL=blade.js.map