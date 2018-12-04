import { BladeData } from './BladeData';
import { PortalService } from './PortalService';

export class BladeDetail<T> extends BladeData<T> {
    // #region Constructor

    constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 200) { // $scope: angular.IScope
        super(portalService, path, title, subtitle, width); // $scope, 

        this.commandNewText = 'neu';
        this.commandSaveText = 'speichern';
        this.commandDeleteText = 'löschen';
        this.commandCancelText = 'abbrechen';
    }

    // #endregion

    // #region Properties

    item: T = <T>{};

    // #endregion

    // #region Methods

    onCommandCancel(): void {
        this.close();
    }

    // #endregion
}
