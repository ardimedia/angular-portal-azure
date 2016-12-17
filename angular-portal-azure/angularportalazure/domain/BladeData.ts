/// <reference path="bladearea.ts" />
/// <reference path="debug.ts" />
/// <reference path="iexception.ts" />
/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class BladeData extends angularportalazure.Blade {
        //#region Constructor

        constructor(portalService: angularportalazure.PortalService, path: string, title: string, subtitle: string = '', width: number = 300) {
            super(portalService, path, title, subtitle, width);
        }

        //#endregion
    }
}
