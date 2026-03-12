import { BladeData } from './blade-data';
import { BladeNavItem } from './blade-nav-item';
import { PortalService } from './portal-service';

export class BladeDetail<T> extends BladeData<T> {
    // #region Constructor

    //static $inject = ['$scope', 'portalService'];
    constructor(portalService: PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {//$scope: any, 
        super(portalService, path, title, subtitle, width);//$scope, 

        this.commandNewText = 'neu';
        this.commandSaveText = 'speichern';
        this.commandDeleteText = 'lÃƒÆ’Ã‚Â¶schen';
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
