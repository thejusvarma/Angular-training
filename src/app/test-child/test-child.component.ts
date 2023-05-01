import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit, OnDestroy {

  counter =0;
  interval : any;
  constructor()
  {
    console.log("Child constructor is called");
  }
  
  ngOnInit(): void {
    console.log("Child oninit is called");
    this.interval = setInterval(()=>{

      this.counter = this.counter+1;
      console.log(this.counter);
    },1000
    )
  }

  ngOnDestroy(): void {
    console.log("Child ondestroy is called");
    clearInterval(this.interval);
  }
  
}
