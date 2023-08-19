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
  citas1:any =[]
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
  this.getCita();
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


deleteCita(id: string){
  // console.log(id);//se lo manda a consola
  this.citaService.deleteCita(id).subscribe(
    res =>{
      console.log(res)//mueste lo de la api, aqui se puede poner lo de registro eliminado
      this.router.navigate(['/cita']);
    },
    err => console.log(err)
  )
}

updateGame(){

  this.citaService.updateCita(this.cita.IdCita,this.cita).subscribe(
    res => {
     console.log(res);
      this.router.navigate(['/games']);
   },
   err => console.log(err)
  )
}


getCita(){

this.citaService.getCitas().subscribe(
  res =>{
    console.log(res);
    this.router.navigate(['/cita']);
  },
  err => console.error(err)
)
}
}
