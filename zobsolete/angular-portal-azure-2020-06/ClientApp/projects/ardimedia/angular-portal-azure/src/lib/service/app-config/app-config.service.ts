import { Injectable, Inject } from '@angular/core';
import { AppConfig } from '../../domain/app-config';

@Injectable({
    providedIn: 'root' // singleton: should be provided in the application root
})
export class AppConfigService {
    // #region Properties

    // #endregion

    // #region Constructors

    constructor(public appConfig: AppConfig) {
    }

    // #endregion

    // #region Public Methods

    // #endregion
}
