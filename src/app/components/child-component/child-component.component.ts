import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MetadataOverrider } from '@angular/core/testing/src/metadata_overrider';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  @Input('info')  userInfo: any;
  @Input('score') score: any;
  txtFullName = '';
  txtPhone;
  private _nameAuthor;

  @Output('txtFullNameValue') onHandleFullName = new EventEmitter();
  @Output('txtPhoneValue') onHandlePhone = new EventEmitter<number>();

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

  onSubmitForm(){
    this.onHandleFullName.emit(this.txtFullName);
    this.onHandlePhone.emit(this.txtPhone);
  }
}
