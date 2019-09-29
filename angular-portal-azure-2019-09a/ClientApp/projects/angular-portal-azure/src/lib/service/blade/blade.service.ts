import { Injectable } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

import { filter } from "rxjs/operators";

import { AppConfigService } from '../app-config/app-config.service';

import { Blade } from '../../domain/blade/blade';

@Injectable()
export class BladeService {
    // #region Properties

    bladeId: number = 0;

    // #endregion

    // #region Constructors

    constructor(private appConfigService: AppConfigService, private router: Router) {
        // #region Handle router events

        this.router.events
            .pipe(
                // The "events" stream contains all the navigation events. For this demo,
                // though, we only care about the NavigationStart event as it contains
                // information about what initiated the navigation sequence.
                filter((event: NavigationEvent) => {
                    return (event instanceof NavigationStart);
                })
            )
            .subscribe(
                (event: NavigationStart) => {
                    console.group('NavigationStart');
                    //// Every navigation sequence is given a unique ID. Even "popstate"
                    //// navigations are really just "roll forward" navigations that get
                    //// a new, unique ID.
                    //console.log("navigation id:", event.id);
                    //console.log("route:", event.url);
                    //// The "navigationTrigger" will be one of:
                    //// --
                    //// - imperative (ie, user clicked a link).
                    //// - popstate (ie, browser controlled change such as Back button).
                    //// - hashchange
                    //// --
                    //// NOTE: I am not sure what triggers the "hashchange" type.
                    //console.log("trigger:", event.navigationTrigger);

                    // This "restoredState" property is defined when the navigation
                    // event is triggered by a "popstate" event (ex, back / forward
                    // buttons). It will contain the ID of the earlier navigation event
                    // to which the browser is returning.
                    // --
                    // CAUTION: This ID may not be part of the current page rendering.
                    // This value is pulled out of the browser; and, may exist across
                    // page refreshes.
                    if (event.restoredState) {
                        console.log("restoring navigation id:", event.restoredState.navigationId);
                        if (event.url.indexOf('(blade') < 0) {
                            console.log('reset appboard visibility')
                            this.appConfigService.appConfig.appboard.isVisible = true;
                        } else {
                            this.appConfigService.appConfig.blades.pop();
                        }
                    }

                    console.groupEnd();
                });

        // #endregion
    }

    // #endregion

    // #region Public Methods

    navigateTo(routerPath: string): void {
        this.router.config.forEach((route) => {
            if (route.path === routerPath) {
                this.bladeId = this.bladeId + 1;
                route.outlet = 'blade' + this.bladeId;
                this.appConfigService.appConfig.blades.push({ bladeId: 'blade' + this.bladeId } as Blade);
                this.router.navigate([{ outlets: { ['blade' + this.bladeId]: [routerPath] } }]);
            }
        });

        if (this.appConfigService.appConfig.blades.length > 0) {
            this.appConfigService.appConfig.appboard.isVisible = false;
        }
    }

    // #endregion
}
