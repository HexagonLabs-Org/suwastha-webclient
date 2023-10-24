import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDSessionAddComponent } from './opdsession-add.component';

describe('OPDSessionAddComponent', () => {
  let component: OPDSessionAddComponent;
  let fixture: ComponentFixture<OPDSessionAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OPDSessionAddComponent]
    });
    fixture = TestBed.createComponent(OPDSessionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
