import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {MockData} from "../../data/mock-product-data";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor() {
    this.products = MockData.products;
    console.log(this.products)
  }

  ngOnInit(): void {
  }

  deleteProduct(product: Product){
    let index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }



}
