import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitarealComponent } from './citareal.component';

describe('CitarealComponent', () => {
  let component: CitarealComponent;
  let fixture: ComponentFixture<CitarealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitarealComponent]
    });
    fixture = TestBed.createComponent(CitarealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
