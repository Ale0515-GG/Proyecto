import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permite hacer peticiones http
import { Login } from 'src/app/models/Login';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //Devuelve todos los pacientes
  getlogins() {
    return this.http.get(`${this.API_URI}/login`); //o direccion donde estan los pacientes o /Paciente
  }

  //Devuelve solo un paciente
  getlogin(id: String){
    return this.http.get(`${this.API_URI}/login/${id}`); //peticio al id que proporcione
  }

  deletelogin(id: String){
    return this.http.delete(`${this.API_URI}/login/${id}`);
  }

  savelogin(paciente: Login){
    return this.http.post(`${this.API_URI}/login`, paciente);
  }
  updatelogin(id:string|any, updateCita:Login):Observable<Login>{
    return this.http.put(`${this.API_URI}/login/${id}`,updateCita);

  }

}