/// <reference types="angular" />

namespace Sample1 {
    class Detail1 extends angularportalazure.BladeDetail<any> {
        // #region Constructor

        static $inject = ['$scope', 'angularportalazure.portalService'];
        constructor($scope: angular.IScope, portalService: angularportalazure.PortalService) {
            super($scope, portalService, '/app/detail1/detail1.html', 'Detail-1', 'TypeScript based', 500);

            this.activate();
        }

        // #endregion

        // #region Methods

        onActivate(): angular.IHttpPromise<any> {
            let customer: Sample1.Customer = this.portalService.parameter.item;
            let customerId: number = this.portalService.parameter.itemId;

            if (customerId === 0) {
                this.portalService.parameter.action = 'selected';
                customerId = 1;
            }

            if (this.portalService.parameter.action === 'new') {
                this.item = customer;
                return null;
            } else if (this.portalService.parameter.action === 'selected') {
                this.item = new CustomerService().getById(customerId - 1);
                return null;
            }
        }

        // #endregion
    }

    angular.module('sample1App').controller('detail1', Detail1);
}
