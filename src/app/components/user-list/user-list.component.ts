import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input('users') users:any = {}; 
  @Input('fullName') fullName:any = {};
  @Input('phone') phone:number;

  constructor() { }

  ngOnInit() {
    console.log('users', this.users);
    console.log('fullName', this.fullName);
    console.log('phone', this.phone);
  }

}
