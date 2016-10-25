import * as angular from 'angular';
import { Debug } from '../../domain/Debug';
import { PortalService } from '../../domain/PortalService';

(function () {
    'use strict';

    angular.module('azureportalng').directive('azurePortalBlade', ['$window', 'azureportalng.portalService', azurePortalBlade]);

    function azurePortalBlade($window: ng.IWindowService, portalService: PortalService) {
        return {
            transclude: true,
            scope: { vm: '=vm' },
            restrict: 'E',
            templateUrl: '/node_modules/angular-portal-azure/directives/blade/blade.html',
            link: function (scope, element, attrs, controller) {
                Debug.write('[azureportalng-debug] \'directive:azurePortalBlade.link\' called.', [this, portalService]);

                //#region the following code makes sure, that a function scope.vm.close is available

                if (scope.vm === undefined) { scope.vm = {}; }
                if (scope.vm.close === undefined) {
                    scope.vm.close = function () {
                        Debug.write('[azureportalng-debug] \'directive:azurePortalBlade.close\' called.', [this, portalService]);
                        portalService.bladeArea.clearLastLevel();
                    }
                }

                //#endregion
            }
        };
    }
})();