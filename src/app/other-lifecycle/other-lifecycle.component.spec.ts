import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLifecycleComponent } from './other-lifecycle.component';

describe('OtherLifecycleComponent', () => {
  let component: OtherLifecycleComponent;
  let fixture: ComponentFixture<OtherLifecycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherLifecycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
