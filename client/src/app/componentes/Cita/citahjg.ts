import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarCita } from './cita';
import { LateComponent } from 'src/app/componentes/late/late.component';

describe('CargarArticuloComponent', () => {
  let component: CargarCita;
  let fixture: ComponentFixture<CargarCita>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargarCita]
    });
    fixture = TestBed.createComponent(CargarCita);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
