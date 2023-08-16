import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/models/Medico';
import { MedicoService } from 'src/app/service/medico.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})

export class MedicosComponent implements OnInit{
  @HostBinding('class') clases ='row';

  medi: Medico = {
    Id:0,
    Nombre:'',
    Especialidad:'',
    Telefono:'',
   Correo:''
};


constructor(private mediService: MedicoService,private router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

saveNewMedi(){ //generamos el metodo
  // console.log(this.game);

  this.mediService.saveMedi(this.medi).subscribe(
    res =>{
      console.log(res);
      this.router.navigate(['/medicos']);
    },
    err => console.error(err)
  )
}

}

export class MediListComponent implements	 OnInit{
  @HostBinding('class') classes='row';
  medi:any =[]
  constructor(private medicoService:MedicoService){

  }
  ngOnInit(){
    this.getMedicos();
  }

  getMedicos(){
    this.medicoService.getMedicos().subscribe(
      // res => console.log(res),
      res => {
        this.medi=res;
      },
      err => console.log(err)
    )
  }

  deleteMedi(id: string){
    // console.log(id);//se lo manda a consola
    this.medicoService.deleteMedi(id).subscribe(
      res =>{
        console.log(res)//mueste lo de la api, aqui se puede poner lo de registro eliminado
        this.getMedicos();
      },
      err => console.log(err)
    )
  }

}
