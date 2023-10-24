import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicsessionLayoutComponent } from './clinicsession-layout.component';

describe('ClinicsessionLayoutComponent', () => {
  let component: ClinicsessionLayoutComponent;
  let fixture: ComponentFixture<ClinicsessionLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicsessionLayoutComponent]
    });
    fixture = TestBed.createComponent(ClinicsessionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
