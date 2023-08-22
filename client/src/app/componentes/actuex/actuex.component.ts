
import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/models/Paciente';
import { ExpedienteService } from 'src/app/service/expediente.service'; 
import { ToastrService } from 'ngx-toastr';
import { MedicoService } from 'src/app/service/medico.service';
import { Medico } from '../../models/Medico';

@Component({
  selector: 'app-actuex',
  templateUrl: './actuex.component.html',
  styleUrls: ['./actuex.component.css']
})
export class ActuexComponent {


edit : boolean = false;

expediente: any = [];
medico: any = [];



  constructor(private expedienteService: ExpedienteService,private medicoService:MedicoService,private router:Router, private toastrService:ToastrService, private activatedRoute:ActivatedRoute){}

  ngOnInit():void{
  
    const params =this.activatedRoute.snapshot.params;
  
    this.expedienteService.getExpedientes().subscribe(
      res => {
        this.expediente = res;
      },
      err => console.error(err)
    );
   
    this.medicoService.getMedicos().subscribe(
      res => {
        this.medico = res;
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
          this.expedienteService.getExpediente(id).subscribe(
            es=>this.expediente=es
          );
        }
      }
    )
  }
  
  
  updateExpediente(){
    this.expedienteService.updateExpediente(this.expediente.idExpediente,this.expediente).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/expediente/']);
        this.toastrService.success(`Actualización Completa`,'Aviso')
  
      },
      err => this.toastrService.error(`No se pudo actualizar el expediente`,'Error')
    )
  }
  
  }
  