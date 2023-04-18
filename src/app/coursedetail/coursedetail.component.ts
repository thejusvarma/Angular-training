import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CourseService } from '../course.service';



@Component({

  selector: 'app-coursedetail',

  templateUrl: './coursedetail.component.html',

  styleUrls: ['./coursedetail.component.css']

})

export class CoursedetailComponent implements OnInit {



  courseno:any;

  course:any;

  //consume the course service at the constructor

  //inject the ActivatedRoute ( used to get the value from the parameter that is passed in the route)

  constructor(private courseService: CourseService, private route:ActivatedRoute){
    //this.courseno='';
  }
  //ngOnInit() method - this is called when the component is initialized
  ngOnInit(): void {
    this.route.paramMap.subscribe( (params) =>{
      //subscribe the parameter passd in the route
      this.courseno= params.get('cno');
      //the value from the route to be passed into the service method
      //the service method returns the result with the selected courseid passed
      this.course=this.courseService.getCourseById(this.courseno);    
      console.log(this.course);
    })
  }

}