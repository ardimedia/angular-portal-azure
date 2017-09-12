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
var usercontrolbase_1 = require("./usercontrolbase");
var AreaNotification = (function (_super) {
    __extends(AreaNotification, _super);
    // #region Constructor
    function AreaNotification($scope, portalService) {
        var _this = _super.call(this, $scope, portalService) || this;
        // #endregion
        // #region Properties
        _this.path = '';
        _this.widthAreaUsed = 0;
        _this._width = 250;
        _this._backgroundColor = '#32383f';
        _this.areaNotification = _this.portalService.$window.document.getElementById('apa-notification-area');
        _this.hide();
        _this.setupWindowResizeListener(function () { _this.calcualteCssStyles(); });
        return _this;
    }
    Object.defineProperty(AreaNotification.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
            this.calcualteCssStyles();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AreaNotification.prototype, "backgroundColor", {
        get: function () {
            return this._backgroundColor;
        },
        set: function (value) {
            this._backgroundColor = value;
            this.calcualteCssStyles();
        },
        enumerable: true,
        configurable: true
    });
    // #endregion
    // #region Methods
    AreaNotification.prototype.hide = function () {
        // Do not hide on false
        if (!this.onHide) {
            return;
        }
        this.path = '';
        this.widthAreaUsed = 0;
        this.areaNotification.style.display = 'none';
        this.portalService.$rootScope.$broadcast('AreaNotification.Hide');
    };
    AreaNotification.prototype.show = function (width) {
        if (width === void 0) { width = 250; }
        this.onShow();
        this.width = width;
        this.widthAreaUsed = 1; // Indicate to the calcualteCssStyles function, that we need to set this value
        this.calcualteCssStyles();
        this.areaNotification.style.display = 'inline-block';
        this.portalService.$rootScope.$broadcast('AreaNotification.Show');
        this.onShowed();
    };
    /* Override */
    AreaNotification.prototype.onHide = function () {
        return true;
    };
    /* Override */
    AreaNotification.prototype.onShow = function () {
    };
    /* Override */
    AreaNotification.prototype.onShowed = function () {
    };
    AreaNotification.prototype.calcualteCssStyles = function () {
        this.areaNotification.style.position = 'absolute';
        this.areaNotification.style.top = '0';
        this.areaNotification.style.height = '100%';
        this.areaNotification.style.backgroundColor = this.backgroundColor;
        this.areaNotification.style.borderLeft = '2px solid gray';
        this.areaNotification.style.width = this.width + 'px';
        this.areaNotification.style.left = this.portalService.$window.innerWidth - this.width + 'px';
        if (this.widthAreaUsed !== 0) {
            this.widthAreaUsed = this.width;
        }
    };
    return AreaNotification;
}(usercontrolbase_1.UserControlBase));
exports.AreaNotification = AreaNotification;
