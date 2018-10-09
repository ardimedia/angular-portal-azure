import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPortalAzureComponent } from './angular-portal-azure.component';

describe('AngularPortalAzureComponent', () => {
  let component: AngularPortalAzureComponent;
  let fixture: ComponentFixture<AngularPortalAzureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPortalAzureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPortalAzureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
