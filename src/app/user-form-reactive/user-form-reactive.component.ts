import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {RegisteredUser} from '../model/RegisteredUser';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-user-form-reactive',
  templateUrl: './user-form-reactive.component.html',
  styleUrls: ['./user-form-reactive.component.css']
})
export class UserFormReactiveComponent implements OnInit {

  registerForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  user: RegisteredUser = new RegisteredUser();

  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [''],
      surname: [''],
      email: [''],
      phone: ['', Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\.\\0-9]*$')],
      pass: this.formBuilder.group({
        password: ['', Validators.pattern('^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&-]).{8,}$')],
        confirmPassword: [''],
      }, {validator: this.checkPasswords}),
      pet: [''],
      address: this.formBuilder.group({
        city: [''],
        street: [''],
        building: [''],
        flatNo: [''],
      }),
      consents: this.formBuilder.group({
        newsletter: [''],
        sms: [''],
      })
    });
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmPassword.value;

    return pass === confirmPass ? null : {notSame: true};
  }

  display() {
    console.log(this.user);
  }
}
