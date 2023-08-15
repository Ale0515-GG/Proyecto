import { Component, HostBinding, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/Cita';
import { CitaService } from 'src/app/service/Cita/paciente.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-citareal',
  templateUrl: './citareal.component.html',
  styleUrls: ['./citareal.component.css']
})
export class CitarealComponent implements	 OnInit {
  @HostBinding('class') clases ='row';
  citaksk:any =[]
  edit : boolean = false;


  cita:Cita ={

      IdCita: 0,
      Especialidad: '',
      NomPaciente: '',
      NumTelefono:'',
      Motivo: '',
  }
  
constructor(private citaService: CitaService,private router:Router,private activeRoute:ActivatedRoute){}

ngOnInit(){
  const params =this.activeRoute.snapshot.params;
  // console.log(params);
  this.citaService.getCita(params['id']).subscribe(
    res => {
      console.log(res); //nos regresa los valores de la base de datos
      this.cita = res; //todo el game nos lo imprime
      this.edit = true;//VARIABLEEE
    },
    err => console.error(err)
  )
}

saveNewCita(){

delete this.cita.IdCita;

  this.citaService.saveCita(this.cita).subscribe(
    res =>{
      console.log(res);
      this.router.navigate(['/cita']);
    },
    err => console.error(err)
  )
}


delteCita(id: string){
  // console.log(id);//se lo manda a consola
  this.citaService.delteCita(id).subscribe(
    res =>{
      console.log(res)//mueste lo de la api, aqui se puede poner lo de registro eliminado
      this.router.navigate(['/cita']);
    },
    err => console.log(err)
  )
}
updateGame(){

 // this.citaService.updateCita(this.cita).subscribe(
   // res => {
   //   console.log(res);
  //    this.router.navigate(['/games']);
   // },
  //  err => console.log(err)
  //)
}

}

