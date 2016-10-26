describe('angularportalazure.BladeDetail', function () {

    var sut: angularportalazure.BladeData;
    var portalService: angularportalazure.PortalService;

    beforeEach(angular.mock.module('angularportalazure'));

    beforeEach(angular.mock.inject(function ($injector) {
        portalService = $injector.get('angularportalazure.portalService');
        sut = new angularportalazure.BladeData(portalService, 'test-path', 'test-title');
    }));

    //#region Specs for Constructor

    it("Constructor successful", function () {
        expect(true).toBe(sut !== null);
    });

    //#endregion
});