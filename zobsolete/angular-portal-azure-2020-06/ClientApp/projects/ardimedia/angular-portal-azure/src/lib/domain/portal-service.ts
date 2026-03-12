import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
//import { Angulartics2Module } from 'angulartics2';

import { AppService } from '../service/app/app.service';
import { AreaBlades } from './area-blades';
import { AreaNotification } from './area-notification';
import { BladeParameter } from './blade-parameter';
import { Panorama } from './panorama';
import { PortalShell } from './portal-shell';

export class PortalService {
  // #region Constructor

  //static $inject = ['$injector'];
  //constructor($injector: angular.auto.IInjectorService) {
  constructor() {
    //this.$injector = $injector;

    //this.$http = <angular.IHttpService>$injector.get('$http');
    //this.$httpBackend = <angular.IHttpBackendService>$injector.get('$httpBackend');
    //this.$q = <angular.IQService>$injector.get('$q');
    //this.$rootScope = <angular.IRootScopeService>$injector.get('$rootScope');
    //this.$window = <angular.IWindowService>$injector.get('$window');
    //this.$analytics = <angulartics.IAnalyticsService>$injector.get('$analytics');
    //this.$timeout = <angular.ITimeoutService>$injector.get('$timeout');
    //this.$translate = <angular.translate.ITranslateService>$injector.get('$translate');

    //this.ngDialog = <any>$injector.get('ngDialog');
  }

  // #endregion

  // #region Properties

  appService: AppService;

  parameter: BladeParameter = { action: 'none', itemId: 0 };
  //$analytics: angulartics.IAnalyticsService;
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
  panorama: Panorama;
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
