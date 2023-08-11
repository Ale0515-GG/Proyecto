import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medi } from 'src/app/models/Medico';
import { MedicoService } from 'src/app/service/medico.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})

export class MedicosComponent implements OnInit{
  @HostBinding('class') clases ='row';

  medi: Medi = {
    id: 0,
    nombre: '',
    especialidad: '',
    Telefono: '',
    correo: ''
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