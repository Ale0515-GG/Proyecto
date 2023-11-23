import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBottonComponent } from './menu-botton.component';

describe('MenuBottonComponent', () => {
  let component: MenuBottonComponent;
  let fixture: ComponentFixture<MenuBottonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuBottonComponent]
    });
    fixture = TestBed.createComponent(MenuBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
