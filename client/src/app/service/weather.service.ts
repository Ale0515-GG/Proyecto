import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = 'e19ccc2712b138489831c6b68182a159';
  private baseURL = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(cityName: string, countryCode: string) {
    const URI = `${this.baseURL}?q=${cityName},${countryCode}&appid=${this.apiKey}&units=metric`;
    return this.http.get(URI);
  }
}
