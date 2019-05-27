import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teamplate-angular';
  imgLink = 'https://fcbarcelona-static-files.s3.amazonaws.com/fcbarcelona/photo/2018/09/21/bb29cbe2-e2a6-450b-9134-0ded29c89f37/10-MESSI-JOC.jpg';
  isBorder = true;
  isBackground = false;
}
