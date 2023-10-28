import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionOpdAddComponent } from './prescription-opd-add.component';

describe('PrescriptionOpdAddComponent', () => {
  let component: PrescriptionOpdAddComponent;
  let fixture: ComponentFixture<PrescriptionOpdAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrescriptionOpdAddComponent]
    });
    fixture = TestBed.createComponent(PrescriptionOpdAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
