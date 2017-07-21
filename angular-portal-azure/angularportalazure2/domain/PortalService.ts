import * as angular from 'angular';
import * as angulartics from 'angulartics';

import { BladeParameter } from './BladeParameter';
import { PortalShell } from './PortalShell';
import { Panorama } from './Panorama';
import { AreaBlades } from './AreaBlades';
import { AreaNotification } from './AreaNotification';

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
        this.$analytics = <angulartics.angulartics.IAnalyticsService>$injector.get('$analytics');
        this.$timeout = <angular.ITimeoutService>$injector.get('$timeout');
        this.$translate = <angular.translate.ITranslateService>$injector.get('$translate');

        this.ngDialog = <any>$injector.get('ngDialog');
    }

    // #endregion

    // #region Properties

    parameter: BladeParameter = { action: 'none', itemId: 0 };
    $analytics: angulartics.angulartics.IAnalyticsService;

    // #region ng.IModule properties

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

    // #endregion

    // #region Visual components

    portalShell: PortalShell;
    panorama: Panorama;
    areaBlades: AreaBlades;
    areaNotification: AreaNotification; // is created and set in 'home' directive

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
