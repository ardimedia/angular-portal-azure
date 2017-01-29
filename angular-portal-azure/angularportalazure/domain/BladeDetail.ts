/// <reference path="bladedata.ts" />
/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class BladeDetail<T> extends angularportalazure.BladeData {
        //#region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
            super($scope, portalService, path, title, subtitle, width);

            this.commandNewText = 'neu';
            this.commandSaveText = 'speichern';
            this.commandDeleteText = 'löschen';
            this.commandCancelText = 'abbrechen';
        }

        //#endregion

        //#region Properties

        item: T = <T>{};

        //#endregion

        //#region Methods

        loadItem(func: () => angular.IPromise<any>): void {
            this.onLoadItem();

            func().then((data) => {
                this.item = data;
                this.onLoadedItem();
            }).catch((exception: angularportalazure.Exception) => {
                this.setStatusBarException(exception);
            });
        }

        saveItem(func: () => any) {
            this.onSaveItem();

            // Is form valid
            if (!this.formblade.$valid) {
                this.statusBar = 'Speichern nicht möglich! [Console] enthält weitere Informationen.';
                this.statusBarClass = 'apa-statusbar-error';
                console.log(this.formblade);
                return;
            }

            func().then((data) => {
                this.item = data;
                this.onSavedItem();
            }).catch((exception: angularportalazure.Exception) => {
                this.setStatusBarException(exception);
            });
        }

        onSaveItem() {
            this.setStatusBarSaveData();
        }

        onSavedItem() {
            this.clearStatusBar();
        }

        onCommandCancel(): void {
            this.close();
        }

        //#endregion
    }
}
