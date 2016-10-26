describe('angularportalazure.AvatarMenu', function () {

    var sut: angularportalazure.AvatarMenu;
    var portalService: angularportalazure.PortalService;

    beforeEach(angular.mock.module('angularportalazure'));

    beforeEach(angular.mock.inject(function ($injector) {
        portalService = $injector.get('angularportalazure.portalService');
        sut = new angularportalazure.AvatarMenu(portalService);
    }));

    //#region Specs for Constructor

    it("Constructor successful", function () {
        //var portalService = <angularportalazure.PortalService>angularportalazure.service('angularportalazure.portalService');
        //var sut = new angularportalazure.AvatarMenu(portalService);

        expect(sut).not.toBe(null);
        expect(sut instanceof angularportalazure.AvatarMenu).toBe(true);
    });

    //#endregion
});