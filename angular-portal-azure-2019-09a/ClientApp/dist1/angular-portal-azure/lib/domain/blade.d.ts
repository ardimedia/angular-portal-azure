import { PortalService } from './portal-service';
import { UserControlBase } from './user-control-base';
export declare class Blade extends UserControlBase {
    constructor(portalService: PortalService, path: string, title: string, subtitle?: string, width?: number);
    /** HACK: 2016-11-06/hp
    [angular-portal-blade] needs [this] as the controller.
    We don't know how to provide [this] to the directive.
    So we came up with this [vm] property.*/
    vm: any;
    isMaximize: boolean;
    isCommandMore: boolean;
    isNav: boolean;
    isGrid: boolean;
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
    formblade: any;
    private _path;
    path: string;
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
