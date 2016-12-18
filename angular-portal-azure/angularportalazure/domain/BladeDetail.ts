/// <reference path="bladedata.ts" />
/// <reference path="debug.ts" />
/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class BladeDetail extends angularportalazure.BladeData {

        //#region Properties

        item: any = null;

        //#endregion

        //#region Constructor

        constructor(portalService: angularportalazure.PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
            super(portalService, path, title, subtitle, width);

            this.isCommandNew = true;
            this.commandNewText = 'neu';

            this.isCommandSave = true;
            this.commandSaveText = 'speichern';

            this.isCommandDelete = true;
            this.commandDeleteText = 'löschen';

            this.isCommandCancel = true;
            this.commandCancelText = 'abbrechen';
        }

        //#endregion

        //#region Methods

        //activate() {
        //    var that = this;

        //    that.statusbar = 'Daten laden...';
        //    that.statusbarClass = '';

        //    var onActivate = that.onActivate();

        //    if (onActivate === null || onActivate === undefined) {
        //        that.statusbar = '';
        //        that.statusbarClass = '';
        //    } else {
        //        onActivate.success(function (data: any) {
        //            that.item = data;
        //            that.statusbar = '';
        //            that.statusbarClass = '';
        //            that.onActivated();
        //        }).error(function (data: any, status: any, headers: any, config: any) {
        //            that.item = null;
        //            that.statusbar = 'FEHLER: ' + data;
        //            that.statusbarClass = 'message-info message-off';
        //            that.onActivated();
        //        });
        //    }
        //}

        //onActivate(): any { // any should be: angular.IHttpPromise<any>
        //    throw new Error('[angularportalazure.BladeDetail] \'onActivate\' is an abstract function. Define one in the derived class.');
        //}

        //onActivated(): void {
        //    angularportalazure.Debug.write('[angularportalazure-debug] \'onActivated\' called. You could override this.');
        //}


        loadItem(func: () => any) {
            let that = this;

            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';

            func().then(function (data) {
                that.item = data;
                that.clearStatusbar();
                that.onLoadedItem();
            }).catch(function (exception: angularportalazure.Exception) {
                that.showExceptionOnStatusbar(exception);
            });
        }

        onLoadedItem() {
        }

        onCommandCancel(): void {
            this.close();
        }

        //#endregion
    }
}
