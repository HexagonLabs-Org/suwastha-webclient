import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicSessionEditComponent } from './clinic-session-edit.component';

describe('ClinicSessionEditComponent', () => {
  let component: ClinicSessionEditComponent;
  let fixture: ComponentFixture<ClinicSessionEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicSessionEditComponent]
    });
    fixture = TestBed.createComponent(ClinicSessionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
