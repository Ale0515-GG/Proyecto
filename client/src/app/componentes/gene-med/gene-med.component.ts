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

  constructor(
    private medicoService: MedicoService,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  saveNewMedi() {
    this.medicoService.saveMedi(this.medi).subscribe(
      () => {
        this.toastrService.success('Médico guardado con éxito', 'Aviso');
        this.router.navigate(['/Medicos']); // Redirige a MedicosComponent
      },
      () => this.toastrService.error('No se guardó correctamente el Médico', 'Error')
    );
  }
}


