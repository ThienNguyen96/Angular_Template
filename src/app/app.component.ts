import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Product} from './modal/product.class';
import {ProductService} from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'Routing';
  products: Product[] = [];

  constructor(
    private router: Router,
    public productService: ProductService
  ){

  }

  navigate(url: string) {
    this.router.navigate([`/${url}`]);
    // others way is
    // this.router.navigate([url]);
  }
}
