import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorValidateComponent } from './error-validate.component';

describe('ErrorValidateComponent', () => {
  let component: ErrorValidateComponent;
  let fixture: ComponentFixture<ErrorValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
