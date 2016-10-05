﻿import * as AzurePortal from './AzurePortal';
import * as angular from 'angular';

export class BladeDetail extends AzurePortal.BladeData {
    //#region Constructor

    constructor(portalService: AzurePortal.PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
        super(portalService, path, title, subtitle, width);
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeDetail\' constructor called.', [this, portalService, path, title, subtitle, width]);

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

    //#region Properties

    item: any = null;

    //#endregion

    //#region Methods

    activate() {
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeDetail.activate\' called.', [this]);
        var that = this;

        that.statusbar = 'Daten laden...';
        that.statusbarClass = '';

        var onActivate = that.onActivate();

        if (onActivate === null || onActivate === undefined) {
            that.statusbar = '';
            that.statusbarClass = '';
        } else {
            onActivate.success(function (data: any) {
                that.item = data;
                that.statusbar = '';
                that.statusbarClass = '';
                that.onActivated();
            }).error(function (data: any, status: any, headers: any, config: any) {
                that.item = null;
                that.statusbar = 'FEHLER: ' + data;
                that.statusbarClass = 'message-info message-off';
                that.onActivated();
            });
        }
    }

    onActivate(): angular.IHttpPromise<any> {
        throw new Error('[AzurePortal.BladeDetail] \'onActivate\' is an abstract function. Define one in the derived class.');
    }

    onActivated(): void {
        AzurePortal.Debug.write('[azureportalng-debug] \'onActivated\' called. You could override this.');
    }

    onCommandCancel(): void {
        this.close();
    }

    //#endregion
}
