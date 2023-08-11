import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/service/paciente.service';

@Component({
  selector: 'app-pasiente',
  templateUrl: './pasiente.component.html',
  styleUrls: ['./pasiente.component.css']
})
export class PasienteComponent implements OnInit{

  paciente:any =[]
  pacienteEncontrado: any;
  constructor(private pacienteService:PacienteService){}

  ngOnInit(){
    this.pacienteService.getPacientes().subscribe(
      res => {
        
        this.paciente = res;
      },
      err => console.error(err)
    );
  }

  buscarPaciente() {
    this.pacienteService.getPaciente(this.paciente)
      .subscribe(
        (paciente) => {
          console.log()
          this.pacienteEncontrado = paciente;
        },
        (error) => {
          console.error('Error al buscar paciente:', error);
          this.pacienteEncontrado = null;
        }
      );
  }
}
