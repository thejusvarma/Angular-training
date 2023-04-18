import { Component } from '@angular/core';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
name:string;
dob:Date;
money:number;
gender:string
constructor()
{
  this.gender="";
  this.name = "tHejus";
  this.dob = new Date(2022,7,11);
  this.money = 300;
}
}
