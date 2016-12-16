/// <reference path="bladearea.ts" />
/// <reference path="debug.ts" />
/// <reference path="iexception.ts" />
/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class BladeData extends angularportalazure.Blade {

        //#region Constructor

        constructor(portalService: angularportalazure.PortalService, path: string, title: string, subtitle: string = '', width: number = 300) {
            super(portalService, path, title, subtitle, width);
            angularportalazure.Debug.write('[angularportalazure-debug] \'BladeData\' constructor called.', [this, portalService, path, title, subtitle, width]);
        }

        //#endregion

        //#region Methods

        processException(data: angularportalazure.IException) {
            var that = this;

            // Find a better way to log information, maybe to the database or to Google Analytics.
            console.log('Exception:');
            console.log(data);

            that.statusbar = data.Message;
            that.statusbar += ' - ';
            data.Messages.forEach(function (item) {
                that.statusbar += item + ' - ';
            })
        }

        //#endregion
    }
}
