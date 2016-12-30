namespace angularportalazure {
    let angularPortalGrid = {
        transclude: true,
        templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/bladegrid/bladegrid.html',
        controller: function () { },
        bindings: {
            vm: '='
        }
    };

    angular.module('angularportalazure').component('angularPortalGrid', angularPortalGrid);
}
