// #region Declarations

/// <reference path="bladedata.ts" />
/// <reference path="portalservice.ts" />

// #endregion

namespace angularportalazure {
    export class BladeDetail<T> extends angularportalazure.BladeData<T> {
        // #region Constructor

        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService, path: string, title: string, subtitle: string = '', width: number = 200) {
            super($scope, portalService, path, title, subtitle, width);

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
}
