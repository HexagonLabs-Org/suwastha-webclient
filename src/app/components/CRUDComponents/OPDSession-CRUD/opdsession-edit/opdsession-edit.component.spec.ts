import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDSessionEditComponent } from './opdsession-edit.component';

describe('OPDSessionEditComponent', () => {
  let component: OPDSessionEditComponent;
  let fixture: ComponentFixture<OPDSessionEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OPDSessionEditComponent]
    });
    fixture = TestBed.createComponent(OPDSessionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
