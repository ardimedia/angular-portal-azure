import { TestBed } from '@angular/core/testing';

import { AngularPortalAzureService } from './angular-portal-azure.service';

describe('AngularPortalAzureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularPortalAzureService = TestBed.get(AngularPortalAzureService);
    expect(service).toBeTruthy();
  });
});
