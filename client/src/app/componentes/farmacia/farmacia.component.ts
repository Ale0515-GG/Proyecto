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
     .Buttons({
      createOrder: (data:any,actions:any) => {
        return actions.order.create({
          purchase_units:[
            {
              description: this.producto.descripcion,
              amount     :{
                currency_code: 'MXN',
                value        : this.producto.precio
              }
            }
          ]
        })
      },
      onApprove: async(data:any,actions:any) =>{
        const order = await actions.order.capture();
        console.log(order);
      },
      onError: (err: any) => {
        console.log(err);
      }
     })
     .render (this.paypalElement.nativeElement);
    }
}
