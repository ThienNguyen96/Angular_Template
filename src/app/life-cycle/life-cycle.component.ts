import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log('constructor is running');
    // we only inject services in to constructor 
  }

  ngOnInit() {
    console.log('ngOnInit is running');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy is running');
  }
}
