import { Component, HostBinding, OnInit } from '@angular/core';
import { CitaService } from 'src/app/service/Cita/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-citaconf',
  templateUrl: './citaconf.component.html',
  styleUrls: ['./citaconf.component.css']
})
export class CitaconfComponent {
  @HostBinding('class') classes = 'row';
  cita: any = [];
  editingCita: any = null; // Variable para almacenar la cita en edición

  constructor(
    private citaService: CitaService,
    private router: Router,
    private route: ActivatedRoute,
    private toastrService:ToastrService
  ) {}

  ngOnInit() {
    this.getCitas();
  }

  getCitas() {
    this.citaService.getCitas().subscribe(
      res => {
        this.cita = res;
      },
      err => console.log(err)
    );
  }

  deleteCita(id: string) {
    this.citaService.deleteCita(id).subscribe(
      res => {
        console.log(res);
        this.getCitas();
        this.toastrService.warning(`Se borro `,'Atencion')
      },
      err => this.toastrService.error(`No se pudo borrar `,'Error')
    );
  }

  editCita(cita: any) {
    this.editingCita = { ...cita }; // Clonamos la cita para no afectar la original
  }

  cancelEdit() {
    this.editingCita = null;
  }

  updateCita(id: string) {
    this.citaService.updateCita(id, this.editingCita).subscribe(
      res => {
        console.log(res);
        this.editingCita = null; // Limpiamos la variable de edición
        this.getCitas();
         this.toastrService.success(`Actualización Completa`,'Aviso')
      },
      err => this.toastrService.error(`No se pudo actualizar`,'Error')
    );
  }
}
