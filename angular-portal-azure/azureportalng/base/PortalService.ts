import * as AzurePortal from './AzurePortal';
import * as angular from 'angular';

export class PortalService implements angular.IModule {
    //#region Constructors

    constructor($injector: angular.auto.IInjectorService) {
        AzurePortal.Debug.write('[azureportalng-debug] \'PortalService\' constructor called.', [this, $injector]);

        this.$injector = $injector;
        //this.$scope = $scope;

        this.$http = <angular.IHttpService>$injector.get('$http');
        this.$httpBackend = <angular.IHttpBackendService>$injector.get('$httpBackend');
        this.$q = <angular.IQService>$injector.get('$q');
        this.$rootScope = <angular.IRootScopeService>$injector.get('$rootScope');
        this.$window = <angular.IWindowService>$injector.get('$window');

        this.ngDialog = <any>$injector.get('ngDialog');
        this.ngDialog.openConfirm
    }

    //#endregion

    //#region Properties

    parameter: AzurePortal.IBladeParameter = { action: 'none', itemId: 0 };

    //#region ng.IModule properties

    animate;
    animation;
    component;
    config;
    constant;
    controller;
    directive;
    factory;
    filter;
    provider;
    run;
    service;
    value;
    decorator;
    name;
    requires;

    //#endregion

    //#region Visual components

    portalShell: AzurePortal.PortalShell;
    panorama: AzurePortal.Panorama;
    bladeArea: AzurePortal.BladeArea;

    //#endregion

    //#region NgDialogs

    ngDialog: angular.dialog.IDialogService;

    //#endregion

    //#region Angular Services

    $http: angular.IHttpService;
    $httpBackend: angular.IHttpBackendService;
    $injector: angular.auto.IInjectorService
    $q: angular.IQService;
    $rootScope: angular.IRootScopeService;
    $window: angular.IWindowService;
    $scope: angular.IScope;

    //#endregion

    //#endregion

    //#region Methods

    //initialize(portalShell: PortalShell) {
    //    AzurePortal.Debug.write('[azureportalng-debug] \'PortalService.initialize\' called.', [this, portalShell]);
    //    this.portalShell = portalShell;
    //    this.portalShell.setObsoleteLayoutProperites();
    //}

    //#endregion
}

(function () {
    angular.module('azureportalng').service('azurePortalNg.portalService', ['$injector', PortalService]);
})();
