import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from 'src/app/service/medico.service';
import { ToastrService } from 'ngx-toastr';
import { Medico } from 'src/app/models/Medico';

@Component({
  selector: 'app-editar-medico',
  templateUrl: './editar-medico.component.html',
  styleUrls: ['./editar-medico.component.css']
})
export class EditarMedicoComponent implements OnInit {
  medico: Medico = {};

  constructor(
    private medicoService: MedicoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getMedico(id);
    });
  }

  getMedico(id: string) {
    this.medicoService.getMedi(id).subscribe(
      (res: Medico) => {
        this.medico = res;
      },
      err => console.error('Error al obtener médico:', err)
    );
  }

  updateMedico() {
    if (this.medico.Id) {
      this.medicoService.updateMedi(this.medico.Id.toString(), this.medico).subscribe(
        res => {
          console.log('Médico actualizado:', res);
          this.toastrService.success('Médico actualizado con éxito', 'Aviso');
          this.router.navigate(['/medicos']);
        },
        err => {
          console.error('Error al actualizar médico:', err);
          this.toastrService.error('Error al actualizar médico', 'Error');
        }
      );
    }
  }

  cancel() {
    this.router.navigate(['/medicos']);
  }
}


