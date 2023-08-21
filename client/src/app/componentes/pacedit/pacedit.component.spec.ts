import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaceditComponent } from './pacedit.component';

describe('PaceditComponent', () => {
  let component: PaceditComponent;
  let fixture: ComponentFixture<PaceditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaceditComponent]
    });
    fixture = TestBed.createComponent(PaceditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
