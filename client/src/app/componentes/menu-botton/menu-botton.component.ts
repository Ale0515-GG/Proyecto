import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-botton',
  templateUrl: './menu-botton.component.html',
  styleUrls: ['./menu-botton.component.css']
})
export class MenuBottonComponent {
menu:Array<any> = [
  {name:'Muted', icon:'uil uil-microphone'},
  {name:'Home', icon:'uil uil-estate'},
  {name:'Share', icon:'uil uil-share'},
];
}
