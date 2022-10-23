import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input("product") product!: Product;
  @Output() removed = new EventEmitter<Product>()

  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.removed.emit(this.product)
  }


}
