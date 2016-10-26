namespace angularportalazure {
    function navGrid($window) {
        return {
            scope: { vm: '=viewModel' },
            templateUrl: '/node_modules/angular-portal-azure/directives/navgrid/navgrid.html',
            link: function (scope, element, attrs, controller) {
                angular.forEach(scope.vm.items, function (item) {
                    // Set some default values, depending on existing values
                    if (item.isVisible == undefined) { item.isVisible = true; }
                    if (item.title == undefined || item.title == '') { item.style = { cursor: 'default' }; }
                    if (item.bladePath == undefined || item.bladePath == '') { item.style = { cursor: 'default' }; }
                });
            }
        };
    }

    angular.module('angularportalazure').directive('navGrid', ['$window', navGrid]);
}
