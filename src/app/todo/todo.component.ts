import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tododata:any = [];
  constructor(private todoService: TodoService){
  }
  //comsume the httpservice and display the users data
  getData(){
    this.todoService.getData().subscribe((data)=>
    { 
      console.log(data);
        this.tododata = data;
     });
}
}
