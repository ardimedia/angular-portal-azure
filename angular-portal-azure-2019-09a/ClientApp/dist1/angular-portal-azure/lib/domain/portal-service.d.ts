import { AppService } from '../service/app/app.service';
import { AreaBlades } from './area-blades';
import { AreaNotification } from './area-notification';
import { BladeParameter } from './blade-parameter';
import { Panorama } from './panorama';
import { PortalShell } from './portal-shell';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
export declare class PortalService {
    constructor();
    appService: AppService;
    parameter: BladeParameter;
    $analytics: Angulartics2GoogleAnalytics;
    portalShell: PortalShell;
    panorama: Panorama;
    areaBlades: AreaBlades;
    areaNotification: AreaNotification;
    ngDialog: any;
    $injector: any;
    $http: any;
    $httpBackend: any;
    $q: any;
    $rootScope: any;
    $window: any;
    $timeout: any;
    $translate: any;
}
