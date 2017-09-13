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
        firstName: string;
        private _lastName;
        lastName: string;
        private _name;
        name: string;
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
        /** angular1: $onInit(), $onChanges(changesObj), $doCheck(), $onDestroy(), $postLink() */
        $onDestroy(): void;
        /** angular2: ngOnChanges(), ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy */
        ngOnDestroy(): void;
        private removeWindowResizeListener();
        setupWindowResizeListener(callback: () => void): void;
        isStringNullOrEmpty(value: string): boolean;
        getRandomString(length?: number): string;
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
            'width': string;
        };
        widthStackLayout: {
            'width': string;
        };
        isInnerHtml: boolean;
        statusBar: string;
        statusBarClass: string;
        formblade: any;
        private _path;
        path: string;
        isCommandBrowse: boolean;
        commandBrowse: () => void;
        commandBrowseText: string;
        isCommandCancel: boolean;
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
        commandDocument: () => void;
        commandDocumentText: string;
        isCommandDocument2: boolean;
        commandDocument2: () => void;
        commandDocument2Text: string;
        isCommandDocument3: boolean;
        commandDocument3: () => void;
        commandDocument3Text: string;
        isCommandDocument4: boolean;
        commandDocument4: () => void;
        commandDocument4Text: string;
        isCommandDocument5: boolean;
        commandDocument5: () => void;
        commandDocument5Text: string;
        isCommandNew: boolean;
        commandNew: () => void;
        commandNewText: string;
        isCommandOrder: boolean;
        commandOrder: () => void;
        commandOrderText: string;
        isCommandRestart: boolean;
        commandRestart: () => void;
        commandRestartText: string;
        isCommandSave: boolean;
        isCommandSaveEnabled: boolean;
        commandSave: () => void;
        commandSaveText: string;
        isCommandSearch: boolean;
        commandSearch: () => void;
        commandSearchText: string;
        isCommandStart: boolean;
        commandStart: () => void;
        commandStartText: string;
        isCommandStop: boolean;
        commandStop: () => void;
        commandStopText: string;
        isCommandSwap: boolean;
        commandSwap: () => void;
        commandSwapText: string;
        isCommandExcel: boolean;
        commandExcel: () => void;
        commandExcelText: string;
        activate(): void;
        /** Override */
        onActivate(): void;
        /** Override */
        onActivated(): void;
        navigateTo(path: any): void;
        /** Must be overridden. */
        onNavigateTo(value: any): void;
        comparePaths(path1: string, path2: string): boolean;
        /** close blade. */
        close(): void;
        /** Override */
        onClose(): boolean;
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
        private setBladeHeights();
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
        private setPortalScrollCss();
        private setupShowHideNotificationAreaListener();
        private setupAddBladeListener();
    }
}
declare namespace angularportalazure {
    class BladeData extends angularportalazure.Blade {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle?: string, width?: number);
        onLoadItem(): void;
        onLoadItems(): void;
        onLoadedItem(): void;
        onLoadedItems(): void;
    }
}
declare namespace angularportalazure {
    class BladeNav extends angularportalazure.BladeData {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title?: string, subtitle?: string, width?: number);
        items: Array<angularportalazure.BladeNavItem>;
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
        width: number;
        private _backgroundColor;
        backgroundColor: string;
        hide(): void;
        show(width?: number): void;
        onHide(): boolean;
        onShow(): void;
        onShowed(): void;
        private calcualteCssStyles();
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
        herowide = 3,
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
        bladePath: string;
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
        animate: any;
        animation: any;
        component: any;
        config: any;
        constant: any;
        controller: any;
        directive: any;
        factory: any;
        filter: any;
        provider: any;
        run: any;
        service: any;
        value: any;
        decorator: any;
        name: any;
        requires: any;
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
    class BladeDetail<T> extends angularportalazure.BladeData {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle?: string, width?: number);
        item: T;
        loadItem(func: () => Promise<any>): void;
        saveItem(func: () => any): (Promise<object> & angular.IHttpPromise<object>);
        onSaveItem(): void;
        onSavedItem(): void;
        onCommandCancel(): void;
    }
}
declare namespace angularportalazure {
    class BladeGrid extends angularportalazure.BladeData {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle?: string, width?: number);
        items: any[];
        loadItems(func: () => any | angular.IPromise<any> | Promise<any>): void;
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
    class ExceptionDotNet {
        ExceptionMessage: string;
        ExceptionType: string;
        InnerException: ExceptionDotNet;
        Message: string;
        StackTrace: string;
    }
    class ValidationResultDotNet {
        ErrorMessage: string;
        MemberNames: string[];
    }
    class ValidationsExceptionDotNet extends ExceptionDotNet {
        ClassName: string;
        Data: {
            key: number;
            value: string;
        }[];
        ValidationResults: ValidationResultDotNet[];
        convertResponse(response: any): void;
        private static convertResponse(exception, responseData);
        private static convertExceptionType(exception, responseData);
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
        private static processDotNetException1(response);
        private static processDotNetException2(response);
    }
}
declare namespace angularportalazure {
    class DataService {
        $http: angular.IHttpService;
        $q: angular.IQService;
        constructor($http: angular.IHttpService, $q: angular.IQService);
        getData(url: string): any;
    }
}
