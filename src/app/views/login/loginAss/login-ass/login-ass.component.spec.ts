import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAssComponent } from './login-ass.component';

describe('LoginAssComponent', () => {
  let component: LoginAssComponent;
  let fixture: ComponentFixture<LoginAssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
