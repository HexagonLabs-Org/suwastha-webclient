import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDSessionLayoutComponent } from './opdsession-layout.component';

describe('OPDSessionLayoutComponent', () => {
  let component: OPDSessionLayoutComponent;
  let fixture: ComponentFixture<OPDSessionLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OPDSessionLayoutComponent]
    });
    fixture = TestBed.createComponent(OPDSessionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
