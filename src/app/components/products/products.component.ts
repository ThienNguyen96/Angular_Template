import { Component, OnInit } from '@angular/core';
import {Product} from './../../modal/product.class';
import {ProductService} from './../../service/product.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  name: string;
  price: string;
  constructor(
    private productService: ProductService,
    private router: Router,
    private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.queryParams.subscribe((res) => {
      const name = res[`name`];
      const price = res[`price`];
      this.name = name;
      this.price = price;
      this.products = this.productService.getAllProducts(name, price);
    });
    this.products = this.productService.getAllProducts();
  }

  onSearch() {
    this.router.navigate(['/products'], {queryParams: {name: this.name ? this.name : '', price: this.price ? this.price : ''}});
  }

}
