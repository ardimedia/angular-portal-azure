describe('angularportalazure.UserControlBase', function () {

    var sut: angularportalazure.UserControlBase;
    var portalService: angularportalazure.PortalService;

    beforeEach(angular.mock.module('angularportalazure'));

    beforeEach(angular.mock.inject(function ($injector) {
        portalService = $injector.get('angularportalazure.portalService');
        sut = new angularportalazure.UserControlBase(portalService);
    }));

    //#region Specs for Constructor

    it("constructed successfully", function () {
        expect(sut).not.toBe(null);
        expect(sut.portalService).not.toBe(null);
    });

    //#endregion
});