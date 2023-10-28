import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionWardListComponent } from './prescription-ward-list.component';

describe('PrescriptionWardListComponent', () => {
  let component: PrescriptionWardListComponent;
  let fixture: ComponentFixture<PrescriptionWardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrescriptionWardListComponent]
    });
    fixture = TestBed.createComponent(PrescriptionWardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
