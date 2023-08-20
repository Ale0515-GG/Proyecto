import { Component, HostBinding, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/service/medico.service'; 

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {
  @HostBinding('class') classes='row';
  medicos: any = [];

  constructor(private medicoService: MedicoService) {}

  ngOnInit() {
    this.getMedicos();
  }

  getMedicos(){
    this.medicoService.getMedicos().subscribe(
      res=> {
        this.medicos = res;
      },
      err => console.log(err)
      )
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
}
