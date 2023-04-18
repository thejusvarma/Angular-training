import { Component } from '@angular/core';
import { isThisTypeNode } from 'typescript';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  sampledata:any=[];
  flag:boolean;
  items:any=[];
  selectedValue: string
  constructor()
  {
    this.flag = true;
    this.sampledata = [
      {id:1,name:"T",roll:12344},
      {id:2,name:"w",roll:12324},
      {id:3,name:"s",roll:1264},
      {id:4,name:"h",roll:1234784},
      {id:5,name:"f",roll:12434}

    ];
      this.items = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}]; 
      this.selectedValue= 'One';  
  }
  toggle()
  {
    this.flag = !this.flag;
  }
}
