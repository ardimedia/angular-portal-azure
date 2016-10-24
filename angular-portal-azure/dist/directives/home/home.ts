(function () {
    'use strict';

    angular.module('azureportalng').directive('azurePortalHome', ['$window', '$interpolate', azurePortalHome]);

    function azurePortalHome($window, $interpolate) {
        return {
            scope: { vm: '=options' },
            templateUrl: '/node_modules/angular-portal-azure/directives/home/home.html',
            link: function (scope, element, attrs, controller) {
            }
        };
    }
})();