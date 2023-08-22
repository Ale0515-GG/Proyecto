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

  this.pacienteService.getPacientes().subscribe(
    res => {
      this.paciente = res;
    },
    err => console.error(err)
  );
 
  
  this.cargar();

}
cargar(){
  this.activatedRoute.params.subscribe(
    e=>{
      let id=e['id'];
      if(id){
        this.pacienteService.getPacient(id).subscribe(
          es=>this.paciente=es
        );
      }
    }
  )
}


updatePaciente(){
  this.pacienteService.updatePaciente(this.paciente.Id,this.paciente).subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/paciente/']);
      this.toastrService.success(`Actualización Completa`,'Aviso')

    },
    err => this.toastrService.error(`No se pudo actualizar el paciente`,'Error')
  )
}

}
