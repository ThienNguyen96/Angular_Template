import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChange, DoCheck } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  @Input('total') total: number;

  title = "lifeCycle Component";

  constructor() {
    console.log('constructor is running');
   }

  ngOnInit() {
    console.log('ngOninit is running');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy is running');
  }
  ngOnChanges(SimpleChange){
    console.log('SimpleChange', SimpleChange);
    console.log('ngOnChanges is running');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
  }

}
