import { Component, HostBinding, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/Cita';
import { CitaService } from 'src/app/service/Cita/paciente.service';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { window } from 'rxjs';
import { PacienteService } from '../../service/paciente.service';

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
  };

  paciente: any = [];

  
constructor(private citaService: CitaService,private toastrService:ToastrService ,private pacienteService:PacienteService,private router:Router,private activeRoute:ActivatedRoute){}


ngOnInit(){
  this.getCita();

  this.pacienteService.getPacientes().subscribe(
    res => {
      this.paciente = res;
    },
    err => console.error(err)
  );
  
}


saveNewCita(){

delete this.expediente.idPaciente;
delete this.cita.IdCita;

  this.citaService.saveCita(this.cita).subscribe(
    res =>{
      console.log(res);
      this.router.navigate(['/Citaconf']);
      this.toastrService.success(`¡Guardado con exito!`,'Aviso')
      
    },
    err => 
    this.toastrService.error(`No se guardo correctamente `,'Error')
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


getCita() {
  this.citaService.getCitas().subscribe(
    res => {
      console.log(res);
      this.router.navigate(['/cita']);
    },
    err => console.error(err)
  );
}

sendMessage(){
  
}
}
