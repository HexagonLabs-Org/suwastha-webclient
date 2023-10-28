import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionOpdEditComponent } from './prescription-opd-edit.component';

describe('PrescriptionOpdEditComponent', () => {
  let component: PrescriptionOpdEditComponent;
  let fixture: ComponentFixture<PrescriptionOpdEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrescriptionOpdEditComponent]
    });
    fixture = TestBed.createComponent(PrescriptionOpdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
