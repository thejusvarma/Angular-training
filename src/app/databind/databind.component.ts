import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent {
  streamname: string;
  myalign: string;
  username: string;

  // initialize

  constructor() {
    this.streamname = 'Cloud native Azure';
    this.myalign = 'right';
    this.username = '';
  }
  Clickme() {
    alert('Clicked');
  }
}
;