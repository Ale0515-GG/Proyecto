/*import { Component } from '@angular/core';
*/
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment'; // Importa environment
import * as mapboxgl from 'mapbox-gl';
/*

export class PrincipalComponent {

}
*/

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
/*export class AppComponent {
  title = 'App-Articulos';
}*/

export class PrincipalComponent implements OnInit {
  // Se crea el titulo
  title = 'App-Articulos';

  // Se crea definición de diseño y propiedades
  map:mapboxgl.Map | undefined;
  style = 'mapbox://stylee/mapbox/streets-v11'
  lat = 21.157396628357205;
  lng = -100.93256288252164;
  zoom = 16;
  /*21.157396628357205, -100.93256288252164*/

  constructor() {
    (mapboxgl as any).accessToken = environment.mapbox.mapboxAccessToken;
  }

  ngOnInit(): void {
    this.buildMap();
  }

  buildMap(){

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
      accessToken: environment.mapbox.mapboxAccessToken,
      attributionControl: false,

    });

    const navControl = new mapboxgl.NavigationControl({
      visualizePitch: true
    })

    this.map.addControl(navControl, 'top-right');


    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions:{
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    }))


  }
}

