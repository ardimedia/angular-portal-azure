/// <reference types="angular" />

namespace Sample1 {
    class Detail1 extends angularportalazure.BladeDetail {
        //#region Constructor

        static $inject = ['angularportalazure.portalService'];
        constructor(portalService: angularportalazure.PortalService) {
            super(portalService, '/app/detail1/detail1.html', 'Detail-1', 'TypeScript based', 500);

            this.activate();
        }

        //#endregion

        //#region Methods

        onActivate(): angular.IHttpPromise<any> {
            var customer: Sample1.Customer = this.portalService.parameter.item;
            var customerId: number = this.portalService.parameter.itemId;

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

        //#endregion
    }

    angular.module('sample1App').controller('detail1', Detail1);
}
