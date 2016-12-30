namespace angularportalazure {
    let angularPortalNav = {
        transclude: true,
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/nav/nav.html',
        controller: function () { },
        bindings: {
            vm: '='
        }
    };

    angular.module('angularportalazure').component('angularPortalNav', angularPortalNav);
}