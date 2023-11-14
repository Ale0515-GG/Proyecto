import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product [] =[
    new Product(1,'Antiinflamatorio Flanax 550 mg Naproxeno 12 Tabletas',229.00, 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dwbf24ce63/images/product/7501008499382_A.jpg?sw=473&sh=473&sm=fit'),
    new Product(2,'Jarabe Neo Melubrina Sabor Frambuesa 100 ml',136.80, 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw7ebb252f/images/product/7501165000315_A.jpg?sw=473&sh=473&sm=fit'),
    new Product(3,'Tempra Infantil Jarabe Sabor Fresa 120 ml',157.50, 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw9edbd4e2/images/product/7501058714305_A.jpg?sw=473&sh=473&sm=fit'),
    new Product(4,'Aspirina Protec 100mg Tab 28',102.60, 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw27b647e7/images/product/7501318612655_A.jpg?sw=473&sh=473&sm=fit'),
    new Product(5,'Neuralin Sol Iny con 2 Pzas',129.00, 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw8b04b0d8/images/product/7501088505126_A.jpg?sw=473&sh=473&sm=fit'),
    new Product(6,'Krytan Tek Ofteno 20 mg/5 mg/2 mg Solución 5 ml',839.00, 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw487c0811/images/product/0736085905373_A.jpg?sw=473&sh=473&sm=fit'),
    new Product(7,'Troferit 300mg Jbe 120 ml',163.00, 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw19a6fe5e/images/product/7501088575396_A.jpg?sw=473&sh=473&sm=fit'),
    new Product(8,'Gpp Topiramato 25 Mg C/20 Tab',95.00, 'https://www.soriana.com/dw/image/v2/BGBD_PRD/on/demandware.static/-/Sites-soriana-grocery-master-catalog/default/dw79f6f3db/images/product/7502216796553_A.jpg?sw=473&sh=473&sm=fit'),
  ]
  constructor() { 
  }

  getProducts(): Product[]{
    return this.products;
  }
}
