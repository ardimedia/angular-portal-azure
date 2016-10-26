/// <reference types="angular" />

namespace angularportalazure {
    /** Define Angular module and its dependencies */
    var angularModule = angular.module('angularportalazure', [
        // Angular modules
        'ngResource',
        'ngDialog'
    ]);

    angularModule .config([function (): void {
        //Debug.enable('[angularportalazure-debug]');
        //Debug.isWithObjects = false;
    }]);

    angularModule .run(function () {
        //Debug.write('[angularportalazure-debug] \'angularportalazure.run\' executing.', [this]);
    });
}