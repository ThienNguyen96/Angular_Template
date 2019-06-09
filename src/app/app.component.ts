import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('txtName') name: ElementRef;
  title = 'teamplate-angular';

  getData(txtName: ElementRef){
    console.log('value', txtName); 
  }
  onGetData(){
    console.log('name is', this.name.nativeElement.value);
  }
}
