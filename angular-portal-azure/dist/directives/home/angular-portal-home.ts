namespace angularportalazure {
    //function angularPortalHome() {
    //    return {
    //        restrict: 'E',
    //        scope: {},
    //        bindToController: { vm: '=' },
    //        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/home/home.html',
    //        link: function (scope, element, attrs, controller) { },
    //        controller: function () { },
    //        controllerAs: '$ctrl'
    //    };
    //}

    //angular.module('angularportalazure').directive('angularPortalHome', angularPortalHome);

    AngularPortalHomeController.$inject = ['$scope', 'angularportalazure.portalService'];
    function AngularPortalHomeController($scope: angular.IScope, portalService: angularportalazure.PortalService) {
        this.$onInit = function () {
            portalService.areaNotification = new angularportalazure.AreaNotification($scope, portalService);
            portalService.areaBlades = new angularportalazure.AreaBlades($scope, portalService);
        };
    }

    var angularPortalHome = {
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/home/home.html',
        controller: AngularPortalHomeController,
        bindings: {
            vm: '='
        }
    };

    angular.module('angularportalazure').component('angularPortalHome', angularPortalHome);
}