import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permite hacer peticiones http
import { Paciente } from '../models/Paciente';
import { Observable } from 'rxjs';
//import { ToastrService } from 'ngx-toastr';



@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //Devuelve todos los pacientes
  getPacientes() {
    return this.http.get(`${this.API_URI}/paciente`); //o direccion donde estan los pacientes o /Paciente
  }

  //Devuelve solo un paciente
  getPaciente(Nombre: String){
  return this.http.get(`${this.API_URI}/paciente/${Nombre}`); //peticio al id que proporcione
  }

  deletePaciente(id: String){
    return this.http.delete(`${this.API_URI}/paciente/${id}`);
  }

  savePaciente(paciente: Paciente){
    //this.toastrService.success(`${paciente.Nombre} guardado correctamente`,'Aviso');
    return this.http.post(`${this.API_URI}/paciente`, paciente);
  }

  updatePaciente(id:string, updatedPaciente: Paciente){
    return this.http.put(`${this.API_URI}/paciente/${id}`,updatedPaciente);

  }






}