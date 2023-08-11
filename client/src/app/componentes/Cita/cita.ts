import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/models/Cita';
import { CitaService } from 'src/app/service/Cita/paciente.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.html',
  styleUrls: ['./cita.css']
})
export class CargarCita implements OnInit {
  @HostBinding('class') clases = 'row';

  cita: Cita = {
    IdCita: 0,
    idPaciente: 0,
    idMedico: 0,
    Especialidad: '',
    NomMedico: '',
    NomPaciente: '',
    NumTelefono: '',
    Motivo: '',
  };

  constructor(private citaService: CitaService, private router: Router) {}

  ngOnInit(): void {}

  saveNewCita() {
    this.citaService.saveCita(this.cita).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/cita']);
      },
      err => console.error(err)
    );
  }
}
