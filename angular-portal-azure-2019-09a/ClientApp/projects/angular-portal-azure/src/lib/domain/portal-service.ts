import { AppService } from '../service/app/app.service';


import { AreaBlades } from './area-blades';
import { AreaNotification } from './area-notification';
import { BladeParameter } from './blade-parameter';
import { Panorama } from './panorama';
import { PortalShell } from './portal-shell';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

export class PortalService {
    // #region Constructor

    //static $inject = ['$injector'];
    constructor() { // $injector: any, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
        //this.$injector = $injector;

        //this.$http = $injector.get('$http');
        //this.$httpBackend = $injector.get('$httpBackend');
        //this.$q = $injector.get('$q');
        //this.$rootScope = $injector.get('$rootScope');
        //this.$window = $injector.get('$window');
        //this.$analytics = $injector.get('$analytics');
        //this.$timeout = $injector.get('$timeout');
        //this.$translate = $injector.get('$translate');

        //this.ngDialog = <any>$injector.get('ngDialog');

        this.areaBlades = new AreaBlades(this);
        this.areaNotification = new AreaNotification(this);
    }

    // #endregion

    // #region Properties

    appService: AppService;
    parameter: BladeParameter = { action: 'none', itemId: 0 };
    $analytics: Angulartics2GoogleAnalytics;

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

    portalShell: PortalShell;
    panorama: Panorama = new Panorama(this, 'angular-portal-azure-module');
    areaBlades: AreaBlades;
    areaNotification: AreaNotification; // is created and set in 'home' directive

    // #endregion

    // #region NgDialogs

    ngDialog: any; // any should be: angular.dialog.IDialogService;

    // #endregion

    // #region Angular Services

    $injector: any; // angular.auto.IInjectorService;
    $http: any; // angular.IHttpService;
    $httpBackend: any; // angular.IHttpBackendService;
    $q: any; // angular.IQService;
    $rootScope: any; // angular.IRootScopeService;
    $window: any; // angular.IWindowService;
    $timeout: any; // angular.ITimeoutService;
    $translate: any; // angular.translate.ITranslateService;

    // #endregion

    // #endregion
}

// angular.module('angularportalazure').service('portalService', PortalService);
