/// <reference types="angular" />
/// <reference path="useraccount.ts" />
/// <reference path="portalservice.ts" />
/// <reference path="usercontrolbase.ts" />
/// <reference path="iaddbladeeventargs.ts" />
declare var $: JQueryStatic;

namespace angularportalazure {
    export class Blade extends angularportalazure.UserControlBase {
        //#region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
            super($scope, portalService);

            this.vm = this;
            this.path = path;
            this.title = title;
            this.subTitle = subtitle;
            this.width.width = width + 'px';
            this.widthStackLayout.width = width - 50 + 'px';  // 50 = padding (left and right)

            if (!portalService) { throw new Error('[angularportalazure.Blade] constructor parameter \'portalService\' must be provided.'); }
            if (!path) { throw new Error('[angularportalazure.Blade] constructor parameter \'path\' must be a string.'); }
            if (!title && title !== '') { throw new Error('[angularportalazure.Blade] constructor parameter \'title\' must be a string when provided.'); }
            if (!subtitle && subtitle !== '') { throw new Error('[angularportalazure.Blade] constructor parameter \'subtitle\' must be a string when provided.'); }
            if (!width && width !== 0) { throw new Error('[angularportalazure.Blade] constructor parameter \'width\' must be a number when provided.'); }

            if (width < 50) { throw new Error('[angularportalazure.Blade] constructor parameter \'width\' must be at least 50.'); }

            // Set 'this.portalService.areaBlades.blades[index]' to 'this'
            //     'this.portalService.areaBlades.blades[index]' was generated during AddBlade
            this.portalService.areaBlades.blades.forEach((blade, index) => {
                if (blade.path === this.path) {
                    this.portalService.areaBlades.blades[index] = this;
                }
            });

            this.setupWindowResizeListener(() => { this.setBladeHeights(); });
            this.setBladeHeights();
        }

        //#endregion

        //#region Properties

        /** HACK: 2016-11-06/hp
        [angular-portal-blade] needs [this] as the controller.
        We don't know how to provide [this] to the directive.
        So we came up with this [vm] property.*/
        vm: any = {};

        private watcherTitle: () => void;

        bladeContentHeight: number;
        bladeContentHeightInner: number;

        title: string = '';
        subTitle: string = '';
        width = { 'width': '0' };
        widthStackLayout = { 'width': '50px' };

        isInnerHtml: boolean = true;

        statusBar: string = '';
        statusBarClass: string = '';

        formblade: any; // angular.IFormController; // name of the ng-form directive

        //#region path

        private _path: string;
        get path(): string {
            return this._path;
        }
        // For the moment we do not distinguish between lower and upper case path name
        set path(newPath: string) {
            if (newPath == null) { return; }
            this._path = newPath.toLowerCase();
        }

        //#endregion

        //#endregion

        //#region Commands

        isCommandBrowse: boolean = false;
        commandBrowse: () => void = function () { this.onCommandBrowse(); };
        commandBrowseText: string = '';

        isCommandCancel: boolean = false;
        commandCancel: () => void = function () { this.onCommandCancel(); };
        commandCancelText: string = '';

        isCommandCopy: boolean = false;
        commandCopy: () => void = function () { this.onCommandCopy(); };
        commandCopyText: string = '';

        isCommandDelete: boolean = false;
        commandDelete: () => void = function () { this.onCommandDelete(); };
        commandDeleteText: string = '';

        isCommandDocument: boolean = false;
        commandDocument: () => void = function () { this.onCommandDocument(); };
        commandDocumentText: string = '';

        isCommandDocument2: boolean = false;
        commandDocument2: () => void = function () { this.onCommandDocument2(); };
        commandDocument2Text: string = '';

        isCommandDocument3: boolean = false;
        commandDocument3: () => void = function () { this.onCommandDocument3(); };
        commandDocument3Text: string = '';

        isCommandDocument4: boolean = false;
        commandDocument4: () => void = function () { this.onCommandDocument4(); };
        commandDocument4Text: string = '';

        isCommandDocument5: boolean = false;
        commandDocument5: () => void = function () { this.onCommandDocument5(); };
        commandDocument5Text: string = '';

        isCommandNew: boolean = false;
        commandNew: () => void = function () { this.onCommandNew(); };
        commandNewText: string = '';

        isCommandOrder: boolean = false;
        commandOrder: () => void = function () { this.onCommandOrder(); };
        commandOrderText: string = '';

