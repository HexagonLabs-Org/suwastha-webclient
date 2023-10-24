import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicBookEditComponent } from './clinic-book-edit.component';

describe('ClinicBookEditComponent', () => {
  let component: ClinicBookEditComponent;
  let fixture: ComponentFixture<ClinicBookEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicBookEditComponent]
    });
    fixture = TestBed.createComponent(ClinicBookEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
