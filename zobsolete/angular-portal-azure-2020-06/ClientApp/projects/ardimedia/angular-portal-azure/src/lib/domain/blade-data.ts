import { Blade } from './blade';
import { AreaBlades } from './area-blades';
import { BladeNavItem } from './blade-nav-item';
import { PortalService } from './portal-service';
import { Exception } from './exception';

export class BladeData<T> extends Blade {
  // #region Constructor

  //constructor($scope: angular.IScope, portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 300) {
  constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 300) {
    //super($scope, portalService, path, title, subtitle, width);
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
  //saveItem(func: () => Promise<T | Exception> | angular.IPromise<T | Exception>, ngForm: any = undefined): (Promise<T | void> | angular.IPromise<T | void>) {
  saveItem(func: () => Promise<T | Exception>, ngForm: any = undefined): (Promise<T | void>) {
    if (!this.isFormValid(ngForm) && this.onSaveItemFormValidation()) {
      return;
    }

    this.setStatusBarSaveData();
    this.isCommandSaveEnabled = false;
    this.onSaveItem();

    return (<Promise<T>>func()).then((data) => {
      this.clearStatusBar();
      this.isCommandSaveEnabled = true;
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
  //saveObject(func: () => Promise<any | Exception> | angular.IPromise<any | Exception>, ngForm: any = undefined): (Promise<any | void> | angular.IPromise<any | void>) {
  saveObject(func: () => Promise<any | Exception>, ngForm: any = undefined): (Promise<any | void>) {
    if (!this.isFormValid(ngForm) && this.onSaveObjectFormValidation()) {
      return;
    }

    this.setStatusBarSaveData();
    this.isCommandSaveEnabled = false;
    this.onSaveObject();

    return (<Promise<T>>func()).then((data) => {
      this.clearStatusBar();
      this.isCommandSaveEnabled = true;
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

  //deleteItem(func: () => Promise<T | number | void | Exception> | angular.IPromise<T | number | void | Exception>, ngForm: any = undefined): (Promise<T | number | void> | angular.IPromise<T | number | void>) {
  deleteItem(func: () => Promise<T | number | void | Exception>, ngForm: any = undefined): (Promise<T | number | void>) {
    if (!this.isFormValid(ngForm) && this.onDeleteItemFormValidation()) {
      return;
    }

    this.setStatusBarDeleteData();
    this.isCommandDeleteEnabled = false;
    this.onDeleteItem();

    return (<Promise<T>>func()).then((data) => {
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
  //execute(message: string, func: () => Promise<T | Exception> | angular.IPromise<T | Exception>, ngForm: any = undefined): (Promise<T | void> | angular.IPromise<T | void>) {
  execute(message: string, func: () => Promise<T | Exception>, ngForm: any = undefined): (Promise<T | void>) {
    if (!this.isFormValid(ngForm) && this.onSaveItemFormValidation()) {
      return;
    }

    this.setStatusBarInfo(message);
    this.isCommandStartEnabled = false;
    this.onExecute();

    return (<Promise<T>>func()).then((data) => {
      this.clearStatusBar();
      this.isCommandStartEnabled = true;
      this.onExecuted();
      return data;
    }).catch((ex: Exception) => {
      this.isCommandStartEnabled = true;
      this.setStatusBarException(ex);
      this.onExecuteException(ex);
    });
  }

  /** Extension point */
  onExecute() {
  }

  /** Extension point */
  onExecuted() {
  }
  /** Extension point */
  onExecuteException(ex: Exception) {
  }

  // #endregion

  // #region Form Validation

  isFormValid(ngForm: any = undefined) {
    // angularjs
    if (!this.formblade.$valid) {
      this.setStatusBarError('Formular nicht gÃƒÆ’Ã‚Â¼ltig.')
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
