import { Component } from '@angular/core';
import { HttpService } from '../http.service'
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
  userdata : any = []
  constructor(private httpService: HttpService){
  }
  //comsume the httpservice and display the users data
  getUsers(){
    this.httpService.getUsers().subscribe((data)=>
    {
      this.userdata = data;
      console.log(data);
  });
}
}
