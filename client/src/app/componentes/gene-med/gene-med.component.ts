import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/models/Medico';
import { MedicoService } from 'src/app/service/medico.service';

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

  constructor(private mediService: MedicoService, private router: Router) {}

  ngOnInit(): void {}

  saveNewMedi() {
    this.mediService.saveMedi(this.medi).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/medicos']);
      },
      err => console.error(err)
    );
  }
}
