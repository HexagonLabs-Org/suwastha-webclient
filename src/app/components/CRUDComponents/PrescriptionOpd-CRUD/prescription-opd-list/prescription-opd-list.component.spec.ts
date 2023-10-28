import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionOpdListComponent } from './prescription-opd-list.component';

describe('PrescriptionOpdListComponent', () => {
  let component: PrescriptionOpdListComponent;
  let fixture: ComponentFixture<PrescriptionOpdListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrescriptionOpdListComponent]
    });
    fixture = TestBed.createComponent(PrescriptionOpdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
