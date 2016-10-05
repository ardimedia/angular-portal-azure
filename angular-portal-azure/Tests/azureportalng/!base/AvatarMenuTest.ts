describe('AzurePortal.AvatarMenu', function () {

    var sut: AzurePortal.AvatarMenu;
    var portalService: AzurePortal.PortalService;

    beforeEach(angular.mock.module('azureportalng'));

    beforeEach(angular.mock.inject(function ($injector) {
        portalService = $injector.get('azurePortalNg.portalService');
        sut = new AzurePortal.AvatarMenu(portalService);
    }));

    //#region Specs for Constructor

    it("Constructor successful", function () {
        //var portalService = <AzurePortal.PortalService>azurePortalNg.service('azurePortalNg.portalService');
        //var sut = new AzurePortal.AvatarMenu(portalService);

        expect(sut).not.toBe(null);
        expect(sut instanceof AzurePortal.AvatarMenu).toBe(true);
    });

    //#endregion
});