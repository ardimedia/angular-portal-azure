/// <reference types="angular" />

var azureportalng: any; // any should be: angular.IModule

(function () {
    'use strict';

    /** Define Angular module and its dependencies */
    azureportalng = angular.module('azureportalng', [
    // Angular modules
        'ngResource',
        'ngDialog'
    ]);

    azureportalng.config([function (): void {
        //Debug.enable('[azureportalng-debug]');
        //Debug.isWithObjects = false;
    }]);

    azureportalng.run(function () {
        //Debug.write('[azureportalng-debug] \'azureportalng.run\' executing.', [this]);
    });
})();