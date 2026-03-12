import { BladeParameter } from './BladeParameter';
import { PortalShell } from './PortalShell';
import { Panorama } from './Panorama';
import { AreaBlades } from './AreaBlades';
import { AreaNotification } from './AreaNotification';

export class PortalService {
    // #region Constructor

    constructor(public title: string) { // $injector: angular.auto.IInjectorService
        //this.$injector = $injector;

        //this.$http = <any>$injector.get('$http'); // angular.IHttpService
        //this.$httpBackend = <any>$injector.get('$httpBackend'); // angular.IHttpBackendService
        //this.$q = <any>$injector.get('$q'); // angular.IQService
        //this.$rootScope = <any>$injector.get('$rootScope'); // angular.IRootScopeService
        //this.$window = <any>$injector.get('$window'); // angular.IWindowService
        //this.$analytics = <any>$injector.get('$analytics'); // angulartics.IAnalyticsService
        //this.$timeout = <any>$injector.get('$timeout'); // angular.ITimeoutService
        //this.$translate = <any>$injector.get('$translate'); // angular.translate.ITranslateService

        //this.ngDialog = <any>$injector.get('ngDialog');
    }

    // #endregion

    // #region Properties

    parameter: BladeParameter = { action: 'none', itemId: 0 };
    $analytics: any; // angulartics.IAnalyticsService

    // #region Visual components

    portalShell: PortalShell = new PortalShell(this, this.title);
    panorama: Panorama = new Panorama(this, this.title);
    areaBlades: AreaBlades = new AreaBlades(this);
    areaNotification: AreaNotification = new AreaNotification(this); // is created and set in 'home' directive

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
