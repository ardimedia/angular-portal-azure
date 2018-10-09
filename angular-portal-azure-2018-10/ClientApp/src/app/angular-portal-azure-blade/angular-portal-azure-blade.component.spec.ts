import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPortalAzureBladeComponent } from './angular-portal-azure-blade.component';

describe('AngularPortalAzureBladeComponent', () => {
  let component: AngularPortalAzureBladeComponent;
  let fixture: ComponentFixture<AngularPortalAzureBladeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPortalAzureBladeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPortalAzureBladeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
