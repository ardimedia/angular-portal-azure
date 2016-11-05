namespace angularportalazure {
    function nav($window) {
        return {
            restrict: 'E',
            scope: {},
            bindToController: { vm: '=' },
            templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/nav/nav.html',
            link: function (scope, element, attrs, controller) {
                //console.log('nav.link()');
                //console.log(this);
                angular.forEach(controller.vm.navItems, function (item) {
                    // Set some default values, depending on existing values
                    if (item.isVisible == undefined) { item.isVisible = true; }
                    if (item.title == undefined || item.title == '') { item.style = { cursor: 'default' }; }
                    if (item.bladePath == undefined || item.bladePath == '') { item.style = { cursor: 'default' }; }
                });
            },
            controller: function () {
                //console.log('nav.controller()');
                //console.log(this);
            },
            controllerAs: 'ctrl'
        };
    }

    angular.module('angularportalazure').directive('nav', ['$window', nav]);
}