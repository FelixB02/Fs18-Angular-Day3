import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Iproducts } from '../Iproducts';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Iproducts[] = [];
  price: number = 0
  numberItems: number = 0

  constructor(private cartService: CartService) {}

  addQuantity(id: number) {
    this.cartService.addQtty(id);
    this.price = this.cartService.price;
  }

  remQuantity(id: number) {
    this.cartService.remQtty(id)
    this.price = this.cartService.price;
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
    this.price = this.cartService.newPrice();
  }

  ngOnInit():void {
    this.items = this.cartService.getItems();
    this.price = this.cartService.newPrice();
    this.numberItems = this.cartService.newNumber();
  }
  
}
