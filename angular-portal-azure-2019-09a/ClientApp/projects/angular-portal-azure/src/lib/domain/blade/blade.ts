import { Observable } from 'rxjs';

import { StatusBar } from './../status-bar';
import { UserControlBase } from './../base/user-control-base';

import { BrowserService } from '../../service/browser/browser.service';
import { InjectorService } from '../../service/injector/injector.service';

import { Viewport } from '../../service/browser/viewport';

export class Blade extends UserControlBase {
    // #region Properties

    private browserService: BrowserService;
    viewport: Viewport = new Viewport();

    // bladeId: string = '';
    private _bladeId: string = '';
    get bladeId(): string {
        return this._bladeId;
    }
    set bladeId(bladeId: string) {
        if (bladeId == null) { return; }
        this._bladeId = bladeId.toLowerCase();
    }

    /** HACK:2016-11-06/hp: [angular-portal-blade] needs [this] as the controller.
    We don't know how to provide [this] to the directive.
    So we came up with this [vm] property.*/
    vm: any = {};

    statusBar: StatusBar;

    visibility: string = 'collapse';

    private watcherTitle: () => void;

    bladeContentHeight: number;
    bladeContentHeightInner: number;

    title: string = '';
    subTitle: string = '';
    width = '0';
    widthStackLayout = { 'width': '50px' };

    height = '0';

    isInnerHtml: boolean = true;

    formblade: any; // angular.IFormController; // name of the ng-form directive

    // #region path

    private _path: string;
    get path(): string {
        return this._path;
    }
    // For the moment we do distinguish between lower and upper case path name
    set path(newPath: string) {
        if (newPath == null) { return; }
        this._path = newPath.toLowerCase();
    }

    // #endregion

    // #region Commands

    isCommandBrowse: boolean = false;
    commandBrowse: () => void = () => { this.onCommandBrowse(); };
    commandBrowseText: string = '';

    isCommandCancel: boolean = false;
    commandCancel: () => void = () => { this.onCommandCancel(); };
    commandCancelText: string = '';

    isCommandCopy: boolean = false;
    isCommandCopyEnabled: boolean = true;
    commandCopy: () => void = () => { this.onCommandCopy(); };
    commandCopyText: string = '';

    isCommandDelete: boolean = false;
    isCommandDeleteEnabled: boolean = true;
    commandDelete: () => void = () => { this.onCommandDelete(); };
    commandDeleteText: string = '';

    isCommandDocument: boolean = false;
    commandDocument: () => void = () => { this.onCommandDocument(); };
    commandDocumentText: string = '';

    isCommandDocument2: boolean = false;
    commandDocument2: () => void = () => { this.onCommandDocument2(); };
    commandDocument2Text: string = '';

    isCommandDocument3: boolean = false;
    commandDocument3: () => void = () => { this.onCommandDocument3(); };
    commandDocument3Text: string = '';

    isCommandDocument4: boolean = false;
    commandDocument4: () => void = () => { this.onCommandDocument4(); };
    commandDocument4Text: string = '';

    isCommandDocument5: boolean = false;
    commandDocument5: () => void = () => { this.onCommandDocument5(); };
    commandDocument5Text: string = '';

    isCommandNew: boolean = false;
    commandNew: () => void = () => { this.onCommandNew(); };
    commandNewText: string = '';

    isCommandOrder: boolean = false;
    commandOrder: () => void = () => { this.onCommandOrder(); };
    commandOrderText: string = '';

    isCommandRestart: boolean = false;
    commandRestart: () => void = () => { this.onCommandRestart(); };
    commandRestartText: string = '';

    isCommandSave: boolean = false;
    isCommandSaveEnabled: boolean = true;
    commandSave: () => void = () => { this.onCommandSave(); };
    commandSaveText: string = '';

    isCommandSearch: boolean = false;
    commandSearch: () => void = () => { this.onCommandSearch(); };
    commandSearchText: string = '';

    isCommandStart: boolean = false;
    commandStart: () => void = () => { this.onCommandStart(); };
    commandStartText: string = '';

    isCommandStop: boolean = false;
    commandStop: () => void = () => { this.onCommandStop(); };
    commandStopText: string = '';

    isCommandSwap: boolean = false;
    commandSwap: () => void = () => { this.onCommandSwap(); };
    commandSwapText: string = '';

    isCommandExcel: boolean = false;
    commandExcel: () => void = () => { this.onCommandExcel(); };
    commandExcelText: string = '';

    // #endregion

    // #endregion

    // #region Constructors

