/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Blade } from './blade';
/**
 * @template T
 */
export class BladeData extends Blade {
    // #region Constructor
    //static $inject = ['$scope', 'portalService'];
    /**
     * @param {?} portalService
     * @param {?} path
     * @param {?} title
     * @param {?=} subtitle
     * @param {?=} width
     */
    constructor(portalService, path, title, subtitle = '', width = 300) {
        super(portalService, path, title, subtitle, width); //$scope,
        // #endregion
        // #region Properties
        this.item = (/** @type {?} */ ({}));
        this.items = [];
    }
    // #endregion
    // #region newItem
    /**
     * @param {?} func
     * @return {?}
     */
    newItem(func) {
        this.onNewItem();
        func().then((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.isCommandDeleteEnabled = false;
            this.item = data;
            this.onNewedItem();
        })).catch((/**
         * @param {?} ex
         * @return {?}
         */
        (ex) => {
            this.setStatusBarException(ex);
            this.onNewItemException(ex);
        }));
    }
    /**
     * Extension point
     * @return {?}
     */
    onNewItem() {
    }
    /**
     * Extension point
     * @return {?}
     */
    onNewedItem() {
    }
    /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    onNewItemException(ex) {
    }
    // #endregion
    // #region loadItem
    /**
     * @param {?} func
     * @return {?}
     */
    loadItem(func) {
        this.visibility = 'collapse';
        this.setStatusBarLoadData();
        this.onLoadItem();
        func().then((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.visibility = 'visible';
            this.clearStatusBar();
            this.item = data;
            this.onLoadedItem();
        })).catch((/**
         * @param {?} ex
         * @return {?}
         */
        (ex) => {
            this.setStatusBarException(ex);
            this.onLoadItemException(ex);
        }));
    }
    /**
     * Extension point
     * @return {?}
     */
    onLoadItem() {
    }
    /**
     * Extension point
     * @return {?}
     */
    onLoadedItem() {
    }
    /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    onLoadItemException(ex) {
    }
    // #endregion
    // #region loadItems
    /**
     * @param {?} func
     * @return {?}
     */
    loadItems(func) {
        this.visibility = 'collapse';
        this.setStatusBarLoadData();
        this.onLoadItems();
        func().then((/**
         * @param {?} data
         * @return {?}
         */
        (data) => {
            this.visibility = 'visible';
            this.clearStatusBar();
            this.items = data;
            this.onLoadedItems();
        })).catch((/**
         * @param {?} ex
         * @return {?}
         */
        (ex) => {
            this.setStatusBarException(ex);
            this.onLoadItemsException(ex);
        }));
    }
    /**
     * Extension point
     * @return {?}
     */
    onLoadItems() {
    }
    /**
     * Extension point
     * @return {?}
     */
    onLoadedItems() {
    }
    /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    onLoadItemsException(ex) {
    }
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
    saveItem(func, ngForm = undefined) {
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
        (data) => {
            this.clearStatusBar();
            this.isCommandSaveEnabled = true;
            this.item = data;
            this.onSavedItem();
            return data;
        })).catch((/**
         * @param {?} ex
         * @return {?}
         */
        (ex) => {
            this.isCommandSaveEnabled = true;
            this.setStatusBarException(ex);
            this.onLoadItemsException(ex);
        }));
    }
    /**
     * Extension point
     * @return {?}
     */
    onSaveItem() {
    }
    /**
     * Extension point
     * @return {?}
     */
    onSavedItem() {
    }
    /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    onSaveItemException(ex) {
    }
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
    saveObject(func, ngForm = undefined) {
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
        (data) => {
            this.clearStatusBar();
            this.isCommandSaveEnabled = true;
            this.onSavedObject();
            return data;
        })).catch((/**
         * @param {?} ex
         * @return {?}
         */
        (ex) => {
            this.isCommandSaveEnabled = true;
            this.setStatusBarException(ex);
            this.onLoadItemsException(ex);
        }));
    }
    /**
     * Extension point
     * @return {?}
     */
    onSaveObject() {
    }
    /**
     * Extension point
     * @return {?}
     */
    onSavedObject() {
    }
    /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    onSaveObjectException(ex) {
    }
    // #endregion
    // #region deleteItem
    /**
     * @param {?} func
     * @param {?=} ngForm
     * @return {?}
     */
    deleteItem(func, ngForm = undefined) {
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
        (data) => {
            this.clearStatusBar();
            this.isCommandDeleteEnabled = true;
            this.item = data;
            if (this.onDeletedItem()) {
                this.close();
            }
            ;
            return data;
        })).catch((/**
         * @param {?} ex
         * @return {?}
         */
        (ex) => {
            this.isCommandDeleteEnabled = true;
            this.setStatusBarException(ex);
            this.onLoadItemsException(ex);
        }));
    }
    /**
     * Extension point
     * @return {?}
     */
    onDeleteItem() {
    }
    /**
     * Extension point
     * return value indicates if the current blade should be closed or not.
     * @return {?}
     */
    onDeletedItem() {
        return true; // close the current blade
    }
    /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    onDeletedObjectException(ex) {
    }
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
    execute(message, func, ngForm = undefined) {
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
        (data) => {
            this.clearStatusBar();
            this.isCommandStartEnabled = true;
            this.onExecuted();
            return data;
        })).catch((/**
         * @param {?} ex
         * @return {?}
         */
        (ex) => {
            this.isCommandStartEnabled = true;
            this.setStatusBarException(ex);
            this.onExecuteException(ex);
        }));
    }
    /**
     * Extension point
     * @return {?}
     */
    onExecute() {
    }
    /**
     * Extension point
     * @return {?}
     */
    onExecuted() {
    }
    /**
     * Extension point
     * @param {?} ex
     * @return {?}
     */
    onExecuteException(ex) {
    }
    // #endregion
    // #region Form Validation
    /**
     * @param {?=} ngForm
     * @return {?}
     */
    isFormValid(ngForm = undefined) {
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
    }
    /**
     * Extension point
     * @return {?}
     */
    onSaveItemFormValidation() {
        return true;
    }
    /**
     * Extension point
     * @return {?}
     */
    onSaveObjectFormValidation() {
        return true;
    }
    /**
     * Extension point
     * @return {?}
     */
    onDeleteItemFormValidation() {
        return true;
    }
}
if (false) {
    /** @type {?} */
    BladeData.prototype.item;
    /** @type {?} */
    BladeData.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxhZGUtZGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcG9ydGFsLWF6dXJlLyIsInNvdXJjZXMiOlsibGliL2RvbWFpbi9ibGFkZS1kYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7O0FBTWhDLE1BQU0sT0FBTyxTQUFhLFNBQVEsS0FBSzs7Ozs7Ozs7OztJQUluQyxZQUFZLGFBQTRCLEVBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxXQUFtQixFQUFFLEVBQUUsUUFBZ0IsR0FBRztRQUM3RyxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUEsU0FBUzs7O1FBT2hFLFNBQUksR0FBTSxtQkFBRyxFQUFFLEVBQUEsQ0FBQztRQUNoQixVQUFLLEdBQVEsRUFBRSxDQUFDO0lBUGhCLENBQUM7Ozs7Ozs7SUFhRCxPQUFPLENBQUMsSUFBb0M7UUFDeEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLElBQUksRUFBRSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7WUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDLEtBQUs7Ozs7UUFBQyxDQUFDLEVBQWEsRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUdELFNBQVM7SUFDVCxDQUFDOzs7OztJQUdELFdBQVc7SUFDWCxDQUFDOzs7Ozs7SUFHRCxr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RUQsZUFBZTtRQUNmLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDZixPQUFPLEtBQUssQ0FBQzthQUNoQjtTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFHRCx3QkFBd0I7UUFDcEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFHRCwwQkFBMEI7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFHRCwwQkFBMEI7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztDQUdKOzs7SUFuVkcseUJBQWdCOztJQUNoQiwwQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbGFkZSB9IGZyb20gJy4vYmxhZGUnO1xuaW1wb3J0IHsgQXJlYUJsYWRlcyB9IGZyb20gJy4vYXJlYS1ibGFkZXMnO1xuaW1wb3J0IHsgQmxhZGVOYXZJdGVtIH0gZnJvbSAnLi9ibGFkZS1uYXYtaXRlbSc7XG5pbXBvcnQgeyBQb3J0YWxTZXJ2aWNlIH0gZnJvbSAnLi9wb3J0YWwtc2VydmljZSc7XG5pbXBvcnQgeyBFeGNlcHRpb24gfSBmcm9tICcuL2V4Y2VwdGlvbic7XG5cbmV4cG9ydCBjbGFzcyBCbGFkZURhdGE8VD4gZXh0ZW5kcyBCbGFkZSB7XG4gICAgLy8gI3JlZ2lvbiBDb25zdHJ1Y3RvclxuXG4gICAgLy9zdGF0aWMgJGluamVjdCA9IFsnJHNjb3BlJywgJ3BvcnRhbFNlcnZpY2UnXTtcbiAgICBjb25zdHJ1Y3Rvcihwb3J0YWxTZXJ2aWNlOiBQb3J0YWxTZXJ2aWNlLCBwYXRoOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIHN1YnRpdGxlOiBzdHJpbmcgPSAnJywgd2lkdGg6IG51bWJlciA9IDMwMCkgey8vJHNjb3BlOiBhbnksXG4gICAgICAgIHN1cGVyKHBvcnRhbFNlcnZpY2UsIHBhdGgsIHRpdGxlLCBzdWJ0aXRsZSwgd2lkdGgpOy8vJHNjb3BlLFxuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gUHJvcGVydGllc1xuXG4gICAgaXRlbTogVCA9IDxUPnt9O1xuICAgIGl0ZW1zOiBUW10gPSBbXTtcblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gbmV3SXRlbVxuXG4gICAgbmV3SXRlbShmdW5jOiAoKSA9PiBQcm9taXNlPGFueSB8IEV4Y2VwdGlvbj4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk5ld0l0ZW0oKTtcblxuICAgICAgICBmdW5jKCkudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tbWFuZERlbGV0ZUVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLm9uTmV3ZWRJdGVtKCk7XG4gICAgICAgIH0pLmNhdGNoKChleDogRXhjZXB0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c0JhckV4Y2VwdGlvbihleCk7XG4gICAgICAgICAgICB0aGlzLm9uTmV3SXRlbUV4Y2VwdGlvbihleCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvbk5ld0l0ZW0oKSB7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uTmV3ZWRJdGVtKCkge1xuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvbk5ld0l0ZW1FeGNlcHRpb24oZXg6IEV4Y2VwdGlvbikge1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gbG9hZEl0ZW1cblxuICAgIGxvYWRJdGVtKGZ1bmM6ICgpID0+IFByb21pc2U8YW55IHwgRXhjZXB0aW9uPik6IHZvaWQge1xuICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSAnY29sbGFwc2UnO1xuICAgICAgICB0aGlzLnNldFN0YXR1c0JhckxvYWREYXRhKCk7XG4gICAgICAgIHRoaXMub25Mb2FkSXRlbSgpO1xuXG4gICAgICAgIGZ1bmMoKS50aGVuKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdGF0dXNCYXIoKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbSA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZGVkSXRlbSgpO1xuICAgICAgICB9KS5jYXRjaCgoZXg6IEV4Y2VwdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0dXNCYXJFeGNlcHRpb24oZXgpO1xuICAgICAgICAgICAgdGhpcy5vbkxvYWRJdGVtRXhjZXB0aW9uKGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uTG9hZEl0ZW0oKSB7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uTG9hZGVkSXRlbSgpIHtcbiAgICB9XG5cbiAgICAvKiogRXh0ZW5zaW9uIHBvaW50ICovXG4gICAgb25Mb2FkSXRlbUV4Y2VwdGlvbihleDogRXhjZXB0aW9uKSB7XG4gICAgfVxuXG4gICAgLy8gI2VuZHJlZ2lvblxuXG4gICAgLy8gI3JlZ2lvbiBsb2FkSXRlbXNcblxuICAgIGxvYWRJdGVtcyhmdW5jOiAoKSA9PiBQcm9taXNlPGFueSB8IEV4Y2VwdGlvbj4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ2NvbGxhcHNlJztcbiAgICAgICAgdGhpcy5zZXRTdGF0dXNCYXJMb2FkRGF0YSgpO1xuICAgICAgICB0aGlzLm9uTG9hZEl0ZW1zKCk7XG5cbiAgICAgICAgZnVuYygpLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgdGhpcy5jbGVhclN0YXR1c0JhcigpO1xuICAgICAgICAgICAgdGhpcy5pdGVtcyA9IGRhdGE7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZGVkSXRlbXMoKTtcbiAgICAgICAgfSkuY2F0Y2goKGV4OiBFeGNlcHRpb24pID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzQmFyRXhjZXB0aW9uKGV4KTtcbiAgICAgICAgICAgIHRoaXMub25Mb2FkSXRlbXNFeGNlcHRpb24oZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiogRXh0ZW5zaW9uIHBvaW50ICovXG4gICAgb25Mb2FkSXRlbXMoKSB7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uTG9hZGVkSXRlbXMoKSB7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uTG9hZEl0ZW1zRXhjZXB0aW9uKGV4OiBFeGNlcHRpb24pIHtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIHNhdmVJdGVtXG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGJlaGF2aW9yIGZvciBzYXZpbmcgYW4gZW50aXR5LlxuICAgICAqIC0gdmFsaWRhdGVzIHRoaXMubmdGb3JtLiBpZiBub3QgdmFsaWQsIHJldHVybnMgd2l0aG91dCBzYXZpbmdcbiAgICAgKiAtIGNhbGwgdGhpcy5zZXRTdGF0dXNCYXJTYXZlRGF0YSgpO1xuICAgICAqIC0gc2V0IHRoaXMuaXNDb21tYW5kU2F2ZUVuYWJsZWQgPSBmYWxzZVxuICAgICAqIC0gY2FsbCB0aGlzLm9uU2F2ZUl0ZW0oKVxuICAgICAqIC0gY2FsbCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAgICAgKiBUSEVOXG4gICAgICogLSBjYWxsIHRoaXMuY2xlYXJTdGF0dXNCYXIoKVxuICAgICAqIC0gc2V0IHRoaXMuaXNDb21tYW5kU2F2ZUVuYWJsZWQgPSB0cnVlXG4gICAgICogLSBzZXQgdGhpcy5pdGVtIHRvIHRoZSBzYXZlZCBkYXRhXG4gICAgICogLSBjYWxsIHRoaXMub25TYXZlZEl0ZW0oKVxuICAgICAqIC0gcmV0dXJucyB0aGUgc2F2ZWQgZGF0YVxuICAgICAqIENBVENIXG4gICAgICogLSBzZXQgdGhpcy5pc0NvbW1hbmRTYXZlRW5hYmxlZCA9IHRydWVcbiAgICAgKiAtIGNhbGwgdGhpcy5zZXRTdGF0dXNCYXJFeGNlcHRpb25cbiAgICAgKiAtIGNhbGwgdGhpcy5vbkxvYWRJdGVtc0V4Y2VwdGlvblxuICAgICAqL1xuICAgIHNhdmVJdGVtKGZ1bmM6ICgpID0+IFByb21pc2U8VCB8IEV4Y2VwdGlvbj4gfCBQcm9taXNlPFQgfCBFeGNlcHRpb24+LCBuZ0Zvcm06IGFueSA9IHVuZGVmaW5lZCk6IChQcm9taXNlPFQgfCB2b2lkPiB8IFByb21pc2U8VCB8IHZvaWQ+KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Zvcm1WYWxpZChuZ0Zvcm0pICYmIHRoaXMub25TYXZlSXRlbUZvcm1WYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzQmFyU2F2ZURhdGEoKTtcbiAgICAgICAgdGhpcy5pc0NvbW1hbmRTYXZlRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uU2F2ZUl0ZW0oKTtcblxuICAgICAgICByZXR1cm4gKDxQcm9taXNlPFQ+ICYgUHJvbWlzZTxUPj5mdW5jKCkpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdGF0dXNCYXIoKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21tYW5kU2F2ZUVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pdGVtID0gZGF0YTtcbiAgICAgICAgICAgIHRoaXMub25TYXZlZEl0ZW0oKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXg6IEV4Y2VwdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0NvbW1hbmRTYXZlRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c0JhckV4Y2VwdGlvbihleCk7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZEl0ZW1zRXhjZXB0aW9uKGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uU2F2ZUl0ZW0oKSB7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uU2F2ZWRJdGVtKCkge1xuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvblNhdmVJdGVtRXhjZXB0aW9uKGV4OiBFeGNlcHRpb24pIHtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIHNhdmVPYmplY3RcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgYmVoYXZpb3IgZm9yIHNhdmluZyBhbnkgb2JqZWN0LlxuICAgICAqIC0gdmFsaWRhdGVzIHRoaXMubmdGb3JtLiBpZiBub3QgdmFsaWQsIHJldHVybnMgd2l0aG91dCBzYXZpbmdcbiAgICAgKiAtIGNhbGwgdGhpcy5zZXRTdGF0dXNCYXJTYXZlRGF0YSgpO1xuICAgICAqIC0gc2V0IHRoaXMuaXNDb21tYW5kU2F2ZUVuYWJsZWQgPSBmYWxzZVxuICAgICAqIC0gY2FsbCB0aGlzLm9uU2F2ZU9iamVjdCgpXG4gICAgICogLSBjYWxsIHRoZSBwcm92aWRlZCBmdW5jdGlvblxuICAgICAqIFRIRU5cbiAgICAgKiAtIGNhbGwgdGhpcy5jbGVhclN0YXR1c0JhcigpXG4gICAgICogLSBzZXQgdGhpcy5pc0NvbW1hbmRTYXZlRW5hYmxlZCA9IHRydWVcbiAgICAgKiAtIGNhbGwgdGhpcy5vblNhdmVkT2JqZWN0KClcbiAgICAgKiAtIHJldHVybnMgdGhlIHNhdmVkIGRhdGFcbiAgICAgKiBDQVRDSFxuICAgICAqIC0gc2V0IHRoaXMuaXNDb21tYW5kU2F2ZUVuYWJsZWQgPSB0cnVlXG4gICAgICogLSBjYWxsIHRoaXMuc2V0U3RhdHVzQmFyRXhjZXB0aW9uXG4gICAgICogLSBjYWxsIHRoaXMub25Mb2FkSXRlbXNFeGNlcHRpb25cbiAgICAgKi9cbiAgICBzYXZlT2JqZWN0KGZ1bmM6ICgpID0+IFByb21pc2U8YW55IHwgRXhjZXB0aW9uPiB8IFByb21pc2U8YW55IHwgRXhjZXB0aW9uPiwgbmdGb3JtOiBhbnkgPSB1bmRlZmluZWQpOiAoUHJvbWlzZTxhbnkgfCB2b2lkPiB8IFByb21pc2U8YW55IHwgdm9pZD4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzRm9ybVZhbGlkKG5nRm9ybSkgJiYgdGhpcy5vblNhdmVPYmplY3RGb3JtVmFsaWRhdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXR1c0JhclNhdmVEYXRhKCk7XG4gICAgICAgIHRoaXMuaXNDb21tYW5kU2F2ZUVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vblNhdmVPYmplY3QoKTtcblxuICAgICAgICByZXR1cm4gKDxQcm9taXNlPGFueT4gJiBQcm9taXNlPFQ+PmZ1bmMoKSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGVhclN0YXR1c0JhcigpO1xuICAgICAgICAgICAgdGhpcy5pc0NvbW1hbmRTYXZlRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uU2F2ZWRPYmplY3QoKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXg6IEV4Y2VwdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0NvbW1hbmRTYXZlRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c0JhckV4Y2VwdGlvbihleCk7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZEl0ZW1zRXhjZXB0aW9uKGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uU2F2ZU9iamVjdCgpIHtcbiAgICB9XG5cbiAgICAvKiogRXh0ZW5zaW9uIHBvaW50ICovXG4gICAgb25TYXZlZE9iamVjdCgpIHtcbiAgICB9XG5cbiAgICAvKiogRXh0ZW5zaW9uIHBvaW50ICovXG4gICAgb25TYXZlT2JqZWN0RXhjZXB0aW9uKGV4OiBFeGNlcHRpb24pIHtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG5cbiAgICAvLyAjcmVnaW9uIGRlbGV0ZUl0ZW1cblxuICAgIGRlbGV0ZUl0ZW0oZnVuYzogKCkgPT4gUHJvbWlzZTxUIHwgbnVtYmVyIHwgdm9pZCB8IEV4Y2VwdGlvbj4gfCBQcm9taXNlPFQgfCBudW1iZXIgfCB2b2lkIHwgRXhjZXB0aW9uPiwgbmdGb3JtOiBhbnkgPSB1bmRlZmluZWQpOiAoUHJvbWlzZTxUIHwgbnVtYmVyIHwgdm9pZD4gfCBQcm9taXNlPFQgfCBudW1iZXIgfCB2b2lkPikge1xuICAgICAgICBpZiAoIXRoaXMuaXNGb3JtVmFsaWQobmdGb3JtKSAmJiB0aGlzLm9uRGVsZXRlSXRlbUZvcm1WYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzQmFyRGVsZXRlRGF0YSgpO1xuICAgICAgICB0aGlzLmlzQ29tbWFuZERlbGV0ZUVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUl0ZW0oKTtcblxuICAgICAgICByZXR1cm4gKDxQcm9taXNlPFQ+ICYgUHJvbWlzZTxUPj5mdW5jKCkpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdGF0dXNCYXIoKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21tYW5kRGVsZXRlRW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLml0ZW0gPSBkYXRhO1xuICAgICAgICAgICAgaWYgKHRoaXMub25EZWxldGVkSXRlbSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KS5jYXRjaCgoZXg6IEV4Y2VwdGlvbikgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc0NvbW1hbmREZWxldGVFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzQmFyRXhjZXB0aW9uKGV4KTtcbiAgICAgICAgICAgIHRoaXMub25Mb2FkSXRlbXNFeGNlcHRpb24oZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiogRXh0ZW5zaW9uIHBvaW50ICovXG4gICAgb25EZWxldGVJdGVtKCkge1xuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnRcbiAgICAgKiByZXR1cm4gdmFsdWUgaW5kaWNhdGVzIGlmIHRoZSBjdXJyZW50IGJsYWRlIHNob3VsZCBiZSBjbG9zZWQgb3Igbm90LlxuICAgICAqL1xuICAgIG9uRGVsZXRlZEl0ZW0oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBjbG9zZSB0aGUgY3VycmVudCBibGFkZVxuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvbkRlbGV0ZWRPYmplY3RFeGNlcHRpb24oZXg6IEV4Y2VwdGlvbikge1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gZXhlY3V0ZSBXZWJBcGkgZnVuY3Rpb25cblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgYmVoYXZpb3IgZm9yIGV4ZWN1dGluZ1xuICAgICAqIC0gdmFsaWRhdGVzIG5nRm9ybS4gaWYgbm90IHZhbGlkLCByZXR1cm5zIHdpdGhvdXQgZXhlY3V0aW5nXG4gICAgICogLSBjYWxsIHRoaXMuc2V0U3RhdHVzQmFySW5mbygpO1xuICAgICAqIC0gc2V0IHRoaXMuaXNDb21tYW5kU3RhcnRFbmFibGVkID0gZmFsc2VcbiAgICAgKiAtIGNhbGwgdGhpcy5vbkV4ZWN1dGUoKVxuICAgICAqIC0gY2FsbCB0aGUgcHJvdmlkZWQgZnVuY3Rpb25cbiAgICAgKiBUSEVOXG4gICAgICogLSBjYWxsIHRoaXMuY2xlYXJTdGF0dXNCYXIoKVxuICAgICAqIC0gc2V0IHRoaXMuaXNDb21tYW5kU3RhcnRFbmFibGVkID0gdHJ1ZVxuICAgICAqIC0gY2FsbCB0aGlzLm9uRXhlY3V0ZWQoKVxuICAgICAqIC0gcmV0dXJucyB0aGUgZGF0YVxuICAgICAqIENBVENIXG4gICAgICogLSBzZXQgdGhpcy5pc0NvbW1hbmRTdGFydEVuYWJsZWQgPSB0cnVlXG4gICAgICogLSBjYWxsIHRoaXMuc2V0U3RhdHVzQmFyRXhjZXB0aW9uXG4gICAgICogLSBjYWxsIHRoaXMub25FeGVjdXRlRXhjZXB0aW9uXG4gICAgICovXG4gICAgZXhlY3V0ZShtZXNzYWdlOiBzdHJpbmcsIGZ1bmM6ICgpID0+IFByb21pc2U8VCB8IEV4Y2VwdGlvbj4gfCBQcm9taXNlPFQgfCBFeGNlcHRpb24+LCBuZ0Zvcm06IGFueSA9IHVuZGVmaW5lZCk6IChQcm9taXNlPFQgfCB2b2lkPiB8IFByb21pc2U8VCB8IHZvaWQ+KSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Zvcm1WYWxpZChuZ0Zvcm0pICYmIHRoaXMub25TYXZlSXRlbUZvcm1WYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzQmFySW5mbyhtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5pc0NvbW1hbmRTdGFydEVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkV4ZWN1dGUoKTtcblxuICAgICAgICByZXR1cm4gKDxQcm9taXNlPFQ+ICYgUHJvbWlzZTxUPj5mdW5jKCkpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTdGF0dXNCYXIoKTtcbiAgICAgICAgICAgIHRoaXMuaXNDb21tYW5kU3RhcnRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub25FeGVjdXRlZCgpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChleDogRXhjZXB0aW9uKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmlzQ29tbWFuZFN0YXJ0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXR1c0JhckV4Y2VwdGlvbihleCk7XG4gICAgICAgICAgICB0aGlzLm9uRXhlY3V0ZUV4Y2VwdGlvbihleCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvbkV4ZWN1dGUoKSB7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uRXhlY3V0ZWQoKSB7XG4gICAgfVxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvbkV4ZWN1dGVFeGNlcHRpb24oZXg6IEV4Y2VwdGlvbikge1xuICAgIH1cblxuICAgIC8vICNlbmRyZWdpb25cblxuICAgIC8vICNyZWdpb24gRm9ybSBWYWxpZGF0aW9uXG5cbiAgICBpc0Zvcm1WYWxpZChuZ0Zvcm06IGFueSA9IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBhbmd1bGFyanNcbiAgICAgICAgaWYgKCF0aGlzLmZvcm1ibGFkZS4kdmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdHVzQmFyRXJyb3IoJ0Zvcm11bGFyIG5pY2h0IGfDg8aSw4bigJnDg+KAoMOi4oKs4oSiw4PGksOi4oKswqDDg8Kiw6LigJrCrMOi4oCewqLDg8aSw4bigJnDg8Kiw6LigJrCrMOCwqDDg8aSw4LCosODwqLDouKCrMWhw4LCrMODwqLDouKCrMW+w4LCosODxpLDhuKAmcOD4oCgw6LigqzihKLDg8aSw4LCosODwqLDouKCrMWhw4LCrMOD4oCaw4LCoMODxpLDhuKAmcOD4oCaw4LCosODxpLDgsKiw4PCosOi4oCawqzDhcKhw4PigJrDgsKsw4PGksOCwqLDg8Kiw6LigJrCrMOFwr7Dg+KAmsOCwqLDg8aSw4bigJnDg+KAoMOi4oKs4oSiw4PGksOi4oKswqDDg8Kiw6LigJrCrMOi4oCewqLDg8aSw4bigJnDg+KAmsOCwqLDg8aSw4LCosODwqLDouKAmsKsw4XCocOD4oCaw4LCrMODxpLDouKCrMKmw4PigJrDgsKhw4PGksOG4oCZw4PigKDDouKCrOKEosODxpLDgsKiw4PCosOi4oKsxaHDgsKsw4PigKbDgsKhw4PGksOG4oCZw4PCosOi4oCawqzDhcKhw4PGksOi4oKsxaHDg+KAmsOCwrxsdGlnLicpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhbmd1bGFyICgyKylcbiAgICAgICAgaWYgKG5nRm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoIW5nRm9ybS52YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvblNhdmVJdGVtRm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKiBFeHRlbnNpb24gcG9pbnQgKi9cbiAgICBvblNhdmVPYmplY3RGb3JtVmFsaWRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqIEV4dGVuc2lvbiBwb2ludCAqL1xuICAgIG9uRGVsZXRlSXRlbUZvcm1WYWxpZGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAjZW5kcmVnaW9uXG59XG4iXX0=