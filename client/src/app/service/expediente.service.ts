import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permite hacer peticiones http
import { Expediente } from '../models/Expediente';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExpedienteService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //Devuelve todos los pacientes
  getExpedientes() {
    return this.http.get(`${this.API_URI}/expediente`); //o direccion donde estan los pacientes o /Paciente
  }

  //Devuelve solo un paciente
  getExpediente(id: String){
    return this.http.get(`${this.API_URI}/expediente/${id}`); //peticio al id que proporcione
  }

  delteExpediente(id: String){
    return this.http.delete(`${this.API_URI}/expediente/${id}`);
  }

  saveExpediente(expediente: Expediente){
    return this.http.post(`${this.API_URI}/expediente`, expediente);
  }

  updateExpediente(id:string, updatedExpediente: Expediente){
    return this.http.put(`${this.API_URI}/expediente/${id}`,updatedExpediente);

  }
}