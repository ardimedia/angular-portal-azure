/// <reference types="angular" />
/// <reference types="angulartics" />
/// <reference path="bladearea.ts" />
/// <reference path="debug.ts" />
/// <reference path="bladeparameter.ts" />
/// <reference path="panorama.ts" />
/// <reference path="portalshell.ts" />

namespace angularportalazure {
    export class PortalService {
        //#region Constructor

        static $inject = ['$injector'];
        constructor($injector: any) { // any; // any should be: angular.auto.IInjectorService
            this.$injector = $injector;
            //this.$scope = $scope;

            this.$http = <angular.IHttpService>$injector.get('$http');
            this.$httpBackend = <angular.IHttpBackendService>$injector.get('$httpBackend');
            this.$q = <angular.IQService>$injector.get('$q');
            this.$rootScope = <angular.IRootScopeService>$injector.get('$rootScope');
            this.$window = <angular.IWindowService>$injector.get('$window');
            this.$analytics = $injector.get('$analytics');
            this.$translate = $injector.get('$translate');

            this.ngDialog = <any>$injector.get('ngDialog');
            this.ngDialog.openConfirm
        }

        //#endregion

        //#region Properties

        parameter: angularportalazure.BladeParameter = { action: 'none', itemId: 0 };
        $analytics: angulartics.IAnalyticsService;

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

        portalShell: angularportalazure.PortalShell;
        panorama: angularportalazure.Panorama;
        bladeArea: angularportalazure.BladeArea;

        //#endregion

        //#region NgDialogs

        ngDialog: any; // any should be: angular.dialog.IDialogService;

        //#endregion

        //#region Angular Services

        $http: angular.IHttpService;
        $httpBackend: angular.IHttpBackendService;
        $injector: angular.auto.IInjectorService;
        $q: angular.IQService;
        $rootScope: angular.IRootScopeService;
        $window: angular.IWindowService;
        $scope: angular.IScope;
        $translate: angular.translate.ITranslateService;

        //#endregion

        //#endregion

        //#region Methods

        //initialize(portalShell: PortalShell) {
        //    angularportalazure.Debug.write('[angularportalazure-debug] \'PortalService.initialize\' called.', [this, portalShell]);
        //    this.portalShell = portalShell;
        //    this.portalShell.setObsoleteLayoutProperites();
        //}

        //#endregion
    }

    angular.module('angularportalazure').service('angularportalazure.portalService', PortalService);
}
