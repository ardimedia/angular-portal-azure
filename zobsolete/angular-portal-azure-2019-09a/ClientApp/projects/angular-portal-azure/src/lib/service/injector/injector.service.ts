// https://devblogs.microsoft.com/premier-developer/angular-how-to-simplify-components-with-typescript-inheritance/

import { Injector } from '@angular/core';

export class InjectorService {
    // #region Properties

    private static injector: Injector = null;

    // #endregion

    // #region Public Methods

    static setInjector(injector: Injector) {
        InjectorService.injector = injector;
    }

    static getInjector(): Injector {
        return InjectorService.injector;
    }

    // #endregion
}       
