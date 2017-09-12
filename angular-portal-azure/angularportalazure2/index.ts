/* README:
   - http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/
*/

import './css/apn';

import * as angular from 'angular';
import * as ngResource from 'angular-resource'
import * as ngDialog from 'ng-dialog'
import * as translate from 'angular-translate'
import * as angulartics from 'angulartics';

import { PortalService } from './domain/PortalService';
import AngularPortalBlade from './directives/blade/angular-portal-blade'
import AngularPortalGrid from './directives/grid/angular-portal-grid'
import AngularPortalHome from './directives/home/angular-portal-home'
import AngularPortalNav from './directives/nav/angular-portal-nav'

import dataService from './services/dataservice';

/** Define Angular module and its dependencies */
let angularModule = angular.module('angularportalazure', [
    ngResource,
    translate, //'pascalprecht.translate',
    'ngDialog',
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



angular.module('angularportalazure', [])
    .service('angularportalazure.portalService', PortalService);

angular.module('angularportalazure')
    .component('angularPortalBlade', AngularPortalBlade);

angular.module('angularportalazure')
    .component('angularPortalGrid', AngularPortalGrid);

angular.module('angularportalazure')
    .component('angularPortalHome', AngularPortalHome);

angular.module('angularportalazure')
    .component('angularPortalNav', AngularPortalNav);


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
