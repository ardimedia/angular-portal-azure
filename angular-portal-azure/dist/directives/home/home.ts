namespace angularportalazure {
    function angularPortalHome() {
        return {
            restrict: 'E',
            scope: {},
            bindToController: { vm: '=' },
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/home/home.html',
            link: function (scope, element, attrs, controller) { },
            controller: function () { },
            controllerAs: '$ctrl'
        };
    }

    angular.module('angularportalazure').directive('angularPortalHome', angularPortalHome);
}