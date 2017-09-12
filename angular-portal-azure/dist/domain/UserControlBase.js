"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserControlBase = (function () {
    // #region Constructor
    function UserControlBase($scope, portalService) {
        this.$scope = $scope;
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
    UserControlBase.prototype.removeWindowResizeListener = function () {
        if (this.windowResizeHandler !== undefined) {
            this.portalService.$window.removeEventListener('resize', this.windowResizeHandler);
        }
    };
    UserControlBase.prototype.setupWindowResizeListener = function (callback) {
        // http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
        var id;
        this.portalService.$window.addEventListener('resize', this.windowResizeHandler = function () {
            window.clearTimeout(id);
            id = window.setTimeout(function () { callback(); }, 50);
        });
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
        return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).replace('.', '').replace('(e+', '').replace(')', '').slice(1);
    };
    return UserControlBase;
}());
exports.UserControlBase = UserControlBase;
