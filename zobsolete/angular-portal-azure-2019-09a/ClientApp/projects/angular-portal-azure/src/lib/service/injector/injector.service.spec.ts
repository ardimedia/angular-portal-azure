import { TestBed } from '@angular/core/testing';

import { InjectorService } from './injector.service';

describe('InjectorService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: InjectorService = TestBed.get(InjectorService);
        expect(service).toBeTruthy();
    });
});
