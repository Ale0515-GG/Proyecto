import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoService } from 'src/app/service/medico.service'; 

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {
  medicos: any = [];
  nombreBusqueda: string = '';

  constructor(private medicoService: MedicoService, private router: Router) {}

  ngOnInit() {
    this.getMedicos();
  }

  getMedicos() {
    this.medicoService.getMedicos().subscribe(
      res => {
        this.medicos = res;
      },
      err => console.log(err)
    );
  }

  deleteMedico(id: number | undefined) {
    if (id !== undefined) {
      this.medicoService.deleteMedi(id.toString()).subscribe(
        res => {
          console.log(res);
          this.getMedicos();
        },
        (err: any) => console.error('Error al eliminar médico:', err)
      );
    }
  }

  editarMedico(id: number | undefined) {
    if (id !== undefined) {
      this.router.navigate(['/editar-medico', id]);
    }
  }

  buscarMedicos() {
    if (this.nombreBusqueda.trim() !== '') {
      this.medicoService.searchMedicosByName(this.nombreBusqueda).subscribe(
        res => {
          this.medicos = res;
        },
        err => console.error('Error al buscar médicos:', err)
      );
    } else {
      this.getMedicos();
    }
  }

  
}
