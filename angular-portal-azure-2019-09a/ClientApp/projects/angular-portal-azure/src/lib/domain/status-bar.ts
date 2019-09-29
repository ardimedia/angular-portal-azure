import { Exception } from "./exception";

export class StatusBar {
    // #region Properties

    statusBar: string = '';
    statusBarClass: string = '';

    // #endregion

    // #region Constructors

    // #endregion

    // #region Public Methods

    // #region Set StatusBar

    clearStatusBar() {
        this.statusBar = '';
        this.statusBarClass = '';
    }

    setStatusBar(text?: string, style?: string) {
        this.statusBar = text ? text : '';
        this.statusBarClass = style ? style : '';
    }

    setStatusBarCopyData() {
        this.statusBar = 'Daten kopieren...';
        this.statusBarClass = 'apa-statusbar-info';
    }

    setStatusBarLoadData() {
        this.statusBar = 'Daten laden...';
        this.statusBarClass = 'apa-statusbar-info';
    }

    setStatusBarSaveData() {
        this.statusBar = 'Daten speichern...';
        this.statusBarClass = 'apa-statusbar-info';
    }

    setStatusBarDeleteData() {
        this.statusBar = 'Daten löschen...';
        this.statusBarClass = 'apa-statusbar-info';
    }

    setStatusBarDeleteDataCanceled() {
        this.statusBar = 'Löschen abgebrochen.';
        this.statusBarClass = 'apa-statusbar-info';
    }

    setStatusBarInfo(text: string) {
        this.statusBar = text;
        this.statusBarClass = 'apa-statusbar-info';
    }

    setStatusBarError(text: string) {
        this.statusBar = text;
        this.statusBarClass = 'apa-statusbar-error';
    }

    setStatusBarNoDataFound() {
        this.statusBar = 'Keine Daten gefunden!';
        this.statusBarClass = 'apa-statusbar-error';
    }

    setStatusBarException(exception: Exception) {
        this.statusBar = Exception.getOneLineMessage(exception);
        this.statusBarClass = 'apa-statusbar-error';
    }

    // #endregion

    // #endregion
}
