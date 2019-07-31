import { Component, OnInit, AfterContentInit, AfterContentChecked, ContentChild, ElementRef, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';

@Component({
  selector: 'app-other-lifecycle',
  templateUrl: './other-lifecycle.component.html',
  styleUrls: ['./other-lifecycle.component.scss']
})
export class OtherLifecycleComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @ContentChild('valueKey') valueKey: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log('value', this.valueKey);
    console.log('ngAfterContentInit: OtherLifecycleComponent');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked: OtherLifecycleComponent');
  }
}
