import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tododata:string;
  constructor(private httpClient : HttpClient) { 
    this.tododata = "https://jsonplaceholder.typicode.com/todos"
  }
  
  getData()
  {
      return this.httpClient.get(this.tododata);
  }
}
