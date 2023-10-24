import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicSessionAddComponent } from './clinic-session-add.component';

describe('ClinicSessionAddComponent', () => {
  let component: ClinicSessionAddComponent;
  let fixture: ComponentFixture<ClinicSessionAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicSessionAddComponent]
    });
    fixture = TestBed.createComponent(ClinicSessionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
