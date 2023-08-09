import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasienteComponent } from './pasiente.component';

describe('PasienteComponent', () => {
  let component: PasienteComponent;
  let fixture: ComponentFixture<PasienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasienteComponent]
    });
    fixture = TestBed.createComponent(PasienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
