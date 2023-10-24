import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicBookListComponent } from './clinic-book-list.component';

describe('ClinicBookListComponent', () => {
  let component: ClinicBookListComponent;
  let fixture: ComponentFixture<ClinicBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicBookListComponent]
    });
    fixture = TestBed.createComponent(ClinicBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
