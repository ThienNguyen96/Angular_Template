import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teamplate-angular';
  userInfo = {
    name : 'mon',
    age : '25',
    gender : 'male',
    married : true
  };
  nameAuthor =  'Mon';
  score = 9;
  listUserDisplay = [
    {
      id: 1,
      name: 'Mon',
      address: 'HANOI'
    },
    {
      id: 2,
      name: 'Messi',
      address: 'Barcelona'
    },
    {
      id: 3,
      name: 'Neymar',
      address: 'Brazil'
    }
  ];
}
