import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://192.168.0.24:3000/api';

  constructor(private http: HttpClient) { }

  

  getLogins(): Observable<any> {
    return this.http.get(`${this.API_URI}/login`);
  }

  getLogin(id: string): Observable<any> {
    return this.http.get(`${this.API_URI}/login/${id}`);
  }

  deleteLogin(id: string): Observable<any> {
    return this.http.delete(`${this.API_URI}/login/${id}`);
  }

  saveLogin(login: any): Observable<any> {
    return this.http.post(`${this.API_URI}/login`, login);
  }

  updateLogin(id: string, updatedLogin: any): Observable<any> {
    return this.http.put(`${this.API_URI}/login/${id}`, updatedLogin);
  }
  // En el servicio login.service.ts
login(email: string, password: string): Observable<any> {
  return this.http.post(`${this.API_URI}/login`, { email, password });
}

}
