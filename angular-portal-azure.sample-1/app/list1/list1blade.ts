﻿(function () {
    'use strict';

    angular.module('sample1App').directive('list1Blade', [list1Blade]);

    function list1Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/node_modules/angular-portal-azure/directives/blade/blade.html',
            controller: 'list1',
            controllerAs: 'vm',
        };
    }
})();
