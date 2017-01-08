/// <reference path="portalservice.ts" />

namespace angularportalazure {
    export class UserControlBase {
        //#region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService) {
            this.$scope = $scope;
            this.portalService = portalService;
        }

        //#endregion

        //#region Properties

        $scope: angular.IScope;
        portalService: angularportalazure.PortalService;

        windowResizeHandler: () => void;

        //#endregion

        //#region Methods

        /** angular1: $onInit(), $onChanges(changesObj), $doCheck(), $onDestroy(), $postLink() */
        $onDestroy() {
            this.removeWindowResizeListener();
        }

        /** angular2: ngOnChanges(), ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy */
        ngOnDestroy() {
            this.removeWindowResizeListener();
        }

        private removeWindowResizeListener() {
            if (this.windowResizeHandler !== undefined) {
                this.portalService.$window.removeEventListener('resize', this.windowResizeHandler);
            }
        }

        setupWindowResizeListener(callback: () => void) {
            // http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
            let id: NodeJS.Timer;

            this.portalService.$window.addEventListener('resize', this.windowResizeHandler = () => {
                clearTimeout(id);
                id = setTimeout(() => { callback(); }, 50);
            });
        }

        IsStringNullOrEmpty(value: string): boolean {
            if (value && value.replace(' ', '').length > 0) {
                return false;
            } else {
                return true;
            }
        }


        //#endregion
    }
}
