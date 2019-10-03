import { Blade } from './blade';
import { PortalService } from './portal-service';
import { Exception } from './exception';
export declare class BladeData<T> extends Blade {
    constructor(portalService: PortalService, path: string, title: string, subtitle?: string, width?: number);
    item: T;
    items: T[];
    newItem(func: () => Promise<any | Exception>): void;
    /** Extension point */
    onNewItem(): void;
    /** Extension point */
    onNewedItem(): void;
    /** Extension point */
    onNewItemException(ex: Exception): void;
    loadItem(func: () => Promise<any | Exception>): void;
    /** Extension point */
    onLoadItem(): void;
    /** Extension point */
    onLoadedItem(): void;
    /** Extension point */
    onLoadItemException(ex: Exception): void;
    loadItems(func: () => Promise<any | Exception>): void;
    /** Extension point */
    onLoadItems(): void;
    /** Extension point */
    onLoadedItems(): void;
    /** Extension point */
    onLoadItemsException(ex: Exception): void;
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
    saveItem(func: () => Promise<T | Exception> | Promise<T | Exception>, ngForm?: any): (Promise<T | void> | Promise<T | void>);
    /** Extension point */
    onSaveItem(): void;
    /** Extension point */
    onSavedItem(): void;
    /** Extension point */
    onSaveItemException(ex: Exception): void;
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
    saveObject(func: () => Promise<any | Exception> | Promise<any | Exception>, ngForm?: any): (Promise<any | void> | Promise<any | void>);
    /** Extension point */
    onSaveObject(): void;
    /** Extension point */
    onSavedObject(): void;
    /** Extension point */
    onSaveObjectException(ex: Exception): void;
    deleteItem(func: () => Promise<T | number | void | Exception> | Promise<T | number | void | Exception>, ngForm?: any): (Promise<T | number | void> | Promise<T | number | void>);
    /** Extension point */
    onDeleteItem(): void;
    /** Extension point
     * return value indicates if the current blade should be closed or not.
     */
    onDeletedItem(): boolean;
    /** Extension point */
    onDeletedObjectException(ex: Exception): void;
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
    execute(message: string, func: () => Promise<T | Exception> | Promise<T | Exception>, ngForm?: any): (Promise<T | void> | Promise<T | void>);
    /** Extension point */
    onExecute(): void;
    /** Extension point */
    onExecuted(): void;
    /** Extension point */
    onExecuteException(ex: Exception): void;
    isFormValid(ngForm?: any): boolean;
    /** Extension point */
    onSaveItemFormValidation(): boolean;
    /** Extension point */
    onSaveObjectFormValidation(): boolean;
    /** Extension point */
    onDeleteItemFormValidation(): boolean;
}
