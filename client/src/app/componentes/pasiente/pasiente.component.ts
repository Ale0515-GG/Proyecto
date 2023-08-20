import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { PacienteService } from 'src/app/service/paciente.service';
import { Route } from '@angular/router';
import { ExpedienteService } from '../../service/expediente.service';
import { HistorialComponent } from '../historial/historial.component';
import {MatTableDataSource} from '@angular/material/table'
@Component({
  selector: 'app-pasiente',
  templateUrl: './pasiente.component.html',
  styleUrls: ['./pasiente.component.css']
})
export class PasienteComponent implements OnInit {

  paciente: any = [];
  expediente: any =[];
  pacienteEncontrado: any;
  
  control = new FormControl();
  
  constructor(private pacienteService: PacienteService, private expedienteService:ExpedienteService) {}

  buscarpost='';
  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(
      res => {
        this.paciente = res;
      },
      err => console.error(err)
    );
    this.observerChangeSearch();

    this.expedienteService.getExpedientes().subscribe(
      res => {
        this.expediente = res;
      },
      err => console.error(err)
    );
  }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

// }

  observerChangeSearch() {
    this.control.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(query => {
      console.log(query);
      // Llama el método para buscar paciente cuando se genera un cambio en el valor
      this.buscarPaciente(query); // Pasa el valor 'query' como argumento
    });
  }

  buscarPaciente(query: string) {
    this.pacienteService.getPaciente(query) // Usa el valor de 'query' en la búsqueda
      .subscribe(
        (paciente) => {
          console.log('Paciente encontrado:', paciente);
          this.pacienteEncontrado = paciente;
        },
        (error) => {
          console.error('Error al buscar paciente:', error);
          this.pacienteEncontrado = null;
        } 
      );
}
}
