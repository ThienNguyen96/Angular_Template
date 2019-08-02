import { Component, OnInit } from '@angular/core';
import { LoggingService } from './../../services/logging.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(
    private lgService: LoggingService
  ) { }

  ngOnInit() {
  }

  onClick(){
    this.lgService.logging();
  }

  // logging(){
  //   console.log('hello');
  // }
}
