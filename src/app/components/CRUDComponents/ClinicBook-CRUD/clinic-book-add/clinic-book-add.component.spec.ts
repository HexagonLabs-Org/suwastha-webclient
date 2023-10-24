import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicBookAddComponent } from './clinic-book-add.component';

describe('ClinicBookAddComponent', () => {
  let component: ClinicBookAddComponent;
  let fixture: ComponentFixture<ClinicBookAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicBookAddComponent]
    });
    fixture = TestBed.createComponent(ClinicBookAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
