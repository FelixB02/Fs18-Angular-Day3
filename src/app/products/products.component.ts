import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import { Iproducts } from '../Iproducts';
import { FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Iproducts> = products;

  constructor() { }

  petform: any = new FormGroup({
    picture: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    counter: new FormControl('', Validators.required),
  });

  pushPet() {
    console.log(this.petform.value);
    
    this.products.push(this.petform.value)
  }

  ngOnInit(): void {
  }
}
