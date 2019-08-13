import { Component, OnInit, Input } from '@angular/core';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-error-validate',
  templateUrl: './error-validate.component.html',
  styleUrls: ['./error-validate.component.scss']
})
export class ErrorValidateComponent implements OnInit {

  @Input('control') control;
  @Input('control-name') controlNameBinding;

  constructor() { }

  ngOnInit() {
  }

  get message() {
    for(let err in this.control.errors) {
      if(this.control.dirty) {
        return this.getMessageError(err, this.control.errors[err]);
      }
    }
    return null;
  }

  getMessageError(err, value) {
    let mess = {
      'required': `${this.controlNameBinding} is required`,
      'minlength': `Min Length: ${value.requiredLength} character`,
      'maxlength': `Max Length: ${value.requiredLength} character`,
      'pattern': `${this.controlNameBinding} is not valid`
    };
    return mess[err];
  }

}
