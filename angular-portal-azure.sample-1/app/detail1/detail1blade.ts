namespace Sample1 {
    function detail1Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/node_modules/angular-portal-azure/directives/blade/blade.html',
            controller: 'detail1',
            controllerAs: 'vm',
        };
    }

    angular.module('sample1App').directive('detail1Blade', [detail1Blade]);
}
