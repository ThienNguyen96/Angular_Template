import { Component, OnInit, Input } from '@angular/core';
import { MetadataOverrider } from '@angular/core/testing/src/metadata_overrider';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  @Input('info')  userInfo: any;
  @Input('score') score: any;
  private _nameAuthor;

  @Input()
  set author(author : string){
    this._nameAuthor = author;
  }
  get author(){
    return this._nameAuthor;
  }

  constructor() { }

  ngOnInit() {
    console.log('nameAuthor', this.author);
  }

}
