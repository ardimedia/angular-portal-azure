import * as AzurePortal from './AzurePortal';

export class BladeData extends AzurePortal.Blade {
    //#region Constructor

    constructor(portalService: AzurePortal.PortalService, path: string, title: string, subtitle: string = '', width: number = 300) {
        super(portalService, path, title, subtitle, width);
        AzurePortal.Debug.write('[azureportalng-debug] \'BladeData\' constructor called.', [this, portalService, path, title, subtitle, width]);
    }

    //#endregion

    //#region Methods

    processException(data: AzurePortal.IException) {
        var that = this;
        that.statusbar = data.Message;
        that.statusbar += ' - ';
        data.Messages.forEach(function (item) {
            that.statusbar += item + ' - ';
        })
    }

    //#endregion
}
