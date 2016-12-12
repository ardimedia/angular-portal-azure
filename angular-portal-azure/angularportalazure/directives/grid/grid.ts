namespace angularportalazure {
    function grid($window) {
        return {
            restrict: 'E',
            scope: {},
            bindToController: { vm: '=' },
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/grid/grid.html',
            link: function (scope, element, attrs, controller) {
                //angular.forEach(controller.vm.items, function (item) {
                //    // Set some default values, depending on existing values
                //    if (item.isVisible == undefined) { item.isVisible = true; }
                //    if (item.title == undefined || item.title == '') { item.style = { cursor: 'default' }; }
                //    if (item.bladePath == undefined || item.bladePath == '') { item.style = { cursor: 'default' }; }
                //});
            },
            controller: function () { },
            controllerAs: '$ctrl'
        };
    }

    angular.module('angularportalazure').directive('grid', ['$window', grid]);
}
