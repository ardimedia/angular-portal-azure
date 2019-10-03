import { Exception } from "./exception";
export declare class StatusBar {
    statusBar: string;
    statusBarClass: string;
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
