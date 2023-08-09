import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneMEDComponent } from './gene-med.component';

describe('GeneMEDComponent', () => {
  let component: GeneMEDComponent;
  let fixture: ComponentFixture<GeneMEDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneMEDComponent]
    });
    fixture = TestBed.createComponent(GeneMEDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
