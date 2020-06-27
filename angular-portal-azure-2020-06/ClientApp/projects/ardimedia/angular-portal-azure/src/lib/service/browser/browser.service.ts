// More information: https://brianflove.com/2018/01/11/angular-window-provider/

import { Injectable } from '@angular/core';

import { fromEvent, Observable } from 'rxjs';
import { throttleTime, startWith, map } from 'rxjs/operators';

import { Viewport } from './viewport';
//import { pipe } from '@angular/core/src/render3';

// #region Global JavaScript Functions

function getWindow(): any {
    return window;
}

// #endregion

@Injectable({
    providedIn: 'root' // singleton: should be provided in the application root
})
export class BrowserService {
    // #region Properties

    get browserWindow(): Window {
        return getWindow();
    }

    private viewport: Viewport;

    onResize: Observable<Viewport>;

    // #endregion

    // #region Constructors

    constructor() {
        this.viewport = new Viewport();
        this.viewport.addFixedHeight(40);
        this.viewport.setBrowserWindow(this.browserWindow); // Initialize values

        console.log('commented code at : BrowserService.constructor');
        //this.onResize = fromEvent(this.browserWindow, 'resize')
        //    .pipe(
        //        throttleTime(20),
        //        map((event) => {
        //            this.viewport.setBrowserWindow(<Window>event.currentTarget);
        //            return this.viewport;
        //        }),
        //        startWith(this.viewport),
        //        //tap(viewport => console.log(viewport))
        //    );
    }

    // #endregion
}
