import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent {
  constructor()
  {

  }
  login(formdata:any)
  {
    alert("Welcome"+ formdata.username);
    alert("The secret code is :"+formdata.Security.otp);
  }
}
