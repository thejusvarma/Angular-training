import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.css']
})
export class TestParentComponent implements OnInit,OnDestroy {
  constructor()
  {
    console.log("Parent constructor is called");
  }
  
  ngOnInit(): void {
    console.log("Parent oninit is called");

  }

  ngOnDestroy(): void {
    console.log("Parent ondestroy is called");
  }

  flag : boolean = false;
  toggle()
  {
    this.flag = !this.flag;
  }

}
