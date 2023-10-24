import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLoginComponent } from './MainLogin.component';

describe('MainLoginComponent', () => {
  let component: MainLoginComponent;
  let fixture: ComponentFixture<MainLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainLoginComponent]
    });
    fixture = TestBed.createComponent(MainLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
