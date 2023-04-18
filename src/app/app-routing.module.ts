import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursedetailComponent } from './coursedetail/coursedetail.component';
import { CoursesComponent } from './courses/courses.component';
import { DatabindComponent } from './databind/databind.component';
import { DirectivesComponent } from './directives/directives.component';
import { HttpComponent } from './http/http.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';
import { BookComponent } from './book/book.component';
import { BlossomComponent } from './blossom/blossom.component';

const routes: Routes = [
  {path:'courses', component:CoursesComponent,children:[
    {path:':cno',component:CoursedetailComponent}
  ]},
  // {path:'courses/:cno', component:CoursedetailComponent},
  {path:'databind', component:DatabindComponent},
  {path:'login', component:LoginComponent},
  {path:'directives', component:DirectivesComponent}, 
  {path:'todo', component:TodoComponent},
  {path:'http', component:HttpComponent},
  {path:'tdf', component:TdfComponent},
  {path:'mdf', component:MdfComponent},
  {path:'book', component:BookComponent},
  {path:'blossom', component:BlossomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
