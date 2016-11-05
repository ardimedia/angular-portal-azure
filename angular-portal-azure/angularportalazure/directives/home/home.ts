namespace angularportalazure {
    function angularPortalHome() {
        return {
            restrict: 'E',
            scope: {},
            bindToController: { vm: '=' },
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/home/home.html',
            link: function (scope, element, attrs, controller) {
                //console.log('angularPortalHome.link()');
                //console.log(this);
            },
            controller: function () {
                //console.log('angularPortalHome.controller()');
                //console.log(this);
            },
            controllerAs: 'ctrl'
        };
    }

    angular.module('angularportalazure').directive('angularPortalHome', angularPortalHome);
}