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
import { Blade } from './blade';
/**
 * @template T
 */
var /**
 * @template T
 */
BladeData = /** @class */ (function (_super) {
    __extends(BladeData, _super);
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    function BladeData(portalService, path, title, subtitle, width) {
        if (subtitle === void 0) { subtitle = ''; }
        if (width === void 0) { width = 300; }
        var _this = _super.call(this, portalService, path, title, subtitle, width) || this;
        // #endregion
        // #region Properties
        _this.item = (/** @type {?} */ ({}));
        _this.items = [];
        return _this;
    }
    // #endregion
    // #region newItem
    // #endregion
    // #region newItem
    /**
     * @param {?} func
     * @return {?}
     */
    BladeData.prototype.newItem = 
    // #endregion
    // #region newItem
    /**
     * @param {?} func
     * @return {?}
     */
    function (func) {
        var _this = this;
        this.onNewItem();
        func().then((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.isCommandDeleteEnabled = false;
            _this.item = data;
            _this.onNewedItem();
        })).catch((/**
         * @param {?} ex
         * @return {?}
         */
        function (ex) {
            _this.setStatusBarException(ex);
            _this.onNewItemException(ex);
        }));
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onNewItem = /**
     * Extension point
     * @return {?}
     */
    function () {
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onNewedItem = /**
     * Extension point
     * @return {?}
     */
    function () {
    };
    /** Extension point */
    /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    BladeData.prototype.onNewItemException = /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    function (ex) {
    };
    // #endregion
    // #region loadItem
    // #endregion
    // #region loadItem
    /**
     * @param {?} func
     * @return {?}
     */
    BladeData.prototype.loadItem = 
    // #endregion
    // #region loadItem
    /**
     * @param {?} func
     * @return {?}
     */
    function (func) {
        var _this = this;
        this.visibility = 'collapse';
        this.setStatusBarLoadData();
        this.onLoadItem();
        func().then((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.visibility = 'visible';
            _this.clearStatusBar();
            _this.item = data;
            _this.onLoadedItem();
        })).catch((/**
         * @param {?} ex
         * @return {?}
         */
        function (ex) {
            _this.setStatusBarException(ex);
            _this.onLoadItemException(ex);
        }));
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onLoadItem = /**
     * Extension point
     * @return {?}
     */
    function () {
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onLoadedItem = /**
     * Extension point
     * @return {?}
     */
    function () {
    };
    /** Extension point */
    /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    BladeData.prototype.onLoadItemException = /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    function (ex) {
    };
    // #endregion
    // #region loadItems
    // #endregion
    // #region loadItems
    /**
     * @param {?} func
     * @return {?}
     */
    BladeData.prototype.loadItems = 
    // #endregion
    // #region loadItems
    /**
     * @param {?} func
     * @return {?}
     */
    function (func) {
        var _this = this;
        this.visibility = 'collapse';
        this.setStatusBarLoadData();
        this.onLoadItems();
        func().then((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.visibility = 'visible';
            _this.clearStatusBar();
            _this.items = data;
            _this.onLoadedItems();
        })).catch((/**
         * @param {?} ex
         * @return {?}
         */
        function (ex) {
            _this.setStatusBarException(ex);
            _this.onLoadItemsException(ex);
        }));
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onLoadItems = /**
     * Extension point
     * @return {?}
     */
    function () {
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onLoadedItems = /**
     * Extension point
     * @return {?}
     */
    function () {
    };
    /** Extension point */
    /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    BladeData.prototype.onLoadItemsException = /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    function (ex) {
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
     * @param {?} func
     * @param {?=} ngForm
     * @return {?}
     */
    BladeData.prototype.saveItem = 
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
     * @param {?} func
     * @param {?=} ngForm
     * @return {?}
     */
    function (func, ngForm) {
        var _this = this;
        if (ngForm === void 0) { ngForm = undefined; }
        if (!this.isFormValid(ngForm) && this.onSaveItemFormValidation()) {
            return;
        }
        this.setStatusBarSaveData();
        this.isCommandSaveEnabled = false;
        this.onSaveItem();
        return ((/** @type {?} */ (func()))).then((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.clearStatusBar();
            _this.isCommandSaveEnabled = true;
            _this.item = data;
            _this.onSavedItem();
            return data;
        })).catch((/**
         * @param {?} ex
         * @return {?}
         */
        function (ex) {
            _this.isCommandSaveEnabled = true;
            _this.setStatusBarException(ex);
            _this.onLoadItemsException(ex);
        }));
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onSaveItem = /**
     * Extension point
     * @return {?}
     */
    function () {
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onSavedItem = /**
     * Extension point
     * @return {?}
     */
    function () {
    };
    /** Extension point */
    /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    BladeData.prototype.onSaveItemException = /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    function (ex) {
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
     * @param {?} func
     * @param {?=} ngForm
     * @return {?}
     */
    BladeData.prototype.saveObject = 
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
     * @param {?} func
     * @param {?=} ngForm
     * @return {?}
     */
    function (func, ngForm) {
        var _this = this;
        if (ngForm === void 0) { ngForm = undefined; }
        if (!this.isFormValid(ngForm) && this.onSaveObjectFormValidation()) {
            return;
        }
        this.setStatusBarSaveData();
        this.isCommandSaveEnabled = false;
        this.onSaveObject();
        return ((/** @type {?} */ (func()))).then((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.clearStatusBar();
            _this.isCommandSaveEnabled = true;
            _this.onSavedObject();
            return data;
        })).catch((/**
         * @param {?} ex
         * @return {?}
         */
        function (ex) {
            _this.isCommandSaveEnabled = true;
            _this.setStatusBarException(ex);
            _this.onLoadItemsException(ex);
        }));
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onSaveObject = /**
     * Extension point
     * @return {?}
     */
    function () {
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onSavedObject = /**
     * Extension point
     * @return {?}
     */
    function () {
    };
    /** Extension point */
    /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    BladeData.prototype.onSaveObjectException = /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    function (ex) {
    };
    // #endregion
    // #region deleteItem
    // #endregion
    // #region deleteItem
    /**
     * @param {?} func
     * @param {?=} ngForm
     * @return {?}
     */
    BladeData.prototype.deleteItem = 
    // #endregion
    // #region deleteItem
    /**
     * @param {?} func
     * @param {?=} ngForm
     * @return {?}
     */
    function (func, ngForm) {
        var _this = this;
        if (ngForm === void 0) { ngForm = undefined; }
        if (!this.isFormValid(ngForm) && this.onDeleteItemFormValidation()) {
            return;
        }
        this.setStatusBarDeleteData();
        this.isCommandDeleteEnabled = false;
        this.onDeleteItem();
        return ((/** @type {?} */ (func()))).then((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.clearStatusBar();
            _this.isCommandDeleteEnabled = true;
            _this.item = data;
            if (_this.onDeletedItem()) {
                _this.close();
            }
            ;
            return data;
        })).catch((/**
         * @param {?} ex
         * @return {?}
         */
        function (ex) {
            _this.isCommandDeleteEnabled = true;
            _this.setStatusBarException(ex);
            _this.onLoadItemsException(ex);
        }));
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onDeleteItem = /**
     * Extension point
     * @return {?}
     */
    function () {
    };
    /** Extension point
     * return value indicates if the current blade should be closed or not.
     */
    /**
     * Extension point
     * return value indicates if the current blade should be closed or not.
     * @return {?}
     */
    BladeData.prototype.onDeletedItem = /**
     * Extension point
     * return value indicates if the current blade should be closed or not.
     * @return {?}
     */
    function () {
        return true; // close the current blade
    };
    /** Extension point */
    /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    BladeData.prototype.onDeletedObjectException = /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    function (ex) {
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
     * @param {?} message
     * @param {?} func
     * @param {?=} ngForm
     * @return {?}
     */
    BladeData.prototype.execute = 
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
     * @param {?} message
     * @param {?} func
     * @param {?=} ngForm
     * @return {?}
     */
    function (message, func, ngForm) {
        var _this = this;
        if (ngForm === void 0) { ngForm = undefined; }
        if (!this.isFormValid(ngForm) && this.onSaveItemFormValidation()) {
            return;
        }
        this.setStatusBarInfo(message);
        this.isCommandStartEnabled = false;
        this.onExecute();
        return ((/** @type {?} */ (func()))).then((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.clearStatusBar();
            _this.isCommandStartEnabled = true;
            _this.onExecuted();
            return data;
        })).catch((/**
         * @param {?} ex
         * @return {?}
         */
        function (ex) {
            _this.isCommandStartEnabled = true;
            _this.setStatusBarException(ex);
            _this.onExecuteException(ex);
        }));
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onExecute = /**
     * Extension point
     * @return {?}
     */
    function () {
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onExecuted = /**
     * Extension point
     * @return {?}
     */
    function () {
    };
    /** Extension point */
    /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    BladeData.prototype.onExecuteException = /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    function (ex) {
    };
    // #endregion
    // #region Form Validation
    // #endregion
    // #region Form Validation
    /**
     * @param {?=} ngForm
     * @return {?}
     */
    BladeData.prototype.isFormValid = 
    // #endregion
    // #region Form Validation
    /**
     * @param {?=} ngForm
     * @return {?}
     */
    function (ngForm) {
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
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onSaveItemFormValidation = /**
     * Extension point
     * @return {?}
     */
    function () {
        return true;
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onSaveObjectFormValidation = /**
     * Extension point
     * @return {?}
     */
    function () {
        return true;
    };
    /** Extension point */
    /**
     * Extension point
     * @return {?}
     */
    BladeData.prototype.onDeleteItemFormValidation = /**
     * Extension point
     * @return {?}
     */
    function () {
        return true;
    };
    return BladeData;
}(Blade));
/**
 * @template T
 */
export { BladeData };
if (false) {
    /** @type {?} */
    BladeData.prototype.item;
    /** @type {?} */
    BladeData.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUtZGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2RvbWFpbi9ibGFkZS1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQzs7OztBQU1oQzs7OztJQUFrQyw2QkFBSztJQUNuQyxzQkFBc0I7SUFFdEIsK0NBQStDO0lBQy9DLG1CQUFZLGFBQTRCLEVBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxRQUFxQixFQUFFLEtBQW1CO1FBQTFDLHlCQUFBLEVBQUEsYUFBcUI7UUFBRSxzQkFBQSxFQUFBLFdBQW1CO1FBQWpILFlBQ0ksa0JBQU0sYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxTQUNyRDs7O1FBTUQsVUFBSSxHQUFNLG1CQUFHLEVBQUUsRUFBQSxDQUFDO1FBQ2hCLFdBQUssR0FBUSxFQUFFLENBQUM7O0lBUGhCLENBQUM7SUFTRCxhQUFhO0lBRWIsa0JBQWtCOzs7Ozs7O0lBRWxCLDJCQUFPOzs7Ozs7O0lBQVAsVUFBUSxJQUFvQztRQUE1QyxpQkFXQztRQVZHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFJLEVBQUUsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxJQUFTO1lBQ2xCLEtBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7WUFDcEMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDLEtBQUs7Ozs7UUFBQyxVQUFDLEVBQWE7WUFDbkIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBc0I7Ozs7O0lBQ3RCLDZCQUFTOzs7O0lBQVQ7SUFDQSxDQUFDO0lBRUQsc0JBQXNCOzs7OztJQUN0QiwrQkFBVzs7OztJQUFYO0lBQ0EsQ0FBQztJQUVELHNCQUFzQjs7Ozs7O0lBQ3RCLHNDQUFrQjs7Ozs7SUFBbEIsVUFBbUIsRUFBYTtJQUNoQyxDQUFDO0lBRUQsYUFBYTtJQUViLG1CQUFtQjs7Ozs7OztJQUVuQiw0QkFBUTs7Ozs7OztJQUFSLFVBQVMsSUFBb0M7UUFBN0MsaUJBY0M7UUFiRyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFbEIsSUFBSSxFQUFFLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsSUFBUztZQUNsQixLQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDLEtBQUs7Ozs7UUFBQyxVQUFDLEVBQWE7WUFDbkIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBc0I7Ozs7O0lBQ3RCLDhCQUFVOzs7O0lBQVY7SUFDQSxDQUFDO0lBRUQsc0JBQXNCOzs7OztJQUN0QixnQ0FBWTs7OztJQUFaO0lBQ0EsQ0FBQztJQUVELHNCQUFzQjs7Ozs7O0lBQ3RCLHVDQUFtQjs7Ozs7SUFBbkIsVUFBb0IsRUFBYTtJQUNqQyxDQUFDO0lBRUQsYUFBYTtJQUViLG9CQUFvQjs7Ozs7OztJQUVwQiw2QkFBUzs7Ozs7OztJQUFULFVBQVUsSUFBb0M7UUFBOUMsaUJBY0M7UUFiRyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsSUFBSSxFQUFFLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsSUFBUztZQUNsQixLQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM1QixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUFDLEtBQUs7Ozs7UUFBQyxVQUFDLEVBQWE7WUFDbkIsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBc0I7Ozs7O0lBQ3RCLCtCQUFXOzs7O0lBQVg7SUFDQSxDQUFDO0lBRUQsc0JBQXNCOzs7OztJQUN0QixpQ0FBYTs7OztJQUFiO0lBQ0EsQ0FBQztJQUVELHNCQUFzQjs7Ozs7O0lBQ3RCLHdDQUFvQjs7Ozs7SUFBcEIsVUFBcUIsRUFBYTtJQUNsQyxDQUFDO0lBRUQsYUFBYTtJQUViLG1CQUFtQjtJQUVuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQkc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNILDRCQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBUixVQUFTLElBQTJELEVBQUUsTUFBdUI7UUFBN0YsaUJBb0JDO1FBcEJxRSx1QkFBQSxFQUFBLGtCQUF1QjtRQUN6RixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBRTtZQUM5RCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixPQUFPLENBQUMsbUJBQXlCLElBQUksRUFBRSxFQUFBLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxJQUFJO1lBQy9DLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixLQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7O1FBQUMsVUFBQyxFQUFhO1lBQ25CLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBc0I7Ozs7O0lBQ3RCLDhCQUFVOzs7O0lBQVY7SUFDQSxDQUFDO0lBRUQsc0JBQXNCOzs7OztJQUN0QiwrQkFBVzs7OztJQUFYO0lBQ0EsQ0FBQztJQUVELHNCQUFzQjs7Ozs7O0lBQ3RCLHVDQUFtQjs7Ozs7SUFBbkIsVUFBb0IsRUFBYTtJQUNqQyxDQUFDO0lBRUQsYUFBYTtJQUViLHFCQUFxQjtJQUVyQjs7Ozs7Ozs7Ozs7Ozs7OztPQWdCRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDSCw4QkFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBVixVQUFXLElBQStELEVBQUUsTUFBdUI7UUFBbkcsaUJBbUJDO1FBbkIyRSx1QkFBQSxFQUFBLGtCQUF1QjtRQUMvRixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsMEJBQTBCLEVBQUUsRUFBRTtZQUNoRSxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixPQUFPLENBQUMsbUJBQTJCLElBQUksRUFBRSxFQUFBLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxJQUFJO1lBQ2pELEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixLQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7O1FBQUMsVUFBQyxFQUFhO1lBQ25CLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBc0I7Ozs7O0lBQ3RCLGdDQUFZOzs7O0lBQVo7SUFDQSxDQUFDO0lBRUQsc0JBQXNCOzs7OztJQUN0QixpQ0FBYTs7OztJQUFiO0lBQ0EsQ0FBQztJQUVELHNCQUFzQjs7Ozs7O0lBQ3RCLHlDQUFxQjs7Ozs7SUFBckIsVUFBc0IsRUFBYTtJQUNuQyxDQUFDO0lBRUQsYUFBYTtJQUViLHFCQUFxQjs7Ozs7Ozs7SUFFckIsOEJBQVU7Ozs7Ozs7O0lBQVYsVUFBVyxJQUEyRixFQUFFLE1BQXVCO1FBQS9ILGlCQXNCQztRQXRCdUcsdUJBQUEsRUFBQSxrQkFBdUI7UUFDM0gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLDBCQUEwQixFQUFFLEVBQUU7WUFDaEUsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsT0FBTyxDQUFDLG1CQUF5QixJQUFJLEVBQUUsRUFBQSxDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUMsSUFBSTtZQUMvQyxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEIsS0FBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztZQUNuQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRTtnQkFDdEIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2hCO1lBQUEsQ0FBQztZQUNGLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsRUFBQyxDQUFDLEtBQUs7Ozs7UUFBQyxVQUFDLEVBQWE7WUFDbkIsS0FBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztZQUNuQyxLQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0IsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHNCQUFzQjs7Ozs7SUFDdEIsZ0NBQVk7Ozs7SUFBWjtJQUNBLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsaUNBQWE7Ozs7O0lBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtJQUMzQyxDQUFDO0lBRUQsc0JBQXNCOzs7Ozs7SUFDdEIsNENBQXdCOzs7OztJQUF4QixVQUF5QixFQUFhO0lBQ3RDLENBQUM7SUFFRCxhQUFhO0lBRWIsa0NBQWtDO0lBRWxDOzs7Ozs7Ozs7Ozs7Ozs7O09BZ0JHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDSCwyQkFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQVAsVUFBUSxPQUFlLEVBQUUsSUFBMkQsRUFBRSxNQUF1QjtRQUE3RyxpQkFtQkM7UUFuQnFGLHVCQUFBLEVBQUEsa0JBQXVCO1FBQ3pHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFFO1lBQzlELE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMscUJBQXFCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixPQUFPLENBQUMsbUJBQXlCLElBQUksRUFBRSxFQUFBLENBQUMsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQyxJQUFJO1lBQy9DLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN0QixLQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDLEVBQUMsQ0FBQyxLQUFLOzs7O1FBQUMsVUFBQyxFQUFhO1lBQ25CLEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7WUFDbEMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQkFBc0I7Ozs7O0lBQ3RCLDZCQUFTOzs7O0lBQVQ7SUFDQSxDQUFDO0lBRUQsc0JBQXNCOzs7OztJQUN0Qiw4QkFBVTs7OztJQUFWO0lBQ0EsQ0FBQztJQUNELHNCQUFzQjs7Ozs7O0lBQ3RCLHNDQUFrQjs7Ozs7SUFBbEIsVUFBbUIsRUFBYTtJQUNoQyxDQUFDO0lBRUQsYUFBYTtJQUViLDBCQUEwQjs7Ozs7OztJQUUxQiwrQkFBVzs7Ozs7OztJQUFYLFVBQVksTUFBdUI7UUFBdkIsdUJBQUEsRUFBQSxrQkFBdUI7UUFDL0IsWUFBWTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsME9BQTBPLENBQUMsQ0FBQTtZQUNsUSxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELGVBQWU7UUFDZixJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQkFBc0I7Ozs7O0lBQ3RCLDRDQUF3Qjs7OztJQUF4QjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQkFBc0I7Ozs7O0lBQ3RCLDhDQUEwQjs7OztJQUExQjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQkFBc0I7Ozs7O0lBQ3RCLDhDQUEwQjs7OztJQUExQjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHTCxnQkFBQztBQUFELENBQUMsQUEvVkQsQ0FBa0MsS0FBSyxHQStWdEM7Ozs7Ozs7SUFuVkcseUJBQWdCOztJQUNoQiwwQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbGFkZSB9IGZyb20gJy4vYmxhZGUnO1xuaW1wb3J0IHsgQXJlYUJsYWRlcyB9IGZyb20gJy4vYXJlYS1ibGFkZXMnO1xuaW1wb3J0IHsgQmxhZGVOYXZJdGVtIH0gZnJvbSAnLi9ibGFkZS1uYXYtaXRlbSc7XG5pbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi9wb3J0YWwtc2VydmljZSc7XG5pbXBvcnQgeyBFeGNlcHRpb24gfSBmcm9tICcuL2V4Y2VwdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBCbGFkZURhdGE8VD4gZXh0ZW5kcyBCbGFkZSB7XG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvclxuXG4gICAgLy9zdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJywgJ3BvcnRhbFNlcnZpY2UnXTtcbiAgICBjb25zdHJ1Y3Rvcihwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlLCBwYXRoOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIHN1YnRpdGxlOiBzdHJpbmcgPSAnJywgd2lkdGg6IG51bWJlciA9IDMwMCkgey8vJHNjb3BlOiBhbnksXG4gICAgICAgIHN1cGVyKHBvcnRhbFNlcnZpY2UsIHBhdGgsIHRpdGxlLCBzdWJ0aXRsZSwgd2lkdGgpOy8vJHNjb3BlLFxuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xuXG4gICAgaXRlbTogVCA9IDxUPnt9O1xuICAgIGl0ZW1zOiBUW10gPSBbXTtcblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gbmV3SXRlbVxuXG4gICAgbmV3SXRlbShmdW5jOiAoKSA9PiBQcm9taXNlPGFueSB8IEV4Y2VwdGlvbj4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk5ld0l0ZW0oKTtcblxuICAgICAgICBmdW5jKCkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tbWFuZERlbGV0ZUVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLm9uTmV3ZWRJdGVtKCk7XG4gICAgICAgIH0pLmNhdGNoKChleDogRXhjZXB0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c0JhckV4Y2VwdGlvbihleCk7XG4gICAgICAgICAgICB0aGlzLm9uTmV3SXRlbUV4Y2VwdGlvbihleCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvbk5ld0l0ZW0oKSB7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uTmV3ZWRJdGVtKCkge1xuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvbk5ld0l0ZW1FeGNlcHRpb24oZXg6IEV4Y2VwdGlvbikge1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gbG9hZEl0ZW1cblxuICAgIGxvYWRJdGVtKGZ1bmM6ICgpID0+IFByb21pc2U8YW55IHwgRXhjZXB0aW9uPik6IHZvaWQge1xuICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xuICAgICAgICB0aGlzLnNldFN0YXR1c0JhckxvYWREYXRhKCk7XG4gICAgICAgIHRoaXMub25Mb2FkSXRlbSgpO1xuXG4gICAgICAgIGZ1bmMoKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdGF0dXNCYXIoKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZGVkSXRlbSgpO1xuICAgICAgICB9KS5jYXRjaCgoZXg6IEV4Y2VwdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNCYXJFeGNlcHRpb24oZXgpO1xuICAgICAgICAgICAgdGhpcy5vbkxvYWRJdGVtRXhjZXB0aW9uKGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uTG9hZEl0ZW0oKSB7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uTG9hZGVkSXRlbSgpIHtcbiAgICB9XG5cbiAgICAvKiogRXh0ZW5zaW9uIHBvaW50ICovXG4gICAgb25Mb2FkSXRlbUV4Y2VwdGlvbihleDogRXhjZXB0aW9uKSB7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBsb2FkSXRlbXNcblxuICAgIGxvYWRJdGVtcyhmdW5jOiAoKSA9PiBQcm9taXNlPGFueSB8IEV4Y2VwdGlvbj4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcbiAgICAgICAgdGhpcy5zZXRTdGF0dXNCYXJMb2FkRGF0YSgpO1xuICAgICAgICB0aGlzLm9uTG9hZEl0ZW1zKCk7XG5cbiAgICAgICAgZnVuYygpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgdGhpcy5jbGVhclN0YXR1c0JhcigpO1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZGVkSXRlbXMoKTtcbiAgICAgICAgfSkuY2F0Y2goKGV4OiBFeGNlcHRpb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzQmFyRXhjZXB0aW9uKGV4KTtcbiAgICAgICAgICAgIHRoaXMub25Mb2FkSXRlbXNFeGNlcHRpb24oZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiogRXh0ZW5zaW9uIHBvaW50ICovXG4gICAgb25Mb2FkSXRlbXMoKSB7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uTG9hZGVkSXRlbXMoKSB7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uTG9hZEl0ZW1zRXhjZXB0aW9uKGV4OiBFeGNlcHRpb24pIHtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIHNhdmVJdGVtXG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGJlaGF2aW9yIGZvciBzYXZpbmcgYW4gZW50aXR5LlxuICAgICAqIC0gdmFsaWRhdGVzIHRoaXMubmdGb3JtLiBpZiBub3QgdmFsaWQsIHJldHVybnMgd2l0aG91dCBzYXZpbmdcbiAgICAgKiAtIGNhbGwgdGhpcy5zZXRTdGF0dXNCYXJTYXZlRGF0YSgpO1xuICAgICAqIC0gc2V0IHRoaXMuaXNDb21tYW5kU2F2ZUVuYWJsZWQgPSBmYWxzZVxuICAgICAqIC0gY2FsbCB0aGlzLm9uU2F2ZUl0ZW0oKVxuICAgICAqIC0gY2FsbCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAgICAgKiBUSEVOXG4gICAgICogLSBjYWxsIHRoaXMuY2xlYXJTdGF0dXNCYXIoKVxuICAgICAqIC0gc2V0IHRoaXMuaXNDb21tYW5kU2F2ZUVuYWJsZWQgPSB0cnVlXG4gICAgICogLSBzZXQgdGhpcy5pdGVtIHRvIHRoZSBzYXZlZCBkYXRhXG4gICAgICogLSBjYWxsIHRoaXMub25TYXZlZEl0ZW0oKVxuICAgICAqIC0gcmV0dXJucyB0aGUgc2F2ZWQgZGF0YVxuICAgICAqIENBVENIXG4gICAgICogLSBzZXQgdGhpcy5pc0NvbW1hbmRTYXZlRW5hYmxlZCA9IHRydWVcbiAgICAgKiAtIGNhbGwgdGhpcy5zZXRTdGF0dXNCYXJFeGNlcHRpb25cbiAgICAgKiAtIGNhbGwgdGhpcy5vbkxvYWRJdGVtc0V4Y2VwdGlvblxuICAgICAqL1xuICAgIHNhdmVJdGVtKGZ1bmM6ICgpID0+IFByb21pc2U8VCB8IEV4Y2VwdGlvbj4gfCBQcm9taXNlPFQgfCBFeGNlcHRpb24+LCBuZ0Zvcm06IGFueSA9IHVuZGVmaW5lZCk6IChQcm9taXNlPFQgfCB2b2lkPiB8IFByb21pc2U8VCB8IHZvaWQ+KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Zvcm1WYWxpZChuZ0Zvcm0pICYmIHRoaXMub25TYXZlSXRlbUZvcm1WYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzQmFyU2F2ZURhdGEoKTtcbiAgICAgICAgdGhpcy5pc0NvbW1hbmRTYXZlRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uU2F2ZUl0ZW0oKTtcblxuICAgICAgICByZXR1cm4gKDxQcm9taXNlPFQ+ICYgUHJvbWlzZTxUPj5mdW5jKCkpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdGF0dXNCYXIoKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21tYW5kU2F2ZUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pdGVtID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMub25TYXZlZEl0ZW0oKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXg6IEV4Y2VwdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0NvbW1hbmRTYXZlRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c0JhckV4Y2VwdGlvbihleCk7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZEl0ZW1zRXhjZXB0aW9uKGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uU2F2ZUl0ZW0oKSB7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uU2F2ZWRJdGVtKCkge1xuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvblNhdmVJdGVtRXhjZXB0aW9uKGV4OiBFeGNlcHRpb24pIHtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIHNhdmVPYmplY3RcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgYmVoYXZpb3IgZm9yIHNhdmluZyBhbnkgb2JqZWN0LlxuICAgICAqIC0gdmFsaWRhdGVzIHRoaXMubmdGb3JtLiBpZiBub3QgdmFsaWQsIHJldHVybnMgd2l0aG91dCBzYXZpbmdcbiAgICAgKiAtIGNhbGwgdGhpcy5zZXRTdGF0dXNCYXJTYXZlRGF0YSgpO1xuICAgICAqIC0gc2V0IHRoaXMuaXNDb21tYW5kU2F2ZUVuYWJsZWQgPSBmYWxzZVxuICAgICAqIC0gY2FsbCB0aGlzLm9uU2F2ZU9iamVjdCgpXG4gICAgICogLSBjYWxsIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICAgICAqIFRIRU5cbiAgICAgKiAtIGNhbGwgdGhpcy5jbGVhclN0YXR1c0JhcigpXG4gICAgICogLSBzZXQgdGhpcy5pc0NvbW1hbmRTYXZlRW5hYmxlZCA9IHRydWVcbiAgICAgKiAtIGNhbGwgdGhpcy5vblNhdmVkT2JqZWN0KClcbiAgICAgKiAtIHJldHVybnMgdGhlIHNhdmVkIGRhdGFcbiAgICAgKiBDQVRDSFxuICAgICAqIC0gc2V0IHRoaXMuaXNDb21tYW5kU2F2ZUVuYWJsZWQgPSB0cnVlXG4gICAgICogLSBjYWxsIHRoaXMuc2V0U3RhdHVzQmFyRXhjZXB0aW9uXG4gICAgICogLSBjYWxsIHRoaXMub25Mb2FkSXRlbXNFeGNlcHRpb25cbiAgICAgKi9cbiAgICBzYXZlT2JqZWN0KGZ1bmM6ICgpID0+IFByb21pc2U8YW55IHwgRXhjZXB0aW9uPiB8IFByb21pc2U8YW55IHwgRXhjZXB0aW9uPiwgbmdGb3JtOiBhbnkgPSB1bmRlZmluZWQpOiAoUHJvbWlzZTxhbnkgfCB2b2lkPiB8IFByb21pc2U8YW55IHwgdm9pZD4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRm9ybVZhbGlkKG5nRm9ybSkgJiYgdGhpcy5vblNhdmVPYmplY3RGb3JtVmFsaWRhdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXR1c0JhclNhdmVEYXRhKCk7XG4gICAgICAgIHRoaXMuaXNDb21tYW5kU2F2ZUVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblNhdmVPYmplY3QoKTtcblxuICAgICAgICByZXR1cm4gKDxQcm9taXNlPGFueT4gJiBQcm9taXNlPFQ+PmZ1bmMoKSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhclN0YXR1c0JhcigpO1xuICAgICAgICAgICAgdGhpcy5pc0NvbW1hbmRTYXZlRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uU2F2ZWRPYmplY3QoKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXg6IEV4Y2VwdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0NvbW1hbmRTYXZlRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c0JhckV4Y2VwdGlvbihleCk7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZEl0ZW1zRXhjZXB0aW9uKGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uU2F2ZU9iamVjdCgpIHtcbiAgICB9XG5cbiAgICAvKiogRXh0ZW5zaW9uIHBvaW50ICovXG4gICAgb25TYXZlZE9iamVjdCgpIHtcbiAgICB9XG5cbiAgICAvKiogRXh0ZW5zaW9uIHBvaW50ICovXG4gICAgb25TYXZlT2JqZWN0RXhjZXB0aW9uKGV4OiBFeGNlcHRpb24pIHtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIGRlbGV0ZUl0ZW1cblxuICAgIGRlbGV0ZUl0ZW0oZnVuYzogKCkgPT4gUHJvbWlzZTxUIHwgbnVtYmVyIHwgdm9pZCB8IEV4Y2VwdGlvbj4gfCBQcm9taXNlPFQgfCBudW1iZXIgfCB2b2lkIHwgRXhjZXB0aW9uPiwgbmdGb3JtOiBhbnkgPSB1bmRlZmluZWQpOiAoUHJvbWlzZTxUIHwgbnVtYmVyIHwgdm9pZD4gfCBQcm9taXNlPFQgfCBudW1iZXIgfCB2b2lkPikge1xuICAgICAgICBpZiAoIXRoaXMuaXNGb3JtVmFsaWQobmdGb3JtKSAmJiB0aGlzLm9uRGVsZXRlSXRlbUZvcm1WYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzQmFyRGVsZXRlRGF0YSgpO1xuICAgICAgICB0aGlzLmlzQ29tbWFuZERlbGV0ZUVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUl0ZW0oKTtcblxuICAgICAgICByZXR1cm4gKDxQcm9taXNlPFQ+ICYgUHJvbWlzZTxUPj5mdW5jKCkpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdGF0dXNCYXIoKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21tYW5kRGVsZXRlRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBkYXRhO1xuICAgICAgICAgICAgaWYgKHRoaXMub25EZWxldGVkSXRlbSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXg6IEV4Y2VwdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0NvbW1hbmREZWxldGVFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzQmFyRXhjZXB0aW9uKGV4KTtcbiAgICAgICAgICAgIHRoaXMub25Mb2FkSXRlbXNFeGNlcHRpb24oZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiogRXh0ZW5zaW9uIHBvaW50ICovXG4gICAgb25EZWxldGVJdGVtKCkge1xuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnRcbiAgICAgKiByZXR1cm4gdmFsdWUgaW5kaWNhdGVzIGlmIHRoZSBjdXJyZW50IGJsYWRlIHNob3VsZCBiZSBjbG9zZWQgb3Igbm90LlxuICAgICAqL1xuICAgIG9uRGVsZXRlZEl0ZW0oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBjbG9zZSB0aGUgY3VycmVudCBibGFkZVxuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvbkRlbGV0ZWRPYmplY3RFeGNlcHRpb24oZXg6IEV4Y2VwdGlvbikge1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gZXhlY3V0ZSBXZWJBcGkgZnVuY3Rpb25cblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgYmVoYXZpb3IgZm9yIGV4ZWN1dGluZ1xuICAgICAqIC0gdmFsaWRhdGVzIG5nRm9ybS4gaWYgbm90IHZhbGlkLCByZXR1cm5zIHdpdGhvdXQgZXhlY3V0aW5nXG4gICAgICogLSBjYWxsIHRoaXMuc2V0U3RhdHVzQmFySW5mbygpO1xuICAgICAqIC0gc2V0IHRoaXMuaXNDb21tYW5kU3RhcnRFbmFibGVkID0gZmFsc2VcbiAgICAgKiAtIGNhbGwgdGhpcy5vbkV4ZWN1dGUoKVxuICAgICAqIC0gY2FsbCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAgICAgKiBUSEVOXG4gICAgICogLSBjYWxsIHRoaXMuY2xlYXJTdGF0dXNCYXIoKVxuICAgICAqIC0gc2V0IHRoaXMuaXNDb21tYW5kU3RhcnRFbmFibGVkID0gdHJ1ZVxuICAgICAqIC0gY2FsbCB0aGlzLm9uRXhlY3V0ZWQoKVxuICAgICAqIC0gcmV0dXJucyB0aGUgZGF0YVxuICAgICAqIENBVENIXG4gICAgICogLSBzZXQgdGhpcy5pc0NvbW1hbmRTdGFydEVuYWJsZWQgPSB0cnVlXG4gICAgICogLSBjYWxsIHRoaXMuc2V0U3RhdHVzQmFyRXhjZXB0aW9uXG4gICAgICogLSBjYWxsIHRoaXMub25FeGVjdXRlRXhjZXB0aW9uXG4gICAgICovXG4gICAgZXhlY3V0ZShtZXNzYWdlOiBzdHJpbmcsIGZ1bmM6ICgpID0+IFByb21pc2U8VCB8IEV4Y2VwdGlvbj4gfCBQcm9taXNlPFQgfCBFeGNlcHRpb24+LCBuZ0Zvcm06IGFueSA9IHVuZGVmaW5lZCk6IChQcm9taXNlPFQgfCB2b2lkPiB8IFByb21pc2U8VCB8IHZvaWQ+KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Zvcm1WYWxpZChuZ0Zvcm0pICYmIHRoaXMub25TYXZlSXRlbUZvcm1WYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzQmFySW5mbyhtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5pc0NvbW1hbmRTdGFydEVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkV4ZWN1dGUoKTtcblxuICAgICAgICByZXR1cm4gKDxQcm9taXNlPFQ+ICYgUHJvbWlzZTxUPj5mdW5jKCkpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdGF0dXNCYXIoKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21tYW5kU3RhcnRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25FeGVjdXRlZCgpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChleDogRXhjZXB0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tbWFuZFN0YXJ0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c0JhckV4Y2VwdGlvbihleCk7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0ZUV4Y2VwdGlvbihleCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvbkV4ZWN1dGUoKSB7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uRXhlY3V0ZWQoKSB7XG4gICAgfVxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvbkV4ZWN1dGVFeGNlcHRpb24oZXg6IEV4Y2VwdGlvbikge1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gRm9ybSBWYWxpZGF0aW9uXG5cbiAgICBpc0Zvcm1WYWxpZChuZ0Zvcm06IGFueSA9IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBhbmd1bGFyanNcbiAgICAgICAgaWYgKCF0aGlzLmZvcm1ibGFkZS4kdmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzQmFyRXJyb3IoJ0Zvcm11bGFyIG5pY2h0IGfDg8aSw4bigJnDg+KAoMOi4oKs4oSiw4PGksOi4oKswqDDg8Kiw6LigJrCrMOi4oCewqLDg8aSw4bigJnDg8Kiw6LigJrCrMOCwqDDg8aSw4LCosODwqLDouKCrMWhw4LCrMODwqLDouKCrMW+w4LCosODxpLDhuKAmcOD4oCgw6LigqzihKLDg8aSw4LCosODwqLDouKCrMWhw4LCrMOD4oCaw4LCoMODxpLDhuKAmcOD4oCaw4LCosODxpLDgsKiw4PCosOi4oCawqzDhcKhw4PigJrDgsKsw4PGksOCwqLDg8Kiw6LigJrCrMOFwr7Dg+KAmsOCwqLDg8aSw4bigJnDg+KAoMOi4oKs4oSiw4PGksOi4oKswqDDg8Kiw6LigJrCrMOi4oCewqLDg8aSw4bigJnDg+KAmsOCwqLDg8aSw4LCosODwqLDouKAmsKsw4XCocOD4oCaw4LCrMODxpLDouKCrMKmw4PigJrDgsKhw4PGksOG4oCZw4PigKDDouKCrOKEosODxpLDgsKiw4PCosOi4oKsxaHDgsKsw4PigKbDgsKhw4PGksOG4oCZw4PCosOi4oCawqzDhcKhw4PGksOi4oKsxaHDg+KAmsOCwrxsdGlnLicpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhbmd1bGFyICgyKylcbiAgICAgICAgaWYgKG5nRm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIW5nRm9ybS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvblNhdmVJdGVtRm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvblNhdmVPYmplY3RGb3JtVmFsaWRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uRGVsZXRlSXRlbUZvcm1WYWxpZGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=