import { PortalService } from './PortalService';
import { Exception } from './Exception';
import { Blade } from './Blade';
import { Observable } from 'rxjs';

export class BladeData<T> extends Blade {
    // #region Constructor

    constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 300) { // $scope: angular.IScope
        super(portalService, path, title, subtitle, width);
    }

    // #endregion

    // #region Properties

    item: T = <T>{};
    items: T[] = [];

    // #endregion

    // #region newItem

    newItem(func: () => Promise<any | Exception>): void {
        this.onNewItem();

        func().then((data: any) => {
            this.isCommandDeleteEnabled = false;
            this.item = data;
            this.onNewedItem();
        }).catch((ex: Exception) => {
            this.setStatusBarException(ex);
            this.onNewItemException(ex);
        });
    }

    /** Extension point */
    onNewItem() {
    }

    /** Extension point */
    onNewedItem() {
    }

    /** Extension point */
    onNewItemException(ex: Exception) {
    }

    // #endregion

    // #region loadItem

    loadItem(func: () => Promise<any | Exception>): void {
        this.visibility = 'collapse';
        this.setStatusBarLoadData();
        this.onLoadItem();

        func().then((data: any) => {
            this.visibility = 'visible';
            this.clearStatusBar();
            this.item = data;
            this.onLoadedItem();
        }).catch((ex: Exception) => {
            this.setStatusBarException(ex);
            this.onLoadItemException(ex);
        });
    }

    /** Extension point */
    onLoadItem() {
    }

    /** Extension point */
    onLoadedItem() {
    }

    /** Extension point */
    onLoadItemException(ex: Exception) {
    }

    // #endregion

    // #region loadItems

    loadItems(func: () => Promise<any | Exception>): void {
        this.visibility = 'collapse';
        this.setStatusBarLoadData();
        this.onLoadItems();

        func().then((data: any) => {
            this.visibility = 'visible';
            this.clearStatusBar();
            this.items = data;
            this.onLoadedItems();
        }).catch((ex: Exception) => {
            this.setStatusBarException(ex);
            this.onLoadItemsException(ex);
        });
    }

    /** Extension point */
    onLoadItems() {
    }

    /** Extension point */
    onLoadedItems() {
    }

    /** Extension point */
    onLoadItemsException(ex: Exception) {
    }

    // #endregion

    // #region saveItem

    /**
     * Default behavior for saving an entity.
     * - call this.setStatusBarSaveData();
     * - call this.onSaveItem()
     * - validates this.formblade. if not valid, returns without saving
     * - set this.isCommandSaveEnabled = false
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
     */
    // CURRENT: using Promise
    saveItem(func: () => Promise<T | Exception> | any, ngForm: any = undefined): (Promise<T | void> | any) { // angular.IPromise<T | Exception> || angular.IPromise<T | void>
        if (!this.isFormValid(ngForm) && this.onSaveItemFormValidation()) {
            return;
        }

        this.setStatusBarSaveData();
        this.isCommandSaveEnabled = false;
        this.onSaveItem();

        return (<Promise<T> & any>func()).then((data) => { // angular.IPromise<T>
            this.clearStatusBar();
            this.isCommandSaveEnabled = true;
            this.isCommandDeleteEnabled = true;
            this.item = data;
            this.onSavedItem();
            return data;
        }).catch((ex: Exception) => {
            this.isCommandSaveEnabled = true;
            this.setStatusBarException(ex);
            this.onLoadItemsException(ex);
        });
    }
    // NEW: using Observable
    saveItem2(func: () => Observable<T> | Exception | any, ngForm: any = undefined): (Observable<T | void> | any) {
        if (!this.isFormValid(ngForm) && this.onSaveItemFormValidation()) {
            return;
        }

        this.setStatusBarSaveData();
        this.isCommandSaveEnabled = false;
        this.onSaveItem();

        return (<Observable<T> & any>func()).then((data) => {
            this.clearStatusBar();
            this.isCommandSaveEnabled = true;
            this.isCommandDeleteEnabled = true;
            this.item = data;
            this.onSavedItem();
            return data;
        }).catch((ex: Exception) => {
            this.isCommandSaveEnabled = true;
            this.setStatusBarException(ex);
            this.onLoadItemsException(ex);
        });
    }

    /** Extension point */
    onSaveItem() {
    }

    /** Extension point */
    onSavedItem() {
    }

    /** Extension point */
    onSaveItemException(ex: Exception) {
    }

    // #endregion

    // #region saveObject

    /**
     * Default behavior for saving any object.
     * - call this.setStatusBarSaveData();
     * - call this.onSaveItem()
     * - validates this.formblade. if not valid, returns without saving
     * - call the provided function
     * THEN
     * - call this.clearStatusBar()
     * - call this.onSavedItem()
     * - returns the saved data
     * CATCH
     * - call this.setStatusBarException
     */
    saveObject(func: () => Promise<any | Exception> | any, ngForm: any = undefined): (Promise<any | void> | any) { // angular.IPromise<any | Exception> || angular.IPromise<any | void>
        if (!this.isFormValid(ngForm) && this.onSaveObjectFormValidation()) {
            return;
        }

        this.setStatusBarSaveData();
        this.isCommandSaveEnabled = false;
        this.onSaveObject();

        return (<Promise<any> & any>func()).then((data) => { // angular.IPromise<T>
            this.clearStatusBar();
            this.isCommandSaveEnabled = true;
            this.isCommandDeleteEnabled = true;
            this.onSavedObject();
            return data;
        }).catch((ex: Exception) => {
            this.isCommandSaveEnabled = true;
            this.setStatusBarException(ex);
            this.onLoadItemsException(ex);
        });
    }

    /** Extension point */
    onSaveObject() {
    }

    /** Extension point */
    onSavedObject() {
    }

    /** Extension point */
    onSaveObjectException(ex: Exception) {
    }

    // #endregion

    // #region deleteItem

    deleteItem(func: () => Promise<T | number | void | Exception> | any, ngForm: any = undefined): (Promise<T | number | void> | any) { // angular.IPromise<T | number | void | Exception> || angular.IPromise<T | number | void>
        if (!this.isFormValid(ngForm) && this.onDeleteItemFormValidation()) {
            return;
        }

        this.setStatusBarDeleteData();
        this.isCommandDeleteEnabled = false;
        this.onDeleteItem();

        return (<Promise<T> & any>func()).then((data) => { // angular.IPromise<T>
            this.clearStatusBar();
            this.isCommandDeleteEnabled = true;
            this.item = data;
            if (this.onDeletedItem()) {
                this.close();
            };
            return data;
        }).catch((ex: Exception) => {
            this.isCommandDeleteEnabled = true;
            this.setStatusBarException(ex);
            this.onLoadItemsException(ex);
        });
    }

    /** Extension point */
    onDeleteItem() {
    }

    /** Extension point
     * return value indicates if the current blade should be closed or not.
     */
    onDeletedItem(): boolean {
        return true; // close the current blade
    }

    /** Extension point */
    onDeletedObjectException(ex: Exception) {
    }

    // #endregion

    // #region Form Validation

    isFormValid(ngForm: any = undefined) {
        // angularjs
        if (!this.formblade.$valid) {
            this.setStatusBarError('Formular nicht gültig.')
            //console.log(this.formblade);
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

    /** Extension point */
    onSaveItemFormValidation() {
        return true;
    }

    /** Extension point */
    onSaveObjectFormValidation() {
        return true;
    }

    /** Extension point */
    onDeleteItemFormValidation() {
        return true;
    }

    // #endregion
}
