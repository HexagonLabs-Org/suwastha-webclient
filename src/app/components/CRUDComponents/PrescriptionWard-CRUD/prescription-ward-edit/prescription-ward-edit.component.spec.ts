import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionWardEditComponent } from './prescription-ward-edit.component';

describe('PrescriptionWardEditComponent', () => {
  let component: PrescriptionWardEditComponent;
  let fixture: ComponentFixture<PrescriptionWardEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrescriptionWardEditComponent]
    });
    fixture = TestBed.createComponent(PrescriptionWardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
