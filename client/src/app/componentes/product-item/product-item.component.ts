import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product:Product;

  constructor(private messageService: MessageService) {
    this.product = {} as Product;
  }

  ngOnInit(): void {
  
  }

  addToCart():void{
    this.messageService.sendMessage(this.product);
  }
}

