import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  LoginForm = new FormGroup({
    user : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required])
  });

  login()
  {
    console.warn(this.LoginForm.value);
  }

  get user()
  {
    return this.LoginForm.get('user');
  }

  
  get password()
  {
    return this.LoginForm.get('password');
  }
}
