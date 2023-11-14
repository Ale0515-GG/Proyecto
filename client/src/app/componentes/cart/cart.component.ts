import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/models/cart-item-model';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems: CartItemModel[] = [];

  constructor(private messageService: MessageService){

  }

  ngOnInit(): void {
    this.getItem();
  }

  getItem():void{
    this.messageService.getMessage().subscribe((product: Product) =>{
      let exists = false;
      this.cartItems.forEach(item =>{
        if (item.productId === product.id){
          exists = true
          item.qty++;
        }
      });
      if (!exists){
        const cartItem = new CartItemModel(product);
        this.cartItems.push(cartItem);
      }
    });
  }
}
