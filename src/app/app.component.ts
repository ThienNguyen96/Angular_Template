import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teamplate-angular';
  isEnabled = false;

  onToggleStyle(){
    this.isEnabled = !this.isEnabled;
  }
  setClasses(){
    return{
      'border' : this.isEnabled ? '1px solid blue' : '',
      'padding.px' : this.isEnabled ? '10' : '',
      'color' : this.isEnabled ? 'red' : ''
    }
  }
}
