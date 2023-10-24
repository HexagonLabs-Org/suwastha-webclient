import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicSessionListComponent } from './clinic-session-list.component';

describe('ClinicSessionListComponent', () => {
  let component: ClinicSessionListComponent;
  let fixture: ComponentFixture<ClinicSessionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicSessionListComponent]
    });
    fixture = TestBed.createComponent(ClinicSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
