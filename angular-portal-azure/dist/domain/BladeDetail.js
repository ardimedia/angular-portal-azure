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
var BladeData_1 = require("./BladeData");
var BladeDetail = (function (_super) {
    __extends(BladeDetail, _super);
    // #region Constructor
    function BladeDetail($scope, portalService, path, title, subtitle, width) {
        if (subtitle === void 0) { subtitle = ''; }
        if (width === void 0) { width = 200; }
        var _this = _super.call(this, $scope, portalService, path, title, subtitle, width) || this;
        // #endregion
        // #region Properties
        _this.item = {};
        _this.commandNewText = 'neu';
        _this.commandSaveText = 'speichern';
        _this.commandDeleteText = 'löschen';
        _this.commandCancelText = 'abbrechen';
        return _this;
    }
    // #endregion
    // #region Methods
    BladeDetail.prototype.loadItem = function (func) {
        var _this = this;
        this.onLoadItem();
        func().then(function (data) {
            _this.item = data;
            _this.onLoadedItem();
        }).catch(function (exception) {
            _this.setStatusBarException(exception);
        });
    };
    BladeDetail.prototype.saveItem = function (func) {
        var _this = this;
        this.onSaveItem();
        // Is form valid
        if (!this.formblade.$valid) {
            this.statusBar = 'Speichern nicht möglich! [Console] enthält weitere Informationen.';
            this.statusBarClass = 'apa-statusbar-error';
            console.log(this.formblade);
            return;
        }
        func().then(function (data) {
            _this.item = data;
            _this.onSavedItem();
        }).catch(function (exception) {
            _this.setStatusBarException(exception);
        });
    };
    BladeDetail.prototype.onSaveItem = function () {
        this.setStatusBarSaveData();
    };
    BladeDetail.prototype.onSavedItem = function () {
        this.clearStatusBar();
    };
    BladeDetail.prototype.onCommandCancel = function () {
        this.close();
    };
    return BladeDetail;
}(BladeData_1.BladeData));
exports.BladeDetail = BladeDetail;
