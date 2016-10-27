namespace Sample1 {
    function list1Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
            controller: 'list1',
            controllerAs: 'vm',
        };
    }

    angular.module('sample1App').directive('list1Blade', [list1Blade]);
}
