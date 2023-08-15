import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/models/Medico';
import { MedicoService } from 'src/app/service/medico.service';
@Component({
  selector: 'app-gene-med',
  templateUrl: './gene-med.component.html',
  styleUrls: ['./gene-med.component.css']
})
export class GeneMEDComponent {
  @HostBinding('class') clases ='row';

  medi: Medico = {
    Id:0,
    Nombre:'',
    Especialidad:'',
    Telefono:'',
   Correo:''
};

ngOnInit(): void {
}

constructor(private mediService: MedicoService,private router:Router){}

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

