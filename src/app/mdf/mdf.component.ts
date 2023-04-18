import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent {
  loginForm : FormGroup;
  constructor(){
    //initialize the form group
    this.loginForm= new FormGroup({
      //form controls
      uname:new FormControl('',[Validators.required,Validators.minLength(8)]),
      pwd:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      Security: new FormGroup({
        captcha:new FormControl(),
        otp:new FormControl()
      })
    })
  }
  login(){
    console.log(this.loginForm.value);
  }

}
