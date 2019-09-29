import { TestBed } from '@angular/core/testing';

import { BladeService } from './blade.service';

describe('BladeService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: BladeService = TestBed.get(BladeService);
        expect(service).toBeTruthy();
    });
});
