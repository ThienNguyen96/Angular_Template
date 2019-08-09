import { Injectable } from '@angular/core';
import { Product } from './../modal/product.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Product[] = [
    {
      id: 1,
      name: 'Redmi K20 Pro',
      price: 80000000,
      status: true
    },
    {
      id: 2,
      name: 'IP 6 Plus',
      price: 90000000,
      status: false
    },
    {
      id: 3,
      name: 'Redmi Note 5',
      price: 30000000,
      status: true
    }
  ];
  constructor() { }

  getAllProducts(name?: string, price?: number) {
    if (name) {
      this.products = this.products.filter(x => {
        return x.name.toLowerCase().includes(name.toLowerCase());
      });
    } else if (name && price) {
      this.products = this.products.filter(x => {
        return x.name.toLowerCase().includes(name.toLowerCase()) && x.price === price;
      });
    }
    return this.products;
  }

  getProductByID(id) {
    const result = this.products.filter(item => item.id === id);
    return result;
  }
}
