import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from 'src/app/models/Medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  API_URI = 'http://192.168.1.74:3000/api';

  constructor(private http: HttpClient) { }

  getMedicos() {
    return this.http.get(`${this.API_URI}/medico`);
  }

  getMedi(id: string) {
    return this.http.get<Medico>(`${this.API_URI}/medico/${id}`);
  }

  deleteMedi(id: string) {
    return this.http.delete(`${this.API_URI}/medico/${id}`);
  }

  updateMedi(id: string, updateMedi: Medico): Observable<Medico> {
    return this.http.put<Medico>(`${this.API_URI}/medico/${id}`, updateMedi);
  }
  saveMedi(medico:Medico){
    return this.http.post(`${this.API_URI}/medico`,medico);
  }

  

  searchMedicosByName(nombre: string): Observable<Medico[]> {
    const params = new HttpParams().set('nombre', nombre);
    return this.http.get<Medico[]>(`${this.API_URI}/medico/search`, { params });
  }
}
