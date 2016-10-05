/// <reference path="../node_modules/@types/angular/index.d.ts" />

namespace AzurePortalNg {
    var azurePortalNg: angular.IModule;

    (function () {
        /** Deinfe Angular module and its dependencies */
        azurePortalNg = angular.module('azureportalng', [
            // Angular modules
            'ngResource',
            'ngDialog'
        ]);

        azurePortalNg.config([function (): void {
            //AzurePortal.Debug.enable('[azureportalng-debug]');
            //AzurePortal.Debug.isWithObjects = false;
        }]);

        azurePortalNg.run(function () {
            //AzurePortal.Debug.write('[azureportalng-debug] \'azurePortalNg.run\' executing.', [this]);
        });
    })();
}