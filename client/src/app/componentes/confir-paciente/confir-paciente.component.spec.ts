import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirPacienteComponent } from './confir-paciente.component';

describe('ConfirPacienteComponent', () => {
  let component: ConfirPacienteComponent;
  let fixture: ComponentFixture<ConfirPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirPacienteComponent]
    });
    fixture = TestBed.createComponent(ConfirPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
