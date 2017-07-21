"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var exception_1 = require("./exception");
var UserControlBase_1 = require("./UserControlBase");
var Blade = (function (_super) {
    __extends(Blade, _super);
    // #region Constructor
    function Blade($scope, portalService, path, title, subtitle, width) {
        if (subtitle === void 0) { subtitle = ''; }
        if (width === void 0) { width = 200; }
        var _this = _super.call(this, $scope, portalService) || this;
        // #endregion
        // #region Properties
        /** HACK: 2016-11-06/hp
        [angular-portal-blade] needs [this] as the controller.
        We don't know how to provide [this] to the directive.
        So we came up with this [vm] property.*/
        _this.vm = {};
        _this.visibility = 'collapse';
        _this.title = '';
        _this.subTitle = '';
        _this.width = { 'width': '0' };
        _this.widthStackLayout = { 'width': '50px' };
        _this.isInnerHtml = true;
        _this.statusBar = '';
        _this.statusBarClass = '';
        // #endregion
        // #endregion
        // #region Commands
        _this.isCommandBrowse = false;
        _this.commandBrowse = function () { _this.onCommandBrowse(); };
        _this.commandBrowseText = '';
        _this.isCommandCancel = false;
        _this.commandCancel = function () { _this.onCommandCancel(); };
        _this.commandCancelText = '';
        _this.isCommandCopy = false;
        _this.commandCopy = function () { _this.onCommandCopy(); };
        _this.commandCopyText = '';
        _this.isCommandDelete = false;
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
        _this.vm = _this;
        _this.path = path;
        _this.title = title;
        _this.subTitle = subtitle;
        _this.width.width = width + 'px';
        _this.widthStackLayout.width = width - 50 + 'px'; // 50 = padding (left and right)
        if (!portalService) {
            throw new Error('[angularportalazure.Blade] constructor parameter \'portalService\' must be provided.');
        }
        if (!path) {
            throw new Error('[angularportalazure.Blade] constructor parameter \'path\' must be a string.');
        }
        if (!title && title !== '') {
            throw new Error('[angularportalazure.Blade] constructor parameter \'title\' must be a string when provided.');
        }
        if (!subtitle && subtitle !== '') {
            throw new Error('[angularportalazure.Blade] constructor parameter \'subtitle\' must be a string when provided.');
        }
        if (!width && width !== 0) {
            throw new Error('[angularportalazure.Blade] constructor parameter \'width\' must be a number when provided.');
        }
        if (width < 50) {
            throw new Error('[angularportalazure.Blade] constructor parameter \'width\' must be at least 50.');
        }
        // Set 'this.portalService.areaBlades.blades[index]' to 'this'
        //     'this.portalService.areaBlades.blades[index]' was generated during AddBlade
        _this.portalService.areaBlades.blades.forEach(function (blade, index) {
            if (blade.path === _this.path) {
                _this.portalService.areaBlades.blades[index] = _this;
            }
        });
        _this.setupWindowResizeListener(function () { _this.setBladeHeights(); });
        _this.setBladeHeights();
        return _this;
    }
    Object.defineProperty(Blade.prototype, "path", {
        get: function () {
            return this._path;
        },
        // For the moment we do not distinguish between lower and upper case path name
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
    // #region Methods
    Blade.prototype.activate = function () {
        this.onActivate();
        this.onActivated();
    };
    /** Override */
    Blade.prototype.onActivate = function () {
    };
    /** Override */
    Blade.prototype.onActivated = function () {
    };
    Blade.prototype.navigateTo = function (path) {
        this.onNavigateTo(path);
    };
    /** Must be overridden. */
    Blade.prototype.onNavigateTo = function (value) {
        throw new Error('[angularportalazure.Blade] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
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
        if (this.portalService.areaBlades !== undefined) {
            this.portalService.areaBlades.clearPath(this.path);
        }
        else {
            throw new Error('[angularportalazure.Blade] path: \'' + this.path + '\' could not be removed, since no \'this.portalService.areaBlades\' available.');
        }
    };
    /** Override */
    Blade.prototype.onClose = function () {
        return true;
    };
    // #region Set StatusBar
    Blade.prototype.clearStatusBar = function () {
        this.statusBar = '';
        this.statusBarClass = '';
    };
    Blade.prototype.setStatusBar = function (text, style) {
        this.statusBar = text ? text : '';
        this.statusBarClass = style ? style : '';
    };
    Blade.prototype.setStatusBarCopyData = function () {
        this.statusBar = 'Daten kopieren...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    Blade.prototype.setStatusBarLoadData = function () {
        this.statusBar = 'Daten laden...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    Blade.prototype.setStatusBarSaveData = function () {
        this.statusBar = 'Daten speichern...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    Blade.prototype.setStatusBarDeleteData = function () {
        this.statusBar = 'Daten löschen...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    Blade.prototype.setStatusBarDeleteDataCanceled = function () {
        this.statusBar = 'Löschen abgebrochen.';
        this.statusBarClass = 'apa-statusbar-info';
    };
    Blade.prototype.setStatusBarInfo = function (text) {
        this.statusBar = text;
        this.statusBarClass = 'apa-statusbar-info';
    };
    Blade.prototype.setStatusBarError = function (text) {
        this.statusBar = text;
        this.statusBarClass = 'apa-statusbar-error';
    };
    Blade.prototype.setStatusBarNoDataFound = function () {
        this.statusBar = 'Keine Daten gefunden!';
        this.statusBarClass = 'apa-statusbar-error';
    };
    Blade.prototype.setStatusBarException = function (exception) {
        this.statusBar = exception_1.Exception.getOneLineMessage(exception);
        this.statusBarClass = 'apa-statusbar-error';
    };
    // #endregion
    // #region Commands
    Blade.prototype.onCommandBrowse = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandCancel = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandCopy = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandDelete = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandDocument = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandDocument2 = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandDocument3 = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandDocument4 = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandDocument5 = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandNew = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandNew\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandOrder = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandRestart = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandSave = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandSave\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandSearch = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandStart = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandStart\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandStop = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandStop\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandSwap = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
    };
    Blade.prototype.onCommandExcel = function () {
        throw new Error('[angularportalazure.Blade] \'onCommandExcel\' is an abstract function. Define one in the derived class.');
    };
    // #endregion
    //#endregion
    /** Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2] */
    Blade.prototype.setTitle = function (watchExpression, func) {
        var _this = this;
        if (this.watcherTitle === undefined) {
            if (this.$scope !== null) {
                // angular1
                this.watcherTitle = this.$scope.$watch(watchExpression, function () { func(); });
                this.$scope.$on('$destroy', function () { _this.watcherTitle(); });
            }
            else {
                // angular2
                console.log('[Blade.setTitle()] not supported for angular2. use [ngOnChanges] instead.');
            }
        }
    };
    Blade.prototype.setBladeHeights = function () {
        this.bladeContentHeight = this.portalService.$window.innerHeight - 40 - 125; // 40 = topbar, 125 = blade header
        this.bladeContentHeightInner = this.bladeContentHeight - 50 - 3; // 50 = padding (top and bottom), somehow we miss 3px
        // this.portalService.$timeout(() => {
        // }, 50);
    };
    return Blade;
}(UserControlBase_1.UserControlBase));
exports.Blade = Blade;
