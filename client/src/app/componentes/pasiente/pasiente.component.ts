import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteService } from 'src/app/service/paciente.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-pasiente',
  templateUrl: './pasiente.component.html',
  styleUrls: ['./pasiente.component.css']
})
export class PasienteComponent implements OnInit {

  paciente: any = [];
  pacienteEncontrado: any;
  
  control = new FormControl();

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(
      res => {
        this.paciente = res;
      },
      err => console.error(err)
    );
    this.observerChangeSearch();
  }

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


