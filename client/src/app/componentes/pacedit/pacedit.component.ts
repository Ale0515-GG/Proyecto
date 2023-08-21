import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/service/paciente.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-pacedit',
  templateUrl: './pacedit.component.html',
  styleUrls: ['./pacedit.component.css']
})
export class PaceditComponent {
  edit : boolean = false;

paciente: any = [];
constructor(private pacienteService: PacienteService,private router:Router, private toastrService:ToastrService, private activatedRoute:ActivatedRoute){}

ngOnInit():void{

  const params =this.activatedRoute.snapshot.params;

  this.pacienteService.getPaciente(params['Nombre'])
  .subscribe(
    res => {
      console.log(res); //nos regresa los valores de la base de datos
      this.paciente = res; //todo el game nos lo imprime
      this.edit = true;//VARIABLEEE
    },
    err => console.error(err)
  )
  
  this.cargar();

}
cargar(){
  this.activatedRoute.params.subscribe(
    e=>{
      let Nombre=e['Nombre'];
      if(Nombre){
        this.pacienteService.getPacient(Nombre).subscribe(
          es=>this.paciente=es
        );
      }
    }
  )
}

updatePaciente(Nombre: String){
  delete this.paciente.created_at;
  this.pacienteService.updatePaciente(this.paciente.Nombre,this.paciente).subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/paciente/']);
    },
    err => console.log(err)
  )
}

}
