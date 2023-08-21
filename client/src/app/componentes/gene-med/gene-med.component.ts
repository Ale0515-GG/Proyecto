import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/models/Medico';
import { MedicoService } from 'src/app/service/medico.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gene-med',
  templateUrl: './gene-med.component.html',
  styleUrls: ['./gene-med.component.css']
})
export class GeneMEDComponent implements OnInit {
  medi: Medico = {
    Id: 0,
    Nombre: '',
    Especialidad: '',
    Telefono: '',
    Correo: ''
  };

  constructor(private mediService: MedicoService, private router: Router, private toastrService:ToastrService) {}

  ngOnInit(): void {}

  saveNewMedi() {
    this.mediService.saveMedi(this.medi).subscribe(
      res => {
        console.log(res);
        this.toastrService.success(`Medico guardado con exito!`,'Aviso') //notificación
        this.router.navigate(['/medicos']);
      },
      err => this.toastrService.error(`No se guardo correctamente el Medico`,'Error')
    );
  }
}
