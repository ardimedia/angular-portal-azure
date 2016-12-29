/// <reference path="bladedata.ts" />
/// <reference path="debug.ts" />
/// <reference path="bladenavitem.ts" />
/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class AreaNotification extends angularportalazure.UserControlBase {
        //#region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService) {
            super($scope, portalService);

            this.areaNotification = $('#apa-notification-area');

            this.hide();
            this.setupResizerListener();
        }

        //#endregion

        //#region Properties

        private portalWidth: number;
        private portalHeight: number;

        private areaNotification: JQuery;

        widthAreaUsed: number = 0;
        width: number = 250;
        backgroundColor: string = '#32383f';

        //#endregion

        //#region Methods

        hide() {
            this.widthAreaUsed = 0;
            this.areaNotification.css('display', 'none');
        }

        show() {
            this.areaNotification.css('position', 'absolute');
            this.areaNotification.css('top:0', '0');
            this.areaNotification.css('height', '100%');
            this.areaNotification.css('background-color', this.backgroundColor);
            this.areaNotification.css('border-left', '2px solid gray');
            this.areaNotification.css('width', this.width + 'px');
            this.areaNotification.css('left', $(window).width() - this.width + 'px');

            this.widthAreaUsed = this.width;
            this.areaNotification.css('display', 'inline-block');
        }

        private setupResizerListener() {
            let that = this;
            // http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
            let id: NodeJS.Timer;
            $(window).resize(function () {
                clearTimeout(id);
                id = setTimeout(() => {
                    that.show();
                }, 50);

            });
        }

        //#endregion
    }
}
