import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from 'src/app/models/Medico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  API_URI='http://localhost:3000/api'

  constructor(private http:HttpClient) { }
  getMedicos(){
      return this.http.get(`${this.API_URI}/medico`);
  }

  getMedi(id:string){
    return this.http.get(`${this.API_URI}/medico/${id}`);
  }

  deleteMedi(id:string){
    return this.http.delete(`${this.API_URI}/medico/${id}`);
  }
  

  saveMedi(medico:Medico){
    return this.http.post(`${this.API_URI}/medico`,medico);
  }

  updateMedi(id:string, updateMedi:Medico ): Observable<Medico>{
    return this.http.put(`${this.API_URI}/medico/${id}`,updateMedi);
  }

}
