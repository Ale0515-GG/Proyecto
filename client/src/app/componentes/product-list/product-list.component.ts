import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor (private productService:ProductService){

  }
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts():void{
    this.products = this.productService.getProducts();
  }
}
