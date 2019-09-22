import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input("product") data: Product
  @Output("eventPrice") price = new EventEmitter<number>()
  constructor() { }
  ngOnInit() {
  }
  addToBasket() {
    this.price.emit(this.data.price)
  }

}
