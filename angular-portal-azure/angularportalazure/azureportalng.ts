/// <reference types="angular" />

namespace angularportalazure {
    /** Define Angular module and its dependencies */
    let angularModule = angular.module('angularportalazure', [
        // Angular modules
        'ngResource',
        'ngDialog',
        'pascalprecht.translate',
        'angulartics',
        'angulartics.google.analytics'
    ]);

    /** Configure Angular: $translateProvider */
    angularModule.config(['$translateProvider',
        ($translateProvider: angular.translate.ITranslateProvider) => {
            $translateProvider.useSanitizeValueStrategy('escape');
            $translateProvider.fallbackLanguage('de');
            $translateProvider.use(readCookie('SAMPLE_TRANSLATE_LANG_KEY'));
        }]);

    angularModule.config([(): void => {
    }]);

    angularModule.run(() => {
    });

    /** Read cookie */
    function readCookie(cookieName: string) {
        let cookieNameEQ = cookieName + '=';
        let cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') { cookie = cookie.substring(1, cookie.length); }
            if (cookie.indexOf(cookieNameEQ) === 0) { return cookie.substring(cookieNameEQ.length, cookie.length); }
        }

        return null;
    }
}
