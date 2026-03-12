export class Viewport {
    // #region Properties

    browserWindowInnerHeight: number;       // provided by the browser itself
    browserWindowInnerWidth: number;        // provided by the browser itself

    private fixedHeight: number = 0;       // contains the heights of all the fixed area in the browser | 20 is the scroller
    dynamicHeight: number = 0;              // calculated Height (browserWindowInnerHeight - fixedHeight)

    // #endregion

    // #region Public Methods

    setBrowserWindow(browserWindow: Window) {
        this.browserWindowInnerHeight = browserWindow.innerHeight;
        this.browserWindowInnerWidth = browserWindow.innerWidth;
        this.dynamicHeight = this.browserWindowInnerHeight - this.fixedHeight;
    }

    addFixedHeight(height: number) {
        this.fixedHeight = this.fixedHeight + height;
        this.dynamicHeight = this.browserWindowInnerHeight - this.fixedHeight;
    }

    log(): void {
        console.group('Viewport');
        console.log(`browserWindowInnerHeight: ${this.browserWindowInnerHeight}`);
        console.log(`browserWindowInnerWidth: ${this.browserWindowInnerWidth}`);
        console.log(`dynamicHeight: ${this.dynamicHeight}`);
        console.log(`fixedHeight: ${this.fixedHeight}`);
        console.groupEnd();
    }

    // #endregion
}
