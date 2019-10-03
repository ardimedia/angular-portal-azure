export declare class Viewport {
    browserWindowInnerHeight: number;
    browserWindowInnerWidth: number;
    private fixedHeight;
    dynamicHeight: number;
    setBrowserWindow(browserWindow: Window): void;
    addFixedHeight(height: number): void;
    log(): void;
}
