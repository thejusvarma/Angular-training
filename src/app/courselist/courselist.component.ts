import { Component } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {
  courses:any=[];
  constructor(private courseService : CourseService)
  {
    // this.courses=[
    //   {"cid":'C001','cname':'Angular','cduration':5,'csme':'Kalpana'},
    //   {"cid":'C002','cname':'HTML5','cduration':1,'csme':'Kruthika'},
    //   {"cid":'C003','cname':'CSS3','cduration':1,'csme':'Sudha'},
    //   {"cid":'C004','cname':'Javascript','cduration':2,'csme':'Siddaram'},
    //   {"cid":'C005','cname':'Bootstrap','cduration':1,'csme':'Shipra'},
    //   {cid:'C006','cname':'NodeJS','cduration':3,'csme':'Kalpana'}
    // ];
    this.courses = this.courseService.courses
  }

  
}
