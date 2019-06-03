import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teamplate-angular';
  isEnabledClasses = false;

  constructor(){

  }

  onToggleStyle(){
    this.isEnabledClasses = ! this.isEnabledClasses;
  }
  setClasses(){
    return {
      'border-blue': this.isEnabledClasses,
      'red': this.isEnabledClasses,
      'pd-10': this.isEnabledClasses
    }
  }
}
