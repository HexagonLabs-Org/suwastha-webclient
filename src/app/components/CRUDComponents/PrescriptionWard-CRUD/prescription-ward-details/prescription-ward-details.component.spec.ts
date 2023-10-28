import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionWardDetailsComponent } from './prescription-ward-details.component';

describe('PrescriptionWardDetailsComponent', () => {
  let component: PrescriptionWardDetailsComponent;
  let fixture: ComponentFixture<PrescriptionWardDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrescriptionWardDetailsComponent]
    });
    fixture = TestBed.createComponent(PrescriptionWardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
