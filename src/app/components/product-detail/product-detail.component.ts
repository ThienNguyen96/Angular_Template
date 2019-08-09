import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from './../../modal/product.class';
import { ProductService } from './../../service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product = null;
  subscription: Subscription;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.handleParams();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  handleParams() {
    this.subscription = this.router.params.subscribe(res => {
      const id = (+res.id);
      this.product = this.productService.getProductByID(id);
    });
  }

  handleParamsRouteBySnapshot() {
    const id = (+this.router.snapshot.params[`id`]);
    this.product = this.productService.getProductByID(id);
  }

}
