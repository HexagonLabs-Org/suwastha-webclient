import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicBookDetailsComponent } from './clinic-book-details.component';

describe('ClinicBookDetailsComponent', () => {
  let component: ClinicBookDetailsComponent;
  let fixture: ComponentFixture<ClinicBookDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicBookDetailsComponent]
    });
    fixture = TestBed.createComponent(ClinicBookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
