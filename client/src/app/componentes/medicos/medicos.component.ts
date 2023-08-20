import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/models/Medico';
import { MedicoService } from 'src/app/service/medico.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  medi: Medico = {
    Id: 0,
    Nombre: '',
    Especialidad: '',
    Telefono: '',
    Correo: ''
  };

  constructor(private mediService: MedicoService, private router: Router) {}

  ngOnInit(): void {
    // Initialization code if needed
  }

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
