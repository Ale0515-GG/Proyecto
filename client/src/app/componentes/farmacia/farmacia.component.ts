import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var paypal:any;
@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.component.html',
  styleUrls: ['./farmacia.component.css']
})
export class FarmaciaComponent implements OnInit{
  @ViewChild('paypal', {static:true}) paypalElement! : ElementRef;

  producto = {
    descripcion : 'producto en venta',
    precio      : 599.99,
    img         : 'imagen de tu producto'

  }


  title = 'App-Articulos';
    ngOnInit(): void {
     paypal
     .Buttons()
     .render (this.paypalElement.nativeElement);
    }
}
