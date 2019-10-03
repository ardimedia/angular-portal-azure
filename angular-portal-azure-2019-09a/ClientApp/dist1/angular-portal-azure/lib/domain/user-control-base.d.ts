import { PortalService } from './portal-service';
import { Exception } from './exception';
export declare class UserControlBase {
    constructor(portalService: PortalService);
    portalService: PortalService;
    windowResizeHandler: () => void;
    statusBar: string;
    statusBarClass: string;
    /** angular1: $onInit(), $onChanges(changesObj), $doCheck(), $onDestroy(), $postLink() */
    $onDestroy(): void;
    /** angular2: ngOnChanges(), ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy */
    ngOnDestroy(): void;
    /** Override */
    onActivate(): void;
    /** Override */
    onActivated(): void;
    private removeWindowResizeListener;
    setupWindowResizeListener(callback: () => void): void;
    isNumberUndefinedNullOr0(value: number): boolean;
    isObjectNullUndefinedOrEmpty(value: object): boolean;
    isStringNullOrEmpty(value: string): boolean;
    getRandomString(length?: number): string;
    clearStatusBar(): void;
    setStatusBar(text?: string, style?: string): void;
    setStatusBarCopyData(): void;
    setStatusBarLoadData(): void;
    setStatusBarSaveData(): void;
    setStatusBarDeleteData(): void;
    setStatusBarDeleteDataCanceled(): void;
    setStatusBarInfo(text: string): void;
    setStatusBarError(text: string): void;
    setStatusBarNoDataFound(): void;
    setStatusBarException(exception: Exception): void;
}
