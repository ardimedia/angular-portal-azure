/// <reference path="../../../node_modules/@types/angular/index.d.ts" />
/// <reference types="angular" />
/// <reference types="angular-resource" />
/// <reference types="ng-dialog" />
/// <reference types="angular-mocks" />
declare namespace AzurePortalNg {
}
declare module "base/Blade" {
    import * as AzurePortal from "base/AzurePortal";
    export class Blade extends AzurePortal.UserControlBase {
        portalService: AzurePortal.PortalService;
        constructor(portalService: AzurePortal.PortalService, path: string, title: string, subtitle?: string, width?: number);
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
declare module "base/BladeArea" {
    import * as AzurePortal from "base/AzurePortal";
    export class BladeArea extends AzurePortal.UserControlBase {
        constructor(portalService: AzurePortal.PortalService);
        private listener1;
        blades: Array<AzurePortal.Blade>;
        raiseAddBladeEvent(args: AzurePortal.IAddBladeEventArgs): void;
        setFirstBlade(path: string): AzurePortal.Blade;
        /** obsolete */
        addBlade(path: string, senderPath?: string): AzurePortal.Blade;
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
declare module "base/BladeData" {
    import * as AzurePortal from "base/AzurePortal";
    export class BladeData extends AzurePortal.Blade {
        constructor(portalService: AzurePortal.PortalService, path: string, title: string, subtitle?: string, width?: number);
        processException(data: AzurePortal.IException): void;
    }
}
declare module "base/BladeDetail" {
    import * as AzurePortal from "base/AzurePortal";
    import * as angular from 'angular';
    export class BladeDetail extends AzurePortal.BladeData {
        constructor(portalService: AzurePortal.PortalService, path: string, title: string, subtitle?: string, width?: number);
        item: any;
        activate(): void;
        onActivate(): angular.IHttpPromise<any>;
        onActivated(): void;
        onCommandCancel(): void;
    }
}
declare module "base/BladeList" {
    import * as AzurePortal from "base/AzurePortal";
    import * as angular from 'angular';
    export class BladeList extends AzurePortal.BladeData {
        constructor(portalService: AzurePortal.PortalService, path: string, title: string, subtitle?: string, width?: number);
        items: any[];
        activate(): void;
        onActivate(): angular.IHttpPromise<any>;
        loadItems(f: angular.IHttpPromise<any>): void;
        onFilter(actual: Object, expected: string): boolean;
        /** Obsolete */
        setObsoleteLayoutProperites(): void;
    }
}
declare module "base/BladeNav" {
    import * as AzurePortal from "base/AzurePortal";
    export class BladeNav extends AzurePortal.BladeData {
        constructor(portalService: AzurePortal.PortalService, path: string, title?: string, subtitle?: string, width?: number);
        navItems: Array<AzurePortal.BladeNavItem>;
        isNav: boolean;
    }
}
declare module "base/BladeNavItem" {
    import * as AzurePortal from "base/AzurePortal";
    export class BladeNavItem {
        title: string;
        bladePath: string;
        hrefPath: string;
        roles: string;
        isVisible: boolean;
        callback: () => any;
        bladeNav: AzurePortal.BladeNav;
        constructor(title?: string, bladePath?: string, hrefPath?: string, roles?: string, isVisible?: boolean, callback?: () => any, bladeNav?: AzurePortal.BladeNav);
        onNavItemClick(): void;
    }
}
declare module "base/Debug" {
    export class Debug {
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
declare module "base/Exception" {
    import * as AzurePortal from "base/AzurePortal";
    export class Exception {
        static convertFromWebApiException(ex: AzurePortal.IException): void;
        static onConvertFromWebApiException(ex: AzurePortal.IException): void;
    }
}
declare module "base/IAddBladeEventArgs" {
    export interface IAddBladeEventArgs {
        path: string;
        pathSender: string;
    }
}
declare module "base/IBladeParameter" {
    export interface IBladeParameter {
        action: string;
        item?: any;
        itemId: number;
    }
}
declare module "base/IException" {
    /** If a Web Api through an exception, the following interface should be available */
    export interface IException {
        ExceptionType: string;
        ClassName: string;
        Message: string;
        Data: Object;
        Type: string;
        Messages?: string[];
    }
}
declare module "base/Panorama" {
    import * as AzurePortal from "base/AzurePortal";
    export class Panorama extends AzurePortal.UserControlBase {
        constructor(title: string, portalService: AzurePortal.PortalService);
        title: string;
        isVisible: boolean;
        avatarMenu: AzurePortal.AvatarMenu;
        startboard: AzurePortal.Startboard;
    }
}
declare module "base/PortalService" {
    import * as AzurePortal from "base/AzurePortal";
    import * as angular from 'angular';
    export class PortalService implements angular.IModule {
        constructor($injector: angular.auto.IInjectorService);
        parameter: AzurePortal.IBladeParameter;
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
        portalShell: AzurePortal.PortalShell;
        panorama: AzurePortal.Panorama;
        bladeArea: AzurePortal.BladeArea;
        ngDialog: angular.dialog.IDialogService;
        $http: angular.IHttpService;
        $httpBackend: angular.IHttpBackendService;
        $injector: angular.auto.IInjectorService;
        $q: angular.IQService;
        $rootScope: angular.IRootScopeService;
        $window: angular.IWindowService;
        $scope: angular.IScope;
    }
}
declare module "base/PortalShell" {
    import * as AzurePortal from "base/AzurePortal";
    export class PortalShell extends AzurePortal.UserControlBase {
        constructor(title: string, portalService: AzurePortal.PortalService);
        /** Obsolete
         * start using this.panorama.title */
        title: string;
        /** Obsolete
         * start using this.panorama.avatarMenu.userAccount */
        user: {};
        /** Obsolete
         * start using this.panorama.startboard.tiles */
        tiles: AzurePortal.Tiles[];
        /** Obsolete
         * start using this.bladesNew.blades. */
        blades: any[];
        initialize(): void;
        setObsoleteLayoutProperites(): void;
    }
}
declare module "base/Startboard" {
    import * as AzurePortal from "base/AzurePortal";
    export class Startboard extends AzurePortal.UserControlBase {
        constructor(portalService: AzurePortal.PortalService);
        tiles: AzurePortal.Tiles;
    }
}
declare module "base/Tile" {
    import * as AzurePortal from "base/AzurePortal";
    export class Tile {
        constructor(title: string, bladePath: string, portalService: AzurePortal.PortalService);
        portalService: AzurePortal.PortalService;
        title: string;
        subTitle: string;
        bladePath: string;
        tileSize: AzurePortal.TileSizes;
        size: string;
        left: string;
        top: string;
        leftN: string;
        topN: string;
        clicked(): void;
    }
}
declare module "base/Tiles" {
    import * as AzurePortal from "base/AzurePortal";
    export class Tiles {
        showTiles: boolean;
        tiles: Array<any>;
        hideTileIfOnlyOne: boolean;
        private tileSizes;
        private nextLeft;
        private nextTop;
        private columnHeightMax;
        addTile(tile: AzurePortal.Tile): AzurePortal.Tile;
    }
}
declare module "base/TileSize" {
    import * as AzurePortal from "base/AzurePortal";
    export class TileSize {
        tileSizes: AzurePortal.TileSizes;
        width: number;
        height: number;
        constructor(tileSizes: AzurePortal.TileSizes, width: number, height: number);
        static getTileSizes(): Array<TileSize>;
    }
}
declare module "base/TileSizes" {
    /** The names are used in CSS for layouting, e.g. style='mini' */
    export enum TileSizes {
        small = 0,
        mini = 1,
        normal = 2,
        herowide = 3,
    }
}
declare module "base/UserAccount" {
    export class UserAccount {
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
declare module "base/UserControlBase" {
    import * as AzurePortal from "base/AzurePortal";
    export class UserControlBase {
        portalService: AzurePortal.PortalService;
        constructor(portalService: AzurePortal.PortalService);
    }
}
declare module "base/AzurePortal" {
    export { AvatarMenu } from "base/AvatarMenu";
    export { Blade } from "base/Blade";
    export { BladeArea } from "base/BladeArea";
    export { BladeData } from "base/BladeData";
    export { BladeDetail } from "base/BladeDetail";
    export { BladeList } from "base/BladeList";
    export { BladeNav } from "base/BladeNav";
    export { BladeNavItem } from "base/BladeNavItem";
    export { Debug } from "base/Debug";
    export { Exception } from "base/Exception";
    export { IAddBladeEventArgs } from "base/IAddBladeEventArgs";
    export { IBladeParameter } from "base/IBladeParameter";
    export { IException } from "base/IException";
    export { Panorama } from "base/Panorama";
    export { PortalService } from "base/PortalService";
    export { PortalShell } from "base/PortalShell";
    export { Startboard } from "base/Startboard";
    export { Tile } from "base/Tile";
    export { Tiles } from "base/Tiles";
    export { TileSize } from "base/TileSize";
    export { TileSizes } from "base/TileSizes";
    export { UserAccount } from "base/UserAccount";
    export { UserControlBase } from "base/UserControlBase";
}
declare module "base/AvatarMenu" {
    import * as AzurePortal from "base/AzurePortal";
    export class AvatarMenu extends AzurePortal.UserControlBase {
        constructor(portalService: AzurePortal.PortalService);
        userAccount: AzurePortal.UserAccount;
    }
}
declare module "baseservice/DataService" {
    import * as angular from 'angular';
    export module AzurePortalNg {
        class DataService {
            $http: angular.IHttpService;
            $q: angular.IQService;
            constructor($http: angular.IHttpService, $q: angular.IQService);
            getData(url: string): angular.IHttpPromise<any[]>;
        }
    }
}
declare module "portal/directives/blade/blade" {
}
