import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/service/paciente.service';

@Component({
  selector: 'app-pasiente',
  templateUrl: './pasiente.component.html',
  styleUrls: ['./pasiente.component.css']
})
export class PasienteComponent implements OnInit{

  paciente:any =[]
  constructor(private pacienteService:PacienteService){}

  ngOnInit(){
    this.pacienteService.getPacientes().subscribe(
      res => {
        
        this.paciente = res;
      },
      err => console.error(err)
    );
  }
}
