/// <reference types="angular-portal-azure" />
/// <reference types="angular" />
//import * as angular from 'angular';
//import * as azureportalng from 'angular-portal-azure';

namespace Sample1 {
    class List1 extends azureportalng.BladeList {

        //#region Constructors

        constructor(portalService: azureportalng.PortalService) {
            super(portalService, '/app/list1/list1.html', 'List-1', 'TypeScript based', 315);

            this.activate();
        }

        //#endregion

        //#region Methods

        onActivate() {
            azureportalng.Debug.write('[sample1-debug] \'List1.onActivate\' called.', [this]);

            //return this.portalService.$http({ method: 'GET', url: '/customers' });
        }

        onCommandNew(): void {
            azureportalng.Debug.write('[sample1-debug] \'List1.onCommandNew\' called.', [this]);

            this.portalService.parameter.action = 'new';
            this.portalService.parameter.item = new Sample1.Customer(0, 'firstName', 'lastName');
            this.portalService.bladeArea.raiseAddBladeEvent({ path: '/Sample1/detail1/detail1.html', pathSender: this.blade.path });
        }

        onNavigateTo(customer: Sample1.Customer) {
            azureportalng.Debug.write('[sample1-debug] \'List1.onNavigateTo\' called.', [this, customer]);

            this.portalService.parameter.action = 'selected';
            this.portalService.parameter.item = customer;
            this.portalService.bladeArea.raiseAddBladeEvent({ path: '/Sample1/detail1/detail1.html', pathSender: this.blade.path });
        }

        //#endregion
    }

    angular.module('sample1App').controller('list1', ['azureportalng.portalService', List1]);
}
