import { Component, HostBinding, OnInit } from '@angular/core';
import { CitaService } from 'src/app/service/Cita/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute
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
      },
      err => console.log(err)
    );
  }

  editCita(cita: any) {
    this.editingCita = { ...cita }; // Clonamos la cita para no afectar la original
  }

  cancelEdit() {
    this.editingCita = null;
  }

  updateCita() {
    this.citaService.updateCita(this.editingCita.id, this.editingCita).subscribe(
      res => {
        console.log(res);
        this.editingCita = null; // Limpiamos la variable de edición
        this.getCitas();
      },
      err => console.log(err)
    );
  }
}
