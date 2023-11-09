import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private apiKey = 'AIzaSyAwnq9nEMLN6Ry81Cm84gc0aIWgAtl9_rs';
  private apiUrl = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) { }

  getVideoF(): Observable<any> {
    const url = `${this.apiUrl}/search?key=${this.apiKey}&part=snippet&type=video&q=SaludParaTi`;
    return this.http.get(url);
  }
  
  getVideoA(): Observable<any> {
    const url = `${this.apiUrl}/search?key=${this.apiKey}&part=snippet&type=video&q=Cuidado de la salud`;
    return this.http.get(url);
  }
  getVideoI(): Observable<any> {
    const url = `${this.apiUrl}/search?key=${this.apiKey}&part=snippet&type=video&q=Novedades dentro de la salud`;
    return this.http.get(url);
  }
}
