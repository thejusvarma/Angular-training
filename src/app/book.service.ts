import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  bookData:string;

  constructor(private bookClient:HttpClient) { 
    this.bookData = "http://localhost:3000/allbooks"
  }
  getBookData()
  {
      return this.bookClient.get(this.bookData);
  }
}
