/*import { Component } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent {

}
*/

import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/service/weather.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YoutubeService } from 'src/app/service/youtube.service';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    description: string;
  }[];
}

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  location = { cityName: 'Dolores Hidalgo Cuna de la Independencia Nacional', countryCode: 'mx'};
  clima: WeatherData | undefined;


  videos: any[] | undefined; // Almacena los datos de los videos
  videoUrl: SafeResourceUrl; // URL segura para el video

  opciones: string[] = ['como llevar un control de actividades diarias de forma sencilla', 'Como administrar mejor el tiempo', 'como realizar planes para la vida diaria', 'Diversion'];
  seleccion: string = '';
  
  constructor(private weatherService: WeatherService, private youtubeService : YoutubeService,  private sanitizer: DomSanitizer) {
    this.videoUrl = '';
   }

  ngOnInit() {
    this.getWeather(this.location.cityName, this.location.countryCode);
    this.onChange();
  }

  getWeather(cityName: string, countryCode: string) {
    this.weatherService
      .getWeather(cityName, countryCode)
      .subscribe(
        (res: any) => { // Usamos 'any' para aceptar cualquier estructura de respuesta
          console.log(res);
          this.clima = {
            name: res.name,
            main: {
              temp: res.main.temp,
              humidity: res.main.humidity,
              pressure: res.main.pressure,
            },
            weather: [{ description: res.weather[0].description }],
          };
        },
        err => {
          console.log(err);
        }
      );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode.value) {
      this.getWeather(cityName.value, countryCode.value);

      cityName.value = '';
      countryCode.value = '';
    } else {
      alert('Please. Insert some values');
    }
    cityName.focus();
    return false;
  }

  onChange(): void {
  }

}
