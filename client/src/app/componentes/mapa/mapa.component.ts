// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-mapa',
//   templateUrl: './mapa.component.html',
//   styleUrls: ['./mapa.component.css']
// })
// export class MapaComponent {

// }

/*import { Component } from '@angular/core';
*/
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment'; // Importa environment
import * as mapboxgl from 'mapbox-gl';
//import * as mapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
/*


export class PrincipalComponent {

}
*/

 @Component({
   selector: 'app-mapa',
   templateUrl: './mapa.component.html',
   styleUrls: ['./mapa.component.css']
})

export class MapaComponent implements OnInit {
  // Se crea el titulo
  title = 'App-Articulos';

  // Se crea definición de diseño y propiedades
  map:mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11'
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

    const navControl = new mapboxgl.NavigationControl({
      visualizePitch: true
    })

    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat],
      //accessToken: environment.mapbox.mapboxAccessToken,
      attributionControl: false

    });

    this.map.addControl(navControl, 'top-right');
    

    // Geolocalización
    /*this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions:{
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    }));*/

    let geolocate = new mapboxgl.GeolocateControl({
      positionOptions:{
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    });

    this.map.addControl(geolocate, 'top-right');
    geolocate.on('geolocate', locateUser);

    this.map.on('load', function(){
      geolocate.trigger();
    })


    // Escala
    this.map.addControl(new mapboxgl.ScaleControl(), 'bottom-right')

    //full Screen
    this.map.addControl(new mapboxgl.FullscreenControl(), 'top-right')




  }
}

function locateUser(e: any){
  console.log("Lng : " + e.coords.longitude + " " + "Lat : " + e.coords.latitude)
}
