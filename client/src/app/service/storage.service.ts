import { Injectable } from '@angular/core';
import { CartItemModel } from '../models/cart-item-model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { } 

  existsCart(): boolean{
    return localStorage.getItem('cart') != null;
  }

  setCart(cart: CartItemModel[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): CartItemModel[] {
    const cartString = localStorage.getItem('cart');
    if (cartString === null) {
      return [];
    }
  
    try {
      return JSON.parse(cartString) || [];
    } catch (error) {
      console.error('Error al parsear el carrito desde localStorage:', error);
      return [];
    }
  }
  

  clear(): void{
    localStorage.removeItem('cart');
  }
}
