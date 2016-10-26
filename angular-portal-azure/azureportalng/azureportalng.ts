/// <reference types="angular" />

namespace azureportalng {
    /** Define Angular module and its dependencies */
    var angularModule = angular.module('azureportalng', [
        // Angular modules
        'ngResource',
        'ngDialog'
    ]);

    angularModule .config([function (): void {
        //Debug.enable('[azureportalng-debug]');
        //Debug.isWithObjects = false;
    }]);

    angularModule .run(function () {
        //Debug.write('[azureportalng-debug] \'azureportalng.run\' executing.', [this]);
    });
}