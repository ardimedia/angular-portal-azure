import * as angular from 'angular';
import { BladeData } from './BladeData';
import { Exception } from './exception';
import { PortalService } from './portalservice';

export class BladeDetail<T> extends BladeData {
    // #region Constructor

    constructor($scope: angular.IScope, portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
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

    loadItem(func: () => Promise<any>): void { // angular.IPromise<any> |
        this.onLoadItem();

        func().then((data) => {
            this.item = data;
            this.onLoadedItem();
        }).catch((exception: Exception) => {
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
        }).catch((exception: Exception) => {
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

    // #endregion
}
