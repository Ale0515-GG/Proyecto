import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/models/cart-item-model';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/service/message.service';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems: CartItemModel[] = [];
  total=0;

  constructor(private messageService: MessageService,
    private storageService:StorageService){

  }

  ngOnInit(): void {
    if(this.storageService.existsCart()) {
      this.cartItems = this.storageService.getCart();
    }
    this.getItem();
    this.total = this.getTotal();
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
      this.total = this.getTotal();
      this.storageService.setCart(this.cartItems);
    });
  }

  getTotal(): number {
    let total = 0;
    this.cartItems.forEach(item =>{
      total += item.qty * item.productPrice;
    });
    return + total.toFixed(2);
  }

  vaciarCart(): void{
    this.cartItems =[];
    this.total=0;
    this.storageService.clear();
  }

  deleteItem(i:number):void{
    if(this.cartItems[i].qty >1){
      this.cartItems[i].qty--;
    }else{
      this.cartItems.splice(i,1);
    }
    this.total = this.getTotal();
    this.storageService.setCart(this.cartItems);
  }
}
