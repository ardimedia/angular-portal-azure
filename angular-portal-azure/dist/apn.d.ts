/// <reference types="angular" />
/// <reference types="angular-resource" />
/// <reference types="angulartics" />
/// <reference types="angular-translate" />
declare namespace angularportalazure {
}
declare namespace angularportalazure {
    class UserAccount {
        constructor(username: string, firstName?: string, lastName?: string);
        private _firstName;
        get firstName(): string;
        set firstName(value: string);
        private _lastName;
        get lastName(): string;
        set lastName(value: string);
        private _name;
        get name(): string;
        set name(value: string);
        userName: string;
        emailAddress: string;
    }
}
declare namespace angularportalazure {
    class UserControlBase {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService);
        $scope: angular.IScope;
        portalService: angularportalazure.PortalService;
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
        setStatusBarException(exception: angularportalazure.Exception): void;
    }
}
declare namespace angularportalazure {
    interface IAddBladeEventArgs {
        path: string;
        pathSender: string;
    }
}
declare namespace angularportalazure {
    class Blade extends angularportalazure.UserControlBase {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle?: string, width?: number);
        /** HACK: 2016-11-06/hp
        [angular-portal-blade] needs [this] as the controller.
        We don't know how to provide [this] to the directive.
        So we came up with this [vm] property.*/
        vm: any;
        visibility: string;
        private watcherTitle;
        bladeContentHeight: number;
        bladeContentHeightInner: number;
        title: string;
        subTitle: string;
        width: {
            width: string;
        };
        widthStackLayout: {
            width: string;
        };
        isInnerHtml: boolean;
        formblade: any;
        private _path;
        get path(): string;
        set path(newPath: string);
        isCommandBrowse: boolean;
        isCommandBrowseEnabled: boolean;
        commandBrowse: () => void;
        commandBrowseText: string;
        isCommandCancel: boolean;
        isCommandCancelEnabled: boolean;
        commandCancel: () => void;
        commandCancelText: string;
        isCommandCopy: boolean;
        isCommandCopyEnabled: boolean;
        commandCopy: () => void;
        commandCopyText: string;
        isCommandDelete: boolean;
        isCommandDeleteEnabled: boolean;
        commandDelete: () => void;
        commandDeleteText: string;
        isCommandDocument: boolean;
        isCommandDocumentEnabled: boolean;
        commandDocument: () => void;
        commandDocumentText: string;
        isCommandDocument2: boolean;
        isCommandDocument2Enabled: boolean;
        commandDocument2: () => void;
        commandDocument2Text: string;
        isCommandDocument3: boolean;
        isCommandDocument3Enabled: boolean;
        commandDocument3: () => void;
        commandDocument3Text: string;
        isCommandDocument4: boolean;
        isCommandDocument4Enabled: boolean;
        commandDocument4: () => void;
        commandDocument4Text: string;
        isCommandDocument5: boolean;
        isCommandDocument5Enabled: boolean;
        commandDocument5: () => void;
        commandDocument5Text: string;
        isCommandNew: boolean;
        isCommandNewEnabled: boolean;
        commandNew: () => void;
        commandNewText: string;
        isCommandOrder: boolean;
        isCommandOrderEnabled: boolean;
        commandOrder: () => void;
        commandOrderText: string;
        isCommandRestart: boolean;
        isCommandRestartEnabled: boolean;
        commandRestart: () => void;
        commandRestartText: string;
        isCommandSave: boolean;
        isCommandSaveEnabled: boolean;
        commandSave: () => void;
        commandSaveText: string;
        isCommandSearch: boolean;
        isCommandSearchEnabled: boolean;
        commandSearch: () => void;
        commandSearchText: string;
        isCommandStart: boolean;
        isCommandStartEnabled: boolean;
        commandStart: () => void;
        commandStartText: string;
        isCommandStop: boolean;
        isCommandStopEnabled: boolean;
        commandStop: () => void;
        commandStopText: string;
        isCommandSwap: boolean;
        isCommandSwapEnabled: boolean;
        commandSwap: () => void;
        commandSwapText: string;
        isCommandExcel: boolean;
        isCommandExcelEnabled: boolean;
        commandExcel: () => void;
        commandExcelText: string;
        activate(): void;
        navigateTo(path: any): void;
        /** Must be overridden. */
        onNavigateTo(value: any): void;
        comparePaths(path1: string, path2: string): boolean;
        /** close blade. */
        close(): void;
        /** Override */
        onClose(): boolean;
        onCommandBrowse(): void;
        onCommandCancel(): void;
        onCommandCopy(): void;
        onCommandDelete(): void;
        onCommandDocument(): void;
        onCommandDocument2(): void;
        onCommandDocument3(): void;
        onCommandDocument4(): void;
        onCommandDocument5(): void;
        onCommandNew(): void;
        onCommandOrder(): void;
        onCommandRestart(): void;
        onCommandSave(): void;
        onCommandSearch(): void;
        onCommandStart(): void;
        onCommandStop(): void;
        onCommandSwap(): void;
        onCommandExcel(): void;
        /** Change title, as soon as watchExpression changes. watchExpression is either a variable ore an expression, e.g. [name1 + name2] */
        setTitle(watchExpression: string, func: () => void): void;
        private setBladeHeights;
    }
}
declare namespace angularportalazure {
    class AreaBlades extends angularportalazure.UserControlBase {
        static $inject: string[];
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService);
        private portalScroll;
        private addBladeListener;
        private areaNotificationShowListener;
        private areaNotificationHideListener;
        blades: Array<angularportalazure.Blade>;
        raiseBladeOnActivateEvent(args: angularportalazure.IAddBladeEventArgs): void;
        raiseAddBladeEvent(args: angularportalazure.IAddBladeEventArgs): void;
        setFirstBlade(path: string): angularportalazure.Blade | void;
        addBlade(path: string, senderPath?: string): angularportalazure.Blade | void;
        clearAll(): void;
        clearPath(path: string): void;
        clearLevel(level: number): void;
        clearLastLevel(): void;
        clearChild(path: string): void;
        showPanoramaIfNoBlades(): void;
        hidePanorama(): void;
        /** We need to call this when AreaBlades is no longer used, otherwise the listener does not get removed. */
        close(): void;
        private setPortalScrollCss;
        private setupShowHideNotificationAreaListener;
        private setupAddBladeListener;
    }
}
declare namespace angularportalazure {
    class BladeData<T> extends angularportalazure.Blade {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle?: string, width?: number);
        item: T;
        items: T[];
        newItem(func: () => Promise<any | angularportalazure.Exception>): void;
        /** Extension point */
        onNewItem(): void;
        /** Extension point */
        onNewedItem(): void;
        /** Extension point */
        onNewItemException(ex: angularportalazure.Exception): void;
        loadItem(func: () => Promise<any | angularportalazure.Exception>): void;
        /** Extension point */
        onLoadItem(): void;
        /** Extension point */
        onLoadedItem(): void;
        /** Extension point */
        onLoadItemException(ex: angularportalazure.Exception): void;
        loadItems(func: () => Promise<any | angularportalazure.Exception>): void;
        /** Extension point */
        onLoadItems(): void;
        /** Extension point */
        onLoadedItems(): void;
        /** Extension point */
        onLoadItemsException(ex: angularportalazure.Exception): void;
        /**
         * Default behavior for saving an entity.
         * - validates this.ngForm. if not valid, returns without saving
         * - call this.setStatusBarSaveData();
         * - set this.isCommandSaveEnabled = false
         * - call this.onSaveItem()
         * - call the provided function
         * THEN
         * - call this.clearStatusBar()
         * - set this.isCommandSaveEnabled = true
         * - set this.item to the saved data
         * - call this.onSavedItem()
         * - returns the saved data
         * CATCH
         * - set this.isCommandSaveEnabled = true
         * - call this.setStatusBarException
         * - call this.onLoadItemsException
         */
        saveItem(func: () => Promise<T | angularportalazure.Exception> | angular.IPromise<T | angularportalazure.Exception>, ngForm?: any): (Promise<T | void> | angular.IPromise<T | void>);
        /** Extension point */
        onSaveItem(): void;
        /** Extension point */
        onSavedItem(): void;
        /** Extension point */
        onSaveItemException(ex: angularportalazure.Exception): void;
        /**
         * Default behavior for saving any object.
         * - validates this.ngForm. if not valid, returns without saving
         * - call this.setStatusBarSaveData();
         * - set this.isCommandSaveEnabled = false
         * - call this.onSaveObject()
         * - call the provided function
         * THEN
         * - call this.clearStatusBar()
         * - set this.isCommandSaveEnabled = true
         * - call this.onSavedObject()
         * - returns the saved data
         * CATCH
         * - set this.isCommandSaveEnabled = true
         * - call this.setStatusBarException
         * - call this.onLoadItemsException
         */
        saveObject(func: () => Promise<any | angularportalazure.Exception> | angular.IPromise<any | angularportalazure.Exception>, ngForm?: any): (Promise<any | void> | angular.IPromise<any | void>);
        /** Extension point */
        onSaveObject(): void;
        /** Extension point */
        onSavedObject(): void;
        /** Extension point */
        onSaveObjectException(ex: angularportalazure.Exception): void;
        deleteItem(func: () => Promise<T | number | void | angularportalazure.Exception> | angular.IPromise<T | number | void | angularportalazure.Exception>, ngForm?: any): (Promise<T | number | void> | angular.IPromise<T | number | void>);
        /** Extension point */
        onDeleteItem(): void;
        /** Extension point
         * return value indicates if the current blade should be closed or not.
         */
        onDeletedItem(): boolean;
        /** Extension point */
        onDeletedObjectException(ex: angularportalazure.Exception): void;
        /**
         * Default behavior for executing
         * - validates ngForm. if not valid, returns without executing
         * - call this.setStatusBarInfo();
         * - set this.isCommandStartEnabled = false
         * - call this.onExecute()
         * - call the provided function
         * THEN
         * - call this.clearStatusBar()
         * - set this.isCommandStartEnabled = true
         * - call this.onExecuted()
         * - returns the data
         * CATCH
         * - set this.isCommandStartEnabled = true
         * - call this.setStatusBarException
         * - call this.onExecuteException
         */
        execute(message: string, func: () => Promise<T | angularportalazure.Exception> | angular.IPromise<T | angularportalazure.Exception>, ngForm?: any): (Promise<T | void> | angular.IPromise<T | void>);
        /** Extension point */
        onExecute(): void;
        /** Extension point */
        onExecuted(): void;
        /** Extension point */
        onExecuteException(ex: angularportalazure.Exception): void;
        isFormValid(ngForm?: any): boolean;
        /** Extension point */
        onSaveItemFormValidation(): boolean;
        /** Extension point */
        onSaveObjectFormValidation(): boolean;
        /** Extension point */
        onDeleteItemFormValidation(): boolean;
    }
}
declare namespace angularportalazure {
    class BladeNav extends angularportalazure.BladeData<BladeNavItem> {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title?: string, subtitle?: string, width?: number);
        isNav: boolean;
        onNavigateTo(path: string): void;
    }
}
declare namespace angularportalazure {
    class BladeNavItem {
        title: string;
        cssClass: string;
        bladePath: string;
        hrefPath: string;
        roles: string;
        isVisible: boolean;
        callback: () => any;
        bladeNav: angularportalazure.BladeNav | null;
        constructor(title?: string, cssClass?: string, bladePath?: string, hrefPath?: string, roles?: string, isVisible?: boolean, callback?: () => any, bladeNav?: angularportalazure.BladeNav | null);
        onNavItemClick(): void;
    }
}
declare namespace angularportalazure {
    class AreaNotification extends angularportalazure.UserControlBase {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService);
        path: string;
        widthAreaUsed: number;
        private areaNotification;
        private _width;
        get width(): number;
        set width(value: number);
        private _backgroundColor;
        get backgroundColor(): string;
        set backgroundColor(value: string);
        hide(): void;
        show(width?: number): void;
        onHide(): boolean;
        onShow(): void;
        onShowed(): void;
        private calcualteCssStyles;
    }
}
declare namespace angularportalazure {
    interface BladeParameter {
        action: string;
        item?: any;
        itemId: number;
    }
}
declare namespace angularportalazure {
    class AvatarMenu extends angularportalazure.UserControlBase {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService);
        userAccount: angularportalazure.UserAccount | null;
    }
}
declare namespace angularportalazure {
    /** The names are used in CSS for layouting, e.g. style='mini' */
    enum TileSizes {
        small = 0,
        mini = 1,
        normal = 2,
        herowide = 3
    }
}
declare namespace angularportalazure {
    class TileSize {
        tileSizes: angularportalazure.TileSizes;
        width: number;
        height: number;
        constructor(tileSizes: angularportalazure.TileSizes, width: number, height: number);
        static getTileSizes(): Array<TileSize>;
    }
}
declare namespace angularportalazure {
    class Tile {
        constructor(title: string, bladePath: string, portalService: angularportalazure.PortalService);
        portalService: angularportalazure.PortalService;
        title: string;
        subTitle: string;
        get bladePath(): string;
        set bladePath(newBladePath: string);
        private _bladePath;
        tileSize: angularportalazure.TileSizes;
        size: string;
        left: string;
        top: string;
        leftN: string;
        topN: string;
        clicked(): void;
    }
}
declare namespace angularportalazure {
    class Tiles {
        showTiles: boolean;
        tiles: Array<any>;
        isTilesLoaded: boolean;
        hideTileIfOnlyOne: boolean;
        private tileSizes;
        private nextLeft;
        private nextTop;
        private columnHeightMax;
        addTile(tile: Tile): Tile;
    }
}
declare namespace angularportalazure {
    class Startboard extends angularportalazure.UserControlBase {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService);
        tiles: angularportalazure.Tiles;
    }
}
declare namespace angularportalazure {
    class Panorama extends angularportalazure.UserControlBase {
        title: string;
        isVisible: boolean;
        avatarMenu: angularportalazure.AvatarMenu;
        startboard: angularportalazure.Startboard;
        constructor($scope: angular.IScope, title: string, portalService: angularportalazure.PortalService);
    }
}
declare namespace angularportalazure {
    class PortalShell {
        portalService: angularportalazure.PortalService;
        constructor(portalService: angularportalazure.PortalService, title?: string);
    }
}
declare namespace angularportalazure {
    class PortalService {
        static $inject: string[];
        constructor($injector: angular.auto.IInjectorService);
        parameter: angularportalazure.BladeParameter;
        $analytics: angulartics.IAnalyticsService;
        portalShell: angularportalazure.PortalShell;
        panorama: angularportalazure.Panorama;
        areaBlades: angularportalazure.AreaBlades;
        areaNotification: angularportalazure.AreaNotification;
        ngDialog: any;
        $injector: angular.auto.IInjectorService;
        $http: angular.IHttpService;
        $httpBackend: angular.IHttpBackendService;
        $q: angular.IQService;
        $rootScope: angular.IRootScopeService;
        $window: angular.IWindowService;
        $timeout: angular.ITimeoutService;
        $translate: angular.translate.ITranslateService;
    }
}
declare namespace angularportalazure {
}
declare namespace angularportalazure {
}
declare namespace angularportalazure {
}
declare namespace angularportalazure {
}
declare namespace angularportalazure {
    class BladeDetail<T> extends angularportalazure.BladeData<T> {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle?: string, width?: number);
        item: T;
        onCommandCancel(): void;
    }
}
declare namespace angularportalazure {
    class BladeGrid extends angularportalazure.BladeData<any> {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle?: string, width?: number);
        onFilter(actual: Object, expected: string): boolean;
    }
}
declare namespace angularportalazure {
    class Debug {
        constructor();
        static isEnabled: boolean;
        static isWithObjects: boolean;
        static keys: Array<string>;
        static enable(key?: string): void;
        static disable(key?: string): void;
        static write(debugLine: string, objects?: Array<any>): boolean;
        /** Extract the key (e.g. [azureportal] from a string */
        static extractKey(text: string): string;
        /** Extract the key (e.g. [azureportal] from a string */
        static isInKeys(debugLine: string): boolean;
    }
}
declare namespace angularportalazure {
    class ValidationResultDotNet {
        ErrorMessage: string;
        MemberNames: string[];
    }
    class ExceptionDotNet {
        ClassName: string | void;
        Data: {
            key: number;
            value: string;
        }[] | null;
        ExceptionMethod: string | void;
        HelpURL: string | null | void;
        HelpLink: string | null | void;
        HResult: number;
        InnerException: ExceptionDotNet | null;
        Message: string | null;
        RemoteStackIndex: number | void;
        RemoteStackTraceString: string | null | void;
        Source: string;
        StackTrace: string;
        WatsonBuckets: string | null | void;
        /**
         *  @deprecated ExceptionMessage is obsolete
         */
        ExceptionMessage: string | void;
        /**
         *  @deprecated ExceptionType is obsolete
         */
        ExceptionType: string | void;
    }
    class ArgumentNullException extends ExceptionDotNet {
        ParamName: string;
    }
    class EntityValidationException extends ExceptionDotNet {
        Data: {
            key: number;
            value: string;
        }[];
        ValidationResults: ValidationResultDotNet[];
    }
    /**
     *  @deprecated ValidationsExceptionDotNet should be replaced by EntityValidationException
     */
    class ValidationsExceptionDotNet extends EntityValidationException {
    }
}
declare namespace angularportalazure {
    class Exception extends angularportalazure.ValidationsExceptionDotNet {
        Type: string;
        MessageDetail: string;
        Messages: string[];
        Status: number | undefined;
        StatusText: string | undefined;
        Url: string;
        static getOneLineMessage(exception: angularportalazure.Exception): string;
        static prepareException(response: angular.IHttpPromiseCallbackArg<angularportalazure.Exception> | any): angularportalazure.Exception;
        private static createException;
        private static processResponseData;
    }
}
