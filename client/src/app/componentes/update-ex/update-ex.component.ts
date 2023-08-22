import { ExpedienteService } from 'src/app/service/expediente.service';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from '../../service/medico.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-ex',
  templateUrl: './update-ex.component.html',
  styleUrls: ['./update-ex.component.css']
})


export class UpdateExComponent {
  edit : boolean = false;

  expe: any = [];
  medico: any=[];
  
  constructor(private expedienteService: ExpedienteService,private medicoService:MedicoService,private router:Router, private toastrService:ToastrService, private activatedRoute:ActivatedRoute){}

  ngOnInit():void{
  
    const params =this.activatedRoute.snapshot.params;
  
    this.expedienteService.getExpedientes().subscribe(
      res => {
        this.expe = res;
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
            es=>this.expe=es
          );
        }
      }
    )
  }
  
  
  updateExpediente(){
    this.expedienteService.updateExpediente(this.expe.idExpediente,this.expe).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/expediente/']);
        this.toastrService.success(`Actualización Completa`,'Aviso')
  
      },
      err => this.toastrService.error(`No se pudo actualizar el expediente`,'Error')
    )
  }
  
  }
  