import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-For';
  listCity = ['HCM', 'HANOI', 'SEOUL', 'NEWYORK'];
  listDataServer = ['HCM', 'HANOI', 'SEOUL', 'NEWYORK','HATINH','MIRALMAL','TOKYO'];


  onLoadData(){
    this.listCity = this.listDataServer;
  }

  myTrackByFunction(index, item){
    return item;
  }
}
