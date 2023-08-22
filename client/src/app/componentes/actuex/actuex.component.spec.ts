import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActuexComponent } from './actuex.component';

describe('ActuexComponent', () => {
  let component: ActuexComponent;
  let fixture: ComponentFixture<ActuexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActuexComponent]
    });
    fixture = TestBed.createComponent(ActuexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
