//import { MainService } from './../../service/main/main.service';
import { Blade } from './blade';
import { Exception } from './../exception';

export class BladeData<T> extends Blade {
    // #region Constructors

    // mainService: MainService, 
    constructor(path: string, title: string, subtitle: string = '', width: number = 300) {
        super(path, title, subtitle, width)
    }

    // #endregion

    // #region Properties

    item: T = <T>{};
    items: T[] = [];

    // #endregion

    // #region Public Methods

    // #region newItem

    newItem(func: () => Promise<any | Exception>): void {
        this.onNewItem();

        func().then((data: any) => {
            this.isCommandDeleteEnabled = false;
            this.item = data;
            this.onNewedItem();
        }).catch((ex: Exception) => {
            this.statusBar.setStatusBarException(ex);
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
        this.statusBar.setStatusBarLoadData();
        this.onLoadItem();

        func().then((data: any) => {
            this.visibility = 'visible';
            this.statusBar.clearStatusBar();
            this.item = data;
            this.onLoadedItem();
        }).catch((ex: Exception) => {
            this.statusBar.setStatusBarException(ex);
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
        this.statusBar.setStatusBarLoadData();
        this.onLoadItems();

        func().then((data: any) => {
            this.visibility = 'visible';
            this.statusBar.clearStatusBar();
            this.items = data;
            this.onLoadedItems();
        }).catch((ex: Exception) => {
            this.statusBar.setStatusBarException(ex);
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
    saveItem(func: () => Promise<T | Exception>, ngForm: any = undefined): (Promise<T | void> | void) {
        if (!this.isFormValid(ngForm) && this.onSaveItemFormValidation()) {
            return;
        }

        this.statusBar.setStatusBarSaveData();
        this.isCommandSaveEnabled = false;
        this.onSaveItem();

        return (<Promise<T>>func()).then((data) => {
            this.statusBar.clearStatusBar();
            this.isCommandSaveEnabled = true;
            this.isCommandDeleteEnabled = true;
            this.item = data;
            this.onSavedItem();
            return data;
        }).catch((ex: Exception) => {
            this.isCommandSaveEnabled = true;
            this.statusBar.setStatusBarException(ex);
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
    saveObject(func: () => Promise<any | Exception>, ngForm: any = undefined): (Promise<any | void> | void) {
        if (!this.isFormValid(ngForm) && this.onSaveObjectFormValidation()) {
            return;
        }

        this.statusBar.setStatusBarSaveData();
        this.isCommandSaveEnabled = false;
        this.onSaveObject();

        return (<Promise<any>>func()).then((data) => {
            this.statusBar.clearStatusBar();
            this.isCommandSaveEnabled = true;
            this.isCommandDeleteEnabled = true;
            this.onSavedObject();
            return data;
        }).catch((ex: Exception) => {
            this.isCommandSaveEnabled = true;
            this.statusBar.setStatusBarException(ex);
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

    deleteItem(func: () => Promise<T | number | void | Exception>, ngForm: any = undefined): (Promise<T | number | void> | void) {
        if (!this.isFormValid(ngForm) && this.onDeleteItemFormValidation()) {
            return;
        }

        this.statusBar.setStatusBarDeleteData();
        this.isCommandDeleteEnabled = false;
        this.onDeleteItem();

        return (<Promise<T>>func()).then((data) => {
            this.statusBar.clearStatusBar();
            this.isCommandDeleteEnabled = true;
            this.item = data;
            if (this.onDeletedItem()) {
                this.close();
            };
            return data;
        }).catch((ex: Exception) => {
            this.isCommandDeleteEnabled = true;
            this.statusBar.setStatusBarException(ex);
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
            this.statusBar.setStatusBarError('Formular nicht gültig.')
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

    // #endregion

    // #region Private Methods

    // #endregion
}
