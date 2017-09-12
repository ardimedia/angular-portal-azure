"use strict";
/* README:
   - http://angular-tips.com/blog/2015/06/using-angular-1-dot-x-with-es6-and-webpack/
*/
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/apn");
var angular = require("angular");
var ngResource = require("angular-resource");
var translate = require("angular-translate");
var PortalService_1 = require("./domain/PortalService");
var angular_portal_blade_1 = require("./directives/blade/angular-portal-blade");
var angular_portal_grid_1 = require("./directives/grid/angular-portal-grid");
var angular_portal_home_1 = require("./directives/home/angular-portal-home");
var angular_portal_nav_1 = require("./directives/nav/angular-portal-nav");
/** Define Angular module and its dependencies */
var angularModule = angular.module('angularportalazure', [
    ngResource,
    translate,
    'ngDialog',
    'angulartics',
    'angulartics.google.analytics'
]);
/** Configure Angular: $translateProvider */
angularModule.config(['$translateProvider',
    function ($translateProvider) {
        $translateProvider.useSanitizeValueStrategy('escape');
        $translateProvider.fallbackLanguage('de');
        $translateProvider.use(readCookie('SAMPLE_TRANSLATE_LANG_KEY'));
    }]);
angularModule.config([function () {
    }]);
angular.module('angularportalazure', [])
    .service('angularportalazure.portalService', PortalService_1.PortalService);
angular.module('angularportalazure')
    .component('angularPortalBlade', angular_portal_blade_1.default);
angular.module('angularportalazure')
    .component('angularPortalGrid', angular_portal_grid_1.default);
angular.module('angularportalazure')
    .component('angularPortalHome', angular_portal_home_1.default);
angular.module('angularportalazure')
    .component('angularPortalNav', angular_portal_nav_1.default);
angularModule.run(function () {
});
/** Read cookie */
function readCookie(cookieName) {
    var cookieNameEQ = cookieName + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(cookieNameEQ) === 0) {
            return cookie.substring(cookieNameEQ.length, cookie.length);
        }
    }
    return null;
}
