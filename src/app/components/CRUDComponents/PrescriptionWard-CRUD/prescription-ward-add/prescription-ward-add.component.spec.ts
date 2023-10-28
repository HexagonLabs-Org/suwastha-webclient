import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionWardAddComponent } from './prescription-ward-add.component';

describe('PrescriptionWardAddComponent', () => {
  let component: PrescriptionWardAddComponent;
  let fixture: ComponentFixture<PrescriptionWardAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrescriptionWardAddComponent]
    });
    fixture = TestBed.createComponent(PrescriptionWardAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
