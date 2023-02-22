import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { Iproducts } from '../Iproducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Iproducts> = products;

  constructor() { }

  ngOnInit(): void {
  }
}
