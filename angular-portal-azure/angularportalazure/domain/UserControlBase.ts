// #region Declarations

/// <reference path="useraccount.ts" />
/// <reference path="portalservice.ts" />

// #endregion

namespace angularportalazure {
    export class UserControlBase {
        // #region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService) {
            this.$scope = $scope;
            this.portalService = portalService;
        }

        // #endregion

        // #region Properties

        $scope: angular.IScope;
        portalService: angularportalazure.PortalService;

        windowResizeHandler: () => void;

        statusBar: string = '';
        statusBarClass: string = '';

        // #endregion

        // #region Methods

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

        isNumberUndefinedNullOr0(value: number): boolean {
            if (value && value > 0) {
                return false;
            } else {
                return true;
            }
        }

        isStringNullOrEmpty(value: string): boolean {
            if (value && value.replace(' ', '').length > 0) {
                return false;
            } else {
                return true;
            }
        }

        getRandomString(length: number = 20) {
            return 'a' + Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).replace('.', '').replace('(e+', '').replace(')', '').slice(1);
        }


        // #region Set StatusBar

        clearStatusBar() {
            this.statusBar = '';
            this.statusBarClass = '';
        }

        setStatusBar(text?: string, style?: string) {
            this.statusBar = text ? text : '';
            this.statusBarClass = style ? style : '';
        }

        setStatusBarCopyData() {
            this.statusBar = 'Daten kopieren...';
            this.statusBarClass = 'apa-statusbar-info';
        }

        setStatusBarLoadData() {
            this.statusBar = 'Daten laden...';
            this.statusBarClass = 'apa-statusbar-info';
        }

        setStatusBarSaveData() {
            this.statusBar = 'Daten speichern...';
            this.statusBarClass = 'apa-statusbar-info';
        }

        setStatusBarDeleteData() {
            this.statusBar = 'Daten löschen...';
            this.statusBarClass = 'apa-statusbar-info';
        }

        setStatusBarDeleteDataCanceled() {
            this.statusBar = 'Löschen abgebrochen.';
            this.statusBarClass = 'apa-statusbar-info';
        }

        setStatusBarInfo(text: string) {
            this.statusBar = text;
            this.statusBarClass = 'apa-statusbar-info';
        }

        setStatusBarError(text: string) {
            this.statusBar = text;
            this.statusBarClass = 'apa-statusbar-error';
        }

        setStatusBarNoDataFound() {
            this.statusBar = 'Keine Daten gefunden!';
            this.statusBarClass = 'apa-statusbar-error';
        }

        setStatusBarException(exception: angularportalazure.Exception) {
            this.statusBar = angularportalazure.Exception.getOneLineMessage(exception);
            this.statusBarClass = 'apa-statusbar-error';
        }

        // #endregion

        // #endregion
    }
}
