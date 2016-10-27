﻿/// <reference types="angular" />

namespace Sample1 {
    class Detail1 extends angularportalazure.BladeDetail {
        //#region Constructors

        constructor(portalService: angularportalazure.PortalService) {
            super(portalService, '/app/detail1/detail1.html', 'Detail-1', 'TypeScript based', 415);

            this.activate();
        }

        //#endregion

        //#region Methods

        onActivate(): angular.IHttpPromise<any> {
            var customer: Sample1.Customer = this.portalService.parameter.item;

            if (this.portalService.parameter.action === 'new') {
                this.item = customer;
                return null;
            } else if (this.portalService.parameter.action === 'selected') {
                return this.portalService.$http({ method: 'GET', url: '/customer/' + customer.customerPkId });
            }
        }

        //#endregion
    }

    angular.module('sample1App').controller('detail1', ['angularportalazure.portalService', Detail1]);
}
