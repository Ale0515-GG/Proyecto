import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmaciaComponent } from './farmacia.component';

describe('FarmaciaComponent', () => {
  let component: FarmaciaComponent;
  let fixture: ComponentFixture<FarmaciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmaciaComponent]
    });
    fixture = TestBed.createComponent(FarmaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
