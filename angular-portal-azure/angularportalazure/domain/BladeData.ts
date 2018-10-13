// #region Declarations

/// <reference path="blade.ts" />
/// <reference path="areablades.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="usercontrolbase.ts" />

// #endregion

namespace angularportalazure {
    export class BladeData<T> extends angularportalazure.Blade {
        // #region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle: string = '', width: number = 300) {
            super($scope, portalService, path, title, subtitle, width);
        }

        // #endregion

        // #region Properties

        item: T = <T>{};
        items: T[] = [];

        // #endregion

        // #region newItem

        newItem(func: () => Promise<any | angularportalazure.Exception>): void {
            this.onNewItem();

            func().then((data: any) => {
                this.isCommandDeleteEnabled = false;
                this.item = data;
                this.onNewedItem();
            }).catch((ex: angularportalazure.Exception) => {
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
        onNewItemException(ex: angularportalazure.Exception) {
        }

        // #endregion

        // #region loadItem

        loadItem(func: () => Promise<any | angularportalazure.Exception>): void {
            this.visibility = 'collapse';
            this.setStatusBarLoadData();
            this.onLoadItem();

            func().then((data: any) => {
                this.visibility = 'visible';
                this.clearStatusBar();
                this.item = data;
                this.onLoadedItem();
            }).catch((ex: angularportalazure.Exception) => {
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
        onLoadItemException(ex: angularportalazure.Exception) {
        }

        // #endregion

        // #region loadItems

        loadItems(func: () => Promise<any | angularportalazure.Exception>): void {
            this.visibility = 'collapse';
            this.setStatusBarLoadData();
            this.onLoadItems();

            func().then((data: any) => {
                this.visibility = 'visible';
                this.clearStatusBar();
                this.items = data;
                this.onLoadedItems();
            }).catch((ex: angularportalazure.Exception) => {
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
        onLoadItemsException(ex: angularportalazure.Exception) {
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
        saveItem(func: () => Promise<T | angularportalazure.Exception> | angular.IPromise<T | angularportalazure.Exception>, ngForm: any = undefined): (Promise<T | void> | angular.IPromise<T | void>) {
            if (!this.isFormValid(ngForm) && this.onSaveItemFormValidation()) {
                return;
            }

            this.setStatusBarSaveData();
            this.isCommandSaveEnabled = false;
            this.onSaveItem();

            return (<Promise<T> & angular.IPromise<T>>func()).then((data) => {
                this.clearStatusBar();
                this.isCommandSaveEnabled = true;
                this.isCommandDeleteEnabled = true;
                this.item = data;
                this.onSavedItem();
                return data;
            }).catch((ex: angularportalazure.Exception) => {
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
        onSaveItemException(ex: angularportalazure.Exception) {
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
        saveObject(func: () => Promise<any | angularportalazure.Exception> | angular.IPromise<any | angularportalazure.Exception>, ngForm: any = undefined): (Promise<any | void> | angular.IPromise<any | void>) {
            if (!this.isFormValid(ngForm) && this.onSaveObjectFormValidation()) {
                return;
            }

            this.setStatusBarSaveData();
            this.isCommandSaveEnabled = false;
            this.onSaveObject();

            return (<Promise<any> & angular.IPromise<T>>func()).then((data) => {
                this.clearStatusBar();
                this.isCommandSaveEnabled = true;
                this.isCommandDeleteEnabled = true;
                this.onSavedObject();
                return data;
            }).catch((ex: angularportalazure.Exception) => {
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
        onSaveObjectException(ex: angularportalazure.Exception) {
        }

        // #endregion

        // #region deleteItem

        deleteItem(func: () => Promise<T | angularportalazure.Exception> | angular.IPromise<T | angularportalazure.Exception>, ngForm: any = undefined): (Promise<T | void> | angular.IPromise<T | void>) {
            if (!this.isFormValid(ngForm) && this.onDeleteItemFormValidation()) {
                return;
            }

            this.setStatusBarDeleteData();
            this.isCommandDeleteEnabled = false;
            this.onDeleteItem();

            return (<Promise<T> & angular.IPromise<T>>func()).then((data) => {
                this.clearStatusBar();
                this.isCommandDeleteEnabled = true;
                this.item = data;
                if (this.onDeletedItem()) {
                    this.close();
                };
                return data;
            }).catch((ex: angularportalazure.Exception) => {
                this.isCommandDeleteEnabled = true;
                this.setStatusBarException(ex);
                this.onLoadItemsException(ex);
            });
        }

        /** Extension point */
        onDeleteItem() {
        }

        /** Extension point */
        onDeletedItem() {
            return true; // close the current blade
        }

        /** Extension point */
        onDeletedObjectException(ex: angularportalazure.Exception) {
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
}
