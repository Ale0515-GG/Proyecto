
import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/service/paciente.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gene-pac',
  templateUrl: './gene-pac.component.html',
  styleUrls: ['./gene-pac.component.css']
})
export class GenePACComponent {
  edit : boolean = false;
 Genepa:Paciente ={
  Id:0,
    Nombre: '',
    Telefono: '',
    fecha_nacimiento:new Date,
    Genero: ''

};

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
  
}

updatePaciente(){
  delete this.paciente.created_at;
  this.pacienteService.updatePaciente(this.paciente.Id,this.paciente).subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/paciente/']);
    },
    err => console.log(err)
  )
}


saveNewPaciente(){ //generamos el metodo
  // console.log(this.game);
  delete this.Genepa.Id;
  this.pacienteService.savePaciente(this.Genepa).subscribe(
    res =>{
      console.log(res);
      this.router.navigate(['/paciente']);
      this.toastrService.success(`¡Paciente guardado con exito!`,'Aviso')
    },
    err => 
    this.toastrService.error(`No se guardo correctamente el paciente`,'Error')
  )
}


}

