/// <reference path="../../node_modules/@ardimedia/angular-portal-azure/apn.d.ts" />
/// <reference types="angular" />

namespace Sample1 {
    class Grid1 extends angularportalazure.BladeGrid {
        // #region Constructor

        static $inject = ['$scope', 'angularportalazure.portalService'];
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService) {
            super($scope, portalService, '/app/grid1/grid1.html', 'Grid-1', 'TypeScript based', 500);

            this.activate();
        }

        // #endregion

        // #region Methods

        onActivate() {
            angularportalazure.Debug.write('[sample1-debug] \'Grid1.onActivate\' called.', [this]);

            this.items = new CustomerService().getAll();
            this.statusBar = '';
        }

        onCommandNew(): void {
            angularportalazure.Debug.write('[sample1-debug] \'Grid1.onCommandNew\' called.', [this]);

            this.portalService.parameter.action = 'new';
            this.portalService.parameter.item = new Sample1.Customer(0, 'firstName', 'lastName');
            this.portalService.areaBlades.raiseAddBladeEvent({ path: '/app/detail1/detail1.html', pathSender: this.path });
        }

        onNavigateTo(customer: Sample1.Customer) {
            angularportalazure.Debug.write('[sample1-debug] \'Grid1.onNavigateTo\' called.', [this, customer]);

            this.portalService.parameter.action = 'selected';
            this.portalService.parameter.item = customer;
            this.portalService.parameter.itemId = customer.customerPkId;
            this.portalService.areaBlades.raiseAddBladeEvent({ path: '/app/detail1/detail1.html', pathSender: this.path });
        }

        // #endregion
    }

    angular.module('sample1App').controller('grid1', Grid1);
}
