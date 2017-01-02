/// <reference types="angular" />
/// <reference types="jquery" />
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
        setupWindowResizeListener(callback: () => void): void;
    }
}
declare namespace angularportalazure {
    interface IAddBladeEventArgs {
        path: string;
        pathSender: string;
    }
}
declare var $: JQueryStatic;
declare namespace angularportalazure {
    class Blade extends angularportalazure.UserControlBase {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle?: string, width?: number);
        /** HACK: 2016-11-06/hp
        [angular-portal-blade] needs [this] as the controller.
        We don't know how to provide [this] to the directive.
        So we came up with this [vm] property.*/
        vm: any;
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
        commandCopy: () => void;
        commandCopyText: string;
        isCommandDelete: boolean;
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
        onActivated(): void;
        navigateTo(path: any): void;
        /** Must be overridden. */
        onNavigateTo(value: any): void;
        comparePaths(path1: string, path2: string): boolean;
        /** close blade. */
        close(): void;
        clearStatusBar(): void;
        setStatusBarLoadData(): void;
        setStatusBarSaveData(): void;
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
        private areaNotification;
        widthAreaUsed: number;
        private _width;
        width: number;
        private _backgroundColor;
        backgroundColor: string;
        hide(): void;
        show(): void;
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
        item: T | null;
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle?: string, width?: number);
        loadItem(func: () => any): void;
        onLoadItem(): void;
        onLoadedItem(): void;
        saveItem(func: () => any): void;
        onSaveItem(): void;
        onSavedItem(): void;
        onCommandCancel(): void;
    }
}
declare namespace angularportalazure {
    class BladeGrid extends angularportalazure.BladeData {
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle?: string, width?: number);
        items: any[];
        loadItems(func: () => angular.IPromise<any>): void;
        onLoadItems(): void;
        onLoadedItems(): void;
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
    class Exception implements angularportalazure.IExceptionDotNet {
        ExceptionType: string;
        ClassName: string;
        Data: Object;
        Type: string;
        Messages: string[];
        Message: string;
        MessageDetail: string;
        Status: number | undefined;
        StatusText: string | undefined;
        Url: string;
        processException(response: angular.IHttpPromiseCallbackArg<any>): void;
        convertFromWebApiException(ex: angularportalazure.IExceptionDotNet): void;
    }
}
declare namespace angularportalazure {
    class IExceptionDotNet {
        ExceptionType: string;
        ClassName: string;
        Data: Object;
        Type: string;
        Message: string;
        Messages: string[];
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
