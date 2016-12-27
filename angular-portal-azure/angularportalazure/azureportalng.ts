/// <reference types="angular" />

namespace angularportalazure {
    /** Define Angular module and its dependencies */
    var angularModule = angular.module('angularportalazure', [
        // Angular modules
        'ngResource',
        'ngDialog',
        'pascalprecht.translate',
        'angulartics',
        'angulartics.google.analytics'
    ]);

    /** Configure Angular: $translateProvider */
    angularModule.config(['$translateProvider',
        function ($translateProvider: angular.translate.ITranslateProvider) {
            $translateProvider.useSanitizeValueStrategy('escape');
            //$translateProvider.useUrlLoader('/api/translation/get');
            $translateProvider.fallbackLanguage('de');
            $translateProvider.use(readCookie('SAMPLE_TRANSLATE_LANG_KEY'));
        }]);

    angularModule.config([function (): void {
        //Debug.enable('[angularportalazure-debug]');
        //Debug.isWithObjects = false;
    }]);

    angularModule.run(function () {
        //Debug.write('[angularportalazure-debug] \'angularportalazure.run\' executing.', [this]);
    });


    /** Read cookie */
    function readCookie(cookieName: string) {
        var cookieNameEQ = cookieName + "=";
        var cookies = document.cookie.split(';');

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            while (cookie.charAt(0) == ' ') { cookie = cookie.substring(1, cookie.length) };
            if (cookie.indexOf(cookieNameEQ) == 0) { return cookie.substring(cookieNameEQ.length, cookie.length) };
        }

        return null;
    }
}