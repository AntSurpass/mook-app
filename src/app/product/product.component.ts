import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from "../shared/product.service";
import { FormControl } from "@angular/forms";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Product [];
  private keyValue: string;
  private titleFilter:FormControl = new FormControl();
  constructor(private productservice: ProductService) { 
    this.titleFilter
    .valueChanges
    .debounceTime(500)
    .subscribe(
     value => this.keyValue = value
    );
  }

  ngOnInit() {
    this.products = this.productservice.getAllProduct();
  }
}