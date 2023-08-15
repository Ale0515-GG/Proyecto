import { Component, HostBinding, OnInit } from '@angular/core';
import { Cita } from 'src/app/models/Cita';
import { CitaService } from 'src/app/service/Cita/paciente.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-citareal',
  templateUrl: './citareal.component.html',
  styleUrls: ['./citareal.component.css']
})
export class CitarealComponent {
  @HostBinding('class') clases ='row';

  cita:Cita ={

      IdCita: 0,
      Especialidad: '',
      NomPaciente: '',
      NumTelefono:'',
      Motivo: '',
  }
  
constructor(private citaService: CitaService,private router:Router,private activeRoute:ActivatedRoute){}

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

}
