import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Iproducts[] = []

  constructor() { }

  addtoCart(product: Iproducts) {
    if(this.items.find((val)=> val.name == product.name)){
      product.counter += 1;
    }else{
      this.items.push(product);
      product.counter = 1;
      alert("Added to Cart")
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
