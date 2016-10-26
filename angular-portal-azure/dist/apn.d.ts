/// <reference types="angular-resource" />
/// <reference types="angular" />
declare namespace angularportalazure {
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
        constructor(portalService: angularportalazure.PortalService);
        portalService: angularportalazure.PortalService;
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
        constructor(portalService: angularportalazure.PortalService, path: string, title: string, subtitle?: string, width?: number);
        listener1: Function;
        path: string;
        title: string;
        subTitle: string;
        width: {
            'width': string;
        };
        widthStackLayout: {
            'width': string;
        };
        isInnerHtml: boolean;
        statusbar: string;
        statusbarClass: string;
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
        /** Obsolete */
        blade: Blade;
        /** Obsolete */
        isNavGrid: boolean;
        /** Obsolete */
        navGrid: {
            portalService: any;
            items: any[];
            navigateTo: (path: string) => void;
        };
        activate(): void;
        onActivate(): void;
        navigateTo(arg: any): void;
        onNavigateTo(arg: any): void;
        /** close blade. */
        close(): void;
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
        /** Obsolete */
        setObsoleteLayoutProperites(): void;
        /** Obsolete */
        bladeClose(): void;
    }
}
declare namespace angularportalazure {
    class BladeArea extends angularportalazure.UserControlBase {
        constructor(portalService: angularportalazure.PortalService);
        private listener1;
        blades: Array<angularportalazure.Blade>;
        raiseAddBladeEvent(args: angularportalazure.IAddBladeEventArgs): void;
        setFirstBlade(path: string): angularportalazure.Blade;
        /** obsolete */
        addBlade(path: string, senderPath?: string): angularportalazure.Blade;
        clearAll(): void;
        clearPath(path: string): void;
        clearLevel(level: number): void;
        clearLastLevel(): void;
        clearChild(path: string): void;
        showPanoramaIfNoBlades(): void;
        hidePanorama(): void;
        /** You need to call this when BladeArea is no longer used, otherwise the listener does not get removed. */
        close(): void;
        addBladePath(path: string): void;
        addBladeOld(path: string): void;
    }
}
declare namespace angularportalazure {
    interface IBladeParameter {
        action: string;
        item?: any;
        itemId: number;
    }
}
declare namespace angularportalazure {
    class AvatarMenu extends angularportalazure.UserControlBase {
        constructor(portalService: angularportalazure.PortalService);
        userAccount: angularportalazure.UserAccount;
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
        portalService: angularportalazure.PortalService;
        title: string;
        subTitle: string;
        bladePath: string;
        tileSize: angularportalazure.TileSizes;
        size: string;
        left: string;
        top: string;
        leftN: string;
        topN: string;
        constructor(title: string, bladePath: string, portalService: angularportalazure.PortalService);
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
        tiles: angularportalazure.Tiles;
        constructor(portalService: angularportalazure.PortalService);
    }
}
declare namespace angularportalazure {
    class Panorama extends angularportalazure.UserControlBase {
        title: string;
        isVisible: boolean;
        avatarMenu: angularportalazure.AvatarMenu;
        startboard: angularportalazure.Startboard;
        constructor(title: string, portalService: angularportalazure.PortalService);
    }
}
declare namespace angularportalazure {
    class PortalShell extends angularportalazure.UserControlBase {
        /** Obsolete
         * start using this.panorama.title */
        title: string;
        /** Obsolete
         * start using this.panorama.avatarMenu.userAccount */
        user: {};
        /** Obsolete
         * start using this.panorama.startboard.tiles */
        tiles: angularportalazure.Tiles[];
        /** Obsolete
         * start using this.bladesNew.blades. */
        blades: any[];
        constructor(title: string, portalService: angularportalazure.PortalService);
        initialize(): void;
        setObsoleteLayoutProperites(): void;
    }
}
declare namespace angularportalazure {
    class PortalService {
        constructor($injector: any);
        parameter: angularportalazure.IBladeParameter;
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
        bladeArea: angularportalazure.BladeArea;
        ngDialog: any;
        $http: any;
        $httpBackend: any;
        $injector: any;
        $q: any;
        $rootScope: any;
        $window: any;
        $scope: any;
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
    /** If a Web API through an exception, the following interface should be available. */
    interface IException {
        ExceptionType: string;
        ClassName: string;
        Message: string;
        Data: Object;
        Type: string;
        Messages?: string[];
    }
}
declare namespace angularportalazure {
    class BladeData extends angularportalazure.Blade {
        constructor(portalService: angularportalazure.PortalService, path: string, title: string, subtitle?: string, width?: number);
        processException(data: angularportalazure.IException): void;
    }
}
declare namespace angularportalazure {
    class BladeDetail extends angularportalazure.BladeData {
        item: any;
        constructor(portalService: angularportalazure.PortalService, path: string, title: string, subtitle?: string, width?: number);
        activate(): void;
        onActivate(): any;
        onActivated(): void;
        onCommandCancel(): void;
    }
}
declare namespace angularportalazure {
    class BladeList extends angularportalazure.BladeData {
        items: any[];
        constructor(portalService: angularportalazure.PortalService, path: string, title: string, subtitle?: string, width?: number);
        activate(): void;
        onActivate(): any;
        loadItems(f: any): void;
        onFilter(actual: Object, expected: string): boolean;
        /** Obsolete */
        setObsoleteLayoutProperites(): void;
    }
}
declare namespace angularportalazure {
    class BladeNavItem {
        title: string;
        bladePath: string;
        hrefPath: string;
        roles: string;
        isVisible: boolean;
        callback: () => any;
        bladeNav: angularportalazure.BladeNav;
        constructor(title?: string, bladePath?: string, hrefPath?: string, roles?: string, isVisible?: boolean, callback?: () => any, bladeNav?: angularportalazure.BladeNav);
        onNavItemClick(): void;
    }
}
declare namespace angularportalazure {
    class BladeNav extends angularportalazure.BladeData {
        navItems: Array<angularportalazure.BladeNavItem>;
        isNav: boolean;
        constructor(portalService: angularportalazure.PortalService, path: string, title?: string, subtitle?: string, width?: number);
    }
}
declare namespace angularportalazure {
    class Exception {
        static convertFromWebApiException(ex: angularportalazure.IException): void;
        static onConvertFromWebApiException(ex: angularportalazure.IException): void;
    }
}
declare namespace angularportalazure {
    class DataService {
        $http: any;
        $q: any;
        constructor($http: any, $q: any);
        getData(url: string): any;
    }
}