    // mainService: MainService, 
    constructor(path: string = '', title: string = '', subtitle: string = '', width: number = 200) {
        super();
        this.browserService = InjectorService.getInjector().get(BrowserService);
        this.browserService.onResize.subscribe((viewport) => this.viewport = viewport);

        this.vm = this;
        this.path = path;
        this.title = title;
        this.subTitle = subtitle;
        this.width = width + 'px';
        this.widthStackLayout.width = width - 50 + 'px';  // 50 = padding (left and right)

        //if (!mainService) { throw new Error('[Blade] constructor parameter \'mainService\' must be provided.'); }
        if (!path) { throw new Error('[Blade] constructor parameter \'path\' must be a string.'); }
        if (!title && title !== '') { throw new Error('[Blade] constructor parameter \'title\' must be a string when provided.'); }
        if (!subtitle && subtitle !== '') { throw new Error('[Blade] constructor parameter \'subtitle\' must be a string when provided.'); }
        if (!width && width !== 0) { throw new Error('[Blade] constructor parameter \'width\' must be a number when provided.'); }

        if (width < 50) { throw new Error('[Blade] constructor parameter \'width\' must be at least 50.'); }

        // Set 'this.mainService.areaBlades.blades[index]' to 'this'
        //     'this.mainService.areaBlades.blades[index]' was generated during AddBlade
        //this.mainService.areaBlades.blades.forEach((blade, index) => {
        //    if (blade.path != null && this.path != null && blade.path.toLowerCase() === this.path.toLowerCase()) {
        //        this.mainService.areaBlades.blades[index] = this;
        //    }
        //});

        //this.browserWindow.setupWindowResizeListener(() => { this.setBladeHeights(); });
        this.setBladeHeights();
    }

    // #endregion

    // #region Angular Methods

    ngOnInit() {
        console.log('ngOnInit');
    }

    // #endregion

    // #region Public Methods

    activate(): void {
        this.onActivate();
        this.onActivated();
    }

    navigateTo(path: any) {
        this.onNavigateTo(path);
    }

    /** Must be overridden. */
    onNavigateTo(value: any): void {
        throw new Error('[Blade] \'onNavigateTo\' is an abstract function. Define one in the derived class.');
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
        if (!this.onClose) {
            return; // do not close blade
        }

        //if (this.mainService.areaBlades !== undefined) {
        //    this.mainService.areaBlades.clearPath(this.path);
        //} else {
        //    throw new Error('[Blade] path: \'' + this.path + '\' could not be removed, since no \'this.mainService.areaBlades\' available.');
        //}
    }

    /** Override */
    onClose(): boolean {
        return true;
    }

    ///** Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2] */
    //setTitle(watchExpression: string, func: () => void) {
    //    if (this.watcherTitle === undefined) {
    //        if (this.$scope !== null) {
    //            // angular1
    //            this.watcherTitle = this.$scope.$watch(watchExpression, () => { func(); });
    //            this.$scope.$on('$destroy', () => { this.watcherTitle(); });
    //        } else {
    //            // angular2
    //        }
    //    }
    //}

    // #region Commands

    onCommandBrowse(): void {
        throw new Error('[Blade] \'onCommandBrowse\' is an abstract function. Define one in the derived class.');
    }

    onCommandCancel(): void {
        throw new Error('[Blade] \'onCommandCancel\' is an abstract function. Define one in the derived class.');
    }

    onCommandCopy(): void {
        throw new Error('[Blade] \'onCommandCopy\' is an abstract function. Define one in the derived class.');
    }

    onCommandDelete(): void {
        throw new Error('[Blade] \'onCommandDelete\' is an abstract function. Define one in the derived class.');
    }

    onCommandDocument(): void {
        throw new Error('[Blade] \'onCommandDocument\' is an abstract function. Define one in the derived class.');
    }

    onCommandDocument2(): void {
        throw new Error('[Blade] \'onCommandDocument2\' is an abstract function. Define one in the derived class.');
    }

    onCommandDocument3(): void {
        throw new Error('[Blade] \'onCommandDocument3\' is an abstract function. Define one in the derived class.');
    }

    onCommandDocument4(): void {
        throw new Error('[Blade] \'onCommandDocument4\' is an abstract function. Define one in the derived class.');
    }

    onCommandDocument5(): void {
        throw new Error('[Blade] \'onCommandDocument5\' is an abstract function. Define one in the derived class.');
    }

    onCommandNew(): void {
        throw new Error('[Blade] \'onCommandNew\' is an abstract function. Define one in the derived class.');
    }

    onCommandOrder(): void {
        throw new Error('[Blade] \'onCommandOrder\' is an abstract function. Define one in the derived class.');
    }

    onCommandRestart(): void {
        throw new Error('[Blade] \'onCommandRestart\' is an abstract function. Define one in the derived class.');
    }

    onCommandSave(): void {
        throw new Error('[Blade] \'onCommandSave\' is an abstract function. Define one in the derived class.');
    }

    onCommandSearch(): void {
        throw new Error('[Blade] \'onCommandSearch\' is an abstract function. Define one in the derived class.');
    }

    onCommandStart(): void {
        throw new Error('[Blade] \'onCommandStart\' is an abstract function. Define one in the derived class.');
    }

    onCommandStop(): void {
        throw new Error('[Blade] \'onCommandStop\' is an abstract function. Define one in the derived class.');
    }

    onCommandSwap(): void {
        throw new Error('[Blade] \'onCommandSwap\' is an abstract function. Define one in the derived class.');
    }

    onCommandExcel(): void {
        throw new Error('[Blade] \'onCommandExcel\' is an abstract function. Define one in the derived class.');
    }

    // #endregion

    // #endregion

    // #region Private Methods

    private setBladeHeights(): void {
        //this.bladeContentHeight = this.mainService.browserWindowService.browserWindow.innerHeight - 40 - 125; // 40 = topbar, 125 = blade header
        this.bladeContentHeightInner = this.bladeContentHeight - 50 - 3; // 50 = padding (top and bottom), somehow we miss 3px

        // this.mainService.$timeout(() => {
        // }, 50);
    }

    // #endregion
}
