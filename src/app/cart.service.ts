import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Iproducts[] = []
  price: number = 0
  numberItems: number = 0

  constructor() { }

  addtoCart(product: Iproducts) {
    if(this.items.find((val)=> val.name == product.name)){
      product.counter += 1;
    }else{
      this.items.push(product);
      product.counter = 1;
    }
  }

  addQtty(productId: number){
    this.items[productId].counter++;
    this.newPrice();
  }

  remQtty(productId: number){
    this.items[productId].counter--;
    this.newPrice();
  }

  newPrice() {
    this.price = 0
    for (let item of this.items) {
      this.price += item.price * item.counter;      
    }
    return this.price
  }

  newNumber() {
    this.numberItems = 0
    for (let item of this.items) {
      this.numberItems += item.counter;
    }
    return this.numberItems
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.price = 0
  }
}
