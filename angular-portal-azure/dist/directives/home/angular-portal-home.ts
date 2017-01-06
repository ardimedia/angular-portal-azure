namespace angularportalazure {
    AngularPortalHomeController.$inject = ['$scope', 'angularportalazure.portalService'];
    function AngularPortalHomeController($scope: angular.IScope, portalService: angularportalazure.PortalService) {
        this.$onInit = () => {
            portalService.areaNotification = new angularportalazure.AreaNotification($scope, portalService);
            portalService.areaBlades = new angularportalazure.AreaBlades($scope, portalService);
        };
    }

    let angularPortalHome = {
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/home/home.html',
        controller: AngularPortalHomeController,
        bindings: {
            vm: '='
        }
    };

    angular.module('angularportalazure').component('angularPortalHome', angularPortalHome);
}
