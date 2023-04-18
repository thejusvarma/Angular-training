import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  constructor(private bookService: BookService){
  
  }
  bookdata:any=[]
  getBookData(){
    this.bookService.getBookData().subscribe((data)=>
    { 
      console.log(data);
        this.bookdata = data;
     });
}

}
