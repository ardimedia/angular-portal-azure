// #region Declarations

/// <reference path="bladedata.ts" />
/// <reference path="portalservice.ts" />

// #endregion

namespace angularportalazure {
    export class BladeDetail<T> extends angularportalazure.BladeData {
        // #region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
            super($scope, portalService, path, title, subtitle, width);

            this.commandNewText = 'neu';
            this.commandSaveText = 'speichern';
            this.commandDeleteText = 'löschen';
            this.commandCancelText = 'abbrechen';
        }

        // #endregion

        // #region Properties

        item: T = <T>{};

        // #endregion

        // #region Methods

        loadItem(func: () => Promise<any | angularportalazure.Exception>): void {
            this.onLoadItem();

            func().then((data: any) => {
                this.item = data;
                this.onLoadedItem();
            }).catch((ex: angularportalazure.Exception) => {
                this.setStatusBarException(ex);
            });
        }

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
            this.setStatusBarSaveData();
            this.onSaveItem();

            // #region form valid?

            // angularjs: if form valid
            if (!this.formblade.$valid) {
                this.statusBar = 'Speichern nicht möglich! [Console] enthält weitere Informationen.';
                this.statusBarClass = 'apa-statusbar-error';
                //console.log(this.formblade);
                return;
            }

            // angular: if form valid
            if (ngForm !== undefined) {
                if (!ngForm.valid) {
                    return;
                }
            }

            // #endregion

            this.isCommandSaveEnabled = false;

            return (<Promise<T> & angular.IPromise<T>>func()).then((data) => {
                this.clearStatusBar();
                this.isCommandSaveEnabled = true;
                this.item = data;
                this.onSavedItem();
                return data;
            }).catch((exception: angularportalazure.Exception) => {
                this.isCommandSaveEnabled = true;
                this.setStatusBarException(exception);
            });
        }

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
            this.setStatusBarSaveData();
            this.onSaveItem();

            // #region form valid?

            // angularjs: if form valid
            if (!this.formblade.$valid) {
                this.statusBar = 'Speichern nicht möglich! [Console] enthält weitere Informationen.';
                this.statusBarClass = 'apa-statusbar-error';
                //console.log(this.formblade);
                return;
            }

            // angular: if form valid
            if (ngForm !== undefined) {
                if (!ngForm.valid) {
                    return;
                }
            }

            // #endregion

            return (<Promise<any> & angular.IPromise<T>>func()).then((data) => {
                this.clearStatusBar();
                this.onSavedItem();
                return data;
            }).catch((exception: angularportalazure.Exception) => {
                this.setStatusBarException(exception);
            });
        }

        /** Extension point */
        onSaveItem() {
        }

        /** Extension point */
        onSavedItem() {
        }

        onCommandCancel(): void {
            this.close();
        }

        // #endregion
    }
}
