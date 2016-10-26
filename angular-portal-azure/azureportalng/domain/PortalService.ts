﻿/// <reference types="angular" />
/// <reference path="bladearea.ts" />
/// <reference path="debug.ts" />
/// <reference path="ibladeparameter.ts" />
/// <reference path="panorama.ts" />
/// <reference path="portalshell.ts" />

namespace azureportalng {
    export class PortalService {
        //#region Constructors

        constructor($injector: any) { // any; // any should be: angular.auto.IInjectorService
            azureportalng.Debug.write('[azureportalng-debug] \'PortalService\' constructor called.', [this, $injector]);

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

        parameter: azureportalng.IBladeParameter = { action: 'none', itemId: 0 };

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

        portalShell: azureportalng.PortalShell;
        panorama: azureportalng.Panorama;
        bladeArea: azureportalng.BladeArea;

        //#endregion

        //#region NgDialogs

        ngDialog: any; // any should be: angular.dialog.IDialogService;

        //#endregion

        //#region Angular Services

        $http: any; // any should be: angular.IHttpService;
        $httpBackend: any; // any should be: angular.IHttpBackendService;
        $injector: any; // any should be: angular.auto.IInjectorService
        $q: any; // any should be: angular.IQService;
        $rootScope: any; // any should be: angular.IRootScopeService;
        $window: any; // any should be: angular.IWindowService;
        $scope: any; // any should be: angular.IScope;

        //#endregion

        //#endregion

        //#region Methods

        //initialize(portalShell: PortalShell) {
        //    AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalService.initialize\' called.', [this, portalShell]);
        //    this.portalShell = portalShell;
        //    this.portalShell.setObsoleteLayoutProperites();
        //}

        //#endregion
    }

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('azureportalng').service('azureportalng.portalService', ['$injector', PortalService]);
    })();

    //#endregion
}
