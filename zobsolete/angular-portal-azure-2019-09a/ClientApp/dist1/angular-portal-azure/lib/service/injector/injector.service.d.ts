import { Injector } from '@angular/core';
export declare class InjectorService {
    private static injector;
    static setInjector(injector: Injector): void;
    static getInjector(): Injector;
}
