describe('AzurePortal.BladeDetail', function () {

    var sut: AzurePortal.BladeData;
    var portalService: AzurePortal.PortalService;

    beforeEach(angular.mock.module('azureportalng'));

    beforeEach(angular.mock.inject(function ($injector) {
        portalService = $injector.get('azurePortalNg.portalService');
        sut = new AzurePortal.BladeData(portalService, 'test-path', 'test-title');
    }));

    //#region Specs for Constructor

    it("Constructor successful", function () {
        expect(true).toBe(sut !== null);
    });

    //#endregion
});