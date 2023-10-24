import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPDSessionListComponent } from './opdsession-list.component';

describe('OPDSessionListComponent', () => {
  let component: OPDSessionListComponent;
  let fixture: ComponentFixture<OPDSessionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OPDSessionListComponent]
    });
    fixture = TestBed.createComponent(OPDSessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