        isCommandRestart: boolean = false;
        commandRestart: () => void = function () { this.onCommandRestart(); };
        commandRestartText: string = '';

        isCommandSave: boolean = false;
        commandSave: () => void = function () { this.onCommandSave(); };
        commandSaveText: string = '';

        isCommandSearch: boolean = false;
        commandSearch: () => void = function () { this.onCommandSearch(); };
        commandSearchText: string = '';

        isCommandStart: boolean = false;
        commandStart: () => void = function () { this.onCommandStart(); };
        commandStartText: string = '';

        isCommandStop: boolean = false;
        commandStop: () => void = function () { this.onCommandStop(); };
        commandStopText: string = '';

        isCommandSwap: boolean = false;
        commandSwap: () => void = function () { this.onCommandSwap(); };
        commandSwapText: string = '';

        isCommandExcel: boolean = false;
        commandExcel: () => void = function () { this.onCommandExcel(); };
        commandExcelText: string = '';

        //#endregion

        //#region Methods

        //#region Methods

        activate(): void {
            this.onActivate();
            this.onActivated();
        }

        /** Override */
        onActivate(): void {
        }

        onActivated(): void {
        }

        navigateTo(path: any) {
            this.onNavigateTo(path);
        }

        /** Must be overridden. */
        onNavigateTo(value: any): void {
            throw new Error('[angularportalazure.Blade] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
        }

        // At the moment we do not distinguish between lower and upper case path name
        comparePaths(path1: string, path2: string): boolean {
            if (path1 == null) { return false; }
            if (path2 == null) { return false; }
            if (path1.toLowerCase() === path2.toLowerCase()) {
                return true;
            } else {
                return false;
            }
        }

        /** close blade. */
        close() {
            if (this.portalService.areaBlades !== undefined) {
                this.portalService.areaBlades.clearPath(this.path);
            } else {
                throw new Error('[angularportalazure.Blade] path: \'' + this.path + '\' could not be removed, since no \'this.portalService.areaBlades\' available.');
            }
        }

        //#region Set StatusBar

        clearStatusBar() {
            this.statusBar = '';
            this.statusBarClass = '';
        }

        setStatusBarLoadData() {
            this.statusBar = 'Daten laden...';
            this.statusBarClass = '';
        }

        setStatusBarSaveData() {
            this.statusBar = 'Daten speichern...';
            this.statusBarClass = '';
        }

        setStatusBarException(exception: angularportalazure.Exception) {
            if (exception.Message === undefined) {
                this.statusBar = 'FEHLER: ' + exception;
            } else {
                this.statusBar = 'FEHLER: ' + exception.Message;
            }

            if (exception.Messages !== undefined) {
                exception.Messages.forEach(function (item) {
                    this.statusBar += ' - ' + item;
                });
            }

            this.statusBarClass = 'message-error message-off';
        }

        //#endregion

        //#endregion

        //#region Commands

        onCommandBrowse(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
        }

        onCommandCancel(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
        }

        onCommandCopy(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
        }

        onCommandDelete(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
        }

        onCommandDocument(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
        }

        onCommandDocument2(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
        }

        onCommandDocument3(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
        }

        onCommandDocument4(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
        }

        onCommandDocument5(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
        }

        onCommandNew(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandNew\' is an abstract function. Define one in the derived class.');
        }

        onCommandOrder(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
        }

        onCommandRestart(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
        }

        onCommandSave(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandSave\' is an abstract function. Define one in the derived class.');
        }

        onCommandSearch(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
        }

        onCommandStart(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandStart\' is an abstract function. Define one in the derived class.');
        }

        onCommandStop(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandStop\' is an abstract function. Define one in the derived class.');
        }

        onCommandSwap(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
        }

        onCommandExcel(): void {
            throw new Error('[angularportalazure.Blade] \'onCommandExcel\' is an abstract function. Define one in the derived class.');
        }

        //#endregion

        setTitle(watchExpression: string, func: () => void) {
            if (this.watcherTitle === undefined) {
                this.watcherTitle = this.$scope.$watch(watchExpression, () => { func(); });
                this.$scope.$on('$destroy', () => { this.watcherTitle(); });
            }
        }

        private setBladeHeights(): void {
            this.bladeContentHeight = this.portalService.$window.innerHeight - 125; // 125 = header
            this.bladeContentHeightInner = this.bladeContentHeight - 50 - 3; // 50 = padding (top and bottom), somehow we miss 3px

            //this.portalService.$timeout(() => {
            //}, 50);
        }
    }
}
