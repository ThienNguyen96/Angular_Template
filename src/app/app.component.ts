import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'Routing';

  constructor(
    private router: Router,
  ){

  }

  navigate(url: string) {
    this.router.navigate([`/${url}`]);
    // others way is
    // this.router.navigate([url]);
  }
}
