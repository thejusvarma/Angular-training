import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  userEndPoint:string;
  constructor(private httpClient : HttpClient) { 
    this.userEndPoint = "https://jsonplaceholder.typicode.com/users"
  }
  
  getUsers()
  {
      return this.httpClient.get(this.userEndPoint);
  }
}

