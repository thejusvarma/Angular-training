import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses:any=[];
  coursedata:any;
  constructor()
  {
    this.courses=[
      {"cid":'C001','cname':'Angular','cduration':5,'csme':'Kalpana'},
      {"cid":'C002','cname':'HTML5','cduration':1,'csme':'Kruthika'},
      {"cid":'C003','cname':'CSS3','cduration':1,'csme':'Sudha'},
      {"cid":'C004','cname':'Javascript','cduration':2,'csme':'Siddaram'},
      {"cid":'C005','cname':'Bootstrap','cduration':1,'csme':'Shipra'},
      {"cid":'C006','cname':'NodeJS','cduration':3,'csme':'Kalpana'}
    ];
  }

  //method to display the course based on courseid

  getCourseById(courseid:string){
    for(let i=0;i<this.courses.length;i++){
      //checkthe condition for a matched course id
      if(this.courses[i].cid == courseid){
        //when a matched course id occurs store the result in the coursedata
        this.coursedata = this.courses[i];
        //return the coursedata
        return this.coursedata;
      }
    }
  }
}
