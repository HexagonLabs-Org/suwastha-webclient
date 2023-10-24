import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicSessionDetailsComponent } from './clinic-session-details.component';

describe('ClinicSessionDetailsComponent', () => {
  let component: ClinicSessionDetailsComponent;
  let fixture: ComponentFixture<ClinicSessionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicSessionDetailsComponent]
    });
    fixture = TestBed.createComponent(ClinicSessionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
