import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppboardComponent } from './appboard.component';

describe('AppboardComponent', () => {
  let component: AppboardComponent;
  let fixture: ComponentFixture<AppboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
