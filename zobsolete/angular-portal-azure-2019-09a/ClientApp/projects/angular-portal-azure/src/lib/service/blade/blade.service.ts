import { Injectable } from '@angular/core';
import { Router, NavigationStart, Event as EventX } from '@angular/router';

import { filter } from "rxjs/operators";

import { AppService } from '../app/app.service';
import { AppConfigService } from '../app-config/app-config.service';

import { Blade } from '../../domain/blade/blade';

import { PortalService } from '../../domain/portal-service';

@Injectable()
export class BladeService {
    // #region Properties

    bladeId: number = 0;

    // #endregion

    // #region Constructors

    constructor(private appConfigService: AppConfigService, private router: Router, private portalService: PortalService, private appService: AppService) {
        // #region Handle router events

        this.router.events
            .pipe(
                // The "events" stream contains all the navigation events. For this demo,
                // though, we only care about the NavigationStart event as it contains
                // information about what initiated the navigation sequence.
                filter((event: EventX) => {
                    return (event instanceof NavigationStart);
                })
            )
            .subscribe(
                (event: (NavigationStart)) => {
                    // See [https://angular.io/api/router/Event] for routes sequences

                    // NavigationStart
                    if (event instanceof NavigationStart) {
                        // console.log({ NavigationStart: '', event: event, eventUrl: event.url, eventRestoreState: event.restoredState, routerConfig: this.router.config });
                        this.fixRouterConfigBladeOutlet(event);
                        this.handleRestoreStateEventForBlades(event);
                    }

                    console.groupEnd();
                });

        // #endregion
    }

    // #endregion

    // #region Public Methods

    /**
     * 
     */
    navigateTo(routerToPath: string): void {
        let isRouteMatchFound = false;

        // Process all route configuration entries
        this.router.config.forEach((routeConfig) => {
            // Try to match a configured route, with the one requested
            // (forEach cannot break out (stop execution), therefore we check for isRouteMatchFound for no further processing)
            if (routeConfig.path === routerToPath && !isRouteMatchFound) {
                this.bladeId = this.bladeId + 1; // create a unique id
                const outletId = 'blade' + this.bladeId;
                this.appConfigService.appConfig.blades.push({ bladeId: outletId } as Blade);
                routeConfig.outlet = outletId; // set outlet, so the route knows, in which router-outlet it should be shown

                // Navigate to the route
                this.router.navigate([{ outlets: { [outletId]: [routerToPath] } }]);
                //this.router.navigate([{ outlets: { primary: ['appboard'], [outletId]: [routerToPath] } }]);

                isRouteMatchFound = true;
            }
        });

        // No match found
        if (!isRouteMatchFound) {
            console.log('XXXXXX');

            if (this.appConfigService.appConfig.blades.length > 0) {
                this.appConfigService.appConfig.appboard.isVisible = false;
            } else {
                this.appConfigService.appConfig.appboard.isVisible = true;
            }

            if (this.portalService.areaBlades.blades.length == 0) {
                this.portalService.panorama.isVisible = true;
                this.portalService.panorama.startboard.tiles.showTiles = true;
            }

            this.router.navigate(['/' + routerToPath]);
        }
    }

    // #endregion

    // #region Private Methods

    /**
     * Fix router configuration for blades
     * When a blade is added to the router, the route for the blade is updated with an outlet identifier (e.g. blade1),
     * see above in the navigateTo function.
     * Because this identifier is not persistent and may changes between sessions, we need to add the outlet identifier
     * to the route configuration, so that a corresponding URL can be reconstructed.
     * */
    private fixRouterConfigBladeOutlet(event: NavigationStart): void {
        // TODO:2019-09-30/hp: Not yet finished.
        //                     Processing multiple blade outlets(https://localhost:44398/appboard(blade2:counter//blade1:fetchdata)).
        //                     We need to parse event.url and find all blade outlets.
        //                     At the moment only the first one is found and processed.
        const outlet1 = event.url.substring(10, 16);
        const path1 = event.url.substring(17).replace(')', '');
        //this.router.routerState.root.children.forEach((child) => {
        //    if (child.outlet.startsWith('blade')) {
        //        console.log({ child: child });
        this.router.config.forEach((config) => {
            if (config.path == path1
                && config.outlet === undefined) {
                config.outlet = outlet1;
                this.appConfigService.appConfig.blades.push({ bladeId: outlet1 } as Blade);
            }
        });
        //    }
        //});
    }

    /**
     * 
     */
    private handleRestoreStateEventForBlades(event: NavigationStart): void {
        // The "restoredState" property is set/defined when the navigation
        // event is triggered by a "popstate" event (e.g.: back / forward buttons).
        // It will contain the ID of the earlier navigation event
        // to which the browser is returning.
        // CAUTION: This ID may not be part of the current page rendering.
        // This value is pulled out of the browser; and, may exist across page refreshes.
        if (event.restoredState) {
            if (event.url.indexOf('(blade') < 0) {
                console.log('no more blades, reset appboard visibility')
                this.appConfigService.appConfig.appboard.isVisible = true;

                this.portalService.panorama.isVisible = true;
                this.portalService.panorama.startboard.tiles.showTiles = true;
            } else {
                console.log('remove latest blade')
                this.appConfigService.appConfig.blades.pop();
            }
        }
    }

    // #endregion
}
