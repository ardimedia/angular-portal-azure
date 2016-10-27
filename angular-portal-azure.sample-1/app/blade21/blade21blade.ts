namespace Sample1 {
    function blade21Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
            controller: 'blade21',
            controllerAs: 'vm',
        };
    }

    angular.module('sample1App').directive('blade21Blade', [blade21Blade]);
}
