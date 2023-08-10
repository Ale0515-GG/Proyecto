import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaconfComponent } from './citaconf.component';

describe('CitaconfComponent', () => {
  let component: CitaconfComponent;
  let fixture: ComponentFixture<CitaconfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CitaconfComponent]
    });
    fixture = TestBed.createComponent(CitaconfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
