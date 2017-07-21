import * as angular from 'angular';

import { PortalService } from '../../domain/PortalService';

AngularPortalBladeController.$inject = ['angularportalazure.portalService'];
function AngularPortalBladeController(portalService: PortalService) {
    this.$onInit = () => {
        this.close = () => { };
    };
}

export default {
    transclude: true,
    templateUrl: '/node_modules/@ardimedia/angular-portal-azure/directives/blade/blade.html',
    controller: AngularPortalBladeController,
    bindings: {
        vm: '='
    }
};

