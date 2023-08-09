import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenePACComponent } from './gene-pac.component';

describe('GenePACComponent', () => {
  let component: GenePACComponent;
  let fixture: ComponentFixture<GenePACComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenePACComponent]
    });
    fixture = TestBed.createComponent(GenePACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
