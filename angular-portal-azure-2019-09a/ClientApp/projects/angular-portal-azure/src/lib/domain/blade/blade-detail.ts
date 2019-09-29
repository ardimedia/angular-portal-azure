//import { MainService } from './../../service/main/main.service';
import { BladeData } from './blade-data';

export class BladeDetail<T> extends BladeData<T>   {
    // #region Properties

    item: T = <T>{};

    // #endregion

    // #region Constructors

    // mainService: MainService, 
    constructor(path: string, title: string, subtitle: string = '', width: number = 300) {
        super(path, title, subtitle, width);

        this.commandNewText = 'neu';
        this.commandSaveText = 'speichern';
        this.commandDeleteText = 'löschen';
        this.commandCancelText = 'abbrechen';
    }

    // #endregion

    // #region Public Methods

    onCommandCancel(): void {
        this.close();
    }

    // #endregion

    // #region Private Methods

    // #endregion
}
