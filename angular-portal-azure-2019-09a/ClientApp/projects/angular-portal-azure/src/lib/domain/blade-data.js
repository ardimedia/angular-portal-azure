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
exports.BladeData = void 0;
var blade_1 = require("./blade");
var BladeData = /** @class */ (function (_super) {
    __extends(BladeData, _super);
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    function BladeData(portalService, path, title, subtitle, width) {
        if (subtitle === void 0) { subtitle = ''; }
        if (width === void 0) { width = 300; }
        var _this = _super.call(this, portalService, path, title, subtitle, width) || this;
        // #endregion
        // #region Properties
        _this.item = {};
        _this.items = [];
        return _this;
    }
    // #endregion
    // #region newItem
    BladeData.prototype.newItem = function (func) {
        var _this = this;
        this.onNewItem();
        func().then(function (data) {
            _this.isCommandDeleteEnabled = false;
            _this.item = data;
            _this.onNewedItem();
        }).catch(function (ex) {
            _this.setStatusBarException(ex);
            _this.onNewItemException(ex);
        });
    };
    /** Extension point */
    BladeData.prototype.onNewItem = function () {
    };
    /** Extension point */
    BladeData.prototype.onNewedItem = function () {
    };
    /** Extension point */
    BladeData.prototype.onNewItemException = function (ex) {
    };
    // #endregion
    // #region loadItem
    BladeData.prototype.loadItem = function (func) {
        var _this = this;
        this.visibility = 'collapse';
        this.setStatusBarLoadData();
        this.onLoadItem();
        func().then(function (data) {
            _this.visibility = 'visible';
            _this.clearStatusBar();
            _this.item = data;
            _this.onLoadedItem();
        }).catch(function (ex) {
            _this.setStatusBarException(ex);
            _this.onLoadItemException(ex);
        });
    };
    /** Extension point */
    BladeData.prototype.onLoadItem = function () {
    };
    /** Extension point */
    BladeData.prototype.onLoadedItem = function () {
    };
    /** Extension point */
    BladeData.prototype.onLoadItemException = function (ex) {
    };
    // #endregion
    // #region loadItems
    BladeData.prototype.loadItems = function (func) {
        var _this = this;
        this.visibility = 'collapse';
        this.setStatusBarLoadData();
        this.onLoadItems();
        func().then(function (data) {
            _this.visibility = 'visible';
            _this.clearStatusBar();
            _this.items = data;
            _this.onLoadedItems();
        }).catch(function (ex) {
            _this.setStatusBarException(ex);
            _this.onLoadItemsException(ex);
        });
    };
    /** Extension point */
    BladeData.prototype.onLoadItems = function () {
    };
    /** Extension point */
    BladeData.prototype.onLoadedItems = function () {
    };
    /** Extension point */
    BladeData.prototype.onLoadItemsException = function (ex) {
    };
    // #endregion
    // #region saveItem
    /**
     * Default behavior for saving an entity.
     * - validates this.ngForm. if not valid, returns without saving
     * - call this.setStatusBarSaveData();
     * - set this.isCommandSaveEnabled = false
     * - call this.onSaveItem()
     * - call the provided function
     * THEN
     * - call this.clearStatusBar()
     * - set this.isCommandSaveEnabled = true
     * - set this.item to the saved data
     * - call this.onSavedItem()
     * - returns the saved data
     * CATCH
     * - set this.isCommandSaveEnabled = true
     * - call this.setStatusBarException
     * - call this.onLoadItemsException
     */
    BladeData.prototype.saveItem = function (func, ngForm) {
        var _this = this;
        if (ngForm === void 0) { ngForm = undefined; }
        if (!this.isFormValid(ngForm) && this.onSaveItemFormValidation()) {
            return;
        }
        this.setStatusBarSaveData();
        this.isCommandSaveEnabled = false;
        this.onSaveItem();
        return func().then(function (data) {
            _this.clearStatusBar();
            _this.isCommandSaveEnabled = true;
            _this.item = data;
            _this.onSavedItem();
            return data;
        }).catch(function (ex) {
            _this.isCommandSaveEnabled = true;
            _this.setStatusBarException(ex);
            _this.onLoadItemsException(ex);
        });
    };
    /** Extension point */
    BladeData.prototype.onSaveItem = function () {
    };
    /** Extension point */
    BladeData.prototype.onSavedItem = function () {
    };
    /** Extension point */
    BladeData.prototype.onSaveItemException = function (ex) {
    };
    // #endregion
    // #region saveObject
    /**
     * Default behavior for saving any object.
     * - validates this.ngForm. if not valid, returns without saving
     * - call this.setStatusBarSaveData();
     * - set this.isCommandSaveEnabled = false
     * - call this.onSaveObject()
     * - call the provided function
     * THEN
     * - call this.clearStatusBar()
     * - set this.isCommandSaveEnabled = true
     * - call this.onSavedObject()
     * - returns the saved data
     * CATCH
     * - set this.isCommandSaveEnabled = true
     * - call this.setStatusBarException
     * - call this.onLoadItemsException
     */
    BladeData.prototype.saveObject = function (func, ngForm) {
        var _this = this;
        if (ngForm === void 0) { ngForm = undefined; }
        if (!this.isFormValid(ngForm) && this.onSaveObjectFormValidation()) {
            return;
        }
        this.setStatusBarSaveData();
        this.isCommandSaveEnabled = false;
        this.onSaveObject();
        return func().then(function (data) {
            _this.clearStatusBar();
            _this.isCommandSaveEnabled = true;
            _this.onSavedObject();
            return data;
        }).catch(function (ex) {
            _this.isCommandSaveEnabled = true;
            _this.setStatusBarException(ex);
            _this.onLoadItemsException(ex);
        });
    };
    /** Extension point */
    BladeData.prototype.onSaveObject = function () {
    };
    /** Extension point */
    BladeData.prototype.onSavedObject = function () {
    };
    /** Extension point */
    BladeData.prototype.onSaveObjectException = function (ex) {
    };
    // #endregion
    // #region deleteItem
    BladeData.prototype.deleteItem = function (func, ngForm) {
        var _this = this;
        if (ngForm === void 0) { ngForm = undefined; }
        if (!this.isFormValid(ngForm) && this.onDeleteItemFormValidation()) {
            return;
        }
        this.setStatusBarDeleteData();
        this.isCommandDeleteEnabled = false;
        this.onDeleteItem();
        return func().then(function (data) {
            _this.clearStatusBar();
            _this.isCommandDeleteEnabled = true;
            _this.item = data;
            if (_this.onDeletedItem()) {
                _this.close();
            }
            ;
            return data;
        }).catch(function (ex) {
            _this.isCommandDeleteEnabled = true;
            _this.setStatusBarException(ex);
            _this.onLoadItemsException(ex);
        });
    };
    /** Extension point */
    BladeData.prototype.onDeleteItem = function () {
    };
    /** Extension point
     * return value indicates if the current blade should be closed or not.
     */
    BladeData.prototype.onDeletedItem = function () {
        return true; // close the current blade
    };
    /** Extension point */
    BladeData.prototype.onDeletedObjectException = function (ex) {
    };
    // #endregion
    // #region execute WebApi function
    /**
     * Default behavior for executing
     * - validates ngForm. if not valid, returns without executing
     * - call this.setStatusBarInfo();
     * - set this.isCommandStartEnabled = false
     * - call this.onExecute()
     * - call the provided function
     * THEN
     * - call this.clearStatusBar()
     * - set this.isCommandStartEnabled = true
     * - call this.onExecuted()
     * - returns the data
     * CATCH
     * - set this.isCommandStartEnabled = true
     * - call this.setStatusBarException
     * - call this.onExecuteException
     */
    BladeData.prototype.execute = function (message, func, ngForm) {
        var _this = this;
        if (ngForm === void 0) { ngForm = undefined; }
        if (!this.isFormValid(ngForm) && this.onSaveItemFormValidation()) {
            return;
        }
        this.setStatusBarInfo(message);
        this.isCommandStartEnabled = false;
        this.onExecute();
        return func().then(function (data) {
            _this.clearStatusBar();
            _this.isCommandStartEnabled = true;
            _this.onExecuted();
            return data;
        }).catch(function (ex) {
            _this.isCommandStartEnabled = true;
            _this.setStatusBarException(ex);
            _this.onExecuteException(ex);
        });
    };
    /** Extension point */
    BladeData.prototype.onExecute = function () {
    };
    /** Extension point */
    BladeData.prototype.onExecuted = function () {
    };
    /** Extension point */
    BladeData.prototype.onExecuteException = function (ex) {
    };
    // #endregion
    // #region Form Validation
    BladeData.prototype.isFormValid = function (ngForm) {
        if (ngForm === void 0) { ngForm = undefined; }
        // angularjs
        if (!this.formblade.$valid) {
            this.setStatusBarError('Formular nicht gÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼ltig.');
            return false;
        }
        // angular (2+)
        if (ngForm !== undefined) {
            if (!ngForm.valid) {
                return false;
            }
        }
        return true;
    };
    /** Extension point */
    BladeData.prototype.onSaveItemFormValidation = function () {
        return true;
    };
    /** Extension point */
    BladeData.prototype.onSaveObjectFormValidation = function () {
        return true;
    };
    /** Extension point */
    BladeData.prototype.onDeleteItemFormValidation = function () {
        return true;
    };
    return BladeData;
}(blade_1.Blade));
exports.BladeData = BladeData;
//# sourceMappingURL=blade-data.js.map