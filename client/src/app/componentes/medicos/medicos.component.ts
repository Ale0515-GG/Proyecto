import { Component } from '@angular/core';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent {
  nombre: string = 'Dr. Juan Pérez';
  especialidad: string = 'Cirujano';
  telefono: string = '123456789';
  correo: string = 'doctor@example.com';
  pacientes: string[] = ['Paciente 1', 'Paciente 2', 'Paciente 3'];
  citas: string[] = ['Cita 1', 'Cita 2', 'Cita 3'];
}
