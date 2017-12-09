import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1,"第一个商品",30,3.5,"这是第一件商品哦",["电器原件","家电"]),
      new Product(2,"第二个商品",20,2.5,"这是第二件商品哦",["厨房","家电"]),
      new Product(3,"第三个商品",40,4.5,"这是第三件商品哦",["电器原件","灯"]),
      new Product(4,"第四个商品",50,2.5,"这是第四件商品哦",["维修","电脑配件"]),
      new Product(5,"第五个商品",60,1.5,"这是第五件商品哦",["清洁物品","洁厕液"]),
      new Product(6,"第六个商品",20,4.5,"这是第六件商品哦",["零食","辣条"]),
    ]
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string> ) 
    {

    }
}