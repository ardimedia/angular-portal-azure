/// <reference path="bladedata.ts" />
/// <reference path="debug.ts" />
/// <reference path="bladenavitem.ts" />
/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class AreaNotification extends angularportalazure.UserControlBase {
        //#region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService) {
            super($scope, portalService);

            this.areaNotification = this.portalService.$window.document.getElementById('apa-notification-area');

            this.hide();
            this.setupWindowResizeListener(() => { this.calcualteCssStyles(); });
        }

        //#endregion

        //#region Properties

        private areaNotification: HTMLElement;

        widthAreaUsed: number = 0;

        private _width: number = 250;
        get width(): number {
            return this._width;
        }
        set width(value: number) {
            this._width = value;
            this.calcualteCssStyles();
        }

        private _backgroundColor: string = '#32383f';
        get backgroundColor(): string {
            return this._backgroundColor;
        }
        set backgroundColor(value: string) {
            this._backgroundColor = value;
            this.calcualteCssStyles();
        }

        //#endregion

        //#region Methods

        hide() {
            this.widthAreaUsed = 0;
            this.areaNotification.style.display = 'none';

            this.portalService.$rootScope.$broadcast('AreaNotification.Hide');
        }

        show() {
            this.widthAreaUsed = 1; // Indicate to the calcualteCssStyles function, that we need to set this value
            this.calcualteCssStyles();
            this.areaNotification.style.display = 'inline-block';

            this.portalService.$rootScope.$broadcast('AreaNotification.Show');
        }

        private calcualteCssStyles() {
            this.areaNotification.style.position = 'absolute';
            this.areaNotification.style.top = '0';
            this.areaNotification.style.height = '100%';
            this.areaNotification.style.backgroundColor = this.backgroundColor;
            this.areaNotification.style.borderLeft = '2px solid gray';
            this.areaNotification.style.width = this.width + 'px';
            this.areaNotification.style.left = this.portalService.$window.innerWidth - this.width + 'px';

            if (this.widthAreaUsed != 0) {
                this.widthAreaUsed = this.width;
            }
        }

        //#endregion
    }
}
