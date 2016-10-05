describe('AzurePortal.BladeData', function () {

    var sut: AzurePortal.BladeData;
    var portalService: AzurePortal.PortalService;

    beforeEach(angular.mock.module('azureportalng'));

    beforeEach(angular.mock.inject(function ($injector) {
        portalService = $injector.get('azurePortalNg.portalService');
        sut = new AzurePortal.BladeData(portalService, 'test-path', 'test-title');
    }));

    //#region Specs for Constructor

    it("Constructor successful", function () {
        expect(sut).not.toBe(null);
        //expect(sut.item).toBe(null);
        //expect(sut.items).not.toBe(null);
        //expect(sut.items.length).toBe(0);
    });

    //#endregion

    //#region Specs for Functions

    //#region getDataList

    //it("getDataList throws expection", function () {
    //    var exception = function () { sut.getDataList(); };

    //    expect(exception).toThrow(new Error('[AzurePortal.BladeData] \'onGetDataList\' is an abstract function. Define one in the derived class.'));
    //    expect(sut.statusbar).toBe('Daten laden...');
    //    expect(sut.statusbarClass).toBe('');
    //});

    //#endregion

    //#region getDataList

    //it("getDataDetail throws expection", function () {
    //    var exception = function () { sut.getDataDetail(); };

    //    expect(exception).toThrow(new Error('[AzurePortal.BladeData] \'onGetDataDetail\' is an abstract function. Define one in the derived class.'));
    //    expect(sut.statusbar).toBe('Daten laden...');
    //    expect(sut.statusbarClass).toBe('');
    //});

    //#endregion

    //#endregion
});