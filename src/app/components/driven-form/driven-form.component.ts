import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.scss']
})
export class DrivenFormComponent implements OnInit {

  frmUser: FormGroup;

  constructor(
    private _fromBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.frmUser = this._fromBuilder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      password: new FormControl(''),
      fullname: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      email: new FormControl('', Validators.pattern('[^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$]')),
      phone: new FormControl('')
    });
    this.frmUser.valueChanges.subscribe( res => console.log('change', res));
  }

  onSubmitForm() {
    console.log('==',  this.frmUser);
  }

  onResetForm() {
    this.frmUser.reset();
  }

}
