namespace angularportalazure {
    //grid.$inject = ['angularportalazure.portalService'];
    //function grid(portalService: angularportalazure.PortalService) {
    //    return {
    //        restrict: 'E',
    //        transclude: true,
    //        scope: {},
    //        bindToController: { vm: '=' },
    //        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/grid/grid.html',
    //        link: function (scope, element, attrs, controller) { },
    //        controller: function () {
    //            //this.$onInit = function () {
    //            //    this.close = function () {
    //            //        portalService.bladeArea.clearLastLevel();
    //            //    };
    //            //};
    //        },
    //        controllerAs: '$ctrl'
    //    };
    //}

    //angular.module('angularportalazure').directive('grid', grid);

    var grid = {
        transclude: true,
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/grid/grid.html',
        controller: function () { },
        bindings: {
            vm: '='
        }
    };

    angular.module('angularportalazure').component('grid', grid);
}
