import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teamplate-angular';
  isShowing = true;
  nb1: number;
  nb2: number;
  total: number = 0;
  

  toggleDisplay(){
    this.isShowing = !this.isShowing;
  }

  tinhTong(){
    this.total = this.nb1 + this.nb2;
  }
}
