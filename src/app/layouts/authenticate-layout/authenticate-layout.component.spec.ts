import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticateLayoutComponent } from './authenticate-layout.component';

describe('AuthenticateLayoutComponent', () => {
  let component: AuthenticateLayoutComponent;
  let fixture: ComponentFixture<AuthenticateLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticateLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticateLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
