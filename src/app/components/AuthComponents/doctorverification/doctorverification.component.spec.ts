import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorverificationComponent } from './doctorverification.component';

describe('DoctorverificationComponent', () => {
  let component: DoctorverificationComponent;
  let fixture: ComponentFixture<DoctorverificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorverificationComponent]
    });
    fixture = TestBed.createComponent(DoctorverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
