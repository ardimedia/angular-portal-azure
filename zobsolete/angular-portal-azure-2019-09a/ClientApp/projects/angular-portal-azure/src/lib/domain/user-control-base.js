"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserControlBase = void 0;
var exception_1 = require("./exception");
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
    UserControlBase.prototype.$onDestroy = function () {
        this.removeWindowResizeListener();
    };
    /** angular2: ngOnChanges(), ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy */
    UserControlBase.prototype.ngOnDestroy = function () {
        this.removeWindowResizeListener();
    };
    /** Override */
    UserControlBase.prototype.onActivate = function () {
    };
    /** Override */
    UserControlBase.prototype.onActivated = function () {
    };
    UserControlBase.prototype.removeWindowResizeListener = function () {
        if (this.windowResizeHandler !== undefined && this.portalService.$window) {
            this.portalService.$window.removeEventListener('resize', this.windowResizeHandler);
        }
    };
    UserControlBase.prototype.setupWindowResizeListener = function (callback) {
        // http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
        var id;
        window.addEventListener('resize', this.windowResizeHandler = function () {
            clearTimeout(id);
            id = setTimeout(function () { callback(); }, 50);
        });
    };
    UserControlBase.prototype.isNumberUndefinedNullOr0 = function (value) {
        if (value && value > 0) {
            return false;
        }
        else {
            return true;
        }
    };
    UserControlBase.prototype.isObjectNullUndefinedOrEmpty = function (value) {
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
    UserControlBase.prototype.isStringNullOrEmpty = function (value) {
        if (value && value.replace(' ', '').length > 0) {
            return false;
        }
        else {
            return true;
        }
    };
    UserControlBase.prototype.getRandomString = function (length) {
        if (length === void 0) { length = 20; }
        return 'a' + Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).replace('.', '').replace('(e+', '').replace(')', '').slice(1);
    };
    // #region Set StatusBar
    UserControlBase.prototype.clearStatusBar = function () {
        this.statusBar = '';
        this.statusBarClass = '';
    };
    UserControlBase.prototype.setStatusBar = function (text, style) {
        this.statusBar = text ? text : '';
        this.statusBarClass = style ? style : '';
    };
    UserControlBase.prototype.setStatusBarCopyData = function () {
        this.statusBar = 'Daten kopieren...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    UserControlBase.prototype.setStatusBarLoadData = function () {
        this.statusBar = 'Daten laden...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    UserControlBase.prototype.setStatusBarSaveData = function () {
        this.statusBar = 'Daten speichern...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    UserControlBase.prototype.setStatusBarDeleteData = function () {
        this.statusBar = 'Daten löschen...';
        this.statusBarClass = 'apa-statusbar-info';
    };
    UserControlBase.prototype.setStatusBarDeleteDataCanceled = function () {
        this.statusBar = 'Löschen abgebrochen.';
        this.statusBarClass = 'apa-statusbar-info';
    };
    UserControlBase.prototype.setStatusBarInfo = function (text) {
        this.statusBar = text;
        this.statusBarClass = 'apa-statusbar-info';
    };
    UserControlBase.prototype.setStatusBarError = function (text) {
        this.statusBar = text;
        this.statusBarClass = 'apa-statusbar-error';
    };
    UserControlBase.prototype.setStatusBarNoDataFound = function () {
        this.statusBar = 'Keine Daten gefunden!';
        this.statusBarClass = 'apa-statusbar-error';
    };
    UserControlBase.prototype.setStatusBarException = function (exception) {
        this.statusBar = exception_1.Exception.getOneLineMessage(exception);
        this.statusBarClass = 'apa-statusbar-error';
    };
    return UserControlBase;
}());
exports.UserControlBase = UserControlBase;
//# sourceMappingURL=user-control-base.js.map