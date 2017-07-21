import * as angular from 'angular';

import { AreaBlades } from '../../domain/AreaBlades';
import { AreaNotification } from '../../domain/AreaNotification';
import { PortalService } from '../../domain/PortalService';

AngularPortalHomeController.$inject = ['$scope', 'angularportalazure.portalService'];
function AngularPortalHomeController($scope: angular.IScope, portalService: PortalService) {
    this.$onInit = () => {
        portalService.areaNotification = new AreaNotification($scope, portalService);
        portalService.areaBlades = new AreaBlades($scope, portalService);
    };
}

export default  {
    templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/home/home.html',
    controller: AngularPortalHomeController,
    bindings: {
        vm: '='
    }
};

