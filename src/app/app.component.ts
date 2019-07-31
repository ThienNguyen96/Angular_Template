import { Component, AfterViewInit, AfterViewChecked, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,AfterViewChecked {
  @ViewChild('arrAfter') arrAfter;

  title = 'teamplate-angular';
  isShowing = true;
  nb1: number;
  nb2: number;
  total: number = 0;
  content: string = 'ngContent';
  products = [
    {
      id: 1,
      name: 'IP1'
    },
    {
      id: 2,
      name: 'IP2'
    },
    {
      id: 3,
      name: 'IP3'
    },
    {
      id: 4,
      name: 'IP4'
    }
  ];
  
  onClick(value){
    this.content = value;
  }

  toggleDisplay(){
    this.isShowing = !this.isShowing;
  }

  tinhTong(){
    this.total = this.nb1 + this.nb2;
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit: OtherLifecycleComponent');
    console.log('arrAfter Init', this.arrAfter);
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked: OtherLifecycleComponent');
    console.log('arrAfter Checked', this.arrAfter);
  }

  addProduct(value){
    this.products.push({
      id: 12,
      name: value
    });
  }
}
