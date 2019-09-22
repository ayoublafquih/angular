import { Component } from '@angular/core';
import { Product } from './model/product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  total: number
  products: Product[]

  constructor() {
    this.total = 0
    this.products = [
      new Product("Product 1", environment.description, environment.photo, 10),
      new Product("Product 2", environment.description, environment.photo, 20),
      new Product("Product 3", environment.description, environment.photo, 30),
      new Product("Product 4", environment.description, environment.photo, 40),
    ]
  }

  addProduct(product){
    this.products.push(product)
  }

  updatePrice(price) {
    this.total += price
  }
}
