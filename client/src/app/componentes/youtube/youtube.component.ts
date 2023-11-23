/*import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent {

}
*/
import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/service/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  template: '<h1 id="titulo"></h1>',
  styleUrls: ['./youtube.component.css'],
})
export class YoutubeComponent implements OnInit {
  
  videos: any[] | undefined; // Almacena los datos de los videos
  videoUrl: SafeResourceUrl; // URL segura para el video

  opciones: string[] = ['SaludParaTi', 'Cuidado de la salud', 'Novedades dentro de la salud'];
  seleccion: string = '';
  
  constructor(private youtubeService: YoutubeService, private sanitizer: DomSanitizer) { 
    this.videoUrl = '';
  }


  
  ngOnInit(): void{
    //this.detectarHora();
    this.onChange();
  }

  // Detectar la hora en el saludo
  /*detectarHora() {
    const ahora = new Date();
    const hora = ahora.getHours();

    let periodo = '';

    if (hora >= 5 && hora < 12) {
      periodo = 'días';
    } else if (hora >= 12 && hora < 18) {
      periodo = 'tardes';
    } else {
      periodo = 'noches';
    }

    const titulo = document.getElementById('titulo');
    if (titulo) {
      titulo.innerText = `Buen${
        periodo === 'días' ? 'os' : 'as'
      } ${periodo}`;
    }
  }*/

  onChange(): void {
    if (this.seleccion === 'SaludParaTi') {
      this.youtubeService.getVideoF().subscribe((data: any) => {
        this.videos = data.items;
      });
    } else if (this.seleccion === 'Cuidado de la salud') {
      this.youtubeService.getVideoA().subscribe((data: any) => {
        this.videos = data.items;
      });
    } else if (this.seleccion === 'Novedades dentro de la salud') {
      this.youtubeService.getVideoI().subscribe((data: any) => {
        this.videos = data.items;
      });
    }
  }
  getVideoUrl(videoId: string): SafeResourceUrl {
    if (videoId) {
      const url = `https://www.youtube.com/embed/${videoId}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    return '';
  }
}
