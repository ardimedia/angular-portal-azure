/// <reference path="bladearea.ts" />
/// <reference path="debug.ts" />
/// <reference path="iexception.ts" />
/// <reference path="portalservice.ts" />

namespace azureportalng {
    export class BladeData extends azureportalng.Blade {

        //#region Constructor

        constructor(portalService: azureportalng.PortalService, path: string, title: string, subtitle: string = '', width: number = 300) {
            super(portalService, path, title, subtitle, width);
            azureportalng.Debug.write('[azureportalng-debug] \'BladeData\' constructor called.', [this, portalService, path, title, subtitle, width]);
        }

        //#endregion

        //#region Methods

        processException(data: azureportalng.IException) {
            var that = this;
            that.statusbar = data.Message;
            that.statusbar += ' - ';
            data.Messages.forEach(function (item) {
                that.statusbar += item + ' - ';
            })
        }

        //#endregion
    }
}
