import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teamplate-angular';
  sortBy: string = name;
  sortValue = 1;

  products = [
    {
      id: 1,
      name: 'Iphone 7 Plus',
      price: 500
    },
    {
      id: 2,
      name: 'Iphone 6 Plus',
      price: 400
    },
    {
      id: 3,
      name: 'Samsung galaxy S7',
      price: 450
    },
    {
      id: 4,
      name: 'Oppo',
      price: 100
    },
    {
      id: 5,
      name: 'Nokia',
      price: 530
    },
    {
      id: 6,
      name: 'BlackBerry',
      price: 900
    }
  ];

  onSort(col){
    this.sortBy = col;
    this.sortValue = - this.sortValue;
  }
}
