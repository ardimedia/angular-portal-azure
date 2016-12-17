namespace angularportalazure {
    //nav.$inject = ['angularportalazure.portalService'];
    //function nav(portalService: angularportalazure.PortalService) {
    //    return {
    //        restrict: 'E',
    //        transclude: true,
    //        scope: {},
    //        bindToController: { vm: '=' },
    //        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/nav/nav.html',
    //        link: function (scope, element, attrs, controller) {
    //            angular.forEach(controller.items, function (item) {
    //                // Set some default values, depending on existing values
    //                if (item.isVisible == undefined) { item.isVisible = true; }
    //                if (item.title == undefined || item.title == '') { item.style = { cursor: 'default' }; }
    //                if (item.bladePath == undefined || item.bladePath == '') { item.style = { cursor: 'default' }; }
    //            });
    //        },
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

    //angular.module('angularportalazure').directive('nav', nav);

    var nav = {
        transclude: true,
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/nav/nav.html',
        controller: function () { },
        bindings: {
            vm: '='
        }
    };

    angular.module('angularportalazure').component('nav', nav);
}