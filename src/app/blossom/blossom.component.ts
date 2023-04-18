
import { Component } from '@angular/core';
import { BlossomService } from '../blossom.service';

@Component({
  selector: 'app-blossom',
  templateUrl: './blossom.component.html',
  styleUrls: ['./blossom.component.css']
})
export class BlossomComponent {
  name:string;
  constructor(private bookService: BlossomService){
    this.name="";
  }

  blossomdata:any=[]
  
  getBlossomData(){
    this.bookService.getBlossomData().subscribe((data)=>
    { 
      console.log(data);
        this.blossomdata = data;
    });
}
}
