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
      phone: '42342343'
    },
    {
      id: 2,
      name: 'Messi',
      phone: '435345435'
    },
    {
      id: 3,
      name: 'Neymar',
      phone: '435435'
    }
  ];
  txtFullName = '';
  txtPhone;

  onGetFullName(value){
    this.txtFullName = value;
  }
  onGetPhoneValue(value){
    this.txtPhone = value;
  }
}
