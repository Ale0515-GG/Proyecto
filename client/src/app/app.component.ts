import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var paypal:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  /*implements OnInit*/{

  @ViewChild('paypal', {static:true}) paypalElement! : ElementRef;

  producto = {
    descripcion : 'producto en venta',
    precio      : 599.99,
    img         : 'imagen de tu producto'

  }
  title = 'App-Articulos';
  // ngOnInit(): void {
  //   paypal
  //   .Buttons({
  //     cresteOrder: (data,actions =>{
  //       return actions.order.create({
  //         purchase_units:[
  //           {
  //           description: this.producto.descripcion,
  //           amount     :{
  //             currency_code:'MXN',
  //             value        : this.producto.precio
  //           }
  //         }
  //       ]
  //       })
  //     },
  //     onApprove: async(data,actions) =>{
  //       const order = await actions.order.capture();
  //       console.log(order);
  //     },
  //     onError: err =>
  //   })
  //   .render(this.paypalElement.nativeElement);
  // }
}
