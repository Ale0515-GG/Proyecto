import { Component,HostBinding,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cita } from 'src/app/models/Cita';
import { CitaService } from 'src/app/service/Cita/paciente.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.html',
  styleUrls: ['./cita.css']
})
export class CargarCita implements OnInit {
  @HostBinding('class') clases ='row';




  cita: Cita={
  IdCita: 0,
  idPaciente:0,
  idMedico:0,
  Especialidad: '',
  NomMedico : '',
  NomPaciente: '',
  NumTelefono :'',
  Motivo : '',
 
  };
  medicos: any[] = []
  constructor(private CitaService: CitaService,private router:Router){}

  ngOnInit(): void {
    this.fetchDoctors(); // Cargar la lista de médicos al iniciar el componente
  }

  fetchDoctors() {
    // Simulación de carga de médicos desde la base de datos
    // Puedes reemplazar esto con la lógica adecuada para obtener médicos desde tu servicio
    this.medicos = [
      { id: 1, nombre: 'Medico General' },
      { id: 2, nombre: 'Cirujano' }
      // Agrega otros médicos aquí
    ];
  }

  saveNewPaciente() {
    // Generar el método para guardar la cita
    // ...
  }
}