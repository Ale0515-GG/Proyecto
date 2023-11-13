import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product [] =[
    new Product(1,'skyrim','lorem impsum',229.00, 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwbf24ce63/images/product/7501008499382_A.jpg?sw=473&sh=473&sm=fit')
  ]
  constructor() { }
}
