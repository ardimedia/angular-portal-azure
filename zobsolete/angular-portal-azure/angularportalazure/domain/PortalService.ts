// #region Declarations

/// <reference types="angular" />
/// <reference types="angulartics" />
/// <reference path="areanotification.ts" />
/// <reference path="areablades.ts" />
/// <reference path="blade.ts" />
/// <reference path="bladeparameter.ts" />
/// <reference path="panorama.ts" />
/// <reference path="portalshell.ts" />

// #endregion

namespace angularportalazure {
    export class PortalService {
        // #region Constructor

        static $inject = ['$injector'];
        constructor($injector: angular.auto.IInjectorService) {
            this.$injector = $injector;

            this.$http = <angular.IHttpService>$injector.get('$http');
            this.$httpBackend = <angular.IHttpBackendService>$injector.get('$httpBackend');
            this.$q = <angular.IQService>$injector.get('$q');
            this.$rootScope = <angular.IRootScopeService>$injector.get('$rootScope');
            this.$window = <angular.IWindowService>$injector.get('$window');
            this.$analytics = <angulartics.IAnalyticsService>$injector.get('$analytics');
            this.$timeout = <angular.ITimeoutService>$injector.get('$timeout');
            this.$translate = <angular.translate.ITranslateService>$injector.get('$translate');

            this.ngDialog = <any>$injector.get('ngDialog');
        }

        // #endregion

        // #region Properties

        parameter: angularportalazure.BladeParameter = { action: 'none', itemId: 0 };
        $analytics: angulartics.IAnalyticsService;

        // #region ng.IModule properties

        //animate;
        //animation;
        //component;
        //config;
        //constant;
        //controller;
        //directive;
        //factory;
        //filter;
        //provider;
        //run;
        //service;
        //value;
        //decorator;
        //name;
        //requires;

        // #endregion

        // #region Visual components

        portalShell: angularportalazure.PortalShell;
        panorama: angularportalazure.Panorama;
        areaBlades: angularportalazure.AreaBlades;
        areaNotification: angularportalazure.AreaNotification; // is created and set in 'home' directive

        // #endregion

        // #region NgDialogs

        ngDialog: any; // any should be: angular.dialog.IDialogService;

        // #endregion

        // #region Angular Services

        $injector: angular.auto.IInjectorService;
        $http: angular.IHttpService;
        $httpBackend: angular.IHttpBackendService;
        $q: angular.IQService;
        $rootScope: angular.IRootScopeService;
        $window: angular.IWindowService;
        $timeout: angular.ITimeoutService;
        $translate: angular.translate.ITranslateService;

        // #endregion

        // #endregion
    }

    angular.module('angularportalazure').service('angularportalazure.portalService', PortalService);
}
