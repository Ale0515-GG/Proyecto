import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permite hacer peticiones http
import { Cita } from 'src/app/models/Cita'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CitaService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //Devuelve todos los pacientes
  getCitas() {
    return this.http.get(`${this.API_URI}/cita`); //o direccion donde estan los pacientes o /Paciente
  }

  //Devuelve solo un paciente
  getCita(id: String){
    return this.http.get(`${this.API_URI}/cita/${id}`); //peticio al id que proporcione
  }

  deleteCita(id: String){
    return this.http.delete(`${this.API_URI}/cita/${id}`);
  }

  saveCita(paciente: Cita){
    return this.http.post(`${this.API_URI}/cita`, paciente);
  }
  updateCita(id:string|any, updateGame:Cita):Observable<Cita>{
    return this.http.put(`${this.API_URI}/cita/${id}`,updateGame);

  }

  call(id:string, updatedPaciente: Cita){
    return this.http.put(`${this.API_URI}/cita/${id}`,updatedPaciente);
  }




}