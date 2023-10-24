import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDSessionDetailsComponent } from './opdsession-details.component';

describe('OPDSessionDetailsComponent', () => {
  let component: OPDSessionDetailsComponent;
  let fixture: ComponentFixture<OPDSessionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OPDSessionDetailsComponent]
    });
    fixture = TestBed.createComponent(OPDSessionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
