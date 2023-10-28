import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionOpdDetailsComponent } from './prescription-opd-details.component';

describe('PrescriptionOpdDetailsComponent', () => {
  let component: PrescriptionOpdDetailsComponent;
  let fixture: ComponentFixture<PrescriptionOpdDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrescriptionOpdDetailsComponent]
    });
    fixture = TestBed.createComponent(PrescriptionOpdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
