
import { Component,HostBinding, OnInit } from '@angular/core';
import { Expediente } from 'src/app/models/Expediente';
import { ExpedienteService } from 'src/app/service/expediente.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PacienteService } from '../../service/paciente.service';



@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent implements OnInit {

  @HostBinding('class') classes = 'row';


  expediente: Expediente = {
    
      idExpediente: 0,
      idPaciente: 0,
      idMedico : 0,
      Nombre: '',
      Edad: 0,
      Direecion: '',
      Telefono: '',
      Genero : '',
      Sintomas: '',
      Diagnostico : '',
      Tratamiento: '',
      MedRecetado : '',
      Fecha: new Date,
      MedicoTratante: '',
      Nota : ''
  };

  paciente: any = [];
  
  constructor(private expedienteService: ExpedienteService, private router: Router,private toastrService:ToastrService, private pacienteService:PacienteService){}
  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(
      res => {
        this.paciente = res;
      },
      err => console.error(err)
    );
  }
  
  saveNewExpediente(){
    //console.log(this.game);
    //delete this.game.created_at;
    delete this.expediente.idExpediente;
    delete this.expediente.idPaciente;
    delete this.expediente.idMedico;
    delete this.expediente.Edad;
    
    
    this.expedienteService.saveExpediente(this.expediente)
    .subscribe(res=> {
      console.log(res);
      this.toastrService.success(`Expediente guardado con exito!`,'Aviso') //notificación
      this.router.navigate(['/expediente'])
     
    },
    err => this.toastrService.error(`No se guardo correctamente el expediente`,'Error')
    )
  }




}