﻿/// <reference path="bladedata.ts" />
/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class BladeDetail<T> extends angularportalazure.BladeData {

        //#region Properties

        item: T | null = null;

        //#endregion

        //#region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
            super($scope, portalService, path, title, subtitle, width);

            this.commandNewText = 'neu';
            this.commandSaveText = 'speichern';
            this.commandDeleteText = 'löschen';
            this.commandCancelText = 'abbrechen';
        }

        //#endregion

        //#region Methods

        loadItem(func: () => any) {
            let that = this;
            that.onLoadItem();

            func().then(function (data) {
                that.item = data;
                that.clearStatusBar();
                that.onLoadedItem();
            }).catch(function (exception: angularportalazure.Exception) {
                that.setStatusBarException(exception);
            });
        }

        onLoadItem() {
            this.setStatusBarLoadData();
        }

        onLoadedItem() {
        }

        saveItem(func: () => any) {
            let that = this;
            that.onSaveItem();

            // Is form valid
            if (!that.formblade.$valid) {
                that.statusBar = 'Speichern nicht möglich!';
                that.statusBarClass = 'apa-statusbar-error';
                console.log(that.formblade);
                return;
            }

            func().then(function (data) {
                that.item = data;
                that.onSavedItem();
            }).catch(function (exception: angularportalazure.Exception) {
                that.setStatusBarException(exception);
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
