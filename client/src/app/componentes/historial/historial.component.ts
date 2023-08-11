
import { Component,HostBinding, OnInit } from '@angular/core';
import { Expediente } from 'src/app/models/Expediente';
import { ExpedienteService } from 'src/app/service/expediente.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})

export class HistorialComponent implements OnInit {

  @HostBinding('class') classes = 'row';

   


  expediente: Expediente = {
    
      idExpediente: 0,
      idPaciente: 0,
      idMedico : 0,
      Nombre: '',
      Edad: 0,
      Direecion: '',
      Telefono: '',
      Genero : '',
      Sintomas: '',
      Diagnostico : '',
      Tratamiento: '',
      MedRecetado : '',
      Fecha: new Date(),
      MedicoTratante: '',
      Nota : ''
  };

  formatearFecha(Fecha: string): string {
    return Fecha ? new Date(Fecha).toISOString().substring(0, 10) : '';
  }
  
  //fecha = new Date(); // Aquí debes usar la fecha que corresponda
   //fechaFormateada = Fecha.toISOString().substring(0, 10); // Obtiene el formato 'YYYY-MM-DD'

  constructor(private expedienteService: ExpedienteService, private router: Router){}
  ngOnInit(): void {
    
  }
  
  saveNewExpediente(){
    //console.log(this.game);
    //delete this.game.created_at;
    //delete this.game.id;
    
    this.expedienteService.saveExpediente(this.expediente)
    .subscribe(res=> {
      console.log(res);
      this.router.navigate(['/expediente'])
    },
    err => console.error(err)
    )
  }

  

}