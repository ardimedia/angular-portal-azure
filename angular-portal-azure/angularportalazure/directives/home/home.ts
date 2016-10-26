namespace angularportalazure {
    function azurePortalHome($window, $interpolate) {
        return {
            scope: { vm: '=options' },
            templateUrl: '/node_modules/angular-portal-azure/directives/home/home.html',
            link: function (scope, element, attrs, controller) {
            }
        };
    }

    angular.module('angularportalazure').directive('azurePortalHome', ['$window', '$interpolate', azurePortalHome]);
}