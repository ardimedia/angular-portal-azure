import { UserAccount } from './user-account';
import { PortalService } from './portal-service';
import { Exception } from './exception';


export class UserControlBase {
    // #region Constructor

    //static $inject = ['$scope', 'portalService'];
    constructor(portalService: PortalService) { // $scope: any,
        //this.$scope = $scope;
        this.portalService = portalService;
    }

    // #endregion

    // #region Properties

    //$scope: any;
    portalService: PortalService;

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

    /** Override */
    onActivate(): void {
    }

    /** Override */
    onActivated(): void {
    }

    private removeWindowResizeListener() {
        if (this.windowResizeHandler !== undefined) {
            this.portalService.$window.removeEventListener('resize', this.windowResizeHandler);
        }
    }

    setupWindowResizeListener(callback: () => void) {
        // http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
        let id: number;

        window.addEventListener('resize', this.windowResizeHandler = () => {
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

    isObjectNullUndefinedOrEmpty(value: object): boolean {
        if (value == null) { return true; }
        if (value == undefined) { return true; }
        if (value && Object.keys(value).length > 0) {
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
        this.statusBar = 'Daten lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¶schen...';
        this.statusBarClass = 'apa-statusbar-info';
    }

    setStatusBarDeleteDataCanceled() {
        this.statusBar = 'LÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¶schen abgebrochen.';
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

    setStatusBarException(exception: Exception) {
        this.statusBar = Exception.getOneLineMessage(exception);
        this.statusBarClass = 'apa-statusbar-error';
    }

    // #endregion

    // #endregion
}
